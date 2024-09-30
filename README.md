Me-Social is a modern social networking platform built with ReactJS and TypeScript. It allows users to register, log in, create posts, like, comment, and interact with other users through features like group creation, reels, stories, one-on-one chat, group chats, and more. The platform also includes an admin dashboard for managing content and users.

Features:
  User Authentication: Sign up and login functionality.
  Create Posts: Share posts with captions and media.
  Like and Comment: Interact with posts via likes and comments.
  Create Groups: Users can create and join groups.
  Reels & Stories: Share short videos and temporary stories.
  One-on-One Chat: Direct messaging between users.
  Group Chat: Communicate with multiple users in group chats.
  Admin Dashboard: Manage users and content as an admin.

Tech Stack:
  Frontend
    ReactJS: Core framework for building the UI.
    TypeScript: Ensures type safety and scalability in the codebase.
    Redux Toolkit: Manages global state across the app efficiently.
    Tailwind CSS: Provides utility-first CSS styling for rapid UI development.
    Ant Design (AntD): A rich UI component library for building modern interfaces.
    Material UI (MUI): Additional UI components and design resources for a seamless user experience.
    React Router Dom: Handles routing and navigation between pages.
    Axios: Manages API requests and communication with the backend.
  State Management:
    Redux Toolkit: Centralized state management for handling authentication, posts, chat, and other dynamic content.
Installation
  1. Clone the repository: https://github.com/anhlinh-II/me-social
  2. Navigate to the project directory: cd me-social
  3. npm install
  4. npm run dev
The app should now be running on http://localhost:5173

Project Structure
src/
│
├── components/        # Reusable UI components
├── features/          # Redux slices and state logic
├── pages/             # Main pages (e.g., Login, Home, Group)
├── services/          # API services (using Axios)
├── utils/             # Utility functions
└── styles/            # Global styles (Tailwind config)

How to Contribute
  Fork the repository.
  Create a new feature branch (git checkout -b feature/feature-name).
  Commit your changes (git commit -m 'Add feature').
  Push to the branch (git push origin feature/feature-name).
  Create a Pull Request.
License
  This project is licensed under the MIT License - see the LICENSE file for details.
