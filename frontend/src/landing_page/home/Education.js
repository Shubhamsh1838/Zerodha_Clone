import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5 p-5'>
            <div className='row mt-5'>
                <div className='col-6'>
                    <img src='Media/Images/education.svg'style={{width: "75%", marginLeft: "70px"}}/>
                </div>
                <div className='col-6 mt-5'>
                    <h2 className='fw-semibold mb-4 fs-3'>Free and open market education</h2>

                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration: "none"}}>Varsity <i class="fa fa-arrow-right" aria-hidden="true"></i></a>

                    <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration: "none"}}>TradingQ&A  <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
     );
}


export default Education;
