import Image from "next/image";
import { useState } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UserIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function Header({ placeholder }) {
    //placeholder变量被定义了 <Header />不传placeholder也不报错 placeholder={placeholder || "Start your search"} 
    //传参就接参 <Header placeholder={`${location} - ${range} - ${noOfGuests}guests`} />
    //也可通过getServerSideProps 给自己传参 
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    const router = useRouter();//useRouter的push方法useRouter().push('/')

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                location: searchInput,//  location=p
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,// 直接给变量就是这样 noOfGuests=1
            },
        });
    };//push()函数直接给路径('/') 也可以给字典pathname和query 通过url传参跳转
    // const { location, startDate, endDate, noOfGuests } = router.query;//search页面从url获取参数
    //http://localhost:3000/search?location=p&startDate=2022-01-29T17%3A00%3A00.000Z&
    // endDate=2022-01-30T17%3A00%3A00.000Z&noOfGuests=1
    //http://localhost:3000/search?searchInput=p&startDate=2022-01-29T17%3A00%3A00.000Z&
    //endDate=2022-01-30T17%3A00%3A00.000Z&noOfGuests=1

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10 ">
            {/* relative包裹图片  父元素grid grid-cols-3就不需要flex 子元素不用grid自动占一格且横排  */}
            <div className="relative flex items-center h-10 my-auto cursor-pointer">
                <Image
                    onClick={() => router.push('/')}
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
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
                <GlobeAltIcon className="h-6" />
                <div className="flex items-center p-2 space-x-2 border-2 rounded-full ">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
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
                        <UserIcon className="h-5" />
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
