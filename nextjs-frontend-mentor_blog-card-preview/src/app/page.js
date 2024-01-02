import Image from 'next/image';
import mainGraphic from '../assets/images/illustration-article.svg';
import avatar from '../assets/images/image-avatar.jpg';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen align-middle p-2'>
      <div className='card bg-neutral-white text-neutral-black w-11/12 h-[450px] rounded-2xl border-solid border shadow-card overflow-auto'>
        <div className='content p-5 h-full flex flex-col justify-between'>
          <Image 
            src={mainGraphic}
            width={0}
            height={0}
            sizes="100vw"
            className='w-full height-auto rounded-lg'
          />

          <div className='flex flex-col justify-end pt-4 pb-3'>
            <button className='bg-primary-yellow w-1/3 h-1/2 p-2 flex items-center justify-center font-black text-sm rounded-md overflow-hidden'>Learning</button>
            <p className='pt-3 text-xs'>Published 21 Dec 2023</p>
          </div>

          <h1 className='font-bold pb-4 text-xl'>HTML & CSS foundations</h1>

          <p className='text-neutral-grey text-xs pb-2'>These languages are the backbone of every website, defining structure, content, and presentation.</p>

          <div className='flex items-center pt-2 pb-4'>
            <Image src={avatar} width={30} height={30} alt="Callum Cheshire" />
            <p className='pl-4 font-extrabold text-sm'>Callum Cheshire</p>
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
