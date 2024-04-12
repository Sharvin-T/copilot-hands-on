# My Ecommerce App

This is a React-based ecommerce application that follows the atomic design pattern. It includes components categorized into atoms, molecules, and organisms. The application fetches data dynamically from the [Fake Store API](https://fakestoreapi.com/). 

## Project Structure

```
my-ecommerce-app
├── src
│   ├── components
│   │   ├── atoms
│   │   │   ├── Button.tsx
│   │   │   └── Dropdown.tsx
│   │   ├── molecules
│   │   │   ├── SearchBar.tsx
│   │   │   └── GlobalHeader.tsx
│   │   └── organisms
│   ├── contexts
│   │   └── AppContextProvider.tsx
│   ├── data-services
│   │   ├── mutations.ts
│   │   └── queries.ts
│   ├── pages
│   │   ├── Products.tsx
│   │   └── Checkout.tsx
│   ├── App.tsx
│   └── index.tsx
├── server
│   ├── index.ts
│   ├── middleware
│   │   └── auth.ts
│   └── utils
│       └── logger.ts
├── tests
│   ├── components
│   │   ├── atoms
│   │   ├── molecules
│   │   └── organisms
│   └── pages
├── .husky
├── .eslintrc.json
├── .prettierrc.json
├── Dockerfile
├── jest.config.js
├── package.json
├── tsconfig.json
├── README.md
└── .github
    └── workflows
        └── ci-cd.yml
```

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install the dependencies: `npm install`
3. Start the development server: `npm start`

## Available Scripts

In the project directory, you can run the following scripts:

- `npm start`: Starts the development server.
- `npm test`: Runs the test cases using React Testing Library.
- `npm run build`: Builds the production-ready optimized bundle.
- `npm run lint`: Runs ESLint to check for linting errors.
- `npm run format`: Formats the code using Prettier.

## API Integration

The application makes use of the [Fake Store API](https://fakestoreapi.com/) to fetch the product data. The API provides endpoints for fetching products, categories, and more.

## Context API

The application uses the Context API to manage global state. The `AppContextProvider` component provides the context to the root application.

## Server

The server is built using Fastify and provides logging, exception handling, and authentication middleware. The server entry point is `server/index.ts`.

## Testing

The application includes test cases written using React Testing Library. The test files are located in the `tests` directory.

## CI/CD

The project includes a CI/CD pipeline configured using GitHub Actions. The pipeline is defined in the `.github/workflows/ci-cd.yml` file.

## Docker

The project includes a Dockerfile for containerization. You can use the Dockerfile to build and run the application in a containerized environment.

## Documentation

The codebase includes inline comments and JSDoc annotations for better understanding and documentation.

## Code Quality

The project follows coding standards and best practices for better readability, maintainability, and security. It includes ESLint and Prettier configurations to enforce code quality.

## Accessibility

The project includes a P11y plugin module for accessibility compliance. It ensures that the application meets accessibility standards and provides necessary suggestions for improvement.

Please refer to the specific files and directories for more details on their implementation.

This README file is intentionally left blank.