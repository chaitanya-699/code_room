import { useState } from "react";
import ReactMarkdown from "react-markdown";

function ProblemDescription({ leftWidth }: { leftWidth: number }) {
  const content = `
Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to target.

### Notes
You may assume that each input has exactly one solution.


### Example 1
Input: nums = [2,7,11,15], target = 9  
Output: [0,1]  
Explanation: nums[0] + nums[1] = 2 + 7 = 9

### Example 1
Input: nums = [2,7,11,15], target = 9  
Output: [0,1]  
Explanation: nums[0] + nums[1] = 2 + 7 = 9

### Example 1
Input: nums = [2,7,11,15], target = 9  
Output: [0,1]  
Explanation: nums[0] + nums[1] = 2 + 7 = 9

### Example 1
Input: nums = [2,7,11,15], target = 9  
Output: [0,1]  
Explanation: nums[0] + nums[1] = 2 + 7 = 9

### Example 1
Input: nums = [2,7,11,15], target = 9  
Output: [0,1]  
Explanation: nums[0] + nums[1] = 2 + 7 = 9


### Constraints
- 2 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9
`;
  const [showDescription, setShowDescription] = useState<string>("description");
  const [isSubmitted] = useState<boolean>(true);
  const dummySubmissions = [
    {
      id: 1,
      status: "Accepted",
      date: "2024-06-01",
      language: "JavaScript",
      runtime: "20ms",
      memory: "40mb",
    },
    {
      id: 2,
      status: "Wrong Answer",
      date: "2024-06-02",
      language: "Python",
      runtime: "N/A",
      memory: "N/A",
    },
    {
      id: 3,
      status: "Time Limit Exceeded",
      date: "2024-06-03",
      language: "Java",
      runtime: "N/A",
      memory: "N/A",
    },
    {
      id: 4,
      status: "Wrong Answer",
      date: "2024-06-02",
      language: "Python",
      runtime: "N/A",
      memory: "N/A",
    },

    {
      id: 5,
      status: "Wrong Answer",
      date: "2024-06-02",
      language: "Python",
      runtime: "N/A",
      memory: "N/A",
    },
  ];

  return (
    <div className="left" style={{ width: `${leftWidth}%` }}>
      <div className="left-body-header">
        <button onClick={() => setShowDescription("description")}>
          Description
        </button>
        <button onClick={() => setShowDescription("submissions")}>
          Submissions
        </button>
      </div>
      {showDescription === "description" ? (
        <div className="question-main-body">
          <h1>Two Sum</h1>
          <div className="problem-markdown">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      ) : (
        <div className="submissions-container">
          <div className="submission-table">
            <div className="submission-header">
              <p>s.no</p>
              <p>status</p>
              <p>language</p>
              <p>runtime</p>
              <p>memory</p>
            </div>
            {isSubmitted &&
              dummySubmissions.map((submission, index) => (
                <div key={submission.id} className="submission-row">
                  <p>{index + 1}</p>
                  <p>{submission.status}</p>
                  <p>{submission.language}</p>
                  <p>{submission.runtime}</p>
                  <p>{submission.memory}</p>
                </div>
              ))}
            {!isSubmitted && (
              <p
                style={{
                  textAlign: "center",
                  padding: "5px",
                  fontSize: "17px",
                }}
                className="no-submissions"
              >
                No submissions yet.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProblemDescription;
