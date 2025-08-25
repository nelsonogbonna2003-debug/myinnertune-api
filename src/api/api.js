import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import PDFDocument from 'pdfkit';
import { OpenAI } from 'openai';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

app.use(cors({ origin: CLIENT_ORIGIN, credentials: true }));
app.use(express.json({ limit: '1mb' }));

// In-memory demo stores (replace with DB in production)
const sessions = new Map(); // sessionId -> { userId, email, messages, createdAt }
const feedbacks = [];       // array of { userId, email, message, rating, createdAt }

// --------- SUPABASE CLIENT ---------
const supabase = createClient(
  process.env.SUPABASE_URL,         // e.g. https://uupeexgttlbfunjlttkr.supabase.co
  process.env.SUPABASE_SERVICE_KEY  // Service role key (server-side only)
);

// --------- AUTH MIDDLEWARE (Supabase JWT) ---------
async function auth(req, res, next) {
  const hdr = req.headers.authorization || '';
  const token = hdr.startsWith('Bearer ') ? hdr.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Missing token' });

  const { data, error } = await supabase.auth.getUser(token);

  if (error || !data?.user) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }

  req.user = data.user; // contains id, email, etc
  next();
}

// --------- PLACEHOLDER ---------
app.get('/api/placeholder', (req, res) => {
  res.json({ message: 'API is up 🚀' });
});

// --------- SAVE SESSION ---------
app.post('/api/save-session', auth, (req, res) => {
  const { sessionId, messages } = req.body || {};
  if (!sessionId || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'sessionId + messages[] required' });
  }

  sessions.set(sessionId, {
    userId: req.user.id,
    email: req.user.email,
    messages,
    createdAt: new Date().toISOString(),
  });

  res.json({ success: true });
});

// --------- SAVE FEEDBACK ---------
app.post('/api/save-feedback', auth, (req, res) => {
  const { message, rating } = req.body || {};
  feedbacks.push({
    userId: req.user.id,
    email: req.user.email,
    message: message || '',
    rating: Number(rating) || null,
    createdAt: new Date().toISOString(),
  });
  res.json({ success: true });
});

// --------- CHATGPT (OpenAI) ---------
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/api/chatgpt', auth, async (req, res) => {
  const { prompt } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'prompt is required' });

  try {
    let replyText = '';

    if (process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY.startsWith('sk-')) {
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You are a helpful assistant. Offer practical, safe, non-diagnostic guidance. For medical issues, include a brief disclaimer to seek professional care for urgent or serious symptoms.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.4,
      });
      replyText = completion.choices?.[0]?.message?.content?.trim() || 'Sorry, I could not generate a response.';
    } else {
      // Fallback mock if no key configured
      replyText = `Demo response to: "${prompt}"\n\n• Identify the key issue\n• Suggest 2–3 safe steps to try\n• If health-related: seek professional care for urgent symptoms.`;
    }

    res.json({ success: true, reply: replyText });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'AI error' });
  }
});

// --------- CREATE PDF ---------
app.post('/api/create-pdf', auth, (req, res) => {
  const { content, title = 'AI Solution' } = req.body || {};
  if (!content) return res.status(400).json({ error: 'content required' });

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="${title.replace(/[^a-z0-9_-]+/gi, '_')}.pdf"`);

  const doc = new PDFDocument({ margin: 48 });
  doc.pipe(res);
  doc.fontSize(20).text(title, { align: 'center' });
  doc.moveDown();
  doc.fontSize(12).text(content, { align: 'left' });
  doc.end();
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
