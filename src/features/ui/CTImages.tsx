export type CTImagesProps = string
function CTImages({imageUrl}:CTImagesProps) {
    return (
        <img src={imageUrl} alt="" className="size-8 rounded-full" />
    )
}

export default CTImages
