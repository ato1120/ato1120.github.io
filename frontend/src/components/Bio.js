import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CV from '../documents/ATo_CV.pdf';

const Bio = () => {
    // State for storing additional bio text
    const [readMore, setReadMore] = useState(false);

    const longBio = 
        <div className='container'>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur nequeab 
                porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
                commodi officia aliquam! Maxime.
            </p>
        </div>

    const linkName= readMore ? 'Show Less' : 'Show More';

    return (
        <section id="bio" className="one dark cover">
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
