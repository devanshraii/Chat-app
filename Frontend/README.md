# Vite React ChatApp

[Visit Live App](https://chat-app-r2oe.onrender.com)
_\*on first run server may take upto 50s to start_



## Introduction

This project is a real-time chat application built with Vite, React, and various powerful libraries:

- **Vite:** Fast and efficient development environment for modern web apps.
- **React:** JavaScript library for building interactive user interfaces.
- **Axios:** Flexible HTTP client for API requests.
- **React-Redux & Redux-Toolkit:** Simplified state management solutions.
- **React-Hook-Form:** Declarative and performant form handling library.
- **React-Hot-Toast:** Customizable notification system for feedback.
- **React-Icons:** Comprehensive library of popular icons for UI elements.
- **React-Router-Dom:** Streamlined routing for React applications.
- **Societ.io-Client:** Real-time messaging library for interactive chat functionality.
- **Tailwind CSS & DaisyUI:** Utility-first and component-based UI frameworks for consistent styling.
- **localStorage:** Browser storage for securely storing the JWT token.

## Key Features

- Real-time chat conversations using `societ.io-client`.
- User authentication and management with JWT-based authorization.
- Intuitive and user-friendly UI built with Tailwind CSS and DaisyUI.
- Efficient form handling with `react-hook-form`.
- Real-time feedback on actions and events with `react-hot-toast`.
- Centralized state management with `react-redux` and `redux-toolkit`.
- Seamless navigation and routing within the app using `react-router-dom`.

## Getting Started

1. **Clone the repository:** 
2. **Install dependencies:** `npm install`
3. **Start the development server:** `npm run dev`
4. **Access the app:** `http://localhost:5173/`

## Environment variables

- VITE_BACKEND_URL=`Your API URL`

## Authorization and JWT Storage

1. Implement an authentication API or service to issue JWTs upon login and signup.
2. Handle login requests, storing the received JWT securely in `localStorage`:
3. Used axios packege to attach JWT token in the Authorization headers.
4. Implemented JWT expiration handling.

## Component Libraries

- Tailwind CSS: [https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)
- DaisyUI: [https://daisyui.com/docs/install](https://daisyui.com/docs/install)

