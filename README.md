# Srinidhi Kulkarni - Portfolio Website

This repository contains the code for Srinidhi Kulkarni's personal portfolio website. The site is designed to showcase projects, skills, and experience, built using modern web technologies to ensure a professional presentation.

## Overview

The portfolio features:
- **Responsive Design**: Adaptable to various screen sizes.
- **Dark and Light Theme**: Provides users with a toggle to switch between themes.
- **Smooth Scrolling**: Enables smooth navigation across sections.
- **Lazy Loading Images**: Optimizes performance by only loading images when required.

The project has been built with the following tech stack:
- **React.js**: Used for creating the user interface components.
- **TypeScript**: Ensures type safety and helps catch errors during development.
- **Vite**: A fast build tool that provides quick development and production build setup.
- **Tailwind CSS**: Allows for rapid styling with utility classes.

## Demo

You can access the live version of the portfolio here: [Srinidhi Portfolio](https://srinidhi-kulkarni.vercel.app/)

## Features

- **Dynamic Dark and Light Theme**: Users can toggle between dark and light modes.
- **Interactive Sections**: Sections like Projects and Experience feature smooth intra-page navigation, allowing easy access to different parts of the website.
- **Contact Section**: Includes clickable email, phone, LinkedIn, and GitHub icons for easy communication.
- **Custom Scrollbar**: Theme-based custom scrollbar to enhance the user experience.

## Installation

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org) (which comes with [npm](http://npmjs.com)) installed on your computer.

### Clone the Repository

```sh
# Clone this repository
$ git clone https://github.com/srinidhifd/srinidhi-portfolio.git

# Go into the repository
$ cd srinidhi-portfolio
```

### Install Dependencies

```sh
# Install dependencies
$ npm install
```

### Run the Application

```sh
# Start the application in development mode
$ npm run dev
```

The application will be available at `http://localhost:5173/`.

### Build for Production

```sh
# Create an optimized production build
$ npm run build
```

The build folder will contain your production-ready application.

## Technologies Used

- **React.js**: Frontend library for building user interfaces.
- **TypeScript**: For static typing and ensuring code quality.
- **Vite**: Build tool for fast development.
- **Tailwind CSS**: For rapid UI styling.
- **React Icons**: Iconography used across the application.
- **React Scroll**: Smooth scrolling behavior for easy navigation.
- **React Lazy Load Image Component**: Improves website performance by loading images only when visible.

## Performance Optimization

- **Lazy Loading Images**: Used `react-lazy-load-image-component` to load images only when required, improving page load times.
- **Minified JavaScript**: Production builds are minified to reduce JavaScript size and improve performance.
- **Tree Shaking & Code Splitting**: Ensured that unnecessary code is not bundled and that code splitting is implemented for faster page load.

## Running Tests

To run the unit tests, you can use:

```sh
# Run tests
$ npm run test
```

Make sure you have Jest set up in your environment if you plan to write tests for your components.

## Folder Structure

```bash
srinidhi-portfolio/
├── public/          # Static assets (images, favicon, etc.)
├── src/             # Main source folder
│   ├── assets/      # Media assets (images, icons)
│   ├── components/  # React components
│   ├── App.tsx      # Main application
│   ├── index.css    # CSS file for global styles
│   └── main.tsx     # Entry point for the application
├── .gitignore       # Git ignore file
├── package.json     # NPM dependencies
├── vite.config.ts   # Vite configuration
└── README.md        # Documentation (you're reading this)
```

## Future Enhancements

- **Progressive Web App (PWA)**: Make the portfolio accessible offline.
- **SEO Improvements**: Add meta descriptions and optimize content for better search engine rankings.
- **Additional Animations**: Add subtle animations to enhance the user experience.

## Contributing

If you'd like to contribute to the project:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or want to connect, please reach out via:
- **Email**: [srinidhikulkarni25@gmail.com](mailto:srinidhikulkarni25@gmail.com)
- **LinkedIn**: [Srinidhi Kulkarni](https://linkedin.com/in/srinidhikulkarni)
- **GitHub**: [srinidhifd](https://github.com/srinidhifd)
