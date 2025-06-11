document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('postForm');
    const postList = document.getElementById('postList');

    // Function to render posts
    function renderPosts(posts) {
        postList.innerHTML = '';
        posts.forEach((post, index) => {
            const postItem = document.createElement('div');
            postItem.classList.add('post-item');
            postItem.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <button onclick="editPost(${index})">Edit</button>
                <button onclick="deletePost(${index})">Delete</button>
            `;
            postList.appendChild(postItem);
        });
    }

    // Initialize posts array
    let posts = [];

    // Handle post creation
    postForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        if (title && content) {
            posts.push({ title, content });
            renderPosts(posts);
            postForm.reset();
        } else {
            alert('Please fill in both title and content.');
        }
    });

    // Edit post function
    window.editPost = function(index) {
        const post = posts[index];
        document.getElementById('title').value = post.title;
        document.getElementById('content').value = post.content;
        posts.splice(index, 1);
        renderPosts(posts);
    };

    // Delete post function
    window.deletePost = function(index) {
        posts.splice(index, 1);
        renderPosts(posts);
    };
});