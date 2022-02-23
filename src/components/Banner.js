import React from 'react';
import CV from '../documents/ATo_CV.pdf';

const Banner = () => {
    return (
        <section id="cv" className="one dark cover" >
            <div className='container'>
                <header>
                    <h2>Alexandra To, PhD</h2>

                    <p>Alexandra is an Assistant Professor jointly appointed in the College of Arts, Media &amp; Design in the Art + Design (<a href="https://games.northeastern.edu/">Games</a>) department and the Khoury College of Computer Science at Northeastern University. In her work she uses human-computer interaction research methods, storytelling, and design to illuminate patterns of racial oppression in technology.</p>

                    <p><a href={CV} className="button scrolly" download="AlexandraToCV">Download CV</a></p>
                </header>
            </div>
        </section>
    )
}

                export default Banner