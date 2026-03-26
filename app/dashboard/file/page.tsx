"use client";

import { useState } from "react";
import {
  ClipboardDocumentListIcon,
  PlusIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";

type List = {
  id: number;
  name: string;
};

export default function FilePage() {
  const [lists, setLists] = useState<List[]>([]);

  const handleCreateList = () => {
    const newList: List = {
      id: Date.now(),
      name: `List ${lists.length + 1}`,
    };
    setLists([...lists, newList]);
  };

  return (
    <div className="flex h-full bg-gray-100">
      {/* LEFT SIDEBAR */}
      <div className="w-72 bg-white border-r flex flex-col">
        {/* Header */}
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">
            My Lists
          </h2>
        </div>

        {/* List Area */}
        <div className="flex-1 overflow-y-auto">
          {lists.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center px-4 h-full">
              <ClipboardDocumentListIcon className="h-10 w-10 text-gray-400 mb-3" />

              <p className="text-gray-800 font-medium">
                No lists yet
              </p>

              <p className="text-gray-500 text-sm mb-4">
                Create a list to start adding contacts.
              </p>

              <button
                onClick={handleCreateList}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Create Your First List
              </button>
            </div>
          ) : (
            <ul className="p-2 space-y-1">
              {lists.map((list) => (
                <li
                  key={list.id}
                  className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer text-sm font-medium text-gray-800"
                >
                  {list.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Bottom Buttons */}
        <div className="p-3 border-t space-y-2 bg-white">
          <button className="w-full border border-gray-300 rounded-lg py-2 text-sm flex items-center justify-center gap-2 hover:bg-gray-50 text-gray-700">
            <ArrowUpTrayIcon className="h-4 w-4" />
            Import Contacts
          </button>

          <button
            onClick={handleCreateList}
            className="w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition"
          >
            <PlusIcon className="h-4 w-4" />
            Create New List
          </button>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 bg-gray-50 flex items-center justify-center">
        {lists.length === 0 ? (
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-xl inline-block mb-3">
              <ClipboardDocumentListIcon className="h-8 w-8 text-blue-600" />
            </div>

            <h3 className="text-xl font-semibold text-gray-900">
              Select an Email List
            </h3>

            <p className="text-gray-600 text-sm mt-1">
              Choose a list from the sidebar to manage contacts
            </p>
          </div>
        ) : (
          <div className="text-center text-gray-600">
            Select a list from the left to view contacts
          </div>
        )}
      </div>
    </div>
  );
}