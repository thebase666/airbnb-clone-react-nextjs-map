import Image from "next/image";

function LargeCard({img, title, discription, buttonText}) {
    return (
        <section className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
                <Image src={img} layout="fill" 
                objectFit="cover" className="rounded-2xl"/>
            </div>

            <div className="absolute left-32 top-32">
                {/* 用absolute就 top left定位 px也可以  */}
                <h3 className="mb-3 text-4xl">{title}</h3>
                <p>{discription}</p>
                <button className="px-4 py-2 mt-5 text-sm text-white bg-gray-900 rounded-lg">{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard
