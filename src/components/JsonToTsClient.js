"use client";

import { useState } from "react";
import { Download, Copy, Trash2, ArrowRightLeft } from "lucide-react";

export default function JsonToTsClient({ dict }) {
  const [inputJson, setInputJson] = useState("");
  const [outputTs, setOutputTs] = useState("");
  const [error, setError] = useState("");
  const [rootName, setRootName] = useState("RootObject");

  const convertJsonToTs = (jsonString, rootInterfaceName) => {
    try {
      if (!jsonString.trim()) {
        setOutputTs("");
        setError("");
        return;
      }

      const parsed = JSON.parse(jsonString);
      let interfaces = [];

      const generateInterface = (obj, name) => {
        let tsProps = "";
        for (const key in obj) {
          const value = obj[key];
          const type = typeof value;

          if (value === null) {
            tsProps += `  ${key}: any | null;\n`;
          } else if (Array.isArray(value)) {
            if (value.length > 0) {
              const arrayType = typeof value[0];
              if (arrayType === "object" && value[0] !== null) {
                const subInterfaceName = capitalize(key);
                generateInterface(value[0], subInterfaceName);
                tsProps += `  ${key}: ${subInterfaceName}[];\n`;
              } else {
                tsProps += `  ${key}: ${arrayType}[];\n`;
              }
            } else {
              tsProps += `  ${key}: any[];\n`;
            }
          } else if (type === "object") {
            const subInterfaceName = capitalize(key);
            generateInterface(value, subInterfaceName);
            tsProps += `  ${key}: ${subInterfaceName};\n`;
          } else {
            tsProps += `  ${key}: ${type};\n`;
          }
        }
        interfaces.push(`export interface ${name} {\n${tsProps}}`);
      };

      const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

      if (Array.isArray(parsed)) {
        if (parsed.length > 0 && typeof parsed[0] === 'object' && parsed[0] !== null) {
           generateInterface(parsed[0], rootInterfaceName);
        } else {
           throw new Error(dict.errorNotObject);
        }
      } else if (typeof parsed === 'object' && parsed !== null) {
        generateInterface(parsed, rootInterfaceName);
      } else {
        throw new Error(dict.errorNotObject);
      }

      setOutputTs(interfaces.reverse().join('\n\n'));
      setError("");
    } catch (e) {
      setError(e.message || dict.errorMessage);
      setOutputTs("");
    }
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setInputJson(val);
    convertJsonToTs(val, rootName);
  };

  const handleRootNameChange = (e) => {
    const val = e.target.value || "RootObject";
    setRootName(val);
    convertJsonToTs(inputJson, val);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputTs);
  };

  const downloadTs = () => {
    const blob = new Blob([outputTs], { type: "text/typescript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${rootName.toLowerCase()}.ts`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 mb-12">
      {/* Input Section */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            JSON Input
          </label>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Root Interface Name:</span>
            <input 
              type="text" 
              value={rootName === "RootObject" ? "" : rootName}
              placeholder="RootObject"
              onChange={handleRootNameChange}
              className="text-xs px-2 py-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded text-gray-900 dark:text-white"
            />
          </div>
        </div>
        <div className="relative flex-1 group">
          <textarea
            value={inputJson}
            onChange={handleInputChange}
            placeholder={dict.inputPlaceholder}
            className={`w-full h-[500px] p-4 bg-white dark:bg-gray-900 border rounded-xl shadow-sm font-mono text-sm resize-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-gray-100 ${
              error ? 'border-red-500' : 'border-gray-200 dark:border-gray-800'
            }`}
          />
          {error && (
            <div className="absolute bottom-4 left-4 right-4 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm font-medium border border-red-100 dark:border-red-800">
              {error}
            </div>
          )}
        </div>
      </div>

      {/* Middle Desktop Divider */}
      <div className="hidden lg:flex flex-col items-center justify-center px-2">
        <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-500 dark:text-indigo-400">
          <ArrowRightLeft className="w-5 h-5" />
        </div>
      </div>

      {/* Output Section */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            TypeScript Interfaces
          </label>
          <div className="flex gap-3">
            <button
              onClick={() => { setInputJson(''); setOutputTs(''); setError(''); }}
              title={dict.clearButton}
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              {dict.clearButton}
            </button>
            <button
              onClick={copyToClipboard}
              disabled={!outputTs}
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 dark:text-indigo-400 dark:bg-indigo-900/30 dark:hover:bg-indigo-900/50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Copy className="w-4 h-4" />
              {dict.copyButton}
            </button>
            <button
              onClick={downloadTs}
              disabled={!outputTs}
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 dark:text-indigo-400 dark:bg-indigo-900/30 dark:hover:bg-indigo-900/50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-4 h-4" />
              {dict.downloadButton}
            </button>
          </div>
        </div>
        <div className="relative flex-1">
          <textarea
            value={outputTs}
            readOnly
            placeholder={dict.outputPlaceholder}
            className="w-full h-[500px] p-4 bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm font-mono text-sm resize-none text-indigo-700 dark:text-indigo-300 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
