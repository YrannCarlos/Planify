# Overview

Planify is a metal sheet bending calculator application that helps users calculate flat patterns (developments) for bent sheet metal parts. The application provides visual previews and will support exporting to DXF, PDF, and SVG formats, along with a punch library feature. It's designed as a single-page application with a simple Express backend serving static files.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Single-Page Application (SPA)**
- The application uses vanilla HTML, CSS, and JavaScript without frameworks
- All UI logic is contained in a single `index.html` file
- Custom CSS with CSS variables for theming (dark mode design)
- Component-based visual structure with sidebar navigation and main content area

**Key Design Patterns:**
- Profile selection system with visual icon buttons for different bend profiles
- Form-based input controls for dimensional parameters
- Real-time preview canvas for visualizing the flat pattern
- Result cards displaying calculated values

**UI Components:**
- Sidebar: Profile library with icon-based selection
- Main area: Input forms, preview canvas, and calculation results
- Export functionality for generating output files
- Progressive bend fields: Shows first pair (Aba 3 & Aba 4 + Ângulo) initially, reveals one additional pair per click on "➕ Adicionar dobra" button (available only for "Viga U Enrijecida" and "Viga U Reforçada" profiles)

## Backend Architecture

**Minimal Express Server**
- Simple static file server using Express.js
- ES6 module syntax (`type: "module"` in package.json)
- Serves all files from `/public` directory
- Catch-all route redirects to `index.html` for SPA routing support

**Rationale:**
- Lightweight approach chosen for simplicity and fast development
- No database or backend processing required for calculations (client-side)
- Easy to deploy and maintain
- Development mode with nodemon for file watching and auto-reload

**Server Configuration:**
- Port: 5000
- Host: 0.0.0.0 (accessible from network)
- Static file caching: 5 minutes (300s) for performance without stale content issues

## Data Architecture

**Client-Side State Management**
- All calculations performed in the browser
- No persistent storage currently implemented
- Future consideration: LocalStorage for saving bend configurations

**Calculation Logic:**
- Bend allowance and flat pattern calculations based on material properties
- Support for multiple bend types and profiles
- Real-time updates as user modifies parameters

## Design Decisions

**Why Static SPA?**
- Metal bending calculations are mathematical formulas that run efficiently in-browser
- No need for server-side processing or database
- Faster user experience without server round-trips
- Simplified deployment and hosting requirements

**Why Express for Static Files?**
- Minimal overhead compared to alternatives
- Easy local development setup
- Future-proof for adding API endpoints if needed (e.g., server-side DXF generation)
- Built-in static file serving with caching controls

# External Dependencies

## Runtime Dependencies

**Express (^4.19.2)**
- Purpose: HTTP server for serving static files
- Used for: Hosting the single-page application
- Configuration: Basic static file middleware with cache headers

## Development Dependencies

**Nodemon (^3.1.0)**
- Purpose: Development file watcher and auto-reload
- Watches: HTML, JS, CSS files in `/public` directory
- Restarts server automatically on file changes

## Planned Integrations

**DXF Export Library** (Not yet implemented)
- Will handle CAD file format generation for CNC machines
- Client-side or server-side implementation to be determined

**PDF/SVG Generation** (Not yet implemented)
- For documentation and sharing purposes
- Likely client-side using Canvas API or libraries like jsPDF

## Third-Party Services

- None currently integrated
- Application runs completely standalone
- No external APIs or cloud services required