import React from 'react';
import { Container, Image } from 'react-bootstrap';

const TTGD = () => {
    return (
        <div id="main">
        <section className="project">
            <Container>
                <h2>Tandem Transformational Game Design</h2>
                <br />

                <Image src="/images/TTGD_Icons.png" alt="An infinity-like diagram that demonstrates the game design process flow" />
                <h4>Project Abstract:</h4>
                <p>
                    In transformational game design, developing a clear, shared vision of how the player should change as a result of the game is a critical and ongoing process. However, multidisciplinary teams, particularly those comprised of both expert and novice designers and researchers, may experience barriers to a shared vision due to disparate vocabulary and theoretical frameworks. Tandem Transformational Game Design is a game design process framework. It encourages making to reflect and iterating on theory and related transformational goals in order to help align interdisciplinary team members and maximize their contributions. 
                </p>

                <h4>Key Publications:</h4>
                <ol>
                    <li>Ali, S., To, A., Bai, Z., Holmes, J., Fath, E., Kaufman, G., Hammer, J. (2018). Transition from Goal Driven Game Design to Game Driven Goal Delineation in Tandem Transformational Game Design. In Proc. Meaningful Play 2018</li>
                    <li>To, A., Fath, E., Zhang, E., Ali, S., Kildunne, C., Fan, A., &amp; Kaufman, G. (2016). Tandem Transformational Game Design: A Game Design Process Case Study. In Proceedings of the International Academic Conference on Meaningful Play.</li>
                </ol>
                <p><a href="http://tandemdesign.mystrikingly.com/">More on our website here.</a></p>
            </Container>
        </section>
    </div>
    )
};

export default TTGD;
