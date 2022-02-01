import Image from "next/image";

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
            <Image
                src="http://links.papareact.com/0fm"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute w-full text-center top-1/2">
                {/* text-center这个定位关键 把子元素p标签和button都定位了  */}
                {/* text-right 可以在父元素div定义 也可以在子元素p标签定义 但是button不行 */}
                <p className="text-sm sm:text-lg ">Not sure where to go? Perfect.</p>
                <button className="px-10 py-4 my-3 font-bold text-purple-800 transition duration-150 
                bg-white rounded-full shadow-md hover:shadow-xl active:scale-90 " >flexible</button>
            </div>
        </div>
    )
}

export default Banner
