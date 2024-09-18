import React from 'react';
function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className='p-5' id='supportWrapper'>
                <h3>Support Portal</h3>
                <a href='' >Track Tickets</a>
            </div>
            <div className='row p-3 m-3'>
                <div className='col-6 p-5 '>
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg. how do I activate F&O' className='mb-2 mt-2'/> <br></br>
                    <p>
                    <a href=''>Track account opening </a> &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href=''>Track segment activation </a> &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href=''>Intraday margins </a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href=''>Kite user manual</a>
                    </p>
                </div>
                <div className='col-6 p-5'>
                    <h2>Featured</h2>
                    <ul>
                    <li>Credit for the funds withdrawal request made yesterday will be credited to your bank account by 4 PM today.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Hero;