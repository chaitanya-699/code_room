export interface Problem {
  id: number;
  title: string;
  statement: string;
  visibleTestcases: VisibleTestcase[];
  codeSnippets: CodeSnippet[];
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

export interface TestCaseResults {
  status: string;
  testData: TestcaseResultsData[];
  errorData?: ErrorData;
}
