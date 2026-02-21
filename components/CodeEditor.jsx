import "@fontsource/jetbrains-mono";
import { Editor, useMonaco } from "@monaco-editor/react";
import { useEffect } from "react";

function CodeEditor({ language, setCode }) {
  const monaco = useMonaco();
  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme("leetcode-dark", {
        base: "vs-dark",
        inherit: true,
        rules: [
          { token: "keyword", foreground: "c792ea" },
          { token: "keyword.control", foreground: "c792ea" },

          { token: "type.identifier", foreground: "82aaff" },
          { token: "identifier", foreground: "e6edf3" },

          { token: "string", foreground: "c3e88d" },
          { token: "number", foreground: "f78c6c" },

          { token: "comment", foreground: "5c6370", fontStyle: "italic" },

          { token: "delimiter", foreground: "89ddff" },
          { token: "operator", foreground: "89ddff" },
        ],
        colors: {
          "editor.background": "#1f1f1f",
          "editor.foreground": "#e6edf3",

          "editor.lineHighlightBackground": "#2a2a2a",
          "editorCursor.foreground": "#ffffff",

          "editor.selectionBackground": "#3a3f4b",
          "editor.inactiveSelectionBackground": "#2f333d",

          "editorLineNumber.foreground": "#6e7681",
          "editorLineNumber.activeForeground": "#ffffff",

          "editorSuggestWidget.background": "#2a2a2a",
          "editorSuggestWidget.border": "#3a3a3a",
          "editorSuggestWidget.selectedBackground": "#3f4451",
        },
      });

      monaco.editor.setTheme("leetcode-dark");
    }
  }, [monaco]);

  return (
    <div className="code-editor-body">
      <Editor
        height="100%"
        value={language.code}
        onChange={(value) => setCode(value || "")}
        language={language.lang === "C++" ? "cpp" : language.lang.toLowerCase()}
        theme="leetcode-dark"
        options={{
          fontSize: 12,
          lineHeight: 22,
          fontFamily: "JetBrains Mono, monospace",
          minimap: { enabled: false },
          smoothScrolling: true,
          cursorSmoothCaretAnimation: "on",
        }}
      />
    </div>
  );
}

export default CodeEditor;
