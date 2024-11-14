const imageLinks = [
    "https://i.ibb.co/jgk1phW/IMG-20241107-WA0013.jpg",
    "https://i.ibb.co/ngfp99X/IMG-20241107-WA0007.jpg",
    "https://i.ibb.co/mRnKQkX/IMG-20241107-WA0012.jpg",
    "https://i.ibb.co/Lg6TH9k/IMG-20241107-WA0014.jpg",
    "https://i.ibb.co/YtTj94H/photo-14-2024-10-31-06-51-41.jpg",
    "https://i.ibb.co/Fn3jDbD/photo-51-2024-10-31-06-52-36.jpg",
    "https://i.ibb.co/dp1NDpf/photo-50-2024-10-31-06-52-36.jpg",
    "https://i.ibb.co/tBWtcWq/photo-37-2024-10-31-06-52-36.jpg",
    "https://i.ibb.co/Hg2xT65/photo-40-2024-10-31-06-53-18.jpg",
    "https://i.ibb.co/fpQD24L/photo-8-2024-10-31-06-53-18.jpg",
    "https://i.ibb.co/XW5MRmH/photo-60-2024-10-31-06-52-36.jpg",
    "https://i.ibb.co/z4Qb9CJ/das-1.jpg",


];

function BriefGallery() {
    return (
        <div className="mx-4 pt-8 rounded-lg overflow-hidden">
            <h1 className="dash-title pb-6">Gallery</h1>
            <div className="grid grid-cols-3 ">

            {imageLinks.map(img=><img src={img} alt="" key={img} />)}
            </div>
        </div>
    )
}

export default BriefGallery
