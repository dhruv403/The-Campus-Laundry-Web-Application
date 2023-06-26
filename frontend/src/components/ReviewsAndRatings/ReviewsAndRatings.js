import React from 'react'
import avatar from '../../images/avatar_login.png'
import './ReviewsAndRatings.css'
import StarRating from '../StarRating/StarRating'


export default function ReviewsAndRatings() {
    return (
        <>
            <div className='heading' >
                <h1 >Reviews and Ratings</h1>
            </div>
            <div className="rar-cont">
                <div className="rar-box">
                    <img className="rar-img" src={avatar} alt="" />
                    <h3 className='box-text'> Ron Weasley </h3>

                    <div className='sec-rating'>
                        <StarRating stars={5} className="demo" />
                    </div>
                    <p className='para'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ut doloribus eaque odio nulla est, sit hic minima in corporis.
                    </p>
                </div>
                <div className="rar-box">
                    <img className="rar-img" src={avatar} alt="" />
                    <h3 className='box-text'> Professor Severus Snape </h3>

                    <div className='sec-rating'>
                        <StarRating stars={2} className="demo" />
                    </div>
                    <p className='para'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ut doloribus eaque odio nulla est, sit hic minima in corporis.
                    </p>
                </div>
                <div className="rar-box">
                    <img className="rar-img" src={avatar} alt="" />
                    <h3 className='box-text'> Hermione Granger </h3>

                    <div className='sec-rating'>
                        <StarRating stars={4} className="demo" />
                    </div>
                    <p className='para'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ut doloribus eaque odio nulla est, sit hic minima in corporis.
                    </p>

                </div>
            </div>


        </>
    )
}
