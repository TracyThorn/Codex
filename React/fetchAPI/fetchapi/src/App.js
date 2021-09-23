import React, { useEffect, useState } from 'react';
import './App.css';

const getData = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((resp) => {
      return resp.text();
    })
    .catch(err => console.error(err));
}

function App() {
  const [postData, setPostData] = useState('');

  useEffect(() => {
    return getData().then((posts => {
      setPostData(posts);
    }))
  }, [])

  return (
    <div className="App">
      <h1>Fetchin' Data</h1>
      <p>
        {postData}
      </p>
    </div>
  );
}

export default App;
