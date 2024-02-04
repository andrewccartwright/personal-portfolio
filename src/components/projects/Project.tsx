
const Project = (props: {obj: {src: string, link: string, name: string, description: string}}) => {
    const {src, link, name, description} = props.obj;

    return (
        <div className="project">
          <a className="project-links" href={link} target="_blank" rel="noreferrer">
            <img src={src} alt={name} className="project-img" />
            <div className="project-img-label text-center">{name}</div>
          </a>
          <p className="project-description text-center">{description}</p>

          { link === 'https://andrewccartwright.github.io/quasigroups' && 
            <p> You can read more about quasigroups&nbsp;
              <a href='https://en.wikipedia.org/wiki/Quasigroup#:~:text=In%20mathematics%2C%20especially%20in%20abstract,not%20have%20an%20identity%20element.' target='_blank'>
                here
              </a>
              .
            </p>
            
          }
        </div>
    )
}

export default Project;