import Image from 'next/image'

interface FigureProps {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}

export default function Figure({ src, alt, caption, width = 1200, height = 800 }: FigureProps) {
  return (
    <figure className="figure">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="figure-image"
      />
      {caption && <figcaption className="figure-caption">{caption}</figcaption>}
    </figure>
  )
}
