'use client';

import { useState } from 'react';
import { ArrowRight, Copy, Download, Trash2, FileJson } from 'lucide-react';
import Papa from 'papaparse';

export default function CsvToJsonClient({ dict }) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);

  const convertToJson = () => {
    if (!input.trim()) return;

    Papa.parse(input, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        if (results.errors.length > 0) {
          setOutput('');
          setError(results.errors[0].message || dict.errorMessage || 'Invalid CSV data');
        } else {
          try {
            // Attempt to infer data types (convert string numbers to actual numbers)
            const typedData = results.data.map(row => {
              const newRow = {};
              for (const key in row) {
                let val = row[key];
                if (val !== null && val !== undefined) {
                  // check if it's a number
                  if (!isNaN(val) && val.trim() !== '') {
                    val = Number(val);
                  } else if (val.toLowerCase() === 'true') {
                    val = true;
                  } else if (val.toLowerCase() === 'false') {
                    val = false;
                  }
                }
                newRow[key] = val;
              }
              return newRow;
            });

            setOutput(JSON.stringify(typedData, null, 2));
            setError(null);
          } catch (e) {
            setOutput('');
            setError(dict.errorMessage || 'Failed to convert');
          }
        }
      },
      error: (err) => {
        setOutput('');
        setError(err.message || dict.errorMessage || 'Invalid CSV data');
      }
    });
  };

  const copyToClipboard = () => {
    if (output) navigator.clipboard.writeText(output);
  };

  const downloadJson = () => {
    if (!output) return;
    const blob = new Blob([output], { type: 'application/json;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
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
            onClick={convertToJson}
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
        
        <div className="flex gap-3">
          <button 
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 dark:text-indigo-400 dark:bg-indigo-900/30 dark:hover:bg-indigo-900/50 rounded-lg transition-colors"
          >
            <Copy className="w-4 h-4" />
            {dict.copyButton}
          </button>
          <button 
            onClick={downloadJson}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 dark:text-indigo-400 dark:bg-indigo-900/30 dark:hover:bg-indigo-900/50 rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" />
            {dict.downloadButton}
          </button>
          <button 
            onClick={clearInput}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2-Pane Editor Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px]">
        {/* Input */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm flex flex-col focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all">
          <div className="bg-gray-50 dark:bg-gray-950 px-3 py-2 border-b border-gray-200 dark:border-gray-800 text-xs font-semibold text-gray-500 uppercase tracking-wider flex justify-between items-center">
            <span>CSV Input</span>
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
            <span>JSON Output</span>
            <FileJson size={14} className="text-gray-400" />
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
