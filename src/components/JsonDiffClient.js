'use client';

import { useState, useMemo } from 'react';
import { ArrowRightLeft, FileJson, Copy, Trash2, AlignLeft, ArrowDownAZ } from 'lucide-react';
import { diffLines } from 'diff';

export default function JsonDiffClient({ dict }) {
  const [leftInput, setLeftInput] = useState('');
  const [rightInput, setRightInput] = useState('');
  const [error, setError] = useState(null);
  const [sortKeys, setSortKeys] = useState(false);

  // Helper function to recursively sort object keys
  const sortObjectKeys = (obj) => {
    if (Array.isArray(obj)) {
      return obj.map(sortObjectKeys);
    } else if (obj !== null && typeof obj === 'object') {
      return Object.keys(obj).sort().reduce((acc, key) => {
        acc[key] = sortObjectKeys(obj[key]);
        return acc;
      }, {});
    }
    return obj;
  };

  // Compute diffs dynamically when inputs change
  const diffResult = useMemo(() => {
    setError(null);
    if (!leftInput.trim() && !rightInput.trim()) return null;

    let leftParsed = leftInput;
    let rightParsed = rightInput;

    try {
      if (leftInput.trim()) {
        let parsed = JSON.parse(leftInput);
        if (sortKeys) parsed = sortObjectKeys(parsed);
        leftParsed = JSON.stringify(parsed, null, 2);
      }
    } catch (e) {
      setError(dict.errorMessageLeft || 'Invalid JSON in left panel');
      return null;
    }

    try {
      if (rightInput.trim()) {
        let parsed = JSON.parse(rightInput);
        if (sortKeys) parsed = sortObjectKeys(parsed);
        rightParsed = JSON.stringify(parsed, null, 2);
      }
    } catch (e) {
      setError(dict.errorMessageRight || 'Invalid JSON in right panel');
      return null;
    }

    return diffLines(leftParsed, rightParsed);
  }, [leftInput, rightInput, sortKeys, dict]);

  const clearInputs = () => {
    setLeftInput('');
    setRightInput('');
    setError(null);
  };

  const formatBoth = () => {
    setError(null);
    try {
      if (leftInput.trim()) setLeftInput(JSON.stringify(JSON.parse(leftInput), null, 2));
      if (rightInput.trim()) setRightInput(JSON.stringify(JSON.parse(rightInput), null, 2));
    } catch (e) {
      setError('Cannot format invalid JSON');
    }
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
          
          <button 
            onClick={formatBoth}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-emerald-600 bg-emerald-50 hover:bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-900/30 dark:hover:bg-emerald-900/50 rounded-lg transition-colors"
          >
            <AlignLeft className="w-4 h-4" />
            {dict.formatBoth || 'Format Both'}
          </button>
          
          {error && (
            <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-xs font-bold rounded-full animate-in fade-in zoom-in duration-300">
              {error}
            </span>
          )}
        </div>
        
        <div className="flex gap-3 items-center">
          <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 font-medium cursor-pointer">
            <input 
              type="checkbox" 
              checked={sortKeys} 
              onChange={(e) => setSortKeys(e.target.checked)}
              className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-900 dark:bg-gray-800 dark:border-gray-700 transition-colors"
            />
            <ArrowDownAZ className="w-4 h-4" />
            {dict.sortKeysToggle || 'Sort Keys (Semantic Diff)'}
          </label>
          <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-2 hidden sm:block"></div>
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
        <div className="w-full min-h-[300px] max-h-[600px] overflow-auto py-4 font-mono text-sm bg-gray-50/30 dark:bg-gray-900/50 whitespace-pre shadow-inner">
          {!diffResult && (
            <div className="text-gray-400 flex h-full items-center justify-center italic">
              {dict.waitingForInput || 'Enter JSON in both panels to see differences...'}
            </div>
          )}
          {diffResult && diffResult.length === 1 && !diffResult[0].added && !diffResult[0].removed && (
            <div className="text-emerald-600 dark:text-emerald-400 flex h-full items-center justify-center font-semibold text-lg">
              ✨ {dict.identicalMessage || 'JSON objects are identical!'}
            </div>
          )}
          {diffResult && (diffResult.length > 1 || diffResult[0].added || diffResult[0].removed) && diffResult.map((part, index) => {
            const colorClass = part.added 
              ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300 border-l-4 border-emerald-500' 
              : part.removed 
                ? 'bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300 border-l-4 border-red-500' 
                : 'text-gray-700 dark:text-gray-300 border-l-4 border-transparent';
            
            const prefix = part.added ? '+' : part.removed ? '-' : ' ';
            
            // Handle multiple lines in a single part
            const lines = part.value.replace(/\n$/, '').split('\n');
            
            return (
              <span key={index} className={`block w-full ${colorClass}`}>
                {lines.map((line, i) => (
                  <div key={i} className="flex hover:bg-gray-900/5 dark:hover:bg-white/5 transition-colors">
                    <span className="w-10 flex-shrink-0 text-center opacity-40 select-none border-r border-gray-300 dark:border-gray-700 mr-4 font-bold">{prefix}</span>
                    <span className="break-all whitespace-pre-wrap">{line}</span>
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
