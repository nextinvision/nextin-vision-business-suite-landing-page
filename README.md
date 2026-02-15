# Nextin Workspace - Landing Page

This is a [Next.js](https://nextjs.org) project for the Nextin Workspace landing page, showcasing the all-in-one business management platform.

## Getting Started

### Local Development (Without Docker)

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Docker Development

#### Using Docker Compose (Recommended)

**Development Mode:**
```bash
docker-compose -f docker-compose.dev.yml up
```

**Production Mode:**
```bash
docker-compose up -d
```

#### Using Docker Directly

**Build the image:**
```bash
docker build -t nextin-landing-page .
```

**Run the container:**
```bash
docker run -p 3000:3000 nextin-landing-page
```

**Development mode:**
```bash
docker build -f Dockerfile.dev -t nextin-landing-page-dev .
docker run -p 3000:3000 -v $(pwd):/app nextin-landing-page-dev
```

## Project Structure

- `app/` - Next.js app directory with pages and layouts
- `components/` - React components (layout, sections, UI)
- `lib/` - Utility functions and constants
- `public/` - Static assets
- `types/` - TypeScript type definitions

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Docker Commands

### Production Build
```bash
# Build and run with Docker Compose
docker-compose up -d

# Build manually
docker build -t nextin-landing-page .
docker run -p 3000:3000 nextin-landing-page
```

### Development Build
```bash
# Run with Docker Compose
docker-compose -f docker-compose.dev.yml up

# Build and run manually
docker build -f Dockerfile.dev -t nextin-landing-page-dev .
docker run -p 3000:3000 -v $(pwd):/app nextin-landing-page-dev
```

### Stop Containers
```bash
# Stop production container
docker-compose down

# Stop development container
docker-compose -f docker-compose.dev.yml down
```

## Environment Variables

No environment variables are required for basic functionality. If needed, create a `.env.local` file:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Deploy with Docker

1. Build the Docker image:
   ```bash
   docker build -t nextin-landing-page .
   ```

2. Run the container:
   ```bash
   docker run -d -p 3000:3000 --name nextin-landing nextin-landing-page
   ```

3. For production, use a reverse proxy (nginx, traefik, etc.) in front of the container.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
