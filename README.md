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

## Development

- Start the app in dev mode:
  ```
  npm run dev
  ```

## Production

- Build minified assets:
  ```
  npm run build
  ```
- Start the server (ensure `NODE_ENV=production` for optimal caching/compression):
  ```
  NODE_ENV=production npm start
  ```

In production, templates automatically load `/css/styles.min.css` and `/js/scripts.min.js`, and the server sends gzip-compressed responses with cache headers for static assets.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.
