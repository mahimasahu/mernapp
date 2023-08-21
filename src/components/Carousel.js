import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-caption" style={{zIndex:"5"}}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success text-white bg-success"  type="submit">Search</button>
                        </form>
                    </div>


                    <div className="carousel-item active">
                        <img src="https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?size=626&ext=jpg&ga=GA1.1.1920808061.1685109040&semt=sph" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="one" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/mixed-ingredient-pizza-with-black-olive-rolls_114579-2970.jpg?size=626&ext=jpg&ga=GA1.2.1920808061.1685109040&semt=ais" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="two" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/flat-lay-japanese-dumplings-assortment_23-2148809859.jpg?size=626&ext=jpg&ga=GA1.2.1920808061.1685109040&semt=ais" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="three" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
