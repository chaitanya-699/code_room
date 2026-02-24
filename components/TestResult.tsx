"use client";
import { TestCaseResults } from "@/lib/types";
import { useState } from "react";

function TestResult({
  isRunning,
  testCaseData,
}: {
  isRunning: boolean;
  testCaseData?: TestCaseResults | null;
}) {
  const [activeId, setActiveId] = useState<number | null>(null);

  // const errorData = runTestErrorData;

  if (isRunning) {
    return (
      <div className="testresult-body-loading">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="skeleton-row" />
        ))}
      </div>
    );
  }

  if (!testCaseData) {
    return (
      <div
        className="testresult-body-empty"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          height: "100%",
          color: "rgba(255, 255, 255, 0.5)",
          margin: "20px",
        }}
      >
        <p
          style={{
            fontSize: "18px",
          }}
        >
          Run the code to see test results.
        </p>
        <p
          style={{
            fontSize: "14px",
            marginTop: "5px",
          }}
        >
          No test results available.
        </p>
      </div>
    );
  }

  const isError = testCaseData.status.toLowerCase() === "error";

  const activeTestCase = !isError
    ? (testCaseData.testCaseResultsData.find((t) => t.id === activeId) ??
      testCaseData.testCaseResultsData[0])
    : null;

  return (
    <div className="testresult-body">
      <h1
        className={`${isError || testCaseData.status === "Wrong Answer" ? "errorStatus" : "passedStatus"}`}
      >
        {isError
          ? testCaseData.testCaseResultsData[0]?.errorType
          : testCaseData.status}
      </h1>

      {!isError && (
        <div className="results-header">
          {testCaseData.testCaseResultsData.map((testcase) => (
            <div
              key={testcase.id}
              className={`results-header-container ${
                activeTestCase?.id === testcase.id ? "activeResultTab" : ""
              }`}
              onClick={() => setActiveId(testcase.id)}
            >
              {testcase.status.toLowerCase() === "passed" ? (
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    display: "inline-block",
                    backgroundColor: "#22c55e",
                    color: "white",
                    fontSize: "8px",
                    borderRadius: "2px",
                    textAlign: "center",
                  }}
                >
                  ✓
                </div>
              ) : (
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    display: "inline-block",
                    backgroundColor: "red",
                    color: "white",
                    fontSize: "8px",
                    borderRadius: "2px",
                    textAlign: "center",
                  }}
                >
                  🗙
                </div>
              )}
              <button>case {testcase.id}</button>
            </div>
          ))}
        </div>
      )}

      <div className="results-body">
        {isError && (
          <div
            style={{
              margin: "10px",
              borderRadius: "8px",
              padding: "10px",
              backgroundColor: "rgba(239, 68, 68, 0.15)",
              color: "#ef4444",
            }}
          >
            {testCaseData.testCaseResultsData[0].stdio.map((message, index) => (
              <p key={index}>{message}</p>
            ))}
          </div>
        )}

        {!isError && activeTestCase && (
          <>
            <div className="inputs-body">
              <h3 style={{ marginLeft: "10px" }}>input</h3>
              <div style={{ padding: "5px", margin: "7px 10px" }}>
                {activeTestCase.parameters.length > 0 &&
                  activeTestCase.parameters.map((param, index) => (
                    <div
                      key={index}
                      style={{
                        padding: "5px",
                        backgroundColor: "#353535",
                        marginBottom: "5px",
                        borderRadius: "5px",
                      }}
                    >
                      <p
                        style={{
                          color: "rgba(255, 255, 255, 0.381)",
                          marginBottom: 0,
                        }}
                      >
                        {param.name} =
                      </p>
                      <p style={{ margin: "2px 0", padding: "5px" }}>
                        {param.value}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {activeTestCase.stdio.length > 0 && (
              <div className="stdio-block" style={{ padding: "5px" }}>
                <h2 style={{ margin: "5px 10px" }}>Stdio</h2>
                <div
                  style={{
                    backgroundColor: "#353535",
                    borderRadius: "8px",
                    margin: "5px 10px",
                    padding: "5px",
                  }}
                >
                  {activeTestCase.stdio.map((line, index) => (
                    <p key={index} style={{ padding: "5px 10px" }}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            )}

            <div className="output-body" style={{ padding: "5px" }}>
              <h3 style={{ marginLeft: "10px" }}>output</h3>
              <p
                style={{
                  backgroundColor: "#353535",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  margin: "5px 10px",
                }}
              >
                {activeTestCase.output ?? "null"}
              </p>
            </div>

            <div className="expected-body" style={{ padding: "5px" }}>
              <h3 style={{ marginLeft: "10px" }}>expected</h3>
              <p
                style={{
                  backgroundColor: "#353535",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  margin: "5px 10px",
                }}
              >
                {activeTestCase.expected ?? "null"}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TestResult;
