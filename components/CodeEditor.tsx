"use client";

import { CodeSnippet } from "@/lib/types";
import "@fontsource/jetbrains-mono";
import { Editor } from "@monaco-editor/react";

function CodeEditor({
  language,
}: {
  language: CodeSnippet;
}) {
  const languageMap: { [key: string]: string } = {
    Java: "java",
    Python: "python",
    "C++": "cpp",
    JavaScript: "javascript",
  };
 
  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      localStorage.setItem(`code-${language.language}`, value);
    }
  };

  return (
    <div className="code-editor-body">
      <Editor
        height="100%"
        value={localStorage.getItem(`code-${language.language}`) || language.code}
        onChange={handleEditorChange}
        language={
          languageMap[language.language] || language.language.toLowerCase()
        }
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
