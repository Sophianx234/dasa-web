# **Dasaug -- Dagbon Students Association Social App**

A campus-centric social platform built for members of the **Dagbon
Students Association (DaSA)** at the University of Ghana.\
Dasaug provides a digital space where DaSA members can connect, share
updates, view event photos, and communicate in real-time.

------------------------------------------------------------------------

## 📸 **Landing Page Preview**

![Dasaug Landing
Page](./assets/landing-page.png)

------------------------------------------------------------------------

## 🚀 **Features**

### 🌐 Landing Page

A modern, responsive introduction to DaSA, showcasing the association's
identity, values, and activities.

### 🖼️ Gallery

-   View DaSA event photos\
-   Upload new images (members/admin)\
-   Clean and organized media display

### 💬 Chat System

A real-time chat feature that allows verified DaSA members to
communicate within the app.

### 🔐 Authentication

-   Login\
-   Signup\
-   Secure member access

### 📊 Dashboard

A personalized dashboard for members, showing updates, actions, and
shortcuts.

### 🛠️ Admin Panel

-   Manage users\
-   Approve or moderate gallery uploads\
-   Oversee content and app activity

------------------------------------------------------------------------

## 🛠️ **Tech Stack**

### Frontend

-   React\
-   TypeScript\
-   Vite\
-   Responsive UI architecture

### Backend

-   Node.js\
-   Express.js\
-   MongoDB / Mongoose

### Other Tools

-   JWT authentication\
-   WebSockets (Socket.io) for chat\
-   Cloud storage for image uploads

------------------------------------------------------------------------

## 📂 **Project Structure**

    Dasaug/
    ├── client/
    │   ├── src/
    │   │   ├── components/
    │   │   ├── pages/
    │   │   ├── hooks/
    │   │   ├── context/
    │   │   └── services/
    │   └── public/
    │
    ├── server/
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   ├── middleware/
    │   └── utils/
    │
    └── README.md

------------------------------------------------------------------------

## ⚙️ **Setup Instructions**

### 1. Clone the Repo

``` bash
git clone https://github.com/your-repo/dasaug.git
cd dasaug
```

### 2. Install Dependencies

#### Client

``` bash
cd client
pnpm install
```

#### Server

``` bash
cd ../server
pnpm install
```

### 3. Add Environment Variables

Create `.env` inside the server folder:

    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    CLOUD_STORAGE_KEY=your_image_service_key

### 4. Start the App

**Frontend**

``` bash
pnpm run dev
```

**Backend**

``` bash
pnpm run start
```

------------------------------------------------------------------------

## 🔮 Future Enhancements

-   Direct messaging\
-   Push notifications\
-   Event calendar\
-   User profile customization

------------------------------------------------------------------------

## 🤝 Contributing

Pull requests and suggestions are welcome!
