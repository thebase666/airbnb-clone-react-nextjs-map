import Image from "next/image"
import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"

function InfoCard({ img, location, title, description, star, price, total }) {
    return (
        <div className="px-2 pr-4 transition duration-200 ease-out border-b cursor-pointer lg:flex py-7 hover:opacity-80 hover:shadow-lg first:border-t">
            <div className="relative h-52 w-80">
                <Image src={img} layout="fill" className="rounded-2xl" />
            </div>
            <div className="flex flex-col flex-grow mt-1 lg:pl-5 lg:mt-0">
                <div className="flex justify-between">
                    {/* flex-grow往右顶 div只横向顶 p标签横向顶完竖向顶 */}
                    <p>{location}</p>
                    <HeartIcon className="cursor-pointer h-7" />
                </div>
                <h4 className="text-xl">{title}</h4>
                <div className="w-10 pt-2 border-b" />
                <p className="flex-grow pt-2 text-sm text-gray-500">{description}</p>
                {/* 这个p标签flex-grow占横向也占竖向把下面的div顶到父div底部*/}
                <div className="flex items-end justify-between ">
                    {/* flex同高 flex flex-col同宽 加上items-center或end 不仅位置变化 而且压缩 */}
                    <p className="flex items-center border border-black ">
                        <StarIcon className="h-5 text-red-400" />{star}</p>
                    {/* p标签flex 里面内容StarIcon和{star}在一行 */}
                    <div className="text-right">
                        {/* 没有flex justify-end不好使 只能text-right  */}
                        {/* text-right 可以在父元素div定义 也可以在子元素p标签定义 */}
                        <p className="pb-2 text-lg font-semibold lg:text-2xl">{price}</p>
                        <p className="font-extralight">{total}</p>
                        {/* text-right 右侧对齐 */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard;


