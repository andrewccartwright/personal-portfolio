import '../../../css/about-me/sub-components/ContactMe.css';

const ContactMe = (props: {}) => {
    return (
        <div id="contact-me-section" className="text-center">
            <h2 id="contact-me-title">Contact Me</h2>

            <p> Resume: <a href="https://andrewccartwright.github.io/interactive-resume/" target="_blank">Interactive Resume</a></p>
            <p> Email: <a href="mailto: drew.c.cartwright@gmail.com" data-rel="external" target="_blank">drew.c.cartwright@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/andrew-cartwright-8b13b0134" target="_blank">linkedin.com/in/andrew-cartwright-8b13b0134</a></p>
            <p>GitHub: <a href="https://github.com/andrewccartwright" target="_blank">github.com/andrewccartwright</a></p>
        </div>
    )
}

export default ContactMe;