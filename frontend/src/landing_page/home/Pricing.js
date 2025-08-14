import React from 'react';

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row mb-5' style={{marginRight: "70px", marginLeft: "120px"}}>
                <div className='col-5'>
                    <h2 className='fw-medium mb-4 fs-3'>Unbeatable pricing</h2>
                    <p className='text-muted'>We pioneered the concept of discount broking and price <br/>transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration: "none"}}>See pricing <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-7 d-flex mb-3'>
                    <div className='d-flex' style={{marginRight: "20px"}}>
                        <img src='media/images/10rupees.svg'style={{width: "60%", marginTop: "10px"}} />
                        <div className='text-muted mt-5'><p style={{fontSize: "70%"}}className='mt-4'>Free account<br/> opening</p></div>
                    </div>
                    <div className='d-flex' style={{marginRight: "20px"}}>
                        <img src='media/images/10rupees.svg'style={{width: "45%", marginTop: "10px"}} />
                        <div className='mt-5 text-muted'><p style={{fontSize: "70%"}} className='mt-4'>Free equity delivery <br/>and direct mutual funds</p></div>
                    </div>
                    <div className='d-flex'>
                        <img src='media/images/20rupees.svg'style={{width: "52%", marginTop: "10px"}} />
                        <div className='mt-5 text-muted'><p style={{fontSize: "70%"}} className='mt-4'>Intraday and<br/> F&O</p></div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;