import Image from "next/image"
import styles from "./item-image.module.css"

interface Props {
  src: string
  alt: string
  size?: number
}

export const ItemImage: React.FC<Props> = ({
  src,
  alt,
  size,
}) => {
  return (
    <Image
      className={styles.image}
      alt={alt}
      src={src}
      width={size}
      height={size}
      unoptimized
      loading="eager"
      decoding="sync"
      draggable={false}
    />
  )
}
