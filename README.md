Here’s a **complete, up-to-date guide** on how to install **Tailwind CSS v4** with **React + Vite**.
This follows the **official Tailwind v4 setup**.

---

## 🌟 Step-by-Step Guide: Tailwind CSS v4 + React + Vite

---

### 1. **Create a new Vite + React project**

If you don’t have one already:

```bash
npm create vite@latest my-portfolio
cd my-portfolio
```

Select:

```
✔ Framework: › React
✔ Variant: › JavaScript
```

Then install dependencies:

```bash
npm install
```

---

### 2. **Install Tailwind CSS v4 and the Vite plugin**

Run this command:

```bash
npm install -D tailwindcss @tailwindcss/vite
```

> Tailwind v4 doesn’t use `postcss` or `autoprefixer` manually — it’s all built-in.

---

### 3. **Add the Tailwind plugin to your Vite config**

Open `vite.config.js` (or `vite.config.ts`) and add this:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

---

### 4. **Configure your CSS**

Open `src/index.css` (or create it if missing)
and replace everything with this:

```css
@import "tailwindcss";
```

That’s it — no need for `@tailwind base; @tailwind components; @tailwind utilities;` anymore in v4.

---

### 5. **Import the CSS in your entry file**

In `src/main.jsx` (or `src/index.jsx`), make sure this line exists:

```js
import './index.css'
```

---

### 6. **Use Tailwind classes**

You can now use Tailwind in your React components.

Example (`App.jsx`):

```jsx
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        Welcome to Our Portfolio Projects
      </h1>
    </div>
  )
}

export default App
```

---

### 7. **Run your project**

```bash
npm run dev
```

Then visit the URL shown in your terminal (usually `http://localhost:5173`).

If everything is correct, you should see a **blue “Welcome…”** text centered on a gray background.

---

### 8. **Optional: using `@apply` in CSS**

If you want to use `@apply` in CSS (e.g. inside `App.css`),
Tailwind v4 now requires a **reference directive** at the top:

```css
@reference "tailwindcss";

#root {
  @apply max-w-5xl mx-auto p-8 text-center;
}
```

Or you can move the classes directly into JSX — which is the recommended way.

---

### ✅ Summary

| Step | Action                         | Example                                  |
| ---- | ------------------------------ | ---------------------------------------- |
| 1    | Create Vite + React project    | `npm create vite@latest`                 |
| 2    | Install Tailwind + Vite plugin | `npm i -D tailwindcss @tailwindcss/vite` |
| 3    | Add plugin to `vite.config.js` | `plugins: [react(), tailwindcss()]`      |
| 4    | Import Tailwind in CSS         | `@import "tailwindcss";`                 |
| 5    | Import CSS into entry file     | `import './index.css'`                   |
| 6    | Use Tailwind utilities         | `className="text-blue-600"`              |
| 7    | Run dev server                 | `npm run dev`                            |


