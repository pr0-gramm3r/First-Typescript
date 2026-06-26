# TypeScript React — Learning Project

A hands-on React project built with TypeScript, exploring core TSX concepts like typed props, typed state, and typed event handlers through practical UI components.

---

## Overview

This project was created as a personal exercise in applying TypeScript to a React application. It demonstrates how to correctly type components, props, state, and DOM events — all common pain points when transitioning from plain JavaScript to TypeScript in React.

The app renders two components:

- **Button** — displays a book record from state and lets you toggle between two values
- **Form** — a controlled input that echoes typed text in real time

---

## Tech Stack

| Technology | Version |
|---|---|
| React | ^19.2.6 |
| TypeScript | ~6.0.2 |
| Vite | ^8.0.12 |
| ESLint | ^10.3.0 |
| @vitejs/plugin-react | ^6.0.1 |

---

## Project Structure

```
src/
├── components/
│   └── Button.tsx      # Button component + exported Form component
├── App.tsx             # Root component, composes Button and Form
├── main.tsx            # Entry point, mounts React app
└── index.css           # Global styles
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd typescript

# Install dependencies
npm install
```

### Running the Dev Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

---

## Key TypeScript Concepts Used

### Typed Props

```tsx
interface Props {
  text: string;
  onClick?: () => void;  // optional callback
}

const Button = (props: Props) => { ... }
```

### Typed State with Interfaces

```tsx
interface Book {
  name: string;
  price: number;
}

const [value, setValue] = useState<Book>(initialValue);
```

### Typed Event Handlers

```tsx
// Controlled input
const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
};

// Form submission
const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
  e.preventDefault();
};
```

### Optional / Union Types in State

```tsx
const [value, setValue] = useState<string | undefined>();
```

---

## What I Learned

- How to define and apply TypeScript `interface` for component props and state shapes
- The difference between `React.ChangeEvent`, `React.SyntheticEvent`, and when to use each
- Why `password` in a form interface should be typed as `string`, not `number`
- How `flex-direction: column` must be applied to the direct parent of the elements you want stacked
- How to use `Partial<T>` for optional prop defaults

---

## Author

**pr0-gramm3r** — [kumarayush111111112@gmail.com](mailto:kumarayush111111112@gmail.com)

---

## License

This project is for learning purposes and is not licensed for commercial use.
