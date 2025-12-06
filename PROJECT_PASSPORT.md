# Project Passport

- **Project name:** Todo Garden
- **Owner:** (fill with your name if required)
- **Date:** 2025-12-06

## Purpose
Build a lightweight React/Vite todo application that lets a user create tasks, view them all, and remove any item, with a polished dynamic UI.

## Tech Stack
- React 18 + TypeScript
- Vite 7 bundler/dev server
- Styling: custom CSS (glassmorphism, animations)

## Core Requirements
- Add new todo items via input + submit button.
- Preview all todos in a list (newest first).
- Remove a single todo from the list.
- Provide basic UX feedback (disabled add button when input is empty, animated cards, count badge).

## Non-Functional Goals
- Responsive layout for mobile and desktop.
- Accessible semantics: list roles, button labels, focus styles.
- Zero external backend; state is client-side.

## Setup & Run (Local Deployment)
```bash
npm install
npm run dev
# open the shown localhost URL (default http://localhost:5173)
```

## Build
```bash
npm run build
```
Outputs to `dist/`.

## Debug/QA Notes
- Current tests: manual; build succeeds (`npm run build`).
- Known issues: none observed yet.
- Potential future enhancements: persistence (localStorage), edit tasks, filters, drag reordering, keyboard shortcuts, basic tests.

## Deployment Notes
- Local-only; for static hosting publish the `dist` folder to any static host (e.g., GitHub Pages, Netlify, Vercel).

## Repository
- Path: `/Users/kirilslusnickis/Web-Programming/Laboratory_2`
- Branch: (not tracked; initialize git and push to GitHub when ready).
