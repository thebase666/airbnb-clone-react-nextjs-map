import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';

export default function Home({exploreData, cardsData}) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      

      <main className='px-8 mx-auto max-w-7xl sm:px-16 '>
        <section className='pt-6'>
          <h2 className='pb-5 text-4xl font-semibold'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
            {exploreData.map(({img, location, distance}) => (
              <SmallCard key={img} img={img} location={location} distance={distance} />
              ))}
          </div>
        </section>

        <section>
          <h2 className='py-10 text-4xl font-semibold'>Live Anywhere</h2>
          <div className='flex p-3 -ml-3 space-x-3 overflow-scroll md:scrollbar-default scrollbar-hide'>
          {/* -ml-3 有点偏右 用负的ml调整回来 */}
            {cardsData.map(({img, title}) => (
              <MediumCard key={img} img={img} title={title} />
              ))}
          </div>
        </section>

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
  then(
    (res) => res.json()
  );
  
  const cardsData = await fetch("https://links.papareact.com/zp1").
  then(
    (res) => res.json()
  );
  
  return {
    props: {
      exploreData,
      cardsData,
    }
  }
}
