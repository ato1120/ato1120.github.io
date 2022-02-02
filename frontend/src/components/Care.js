import React from 'react';
import carePicture from '../images/careworkshop.jpg';


const Care = () => {
    return (
        <div id="main">
            <section className="project">
                <div className='container'>
                    <h2>Coping After Racist Experiences (CARE)</h2>
                    <br />
                    <h4>Project Abstract:</h4>
                    <img src={ carePicture } style={{ height: '250px', width: '250px' }} alt="Several hands place sticky notes on a table at a PD workshop" />
                    <p>
                        Over 35% of Americans belong to racial minority groups. Pernicious, ubiquitous experiences with everday racism - both overt and subtle, profoundly impact physical, mental, and emotional well-being. While social support is one of the better documented coping strategies, people of color remain rightfully mistrustful and hesistant to utilize online social networks. In this work, I investigate how people of color use social technology to cope with the aftermath of interpersonal racism. I identify the current challenges in using social technology, and use participatory design approaches to examine speculative future technology design.
                    </p>
                    <h4>Key Publications:</h4>
                    <ol>
                        <li>Carey, H., <b>To, A.</b>, Hammer, J., Kaufman, G. Fictional, <i>Interactive Narrative as a Foundation to Talk about Racism</i>. In Proc. DIS 2020 Work-in-Progress.</li>
                        <li><b>To, A.</b>, Sweeney, W., Hammer, J., Kaufman, G. <i>"They Just Don't Get It": Towards Social Technologies for Coping with Interpersonal Racism</i>. In Proc. CSCW 2020.</li>
                        <li><b>To, A.</b>, Carey, H., Kaufman, G., Hammer, J. <i>"Reducing Uncertainty and Offering Comfort: Designing Technology for Coping with Interpersonal Racism"</i> [IN PRESS] CHI 2021.</li>
                    </ol>
                </div>
            </section>
        </div>
                );
};

export default Care;
