import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 text-center'>
                <h1>Pricing</h1>
                <h3 className='text-muted mt-3 fs-5'>Free equity investments and flat ₹20 traday and F&O trades</h3>
            </div>
            <div className='row p-5 mt-3'>
                <div className='col-4 p-4 text-center'>
                    <img src='media/images/10rupees.svg' style={{width: "80%"}}/>
                    <h1 className='fs-3 mt-4'>Free equity delivery</h1>
                    <p className='text-muted mt-3' style={{lineHeight: "1.8"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-4 text-center'>
                    <img src='media/images/20rupees.svg' style={{width: "80%"}}/>
                    <h1 className='fs-3 mt-4'>Intraday and F&O trades</h1>
                    <p className='text-muted mt-3' style={{lineHeight: "1.8"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across<br /> equity, currency, and commodity trades. Flat <br />₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-4 text-center'>
                    <img src='media/images/10rupees.svg' style={{width: "80%"}}/>
                    <h1 className='fs-3 mt-4'>Free direct MF</h1>
                    <p className='text-muted mt-3' style={{lineHeight: "1.8"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;