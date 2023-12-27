import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

interface BlurImageProps {
  src: string;
  alt: string;
  sizes: string;
  containerStyles?: string;
  imageStyles?: string;
}

export async function BlurImage({ src, alt, sizes, containerStyles, imageStyles }: BlurImageProps) {

  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { base64 } = await getPlaiceholder(buffer);
  return (
    <div className={`${containerStyles} relative`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        placeholder="blur"
        className={`${imageStyles}`}
        blurDataURL={base64}
      />
    </div>
  );
}