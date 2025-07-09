import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const SimplifyPage = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", file);

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/simplify_pdf",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.summary) {
        setResult(response.data.summary);
      } else {
        setError("No simplified content received.");
      }
    } catch (err) {
      console.error("❌ Error simplifying PDF:", err);
      setError("Failed to simplify PDF. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-amber-50 py-12 px-4 font-sans">
      <div className="max-w-3xl mx-auto bg-white border border-rose-200 p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl text-rose-800 font-bold text-center mb-6">
          📖 Let's Simplify Your Policy
        </h2>

        <p className="text-center text-gray-700 mb-6 text-base">
          Just upload your PDF file. We’ll turn it into a simple, friendly story.
        </p>

        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-4 w-full text-sm text-gray-700"
        />

        <button
          onClick={handleUpload}
          disabled={loading}
          className="w-full py-3 bg-rose-600 text-white font-semibold rounded-full shadow-md hover:bg-rose-700 transition-all mb-6"
        >
          {loading ? "Simplifying..." : "Upload & Simplify"}
        </button>

        {error && (
          <p className="text-red-600 text-center font-medium mt-2">{error}</p>
        )}

        {result && (
          <div className="mt-8 bg-rose-50 border border-rose-200 p-6 rounded-xl text-base leading-7 text-rose-900">
            <h3 className="text-xl font-bold mb-4">📝 Simplified Summary</h3>

            <ReactMarkdown
              components={{
                p: ({ node, ...props }) => (
                  <p className="text-sm text-gray-700 mb-2" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="list-disc ml-6 mb-1" {...props} />
                ),
              }}
            >
              {result}
            </ReactMarkdown>
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

export default SimplifyPage;
