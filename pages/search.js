import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

function Search({searchResults}) {
    console.log(searchResults);
    const router = useRouter();
    const {location, startDate, endDate, noOfGuests} = router.query;
    const formatStartDate = format(new Date(startDate), "dd MMMM yy");
    const formatEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formatStartDate} - ${formatEndDate}`;

    return (
        <div>
            <Header placeholder={`${location} - ${range} - ${noOfGuests}guests`} />
            <main className="flex">
                <section className="flex-grow px-6 pt-14">
                    <p className="text-sm">300+ Stays - {range} -  for {noOfGuests} guests</p>
                    <h1 className="mt-2 mb-6 text-3xl font-semibold">Stays in {location}</h1>
                    {/* lg:inline-flex hidden情况下flex写在里面防止报错  */}
                    {/* whitespace-nowrap即使出框也不把空格换行 */}
                    <div className="hidden mb-5 space-x-2 text-gray-700 lg:inline-flex "> 
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Flexibility</p>
                        <p className="button">Flexibility</p>
                        <p className="button">Flexibility</p>
                        <p className="button">Flexibility</p>
                        <p className="button">Flexibility</p>
                        <p className="button">Flexibility</p>
                    </div>
                    {/* 在globals.css中定义 @layer components {
                            .button {
                                @apply px-4 py-2 transition duration-150 
                                ease-out border rounded-full cursor-pointer 
                                hover:shadow-lg active:scale-95 active:bg-gray-100;
                            }
                        } */}
                    <div className="flex flex-col">
                        {searchResults.map(({img, location, title, description, star, price, total }) => (
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

            </main>
            <Footer />
        </div>
    )
}

export default Search;

export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz").
    then((req) => req.json());
    return {
        props: {
            searchResults, 
        },
    };
};
