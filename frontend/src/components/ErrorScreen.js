import React from 'react';
import ned from '../images/ned.gif'

const ErrorScreen = () => {
  return (
    <div id="main">
        <section className="project">
            <div className='container'>
                <h2>404 Error</h2>
                <h4 style={{ textAlign: 'center' }}>YOU DIDN'T SAY THE MAGIC WORD</h4>
                <img src={ ned } style={{ float: 'none' }} alt='Ned'/>
            </div>
        </section>
    </div>
)
};

export default ErrorScreen;
