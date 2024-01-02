import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen align-middle p-2'>
      <div className='card bg-neutral-white text-neutral-black w-11/12 h-[450px]'>
        <div className='content p-6 h-full flex flex-col justify-between'>
          <Image src="/assets/images/illustration-article.svg" width={100} height={50} alt="bg-pattern-card" />

          <button className='bg-primary-yellow'>Learning</button>

          <p>Published 21 Dec 2023</p>

          <h1>HTML & CSS foundations</h1>

          <p>These languages are the backbone of every website, defining structure, content, and presentation.</p>

          <div>
            <Image src="/assets/images/image-avatar.jpg" width={50} height={50} alt="Callum Cheshire" />
            <p>Callum Cheshire</p>
          </div>


          {/* <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">Your Name Here</a>.
          </div> */}
        </div>
      </div>
    </main>
  )
}
