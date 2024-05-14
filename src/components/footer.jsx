import { IoMusicalNote } from "react-icons/io5";
import { FaRecordVinyl } from "react-icons/fa6";

/* eslint-disable react/prop-types */
const Footer = (props) => {
    const { name ,song } = props
    return (
        <>
            <div className="px-6 text-white">
                <h1 >{name}</h1>
                <div className="flex  justify-between pr-10 w-[600px]">
                    <h1 className="flex items-center"><IoMusicalNote />{song}</h1>
                    <FaRecordVinyl className=" animate-spin text-3xl" />
                </div>
            </div>
        </>
    )
}

export default Footer
