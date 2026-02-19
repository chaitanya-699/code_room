"use client";

import CodeEditor from "@/components/CodeEditor";
import TestCases from "@/components/TestCases";
import TestResult from "@/components/TestResult";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { CSSProperties, useRef } from "react";

function Page() {
  const styles: Record<string, CSSProperties> = {
    con: {
      flex: 1,
      display: "flex",
      width: "100%",
      backgroundColor: "black",
      overflow: "hidden",
      height: "100%",
      padding: "5px",
      boxSizing: "border-box",
    },
    header: {
      backgroundColor: "black",
      color: "white",
      padding: "5px",
      paddingBottom: "2px",
    },
    left: {
      border: "0.5px solid rgba(255,255,255,0.4)",
      borderRadius: "5px",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      flexShrink: 0,
    },
    leftHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      gap: "10px",
      padding: "5px",
      borderBottom: "0.5px solid rgba(255,255,255,0.4)",
      backgroundColor: "black",
      color: "white",
    },
    questionMainBody: {
      flex: 1,
      backgroundColor: "#1e1e1e",
    },
    divider: {
      flexShrink: 0,
      width: "8px",
      backgroundColor: "transparent",
      cursor: "col-resize",
      borderRadius: "2px",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    innerVerticalDivider: {
      alignSelf: "center",
      width: "2px",
      backgroundColor: "rgba(255,255,255,0.4)",
      height: "30px",
    },
    right: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      backgroundColor: "black",
    },
    editorDivider: {
      height: "8px",
      backgroundColor: "transparent",
      cursor: "row-resize",
      flexShrink: 0,
      borderRadius: "2px",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    innerHorizontalDivider: {
      alignSelf: "center",
      width: "30px",
      backgroundColor: "rgba(255,255,255,0.4)",
      height: "2px",
    },
    codeEditorTop: {
      overflow: "hidden",
      flexShrink: 0,
      border: "0.5px solid rgba(255,255,255,0.4)",
      borderRadius: "5px",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#262626",
    },
    codeEditorHeader: {
      fontSize: "12px",
      backgroundColor: "#333333",
      color: "white",
    },
    codeEditorHeader1: {
      fontSize: "12px",
      backgroundColor: "#262626",
      color: "#9ea0a3",
      borderBottom: "0.5px solid rgba(255,255,255,0.4)",
      position: "relative",
    },
    testCasesBlock: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#1e1e1e",
      overflow: "hidden",
      border: "0.5px solid rgba(255,255,255,0.4)",
      borderRadius: "5px",
    },
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const editorContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const isEditorDragging = useRef(false);

  const [leftWidth, setLeftWidth] = React.useState(50);
  const [topEditorHeight, setTopEditorHeight] = React.useState(70);

  const [code, setCode] = React.useState(
    "public class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        \n    }\n}",
  );

  const [currentTestcaseTab, setCurrentTestcaseTab] =
    React.useState("Testcase");
  const languages = ["Java", "Python", "C++", "JavaScript"];
  const [showLanguageDropdown, setShowLanguageDropdown] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState("Java");

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    // if mouse is outside container bounds, do not update

    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newLeftPercent = (offsetX / rect.width) * 100;

    if (newLeftPercent < 10 || newLeftPercent > 90) return;

    setLeftWidth(newLeftPercent);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleEditorMouseDown = () => {
    isEditorDragging.current = true;
  };

  const handleEditorMouseMove = (e: React.MouseEvent) => {
    if (!isEditorDragging.current || !editorContainerRef.current) return;

    const rect = editorContainerRef.current.getBoundingClientRect();
    const offsetY = e.clientY - rect.top;
    const newTopPercent = (offsetY / rect.height) * 100;

    if (newTopPercent < 12 || newTopPercent > 93) return;

    setTopEditorHeight(newTopPercent);
  };

  const handleEditorMouseUp = () => {
    isEditorDragging.current = false;
  };

  const handleRunCode = async () => {
    try {
      const response = await fetch("http://localhost:8080/run-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      console.log("Execution Result:", data);
    } catch (error) {
      console.error("Error running code:", error);
    }
  };
  return (
    <div className="main-con">
      <div className="header" style={styles.header}>
        <div className="header-container">
          <button onClick={handleRunCode}>
            <FontAwesomeIcon icon={faPlay} />
          </button>
          <button
            style={{
              color: "#28c244",
            }}
          >
            {"</>"}Submit
          </button>
        </div>
      </div>
      <div
        ref={containerRef}
        className="con"
        style={styles.con}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* LEFT PANEL */}
        <div
          className="left"
          style={{ ...styles.left, width: `${leftWidth}%` }}
        >
          <div className="left-body-header" style={styles.leftHeader}>
            <button>Description</button>
            <button>Submissions</button>
          </div>
          <div
            className="question-main-body"
            style={styles.questionMainBody}
          ></div>
        </div>

        {/* VERTICAL DIVIDER — now in flex flow, no absolute positioning */}
        <div
          className="divider"
          style={styles.divider}
          onMouseDown={handleMouseDown}
        >
          <div
            style={styles.innerVerticalDivider}
            className="inner-vertical-divider"
          ></div>
        </div>

        {/* RIGHT PANEL */}
        <div
          className="right"
          style={styles.right}
          ref={editorContainerRef}
          onMouseMove={handleEditorMouseMove}
          onMouseUp={handleEditorMouseUp}
          onMouseLeave={handleEditorMouseUp}
        >
          <div
            className="code-editor-top"
            style={{ ...styles.codeEditorTop, height: `${topEditorHeight}%` }}
          >
            <div className="code-editor-header" style={styles.codeEditorHeader}>
              <button
                style={{
                  ...styles.codeEditorHeaderButton,
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                <span style={{ color: "#28c244" }}>{"</> "}</span>Code
              </button>
            </div>

            <div
              className="code-editor-header1"
              style={styles.codeEditorHeader1}
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              onMouseLeave={() => setShowLanguageDropdown(false)}
            >
              <div
                className={`language-dropdown ${showLanguageDropdown ? "show" : ""}`}
              >
                {languages.map((lang) => (
                  <div
                    key={lang}
                    className={`language-dropdown-list ${selectedLanguage === lang ? "selected" : ""}`}
                    onClick={() => {
                      setSelectedLanguage(lang);
                      setShowLanguageDropdown(false);
                    }}
                  >
                    {lang}
                  </div>
                ))}
              </div>
              <button style={styles.codeEditorHeader1Button}>
                {selectedLanguage}
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

            <CodeEditor code={code} onChange={setCode} />
            <div className="code-editor-footer" style={styles.codeEditorFooter}>
              <button>Saved</button>
            </div>
          </div>

          {/* HORIZONTAL DIVIDER */}

          <div
            className="editor-divider"
            style={styles.editorDivider}
            onMouseDown={handleEditorMouseDown}
          >
            <div style={styles.innerHorizontalDivider}></div>
          </div>

          <div className="code-editor-bottom" style={styles.testCasesBlock}>
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
              {currentTestcaseTab === "Testcase" ? (
                <TestCases />
              ) : (
                <TestResult />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
