"use client";

import { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function VerifyEmailPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const verifyEmail = () => {
    if (!email) {
      setMessage("Please enter an email address.");
      return;
    }

    setMessage("Verifying...");
    setTimeout(() => {
      setMessage("Email appears to be valid.");
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-full p-6">
      
      {/* Card */}
      <div className="bg-white rounded-2xl shadow-lg border w-full max-w-xl p-10 text-center">
        
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Verify Email
        </h1>

        <p className="text-gray-500 mb-8">
          Enter an email address to check if it exists
        </p>

        {/* Input + Button */}
        <div className="flex items-center gap-4">
          
          <div className="flex items-center flex-1 border rounded-full px-4 py-3 bg-gray-50">
            <EnvelopeIcon className="w-5 h-5 text-gray-400 mr-2" />

            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent outline-none w-full text-sm placeholder-gray-400"
            />
          </div>

          <button
            onClick={verifyEmail}
            className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-black transition"
          >
            Verify
          </button>
        </div>

        {/* Result */}
        {message && (
          <p className="mt-6 text-sm text-gray-600">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}