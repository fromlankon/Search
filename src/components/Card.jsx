import React from 'react'

function Card({ product }) {

    const posterUrl = `https://image.tmdb.org/t/p/w500${product.poster_path}`;
    const rate = Math.round

    return (
        <div className="card">
            <div className='img'>
                <img src={posterUrl}/>
                <div className="imgText">
                    <div className='cardPlay'>
                        <i class="bi bi-play-fill"></i>
                    </div>
                    <p className='text4'> READ MORE </p>
                    <p className='text5'> Released: {product.release_date}</p>
                </div>
            </div>
            <div className='cardBottom'>
                <p className='title'> {product.title} </p>
                <p className="rating"> <i class = "fa-solid fa-star"></i> {product.vote_average.toFixed(1)} </p>
            </div>
        </div>
    )
}

export default Card