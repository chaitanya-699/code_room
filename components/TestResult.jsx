import React from "react";

function TestResult() {
  const [testCaseData, setTestCaseData] = React.useState([
    {
      id: 1,
      parameters: [
        {
          name: "nums",
          value: "[3,4,5,6]",
        },
        {
          name: "val",
          value: "1",
        },
      ],
      stdio: ["line 1", "line 2", "line 3"],
      output: "output of test case 1",
      expected: "expected output of test case 1",
      status: "failed",
    },
    {
      id: 2,
      parameters: [
        {
          name: "nums",
          value: "[3,4,5,6]",
        },
        {
          name: "val",
          value: "1",
        },
      ],
      stdio: ["line 1", "line 2", "line 3"],
      output: "output of test case 1",
      expected: "expected output of test case 1",
      status: "passed",
    },
    {
      id: 3,
      parameters: [
        {
          name: "nums",
          value: "[3,4,5,6]",
        },
        {
          name: "val",
          value: "2",
        },
      ],
      stdio: ["line 1", "line 2", "line 3"],
      output: "output of test case 1",
      expected: "expected output of test case 1",
      status: "passed",
    },
    {
      id: 4,
      parameters: [
        {
          name: "nums",
          value: "[3,4,5,6]",
        },
        {
          name: "val",
          value: "1",
        },
      ],
      stdio: ["line 1", "line 2", "line 3"],
      output: "output of test case 1",
      expected: "expected output of test case 1",
      status: "passed",
    },
  ]);
  const [activeTestCase, setActiveTestCase] = React.useState(testCaseData[0]);

  return (
    <div className="testresult-body">
      <h1>Wrong Answer</h1>
      <div className="results-header">
        {testCaseData.map((testcase) => (
          <div
            className={`results-header-container ${testcase.id === activeTestCase.id ? "activeResultTab" : ""}`}
            onClick={() => setActiveTestCase(testcase)}
            key={testcase.id}
          >
            {testcase.status === "passed" ? (
              <div
                style={{
                  width: "13px",
                  height: "13px",
                  display: "inline-block",
                  backgroundColor: "#22c55e",
                  color: "white",
                  fontSize: "9px",
                  borderRadius: "2px",
                  textAlign: "center",
                }}
              >
                ✓
              </div>
            ) : (
              <div
                style={{
                  width: "13px",
                  height: "13px",
                  display: "inline-block",
                  backgroundColor: "red",
                  color: "white",
                  fontSize: "9px",
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
        <h3
          style={{
            marginLeft: "10px",
            padding: "4px",
          }}
        >
          Input
        </h3>
        <div
          style={{
            padding: "5px",
            backgroundColor: "#353535",
            margin: "7px 10px",
            borderRadius: "8px",
          }}
        >
          {activeTestCase.parameters.map((param, index) => (
            <div
              style={{
                paddingLeft: "5px",
              }}
              key={index}
            >
              <p
                style={{
                  padding: "2px",
                  margin: "2px",
                  color: "rgba(255, 255, 255, 0.381)",
                }}
              >
                {param.name} ={" "}
              </p>
              <p
                style={{
                  margin: "2px",
                  padding: "2px",
                  paddingLeft: "15px",
                }}
              >
                {param.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestResult;
