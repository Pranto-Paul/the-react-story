# React Queue Management 👥

A high-performance, interactive customer Queue Management application built with **React**, **Vite**, and **Tailwind CSS**. Easily add customers, track requested services, and efficiently move cases from "waiting" to "completed".

![Queue Management Screenshot](./image.png)

## ✨ Features

- **Customer Intake System**: Add new customers systematically to the queue via dynamic forms mapped to their requested service (Consultation, Payment, or Support).
- **Status Dashboard**: Instantaneously view all waiting patrons categorized by status tags in a scrollable, high-visibility list.
- **Dynamic Controls**: Execute one-click actions to instantly serve customers (which dynamically locks UI components once completed) or securely purge them from the list entirely.
- **Modern UI**: A visually seamless dark-mode interface equipped with clear typography and reactive button states.

## 💡 Technical Challenges & Learnings

Constructing this application was an excellent exercise in mastering the foundational rules of React's Unidirectional Data Flow, complex State Updates, and DOM Event handling. Here are the specific engineering highlights built into the logic to attract technical evaluations:

- **Strict Immutable Array Operations**: Rather than dangerously mutating arrays directly (e.g., using `array.push`), I enforced strict functional updates for all state transitions. I utilized array spread syntax (`[...queue]`) for queue insertions, `Array.map()` with conditional checks to surgically pinpoint and update a user's `.status` property without altering siblings, and `Array.filter()` to execute perfectly memory-safe deletions.
- **Form State & Sanitization**: Managing the intake pipeline required exact control over React Controlled Components (`value={state}`). To prevent bogus data from polluting state arrays and breaking the UI layout, I integrated native `.trim()` sanitization into the `handleSubmit` logic to outright block empty or whitespace-only submissions.
- **Unidirectional Architecture Pattern**: The state for the `queue` acts as a strict "Single Source of Truth" hosted securely in the top-level `App` component. Mutative actions (`addToQueue`, `updateStatus`, `removeFromQueue`) are passed precisely as encapsulated props down to the modular `QueueForm` and `Display` sibling components, preventing volatile data-syncing scenarios across the DOM.
- **Dynamic Prop-Driven Styling**: Relying entirely on React state variables, I implemented reactive stylistic toggles. For example, rendering access or button interaction is natively revoked exactly when a task is finished via the `disabled={customer.status === 'completed'}` prop, seamlessly tying user permissions to internal state.

These challenges equipped me with a deeper appreciation for robust, prop-driven UI structures, data ingestion security, and React's precise rendering paradigms.

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Build Tool**: [Vite](https://vitejs.dev/)

## 🚀 Getting Started

Follow these steps to set up and run the queue manager locally.

### Prerequisites
Make sure you have Node.js and a package manager (`npm` or `bun` as the project uses a `bun.lock` file) installed.

### Installation

1. Navigate to the project directory:
   ```bash
   cd 02_queue_management
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   bun install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## 📂 Key Architecture

- `src/App.jsx`: Houses the overarching Queue array `useState` and core modifier methods, acting fundamentally as the Data Provider.
- `src/components/QueueForm.jsx`: The controlled intake form managing internal view states, UI data ingestion, and pre-submission sanitization.
- `src/components/Display.jsx`: The output renderer translating raw data objects into interactive layouts governed completely by inbound props.

## 🤝 Contributing

Contributions, issues, and feature requests are highly welcome! Feel free to checkout the codebase and submit a PR if you have ideas on how to elevate this project further.
