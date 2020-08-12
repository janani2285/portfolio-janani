import React from 'react';
import Aboutme from "./components/aboutMe"
import image from "./images/background.jpg"


function App() {
 
  return (
    <div style ={ { backgroundImage: `url(${image})`} }>
      <Aboutme />
     
    </div>
  );
}

export default App;
