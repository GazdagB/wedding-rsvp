# 🎉 Wedding RSVP Website
Welcome to the official RSVP website for our wedding! This monorepo contains both the frontend and backend of the application. It allows guests to RSVP, view event details, and interact with other features we’ve included for our special day.

## Live Demo

You can check out the live version of this project here:  
👉 [Live Demo](https://your-live-demo-link.com)

## 📂 Project Structure
- **frontend/**: React app (built with Vite) for the user interface.
- **backend/**: Express Node JS app to handle requests, manage RSVPs, and serve necessary data.

## 🚀 Tech Stack

<p align="left" style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">

  <!-- Frontend -->
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="40" height="40"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042" alt="Tailwind CSS" width="60" height="40"/>
  <img src="https://user-images.githubusercontent.com/7850794/164965509-2a8dc49e-2ed7-4243-a2c9-481b03bbc31a.png" alt="Framer Motion" width="40" height="40"/>

  <!-- Backend -->
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" width="40" height="40"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png" alt="MongoDB" height="40"/>
  <img src="https://avatars.githubusercontent.com/u/7552965?s=400&v=4" alt="Mongoose" width="40" height="40"/>

  <!-- Tools & Libraries -->
  <img src="https://img.shields.io/badge/JWT-000000?style=flat&logo=json-web-tokens&logoColor=white" alt="JWT" height="40"/>
  <img src="https://www.dotenv.org/assets/img/default-cover-image.png" alt="dotenv" width="40" height="40"/>

</p>

### Frontend
- **React**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animations and transitions

### Backend
- **Node.js**: JavaScript runtime for the backend
- **Express.js**: Web framework to handle routes, requests, etc.
- **MongoDB**: For storing RSVP data
- **Mongoose**: ODM for MongoDB interactions

### Tools & Libraries
- **JWT (JSON Web Token)**: For admin user authentication

- **dotenv**: For managing environment variables

## ✨ Features

### Guest Features:
- 📝 RSVP to the wedding with name and guest count
- 💬 Leave well-wishes for the couple
- 🎉 View RSVP confirmation

### Admin Features:
- ✅ View and manage RSVPs (approve, reject, or delete entries)
- 💌 View and manage guest well-wishes

## Future Features to implement
- 💰 Track wedding expenses by category (e.g., venue, catering, etc.)

## Admin Panel in Action 
![RSVP Admin Gif](/assets/RSVPadmin.gif)
![alt text](assets/adminmore.gif)

## RSVP 
All invited guests will receive a physical invitation. Along with the invitation, an A7-sized card will be included containing the necessary information for each guest to RSVP.
![alt text](/assets/invitationCard.png)
![alt text](/assets/RSVPForm.png)