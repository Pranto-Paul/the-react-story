# Modern React Shopping Cart 🛒

A feature-rich, high-performance shopping cart application leveraging **React**, **Vite**, and **Tailwind CSS**. Designed to simulate a seamless e-commerce experience with advanced cart management and cross-tab synchronization.

![Shopping Cart Screenshot](./image.png)

## ✨ Features

- **Dynamic Cart Management**: Add products, increase/decrease item quantities seamlessly, and remove items with zero latency.
- **Persistent Storage**: Cart state is instantly preserved via `localStorage`, guaranteeing users never lose their items upon refresh.
- **Cross-Tab Synchronization**: Changes made in one browser tab automatically update the cart in all other open tabs in real-time!
- **Accurate Calculation**: Shopping cart totals are meticulously and efficiently computed with precision on every pertinent update.
- **Modern UI**: A clean, visually pleasing, and fully responsive grid layout powered by Tailwind CSS.

## 💡 Technical Challenges & Learnings

Building this application presented a number of advanced state management and performance optimization challenges. Solving these obstacles dramatically improved my proficiency with React engineering principles. Here are the key technical challenges I successfully navigated:

- **Lazy State Initialization & Persistence**: Continuously parsing `localStorage` directly inside `useState` causes performance bottlenecks since it re-evaluates on every single render. I elegantly solved this by passing an initializer function into `useState` to leverage React's lazy initial state feature, running the expensive parsing logic exclusively during the initial component mount.
- **Cross-Tab Synchronization & Memory Management**: To provide a professional user experience, I engineered the cart to remain perfectly synced when a user operates across multiple browser tabs. Tapping into the browser's `storage` event listener via the `useEffect` hook required meticulous cleanup functions (`window.removeEventListener`) to prevent dangerous memory leaks and erratic UI behavior caused by stale event handlers.
- **Expensive Calculations & Memoization**: Recalculating the subtotal and total of all items whenever any component rendering occurs is wasteful. To safeguard the application's performance, I abstracted the total cost calculation into a **`useMemo`** hook. This efficiently caches the result, re-calculating the price absolutely only when the `cart` dependency strictly changes.
- **Immutable State Updates**: When adding an item that already exists in the cart, directly modifying the object mutates state and breaks React's tracking. I strictly adhered to immutable deeply-nested state updates by mapping over the previous `currentCart` snapshot to securely increment quantity counts without side effects.

Working heavily with custom hooks (such as `useCart`) equipped me with a much deeper appreciation for extracting robust, reusable business logic, mastering browser APIs, and application lifecycle optimization in complex Frontend applications.

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Build Tool**: [Vite](https://vitejs.dev/)

## 🚀 Getting Started

Follow these steps to set up and run the shopping cart project locally.

### Prerequisites
Make sure you have Node.js and a package manager (`npm` or `bun` as the project uses a `bun.lock` file) installed.

### Installation

1. Navigate to the project directory:
   ```bash
   cd 03_shopping_cart
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

- `src/App.jsx`: Houses the main layout composition, seamlessly integrating the product grid and the cart sidebar.
- `src/hooks/useCart.js`: The powerhouse custom hook encapsulating all immutable cart updates, memoized calculations, and persistent `localStorage` synchronization logic.
- `src/components/`: Modular, decoupled UI components containing the `ProductCard`, `Cart`, and `CartItem` pieces.

## 🤝 Contributing

Contributions, issues, and feature requests are highly welcome! Feel free to checkout the codebase and submit a PR if you have ideas on how to elevate this project further.
