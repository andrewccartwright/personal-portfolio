
const Project = (props: {obj: {src: string, link: string, name: string, description: string}}) => {
    const {src, link, name, description} = props.obj;

    return (
        <div className="project">
          <a className="project-links" href={link} target="_blank" rel="noreferrer">
            <img src={src} alt={name} className="project-img" />
            <div className="project-img-label text-center">{name}</div>
          </a>
          <p className="project-description text-center">{description}</p>
        </div>
    )
}

export default Project;