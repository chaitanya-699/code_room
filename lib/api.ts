import type {
  Problem,
  TestCaseResults,
  TestcaseResultsData,
} from "@/lib/types";

const API_BASE_URL = "http://localhost:8080";

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const dummyResponse = {
    message: "Success",
    data: { id: 1, name: "Test" },
  };

  return dummyResponse as T;
} 

export const dummyProblem: Problem = {
  id: 1,
  title: "Sum of Two Numbers",
  statement:
    "Given two integers a and b, return their sum. You must return the result as an integer.",
  visibleTestcases: [
    {
      id: 1,
      parameters: [
        { name: "a", value: "2" },
        { name: "b", value: "3" },
      ],
    },
    {
      id: 2,
      parameters: [
        { name: "a", value: "-1" },
        { name: "b", value: "5" },
      ],
    },
  ],
  codeSnippets: [
    {
      language: "javascript",
      code: `function sum(a, b) {
  return a + b;
}`,
    },
    {
      language: "python",
      code: `def sum(a, b):
    return a + b`,
    },
    {
      language: "java",
      code: `public class Solution {
    public int sum(int a, int b) {
        return a + b;
    }
}`,
    },
  ],
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

export const dummyTestcaseResults: TestCaseResults = {
  status: "Wrong Answer",
  testData: dummyTestcaseResultsData,
  errorData: dummyErrorData,
};

export const languages = [
  {
    lang: "Java",
    code: "public class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        \n    }\n}",
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
export function getProblem(problemId: string) {
  return request<Problem>(`/api/problems/${problemId}`);
}
``;
