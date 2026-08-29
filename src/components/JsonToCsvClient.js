'use client';

import { useState } from 'react';
import { Table, Copy, Download, Trash2, ArrowRight } from 'lucide-react';

export default function JsonToCsvClient({ dict }) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);

  // Flatten nested JSON object
  const flattenObject = (obj, prefix = '') => {
    return Object.keys(obj).reduce((acc, k) => {
      const pre = prefix.length ? prefix + '.' : '';
      if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
        Object.assign(acc, flattenObject(obj[k], pre + k));
      } else {
        acc[pre + k] = obj[k];
      }
      return acc;
    }, {});
  };

  const convertToCsv = () => {
    if (!input.trim()) return;
    try {
      let data = JSON.parse(input);
      
      // Ensure it's an array for CSV conversion
      if (!Array.isArray(data)) {
        if (typeof data === 'object' && data !== null) {
          data = [data]; // wrap single object in array
        } else {
          throw new Error('Not an object or array');
        }
      }

      if (data.length === 0) {
        setOutput('');
        setError(null);
        return;
      }

      // Flatten all objects
      const flattenedData = data.map(item => flattenObject(item));

      // Extract all unique headers
      const headersSet = new Set();
      flattenedData.forEach(item => {
        Object.keys(item).forEach(key => headersSet.add(key));
      });
      const headers = Array.from(headersSet);

      // Map rows
      const csvRows = [];
      
      // Header row
      csvRows.push(headers.map(h => `"${h.replace(/"/g, '""')}"`).join(','));

      // Data rows
      flattenedData.forEach(row => {
        const values = headers.map(header => {
          let val = row[header];
          if (val === null || val === undefined) {
            val = '';
          } else if (typeof val === 'object') {
            val = JSON.stringify(val); // Stringify inner arrays
          } else {
            val = String(val);
          }
          // Escape quotes and wrap in quotes
          return `"${val.replace(/"/g, '""')}"`;
        });
        csvRows.push(values.join(','));
      });

      setOutput(csvRows.join('\n'));
      setError(null);
    } catch (e) {
      setOutput('');
      setError(dict.errorMessage || 'Invalid JSON Array');
    }
  };

  const copyToClipboard = () => {
    if (output) navigator.clipboard.writeText(output);
  };

  const downloadCsv = () => {
    if (!output) return;
    const blob = new Blob([output], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'converted.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const clearInput = () => {
    setInput('');
    setOutput('');
    setError(null);
  };

  return (
    <div className="w-full mt-6 flex flex-col gap-4">
      {/* Actions Toolbar */}
      <div className="bg-white dark:bg-gray-900 px-4 py-3 border border-gray-200 dark:border-gray-800 rounded-2xl flex flex-wrap gap-3 items-center justify-between shadow-lg shadow-gray-200/50 dark:shadow-black/50 transition-all">
        <div className="flex gap-2 items-center">
          <button 
            onClick={convertToCsv}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm shadow-indigo-600/20 flex items-center gap-2"
          >
            <ArrowRight size={16} />
            {dict.convertButton}
          </button>
          
          {error && (
            <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-xs font-bold rounded-full animate-in fade-in zoom-in duration-300">
              {error}
            </span>
          )}
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={copyToClipboard}
            className="px-3 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
          >
            <Copy size={16} />
            {dict.copyButton}
          </button>
          <button 
            onClick={downloadCsv}
            className="px-3 py-2 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:hover:bg-emerald-900/50 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
          >
            <Download size={16} />
            {dict.downloadButton}
          </button>
          <button 
            onClick={clearInput}
            className="px-3 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {/* 2-Pane Editor Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px]">
        {/* Input */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm flex flex-col focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all">
          <div className="bg-gray-50 dark:bg-gray-950 px-3 py-2 border-b border-gray-200 dark:border-gray-800 text-xs font-semibold text-gray-500 uppercase tracking-wider flex justify-between items-center">
            <span>JSON Array Input</span>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={dict.inputPlaceholder}
            spellCheck="false"
            className="w-full flex-1 p-4 font-mono text-sm bg-transparent resize-none focus:outline-none dark:text-gray-200"
          ></textarea>
        </div>
        
        {/* Output */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm flex flex-col relative">
          <div className="bg-gray-50 dark:bg-gray-950 px-3 py-2 border-b border-gray-200 dark:border-gray-800 text-xs font-semibold text-gray-500 uppercase tracking-wider flex justify-between items-center">
            <span>CSV Output</span>
            <Table size={14} className="text-gray-400" />
          </div>
          <textarea
            value={output}
            readOnly
            placeholder={dict.outputPlaceholder}
            spellCheck="false"
            className="w-full flex-1 p-4 font-mono text-sm bg-gray-50/50 dark:bg-gray-900/50 resize-none focus:outline-none dark:text-gray-300 whitespace-pre"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
