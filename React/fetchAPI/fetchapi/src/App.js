import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const getData = () => {
  return axios('https://jsonplaceholder.typicode.com/posts')
    .then(({data}) => {
      console.log(data);
      return JSON.stringify(data);
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
