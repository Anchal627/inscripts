# Spreadsheet Application

A production-ready React spreadsheet application built with TypeScript and Tailwind CSS.

## Features

- **Interactive Spreadsheet Grid**: Click, double-click, and keyboard navigation
- **Toolbar**: Professional toolbar
- **Professional UI**: Clean, modern design matching industry standards

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Run linting:

```bash
npm run lint
```

## Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vite** for build tooling

## Architecture

The application follows a modular component architecture:

- `Header.tsx` - Main container component managing state
- `Grid.tsx` - Interactive grid with cells
- `Tab.tsx` - consist of filters to sort out the data

## Key Features Implemented

### Professional UI

- Google Sheets/Excel-like interface
- Hover states and transitions

## Future Enhancements

- Column resizing and hiding
- Advanced formula functions (SUM, AVERAGE, etc.)
- Cell formatting (colors, borders, fonts)
- Copy/paste functionality
- Undo/redo operations
- Export to Excel/CSV
- Collaborative editing
- Data validation
- Charts and graphs
