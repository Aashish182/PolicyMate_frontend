import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const VerifyPage = () => {
  const [claim, setClaim] = useState("");
  const [file, setFile] = useState(null);
  const [verifier, setVerifier] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!claim || !file) {
      alert("Please tell us what the agent said and upload the policy PDF.");
      return;
    }

    const form = new FormData();
    form.append("claim", claim);
    form.append("pdf", file);

    setLoading(true);
    setVerifier(null);
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/verify",
        form
      );
      console.log("✅ Verifier response:", res.data);
      setVerifier(res.data.verify || "No verification result returned.");
    } catch (err) {
      console.error("❌ Backend error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-amber-50 py-12 px-4 font-sans">
      <div className="max-w-3xl mx-auto bg-white border border-amber-200 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-amber-800 text-center mb-6">
          ✅ Check What the Agent Said
        </h2>

        <p className="text-center text-gray-700 mb-6">
          Just tell us what the agent told you, and upload your policy PDF. We’ll check if it’s true.
        </p>

        <label className="block font-medium text-rose-800 mb-1">
          🗣️ What did the agent say?
        </label>
        <textarea
          value={claim}
          onChange={(e) => setClaim(e.target.value)}
          placeholder="e.g., Agent said room rent is fully covered..."
          rows={4}
          className="w-full p-4 text-sm border border-rose-300 rounded-lg bg-rose-50 mb-4 resize-y focus:outline-none focus:ring-2 focus:ring-rose-400"
        />

        <label className="block font-medium text-rose-800 mb-1">
          📄 Upload your policy PDF
        </label>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-6 text-sm"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full py-3 bg-rose-600 text-white font-semibold rounded-full shadow-md hover:bg-rose-700 transition-all mb-6"
        >
          {loading ? "Checking..." : "Check Now"}
        </button>

        {error && (
          <p className="text-red-600 mt-4 text-center font-medium">{error}</p>
        )}

        {verifier && (
          <div className="mt-8 bg-amber-50 p-6 rounded-xl border border-amber-300 text-amber-900 text-base leading-7">
            <h3 className="text-lg font-bold mb-4">📋 What We Found</h3>
            <ReactMarkdown>{verifier}</ReactMarkdown>
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

export default VerifyPage;
