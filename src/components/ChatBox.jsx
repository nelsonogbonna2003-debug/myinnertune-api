import { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import OpenAI from "openai";
import { supabase } from "../lib/supabaseClient";
import axios from "axios";

const translations = {
  en: {
    placeholder: "Type a message",
    send: "Send",
    download: "Download PDF",
    pay: "Upgrade with Stripe"
  },
  de: {
    placeholder: "Nachricht eingeben",
    send: "Senden",
    download: "PDF herunterladen",
    pay: "Mit Stripe upgraden"
  }
};

// ✅ Setup OpenAI client (frontend use)
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

function ChatBox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [language, setLanguage] = useState("en");
  const [token, setToken] = useState("");

  // ✅ Get Supabase session
  useEffect(() => {
    const fetchToken = async () => {
      const { data } = await supabase.auth.getSession();
      setToken(data?.session?.access_token || "");
    };
    fetchToken();
  }, []);

  // ✅ Translate text (LibreTranslate API)
  const translateInput = async (text, targetLang) => {
    const res = await axios.post(
      "https://libretranslate.de/translate",
      {
        q: text,
        source: "en",
        target: targetLang,
        format: "text"
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }
    );
    return res.data.translatedText;
  };

  // ✅ Send message directly to OpenAI
  const sendMessage = async () => {
    let translatedInput = input;
    if (language === "de") {
      translatedInput = await translateInput(input, "de");
    }
    if (!translatedInput.trim()) return;

    const userMessage = { role: "user", content: translatedInput };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          ...messages.map((m) => ({
            role: m.role === "ai" ? "assistant" : m.role,
            content: m.content
          })),
          userMessage

        ]
      });

       const aiResponse = completion.choices[0].message.content;

      const aiMessage = {
        role: "ai",
        content: aiResponse
      };
    //   const aiMessage = {
    //     role: "ai",
    //     content: completion.choices[0].message.content
    //   };

      setMessages((prev) => [...prev, aiMessage]);
    //   downloadPDF(aiResponse);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "⚠ Error connecting to AI" }
      ]);
    }
  };

  // ✅ Download chat as PDF
//    const downloadPDF = (aiText) => {
//     const doc = new jsPDF();
//     doc.text(`AI: ${aiText}`, 10, 20);
//     doc.save("ai-response.pdf");
//   };
const downloadPDF = () => {
  const doc = new jsPDF();
  
  // Export the whole conversation
  messages.forEach((m, i) => {
    doc.text(`${m.role.toUpperCase()}: ${m.content}`, 10, 20 + i * 10);
  });

  doc.save("ai-chat.pdf");
};

  // ✅ Stripe checkout (no backend, placeholder)
  const redirectToStripe = () => {
    window.location.href = "https://buy.stripe.com/bJedRa4MfdlhfZsdI20Ny00"; // replace with real Checkout link
  };

  return (
    <div> 
        <h2 className="text-white text-[20px] text-center mt-[20px]">Ask AI</h2> 
        <div className="fixed bottom-5 right-5 bg-white p-4 w-[30%] shadow-lg rounded-2xl sm:w-[50%] md:w-[60%] lg:w-[40%]"> 
            <select value={language} onChange={e => setLanguage(e.target.value)} className="border p-2 w-full mb-2 rounded" > 
            <option value="en">English</option> 
            <option value="de">Deutsch</option> </select> 
            <div className="h-60 overflow-y-auto border-b mb-2"> {messages.map((m, i) => ( <p key={i} className={m.role === "user" ? "text-right" : "text-left"}> 
                <span className="font-bold">{m.role}: </span>{m.content} </p> ))} 
            </div> 
            <input value={input} onChange={e => setInput(e.target.value)} placeholder={translations[language]?.placeholder || "Type a message"} className="border p-2 w-full mb-2 rounded" /> <div className="flex gap-2"> 
            <button onClick={sendMessage} className="bg-green-600 text-white px-3 py-1 rounded"> {translations[language].send} </button> 
              <button
                onClick={downloadPDF}    
                className="text-sm text-blue-600 underline"
            >
                {translations[language].download}
            </button>
                
            </div> 
            <button onClick={redirectToStripe} className="mt-2 w-full bg-purple-900 text-white px-3 py-2 rounded"> {translations[language].pay} </button> 
            </div> </div>
  );
}

export default ChatBox;
