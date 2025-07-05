# ALX Listing App

Modern Airbnb clone built with Next.js, TypeScript, and TailwindCSS.

## Project Description

The ALX Listing App is a modern, responsive web application that serves as the foundation for an Airbnb clone. This project focuses on creating a scalable, well-structured codebase with reusable components and industry-standard best practices.

## Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and TailwindCSS
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Reusable Components**: Modular Card and Button components for consistency
- **Type Safety**: Full TypeScript integration with custom interfaces
- **Code Quality**: ESLint configuration for maintaining clean code
- **Scalable Architecture**: Well-organized folder structure for easy maintenance

## Project Structure

```
alx-listing-app/
├── components/
│   └── common/
│       ├── Card.tsx          # Reusable card component for property listings
│       └── Button.tsx        # Reusable button component with variants
├── interfaces/
│   └── index.ts              # TypeScript interfaces (CardProps, ButtonProps, etc.)
├── constants/
│   └── index.ts              # Application constants and configuration
├── pages/
│   └── index.tsx             # Main homepage component
├── public/
│   └── assets/               # Static assets (images, icons, etc.)
├── styles/
│   └── globals.css           # Global styles with TailwindCSS imports
├── tailwind.config.js        # TailwindCSS configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
└── package.json              # Project dependencies and scripts
```

## Directory Purpose

### `components/common/`
Contains reusable UI components that can be used throughout the application:
- **Card.tsx**: Displays property information with image, title, description, price, and rating
- **Button.tsx**: Customizable button with different variants (primary, secondary, outline) and sizes

### `interfaces/`
TypeScript interface definitions for type safety:
- **CardProps**: Props for the Card component
- **ButtonProps**: Props for the Button component
- **Property**: Main property data structure
- **User**: User data structure

### `constants/`
Application-wide constants and configuration:
- API endpoints and configuration
- UI constants (items per page, file size limits)
- Sample data for development
- Navigation and footer links

### `public/assets/`
Static assets including images, icons, and other media files used throughout the application.

## Prerequisites

Before running this project, ensure you have:

- Node.js version 16 or higher
- npm or yarn package manager
- A modern web browser
- Text editor (VS Code recommended)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

### 3. View the Application

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint to check for code quality issues

## Technologies Used

- **Next.js 14**: React framework for production-ready applications
- **TypeScript**: Static type checking for better code quality
- **TailwindCSS**: Utility-first CSS framework for rapid UI development
- **ESLint**: Code linting tool for maintaining code quality
- **React**: JavaScript library for building user interfaces

## Development Guidelines

1. **Component Structure**: Keep components small and focused on a single responsibility
2. **Type Safety**: Always define TypeScript interfaces for component props and data structures
3. **Styling**: Use TailwindCSS classes for consistent styling
4. **Code Quality**: Run ESLint regularly to maintain code standards
5. **File Organization**: Follow the established folder structure for new components and utilities

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Next Steps

This foundation provides the structure for building additional features such as:
- Property search and filtering
- User authentication
- Booking system
- Payment integration
- Host dashboard
- Review system

---

**Built with ❤️ for the ALX Software Engineering Program**
