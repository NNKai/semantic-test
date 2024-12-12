import React, { useEffect, useState } from 'react'
import PaidComponent from './PaidComponent'
import FreeComponent from './FreeComponent'
import Default from './Default'
import axios from 'axios'
import Header from './Header/Header'
import LoginPopup from './LoginPopup/LoginPopup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RestaurantPage from './RestaurantPage/RestaurantPage'

const Components = ({value, fetchPaidData, displayLogin, loginPopup, auth, closeButton, setAuth}) => {

  const [albumData , setAlbumData] = useState()
  const [loadMore , setLoadMore] = useState()
  const [allData, setAllData] = useState()


  const fetchData = async () => {
    await axios.get("http://localhost:3001/resturaunts")
          .then((data)=>{
            let start = 0
            let end = 8
            setAlbumData(data.data.slice(start,end))
            setLoadMore (data.data.slice(end + 1 , data.data.length ))
            setAllData(data.data)
          })
  }

  

  useEffect(()=>{
    fetchData()
  },[])

    const lookup = {
        paid : PaidComponent,
        free : FreeComponent
    }

    const RenderComponent = lookup[value] || Default

  return (
    <>
      
      <BrowserRouter>
      <Header displayLogin={displayLogin} auth={auth} setAuth={setAuth}/>
          <Routes>
            <Route path="/" element={<RenderComponent albumData={albumData} loadMore={loadMore} />}/>
            <Route path="/:id" element={<RestaurantPage  allData={allData}/>}/>
          </Routes>
         </BrowserRouter>
      
      {loginPopup ? <LoginPopup closeButton={closeButton} fetchPaidData={fetchPaidData}/> : <></>}
    </>
  )
}

export default Components
