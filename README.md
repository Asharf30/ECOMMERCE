# ECOMMERCE (React + Vite)

A modern single-page e-commerce frontend built with React, Vite, and Tailwind CSS.

Live Demo: [ecommerce-ashraf.vercel.app](https://ecommerce-ashraf.vercel.app/)

## Technologies Used

- **React 19**
- **Vite**
- **Tailwind CSS v4**
- **Material UI (MUI)**
- **React Router DOM**
- **Axios** (for API data fetching)
- **Swiper** (for image carousels and sliders)
- **React Hot Toast** (for notifications)
- **Context API** (for global state management like Cart and Favorites)

## Architecture

### Folder structure

```text
ECOMMERCE/
├─ public/
├─ src/
│  ├─ component/
│  │  ├─ Header/                 # Top/bottom nav, search, hero slider
│  │  ├─ context/                # Cart/Favorites global state provider
│  │  ├─ PageTransition/         # Route transition styling/component
│  │  └─ sliderProduct/          # Product card/details/slider UI pieces
│  ├─ page/
│  │  ├─ Home/
│  │  ├─ Cart/
│  │  ├─ Favorites.jsx
│  │  ├─ CategoryPage/
│  │  ├─ productDetails/
│  │  ├─ SearchResults.jsx
│  │  ├─ About/
│  │  ├─ Blog/
│  │  ├─ Contact/
│  │  └─ Accessories/
│  ├─ Images/                    # Static images used by UI
│  ├─ App.jsx                    # Route map + shared layout
│  └─ main.jsx                   # App bootstrap (Router + Providers)
├─ index.html
├─ package.json
├─ vercel.json                   # Vercel SPA routing configuration
└─ vite.config.js
```

### Patterns used

1. **Component-based architecture** (React functional components + composition).
2. **Route-driven SPA pattern** (React Router pages as top-level features).
3. **Provider pattern** (Context API provider for global cart/favorites state).
4. **Container/presentational split (lightweight)**: pages handle fetching/state orchestration, components focus on rendering and interaction.
5. **Client-side persistence pattern** using `localStorage` for cart/favorites continuity.
