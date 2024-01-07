import Image from "next/image";
import svg from "@/public/Subtract.svg";
import useDimension from "@/src/hooks/useDimension";

const SVGArc = ({ ...props }) => {
    const { viewportWidth } = useDimension();
    return (
        <div {...props}>
            <Image
                priority
                src={svg}
            
                alt="Follow us on Twitter"
                width={Math.max(viewportWidth / 15., 75)}
                height={Math.max(viewportWidth / 15, 75)}
            />
        </div>
    )
}

export default SVGArc;