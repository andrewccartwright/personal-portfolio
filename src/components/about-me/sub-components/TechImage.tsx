const TechImage = (props: {obj: {src: string, alt: string, label: string}}) => {
    const src = props.obj.src;
    const alt = props.obj.alt;
    const label = props.obj.label;

    return (
        <div className="col-xs-3 img-div">
            <img src={src} alt={alt} className="img-responsive" />
            <p className="img-label">{label}</p>
        </div>
    )    
}

export default TechImage;