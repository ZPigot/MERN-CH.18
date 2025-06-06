# MERN-CH.18 Book Search Engine 

## Description

Book Search Engine is a full-stack application built with the MERN (MongoDB,Express,React,Node.js) stack that allows users to search for books using the Google Books API, create an account, log in, save their favorite books, and manage their personal collection.
This app delivers a seamless experience for both guest users and authenticated users, making it easy to explore and track books of interest.

## Features 

** Search for books:** Find books by title or author using the Google Books API 
** Guest Access:** Browse and search books without creating an account 
** Authentication: Sign up or log in with email and password 
**Save Books:** Authenticated users can save books to their personal library
**Remove Books:** Delete saved books from your collection
**Responsive Interface:** Dynamic menu and UI updates based on login status 

## User Flow 

### Guest User
- View options: 'Search for Books' and Login/Signup
- Ability to:
-  Save books from search results
-  View and manage saved books
-  Remove books from saved list

  ## Technologies USed 

  -**Frontend:** React,Bootstrap, GraphQL (Apollo Client)
  -**Backend:** Node.js, Express, MongoDB, GraphQL (Apollo Server)
  -**Authentication:** JSON WEB Tokens (JWT), bcrypt
  -** API Integration:** Google Books API 
  
## Installation 
1. Clone the repository
   git clone https://github.com/your-ZPIGOT/book-search-engine.git
cd book-search-engine

2.npm install
cd client
npm install

3. Set up enviroment variables
Create a .env file in root directory.
JWT_SECRET=yourSecretKey
MONGODB_URI=mongodb://localhost:27017/booksearchdb

4.Start the app
npm run develop

## Starter Code License 
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

## Contributors 
ZPIGOT

