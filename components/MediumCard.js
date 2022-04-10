import Image from "next/image";


function MediumCard({ img, title }) {
    return (
        <div className="transition duration-150 ease-out cursor-pointer snap-start hover:scale-105 ">
            <div className="relative m-7 h-80 w-80">
                <Image src={img} layout="fill" className="rounded-xl " />
            </div>
            <h3 className="mt-3 text-2xl m-7 " >{title}</h3>
        </div>
    )
}

export default MediumCard
