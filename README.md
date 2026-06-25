<div align="center">
  <h1 align="center">Dasaug 🎓</h1>
  <p align="center">
    <strong>A full-stack social networking and community platform built for the Dagbon Students Association.</strong>
  </p>
  <p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
    <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white" alt="Socket.io" />
  </p>
</div>

<br />

<div align="center">
  <img src="https://res.cloudinary.com/dtytb8qrc/image/upload/c_scale,w_1200,q_auto,f_auto/v1782390758/screencapture-dasaug-netlify-app-2026-06-25-12_29_06_1_mtxqkk.png" alt="Dasaug Landing Page Preview" width="100%" />
</div>

<br />

## 📖 Overview

**Dasaug** is a comprehensive, campus-centric social platform developed exclusively for the Dagbon Students Association (DaSA) at the University of Ghana. It provides a secure, digital ecosystem designed to foster community engagement, facilitate real-time communication, and centralize association updates.

Built on the robust MERN stack (MongoDB, Express, React, Node.js) and powered by Vite, the application utilizes a decoupled client-server architecture to ensure high performance, scalable real-time interactions, and secure data handling.

## ✨ System Capabilities

*   **Real-Time Communication:** Integrated WebSockets (Socket.io) allow verified DaSA members to communicate instantly within the application.
*   **Secure Authentication & Authorization:** Implements JWT-based authentication with strict Role-Based Access Control (RBAC) separating standard members from administrators.
*   **Interactive Member Dashboard:** A personalized hub featuring association updates, an event gallery, market place, and secure anonymous chat.
*   **Media Management & Moderation:** Cloud-integrated storage for event photos with an administrative moderation pipeline to approve or restrict content.
*   **Responsive UI Architecture:** highly responsive frontend ensuring seamless accessibility for students across all devices.

## 🧰 Tech Stack & Infrastructure

**Frontend Architecture**
*   **Framework:** React (bootstrapped with Vite)
*   **Language:** TypeScript
*   **Styling:** Modern Responsive UI Tooling

**Backend & Database**
*   **Runtime & API:** Node.js, Express.js
*   **Database:** MongoDB via Mongoose ODM
*   **Real-Time Subsystem:** Socket.io
*   **Security & Auth:** JSON Web Tokens (JWT), bcrypt

## 🚀 Local Setup & Installation

To run the Dasaug ecosystem locally, you will need to spin up both the client and server environments.

**1. Clone the repository**
```bash
git clone [https://github.com/sophianx243/dasaug.git](https://github.com/sophianx243/dasaug.git)
cd dasaug
