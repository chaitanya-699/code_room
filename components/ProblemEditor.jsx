import { languages } from "@/lib/api";
import { useState } from "react";
import CodeEditor from "./CodeEditor";
import TestCases from "./TestCases";
import TestResult from "./TestResult";

function ProblemEditor({
  topEditorHeight,
  editorContainerRef,
  handleEditorMouseDown,
  handleEditorMouseMove,
  handleEditorMouseUp,
}) {
  const [code, setCode] = useState(languages[0].code);
  const [currentTestcaseTab, setCurrentTestcaseTab] = useState("Testcase");
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div
      className="right"
      ref={editorContainerRef}
      onMouseMove={handleEditorMouseMove}
      onMouseUp={handleEditorMouseUp}
      onMouseLeave={handleEditorMouseUp}
    >
      <div
        className="code-editor-top"
        style={{ height: `${topEditorHeight}%` }}
      >
        <div className="code-editor-header">
          <button
            style={{
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            <span style={{ color: "#28c244" }}>{"</> "}</span>Code
          </button>
        </div>

        <div
          className="code-editor-header1"
          onMouseLeave={() => setShowLanguageDropdown(false)}
        >
          <div
            className={`language-dropdown ${showLanguageDropdown ? "show" : ""}`}
          >
            {languages.map((lang) => (
              <div
                key={lang.lang}
                className={`language-dropdown-list ${selectedLanguage.lang === lang.lang ? "selected" : ""}`}
                onClick={() => {
                  setSelectedLanguage(lang);
                  setShowLanguageDropdown(false);
                }}
              >
                {lang.lang}
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
          >
            {selectedLanguage.lang}
            <span
              style={{
                paddingLeft: "5px",
                fontSize: "9px",
                textAlign: "start",
              }}
            >
              {"▼"}
            </span>{" "}
          </button>
        </div>

        <CodeEditor language={selectedLanguage} setCode={setCode} />

        <div className="code-editor-footer">
          <button>Saved</button>
        </div>
      </div>

      {/* HORIZONTAL DIVIDER */}
      <div className="editor-divider" onMouseDown={handleEditorMouseDown}>
        <div className="inner-horizontal-divider"></div>
      </div>

      <div className="code-editor-bottom">
        <div className="testcases-header-container">
          <button
            className={`${currentTestcaseTab === "Testcase" ? "activeTestCaseTab" : ""}`}
            onClick={() => setCurrentTestcaseTab("Testcase")}
          >
            Test cases
          </button>
          <p></p>
          <button
            className={`${currentTestcaseTab === "TestResults" ? "activeTestCaseTab" : ""}`}
            onClick={() => setCurrentTestcaseTab("TestResults")}
          >
            {">_"} Test Results
          </button>
        </div>
        <div className="testcase-body-container">
          {currentTestcaseTab === "Testcase" ? <TestCases /> : <TestResult />}
        </div>
      </div>
    </div>
  );
}

export default ProblemEditor;
