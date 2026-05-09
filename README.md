# Lachlan Gray's Project

A modern Next.js video showcase website powered by Cosmic CMS, featuring AI-generated girl videos in a sleek, cinematic interface.

## Features

- 🎬 Featured video hero section
- 🖼️ Responsive video gallery
- 🏷️ Category and tag filtering
- 📱 Mobile-responsive design
- ⚡ Next.js 16 with App Router
- 🎨 Tailwind CSS styling
- 🔥 Dark cinematic theme

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69ffa2fea963c4f5f0d9fbe9&clone_repository=69ffa37da963c4f5f0d9fbf3)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: Make a hot ai girl video"

### Code Generation Prompt

> Build a Next.js application for a website called "Lachlan Gray's Project". Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: Make a hot ai girl video

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org/) - React framework
- [Cosmic](https://www.cosmicjs.com/docs) - Headless CMS
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Getting Started

### Prerequisites

- Bun installed
- Cosmic account with bucket configured

### Installation

```bash
bun install
bun dev
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: videos } = await cosmic.objects
  .find({ type: 'videos' })
  .depth(1)
```

## Cosmic CMS Integration

This app integrates with Cosmic to manage video content dynamically.

## Deployment Options

Deploy on Vercel or Netlify with environment variables set.
<!-- README_END -->