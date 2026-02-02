# Cyber Note 🛡️

A modern blog website for learning cybersecurity. Share notes, tutorials, and guides in an easy-to-read format.

**Live Demo:** [https://your-project-url.com](https://your-project-url.com)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Folder Structure](#folder-structure)

---

## Overview

**Cyber Note** is a blog platform designed for cybersecurity learners and enthusiasts.  
It provides a structured, responsive, and interactive platform to explore topics such as:

- Network Security
- Ethical Hacking
- Cloud Security
- Cybersecurity Tools & Best Practices

The project is built with **React**, **TypeScript**, and **Tailwind CSS** for a modern, maintainable codebase.

---

## Features

- Fully responsive design
- Dark & light mode support
- Easy-to-add tutorials and notes
- Searchable articles
- Clean and modern UI using **shadcn-ui**
- SEO-friendly pages for better visibility

---

## Technologies

- **Frontend:** React + TypeScript
- **UI Components:** shadcn-ui
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Package Manager:** npm

---

## Getting Started

### Prerequisites

- Node.js >=16.x
- npm (comes with Node.js)
- Recommended: [nvm](https://github.com/nvm-sh/nvm)

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project folder
cd cyber-note

# Install dependencies
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

#Folder Structure

```
cyber-note/
├─ public/          # Static assets
├─ src/
│  ├─ components/   # Reusable React components
│  ├─ pages/        # Page-level components (Home, Articles, About)
│  ├─ styles/       # Tailwind/global styles
│  ├─ App.tsx       # Root component
│  └─ main.tsx      # App entry point
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```
