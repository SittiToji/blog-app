# This is the third commit.
This is a newer edit from GitHub.

# Blog Web Application

This is a simple blog web application built using Node.js, Express.js, and EJS. The application allows users to create, view, update, and delete blog posts. Note that this version does not persist posts between sessions as no database is used.

## Features

1. **Post Creation**: Users can create new blog posts.
2. **Post Viewing**: The home page displays all created blog posts.
3. **Post Update/Delete**: Users can edit or delete their posts as needed.
4. **Responsive Design**: The application is styled to ensure a good user experience on both desktop and mobile devices.

## Project Structure

```
blog-app
├── public
│   ├── css
│   │   └── styles.css
│   └── js
│       └── scripts.js
├── src
│   ├── app.js
│   ├── routes
│   │   └── posts.js
│   └── views
│       ├── layout.ejs
│       ├── index.ejs
│       ├── new.ejs
│       ├── edit.ejs
│       └── partials
│           ├── header.ejs
│           └── footer.ejs
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd blog-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.
