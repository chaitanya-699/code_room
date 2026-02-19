import { Editor } from "@monaco-editor/react";

function CodeEditor({ code, onChange }) {
  function handleEditorWillMount(monacoInstance) {
    monacoInstance.editor.defineTheme("my-dark", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#262626",
      },
    });
  }

  return (
    <div className="con" style={{ flex: 1, overflow: "hidden",  }}>
      <Editor
        beforeMount={handleEditorWillMount}
        value={code}
        onChange={(newCode) => onChange(newCode)}
        language="java"
        theme="my-dark"
        options={{
          fontSize: 13,
          minimap: { enabled: false },
          padding: { top: 5 },
          glyphMargin: false,
          lineNumbersMinChars: 3,
          folding: false,
          lineHeight: 20,
          
        }}
      />
    </div>
  );
}

export default CodeEditor;
