'use client';

import { useState } from 'react';
import { CheckCircle2, AlertCircle, Trash2, AlignLeft } from 'lucide-react';

export default function JsonValidatorClient({ dict }) {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null); // { valid: boolean, message: string }

  const validateJson = () => {
    if (!input.trim()) return setResult(null);
    try {
      JSON.parse(input);
      setResult({ valid: true, message: dict.validMessage });
    } catch (e) {
      setResult({ valid: false, message: e.message || dict.invalidMessage });
    }
  };

  const formatJson = () => {
    if (!input.trim()) return;
    try {
      const parsed = JSON.parse(input);
      setInput(JSON.stringify(parsed, null, 2));
      setResult({ valid: true, message: dict.validMessage });
    } catch (e) {
      setResult({ valid: false, message: e.message || dict.invalidMessage });
    }
  };

  const clearInput = () => {
    setInput('');
    setResult(null);
  };

  return (
    <div className="w-full mt-6 flex flex-col gap-4">
      {/* Actions Toolbar */}
      <div className="bg-white dark:bg-gray-900 px-4 py-3 border border-gray-200 dark:border-gray-800 rounded-2xl flex flex-wrap gap-3 items-center justify-between shadow-lg shadow-gray-200/50 dark:shadow-black/50 transition-all">
        <div className="flex gap-2">
          <button 
            onClick={validateJson}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm shadow-indigo-600/20 flex items-center gap-2"
          >
            <CheckCircle2 size={16} />
            {dict.validateButton}
          </button>
          <button 
            onClick={formatJson}
            className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
          >
            <AlignLeft size={16} />
            {dict.formatButton}
          </button>
        </div>
        <button 
          onClick={clearInput}
          className="px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
        >
          <Trash2 size={16} />
          {dict.clearButton}
        </button>
      </div>

      {/* Editor Area */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden">
        <div className="relative h-[600px] w-full">
          <textarea
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setResult(null);
            }}
            placeholder={dict.placeholder}
            spellCheck="false"
            className="w-full h-full p-4 font-mono text-sm bg-transparent resize-none focus:outline-none dark:text-gray-200"
          ></textarea>
        </div>

        {/* Status Bar */}
        {result && (
          <div className={`px-4 py-3 border-t flex items-center gap-2 ${result.valid ? 'bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-950/30 dark:border-emerald-900/50 dark:text-emerald-400' : 'bg-red-50 border-red-200 text-red-700 dark:bg-red-950/30 dark:border-red-900/50 dark:text-red-400'}`}>
            {result.valid ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
            <span className="font-medium text-sm font-mono">{result.message}</span>
          </div>
        )}
      </div>
    </div>
  );
}
