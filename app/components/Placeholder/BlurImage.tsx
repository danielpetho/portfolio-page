"use client"

import getBase64 from "@/app/actions/fetch/client/getBase64";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BlurImageProps {
  src: string;
  alt: string;
  sizes: string;
  containerStyles?: string;
  imageStyles?: string;
  priority?: boolean;
}

function getPlaceholderImageURL(imageURL: string): string {
  return `/_next/image?url=${encodeURIComponent(imageURL)}&q=1&w=128`
}

const BlurImage: React.FC<BlurImageProps> = ({ src, alt, sizes, containerStyles, imageStyles, priority }) => {
  /*const [base64, setBase64] = useState("");

  useEffect(() => {
    const fetchBase64 = async () => {
      const data = await getBase64(src);
      setBase64(data);
    };

    fetchBase64();


    return () => {
      // this now gets called when the component unmounts
    };
  }, []);*/
  //const { base64 } = await getPlaiceholder(buffer);
  return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority ? true : false}
        sizes={sizes}
        className={`${imageStyles}`}
        placeholder="blur"
        blurDataURL={getPlaceholderImageURL(src)}
      />
  );
}

export default BlurImage;