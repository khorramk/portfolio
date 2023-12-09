import Image from 'next/image'
import profilePic from '../public/khorram.jpg';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mt-24">
      <div className="flex -space-x-1 overflow-hidden">
        <Image width={100} height={100} className="inline-block h-100 w-100 rounded-full" src="/khorram.jpg" alt=""/>
      </div>
        <header className="mt-6">
          <h1 className="text-5xl font-medium">Khorram Khondkar</h1>
           <h2 className="text-center mt-4">Software developer</h2>
        </header>

        <button>Contact</button>
    </main>
  )
}
