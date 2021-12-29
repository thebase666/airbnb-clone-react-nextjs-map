import Image from "next/image";
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UserIcon} from "@heroicons/react/solid";
import { useRouter } from "next/router";//新版本是next/router


function Header({placeholder}) {
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    const router = useRouter();//useRouter的push方法useRouter().push('/')

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),//视频用的toISOString
                endDate: endDate.toISOString(),
                noOfGuests,
            },
        });
    };//push()函数直接给路径('/') 也可以给字典pathname和query 通过url传参跳转
    //localhost:3000/search?location=l如果用redux 不能通过url传参 

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10 ">
            <div className="relative flex items-center h-10 my-auto cursor-pointer">
                <Image 
                    onClick={() => router.push('/')}
                    src="https://links.papareact.com/qd3"
                    layout="fill" 
                    objectFit="contain" 
                    objectPosition="left"
                />
                {/* 我的奥拓my-auto mx-auto 相对于父模块居中   内容居中用items-center */}
            </div>
            
            <div className="flex items-center py-2 rounded-full md:border-2 md:shadow-sm">
                <input 
                    value={searchInput} 
                    onChange={(e) => setSearchInput(e.target.value)} 
                    className="flex-grow pl-5 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none" 
                    type="text" placeholder={placeholder || "Start your search"} />
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

            {searchInput && (
                <div className="col-span-3 mx-auto">
                    <DateRangePicker 
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />
                    <div className="flex items-center mb-4 border-b ">
                        <h2 className="flex-grow text-2xl font-semibold ">Number of Guests</h2>
                        <UserIcon className="h-5"/>
                        <input value={noOfGuests} 
                            onChange={(e) => setNoOfGuests(e.target.value)} 
                            type="number" 
                            min={1} 
                            className="w-12 pl-2 text-lg text-red-400 outline-none"
                        />
                    </div>
                    <div className="flex">
                        <button onClick={(e) => setSearchInput("")} className="flex-grow text-gray-500">Cancel</button>
                        <button onClick={search} className="flex-grow text-red-400">Search</button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
