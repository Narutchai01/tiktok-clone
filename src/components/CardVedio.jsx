/* eslint-disable react/prop-types */
import AtivityIcon from "../components/ativityIcon"
import Footer from "./footer"


const CardVedio = (props) => {
    const { videos ,setVideos } = props

    return (
        <>
            <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll overflow-x-hidden">
                {
                    videos.map((item, index) => (
                        <div className="bg-black snap-center snap-normal px-[650px] relative" key={index}>
                            <video className="w-full h-screen object-cover rounded-3xl" autoPlay loop muted>
                                <source src={item.video} type="video/mp4" />
                            </video>
                            <AtivityIcon likes={item.likes} comments={item.comments} shares={item.shares} bookmark={item.bookmark} setVideos={setVideos} id={item.id} likesActive={item.likesActive} bookmarkActive={item.bookmarkActive}/>
                            <div className="absolute bottom-1">
                                <Footer  name={item.name} song={item.song} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default CardVedio
