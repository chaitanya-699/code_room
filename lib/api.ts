import type {
  CreateRoomPayload,
  CreateRoomResponse,
  JoinRoomPayload,
  JoinRoomResponse,
  LeaderboardEntry,
  Problem,
  RoomSubmission,
  SubmissionResult,
  SubmitSolutionPayload,
} from "@/lib/types";

const API_BASE_URL = "http://localhost:8080";

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers ?? {}),
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return (await response.json()) as T;
}

export function createRoom(payload: CreateRoomPayload) {
  return request<CreateRoomResponse>("/api/rooms", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function joinRoom(payload: JoinRoomPayload) {
  return request<JoinRoomResponse>("/api/rooms/join", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function getRoomProblems(roomCode: string) {
  return request<Problem[]>(`/api/rooms/${roomCode}/problems`);
}

export function submitSolution(payload: SubmitSolutionPayload) {
  return request<SubmissionResult>("/api/submissions", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function getRoomSubmissions(roomCode: string) {
  return request<RoomSubmission[]>(`/api/rooms/${roomCode}/submissions`);
}

export function getLeaderboard(roomCode: string) {
  return request<LeaderboardEntry[]>(`/api/rooms/${roomCode}/leaderboard`);
}
