export type CTImagesProps = {
  imageUrl: string;
  className?: string;
};
function CTImages({ imageUrl, className }: CTImagesProps) {
  return <img src={imageUrl} alt="" className={className || "size-8 rounded-full"} />;
}

export default CTImages;
