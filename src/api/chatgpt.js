// import { useState } from "react";

// export default function AIChat() {
//   const [loading, setLoading] = useState(false);
//   const [answer, setAnswer] = useState("");
//   const [pdf, setPdf] = useState("");

//   async function handleAsk() {
//     setLoading(true);
//     const res = await fetch("/api/chatgpt", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         prompt: "Explain meditation benefits",
//         language: navigator.language || "English",
//       }),
//     });

//     const data = await res.json();
//     setAnswer(data.text);
//     setPdf(data.pdf);
//     setLoading(false);
//   }

//   return (
//     <div className="p-4">
//       <button onClick={handleAsk}>
//         {loading ? "Thinking..." : "Ask AI"}
//       </button>
//       <p>{answer}</p>
//       {pdf && (
//         <a href={pdf} download="answer.pdf">
//           Download PDF
//         </a>
//       )}
//     </div>
//   );
// }