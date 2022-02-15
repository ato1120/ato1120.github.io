import React, { useState } from 'react';

import { Button } from 'react-bootstrap';
import CV from '../documents/ATo_CV.pdf';

const Bio = () => {
    // State for storing additional bio text
    const [readMore, setReadMore] = useState(false);

    const longBio = 
        <div className='container'>
            <p>
            Alexandra To is an Assistant Professor at Northeastern University jointly appointed in the Art + Design (Games) department in the College of Art, Media, and Design and the Khoury College of Computer Science. Her lab’s core research interests are in studying and designing games and other social technologies to empower people in marginalized contexts. She uses qualitative methods to  gather counterstories and participatory methods to design for the future. She additionally has extensive experience leading teams of educational game designers and has designed award-winning games. She has received multiple ACM Best Paper awards and published at CHI, UIST, CSCW, CHI Play, ToDiGRA, and DIS. Alexandra is a racial justice activist, a critical race scholar, game designer. She received her PhD in Human-Computer Interaction from Carnegie Mellon University as well as a B.S. and M.S. in Symbolic Systems with a minor in Asian American Studies from Stanford University. In her free time she both GM’s and plays TTRPGs. 
            </p>
        </div>

    const linkName= readMore ? 'Show Less' : 'Show More';

    return (
        
        <section id="bio" className="one dark cover" href='#bio'>
            <div className='container'>
                <header>
                    <h2>Alexandra To, PhD</h2>

                    <p>Alexandra is an Assistant Professor jointly appointed in the College of Arts, Media &amp; Design in the Art + Design (<a href="https://games.northeastern.edu/">Games</a>) department and the Khoury College of Computer Science at Northeastern University. In her work she uses human-computer interaction research methods, storytelling, and design to illuminate patterns of racial oppression in technology.</p>

                    <p><a href={ CV } className="button scrolly" download="AlexandraToCV">Download CV</a></p>
                </header>
                {readMore === false ? 
                (
                    <>
                        <h3><i>Biography</i></h3>
                        <p>
                            Alexandra is an HCI researcher, game designer, and racial justice activist. 
                        </p>
                        <p>
                            She received her Ph.D. in Human-Computer Interaction from Carnegie Mellon University where she was advised by Dr. Jessica Hammer and Dr. Geoff Kaufman. Previously she received both an M.S. and B.S. in Symbolic Systems with a concentration in HCI and a minor in Asian American Studies at Stanford University, advised by Dr. Michael Bernstein. 
                        </p>
                    </>
                ) : (
                    <>
                        {longBio}
                    </>
                )
            }
            <Button href="#" onClick={() => {setReadMore(!readMore)}}>{linkName}</Button>
            </div>
        </section>
    )
};

export default Bio;
