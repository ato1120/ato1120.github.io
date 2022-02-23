/*
---------------------------- HOW TO USE THIS FILE -------------------------------
    To add a new project to the site, copy the project object below and paste it at the end of the file.

    PROJECT OBJECT TEMPLATE: 
    - Fill this out with the content you wish to see for a given project page
    - For any field that's empty, enter null

    // The Project Object Template starts here
    {
        linkName: 'name', // This field is used by the webpage to ensure that it loads the correct project page and is what is seen in the URL 
        title: 'Project Title', // This field is the title of the project and acts as the header on the individual project page
        abstract: 'abstract text', // This field contains the project abstract language; type it out exactly as you'd like to see it on your site
        thumbnailImage: require('./thumbnails/imageName.fileExtension'), // This field pulls the correct thumbnail image from the thumbnails folder; fill out the imageName and fileExtension based on the image you'd like to use
        thumbnailImageDescription: 'description', // This field populates the alt text if the thumbnail fails to load
        image: require('./images/imageName.fileExtension'), // This field pulls the project image for the individual project page from the images folder; fill out the imageName and fileExtension based on the image you'd like to use
        imageDescription: 'description', // This field populates the alt text if the image fails to load on the project page
        media: [ // The media section is for any links to external sites you'd like to include on an individual project page; if there's no media, delete this and enter null
            {
                mediaLink: 'URL', // Enter the URL of the media you'd like to link to here
                mediaLinkTitle: 'link title', // This generates the text for the clickable link on the individual project page
                mediaLinkDescription: 'description', // Use this for any lead-in text you'd like to include prior to the mediaLink
                mediaLinkInfo: 'info', // Include any additional info text about the media here; this is usually used for citations
            }
        ],
        publications: [ // The publications sections is for all of the work you've contributed to related to a given project; if there aren't any publications, delete this and enter null
            {
                name: 'title of publication', // This field contains the title of the publication
                authors: 'list of authors', // This field contains the list of authors that contributed to the project
                authorNotes: 'notes', // This field contains notes about the contributing authors
                status: 'status', // This field indicates the publication status
                publicationDate: 'date', // This field populates the publication date
                publicationInfo: 'info', // This field contains publication info
                publicationLink: 'URL', // This field will provide a link to the publication
            },
            // To add additional publications, copy the curly braces {} and everything in between
        ],
        videoLinks: ['URL',] // This will render video players for each link listed here; all links should be placed inside the brackets [], surrounded by quotes, and separated by a comma if there are multiple videos
    },
    // The Project Object Template ends here

    HELPFUL JAVASCRIPT CHARACTERS
    JavaScript doesn't recognize certain characters that often come up when writing, so I've included these here if you see any errors while you're typing things out:
        - To use a (') in a JavaScript string, use '\'' (e.g. 'that\'s amore')
        - To use a (") in a JavaScript string, use '\"' (e.g. 'I said, \"this is how you do it\"')
        - To use a (\) in a JavaScript string, use '\\' (e.g. 'here's a backslash: \\')
        - To create a new line in a JavaScript string, use '\n' (e.g. 'Have another paragraph \n Here's the next paragraph')

*/

const projects = [
    {
        linkName: 'care',
        title: 'Coping After Racist Experiences (CARE)',
        abstract: 'Over 35% of Americans belong to racial minority groups. Pernicious, ubiquitous experiences with everday racism - both overt and subtle, profoundly impact physical, mental, and emotional well-being. While social support is one of the better documented coping strategies, people of color remain rightfully mistrustful and hesistant to utilize online social networks. In this work, I investigate how people of color use social technology to cope with the aftermath of interpersonal racism. I identify the current challenges in using social technology, and use participatory design approaches to examine speculative future technology design.',
        thumbnailImage: require('./thumbnails/careworkshop.jpg'),
        thumbnailImageDescription: 'Several hands place sticky notes on a table at a PD workshop',
        image: require('./images/careworkshop.jpg'),
        imageDescription: 'Several hands place sticky notes on a table at a PD workshop',
        media: null,
        publications: [
            {
                name: 'Interactive Narrative as a Foundation to Talk about Racism',
                authors: 'Carey, H., To, A., Hammer, J., Kaufman, G.',
                authorNotes: null,
                status: 'In Proc.',
                publicationDate: null,
                publicationInfo: 'DIS 2020 Work-in-Progress',
                publicationLink: null
            },
            {
                name: '"They Just Don\'t Get It": Towards Social Technologies for Coping with Interpersonal Racism',
                authors: 'To, A., Sweeney, W., Hammer, J., Kaufman, G.',
                authorNotes: null,
                status: 'In Proc.',
                publicationDate: null,
                publicationInfo: 'CSCW 2020',
                publicationLink: null
            },
            {
                name: '"Reducing Uncertainty and Offering Comfort: Designing Technology for Coping with Interpersonal Racism"',
                authors: 'To, A., Carey, H., Kaufman, G., Hammer, J.',
                authorNotes: null,
                status: '[IN PRESS]',
                publicationDate: null,
                publicationInfo: 'CHI 2021',
                publicationLink: null
            }
        ],
        videoLinks: null
    },
    {
        linkName: 'characterdiversity',
        title: 'Character Diversity for Digital and Non-Digital Games',
        abstract: 'We explore how digital and non-digital games express diversity through characters, understood as representations of marginalized groups to which the player may or may not belong. We identify a range of techniques using visual design, abstract character representation, delineation of game setting and roles, conversation design, and the design of rules and systems. We illustrate these techniques with exemplar games identified through consultation with experts. This analysis yields four key recommendations for designing diversity across a range of game platforms: match diversity affordances to player needs; draw strengths from both the digital and non-digital realms; design for conversation; and consider player diversity. We conclude by proposing diversity as an end-to-end process in both game research and design.',
        thumbnailImage: require('./thumbnails/diversityarkham.jpg'),
        thumbnailImageDescription: 'Many character images from the Arkham Horror game',
        image: require('./images/diversityarkham.jpg'),
        imageDescription: 'Many character images from the Arkham Horror game',
        media: null,
        publications: [
            {
                name: 'Character Diversity in Digital and Non-Digital Games.',
                authors: 'To, A., McDonald, J., Holmes, J., Kaufman, G., Hammer, J.',
                authorNotes: null,
                status: null,
                publicationDate: null,
                publicationInfo: '2018 Transactions of the Digital Games Research Association, 4(1).',
                publicationLink: 'http://todigra.org/index.php/todigra/article/download/84/135'
            }
        ],
        videoLinks: null
    },
    {
        linkName: 'crt',
        title: 'Critical Race Theory for HCI',
        abstract: 'The human-computer interaction community has made some efforts toward racial diversity, but the outcomes remain meager. We introduce critical race theory and adapt it for HCI to lay a theoretical basis for race-conscious efforts, both in research and within our community. Building on the theory\'s original tenets, we argue that racism is pervasive in everyday socio-technical systems; that the HCI community is prone to "interest convergence", where concessions to inclusion require benefits to those in power; and that the neoliberal underpinnings of the technology industry itself propagate racism. Critical race theory uses storytelling as a means to upend deep-seated assumptions, and we relate several personal stories to highlight ongoing problems of race in HCI. The implications: all HCI research must be attuned to issues of race; participation of underrepresented minorities must be sought in all of our activities; and as a community, we cannot become comfortable while racial disparities exist.',
        thumbnailImage: require('./thumbnails/pic02.jpg'),
        thumbnailImageDescription: 'A colorful gradient placeholder',
        image: require('./images/pic02.jpg'),
        imageDescription: 'A colorful gradient placeholder',
        media: [
            {
                mediaLink: 'https://sites.google.com/view/raceinhci',
                mediaLinkTitle: 'raceinhci.com',
                mediaLinkDescription: 'Learn more and join our growing community of HCI researchers interested in race on Slack by visiting',
                mediaLinkInfo: null,
            }
        ],
        publications: [
            {
                name: 'Critical Race Theory for HCI.',
                authors: 'Ogbonnaya-Ogburu, I. F., Smith, A. D., To, A.*, Toyama, K.',
                authorNotes: '*These authors contributed equally',
                status: null,
                publicationDate: '(2020, April)',
                publicationInfo: 'In Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems (pp. 1-16). Best Paper Award [top 1%]',
                publicationLink: null
            }
        ],
        videoLinks: null
    },
    {
        linkName: 'flashteams',
        title: 'Flash Teams and Organizations',
        abstract: 'Flash teams are computationally-guided teams of crowd experts, supported by lightweight, reproducible, and scalable team structures. Crowdsourcing platforms give users access to thousands of workers, on-demand, but the most prevalent model, microtask crowd work, fails to take advantage of the combined expertise of these workers. Flash teams structure expert crowd work to enable users to complete complex and interdependent projects (e.g., web design) by embedding techniques of high performing offline teams within a model that can take advantage of computation\'s ability to abstract, scale, and visualize progress.',
        thumbnailImage: require('./thumbnails/flashteams.jpg'),
        thumbnailImageDescription: 'A colorful gradient placeholder',
        image: require('./images/flashteams.jpg'),
        imageDescription: 'A colorful gradient placeholder',
        media: [
            {
                mediaLink: 'https://www.nytimes.com/2017/07/12/business/economy/flash-organizations-labor.html',
                mediaLinkTitle: 'The Pop-Up Employer: Build a Team, Do the Job, Say Goodbye.',
                mediaLinkDescription: null,
                mediaLinkInfo: 'The New York Times. July, 2017',
            },
            {
                mediaLink: 'https://news.stanford.edu/news/2014/august/crowd-sourcing-video-082514.html',
                mediaLinkTitle: 'Stanford team looks to take crowdsourcing to a whole new level.',
                mediaLinkDescription: null,
                mediaLinkInfo: 'Stanford News. August 25, 2014.',
            },
            {
                mediaLink: 'https://news.stanford.edu/features/2014/symbolic-systems/',
                mediaLinkTitle: 'Stanford\'s Symbolic Systems program bridges the gap between humanity and technology.',
                mediaLinkDescription: null,
                mediaLinkInfo: 'Stanford News. August, 2014.'
            }
        ],
        publications: [
            {
                name: 'Flash organizations: Crowdsourcing complex work by structuring crowds as organizations.',
                authors: 'Valentine, M. A., Retelny, D., To, A., Rahmati, N., Doshi, T., Bernstein, M. S.',
                authorNotes: null,
                status: null,
                publicationDate: '(2017, May)',
                publicationInfo: 'In Proceedings of the 2017 CHI conference on human factors in computing systems (pp. 3523-3537). BEST PAPER AWARD',
                publicationLink: null
            },
            {
                name: 'Expert crowdsourcing with flash teams.',
                authors: 'Retelny, D., Robaszkiewicz, S., To, A., Lasecki, W. S., Patel, J., Rahmati, N., Bernstein, M. S.',
                authorNotes: null,
                status: null,
                publicationDate: '(2014, October)',
                publicationInfo: 'In Proceedings of the 27th annual ACM symposium on User interface software and technology (pp. 75-85). BEST PAPER AWARD',
                publicationLink: null
            }
        ],
        videoLinks: ['https://www.youtube.com/embed/lcUQ3HDzKS8']
    },
    {
        linkName: 'scipr',
        title: 'Sensing Curiosity in Play and Responding (SCIPR)',
        abstract: 'Women and underrepresented racial minority students are marginalized in STEM contexts. The anxiety and burden that come with marginalization first appear in adolescence and can contribute to long-term disengagement.  In the SCIPR project, we design transformational games for middle-school aged students who are marginalized in STEM.\n\rThe games encourage and foster curiosity, as a type of STEM skill to increase comfort and competency in STEM spaces. This project has contributions in game design methodology, playtesting methods for marginalized children, curiosity and uncertainty theory, and has produced award-winning games.',
        thumbnailImage: require('./thumbnails/outbreak.png'),
        thumbnailImageDescription: 'A table with a four-person board game laid out',
        image: require('./images/outbreak.png'),
        imageDescription: 'A table with a four-person board game laid out',
        media: null,
        publications: [
            {
                name: 'Modeling and Designing for Key Elements of Curiosity: Risking Failure, Valuing Questions.',
                authors: 'To, A., Holmes, J., Fath, E., Zhang, E., Kaufman, G., Hammer, J.',
                authorNotes: null,
                status: null,
                publicationDate: '(2018)',
                publicationInfo: 'Transactions of the Digital Games Research Association, 4(2).',
                publicationLink: null
            },
            {
                name: 'A good scare: leveraging game theming and narrative to impact player experience.',
                authors: 'Holmes, J. R., To, A., Zhang, F., Park, S. E., Ali, S., Bai, Z., Hammer, J.',
                authorNotes: null,
                status: null,
                publicationDate: '(2019, May)',
                publicationInfo: 'In Extended Abstracts of the 2019 CHI Conference on Human Factors in Computing Systems (pp. 1-6).',
                publicationLink: null
            },
            {
                name: 'Integrating Curiosity and Uncertainty in Game Design.',
                authors: 'To, A., Ali, S., Kaufman G.F., & Hammer, J.',
                authorNotes: null,
                status: null,
                publicationDate: '(2016)',
                publicationInfo: 'In Digra/fdg.',
                publicationLink: null
            }
        ],
        videoLinks: null
    },
    {
        linkName: 'ttgd',
        title: 'Tandem Transformational Game Design',
        abstract: 'In transformational game design, developing a clear, shared vision of how the player should change as a result of the game is a critical and ongoing process. However, multidisciplinary teams, particularly those comprised of both expert and novice designers and researchers, may experience barriers to a shared vision due to disparate vocabulary and theoretical frameworks. Tandem Transformational Game Design is a game design process framework. It encourages making to reflect and iterating on theory and related transformational goals in order to help align interdisciplinary team members and maximize their contributions.',
        thumbnailImage: require('./thumbnails/TTGD_Icons.png'),
        thumbnailImageDescription: 'An infinity-like diagram that demonstrates the game design process flow',
        image: require('./images/TTGD_Icons.png'),
        imageDescription: 'An infinity-like diagram that demonstrates the game design process flow',
        media: [
            {
                mediaLink: 'http://tandemdesign.mystrikingly.com/',
                mediaLinkTitle: 'More on our website here.',
                mediaLinkDescription: null,
                mediaLinkInfo: null,
            }
        ],
        publications: [
            {
                name: 'Transition from Goal Driven Game Design to Game Driven Goal Delineation in Tandem Transformational Game Design.',
                authors: 'Ali, S., To, A., Bai, Z., Holmes, J., Fath, E., Kaufman, G., Hammer, J.',
                authorNotes: null,
                status: null,
                publicationDate: '(2018)',
                publicationInfo: 'In Proc. Meaningful Play 2018',
                publicationLink: null
            },
            {
                name: 'Tandem Transformational Game Design: A Game Design Process Case Study.',
                authors: 'To, A., Fath, E., Zhang, E., Ali, S., Kildunne, C., Fan, A., Kaufman, G.',
                authorNotes: null,
                status: null,
                publicationDate: '(2016)',
                publicationInfo: 'In Proceedings of the International Academic Conference on Meaningful Play.',
                publicationLink: null
            }
        ],
        videoLinks: null
    },
    // PASTE NEW PROJECT OBJECTS HERE

]

export default projects