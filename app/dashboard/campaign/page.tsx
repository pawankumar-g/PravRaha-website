"use client";

import {
  PaperAirplaneIcon,
  UserGroupIcon,
  ChartBarIcon,
  ArrowPathIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";

export default function CampaignPage() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">

      {/* PAGE HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Campaign</h1>

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full shadow">
          Create Campaign
        </button>
      </div>

      {/* STATISTICS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {/* TOTAL CAMPAIGNS */}
        <div className="bg-white rounded-xl border shadow-sm p-5 flex justify-between items-start">
          <div>
            <p className="text-xs text-gray-500 tracking-wide">TOTAL CAMPAIGNS</p>
            <h2 className="text-2xl font-semibold mt-1">0</h2>
            <p className="text-xs text-gray-400 mt-1">All statuses</p>
          </div>
          <div className="bg-green-100 p-2 rounded-full">
            <ChartBarIcon className="w-5 h-5 text-green-600" />
          </div>
        </div>

        {/* TOTAL DELIVERED */}
        <div className="bg-white rounded-xl border shadow-sm p-5 flex justify-between items-start">
          <div>
            <p className="text-xs text-gray-500 tracking-wide">TOTAL DELIVERED</p>
            <h2 className="text-2xl font-semibold mt-1">0</h2>
            <p className="text-xs text-gray-400 mt-1">All campaigns</p>
          </div>
          <div className="bg-blue-100 p-2 rounded-full">
            <PaperAirplaneIcon className="w-5 h-5 text-blue-600" />
          </div>
        </div>

        {/* TOTAL OPENS */}
        <div className="bg-white rounded-xl border shadow-sm p-5 flex justify-between items-start">
          <div>
            <p className="text-xs text-gray-500 tracking-wide">TOTAL OPENS</p>
            <h2 className="text-2xl font-semibold mt-1">0</h2>
            <p className="text-xs text-gray-400 mt-1">Email opens</p>
          </div>
          <div className="bg-purple-100 p-2 rounded-full">
            <UserGroupIcon className="w-5 h-5 text-purple-600" />
          </div>
        </div>

        {/* ENGAGEMENT */}
        <div className="bg-white rounded-xl border shadow-sm p-5 flex justify-between items-start">
          <div>
            <p className="text-xs text-gray-500 tracking-wide">ENGAGEMENT</p>
            <h2 className="text-2xl font-semibold mt-1">—</h2>
            <p className="text-xs text-gray-400 mt-1">Coming soon</p>
          </div>
          <div className="bg-orange-100 p-2 rounded-full">
            <ChartBarIcon className="w-5 h-5 text-orange-600" />
          </div>
        </div>

      </div>

      {/* CAMPAIGN TABLE */}
      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">

        {/* TABLE HEADER */}
        <div className="flex justify-between items-center px-5 py-4 border-b">
          <h2 className="font-semibold text-gray-800">Your Campaigns</h2>

          <div className="flex gap-2">
            <button className="p-2 rounded-md border hover:bg-gray-50">
              <ArrowPathIcon className="w-4 h-4" />
            </button>

            <button className="p-2 rounded-md border hover:bg-gray-50">
              <FunnelIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* TABLE */}
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="text-left px-5 py-3">NAME</th>
              <th className="text-left px-5 py-3">STATUS</th>
              <th className="text-left px-5 py-3">ID</th>
              <th className="text-left px-5 py-3">DELIVERED</th>
              <th className="text-left px-5 py-3">OPEN RATE</th>
              <th className="text-left px-5 py-3">LAST MODIFIED</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan={6} className="text-center py-10 text-gray-400">
                No campaigns found. Create your first campaign to get started.
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
}