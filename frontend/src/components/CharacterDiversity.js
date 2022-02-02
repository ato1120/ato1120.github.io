import React from 'react';
import arkham from '../images/diversityarkham.jpg';

const CharacterDiversity = () => {
    return (
        <div id='main'>
            <section>
                <h2>Character Diversity for Digital and Non-Digital Games</h2>
                <div className='container'>
                    <h4 style={{ textAlign: 'left'}}>Project Abstract:</h4>
                    <div className='row' style={{ alignItems: 'center', paddingTop: '5px'}}>
                        <div className='col-6' style={{ textAlign: 'left' }}>
                            <p>
                                We explore how digital and non-digital games express diversity through characters, understood as representations of marginalized groups to which the player may or may not belong. We identify a range of techniques using visual design, abstract character representation, delineation of game setting and roles, conversation design, and the design of rules and systems. We illustrate these techniques with exemplar games identified through consultation with experts. This analysis yields four key recommendations for designing diversity across a range of game platforms: match diversity affordances to player needs; draw strengths from both the digital and non-digital realms; design for conversation; and consider player diversity. We conclude by proposing diversity as an end-to-end process in both game research and design.
                            </p>
                        </div>
                        <div className='col-6' style={{ paddingTop: '0px' }}>
                            <img src={ arkham } style={{ height: '350px', width: '500px' }} alt="Many character images from the Arkham Horror game" />
                        </div>
                    </div>
                    <div className='container' style={{ textAlign: 'left' }}>
                        <h4>Key Publications:</h4>
                        <ol>
                            <li><strong>To, A.</strong>, McDonald, J., Holmes, J., Kaufman, G., &amp; Hammer, J. (2018). <a href="http://todigra.org/index.php/todigra/article/download/84/135">Character Diversity in Digital and Non-Digital Games.</a> Transactions of the Digital Games Research Association, 4(1).</li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default CharacterDiversity;
