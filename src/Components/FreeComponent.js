import React, { useMemo } from 'react'
import './styles.scss'
import MiddleSection from './MiddleSection/MiddleSection'
import NewsSection from './NewsSection/NewsSection'

const FreeComponent = ({albumData, loadMore}) => {

  const memoSection = useMemo(() => albumData, [albumData])
  const memoLoadMore = useMemo(() => loadMore, [loadMore])

  console.log(memoSection)

  return (
    <div className='free_Content'>
      <section className='section_Left' >
        <NewsSection />
      </section>
      <section className='section_Middle' >
        <MiddleSection albumData={memoSection} loadMore={memoLoadMore}/>
        {/* <AnimationPage /> */}
      </section>
      {/* this is ads sections */}
      <section className='section_Right' >
        <div className='sectionOne_Ad'>
          <img loading="lazy" src="https://images.pexels.com/photos/18113138/pexels-photo-18113138/free-photo-of-horses-grazing-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Ad One'></img>
        </div>
        <div className='sectionOne_Ad'>
          <img loading="lazy" src='https://images.pexels.com/photos/16123122/pexels-photo-16123122/free-photo-of-close-up-of-salad.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Ad Two'></img>
        </div>
        <div className='sectionOne_Ad'>
          <img  loading="lazy" src="https://images.pexels.com/photos/18157985/pexels-photo-18157985/free-photo-of-french-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Ad Three'></img>
        </div>
        <div className='sectionOne_Ad'>
          <img  loading="lazy" src="https://images.pexels.com/photos/18157985/pexels-photo-18157985/free-photo-of-french-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Ad Three'></img>
        </div>
        <div className='sectionOne_Ad'>
          <img  loading="lazy" src="https://images.pexels.com/photos/18157985/pexels-photo-18157985/free-photo-of-french-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Ad Three'></img>
        </div>
        <div className='sectionOne_Ad'>
          <img  loading="lazy" src="https://images.pexels.com/photos/18157985/pexels-photo-18157985/free-photo-of-french-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Ad Three'></img>
        </div>
        <div className='sectionOne_Ad'>
          <img  loading="lazy" src="https://images.pexels.com/photos/18157985/pexels-photo-18157985/free-photo-of-french-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Ad Three'></img>
        </div>
        <div className='sectionOne_Ad'>
          <img  loading="lazy" src="https://images.pexels.com/photos/18157985/pexels-photo-18157985/free-photo-of-french-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Ad Three'></img>
        </div>
        
      </section>
    </div>
  )
}

export default FreeComponent
