import { useEffect, useState } from "react";
import Stories from './components/stories';

import "./App.css";

const API_URL = 'http://hn.algolia.com/api/v1/search?tags=front_page';

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    console.log('mounted');
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setStories(data.hits))
      .catch(error => console.log('Error', error));
  }, [])

  useEffect(() => {
    console.log('stories', stories);
  }, [stories])

  return (
    <div className="App">
      <Stories stories={stories} />
    </div>
  );
}

export default App;
