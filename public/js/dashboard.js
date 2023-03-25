const newPostBtn = document.querySelector('#newPost');
const form = document.querySelector('form');
const postUpdate = document.getElementsByClassName('postUpdate');
let currentPostId;
const titleField = document.querySelector('#title');
const contentField = document.querySelector('#content');
const postRemove = document.getElementsByClassName('postRemove');
// const postContainer = document.getElementsByClassName('postContainer');
const submitBtn = document.querySelector('form button');

const displayNewPostForm = () => {
    form.classList.remove('display-none');
};

const addPost = async (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    if (title && content) {
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
    }
};

const updateForm = async (e) => {
    newPostBtn.classList.add('display-none');
    displayNewPostForm();

    const button = e.target;
    const product_id = button.getAttribute('id');
    currentPostId = product_id;

    const currentPostFetch = await fetch(`/api/posts/${product_id}`, {
        method: 'GET',
    });
    const responseJSON = await currentPostFetch.json();
    const currentPost = await responseJSON;
    titleField.value = currentPost.title;
    contentField.textContent = currentPost.content;
    submitBtn.textContent = 'Update Post';
    form.removeEventListener('submit', addPost);
    form.addEventListener('submit', updatePost);
};

const updatePost = async (e) => {
    const product_id = currentPostId;
    currentPostId = '';
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    const response = await fetch(`/api/posts/${product_id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        // submitBtn.textContent = 'Post';
        form.removeEventListener('submit', updatePost);
        form.addEventListener('submit', addPost);
        location.reload();
    } else {
        alert('Failed to update Post');
    }
}


const deletePost = async (e) => {
    const button = e.target;
    const product_id = button.getAttribute('id');
    const response = await fetch(`/api/posts/${product_id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        location.reload();
    } else {
        alert('Failed to delete Post');
    }
};


newPostBtn.addEventListener('click', displayNewPostForm);
form.addEventListener('submit', addPost);

for (var i = 0; i < postUpdate.length; i++) {
    postUpdate[i].addEventListener('click', updateForm);
}

for (var i = 0; i < postRemove.length; i++) {
    postRemove[i].addEventListener('click', deletePost);
}







// for (var i = 0; i < postContainer.length; i++) {
//     postContainer[i].addEventListener('click', unhideButtons);
// }

// const unhideButtons = (e) => {
//     e.stopPropagation();
//     const post = e.target;
//     console.log(post);
//     buttons = document.getElementsByTagName('button');
//     form.classList.remove('display-none');
//     form.classList.remove('display-none');
// }