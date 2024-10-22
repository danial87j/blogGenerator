// Post blog
function Postblog(authorName, title, body) {
  this.authorName = authorName;
  this.title = title;
  this.body = body;
  this.date = new Date().toLocaleString();
}

// Generate and post blog function
function generateBlog(event) {
  event.preventDefault();

  // Getting value
  let authorName = document.getElementById("author").value;
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  // generating a new post
  let newPost = new Postblog(authorName, title, body);

  // adding into page
  const postElement = document.createElement("div");
  postElement.classList.add("blog-post");

  postElement.innerHTML = `
        <div class="post-header">
            <div>
                <h3>${newPost.authorName}</h3>
                <span>${newPost.date}</span>
            </div>
        </div>
        <div class="post-content">
            <strong>${newPost.title}</strong>
            <p>${newPost.body}</p>
        </div>
        <div class="post-footer">
        </div>
        <div class="comment-section">
            <h4>Comments</h4>
            <div class="comments"></div>
            <form class="comment-form">
                <input type="text" placeholder="Add a comment..." class="comment-input" required />
                <button type="submit">Post</button>
            </form>
        </div>
    `;

  // getting comments and adding them into page
  const commentForm = postElement.querySelector(".comment-form");
  commentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const commentInput = postElement.querySelector(".comment-input");
    const commentText = commentInput.value;
    addComment(postElement, commentText);
    commentInput.value = ""; // clearing fields
  });

  // adding new post after last post
  const postContainer = document.getElementById("blogPosts");
  postContainer.appendChild(postElement);

  // clearing post form
  document.getElementById("blogForm").reset();
}

// add comment function
function addComment(postElement, commentText) {
  const commentsContainer = postElement.querySelector(".comments");
  const commentElement = document.createElement("p");
  commentElement.classList.add("comment");
  commentElement.textContent = commentText;
  commentsContainer.appendChild(commentElement);
}

// a form from preventinafdjasjf
document.getElementById("blogForm").addEventListener("submit", generateBlog);
