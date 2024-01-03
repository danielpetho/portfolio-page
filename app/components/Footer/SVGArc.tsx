import Image from "next/image";
import svg from "@/public/Subtract.svg";

const SVGArc = ({ ...props }) => {

    return (
        <div {...props}>
            <Image
                priority
                src={svg}
                height={100}
                width={100}
                alt="Follow us on Twitter"
            />
        </div>
    )
}

export default SVGArc;