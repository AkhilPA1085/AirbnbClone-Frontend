import React from 'react'

function NotFound() {
    return (
        <div className='container'>
            <div className='errorimg  col-md-5'>
                <img  src={`${process.env.PUBLIC_URL}/errorpage.jpeg`} alt="" />
            </div>
            
        </div>
    )
}

export default NotFound
