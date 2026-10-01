# hanT-spec Portfolio

A personal portfolio website built with **React** and **Vite** by Hanna Tsegay, an aspiring web developer. It introduces who I am, the skills I use, and the projects I've built.

## Features

- **Dark / light mode:** a small sun/moon button in the top-right corner switches between the original dark navy theme and a smoky white theme. The choice is remembered for next time.
- **Sticky header:** the navigation stays at the top while scrolling, with smooth scrolling to each section.
- **Full-width responsive layout:** works on desktop, tablet and mobile.
- **Sections:** Hero, About Me, Skills, Projects and Contact.
- **Contact form** for questions or advice.

## Built With

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- Plain CSS with CSS variables for theming

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/hanT-spec/hanT-spec-portofolio_with_react.git

# 2. Go into the project folder
cd hanT-spec-portofolio_with_react/my-portfolio

# 3. Install dependencies
npm install
npm install react-icons

# 4. Start the development server
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

The production files are created in the `dist/` folder.

## Project Structure

```
my-portfolio/
├── index.html              # Entry HTML (applies the saved theme before the page loads)
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Page layout and sections
│   ├── index.css           # All styles, including dark and light theme variables
│   └── assets/
│       ├── ThemeToggle.jsx # Dark / light mode button
│       └── IT image.png    # Hero image
└── package.json
```

## Customizing the Theme

All colors live in CSS variables at the top of `src/index.css`:

- `:root[data-theme="dark"]`: the original dark navy palette
- `:root[data-theme="light"]`: the smoky white palette

Change a value there and it updates across the whole site.

## Projects Featured

- **My HTML Projects:** practice projects in HTML and CSS, including a dog website and an Apple clone.
- **Mini Supermarket Management System:** a Java project to manage inventory and sales for a small supermarket.
- **Task Manager:** a simple task manager built with JavaScript for adding, editing and deleting tasks.

## Skills

HTML · CSS · JavaScript · React (learning) · C++ · Java · SQL (learning)

## Contact

- **Email:** hannatsegay525@gmail.com
- **LinkedIn:** [linkedin.com/in/hanna-tsegay](https://linkedin.com/in/hanna-tsegay)
- **GitHub:** [github.com/hanT-spec](https://github.com/hanT-spec)

---

© 2026 Hanna Tsegay. *"Live as if you were to die tomorrow. Learn as if you were to live forever."* — Mahatma Gandhi