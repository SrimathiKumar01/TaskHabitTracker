# Task Habit Tracker

A modern, responsive productivity application designed to help users organize their daily workflow, maintain consistency, and track progress over time.

---

## 🎯 Product Description

Build a modern, responsive Task Habit Tracker that helps users:

* **Organize daily tasks.**
* **Manage task priorities and deadlines.**
* **Build consistent daily habits.**
* **Track habit completion and streaks.**
* **Monitor productivity and progress.**
* **Understand their weekly performance.**

---

## 💡 Core Design Philosophy: Tasks vs. Habits

A fundamental architectural principle of this application is that **Tasks and Habits are treated as separate concepts**:

| Concept | Nature | Lifespan | Tracking Metric |
| :--- | :--- | :--- | :--- |
| **Tasks** | Finite activities | Once done, they are checked off and marked complete. | Completion status (`completed: boolean`), priority, and due dates. |
| **Habits** | Recurring routines | Never truly "done"; they repeat daily or weekly. | Date-specific completion history (`completedDates: string[]`) and consecutive streaks. |

---

## 🚀 Tech Stack

* **Frontend**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Build Tool**: [Vite 8](https://vitejs.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
* **Routing**: [React Router](https://reactrouter.com/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Linter**: [Oxlint](https://oxc.rs/docs/guide/usage/linter)

---

## 🛠️ Project Structure

```text
src/
├── components/          # Reusable UI elements
│   ├── Navbar.tsx       # App navigation header with route indicator
│   └── tasks/           # Task components (TaskItem, TaskFormModal)
├── hooks/
│   └── useLocalStorage.ts # Custom hook for local storage persistence
├── pages/
│   ├── DashboardPage.tsx # Overview, metrics, and core concepts
│   ├── TasksPage.tsx    # To-do lists, priority filters, search, and progress
│   └── HabitsPage.tsx   # Habit tracker and streak monitoring
├── types/
│   └── index.ts         # TypeScript models for Task, Habit, Priority, etc.
├── App.tsx              # Application shell with React Router routes
├── index.css            # Tailwind CSS v4 directives and theme variables
└── main.tsx             # React entry point
```

---

## 💻 Getting Started

### Development
```bash
npm install
npm run dev
```

### Production Build & Lint
```bash
npm run build
npm run lint
```
