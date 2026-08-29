'use client';

import { useState, useMemo, useEffect } from 'react';
import { ArrowRightLeft, FileJson, Copy, Trash2, AlignLeft, ArrowDownAZ } from 'lucide-react';
import ReactDiffViewer from 'react-diff-viewer-continued';

export default function JsonDiffClient({ dict }) {
  const [leftInput, setLeftInput] = useState('');
  const [rightInput, setRightInput] = useState('');
  const [error, setError] = useState(null);
  const [sortKeys, setSortKeys] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect dark mode for diff viewer styling
  useEffect(() => {
    // Check if the html element has the 'dark' class
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();
    
    // Create an observer to watch for class changes on HTML
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

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

    return { leftParsed, rightParsed, areIdentical: leftParsed === rightParsed };
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
        <div className="w-full min-h-[300px] overflow-auto py-0 font-mono text-sm bg-gray-50/30 dark:bg-gray-900/50 shadow-inner custom-diff-viewer">
          {!diffResult && (
            <div className="text-gray-400 flex h-full items-center justify-center italic py-20">
              {dict.waitingForInput || 'Enter JSON in both panels to see differences...'}
            </div>
          )}
          {diffResult && diffResult.areIdentical && (
            <div className="text-emerald-600 dark:text-emerald-400 flex h-full items-center justify-center font-semibold text-lg py-20">
              ✨ {dict.identicalMessage || 'JSON objects are identical!'}
            </div>
          )}
          {diffResult && !diffResult.areIdentical && (
            <ReactDiffViewer
              oldValue={diffResult.leftParsed}
              newValue={diffResult.rightParsed}
              splitView={true}
              useDarkTheme={isDarkMode}
              leftTitle={dict.originalJson || 'Original'}
              rightTitle={dict.modifiedJson || 'Modified'}
              hideLineNumbers={false}
              showDiffOnly={false}
              styles={{
                variables: {
                  dark: {
                    diffViewerBackground: '#111827',
                    diffViewerColor: '#E5E7EB',
                    addedBackground: '#064e3b',
                    addedColor: '#34d399',
                    removedBackground: '#7f1d1d',
                    removedColor: '#f87171',
                    wordAddedBackground: '#047857',
                    wordRemovedBackground: '#991b1b',
                    addedGutterBackground: '#065f46',
                    removedGutterBackground: '#991b1b',
                    gutterBackground: '#1f2937',
                    gutterBackgroundDark: '#111827',
                    highlightBackground: '#374151',
                    highlightGutterBackground: '#4b5563',
                    codeFoldGutterBackground: '#374151',
                    codeFoldBackground: '#1f2937',
                    emptyLineBackground: '#111827',
                    gutterColor: '#9ca3af',
                    addedGutterColor: '#a7f3d0',
                    removedGutterColor: '#fecaca',
                    titleBackground: '#1f2937'
                  },
                  light: {
                    diffViewerBackground: '#f9fafb',
                    diffViewerColor: '#374151',
                    addedBackground: '#ecfdf5',
                    addedColor: '#065f46',
                    removedBackground: '#fef2f2',
                    removedColor: '#991b1b',
                    wordAddedBackground: '#a7f3d0',
                    wordRemovedBackground: '#fecaca',
                    addedGutterBackground: '#d1fae5',
                    removedGutterBackground: '#fee2e2',
                    gutterBackground: '#f3f4f6',
                    gutterBackgroundDark: '#e5e7eb',
                    highlightBackground: '#e5e7eb',
                    highlightGutterBackground: '#d1d5db',
                    codeFoldGutterBackground: '#f3f4f6',
                    codeFoldBackground: '#f9fafb',
                    emptyLineBackground: '#ffffff',
                    gutterColor: '#6b7280',
                    addedGutterColor: '#065f46',
                    removedGutterColor: '#991b1b',
                    titleBackground: '#f3f4f6'
                  }
                },
                line: {
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                  fontSize: '13px',
                },
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
