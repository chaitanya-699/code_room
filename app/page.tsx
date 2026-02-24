"use client";

import ProblemDescription from "@/components/ProblemDescription";
import ProblemEditor from "@/components/ProblemEditor";
import { dummyProblem } from "@/lib/api";
import { Problem, TestCaseResults } from "@/lib/types";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lottie from "lottie-react";
import { MouseEvent, useRef, useState } from "react";
import Gear from "../public/assets/icon-animations/Gear.json";

function Page() {
  const [problemData] = useState<Problem | null>(dummyProblem);
  const [isRunning, setIsRunning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const editorContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const isEditorDragging = useRef(false);
  const [leftWidth, setLeftWidth] = useState(50);
  const [topEditorHeight, setTopEditorHeight] = useState(70);
  const [currentTestcaseTab, setCurrentTestcaseTab] =
    useState<string>("Testcase");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showDescription, setShowDescription] = useState<string>("description");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [testCaseData, setTestCaseData] = useState<TestCaseResults>();

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
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
  const handleEditorMouseMove = (e: MouseEvent) => {
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
  const fakeApiCall = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, data: "Test cases passed" });
      }, 3000);
    });
  };
  const handleRunProgram = async () => {
    setIsRunning(true);
    setTopEditorHeight(20);
    setCurrentTestcaseTab("TestResults");
    try {
      const language = localStorage.getItem("selected-language") || "java";
      const code = localStorage.getItem(
        `code-${localStorage.getItem("selected-language")}`,
      );
      const response = await fetch("http://localhost:8080/run-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: language,
          code: code,
        }),
      });
      const result = await response.json();
      console.log(result);
      setTestCaseData(result);
    } catch (err) {
      console.error(err);
    } finally {
      setIsRunning(false);
    }
  };
  const handleSubmit = async () => {
    setIsSubmitting(true);
    setIsSubmitted(true);
    setShowDescription("isSubmitting");
    try {
      const response = await fakeApiCall();
      console.log(response);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
      setShowDescription("submission-state");
    }
  };
  return (
    <div className="main-con">
      <div className="header">
        <div className="header-container">
          <button
            className={`header-btn ${isSubmitting ? "run-disabled" : ""}`}
            onClick={handleRunProgram}
            disabled={isSubmitting}
          >
            {!isRunning ? (
              <div
                className="run-icon"
                style={{
                  padding: "0px 2px",
                }}
              >
                <FontAwesomeIcon icon={faPlay} fontSize={14} />
              </div>
            ) : (
              <div
                className="spinner-ani"
                style={{ width: "22px", height: "22px" }}
              >
                <Lottie animationData={Gear} loop />
              </div>
            )}
          </button>
          <button
            className={`header-btn ${isSubmitting ? "run-disabled" : ""}`}
            onClick={handleSubmit}
            disabled={isRunning}
          >
            {isSubmitting ? (
              <span
                style={{
                  width: "22px",
                  height: "16px",
                  color: "#28c244",
                  display: "inline-block",
                }}
              >
                <Lottie cellPadding={0} animationData={Gear} loop />
              </span>
            ) : (
              <span
                style={{
                  width: "22px",
                  height: "22px",
                  color: "#28c244",
                  display: "inline-block",
                }}
              >
                <i className="fa-solid fa-cloud-arrow-up"></i>
              </span>
            )}
            submit
          </button>
        </div>
      </div>
      <div
        ref={containerRef}
        className="con"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* LEFT PANEL - Problem Description */}
        <ProblemDescription
          leftWidth={leftWidth}
          isSubmitted={isSubmitted}
          showDescription={showDescription}
          setShowDescription={setShowDescription}
          problemData={problemData}
          isSubmitting={isSubmitting}
        />

        {/* VERTICAL DIVIDER */}
        <div className="divider" onMouseDown={handleMouseDown}>
          <div className="inner-vertical-divider"></div>
        </div>

        {/* RIGHT PANEL = Code editor */}
        <ProblemEditor
          topEditorHeight={topEditorHeight}
          editorContainerRef={editorContainerRef}
          handleEditorMouseDown={handleEditorMouseDown}
          handleEditorMouseMove={handleEditorMouseMove}
          handleEditorMouseUp={handleEditorMouseUp}
          isRunning={isRunning}
          currentTestcaseTab={currentTestcaseTab}
          setCurrentTestcaseTab={setCurrentTestcaseTab}
          problemData={problemData}
          testCaseData={testCaseData}
        />
      </div>
    </div>
  );
}

export default Page;
