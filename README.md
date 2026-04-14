# ECOMMERCE (React + Vite)

A single-page e-commerce frontend built with React, Vite, React Router, MUI, Swiper, and Context API.

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
└─ vite.config.js
```

### Layers

1. **Bootstrap layer**: `src/main.jsx` initializes React, router, and app-wide providers.
2. **Application/route layer**: `src/App.jsx` defines route composition and persistent layout (header, toast, transitions).
3. **Feature/page layer**: `src/page/**` contains route-level screens and page-specific orchestration.
4. **UI component layer**: `src/component/**` contains reusable and feature-scoped presentational building blocks.
5. **State layer**: `src/component/context/CartContext.jsx` centralizes cart/favorites state and localStorage sync.
6. **Data access layer (co-located)**: API calls (`axios`) are currently made inside page components (`Home`, `CategoryPage`, `ProductDetalis`).

### Patterns used

1. **Component-based architecture** (React functional components + composition).
2. **Route-driven SPA pattern** (React Router pages as top-level features).
3. **Provider pattern** (Context API provider for global cart/favorites state).
4. **Container/presentational split (lightweight)**: pages handle fetching/state orchestration, components focus on rendering and interaction.
5. **Client-side persistence pattern** using `localStorage` for cart/favorites continuity.
