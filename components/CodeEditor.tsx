"use client";

import "@fontsource/jetbrains-mono";
import { Editor } from "@monaco-editor/react";

type Props = {
  language: string;
  code: string;
  onChange: (value: string) => void;
};

function CodeEditor({ language, code, onChange }: Props) {
  const languageMap: { [key: string]: string } = {
    Java: "java",
    Python: "python",
    "C++": "cpp",
    JavaScript: "javascript",
  };

  return (
    <div className="code-editor-body">
      <Editor
        height="100%"
        value={code}
        onChange={(value) => onChange(value || "")}
        language={languageMap[language] || language.toLowerCase()}
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
