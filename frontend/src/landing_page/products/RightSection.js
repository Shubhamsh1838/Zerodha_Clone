import React from 'react';

function RightSection({imageUrl, productName, productDescription, learnMore}) {
    return ( 
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-5 mt-5 p-3'>
                    <h2 className='mt-5 ps-5 ms-5 pt-5' style={{marginTop: "200px"}}>{productName}</h2>
                    <p className='ps-5 mt-3 ms-5' style={{lineHeight:"1.8"}}>{productDescription}</p>
                    <div className='ps-5 ms-5'>                    
                        <a href={learnMore} style={{textDecoration:"none"}}>Learn more <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>                   
                </div>

                <div className='col-7 '>
                    <img src={imageUrl} className='mt-2 me-5'/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;