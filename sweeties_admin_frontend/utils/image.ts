export const imageLoader = ({src, width}: {src: string, width: number}) => {
    return `https://${src}?w=${width}`
}