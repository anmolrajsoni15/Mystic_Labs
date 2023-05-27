import Image from 'next/image'
import Hero from './components/Hero'
import Middle from './components/Middle'
import Features from './components/Features'

export default function Home() {
  return (
    <main className='w-full flex flex-col h-full'>
      <Hero />
      <Middle />
      <Features />
    </main>
  )
}
