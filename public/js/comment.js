const newCommentBtn = document.querySelector('#newComment');
const commentUpdate = document.getElementsByClassName('commentUpdate');
let currentCommentId;
const contentField = document.querySelector('#content');
const commentRemove = document.getElementsByClassName('commentRemove');

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

const updateTextBox = async (e) => {
    const button = e.target;
    const comment_id = button.getAttribute('id');
    currentCommentId = comment_id;

    const currentCommentFetch = await fetch(`/api/comments/${comment_id}`, {
        method: 'GET',
    });
    const responseJSON = await currentCommentFetch.json();
    const currentComment = await responseJSON;
    contentField.value = currentComment.content;
    newCommentBtn.textContent = 'Update';
    newCommentBtn.removeEventListener('click', addComment);
    newCommentBtn.addEventListener('click', updateComment);
};

const updateComment = async (e) => {
    const comment_id = currentCommentId;
    currentCommentId = '';
    const content = document.querySelector('#content').value.trim();

    const response = await fetch(`/api/comments/${comment_id}`, {
        method: 'PUT',
        body: JSON.stringify({ content }),
        headers: { 'Content-Type': 'application/json' }
    });
    
    if (response.ok) {
        location.reload();
    } else {
        alert('Failed to update Comment');
    }
};

const deleteComment = async (e) => {
    const button = e.target;
    const comment_id = button.getAttribute('id');
    const response = await fetch(`/api/comments/${comment_id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        location.reload();
    } else {
        alert('Failed to delete Comment');
    }
};


newCommentBtn.addEventListener('click', addComment);

for (var i = 0; i < commentUpdate.length; i++) {
    commentUpdate[i].addEventListener('click', updateTextBox);
}

for (var i = 0; i < commentRemove.length; i++) {
    commentRemove[i].addEventListener('click', deleteComment);
}





// -- SAVING FOR POTENTIAL FUTURE UPDATES --//

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