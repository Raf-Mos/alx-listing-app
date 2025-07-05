import Head from 'next/head'
import Card from '../components/common/Card'
import Button from '../components/common/Button'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="Modern Airbnb clone built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to ALX Listing App
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your modern Airbnb clone for property listings
          </p>
          <Button 
            text="Get Started" 
            onClick={() => console.log('Get Started clicked')}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card 
            title="Sample Property 1"
            description="Beautiful apartment in the heart of the city"
            image="/assets/placeholder-1.jpg"
          />
          <Card 
            title="Sample Property 2"
            description="Cozy house with amazing views"
            image="/assets/placeholder-2.jpg"
          />
          <Card 
            title="Sample Property 3"
            description="Modern studio perfect for travelers"
            image="/assets/placeholder-3.jpg"
          />
        </div>
      </main>
    </div>
  )
}
