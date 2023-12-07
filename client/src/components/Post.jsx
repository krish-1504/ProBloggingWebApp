import React from 'react'
import imgi from '../pages/imgi.jpg'

const Post = () => {
  return (
    <div className="post">
        <div className="image">
            <img src={imgi} alt="none" />
        </div>
        <div className='details'>
            <div className="title"><h1>How To Earn</h1></div>
            <div className='Date'> Created - 01-05-2004</div>
            <div className="summery">How To Earn From Youtube Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, iusto.lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nulla! Nihil, odit aut nesciunt obcaecati deserunt nemo expedita maiores vitae optio sunt cupiditate esse! Excepturi doloremque laborum qui impedit ratione consequatur nisi! Neque suscipit eum perferendis, atque officiis rerum, cumque dolorum ea saepe quos, est repellat explicabo voluptate maiores sint!</div>
        </div>
    </div>
  )
}

export default Post
