# React Project with WebStorm and Vite

This project is a robust frontend application built using **React 18.3.1**, configured with **Vite 6.0.5** as the module bundler for optimal performance. It is supported by WebStorm 2024.2.3 IDE to ensure an efficient and productive development experience.

---

## Table of Contents

1. [Features](#features)
2. [Getting Started](#getting-started)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Running the Development Environment](#running-the-development-environment)
7. [Linting](#linting)
8. [Contributing](#contributing)
9. [License](#license)

---

## Features

- React 18.3.1 for building dynamic and reusable UI components.
- Vite for ultra-fast development and modern build tooling.
- ESLint configuration for code quality and linting, using:
    - `eslint`
    - `eslint-plugin-react`
    - `eslint-plugin-react-hooks`
    - `eslint-plugin-react-refresh`
- TypeScript compatibility via `@types/react` and `@types/react-dom` (optional).
- Support for `react-refresh` during development for hot module replacement (HMR).
- Global variables provided by the `globals` package.

---

## Getting Started

Follow these steps to set up the project for development.

---

## Prerequisites

Ensure you have the following installed on your system:

1. **Node.js**: Version 16.x or above.
    - [Install Node.js](https://nodejs.org/)
2. **npm** (Node Package Manager): Comes bundled with Node.js.
    - Check version: `npm -v`

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tigerhostsolutions/RTT50-MERN-SBA320-REACT-APPLICATION.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

### Running the Development Environment

Start the development server using Vite:
```bash
npm run dev
```
This will launch a local server at `http://localhost:3000/` by default, with HMR enabled.

---

## Linting

The project uses **ESLint** for maintaining code quality. Available scripts:

1. Run ESLint to check for code issues:
   ```bash
   npm run lint
   ```

2. Fix ESLint issues automatically (where possible):
   ```bash
   npm run lint:fix
   ```

Ensure you fix all linting errors before committing code.

---

## Scripts

The `package.json` exposes the following scripts:

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the project for production.
- **`npm run preview`**: Preview the production build.
- **`npm run lint`**: Check for linting issues.
- **`npm run lint:fix`**: Automatically fix linting issues.

---

## Contributing

We welcome contributions to improve this project! To contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

Special thanks to the creators of:

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [WebStorm](https://www.jetbrains.com/webstorm/)

---

## Notes

- Recommended IDE: WebStorm 2024.2.3 for an optimal development experience.
- Always ensure your dependencies are up-to-date with `npm outdated` and upgrade accordingly.

---