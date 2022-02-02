import React from 'react';
import outbreak from '../images/outbreak.png';

const SCIPR = () => {
    return (
        <div id="main">
        <section className="project">
            <div className='container'>
                <h2>Sensing Curiosity in Play and Responding (SCIPR)</h2>
                <br />

                <img src={ outbreak }alt="A table with a four-person board game laid out" />
                <h4>Project Abstract:</h4>
                <p>
                    Women and underrepresented racial minority students are marginalized in STEM contexts. The anxiety and burden that come with marginalization first appear in adolescence and can contribute to long-term disengagement.  In the SCIPR project, we design transformational games for middle-school aged students who are marginalized in STEM. The games encourage and foster curiosity, as a type of STEM skill to increase comfort and competency in STEM spaces. 
                </p><p>

                    This project has contributions in game design methodology, playtesting methods for marginalized children, curiosity and uncertainty theory, and has produced award-winning games. 
                </p>

                <h4>Key Publications:</h4>
                <ol>
                    <li><strong>To, A.</strong>, Holmes, J., Fath, E., Zhang, E., Kaufman, G., &amp; Hammer, J. (2018). Modeling and Designing for Key Elements of Curiosity: Risking Failure, Valuing Questions. Transactions of the Digital Games Research Association, 4(2).</li>
                    <li>Holmes, J. R., <strong>To, A.</strong>, Zhang, F., Park, S. E., Ali, S., Bai, Z., &amp; Hammer, J. (2019, May). A good scare: leveraging game theming and narrative to impact player experience. In Extended Abstracts of the 2019 CHI Conference on Human Factors in Computing Systems (pp. 1-6).</li>
                    <li><strong>To, A.</strong>, Ali, S., Kaufman, G. F., &amp; Hammer, J. (2016). Integrating Curiosity and Uncertainty in Game Design. In Digra/fdg.</li>
                </ol>
            </div>
        </section>
    </div>
    )
};

export default SCIPR;
