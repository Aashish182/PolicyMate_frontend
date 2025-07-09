

import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const RebuttalPage = () => {
  const [reason, setReason] = useState("");
  const [file, setFile] = useState(null);
  const [rebuttal, setRebuttal] = useState(null);
  const [clauses, setClauses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!reason && !file) {
      alert("Please provide a reason or upload a rejection PDF.");
      return;
    }

    const form = new FormData();
    if (reason) form.append("reason", reason);
    if (file) form.append("pdf", file);
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/rebuttal",
        form
      );
      setRebuttal(res.data.rebuttal || "No rebuttal generated.");
      setClauses(res.data.matched_clauses || []);
      setError("");
    } catch (err) {
      console.error("❌ Backend error:", err);
      setError("Error generating rebuttal. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-yellow-50 py-12 px-4 font-sans">
      <div className="max-w-3xl mx-auto bg-white border border-rose-200 p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-rose-800 text-center mb-6">
          ✍️ Write a Friendly Rebuttal Letter
        </h2>

        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Why was your claim rejected? Tell us your side in simple words..."
          rows={5}
          className="w-full p-4 text-base border border-rose-300 rounded-lg bg-rose-50 mb-5 resize-y focus:outline-none focus:ring-2 focus:ring-rose-400"
        />

        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-5 text-sm"
        />

        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-rose-600 text-white font-semibold rounded-full hover:bg-rose-700 transition duration-300 shadow-md"
        >
          {loading ? "Generating..." : "Generate Rebuttal"}
        </button>

        {error && (
          <p className="text-red-600 mt-4 text-center font-medium">{error}</p>
        )}

        {rebuttal && (
          <div className="mt-10 bg-rose-50 border border-rose-200 p-6 rounded-xl text-base leading-relaxed text-rose-900">
            <h3 className="text-xl font-bold mb-4">📄 Suggested Rebuttal</h3>
            <ReactMarkdown>{rebuttal}</ReactMarkdown>

            {clauses.length > 0 && (
              <>
                <h4 className="mt-6 font-semibold text-lg">📌 Matched Clauses</h4>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  {clauses.map((clause, index) => (
                    <li key={index}>{clause}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
      <a
        href="/"
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 px-5 py-2 bg-rose-600 text-white rounded-full font-semibold hover:bg-rose-700 transition-all shadow-lg"
      >
        🔙 Back to Home
      </a>
    </div>
  );
};

export default RebuttalPage;
