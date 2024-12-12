import React, { useState } from 'react';
import './MiddleSection.scss'; // Import your CSS file
import { Link } from "react-router-dom";

const MiddleSection = ({ albumData , loadMore}) => {
    const [loadingButton, setLoadingButton] = useState(false)

    const handleClick = () => {
        setLoadingButton(!loadingButton)
        if(loadingButton){
            window.scrollTo(0, 0)
        }
    }

    console.log(albumData)

  return (
    <div className='middle-section'>
      {albumData ? (
        albumData.map((response) => (
          <div className='middle-album' key={response.id} style={{backgroundImage : `url(${response.image})`, objectFit : "cover", backgroundPosition : "center", backgroundSize : "cover"}}>
            <h3 className='album-title'>{response.title}</h3>
            {/* <img src={response.image} alt='altImage' className='album-image' /> */}
            <span>
            <h3>Ratings: {response.rating}</h3>
            <Link to={"/" + response.id}><h4>Show Website Details</h4></Link>
            </span>
            
          </div>
        ))
      )
      
      : (
        <div className='loading-indicator'>Loading...</div>
      )}
        <div className={`load-more-container ${loadingButton ? 'show-load-more' : ''}`} >
            {loadingButton? loadMore?.map((response)=>{
                return (
                    <div className='middle-album' key={response.id} style={{backgroundImage : `url(${response.image})`}}>
                    <h3 className='album-title'>{response.movie}</h3>
                    {/* <img src={response.image} alt='altImage' className='album-image' /> */}
                    <h3>Ratings: {response.rating}</h3>
                    </div>
                )
            }): <></>}
            
        </div>
        <button onClick={handleClick} style={{width : "100%"}}>{loadingButton? <h1>Close</h1> : <h1>Open</h1>}</button>
    </div>
  );
};

export default MiddleSection;

