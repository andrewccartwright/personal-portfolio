import Image, { StaticImageData } from "next/image";

const TechImage = (props: {obj: {src: StaticImageData, alt: string, label: string}}) => {
    const src = props.obj.src;
    const alt = props.obj.alt;
    const label = props.obj.label;

    return (
        <div className="col-sm img-div">
            <Image src={src} alt={alt} className="img-responsive" priority={true} />
            <p className="img-label">{label}</p>
        </div>
    )    
}

export default TechImage;