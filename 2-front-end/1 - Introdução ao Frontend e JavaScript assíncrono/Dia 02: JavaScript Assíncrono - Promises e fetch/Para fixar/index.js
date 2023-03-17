import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.
fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => fillUsersSelect(data.users));

usersSelect.addEventListener('change', ({ target }) => {
  clearPageData();
  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.

  const POSTS_API = `https://dummyjson.com/posts/user/${target.value}`;
  fetch(POSTS_API)
    .then((response) => response.json())
    .then((data) => {
      fillPosts(data.posts);
      const featuredPosts = data.posts[0];
      const COMMENTS_API = `https://dummyjson.com/posts/${featuredPosts.id}/comments`;
      return fetch(COMMENTS_API);
    })
    .then((comments) => comments.json())
    .then((data) => fillFeaturedPostComments(data.comments))
    .catch((error) => fillErrorMessage(error.message));
});
