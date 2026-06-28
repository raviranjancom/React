import React from 'react';

const App=(props)=>{
    return (
        <div className='card'>
            <div className='header'>
                <img src={props.logo}></img>
                <button>Save</button>
            </div>
            <div class='main'>
                <p className='companyName'>{props.company}</p>
                <h2 className='role'>{props.role}</h2>
                <div className='tags'>
                    <div className='tag1'>{props.tag1}</div>
                    <div className='tag2'>{props.tag2}</div>
                </div>
            </div>
            <div className='footer'>
                <div className='data'>
                    <div className='cost'>{props.salary}</div>
                    <p className='location'>{props.location}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    );
}

export default App;
