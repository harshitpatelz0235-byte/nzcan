'use client';

import { useState } from 'react';
import { Eye, Trash2, Maximize2 } from 'lucide-react';
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

export default function JsonViewerClient({ dict }) {
  const [input, setInput] = useState('');
  const [parsedData, setParsedData] = useState(null);
  const [error, setError] = useState(null);

  const viewJson = () => {
    if (!input.trim()) return;
    try {
      const data = JSON.parse(input);
      setParsedData(data);
      setError(null);
    } catch (e) {
      setParsedData(null);
      setError(dict.errorMessage || 'Invalid JSON');
    }
  };

  const clearInput = () => {
    setInput('');
    setParsedData(null);
    setError(null);
  };

  return (
    <div className="w-full mt-6 flex flex-col gap-4">
      {/* Actions Toolbar */}
      <div className="bg-white dark:bg-gray-900 px-4 py-3 border border-gray-200 dark:border-gray-800 rounded-2xl flex flex-wrap gap-3 items-center justify-between shadow-lg shadow-gray-200/50 dark:shadow-black/50 transition-all">
        <div className="flex gap-2 items-center">
          <button 
            onClick={viewJson}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm shadow-indigo-600/20 flex items-center gap-2"
          >
            <Eye size={16} />
            {dict.viewButton || "View Tree"}
          </button>
          
          {error && (
            <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-xs font-bold rounded-full animate-in fade-in zoom-in duration-300">
              {error}
            </span>
          )}
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={clearInput}
            className="px-3 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {/* 2-Pane UI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px]">
        {/* Input Pane */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm flex flex-col focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all">
          <div className="bg-gray-50 dark:bg-gray-950 px-3 py-2 border-b border-gray-200 dark:border-gray-800 text-xs font-semibold text-gray-500 uppercase tracking-wider flex justify-between items-center">
            <span>Raw JSON Input</span>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={dict.inputPlaceholder || "Paste raw JSON here..."}
            spellCheck="false"
            className="w-full flex-1 p-4 font-mono text-sm bg-transparent resize-none focus:outline-none dark:text-gray-200"
          ></textarea>
        </div>
        
        {/* Output Tree Viewer */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm flex flex-col relative">
          <div className="bg-gray-50 dark:bg-gray-950 px-3 py-2 border-b border-gray-200 dark:border-gray-800 text-xs font-semibold text-gray-500 uppercase tracking-wider flex justify-between items-center">
            <span>Interactive Tree View</span>
            <Maximize2 size={14} className="text-gray-400" />
          </div>
          <div className="flex-1 p-4 overflow-auto bg-gray-50/30 dark:bg-gray-900/30">
            {parsedData ? (
              <div className="font-mono text-sm" style={{ '--jvl-key-color': '#818cf8', '--jvl-string-color': '#34d399', '--jvl-number-color': '#fbbf24', '--jvl-boolean-color': '#f87171' }}>
                <JsonView 
                  data={parsedData} 
                  shouldExpandNode={allExpanded} 
                  style={defaultStyles} 
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400 dark:text-gray-600 text-sm">
                Tree visualization will appear here
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
