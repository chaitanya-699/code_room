"use client";

import { CodeSnippet, Problem, TestCaseResults } from "@/lib/types";
import Lottie from "lottie-react";
import { MouseEvent, RefObject, useEffect, useState } from "react";
import Spinner from "../public/assets/icon-animations/spinner.json";
import CodeEditor from "./CodeEditor";
import ExtendButton from "./ExtendButton";
import TestCases from "./TestCases";
import TestResult from "./TestResult";

function ProblemEditor({
  leftWidth,
  setLeftWidth,
  topEditorHeight,
  setTopEditorHeight,
  editorContainerRef,
  handleEditorMouseDown,
  handleEditorMouseMove,
  handleEditorMouseUp,
  isRunning,
  currentTestcaseTab,
  setCurrentTestcaseTab,
  problemData,
  testCaseData,
  fullScreen,
  setFullScreen,
}: {
  leftWidth: number;
  setLeftWidth: (width: number) => void;
  topEditorHeight: number;
  setTopEditorHeight: (height: number) => void;
  editorContainerRef: RefObject<HTMLDivElement | null>;
  handleEditorMouseDown: (e: MouseEvent) => void;
  handleEditorMouseMove: (e: MouseEvent) => void;
  handleEditorMouseUp: (e: MouseEvent) => void;
  isRunning: boolean;
  currentTestcaseTab: string;
  setCurrentTestcaseTab: (value: string) => void;
  problemData: Problem | null;
  testCaseData?: TestCaseResults;
  fullScreen: boolean;
  setFullScreen: (fullScreen: boolean) => void;
}) {
  const [showLanguageDropdown, setShowLanguageDropdown] =
    useState<boolean>(false);

  const [selectedLanguage, setSelectedLanguage] = useState<CodeSnippet | null>(
    null,
  );

  useEffect(() => {
    if (!problemData?.codeSnippets) return;

    const savedLanguage = localStorage.getItem("selected-language") || "Java";
    const savedCode = localStorage.getItem(`code-${savedLanguage}`);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedLanguage({
      language: savedLanguage,
      code: savedCode || "",
    });
  }, [problemData]);

  useEffect(() => {
    if (!problemData?.codeSnippets) return;

    problemData.codeSnippets.forEach((snippet) => {
      const key = `code-${snippet.language}`;
      const storedCode = localStorage.getItem(key);

      if (!storedCode) {
        localStorage.setItem(key, snippet.code || "");
      }
    });

    if (!localStorage.getItem("selected-language")) {
      localStorage.setItem("selected-language", "Java");
    }
  }, [problemData]);

  useEffect(() => {
    if (!selectedLanguage) return;

    localStorage.setItem("selected-language", selectedLanguage.language);

    localStorage.setItem(
      `code-${selectedLanguage.language}`,
      selectedLanguage.code,
    );
  }, [selectedLanguage]);

  const handleLanguageChange = (lang: CodeSnippet) => {
    const savedCode = localStorage.getItem(`code-${lang.language}`);

    setSelectedLanguage({
      language: lang.language,
      code: savedCode ?? lang.code,
    });

    setShowLanguageDropdown(false);
  };

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
        <div
          className={`${fullScreen ? "code-editor-header-fullscreen" : "code-editor-header"}`}
        >
          <button style={{ fontSize: "14px", fontWeight: "500" }}>
            <span style={{ color: "#28c244" }}>{"</> "}</span>Code
          </button>
          <ExtendButton
            id="topEditorHeight"
            leftWidth={topEditorHeight}
            setLeftWidth={setTopEditorHeight}
            topHeightWidth={topEditorHeight}
            setTopHeightWidth={setTopEditorHeight}
            fullScreen={fullScreen}
            setFullScreen={setFullScreen}
          />
        </div>

        <div
          className="code-editor-header1"
          onMouseLeave={() => setShowLanguageDropdown(false)}
        >
          <div
            className={`language-dropdown ${
              showLanguageDropdown ? "show" : ""
            }`}
          >
            {problemData?.codeSnippets.map((lang) => (
              <div
                key={lang.language}
                className={`language-dropdown-list ${
                  selectedLanguage?.language === lang.language ? "selected" : ""
                }`}
                onClick={() => handleLanguageChange(lang)}
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
              }}
            >
              {"▼"}
            </span>
          </button>

          <ExtendButton
            id="fullScreen"
            leftWidth={leftWidth}
            setLeftWidth={setLeftWidth}
            topHeightWidth={topEditorHeight}
            setTopHeightWidth={setTopEditorHeight}
            fullScreen={fullScreen}
            setFullScreen={setFullScreen}
          />
        </div>

        {selectedLanguage && (
          <CodeEditor
            key={selectedLanguage.language}
            language={selectedLanguage.language}
            code={selectedLanguage.code}
            onChange={(newCode) =>
              setSelectedLanguage((prev) =>
                prev ? { ...prev, code: newCode } : prev,
              )
            }
          />
        )}

        <div className="code-editor-footer">
          <button>Changes will be saved automatically</button>
        </div>
      </div>

      <div className="editor-divider" onMouseDown={handleEditorMouseDown}>
        <div className="inner-horizontal-divider"></div>
      </div>

      <div className="code-editor-bottom">
        <div className="testcases-header-container">
          <button
            className={
              currentTestcaseTab === "Testcase" ? "activeTestCaseTab" : ""
            }
            onClick={() => setCurrentTestcaseTab("Testcase")}
          >
            Test cases
          </button>

          <button
            className={
              currentTestcaseTab === "TestResults" ? "activeTestCaseTab" : ""
            }
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
            )}
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
