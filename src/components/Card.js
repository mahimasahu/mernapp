import React from 'react'

export default function Card() {
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img className="card-img-top" src="https://media.istockphoto.com/id/1440671315/photo/beef-aitchbone-steak.webp?b=1&s=612x612&w=0&k=20&c=meRJNM0unEbNilBtADT550SKGABWsT2GNU5JTZIfuCw=" alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build </p>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-success'>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>)
                                })}
                            </select>

                            <select className="m-2 h-100 bg-success rounded">
                                <option value="half">Half</option>
                                <option value="full">Full</option>
                            </select>

                            <div className="d-line h-100 fs-5">
                                Total Price
                            </div>

                        </div>
                    </div>
                </div></div>

        </div>
    )
}
