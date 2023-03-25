// need to have feature to rerender the page with new data after form submission
const form = document.querySelector('form');
// const postRemove = document.getElementsByClassName('postRemove');

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
        location.reload();
    } else {
        alert('Post was not created successfully');
    }
};

// const removeFromWishlist = async (e) => {
//     const button = e.target;
//     const product_id = button.getAttribute('id');
//     const response = await fetch(`/api/users/wishlist/${product_id}`, {
//         method: 'DELETE'
//     });

//     if (response.ok) {
//         button.classList.remove('clicked', 'btn-danger');
//         button.classList.add('unclicked', 'btn-primary');
//         button.textContent = "Add to Wishlist";
//         button.removeEventListener('click', removeFromWishlist)
//         button.addEventListener('click', addToWishlist);
//         location.reload();
//     } else {
//         alert('Failed to delete wishlist item');
//     }
// };

form.addEventListener('submit', addPost);