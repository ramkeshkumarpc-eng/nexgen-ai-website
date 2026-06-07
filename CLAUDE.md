# NexGen AI — AI Automation Agency Website

## Project Info

- **Name:** NexGen AI Agency Website
- **Type:** React + Vite Multi-page SPA
- **Location:** `c:\Users\hp\Agecy website\agency-website`
- **Created:** 2026-06-07
- **Last Updated:** 2026-06-07
- **Stack:** React 19, Vite 6, Tailwind CSS 3.4, React Three Fiber, Framer Motion

---

## Tech Stack

| Technology          | Purpose                          |
|---------------------|----------------------------------|
| React 19            | UI Framework                     |
| Vite 6              | Build Tool / Dev Server          |
| React Router v7     | Client-side Routing              |
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
│   ├── Founder-Image.png
│   ├── AIS Certificet.png
│   └── video-placeholder.jpg
├── src/
│   ├── data/
│   │   └── services.js       # All 9 services data (icons, features, pain points, +1 custom)
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx        # Glassmorphism nav + mobile hamburger with scroll lock
│   │   ├── Footer.jsx        # Links, contact, social, privacy policy
│   │   └── 3d/
│   │       └── Scene.jsx     # R3F Canvas: icosahedron + orbiting particles
│   ├── pages/
│   │   ├── Home.jsx          # Hero + 3D centered + Features + Stats + CTA
│   │   ├── Services.jsx      # 8 service cards (2-col on mobile, square) + custom card + process
│   │   ├── ServiceDetail.jsx # Dynamic detail page per service (pain points, video, features)
│   │   ├── Contact.jsx       # Contact form with validation + service selector
│   │   ├── About.jsx         # Mission/Vision, founder, certificate, values
│   │   └── PrivacyPolicy.jsx # 8-section privacy policy page
│   ├── App.jsx               # Router + ScrollToTop component
│   ├── main.jsx              # Entry point
│   └── index.css             # Tailwind directives + glass/neon/btn classes
├── index.html                # Google Fonts + meta viewport
├── tailwind.config.js        # Dark neon palette
├── postcss.config.js
├── package.json
└── vite.config.js
```

---

## Pages

| Route              | Page           | Description                                           |
|--------------------|----------------|-------------------------------------------------------|
| `/`                | Home           | 3D hero scene, feature cards, animated stats, CTA     |
| `/services`        | Services       | Square compact cards (2-col mobile), 4-step process   |
| `/service/:id`     | ServiceDetail  | Pain points, video section, features, custom form     |
| `/contact`         | Contact        | Full form: name, email, phone, company, budget, etc.  |
| `/about`           | About          | Mission/Vision, founder, AIS certificate, values      |
| `/privacy`         | PrivacyPolicy  | Privacy policy with 8 sections + icons                |

---

## Custom CSS Classes (from `index.css`)

| Class            | Effect                                              |
|------------------|-----------------------------------------------------|
| `.glass`         | Glassmorphism: semi-transparent + blur + border     |
| `.glass-card`    | Gradient glass card with shadow                     |
| `.neon-text`     | Cyan/Blue text glow                                 |
| `.gradient-text` | Blue-to-Cyan gradient text (transparent bg)         |
| `.btn-primary`   | Gradient button (blue → purple) with hover lift     |

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
- **Effects:** Floating animation (`<Float>`), orbiting particles (8), background particles (50)
- **Controls:** Auto-rotate speed 0.5, mouse orbit (no zoom/pan)
- **Lights:** Ambient + 2 point lights (blue + purple) + directional
- **Mobile:** Container is flex centered with `justify-center`, height 300px

---

## Mobile Responsiveness Notes

- **Navbar:** Hamburg menu has `w-10 h-10 p-2` for 44px+ touch target, mobile links `py-3`, body scroll lock with backdrop overlay
- **Footer:** Social icons have `p-3` for touch target
- **Home:** No `min-h-screen` on hero, 3D scene `h-[300px]` mobile / `h-[400px]` tablet / `h-[600px]` desktop
- **Services:** Grid `grid-cols-2` on mobile (square compact cards), `md:grid-cols-3`, `lg:grid-cols-4`
- **All back buttons:** `py-3 min-h-[44px]` for touch target
- **ScrollToTop:** `<ScrollToTop />` in App.jsx auto-scrolls on every route change

---

## Commands

```bash
npm run dev      # Start dev server (http://localhost:5173)
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
- Privacy Policy, Contact, and About pages all fully responsive
- .env file at root: `VITE_GOOGLE_APPS_SCRIPT_URL` for Google Apps Script integration
