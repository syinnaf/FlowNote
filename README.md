# Link & Capture — Main

A modern, minimal landing-page project scaffolded with **Vite + React + TypeScript + Tailwind CSS**.
It showcases a clean, design-tool–inspired layout with SVG-only graphics, split views, and strong typographic hierarchy—ideal for product showcases and marketing pages.

---

## ✨ Features

* **SVG-only visuals** (no raster images) with abstract shapes and UI/code split views
* **Responsive, minimal layout** with generous whitespace and accessible color contrast
* **Componentized sections** (Hero, Features grid, Walkthrough, Developer Tools, Team Workflow, CTA, Footer)
* **Type-safe React** using **TypeScript** and Vite HMR for fast iteration
* **Utility-first styling** with **Tailwind CSS** (+ PostCSS)
* **Shadcn/UI-ready** component setup (via `components.json`)
* **Hooks library** (`use-toast`, `use-mobile`) and simple page routing (`pages/Index.tsx`, `pages/NotFound.tsx`)

---

## 🧰 Technologies Used

**Language & Framework**

* **TypeScript**
* **React 18**
* **Vite**

**Styling & UI**

* **Tailwind CSS**
* **PostCSS**
* *(Optional/ready)* **shadcn/ui**

**Tooling**

* **ESLint** (TypeScript config)
* **Bun** *(fast package manager/runtime; `bun.lockb` present)* or **npm**

**Platform**

* **Vercel** — used to deploy and host the final website

**AI Assistant (development only)**

* **IBM Granite (AI Assistant)** — used during development to accelerate coding, documentation, and improvement suggestions

---

## 📦 Project Structure (high level)

```
public/
  favicon.ico
  placeholder.svg
  robots.txt
src/
  assets/
  components/
  hooks/
    use-mobile.tsx
    use-toast.ts
  lib/
    utils.ts
  pages/
    Index.tsx
    NotFound.tsx
  index.css
  main.tsx
  App.tsx
index.html
tailwind.config.ts
postcss.config.js
vite.config.ts
tsconfig*.json
components.json
```

---

## 🚀 Setup Instructions

### 1️⃣ See Online (Recommended)

Deploy with Vercel in one click:

1. Create a new project on **Vercel**
2. Import this repository
3. Framework preset: **Vite**
4. Build command: `vite build`
5. Output directory: `dist`
6. Click **Deploy**

> After deploy, set your domain and enable analytics/caching as desired.

---

### 2️⃣ Run Locally (For Developers)

> You can use **Bun** (fastest) or **npm**. Choose one set of commands below.

**Using Bun**

```bash
# 1) Install Bun if you don't have it
# macOS (brew): brew install oven-sh/bun/bun
# or see: https://bun.sh

# 2) Install deps
bun install

# 3) Start dev server
bun dev
# Vite will start (default: http://localhost:5173)
```

**Using npm**

```bash
# 1) Install deps
npm install

# 2) Start dev server
npm run dev
# Vite will start (default: http://localhost:5173)
```

**Build & Preview**

```bash
# Build production assets
bun run build     # or: npm run build

# Preview the production build locally
bun run preview   # or: npm run preview
```

---

## 🧪 Development Notes

* Tailwind config lives in `tailwind.config.ts` and global styles in `src/index.css`.
* Pages are in `src/pages/`. Update `Index.tsx` for the landing content and `NotFound.tsx` for fallback routing.
* Add reusable pieces in `src/components/` and utilities in `src/lib/`.
* Keep all graphics **SVG-only** (`public/placeholder.svg` is provided as a template).

---

## 🤖 AI Support Explanation

This project utilized **IBM Granite**, an AI-assisted development model, **exclusively during the development phase** — **not** in the final product/runtime.

**IBM Granite was used to:**

* Bootstrap component structures and page sections
* Generate and refine TypeScript/React snippets
* Draft and iterate documentation (including this README)
* Suggest accessibility improvements (semantic HTML, ARIA hints, color contrast)
* Propose testing approaches and refactoring ideas

> No AI code runs in production, and no user data is sent to AI services at runtime.


---

## 👩‍💻 Author
**Syifa Nafisa**

>>>>>>> 2732078 (Initial commit)
