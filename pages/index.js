import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

export default function Home({ exploreData, cardsData }) {
  const [bgColor, setBgColor] = useState('yellow');
  const [star, setStar] = useState(false);

  return (
    <div>
      <Head><title>Airbnb</title></Head>
      <Header />
      <Banner />

      <main className='px-8 mx-auto max-w-7xl sm:px-16 '>
        <section className='pt-6'>
          <h2 className='pb-5 text-4xl font-semibold'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
            {exploreData.map(({ img, location, distance }) => (
              <SmallCard key={img} img={img} location={location} distance={distance} />
            ))}
          </div>
        </section>

        <section>
          <h2 className='py-10 text-4xl font-semibold'>Live Anywhere Scroll 1</h2>
          <div className='flex p-5 space-x-3 overflow-x-scroll md:scrollbar-default snap-mandatory snap-x'>
            {/* -ml-3 有点偏右 用负的ml调整回来 */}
            {cardsData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
            {cardsData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
            {cardsData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className='py-10 text-4xl font-semibold'>Live Anywhere Scroll 2</h2>
          <div className='flex p-5 space-x-3 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-900 md:scrollbar-default snap-mandatory snap-x'>
            {/* -ml-3 有点偏右 用负的ml调整回来 */}
            {cardsData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
            {cardsData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
            {cardsData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>


        <section className={(bgColor == 'red') ? ('bg-red-500') : (bgColor == 'blue') ? ('bg-blue-500') : ('bg-yellow-500')}>

          <div className="relative h-96 min-w-[300px] bg-transparent">
            {star && (<div className="absolute top-10 left-10">
              <p className="flex items-center ">
                        <StarIcon className="h-5 text-black" /></p>
            </div>)}
          </div>
        </section>

        <div className="">
          <button onClick={() => setBgColor('red')} className="px-4 py-2 mt-5 text-sm text-white bg-gray-900 rounded-lg">red</button>
          <button onClick={() => setBgColor('blue')} className="px-4 py-2 mt-5 text-sm text-white bg-gray-900 rounded-lg">blue</button>
          <button onClick={() => setBgColor('yellow')} className="px-4 py-2 mt-5 text-sm text-white bg-gray-900 rounded-lg">yellow</button>
          <button onClick={() => setStar(!star)} className="px-4 py-2 mt-5 text-sm text-white bg-gray-900 rounded-lg">star</button>

        </div>



        <LargeCard
          img="https://links.papareact.com/4cj"
          title="Greatest Outdoors"
          discription="Discrition by Airbnb"
          buttonText="Get Inspired"
        />




      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").
    then((res) => res.json());

  const cardsData = await fetch("https://links.papareact.com/zp1").
    then((res) => res.json());

  return {
    props: {
      exploreData,
      cardsData,
    }
  }
}
