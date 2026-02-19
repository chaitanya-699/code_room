export interface CreateRoomPayload {
  title: string;
  teacherName: string;
}

export interface CreateRoomResponse {
  roomCode: string;
  title: string;
}

export interface JoinRoomPayload {
  roomCode: string;
  studentName: string;
}

export interface JoinRoomResponse {
  roomCode: string;
  message?: string;
}

export interface Problem {
  id: string;
  title: string;
  statement: string;
  difficulty?: "easy" | "medium" | "hard";
  topic?: string;
}

export interface SubmitSolutionPayload {
  roomCode: string;
  problemId: string;
  studentName: string;
  language: string;
  code: string;
}

export interface SubmissionResult {
  status: "accepted" | "wrong_answer" | "runtime_error" | "pending" | string;
  passedTestCases: number;
  totalTestCases: number;
}

export interface RoomSubmission {
  id: string;
  studentName: string;
  problemTitle: string;
  status: string;
  language: string;
  submittedAt: string;
}

export interface LeaderboardEntry {
  rank: number;
  studentName: string;
  problemsSolved: number;
  score: number;
}
