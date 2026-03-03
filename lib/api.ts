import type {
  Problem,
  SubmissionResponse,
  TestcaseResultsData,
} from "@/lib/types";

export const API_BASE_URL = "http://localhost:8080";

const content = `
Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to target.

### Notes
You may assume that each input has exactly one solution.


## Example 1  
**Input:** nums = [2,7,11,15], target = 9  
**Output:** [0,1]  
**Explanation:** nums[0] + nums[1] = 2 + 7 = 9  


## Example 2  
**Input:** nums = [3,2,4], target = 6  
**Output:** [1,2]  
**Explanation:** nums[1] + nums[2] = 2 + 4 = 6  


## Example 3  
**Input:** nums = [3,3], target = 6  
**Output:** [0,1]  
**Explanation:** nums[0] + nums[1] = 3 + 3 = 6  


## Example 4  
**Input:** nums = [1,5,3,7], target = 8  
**Output:** [0,3]  
**Explanation:** nums[0] + nums[3] = 1 + 7 = 8  


## Example 5  
**Input:** nums = [-1,-2,-3,-4,-5], target = -8  
**Output:** [2,4]  
**Explanation:** nums[2] + nums[4] = -3 + -5 = -8  


## Example 6  
**Input:** nums = [0,4,3,0], target = 0  
**Output:** [0,3]  
**Explanation:** nums[0] + nums[3] = 0 + 0 = 0  


### Constraints
- 2 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9
`;

export const dummyProblem: Problem = {
  id: 1,
  title: "Two Sum",
  visibleTestcases: [
    {
      id: 1,
      parameters: [
        { name: "input", value: "[2,7,11,15]" },
        { name: "target", value: "9" },
      ],
      expectedOutput: "[0,1]",
    },
    {
      id: 2,
      parameters: [
        { name: "input", value: "[3,2,4]" },
        { name: "target", value: "6" },
      ],
      expectedOutput: "[1,2]",
    },
    {
      id: 3,
      parameters: [
        { name: "input", value: "[3,3]" },
        { name: "target", value: "6" },
      ],
      expectedOutput: "[0,1]",
    },
  ],
  codeSnippets: [
    {
      language: "Java",
      code: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        
    }
}`,
    },
    {
      language: "JavaScript",
      code: `function twoSum(nums, target) {
  
}`,
    },
    {
      language: "Python",
      code: `class Solution:
    def twoSum(self, nums, target):
        pass`,
    },
    {
      language: "C++",
      code: `#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        
    }
};`,
    },
  ],
  content: content,
};

export const dummyTestcaseResultsData: TestcaseResultsData[] = [
  {
    id: 1,
    parameters: [
      { name: "a", value: "2" },
      { name: "b", value: "3" },
    ],
    stdio: null,
    output: "5",
    expected: "5",
    error: null,
    status: "Passed",
  },
  {
    id: 2,
    parameters: [
      { name: "a", value: "-1" },
      { name: "b", value: "5" },
    ],
    stdio: null,
    output: "3",
    expected: "4",
    error: null,
    status: "Failed",
  },
  {
    id: 3,
    parameters: [
      { name: "a", value: "1000000000" },
      { name: "b", value: "1000000000" },
    ],
    stdio: null,
    output: null,
    expected: "2000000000",
    error: "Time Limit Exceeded",
    status: "Error",
  },
];

export const dummyErrorData = {
  errorType: "Compilation error",
  messages: [
    "Line 3: error: ';' expected",
    "Line 5: error: cannot find symbol",
  ],
};

export const languages = [
  {
    lang: "Java",
    code: " class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        \n    }\n}",
  },
  {
    lang: "Python",
    code: "class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        pass",
  },
  {
    lang: "JavaScript",
    code: "var twoSum = function(nums, target) {\n    \n};",
  },
  {
    lang: "C++",
    code: "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        \n    }\n};",
  },
];

export const dummySubmissionResponseAccepted = {
  submissionId: 123,
  status: "Accepted",
  passedTestCases: 100,
  totalTestCases: 100,
  runtime: "20ms",
  memory: "40mb",
  dateAndTime: "2024-06-01T12:00:00Z",
};
export const dummySubmissionResponseWrongAnswer = {
  submissionId: 123,
  status: "Wrong Answer",
  passedTestCases: 50,
  totalTestCases: 100,
  runtime: "20ms",
  memory: "40mb",
  dateAndTime: "2024-06-01T12:00:00Z",
};
export const dummySubmissionResponseError = {
  submissionId: 123,
  status: "Error",
  typeOffError: "Compilation Error",
  passedTestCases: 0,
  totalTestCases: 100,
  runtime: null,
  memory: null,
  errorMessage: [
    "Line 3: error: ';' expected",
    "Line 5: error: cannot find symbol",
    "Line 7: error: incompatible types",
  ],
  dateAndTime: "2024-06-01T12:00:00Z",
};
export const dummySubmissions = [
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

export const runTestErrorData = {
  testCaseResultsData: [
    {
      id: 0,
      parameters: [],
      stdio: [
        "Compilation Error",
        "Runner.java:80: error: ';' expected",
        "        return new int[] {}",
        "                           ^",
        "1 error",
        "error: compilation failed",
      ],
      output: null,
      expected: null,
      error: null,
      status: "error",
      errorType: "Compilation Error",
    },
  ],
  status: "error",
};

export const runTestPassedData = {
  testCaseResultsData: [
    {
      id: 1,
      parameters: [
        {
          name: "nums",
          value: "[2, 7, 11, 15]",
        },
        {
          name: "target",
          value: "9",
        },
      ],
      stdio: ["kjasdkjahkjsdhkjshd"],
      output: "[0, 1]",
      expected: "[0, 1]",
      error: null,
      status: "passed",
      errorType: null,
    },
    {
      id: 2,
      parameters: [
        {
          name: "nums",
          value: "[3, 2, 4]",
        },
        {
          name: "target",
          value: "6",
        },
      ],
      stdio: ["kjasdkjahkjsdhkjshd"],
      output: "[1, 2]",
      expected: "[1, 2]",
      error: null,
      status: "passed",
      errorType: null,
    },
    {
      id: 3,
      parameters: [
        {
          name: "nums",
          value: "[3, 3]",
        },
        {
          name: "target",
          value: "6",
        },
      ],
      stdio: ["kjasdkjahkjsdhkjshd"],
      output: "[0, 1]",
      expected: "[0, 1]",
      error: null,
      status: "passed",
      errorType: null,
    },
  ],
  status: "Accepted",
};
export const data: SubmissionResponse = {
  submissionId: null,
  status: "Wrong Answer",
  passedTestCases: 3,
  totalTestCases: 12,
  runtime: 0,
  memory: 0,
  date: "Tue Feb 24 13:17:01 IST 2026",
  errorType: null,
  errorMessages: null,
};
