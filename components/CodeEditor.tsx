"use client";

import "@fontsource/jetbrains-mono";
import { Editor } from "@monaco-editor/react";

function CodeEditor({
  language,
}: {
  language: { lang: string; code: string };
}) {
  const handleEditorChange = (value: string | undefined) => {
    localStorage.setItem(`code-${language.lang}`, value || "");
  };

  return (
    <div className="code-editor-body">
      <Editor
        height="100%"
        value={localStorage.getItem(`code-${language.lang}`) || language.code}
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
