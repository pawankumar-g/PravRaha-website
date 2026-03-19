"use client";

import Link from "next/link";
import {
  Home,
  Users,
  Building2,
  List,
  Settings,
  Mail,
  Plus,
  Upload,
} from "lucide-react";

export default function ListsPage() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-100 to-gray-50">

      {/* 🔹 LEFT MAIN SIDEBAR */}
      <aside className="w-64 bg-white/80 backdrop-blur-xl border-r shadow-sm p-5">
        <h1 className="text-2xl font-bold text-orange-500 mb-8">
          Pravaha
        </h1>

        <nav className="space-y-2 text-sm">
          <Link href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition">
            <Home size={18}/> Home
          </Link>

          <p className="text-xs text-gray-400 mt-4">Prospect</p>

          <Link href="/dashboard/leads" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
            <Users size={18}/> Leads
          </Link>

          <Link href="/dashboard/companies" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
            <Building2 size={18}/> Companies
          </Link>

          {/* ACTIVE */}
          <Link href="/dashboard/lists" className="flex items-center gap-3 p-2 rounded-lg bg-orange-100 text-orange-600 font-medium shadow-sm">
            <List size={18}/> Lists
          </Link>

          <Link href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 mt-4">
            <Settings size={18}/> Settings
          </Link>
        </nav>
      </aside>

      {/* 🔹 LISTS PANEL */}
      <div className="w-80 bg-white/70 backdrop-blur-xl border-r flex flex-col justify-between p-5">

        {/* TOP */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Lists
          </h2>

          {/* EMPTY CARD */}
          <div className="bg-gradient-to-br from-gray-50 to-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
            
            <p className="text-gray-500 text-sm mb-4">
              No lists yet
            </p>

            <button className="flex items-center justify-center gap-2 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-lg text-sm shadow-md hover:scale-105 transition">
              <Plus size={16}/> Create Your First List
            </button>
          </div>
        </div>

        {/* BOTTOM BUTTONS */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2 text-sm hover:bg-gray-100 transition">
            <Upload size={16}/> Import Contacts
          </button>

          <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg text-sm shadow-md hover:scale-105 transition">
            <Plus size={16}/> Create New List
          </button>
        </div>
      </div>

      {/* 🔹 RIGHT CONTENT */}
      <div className="flex-1 flex items-center justify-center">
        
        <div className="text-center max-w-md">
          
          {/* ICON */}
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center rounded-2xl shadow-inner">
            <Mail className="text-blue-600 w-8 h-8" />
          </div>

          {/* TITLE */}
          <h2 className="text-2xl font-semibold text-gray-800">
            Select an Email List
          </h2>

          {/* DESC */}
          <p className="text-gray-500 text-sm mt-2 leading-relaxed">
            Choose a list from the sidebar to manage contacts, organize leads, and launch campaigns efficiently.
          </p>
        </div>

      </div>
    </div>
  );
}