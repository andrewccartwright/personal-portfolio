import '../../css/about-me/ContactMe.css';
import ContactLink from './ContactLink';

const ContactMe = (props: {}) => {
    const links: LinkData[] = [
        {
            link: "https://andrewccartwright.github.io/interactive-resume/",
            text: "Resume"
        },
        {
            link: "mailto: drew.c.cartwright@gmail.com",
            text: "Email"
        },
        {
            link: "https://www.linkedin.com/in/andrew-cartwright-8b13b0134",
            text: "LinkedIn"
        },
        {
            link: "https://github.com/andrewccartwright",
            text: "GitHub"
        }
    ]


    return (
        <div id="contact-me-section" className="text-center">
            <h2 id="contact-me-title">Contact Me</h2>

            {
                links.map((data, i) => {
                    return <ContactLink data={data} key={i} />
                })
            }
        </div>
    )
}

export default ContactMe;