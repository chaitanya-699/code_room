# CodeRoom

CodeRoom is a live coding test platform that lets anyone create a test room, pick coding questions, and share a 6-digit room code with participants. Participants join instantly from any device — no setup, no friction.

## What It Does

Create a room, assign problems, and share a 6-digit code. Participants join in seconds, write code directly in the browser, and submit for automatic evaluation. Results and verdicts are delivered instantly.

## How It Works

1. **Create a Room** — Log in and spin up a new test room. Name it and configure your settings.
2. **Choose Questions** — Pick from curated coding problems across difficulty levels and language categories.
3. **Share the Code** — Get a unique 6-digit room code and share it with your participants.
4. **Solve & Evaluate** — Participants join, write code, and submit. Auto-evaluation delivers instant verdicts.

## Key Features

- **Real-time Environment** — Code execution happens live with instant output and feedback.
- **Room-based Sessions** — Isolated test rooms with unique 6-digit codes — private and secure.
- **Secure Login Required** — Only authenticated users can create or join sessions.
- **Multiple Languages** — Full support for Python, JavaScript, C++, Java, Go, Rust, and more.
- **Auto Evaluation** — Submissions are automatically judged against test cases with instant verdicts.
- **Instant Room Sharing** — Just share a 6-digit code — participants join from any device without any installation.

## Use Cases

- **Interview Practice** — Run technical interviews with candidates in a realistic coding environment.
- **Coding Contests** — Host competitive programming rounds with multiple participants live in a single session room.
- **Classroom Tests** — Instructors can assign live coding exams and monitor every submission in real-time.
- **Peer Challenges** — Challenge friends or teammates to solve problems inside a shared private room session.

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Plain CSS

## Backend Integration

All backend requests are configured to call `http://localhost:8080`.

- API client: [lib/api.ts](lib/api.ts)
- Domain models: [lib/types.ts](lib/types.ts)
