# BlogMania - React Blogging Website

## Project Overview
BlogMania is a simple React-based blogging website that fetches and displays blog posts from an API. The website allows users to filter blogs by category, search for specific blogs, and navigate between pages. The application also includes a contact form for users to reach out.

## Features
- **Navigation Bar**: Includes a site title that links to the homepage and a "Contact Us" button.
- **Homepage**: Displays the blog list with filters and search functionality.
- **Blog List**: Fetches blog data from an API and allows filtering by category, search term, and views.
- **Pagination**: Allows users to navigate through different pages of blog posts.
- **Contact Form**: A form to collect user details and submit them to a local server.

## Project Structure
```
/src
  ├── App.js           # Main component rendering Home component
  ├── Component
  │   ├── Home.js      # Home page with navigation bar and routing
  │   ├── Nav.js       # Navigation bar with site title and contact button
  │   ├── BlogList.js  # Fetches and displays blog posts with filters
  │   ├── ContactForm.js # Contact form for users to submit queries
  ├── AllRoute
  │   ├── AllRoutes.js # Defines routes for different pages
  ├── App.css          # Styling for the app
```

## How It Works
1. **Navigation Bar**
   - Displays the site title "BlogMania", which redirects to the homepage when clicked.
   - Includes a "Contact Us" button that navigates to the contact form page.

2. **Homepage**
   - Displays the blog list fetched from `https://dummyjson.com/posts`.
   - Blogs can be filtered by search term, category (tags), and views.
   - Pagination allows users to navigate through blog posts.

3. **Blog List**
   - Fetches blog posts from an API when the component loads.
   - Adds default values for missing reactions (likes, dislikes) and views.
   - Users can search for blog titles, filter by category, and sort by views.
   - Displays blog details including title, body, views, likes, dislikes, and tags.

4. **Contact Form**
   - A form with fields for name, email, subject, message, and phone number.
   - On submission, sends data to a local server endpoint (`http://localhost:5000/contacts`).

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/blogmania.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open the application in the browser at `http://localhost:3000/`.

## Dependencies
- React
- React Router DOM (for navigation)
- Chakra UI (for styling)
- Axios (for fetching data)

## API Used
- Blog posts are fetched from `https://dummyjson.com/posts`.
- Contact form submissions are sent to `http://localhost:5000/contacts` (requires a backend to handle requests).

## Future Improvements
- Add individual blog post pages.
- Implement user authentication.
- Enhance UI with animations and better styling.

