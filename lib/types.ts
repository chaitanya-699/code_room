export interface Problem {
  id: number;
  title: string;
  visibleTestcases: VisibleTestcase[];
  codeSnippets: CodeSnippet[];
  content: string;
}

export interface TestCaseResults {
  testCaseResultsData: TestCaseResultData[];
  status: string;
}

export interface TestCaseResultData {
  id: number;
  parameters: Parameters[];
  stdio: string[];
  output: string | null;
  expected: string | null;
  error: string | null;
  status: string;
  errorType: string | null;
}
export interface Examples {
  input: string;
  output: string;
  explanation?: string;
}
export interface CodeSnippet {
  language: string;
  code: string;
}
export interface VisibleTestcase {
  id: number;
  parameters: Parameters[];
  expectedOutput: string;
}
export interface Parameters {
  name: string;
  value: string;
}
export interface TestcaseResultsData {
  id: number;
  parameters: Parameters[];
  stdio: string[] | null;
  output: string | null;
  expected: string | null;
  error: string | null;
  status: string;
}

export interface ErrorData {
  errorType: string;
  messages: string[];
}

export interface Language {
  lang: string;
  code: string;
}

export interface SubmissionData {
  id: number;
  status: string;
  date: string;
  language: string;
  runtime: string;
  memory: string;
}
