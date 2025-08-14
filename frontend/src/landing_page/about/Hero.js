import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center mb-5'>
                <h1 className='mt-5 fs-4 fw-semibold mb-5'>We pioneered the discount broking model in India.<br/>
                Now, we are breaking ground with our technology.</h1>
            </div>
            <div className='row border-top p-5'>
                <div className='col p-3' style={{lineHeight: "1.8", marginLeft:"120px", fontSize:"1.04rem"}}>
                    <p className='mt-5'>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                    <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                    <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment<br/> platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className='col p-3' style={{lineHeight: "1.8", marginRight: "120px", fontSize:"1.04rem"}}>
                    <p className='mt-5'>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                    <p> <a href='https://rainmatter.com/' style={{textDecoration: "none"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                    <p>And yet, we are always up to something new every day. Catch up on the latest updates on our <a href='https://zerodha.com/z-connect/' style={{textDecoration: "none"}}>blog</a> or see what the media is saying about us or learn more about our business and product philosophies.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;