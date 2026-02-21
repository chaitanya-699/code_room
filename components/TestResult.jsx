import { dummyTestcaseResults } from "@/lib/api";
import { useState } from "react";

function TestResult() {
  const [testCaseData] = useState(dummyTestcaseResults);
  const [activeTestCase, setActiveTestCase] = useState(
    testCaseData.testData[0],
  );

  return (
    <div className="testresult-body">
      <h1>
        {testCaseData.status.toLowerCase() !== "error"
          ? testCaseData.status.toLowerCase()
          : testCaseData.errorData?.errorType || "Error"}
      </h1>
      <div className="results-header">
        {testCaseData.status !== "error" &&
          testCaseData.testData.map((testcase) => (
            <div
              className={`results-header-container ${testcase.id === activeTestCase.id ? "activeResultTab" : ""}`}
              onClick={() => setActiveTestCase(testcase)}
              key={testcase.id}
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
      <div className="results-body">
        {testCaseData.status.toLowerCase() === "error" && (
          <div
            style={{
              width: "auto",
              margin: "10px",
              marginTop: "0px",
              borderRadius: "8px",
              padding: "10px",
              backgroundColor: "rgba(239, 68, 68, 0.15)",
              color: "#ef4444",
            }}
          >
            {testCaseData.errorData?.messages.map((message, index) => (
              <p key={index}>{message}</p>
            ))}
          </div>
        )}
        {testCaseData.status.toLowerCase() !== "error" && (
          <div
            className="inputs-body"
            style={{
              width: "100%",
            }}
          >
            <h3
              style={{
                marginLeft: "10px",
                padding: "4px",
              }}
            >
              input
            </h3>
            <div
              style={{
                padding: "5px",
                margin: "7px 10px",
                borderRadius: "8px",
              }}
            >
              {activeTestCase.parameters.map((param, index) => (
                <div
                  style={{
                    padding: "5px",
                    backgroundColor: "#353535",
                    marginBottom: "5px",
                    borderRadius: "5px",
                  }}
                  key={index}
                >
                  <p
                    style={{
                      padding: "2px",
                      color: "rgba(255, 255, 255, 0.381)",
                      marginBottom: "0px",
                      paddingBottom: "0px",
                    }}
                  >
                    {param.name} ={" "}
                  </p>
                  <p
                    style={{
                      margin: "2px",
                      marginTop: "0px",
                      padding: "5px",
                      fontSize: "15px",
                    }}
                  >
                    {param.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTestCase.stdio != null && testCaseData.status !== "error" && (
          <div
            className="stdio-block"
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
              padding: "5px",
              width: "100%",
            }}
          >
            <h2
              style={{
                margin: "5px 10px",
              }}
            >
              Stdio
            </h2>

            <div
              className="stdio-output"
              style={{
                flex: "1",
                backgroundColor: "#353535",
                borderRadius: "8px",
                margin: "5px 10px",
                padding: "5px",
              }}
            >
              {activeTestCase.stdio.map((line, index) => (
                <p
                  style={{
                    padding: "5px",
                    paddingLeft: "10px",
                    borderRadius: "5px",
                  }}
                  key={index}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        )}
        {testCaseData.status.toLowerCase() !== "error" && (
          <div
            className="output-body"
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "5px",
              width: "100%",
            }}
          >
            <h3
              style={{
                marginLeft: "10px",
              }}
            >
              output
            </h3>
            <p
              style={{
                backgroundColor: "#353535",
                padding: "10px",
                paddingLeft: "15px",
                borderRadius: "8px",
                margin: "5px 10px",
              }}
            >
              {activeTestCase.output === null ? "null" : activeTestCase.output}
            </p>
          </div>
        )}
        {testCaseData.status.toLowerCase() !== "error" && (
          <div
            className="expected-body"
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "5px",
              width: "100%",
            }}
          >
            <h3
              style={{
                marginLeft: "10px",
              }}
            >
              expected
            </h3>
            <p
              style={{
                backgroundColor: "#353535",
                padding: "10px",
                paddingLeft: "15px",
                borderRadius: "8px",
                margin: "5px 10px",
              }}
            >
              {activeTestCase.expected === null
                ? "null"
                : activeTestCase.expected}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TestResult;
