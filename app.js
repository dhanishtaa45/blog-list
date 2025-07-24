fetch('posts.json')
  .then(response => response.json())
  .then(data => {
    const source = document.getElementById('post-template').innerHTML;
    const template = Handlebars.compile(source);
    const html = template({ posts: data });
    document.getElementById('blog-list').innerHTML = html;
  })
  .catch(error => {
    console.error('Error loading blog posts:', error);
  });
