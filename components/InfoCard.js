import Image from "next/image"
import {HeartIcon} from "@heroicons/react/outline"
import {StarIcon} from "@heroicons/react/solid"

function InfoCard({img, location, title, description, star, price, total}) {
    return (
        <div className="px-2 pr-4 transition duration-200 ease-out border-b cursor-pointer lg:flex py-7 hover:opacity-80 hover:shadow-lg first:border-t">
            {/* first:第一个元素     lg:flex 大屏才flex */}
            <div className="relative h-52 w-80">
                <Image src={img} layout="fill" className="rounded-2xl"/>
            </div>
            <div className="flex flex-col flex-grow mt-1 lg:pl-5 lg:mt-0">
                <div className="flex justify-between">
                 {/* justify-between分到两端 flex-grow各占一般半互顶 */}
                    <p>{location}</p>
                    <HeartIcon className="cursor-pointer h-7"/>
                </div>
                <h4 className="text-xl">{title}</h4>
                <div className="w-10 pt-2 border-b"/>
                <p className="flex-grow pt-2 text-sm text-gray-500">{description}</p>
                    {/* 这个p标签flex-grow占横向也占竖向把下面的div顶到父div底部*/}
                <div className="flex items-end justify-between pt-5">
                    {/* items-end 竖排显示在div的底部  items-center竖排显示在中间*/}
                    <p className="flex items-center"><StarIcon className="h-5 text-red-400"/>{star}</p>
                    <div>
                        <p className="pb-2 text-lg font-semibold lg:text-2xl">{price}</p>
                        <p className="text-right font-extralight">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard;

               
