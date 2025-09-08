import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid" id="supportHero">
            <div className="p-5 " id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="">Track Tickets</a>
            </div>
            <div className="row pe-5 ps-5">
                <div className="col-6 mb-5" style={{marginLeft:"50px", padding:"25px 120px"}}>
                    <h1 className="fs-4 mb-3">
                        Search for an answer or browse help topics to create a ticket
                    </h1>
                    <input placeholder="Eg. how do I activate F&O"  style={{marginBottom:"20px"}}/>
                    <br />
                    <a href="">Track account opening</a>
                    <a href="">Track segment activation</a>
                    <a href="">Intraday margins</a>
                    <a href="" >Kite user manual</a>
                </div>
                <div className="col-4 mt-4" style={{marginLeft:"60px"}}>
                    <h1 className="fs-4 mb-4">Featured</h1>
                    <ol>
                        <li className='mb-3'>
                        <a href="">Current Takeovers and Delisting - January 2024</a>
                        </li>
                        <li>
                        <a href="">Latest Intraday leverages - MIS & CO</a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;