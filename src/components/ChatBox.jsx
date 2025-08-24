import { useState } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";


export default function ChatBox() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);


    const sendMessage = async () => {
    const userMessage = { role: "user", content: input };
        setMessages([...messages, userMessage]);
        setInput("");


    const res = await axios.post("http://localhost:5003/api/chatgpt", { message: input });
    const aiMessage = { role: "ai", content: res.data.reply };
        setMessages(m => [...m, aiMessage]);
    };


    const downloadPDF = () => {
    const doc = new jsPDF();
        let y = 10;
        messages.forEach(msg => {
        doc.text(`${msg.role.toUpperCase()}: ${msg.content}`, 10, y);
        y += 10;
    });
    doc.save("chat.pdf");
    };


    return (
        <div className="fixed bottom-5 right-5 bg-white p-4 w-80 shadow-lg rounded-2xl">
            <div className="h-60 overflow-y-auto border-b mb-2">
                {messages.map((m, i) => (
                <p key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                    <span className="font-bold">{m.role}: </span>{m.content}
                </p>
            ))}
            </div>
                <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type a message"
                className="border p-2 w-full mb-2 rounded"
                />
            <div className="flex gap-2">
                <button onClick={sendMessage} className="bg-green-600 text-white px-3 py-1 rounded">Send</button>
                <button onClick={downloadPDF} className="bg-gray-600 text-white px-3 py-1 rounded">Download PDF</button>
            </div>
        </div>
    );
}