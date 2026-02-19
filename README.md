# CodeRoom

CodeRoom is a collaborative coding platform for classrooms and training sessions.
It supports teacher-led live coding rooms, problem assignment, student submissions,
auto-evaluation, and session monitoring.

## Core Product Design

### Roles

- **Teacher**
  - Creates coding rooms
  - Assigns problems
  - Monitors submissions and leaderboard
- **Student**
  - Joins via room code
  - Solves and submits coding problems
  - Tracks result and ranking

### Frontend Modules

- **Overview**: product purpose and classroom flow
- **Teacher Room**: room creation + session setup
- **Student Workspace**: room join + code editor + submission
- **Live Monitor**: submissions feed + leaderboard

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS

## Backend Integration

All backend requests are configured to call:

- `http://localhost:8080`

API client is implemented in [lib/api.ts](lib/api.ts).
Domain models are in [lib/types.ts](lib/types.ts).

### Planned API Contract

- `POST /api/rooms` → create room
- `POST /api/rooms/join` → join room
- `GET /api/rooms/:roomCode/problems` → room problems
- `POST /api/submissions` → submit solution
- `GET /api/rooms/:roomCode/submissions` → live submissions
- `GET /api/rooms/:roomCode/leaderboard` → leaderboard

## Run Locally

1. Install dependencies:
	- `npm install`
2. Start frontend:
	- `npm run dev`
3. Open:
	- `http://localhost:3000`

> Note: UI is ready for backend wiring, but requires API server at
> `http://localhost:8080` to return live room/problem/submission data.
