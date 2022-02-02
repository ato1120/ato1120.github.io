import React from 'react';
import ttgdPicture from '../images/TTGD_Icons.png';

const TTGD = () => {
    return (
        <div id='main'>
        <section>
            <h2>Tandem Transformational Game Design</h2>
            <div className='container'>
                <h4 style={{ textAlign: 'left' }}>Project Abstract:</h4>
                <div className='row' style={{ alignItems: 'center', paddingTop: '5px'}}>
                    <div className='col-6' style={{ textAlign: 'left' }}>
                        <p>
                            In transformational game design, developing a clear, shared vision of how the player should change as a result of the game is a critical and ongoing process. However, multidisciplinary teams, particularly those comprised of both expert and novice designers and researchers, may experience barriers to a shared vision due to disparate vocabulary and theoretical frameworks. Tandem Transformational Game Design is a game design process framework. It encourages making to reflect and iterating on theory and related transformational goals in order to help align interdisciplinary team members and maximize their contributions. 
                        </p>
                    </div>
                    <div className='col-6' style={{ paddingTop: '0px' }}>
                        <img src={ ttgdPicture } style={{ height: '250px', width: '500px' }} alt="An infinity-like diagram that demonstrates the game design process flow" />
                    </div>
                </div>
                <div className='container' style={{ textAlign: 'left' }}>
                    <h4>Key Publications:</h4>
                    <ol>
                        <li>Ali, S., <strong>To, A.</strong>, Bai, Z., Holmes, J., Fath, E., Kaufman, G., Hammer, J. (2018). Transition from Goal Driven Game Design to Game Driven Goal Delineation in Tandem Transformational Game Design. In Proc. Meaningful Play 2018</li>
                        <li><strong>To, A.</strong>, Fath, E., Zhang, E., Ali, S., Kildunne, C., Fan, A., &amp; Kaufman, G. (2016). Tandem Transformational Game Design: A Game Design Process Case Study. In Proceedings of the International Academic Conference on Meaningful Play.</li>
                    </ol>
                    <p><a href="http://tandemdesign.mystrikingly.com/">More on our website here.</a></p>
                </div>
            </div>
        </section>
    </div>
    )
};

export default TTGD;
