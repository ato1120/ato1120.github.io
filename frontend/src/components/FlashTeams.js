import React from 'react';
import { Image, Container } from 'react-bootstrap';

const FlashTeams = () => {
    return (
        <div id="main">
        <section className="project">
            <Container>
                <h2>Flash Teams and Organizations</h2>
                <br />

                <Image src="/images/flashteams.jpg" alt="A colorful gradient placeholder" />
                <h4>Project Abstract:</h4>
                <p>
                    Flash teams are computationally-guided teams of crowd experts, supported by lightweight, reproducible, and scalable team structures. Crowdsourcing platforms give users access to thousands of workers, on-demand, but the most prevalent model, microtask crowd work, fails to take advantage of the combined expertise of these workers. Flash teams structure expert crowd work to enable users to complete complex and interdependent projects (e.g., web design) by embedding techniques of high performing offline teams within a model that can take advantage of computation’s ability to abstract, scale, and visualize progress. 
                </p>

                <h4>Key Publications:</h4>
                <ol>
                    <li>Valentine, M. A., Retelny, D., To, A., Rahmati, N., Doshi, T., &amp; Bernstein, M. S. (2017, May). Flash organizations: Crowdsourcing complex work by structuring crowds as organizations. In Proceedings of the 2017 CHI conference on human factors in computing systems (pp. 3523-3537). BEST PAPER AWARD</li>
                    <li>Retelny, D., Robaszkiewicz, S., To, A., Lasecki, W. S., Patel, J., Rahmati, N., &amp; Bernstein, M. S. (2014, October). Expert crowdsourcing with flash teams. In Proceedings of the 27th annual ACM symposium on User interface software and technology (pp. 75-85). BEST PAPER AWARD</li>
                </ol>
                <h4>Media:</h4>
                <ol>
                    <li><a href="https://www.nytimes.com/2017/07/12/business/economy/flash-organizations-labor.html">The Pop-Up Employer: Build a Team, Do the Job, Say Goodbye.</a> The New York Times. July, 2017</li>
                    <li><a href="https://news.stanford.edu/news/2014/august/crowd-sourcing-video-082514.html">Stanford team looks to take crowdsourcing to a whole new level.</a> Stanford News. August 25, 2014.</li>
                    <li><a href="https://news.stanford.edu/features/2014/symbolic-systems/">Stanford’s Symbolic Systems program bridges the gap between humanity and technology.</a> Stanford News. August, 2014. </li>
                </ol>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/lcUQ3HDzKS8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Container>
        </section>
    </div>
    )
};

export default FlashTeams;
