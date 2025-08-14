import React from 'react';

function Team() {
    return ( 
       <div className='container mb-3 border-top '>
            <div className='row text-center mb-3 mt-5'>
                <h1 className='fs-4 fw-semibold'>People</h1>
            </div>
            <div className='row p-3'>
                <div className='col text-center' style={{marginLeft:"100px"}}>
                    <img src='media/images/Shubham.jpg' style={{width: "250px", height: "250px", objectFit: "cover", marginTop: "70px", borderRadius:"100%"}}/>
                    <h4 className='mt-4 text-muted fs-4'>Shubham Sharma</h4>
                    <h6 className='mt-4 text-muted fs-6'>Founder Zerodha Clone</h6>
                </div>
                <div className='col mt-5 mb-5' style={{lineHeight: "1.8", marginRight: "160px", fontSize:"1.04rem"}}>
                    <p>Shubham Sharma built a Zerodha clone during his Master’s at IIT Bombay, inspired by his interest in stock market investments and SIPs. His curiosity to understand the technology behind such platforms grew after earning good returns through Zerodha, motivating him to explore web development.</p>

                    <p>At IIT Bombay, he learned coding alongside computer science peers, which soon became a passion. Beyond academics, Shubham actively participated in sports and cultural activities — excelling in badminton, cricket, basketball, dance, and gym workouts.</p>

                    <p className='mb-5'>He also explored table tennis, lawn tennis, pool, and skateboarding, and performed in a group dance competition during PG Cult at IIT Bombay.</p>
                    
                </div>
            </div>
        </div>
     );
}

export default Team;