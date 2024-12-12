import React from 'react'
import { useParams } from 'react-router-dom'

const RestaurantPage = ({allData}) => {
    const id = useParams()
    const filterData = allData?.filter(data => data.id.toString() === id.id)

    console.log(filterData)

  return (
    <div>
      {allData? filterData.map((data)=> {
        return (
            <div key={data.id}>
            <h4>{data.title}</h4>
            </div>
        )
      }): <></>}
    </div>
  )
}

export default RestaurantPage
