import './Googleh.css';
import React, { useState } from 'react';

function Googleh() {
      const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search logic here
    console.log(`Searching for ${searchText}`);
  };

  const handleTextChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="google-homepage">
          <img className="google-logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo" />
           <form className="search-form" onSubmit={handleSearch}>
             <input className="search-box" type="text" value={searchText} onChange={handleTextChange} placeholder="" />
             <div className="search-buttons">
                 <button className="search-button" type="submit">Google Search</button>
                 <button className="search-button">I'm Feeling Lucky</button>
             </div>
             <div className='offered'>
             Google offered in: <a href="">हिन्दी </a> <a href="">বাংলা </a><a href=""> తెలుగు </a> <a href=""> मराठी </a><a href=""> தமிழ்</a><a href=""> ગુજરાતી</a> <a href=""> ಕನ್ನಡ</a><a href="">മലയാളം</a><a href="">ਪੰਜਾਬੀ</a>
    
             </div>
           </form>
         </div>
  )
}

export default Googleh
