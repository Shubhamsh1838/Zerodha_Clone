import React from 'react';

function Hero() {
    return ( 
        <div className='container text-center'>
            <div className='row mt-5 border-bottom'>
                <h1 className='fs-3 mt-5'>Zerodha Products</h1>
                <h4 className='text-muted mt-2 fs-5'>Sleek, modern, and intuitive trading platforms</h4>
                <h6 className='text-muted mt-3 mb-5'>Check out our <a href='' style={{textDecoration: "none"}}>investment offerings <i class="fa fa-arrow-right" aria-hidden="true"></i></a></h6>
            </div>
        </div>
     );
}

export default Hero;