'use client';

import { useState, useMemo } from 'react';
import { ArrowRightLeft, FileJson, Copy, Trash2 } from 'lucide-react';
import { diffLines } from 'diff';

export default function JsonDiffClient({ dict }) {
  const [leftInput, setLeftInput] = useState('');
  const [rightInput, setRightInput] = useState('');
  const [error, setError] = useState(null);

  // Compute diffs dynamically when inputs change
  const diffResult = useMemo(() => {
    setError(null);
    if (!leftInput.trim() && !rightInput.trim()) return null;

    let leftParsed = leftInput;
    let rightParsed = rightInput;

    try {
      if (leftInput.trim()) {
        leftParsed = JSON.stringify(JSON.parse(leftInput), null, 2);
      }
    } catch (e) {
      setError(dict.errorMessageLeft || 'Invalid JSON in left panel');
      return null;
    }

    try {
      if (rightInput.trim()) {
        rightParsed = JSON.stringify(JSON.parse(rightInput), null, 2);
      }
    } catch (e) {
      setError(dict.errorMessageRight || 'Invalid JSON in right panel');
      return null;
    }

    return diffLines(leftParsed, rightParsed);
  }, [leftInput, rightInput, dict]);

  const clearInputs = () => {
    setLeftInput('');
    setRightInput('');
    setError(null);
  };

  const loadSample = () => {
    setLeftInput('{\n  "name": "John Doe",\n  "age": 30,\n  "city": "New York"\n}');
    setRightInput('{\n  "name": "John Doe",\n  "age": 31,\n  "city": "London",\n  "active": true\n}');
  };

  return (
    <div className="w-full mt-6 flex flex-col gap-4">
      {/* Actions Toolbar */}
      <div className="bg-white dark:bg-gray-900 px-4 py-3 border border-gray-200 dark:border-gray-800 rounded-2xl flex flex-wrap gap-3 items-center justify-between shadow-lg shadow-gray-200/50 dark:shadow-black/50 transition-all">
        <div className="flex gap-2 items-center">
          <button 
            onClick={loadSample}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 dark:text-indigo-400 dark:bg-indigo-900/30 dark:hover:bg-indigo-900/50 rounded-lg transition-colors"
          >
            <FileJson className="w-4 h-4" />
            {dict.sampleData || 'Sample Data'}
          </button>
          
          {error && (
            <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-xs font-bold rounded-full animate-in fade-in zoom-in duration-300">
              {error}
            </span>
          )}
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={clearInputs}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            {dict.clearButton || 'Clear'}
          </button>
        </div>
      </div>

      {/* Input Areas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[350px]">
        {/* Left Input */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm flex flex-col focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all">
          <div className="bg-gray-50 dark:bg-gray-950 px-3 py-2 border-b border-gray-200 dark:border-gray-800 text-xs font-semibold text-gray-500 uppercase tracking-wider flex justify-between items-center">
            <span>{dict.originalJson || 'Original JSON'}</span>
          </div>
          <textarea
            value={leftInput}
            onChange={(e) => setLeftInput(e.target.value)}
            placeholder={dict.originalPlaceholder || 'Paste original JSON here...'}
            spellCheck="false"
            className="w-full flex-1 p-4 font-mono text-sm bg-transparent resize-none focus:outline-none dark:text-gray-200"
          ></textarea>
        </div>
        
        {/* Right Input */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm flex flex-col focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all">
          <div className="bg-gray-50 dark:bg-gray-950 px-3 py-2 border-b border-gray-200 dark:border-gray-800 text-xs font-semibold text-gray-500 uppercase tracking-wider flex justify-between items-center">
            <span>{dict.modifiedJson || 'Modified JSON'}</span>
          </div>
          <textarea
            value={rightInput}
            onChange={(e) => setRightInput(e.target.value)}
            placeholder={dict.modifiedPlaceholder || 'Paste modified JSON here...'}
            spellCheck="false"
            className="w-full flex-1 p-4 font-mono text-sm bg-transparent resize-none focus:outline-none dark:text-gray-200"
          ></textarea>
        </div>
      </div>

      {/* Diff Viewer Area */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm flex flex-col mt-2">
        <div className="bg-gray-50 dark:bg-gray-950 px-3 py-2 border-b border-gray-200 dark:border-gray-800 text-xs font-semibold text-gray-500 uppercase tracking-wider flex justify-between items-center">
          <span>{dict.diffResult || 'Diff Output'}</span>
          <ArrowRightLeft size={14} className="text-gray-400" />
        </div>
        <div className="w-full min-h-[300px] max-h-[600px] overflow-auto p-4 font-mono text-sm bg-gray-50/30 dark:bg-gray-900/50 whitespace-pre">
          {!diffResult && (
            <div className="text-gray-400 flex h-full items-center justify-center italic">
              {dict.waitingForInput || 'Enter JSON in both panels to see differences...'}
            </div>
          )}
          {diffResult && diffResult.map((part, index) => {
            const colorClass = part.added 
              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300' 
              : part.removed 
                ? 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300' 
                : 'text-gray-700 dark:text-gray-300';
            
            const prefix = part.added ? '+ ' : part.removed ? '- ' : '  ';
            
            // Handle multiple lines in a single part
            const lines = part.value.replace(/\n$/, '').split('\n');
            
            return (
              <span key={index} className={`block w-full px-2 ${colorClass}`}>
                {lines.map((line, i) => (
                  <div key={i}>
                    <span className="opacity-50 mr-2 select-none">{prefix}</span>
                    {line}
                  </div>
                ))}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
