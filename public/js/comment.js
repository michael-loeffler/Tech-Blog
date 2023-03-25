const newCommentBtn = document.querySelector('button');
const commentUpdate = document.getElementsByClassName('commentUpdate');
let currentCommentId;
const contentField = document.querySelector('#content');
const commentRemove = document.getElementsByClassName('commentRemove');
// const commentContainer = document.getElementsByClassName('commentContainer');
const submitBtn = document.querySelector('form button');

const displayNewCommentForm = () => {
    form.classList.remove('display-none');
};

const addComment = async (e) => {
    e.preventDefault();
    const post_id = e.target.getAttribute('data-id');
    const content = document.querySelector('#content').value.trim();

    if (!content) {
        return;
    }
    
    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ content, post_id }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        location.reload();
    } else {
        alert('Comment was not created successfully');
    }
};

// const updateForm = async (e) => {
//     newCommentBtn.classList.add('display-none');
//     displayNewCommentForm();

//     const button = e.target;
//     const product_id = button.getAttribute('id');
//     currentCommentId = product_id;

//     const currentCommentFetch = await fetch(`/api/comments/${product_id}`, {
//         method: 'GET',
//     });
//     const responseJSON = await currentCommentFetch.json();
//     const currentComment = await responseJSON;
//     titleField.value = currentComment.title;
//     contentField.textContent = currentComment.content;
//     submitBtn.textContent = 'Update Comment';
//     form.removeEventListener('submit', addComment);
//     form.addEventListener('submit', updateComment);
// };

// const updateComment = async (e) => {
//     const product_id = currentCommentId;
//     currentCommentId = '';
//     const title = document.querySelector('#title').value.trim();
//     const content = document.querySelector('#content').value.trim();

//     const response = await fetch(`/api/comments/${product_id}`, {
//         method: 'PUT',
//         body: JSON.stringify({ title, content }),
//         headers: { 'Content-Type': 'application/json' }
//     });
    
//     if (response.ok) {
//         // submitBtn.textContent = 'Comment';
//         form.removeEventListener('submit', updateComment);
//         form.addEventListener('submit', addComment);
//         location.reload();
//     } else {
//         alert('Failed to update Comment');
//     }
// }


// const deleteComment = async (e) => {
//     const button = e.target;
//     const product_id = button.getAttribute('id');
//     const response = await fetch(`/api/comments/${product_id}`, {
//         method: 'DELETE'
//     });

//     if (response.ok) {
//         location.reload();
//     } else {
//         alert('Failed to delete Comment');
//     }
// };


newCommentBtn.addEventListener('click', addComment);

// for (var i = 0; i < commentUpdate.length; i++) {
//     commentUpdate[i].addEventListener('click', updateForm);
// }

// for (var i = 0; i < commentRemove.length; i++) {
//     commentRemove[i].addEventListener('click', deleteComment);
// }







// for (var i = 0; i < commentContainer.length; i++) {
//     commentContainer[i].addEventListener('click', unhideButtons);
// }

// const unhideButtons = (e) => {
//     e.stopPropagation();
//     const comment = e.target;
//     console.log(comment);
//     buttons = document.getElementsByTagName('button');
//     form.classList.remove('display-none');
//     form.classList.remove('display-none');
// }