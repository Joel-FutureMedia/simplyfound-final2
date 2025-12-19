# SimplyFound Website

## Project Overview

SimplyFound is a professional web development company based in Windhoek, Namibia, specializing in creating stunning, high-performance websites for businesses.

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd simplyfound-final

# Step 3: Install the necessary dependencies
npm i

# Step 4: Start the development server
npm run dev
```

## Development

The development server will start on `http://localhost:8080` with hot module replacement enabled.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # React components
│   └── ui/         # shadcn-ui components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── pages/          # Page components
└── main.tsx        # Application entry point
```

## Deployment

Build the project for production:

```sh
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to your hosting provider.
