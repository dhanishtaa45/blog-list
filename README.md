# blog-list
js
📄 Description
This project is a responsive, dynamic blog post listing web page built with modern web technologies. The main objective is to demonstrate how to efficiently render dynamic content from a JSON data source using client-side templating with Handlebars.js, while leveraging Bootstrap 5 for a clean and responsive UI layout.

The repository contains all the necessary files to create a visually appealing blog listing page that loads blog posts asynchronously and displays them in a card-based grid. This approach separates content from presentation, enabling easy updates to blog posts via the JSON file without changing the HTML structure.

🎯 Objective
✨ Dynamic Content Rendering: Use Handlebars.js to compile templates on the client side, enabling fast rendering of JSON-based blog post data.

📱 Responsive Design: Utilize Bootstrap 5 grid system and components to provide a mobile-first, adaptable layout.

🧩 Separation of Concerns: Keep content data (JSON), layout (HTML + Bootstrap), and rendering logic (JavaScript + Handlebars) cleanly separated.

⚡ Lightweight & Easy to Maintain: Avoid backend dependencies; this project runs purely on the frontend and can be hosted as a static site.

🚨 Error Handling: Gracefully handle data loading errors with meaningful feedback to the user.

🛠️ Technologies Used
🌐 HTML5: Structure and semantic markup of the blog page.

🎨 CSS3 / Bootstrap 5: Responsive styling and layout. Bootstrap's card components are used for blog post presentation.

💻 JavaScript (ES6+): Fetch API to retrieve JSON data asynchronously; DOM manipulation to inject compiled templates.

📝 Handlebars.js: A logic-less templating engine to render JSON data into HTML efficiently on the client side.

📦 JSON: Stores blog post data in a simple, human-readable format.

☁️ CDN-hosted Libraries: Bootstrap and Handlebars are loaded via CDN to keep the project lightweight and easy to deploy.


🚀 Usage Instructions
Clone or download the repository.

Ensure posts.json file is in the same directory as index.html.

Open index.html in any modern browser.

Modify the posts.json file to add, remove, or update blog posts.

No backend server is needed; this can run as a static site hosted anywhere.

