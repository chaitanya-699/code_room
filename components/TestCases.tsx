"use client";
import { Problem } from "@/lib/types";
import { useState } from "react";
function TestCases({ problemData }: { problemData: Problem | null }) {
  const [testcasesData, setTestcasesData] = useState(
    problemData?.visibleTestcases || [],
  );
  const [selectedTestCase, setSelectedTestCase] = useState(testcasesData[0]);
  const handleTestcaseChange = ({
    index,
    e,
  }: {
    index: number;
    e: React.ChangeEvent<HTMLInputElement>;
  }) => {
    const selectedTestCaseCopy = { ...selectedTestCase };
    selectedTestCaseCopy.parameters[index].value = e.target.value;
    setSelectedTestCase(selectedTestCaseCopy);
    setTestcasesData((prevTestcasesData) =>
      prevTestcasesData.map((testcase) =>
        testcase.id === selectedTestCaseCopy.id
          ? selectedTestCaseCopy
          : testcase,
      ),
    );
  };
  return (
    <div className="testcase-body">
      <div className="cases-header">
        {testcasesData.map((testcase) => (
          <button
            className={
              selectedTestCase.id === testcase.id ? "activeTestCase" : ""
            }
            key={testcase.id}
            onClick={() => setSelectedTestCase(testcase)}
          >
            case {testcase.id}
          </button>
        ))}
      </div>
      <div className="cases-body">
        {selectedTestCase.parameters.map((param, index) => (
          <div key={index} className="testcase-parameter-container">
            <p className="name">{param.name} =</p>
            <input
              readOnly
              type="text"
              className="value"
              value={param.value}
              onChange={(e) => handleTestcaseChange({ index, e })}
            />
          </div>
        ))}
        <div
          className="expectedOutput"
          style={{
            alignSelf: "stretch",
          }}
        >
          <p
            style={{
              margin: "10px",
            }}
          >
            Expected =
          </p>
          <p
            style={{
              width: "auto",
              fontSize: 15,
              padding: 10,
              backgroundColor: "#333333",
              borderRadius: 5,
              margin: 10,
              outline: "none",
            }}
          >
            {selectedTestCase.expectedOutput}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestCases;
