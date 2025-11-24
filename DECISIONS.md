# Project Decisions Overview

## 1. Technology Stack Selection
- **Vite**: Chosen for its fast development server and optimized build process compared to Create React App. It provides a modern development experience with Hot Module Replacement (HMR).
- **React**: The core library for building the user interface, as requested.
- **CSS Modules / Standard CSS**: Used standard CSS with a global stylesheet for simplicity and complete control over the "premium" aesthetic without the overhead of setting up a utility-first framework like Tailwind (unless specifically requested, which it wasn't, though I kept it in mind).

## 2. Custom Hook Design (`useFetch`)
- **Encapsulation**: The `useFetch` hook encapsulates the logic for fetching data, managing loading states, and handling errors. This keeps the components clean and focused on UI rendering.
- **Reusability**: The hook accepts a `url` parameter, making it reusable for any API endpoint.
- **State Management**: It returns `data`, `loading`, and `error` states, covering the essential aspects of asynchronous data fetching.
- **Cleanup**: The `useEffect` dependency array includes `url` to refetch if the URL changes.

## 3. Component Architecture
- **ProductList Component**: Created a dedicated component for displaying the list of products. This promotes separation of concerns.
- **Error & Loading UI**: Implemented distinct UI states for loading (spinner) and errors (retry button) to enhance user experience.

## 4. Styling & Aesthetics
- **Premium Look**: Aimed for a clean, modern, and "premium" look using a sophisticated color palette (dark blues, clean whites, accent reds).
- **Interactivity**: Added hover effects on product cards (lift and shadow) to make the interface feel dynamic and responsive.
- **Responsiveness**: Used CSS Grid to ensure the layout adapts gracefully to different screen sizes.

## 5. Error Handling
- **Network Errors**: The hook catches network errors and non-200 HTTP responses.
- **Image Fallback**: Implemented an `onError` handler for images to display a placeholder if the product image fails to load, preventing broken UI elements.
