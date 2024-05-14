
/* eslint-disable react/prop-types */

import { FaHeart, FaCommentDots, FaBookmark } from "react-icons/fa6";
import { TiArrowForward } from "react-icons/ti";




const AtivityIcon = (props) => {

    const { likes, comments, shares, bookmark, id, setVideos,likesActive, bookmarkActive } = props



    const handleLike = () => {
        if ( likesActive !== true) {
            setVideos((prev) => {
                return prev.map((item) => {
                    if (item.id === id) {
                        return { ...item, likes: item.likes + 1, likesActive: true }
                    }
                    return item
                })
            })
        } else {
            setVideos((prev) => {
                return prev.map((item) => {
                    if (item.id === id) {
                        return { ...item, likes: item.likes - 1, likesActive: false }
                    }
                    return item
                })
            })
        }
    }


    const handleBookmark = () => {
        if (bookmarkActive !== true) {
            setVideos((prev) => {
                return prev.map((item) => {
                    if (item.id === id) {
                        return { ...item, bookmark: item.bookmark + 1, bookmarkActive: true }
                    }
                    return item
                })
            })
        } else {
            setVideos((prev) => {
                return prev.map((item) => {
                    if (item.id === id) {
                        return { ...item, bookmark: item.bookmark - 1, bookmarkActive: false }
                    }
                    return item
                })
            })
        }
    }

    return (
        <>
            <div className="flex justify-end w-full px-5">
                <div className="flex flex-col gap-y-10 absolute top-1/2">
                    <div className="text-white text-2xl" onClick={handleLike}>
                        <FaHeart className={likesActive ? "text-red-600" : " text-white"} />
                        <span className="text-lg">{likes}</span>
                    </div>
                    <div className="text-white text-2xl">
                        <FaCommentDots />
                        <span className="text-lg">{comments}</span>
                    </div>
                    <div className="text-white text-2xl" onClick={handleBookmark}>
                        <FaBookmark className={bookmarkActive ? " text-yellow-400" : "text-white"} />
                        <span className="text-lg">{bookmark}</span>
                    </div>
                    <div className="text-white text-2xl">
                        <TiArrowForward />
                        <span className="text-lg">{shares}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AtivityIcon
