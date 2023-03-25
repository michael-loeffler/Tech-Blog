// need to have feature to rerender the page with new data after form submission
const form = document.querySelector('form');
const postRemove = document.getElementsByClassName('postRemove');
const newPostBtn = document.querySelector('#newPost');

const addPost = async (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        form.reset();
        form.classList.add('display_none');
        location.reload();
    } else {
        alert('Post was not created successfully');
    }
};

const deletePost = async (e) => {
    const button = e.target;
    const product_id = button.getAttribute('id');
    const response = await fetch(`/api/posts/${product_id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        location.reload();
    } else {
        alert('Failed to delete wishlist item');
    }
};

const displayNewPostForm = () => {
    form.classList.remove('display-none');
}

form.addEventListener('submit', addPost);

for (var i = 0; i < postRemove.length; i++) {
    postRemove[i].addEventListener('click', deletePost);
}

newPostBtn.addEventListener('click', displayNewPostForm)