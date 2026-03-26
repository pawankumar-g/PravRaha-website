"use client";

import React, { useState } from "react";
import {
  UserIcon,
  BuildingOffice2Icon,
  PlusIcon,
  ArrowUpTrayIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function DataEnrichmentPage() {
  const [mode, setMode] = useState<"users" | "companies">("users");
  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([]);

  const addItem = () => {
    if (!input.trim()) return;
    setList([...list, input.trim()]);
    setInput("");
  };

  const removeItem = (index: number) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl border overflow-hidden">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-slate-600 to-slate-500 text-white px-6 py-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Custom List</h2>

          <button className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1.5 rounded-lg hover:bg-white/20">
            <ArrowUpTrayIcon className="w-4 h-4" />
            Upload CSV
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 space-y-6">

          {/* ENRICH TYPE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* ENRICH USERS */}
            <div
              onClick={() => setMode("users")}
              className={`cursor-pointer border rounded-xl p-4 flex items-center gap-3 transition-all
              ${
                mode === "users"
                  ? "border-orange-500 ring-2 ring-orange-200 bg-orange-50"
                  : "border-gray-300 hover:bg-gray-50"
              }`}
            >
              <div className="bg-orange-100 p-2 rounded-full">
                <UserIcon className="w-5 h-5 text-orange-600" />
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  Enrich Users
                </p>
                <p className="text-xs text-gray-600">
                  Create list via Email addresses
                </p>
              </div>
            </div>

            {/* ENRICH COMPANIES */}
            <div
              onClick={() => setMode("companies")}
              className={`cursor-pointer border rounded-xl p-4 flex items-center gap-3 transition-all
              ${
                mode === "companies"
                  ? "border-orange-500 ring-2 ring-orange-200 bg-orange-50"
                  : "border-gray-300 hover:bg-gray-50"
              }`}
            >
              <div className="bg-gray-200 p-2 rounded-full">
                <BuildingOffice2Icon className="w-5 h-5 text-gray-700" />
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  Enrich Companies
                </p>
                <p className="text-xs text-gray-600">
                  Create list via Domains
                </p>
              </div>
            </div>
          </div>

          {/* INPUT FIELD */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              {mode === "users" ? "Add Email Address" : "Add Domain"}
            </label>

            <div className="flex gap-3 mt-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  mode === "users"
                    ? "Enter email like name@company.com"
                    : "Enter domain like company.com"
                }
                className="flex-1 border-2 border-gray-200 rounded-lg px-4 py-2
                placeholder-gray-400
                focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200
                transition"
              />

              <button
                onClick={addItem}
                className="flex items-center gap-1 bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-800"
              >
                <PlusIcon className="w-4 h-4" />
                Add
              </button>
            </div>
          </div>

          {/* LIST */}
          <div>
            <p className="text-xs text-gray-500 mb-2">
              {mode === "users" ? "EMAILS" : "DOMAINS"} TO ENRICH ({list.length})
            </p>

            <div className="border rounded-xl h-44 bg-gray-50 flex items-center justify-center">
              {list.length === 0 ? (
                <div className="text-center text-gray-400">
                  <UserIcon className="w-8 h-8 mx-auto mb-2 opacity-40" />
                  List is empty
                </div>
              ) : (
                <ul className="w-full p-4 space-y-2 overflow-auto">
                  {list.map((item, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-center bg-white border rounded-md px-3 py-2 text-sm shadow-sm"
                    >
                      {item}
                      <button
                        onClick={() => removeItem(i)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <XMarkIcon className="w-4 h-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* FOOTER */}
          <div className="flex justify-end gap-4 pt-4 border-t">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full text-sm shadow">
              Select Existing List for Enrichment
            </button>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm shadow">
              Start Enrichment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}