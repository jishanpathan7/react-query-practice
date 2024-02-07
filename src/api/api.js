const fetchPosts = async (page) => {
  const response = await fetch(
    `http://localhost:3000/posts?_sort=-id&${
      page ? `_page=${page}&_per_page=5` : ""
    }`
  );

  if (!response.ok) {
    throw new Error(`Fetching ${page} failed with status ${response.status}`);
  }
  const postData = response.json();
  return postData;
};
const fetchTags = async () => {
  const response = await fetch(`http://localhost:3000/tags`);
  return response.json();
};

const addPost = async (post) => {
  const response = await fetch(`http://localhost:3000/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  return response.json();
};

export { fetchPosts, fetchTags, addPost };
