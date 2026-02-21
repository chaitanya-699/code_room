"use client";

import ProblemDescription from "@/components/ProblemDescription";
import ProblemEditor from "@/components/ProblemEditor";
import { dummyProblem, getProblem } from "@/lib/api";
import { Problem } from "@/lib/types";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEvent, useEffect, useRef, useState } from "react";

function Page() {
  const [problemData, setProblemData] = useState<Problem | null>(dummyProblem);

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const problem = await getProblem("two-sum");
        setProblemData(problem);
      } catch (error) {
        console.error("Failed to fetch problem:", error);
      }
    };

    fetchProblem();
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const editorContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const isEditorDragging = useRef(false);
  const [leftWidth, setLeftWidth] = useState(50);
  const [topEditorHeight, setTopEditorHeight] = useState(70);

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

  return (
    <div className="main-con">
      <div className="header">
        <div className="header-container">
          <button>
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
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* LEFT PANEL - Problem Description */}
        <ProblemDescription leftWidth={leftWidth} />

        {/* VERTICAL DIVIDER */}
        <div className="divider" onMouseDown={handleMouseDown}>
          <div className="inner-vertical-divider"></div>
        </div>

        {/* RIGHT PANEL = Code editor */}
        <ProblemEditor
          topEditorHeight={topEditorHeight}
          handleEditorMouseDown={handleEditorMouseDown}
          handleEditorMouseMove={handleEditorMouseMove}
          handleEditorMouseUp={handleEditorMouseUp}
          editorContainerRef={editorContainerRef}
        />
      </div>
    </div>
  );
}

export default Page;
