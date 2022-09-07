import '../../../css/about-me/sub-components/ContactMe.css';

const ContactMe = (props: {}) => {
    return (
        <div id="contact-me-section" className="text-center">
            <h2 id="contact-me-title">Contact Me</h2>

            <p> Resume: <a href="https://andrewchatch.github.io/interactive-resume/" target="_blank">Interactive Resume</a></p>
            <p> Email: <a href="mailto: andrew.hatch96@gmail.com" data-rel="external" target="_blank">andrew.hatch96@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/andrew-hatch-8b13b0134" target="_blank">linkedin.com/in/andrew-hatch-8b13b0134</a></p>
            <p>GitHub: <a href="https://github.com/andrewchatch" target="_blank">github.com/andrewchatch</a></p>
        </div>
    )
}

export default ContactMe;