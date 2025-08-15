export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Simulate signup success
    return res.status(200).json({ message: "Signup successful", email });
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}

