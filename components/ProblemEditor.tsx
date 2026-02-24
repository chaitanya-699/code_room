"use client";

import { CodeSnippet, Problem, TestCaseResults } from "@/lib/types";
import Lottie from "lottie-react";
import { MouseEvent, RefObject, useEffect, useState } from "react";
import Spinner from "../public/assets/icon-animations/spinner.json";
import CodeEditor from "./CodeEditor";
import TestCases from "./TestCases";
import TestResult from "./TestResult";

function ProblemEditor({
  topEditorHeight,
  editorContainerRef,
  handleEditorMouseDown,
  handleEditorMouseMove,
  handleEditorMouseUp,
  isRunning,
  currentTestcaseTab,
  setCurrentTestcaseTab,
  problemData,
  testCaseData,
}: {
  topEditorHeight: number;
  editorContainerRef: RefObject<HTMLDivElement | null>;
  handleEditorMouseDown: (e: MouseEvent) => void;
  handleEditorMouseMove: (e: MouseEvent) => void;
  handleEditorMouseUp: (e: MouseEvent) => void;
  isRunning: boolean;
  currentTestcaseTab: string;
  setCurrentTestcaseTab: (value: string) => void;
  problemData: Problem | null;
  testCaseData?: TestCaseResults;
}) {
  useEffect(() => {
    if (!problemData?.codeSnippets) return;

    problemData.codeSnippets.forEach((snippet) => {
      const key = `code-${snippet.language}`;
      const storedCode = localStorage.getItem(key);

      if (!storedCode) {
        localStorage.setItem(key, snippet.code || "");
      }
    });

    const selectedLanguage = localStorage.getItem("selected-language");

    if (!selectedLanguage) {
      localStorage.setItem("selected-language", "Java");
    }
  }, [problemData]);
  const codeSnippet: CodeSnippet = {
    language: localStorage.getItem("selected-language") || "Java",
    code:
      localStorage.getItem(
        `code-${localStorage.getItem("selected-language")}`,
      ) ||
      problemData?.codeSnippets[0].code ||
      "",
  };
  const [showLanguageDropdown, setShowLanguageDropdown] =
    useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<CodeSnippet | null>(
    codeSnippet,
  );

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
            {problemData?.codeSnippets.map((lang) => (
              <div
                key={lang.language}
                className={`language-dropdown-list ${selectedLanguage?.language === lang.language ? "selected" : ""}`}
                onClick={() => {
                  setSelectedLanguage(lang);
                  localStorage.setItem(`selected-language`, lang.language);
                  setShowLanguageDropdown(false);
                }}
              >
                {lang.language}
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
          >
            {selectedLanguage?.language ?? "Select Language"}
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

        <CodeEditor
          languages={problemData?.codeSnippets ?? []}
          language={selectedLanguage!}
        />

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
            {isRunning ? (
              <div
                className="spinner-ani"
                style={{
                  width: "20px",
                  height: "20px",
                  display: "inline-block",
                  verticalAlign: "middle",
                }}
              >
                <Lottie animationData={Spinner} loop />
              </div>
            ) : (
              ">_ "
            )}{" "}
            Test Results
          </button>
        </div>
        <div className="testcase-body-container">
          {currentTestcaseTab === "TestResults" ? (
            <TestResult isRunning={isRunning} testCaseData={testCaseData} />
          ) : (
            <TestCases problemData={problemData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProblemEditor;
