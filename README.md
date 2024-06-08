# Personal Bookshelf

## Overview

Personal Bookshelf is a React application that allows users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage.

## Live: https://incredible-tartufo-dc95f5.netlify.app

## Features

- Book Search Page: Users can search for books using the Open Library API. Search results are displayed in real-time as the user types.
- Personal Bookshelf Page: Users can add books from the search results to their personal bookshelf. The bookshelf is stored persistently in the browser using localStorage.
- Responsive Design: The application is responsive and works well on desktop, laptop, tablet, and mobile devices.

## Tech Stack

- React
- Create React App (CRA)
- CSS for styling

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/personal-bookshelf.git
cd personal-bookshelf
```
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
 ```bash
 npm start
 ```
 4. Open your browser and navigate to http://localhost:3000.

## Folder Structure
```bash
personal-bookshelf/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── BookCard.js
│   │   ├── BookSearch.js
│   │   ├── Bookshelf.js
│   │   └── NavBar.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   └── index.css
├── package.json
└── README.md
```
