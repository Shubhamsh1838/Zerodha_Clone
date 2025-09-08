import React from 'react';

function NotFound() {
    return ( 
        <div className='container p-5 mb-4'>
            <div className='row text-center'>
                <h1 className='mt-5 fs-3 mb-4 alert alert-danger'>404 Not Found</h1>
                <p>Sorry, the page you are looking for does not exist</p>
            </div>
        </div>
     );
}

export default NotFound;