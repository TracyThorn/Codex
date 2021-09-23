import React, { useEffect, useState } from 'react';
import './App.css';

const getData = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => {
      console.log(resp);
      return resp.json();
    })
    .catch(err => console.error(err));
}

function BlogPost({post}) {
  return post ? <div className="post" id={`post-${post.id}`}>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
  </div> : <div>No post</div>;
}

function App() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    return getData().then((posts => {
      setPostData(posts);
    }))
  }, [])

  return (
    <div className="App">
      <h1>Fetchin' Data</h1>
      {postData.map(post=><BlogPost users={[]} post={post}/>)}
    </div>
  );
}

export default App;
