import React from 'react';
import { Link } from "react-router-dom";

function Universe() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-5 mb-5'>
                <h2 className='fs-4 mt-5'>The Zerodha Universe</h2>
                <p className='mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3 mt-5'>
                    <img src='Media\Images\zerodhaFundhouse.png' style={{width: "50%"}}/>
                    <p className='pe-5 ps-5 pt-3 text-muted me-3 ms-3' style={{fontSize: "0.8em"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='Media\Images\sensibullLogo.svg' style={{width: "50%"}}/>
                    <p className='pe-5 ps-5 pt-3 text-muted me-3 ms-3' style={{fontSize: "0.8em"}}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='Media\Images\goldenpiLogo.png' style={{width: "50%"}}/>
                    <p className='pe-5 ps-5 pt-3 text-muted me-3 ms-3' style={{fontSize: "0.8em"}}>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='Media\Images\streakLogo.png' style={{width: "50%"}}/>
                    <p className='pe-5 ps-5 pt-3 text-muted me-3 ms-3' style={{fontSize: "0.8em"}}>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='Media\Images\smallcaseLogo.png' style={{width: "60%"}}/>
                    <p className='pe-5 ps-5 pt-3 text-muted me-3 ms-3' style={{fontSize: "0.8em"}}>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='Media\Images\dittoLogo.png' style={{width: "40%"}}/>
                    <p className='pe-5 ps-5 pt-3 text-muted me-3 ms-3' style={{fontSize: "0.8em"}}>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>
                <Link to={'/signup'} ><button className='p-2 btn btn-primary fs-5 mb-5 mt-5' style={{width: '20%', margin: '0 auto'}}>Sign up for free</button></Link>
            </div>
        </div>
     );
}

export default Universe;