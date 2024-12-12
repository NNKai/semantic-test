import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NewsSection.scss'

const NewsSection = () => {
  const [slicedNewsData, setSlicedNewsData] = useState([]);

  const fetchData = async () => {
    const options = {
      method: 'POST',
      url: 'https://newsnow.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '3cbfc37999msh6557fc401f8aa84p157d89jsn75ffbd3c1644',
        'X-RapidAPI-Host': 'newsnow.p.rapidapi.com'
      },
      data: {
        text: 'Top news',
        region: 'wt-wt',
        max_results: 25
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data.news);
      setSlicedNewsData(response.data.news)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <div className='news_Section'>
      {slicedNewsData.length > 0 ? (
        slicedNewsData.map((data) => (
          <div
            className='news_Card'
            key={data.date}
          >
            {/* <h4>{data.description}</h4> */}
            <img
              src={data.image || ''}
              alt='newStand'
            />
            <p>{data.title}</p>
            <a href={data.url}>Read More....</a>
          </div>
        ))
      ) : (
        <>
            <div className='news_Card' >
                <h4>Title.....</h4>
                <img
                    src=""
                    alt='newStand'
                    style={{boxShadow : "none"}}
                />
                <p>Loading....</p>
            </div>
        </>
      )}
    </div>
  );
};

export default NewsSection;
