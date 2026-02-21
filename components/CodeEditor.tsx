"use client";

import { languages } from "@/lib/api";
import "@fontsource/jetbrains-mono";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";

function CodeEditor({
  language,
}: {
  language: { lang: string; code: string };
}) {
  const [codeMap, setCodeMap] = useState<Record<string, string>>(() => {
    const initialState: Record<string, string> = {};
    if (typeof window !== "undefined") {
      languages.forEach((langObj) => {
        const savedCode = localStorage.getItem(`code-${langObj.lang}`);
        initialState[langObj.lang] = savedCode ?? langObj.code;
      });
    } else {
      languages.forEach((langObj) => {
        initialState[langObj.lang] = langObj.code;
      });
    }
    return initialState;
  });

  const handleEditorChange = (value: string | undefined) => {
    const updatedValue = value || "";
    setCodeMap((prev) => ({
      ...prev,
      [language.lang]: updatedValue,
    }));
    localStorage.setItem(`code-${language.lang}`, updatedValue);
  };

  return (
    <div className="code-editor-body">
      <Editor
        height="100%"
        value={codeMap[language.lang] || ""}
        onChange={handleEditorChange}
        language={language.lang === "C++" ? "cpp" : language.lang.toLowerCase()}
        theme="vs-dark"
        options={{
          fontSize: 12,
          lineHeight: 22,
          fontFamily: "JetBrains Mono, monospace",
          minimap: { enabled: false },
          smoothScrolling: true,
          cursorSmoothCaretAnimation: "on",
          inlineSuggest: { enabled: false },
          quickSuggestions: false,
          suggestOnTriggerCharacters: false,
          scrollbar: {
            vertical: "hidden",
            horizontal: "hidden",
          },
        }}
      />
    </div>
  );
}

export default CodeEditor;
