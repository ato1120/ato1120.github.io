import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Bio = () => {
    // State for storing additional bio text
    const [readMore, setReadMore] = useState(false);

    const longBio =
        <div className='container'>
            <p>
                Alexandra To is an Assistant Professor at Northeastern University jointly appointed in the Art + Design (Games) department in the College of Art, Media, and Design and the Khoury College of Computer Science. 
                Her lab’s core research interests are in studying and designing games and other social technologies to empower people in marginalized contexts. 
                She uses qualitative methods to gather and share counterstories and participatory methods to design for the future. 
                She additionally has experience leading teams of transformational game designers and has designed award-winning games. 
                She has received multiple ACM Best Paper and Honorable Mention awards as well as an ACM CSCW Award for Contribution to Diversity and Inclusion. 
                She has published at CHI, UIST, CSCW, CHI PLAY, ToDiGRA, and DIS. 
            </p>
            <p>
            She received her PhD in Human-Computer Interaction from Carnegie Mellon University, advised by Jessica Hammer and Geoff Kaufman. 
                She also holds a B.S. and M.S. in Symbolic Systems with a minor in Asian American Studies from Stanford University, advised by Michael S. Bernstein.
            </p>
            <p>
                Alexandra is a racial justice activist, a critical race scholar, game designer. 
                She loves TTRPGs and in her free time she GM's, plays, and watches a ton of actual play shows.
            </p>
        </div>

    const linkName = readMore ? 'Show Less' : 'Show More';

    return (
        <section id="bio" className='two'>
            {readMore === false ?
                (
                    <div className='container'>
                        <header>
                            <h2><i>Brief Biography</i></h2>
                        </header>
                        <p>
                            Alexandra is an HCI researcher, game designer, and racial justice activist.
                        </p>
                        <p>
                            She received her Ph.D. in Human-Computer Interaction from Carnegie Mellon University. 
                            She also holds both an M.S. and a B.S. with Honors and HCI concentration in Symbolic Systems and a minor in Asian American Studies from Stanford University.
                        </p>
                    </div>
                ) : (
                    <div className='container'>
                        <header>
                            <h2><i>Biography</i></h2>
                        </header>
                        {longBio}
                    </div>
                )
            }
            <Button href="#" onClick={() => { setReadMore(!readMore) }}>{linkName}</Button>
        </section>

    )
};

export default Bio;
