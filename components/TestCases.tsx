"use client";
import { useState } from "react";
function TestCases() {
  const [testcasesData, setTestcasesData] = useState([
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
          value: "2",
        },
      ],
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
          value: "3",
        },
      ],
    },
  ]);

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
              className="value"
              value={param.value}
              onChange={(e) => handleTestcaseChange({ index, e })}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestCases;
