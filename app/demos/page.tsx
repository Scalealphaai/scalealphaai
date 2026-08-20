"use client";

import { useState } from "react";

export default function DemoPage() {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");

  const correctPassword = "ScaleAlpha2026";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === correctPassword) {
      setIsUnlocked(true);
      setError("");
    } else {
      setError("Incorrect access code. Please try again.");
    }
  }

  if (isUnlocked) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-2xl border border-neutral-200 shadow-sm p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-semibold text-neutral-900">Constable Sanitation</h1>
              <p className="text-sm text-neutral-500 mt-1">LocalHaulerForge · Pilot Demo</p>
            </div>
            <button
              onClick={() => {
                setIsUnlocked(false);
                setPassword("");
              }}
              className="text-sm text-neutral-500 hover:text-neutral-800 underline"
            >
              Lock Demo
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-neutral-50 rounded-xl p-4 border">
              <p className="text-sm text-neutral-500">Recovered Volume</p>
              <p className="text-2xl font-semibold text-neutral-900 mt-1">+34%</p>
            </div>
            <div className="bg-neutral-50 rounded-xl p-4 border">
              <p className="text-sm text-neutral-500">Auto-Handled</p>
              <p className="text-2xl font-semibold text-neutral-900 mt-1">78%</p>
            </div>
            <div className="bg-neutral-50 rounded-xl p-4 border">
              <p className="text-sm text-neutral-500">Response Time</p>
              <p className="text-2xl font-semibold text-neutral-900 mt-1">&lt; 60s</p>
            </div>
            <div className="bg-neutral-50 rounded-xl p-4 border">
              <p className="text-sm text-neutral-500">Hours Reclaimed</p>
              <p className="text-2xl font-semibold text-neutral-900 mt-1">18 / week</p>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-xl p-5 border mb-6">
            <h2 className="font-medium text-neutral-900 mb-3">Agent Status</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Missed-Pickup Orchestration</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Live</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Resident Self-Service Portal</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Live</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-neutral-400 text-center">
            This is simulated demo data · Private preview
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl border border-neutral-200 shadow-sm p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-neutral-900">Private Demo Access</h1>
          <p className="text-neutral-500 mt-2 text-sm">
            Enter the access code we provided to view your personalized AI system demo.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Access code"
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900"
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            className="w-full bg-neutral-900 text-white py-3 rounded-xl font-medium hover:bg-neutral-800 transition"
          >
            View My Demo
          </button>
        </form>

        <p className="text-xs text-neutral-400 text-center mt-6">
          This preview is private and unique to you.
        </p>
      </div>
    </div>
  );
}
