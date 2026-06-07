# NexGen AI — AI Automation Agency Website

## Project Info

- **Name:** NexGen AI Agency Website
- **Type:** React + Vite Multi-page SPA
- **Location:** `c:\Users\hp\Agecy website\agency-website`
- **Created:** 2026-06-07
- **Stack:** React 19, Vite 6, Tailwind CSS 3.4, React Three Fiber, Framer Motion

---

## Tech Stack

| Technology          | Purpose                          |
|---------------------|----------------------------------|
| React 19            | UI Framework                     |
| Vite 6              | Build Tool / Dev Server          |
| React Router v6     | Client-side Routing              |
| Tailwind CSS 3.4    | Utility-first Styling            |
| React Three Fiber   | 3D Scene in React               |
| @react-three/drei   | 3D Helpers / Controls           |
| Three.js            | 3D Graphics Engine              |
| Framer Motion       | Page Transitions + Animations   |
| Lucide React        | Icons                            |

---

## Folder Structure

```
agency-website/
├── public/
├── src/
│   ├── data/
│   │   └── services.js  # All 8 services data (icons, features, pain points)
│   ├── assets/           # Static assets (images, logos)
│   ├── components/
│   │   ├── Navbar.jsx    # Top nav with glassmorphism + mobile hamburger
│   │   ├── Footer.jsx    # Footer with links, contact, social
│   │   └── 3d/
│   │       └── Scene.jsx # R3F Canvas: icosahedron + particles
│   ├── pages/
│   │   ├── Home.jsx      # Hero + 3D + Features + Stats + CTA
│   │   ├── Services.jsx  # 8 Service Cards + 4-Step Process (clickable cards)
│   │   ├── ServiceDetail.jsx  # Dynamic service detail page (pain points + video section)
│   │   └── About.jsx     # Mission/Vision + Team + Values
│   ├── App.jsx           # Router setup (BrowserRouter)
│   ├── main.jsx          # Entry point (createRoot)
│   └── index.css         # Tailwind directives + custom classes
├── index.html            # HTML template (Google Fonts)
├── tailwind.config.js    # Custom colors (dark/neon palette)
├── postcss.config.js     # PostCSS setup
├── package.json
└── vite.config.js
```

---

## Pages

| Route        | Page      | Description                                      |
|--------------|-----------|--------------------------------------------------|
| `/`              | Home           | 3D hero scene, feature cards, animated stats, CTA |
| `/services`      | Services       | 8 AI service cards with process timeline (clickable) |
| `/service/:id`   | ServiceDetail  | Dynamic detail page — pain points, video section, features |
| `/about`         | About          | Mission/Vision, team avatars, company values       |

---

## Custom CSS Classes (from `index.css`)

| Class        | Effect                                              |
|--------------|-----------------------------------------------------|
| `.glass`     | Glassmorphism: semi-transparent + blur + border     |
| `.glass-card`| Gradient glass card with shadow                     |
| `.neon-text` | Cyan/Blue text glow                                 |
| `.gradient-text` | Blue-to-Cyan gradient text (transparent bg)     |
| `.btn-primary` | Gradient button (blue → purple) with hover lift |

---

## Custom Tailwind Colors

| Token             | Hex        | Usage                    |
|-------------------|------------|--------------------------|
| `dark.bg`         | `#0a0a0f`  | Page background          |
| `dark.card`       | `#13131f`  | Card backgrounds         |
| `dark.border`     | `#1e1e2e`  | Borders / dividers       |
| `neon.blue`       | `#00a8ff`  | Primary accent           |
| `neon.cyan`       | `#00e5ff`  | Secondary accent         |
| `neon.purple`     | `#7c3aed`  | Gradient end             |

---

## 3D Scene Details

- **File:** `src/components/3d/Scene.jsx`
- **Main Shape:** Icosahedron with wireframe overlay
- **Effects:** Floating animation (`<Float>`), orbiting particles, background particles
- **Controls:** Auto-rotate, mouse orbit (no zoom/pan)
- **Lights:** Ambient + 2 point lights (blue + purple) + directional

---

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build → dist/
npm run preview  # Preview production build
```

---

## Dependencies

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-router-dom": "^7.0.0",
  "three": "^0.170.0",
  "@react-three/fiber": "^9.0.0",
  "@react-three/drei": "^9.0.0",
  "framer-motion": "^12.0.0",
  "lucide-react": "^0.460.0",
  "tailwindcss": "3.4.1",
  "postcss": "^8.4.0",
  "autoprefixer": "^10.4.0"
}
```

---

## Skill Reference

- **Skill File:** `.claude/skills/custom/agency-website.md`
- Contains: Customization guide, project structure, how to modify colors/pages/3D

---

## Notes

- Built as static SPA (no SSR)
- 3D scene uses WebGL — ensure browser compatibility
- Brand icons (GitHub/Twitter/LinkedIn) not in latest `lucide-react` → using generic icons
- Tailwind v3 used (v4 has breaking changes with `@tailwind` directives)
