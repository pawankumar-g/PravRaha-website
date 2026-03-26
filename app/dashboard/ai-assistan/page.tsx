"use client";

import { Search, Mic, X } from "lucide-react";

export default function AIAssistantPage() {
  return (
    <div className="min-h-screen bg-[#1e1f23] text-white flex flex-col">
      
      {/* Top Search Bar */}
      <div className="border-b border-gray-700 px-6 py-3">
        <div className="flex items-center gap-2 bg-[#2a2b30] rounded-lg px-3 py-2 w-full max-w-md">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            placeholder="Search across Apollo..."
            className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
          />
        </div>
      </div>

      {/* New Chat */}
      <div className="px-6 py-4 text-sm text-gray-300">
        <span className="cursor-pointer hover:text-white">New chat</span>
      </div>

      {/* Center Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        
        {/* AI Icon */}
        <div className="mb-4">
          <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-xl font-semibold mb-1">
          I am your <span className="text-white">AI Assistant.</span>
        </h1>

        <p className="text-gray-400 mb-8">
          You are gonna need a bigger pipeline.
        </p>

        {/* Chat Box */}
        <div className="w-full max-w-xl bg-[#2a2b30] rounded-xl border border-gray-700 p-4 relative">
          
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span className="underline cursor-pointer">
              Personalize your experience
            </span>
            <X className="w-4 h-4 cursor-pointer" />
          </div>

          <textarea
            placeholder="What can I help you do?"
            className="w-full bg-transparent outline-none resize-none h-24 text-sm placeholder-gray-400"
          />

          <div className="flex items-center justify-between mt-4 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <span className="bg-[#1e1f23] px-2 py-1 rounded border border-gray-600">
                Context
              </span>
              <span className="bg-gray-700 px-2 py-1 rounded text-[10px]">
                5 CHATS LEFT
              </span>
            </div>

            <Mic className="w-4 h-4 cursor-pointer" />
          </div>
        </div>

        {/* Preset Buttons */}
        <div className="mt-8">
          <p className="text-gray-500 text-sm mb-3">
            Start with a preset
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {["Prospecting", "Research", "Sequencing", "Analytics", "More"].map(
              (item) => (
                <button
                  key={item}
                  className="border border-gray-600 px-4 py-2 rounded-lg text-sm hover:bg-[#2f3036]"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>

      </div>
    </div>
  );
}