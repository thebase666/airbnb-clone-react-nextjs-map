import Image from "next/image";
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon} from "@heroicons/react/solid";

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10 ">
            <div className="relative flex items-center h-10 my-auto cursor-pointer">
                <Image 
                    src="https://links.papareact.com/qd3"
                    layout="fill" 
                    objectFit="contain" 
                    objectPosition="left"
                />
                {/* 我的奥拓my-auto mx-auto 相对于父模块居中   内容居中用items-center */}
            </div>
            
            <div className="flex items-center py-2 rounded-full md:border-2 md:shadow-sm">
                <input className="flex-grow pl-5 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none" 
                type="text" placeholder="Start your search"/>
                <SearchIcon className="hidden h-8 p-2 text-white bg-red-400 rounded-full cursor-pointer md:inline md:mx-2" />
            </div>

            <div className="flex items-center justify-end space-x-4 text-gray-500">
                <p className="hidden md:inline">Become a host</p>
                <GlobeAltIcon className="h-6"/>
                <div className="flex items-center p-2 space-x-2 border-2 rounded-full ">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </div>
            </div>
        </header>
    )
}

export default Header
