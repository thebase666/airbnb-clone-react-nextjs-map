import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";


function Search({ searchResults }) {
    // console.log(searchResults);
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;//从url获取参数
    const formatStartDate = format(new Date(startDate), "dd MMMM yy");
    const formatEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formatStartDate} - ${formatEndDate}`;

    return (
        <div>
            <Header placeholder={`${location} - ${range} - ${noOfGuests}guests`} />
            <main className="flex">
                {/* flex 地图在右侧 */}
                <section className="flex-grow px-6 pt-14">
                    <p className="text-sm">300+ Stays - {range} -  for {noOfGuests} guests</p>
                    <h1 className="mt-2 mb-6 text-3xl font-semibold">Stays in {location}</h1>
                    <div className="hidden mb-5 space-x-2 text-gray-700 lg:inline-flex whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Flexibility</p>
                        <p className="button">Flexibility</p>
                        <p className="button">Flexibility</p>
                        <p className="button">Flexibility</p>
                        <p className="button">Flexibility</p>
                        <p className="button">Flexibility</p>
                    </div>

                    <div className="flex flex-col">
                        {searchResults.map(({ img, location, title, description, star, price, total }) => (
                            <InfoCard
                                key={img}
                                img={img}
                                location={location}
                                title={title}
                                description={description}
                                star={star}
                                price={price}
                                total={total}
                            />))}
                    </div>
                </section>

                <section className="hidden xl:inline-block xl:min-w-[600px] p-10">
                    <Map searchResults={searchResults} />
                </section>

            </main>
            <Footer />
        </div>
    )
}

export default Search;

export async function getServerSideProps() {
    // 动态路由传参 要用context  If the page name is [id].js , then params will look like { id: ... }.
    const searchResults = await fetch("https://links.papareact.com/isz").
        then((req) => req.json());
    return {
        props: {
            searchResults,
        },
    };
};
