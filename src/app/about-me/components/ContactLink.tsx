const ContactLink = (props: {data: LinkData}) => {
    const { data } = props;

    return (
        <a className="contact-links" href={data.link} target="_blank" rel="noreferrer">
            <div className="contact-link-container">
                {data.text}
            </div>
        </a>
    )
}

export default ContactLink;