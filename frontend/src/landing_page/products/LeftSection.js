import React from 'react';

function LeftSection({imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-7 p-3 mt-2 '>
                    <img src={imageUrl} className='mt-5 ms-5'/>
                </div>
                <div className='col-5 mt-5 p-3'>
                    <h2 className='mt-5 ps-5 pe-5'>{productName}</h2>
                    <p className='ps-5 pe-5 mt-3 me-5' style={{lineHeight:"1.8"}}>{productDescription}</p>
                    <div className='ps-5'>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                        
                        <a href={learnMore} style={{marginLeft: '50px', textDecoration:"none"}}>Learn more <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-4 ps-5'>
                        <a href={googlePlay}> <img src='Media/Images/googlePlayBadge.svg' alt='googlePlayBadge' /></a>
                        <a href={appStore} style={{marginLeft: "30px"}}> <img src='Media/Images/appstoreBadge.svg'alt='appstoreBadge' /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}


export default LeftSection;
