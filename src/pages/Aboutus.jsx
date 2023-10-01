import React from 'react'
import HomeLayout from '../layouts/HomeLayout';
import about from '../assets/about.svg'
import apj from '../assets/apj.png'
import billGates from '../assets/billGates.png'
import nelsonMandela from '../assets/nelsonMandela.png';
import steveJobs from '../assets/steveJobs.png';

export default function About() {
  return (
    <HomeLayout>
      <div className='flex flex-col mx-auto text-white sm:px-10 pt-20'>
        <div className='md:flex-row flex flex-col justify-center items-center gap-5 mx-10'>
          <section className='md:w-1/2 space-y-10'>
            <h1 className='text-5xl text-yellow-500 font-semibold'>
              Affordable and quality education
            </h1>
            <p className='text-xl text-gray-200'>
              Our goal is to provide the affordable and quality education to the world. We are
              providing the platform for the aspiring teachers and students to share their skills,
              creativity and knowledge to each other to empower and contribute in the growth and
              wellness of mankind.
            </p>
          </section>
          <div className='md:w-1/2'>
            <img src={about} className='drop-shadow-2xl' alt='about main page' />
          </div>
        </div>
        <div className='carousel md:w-1/2 w-[90vw] my-10 mx-auto'>
          <div id='slide1' className='carousel-item relative w-full'>
            <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
              <img src={apj} className='w-40 rounded-full border-2 border-gray-400' />
              <p className='text-xl text-gray-200'>
                Teaching is a very noble profession that shapes the character, caliber, and future
                of an individual.
              </p>
              <h3 className='text-2xl font-semibold'>APJ Abdul Kalam</h3>
              <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <a href='#slide4' className='btn btn-circle'>
                  ❮
                </a>
                <a href='#slide2' className='btn btn-circle'>
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id='slide2' className='carousel-item relative w-full'>
            <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
              <img src={steveJobs} className='w-40 rounded-full border-2 border-gray-400' />
              <p className='text-xl text-gray-200'>
                We dont get a chance to do that many things, and every one should be really
                excellent.
              </p>
              <h3 className='text-2xl font-semibold'>Steve Jobs</h3>
              <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <a href='#slide1' className='btn btn-circle'>
                  ❮
                </a>
                <a href='#slide3' className='btn btn-circle'>
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id='slide3' className='carousel-item relative w-full'>
            <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
              <img src={billGates} className='w-40 rounded-full border-2 border-gray-400' />
              <p className='text-xl text-gray-200'>
                Success is a lousy teacher. It seduces smart people into thinking they can’t lose.
              </p>
              <h3 className='text-2xl font-semibold'>Bill Gates</h3>
              <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <a href='#slide2' className='btn btn-circle'>
                  ❮
                </a>
                <a href='#slide4' className='btn btn-circle'>
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id='slide4' className='carousel-item relative w-full'>
            <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
              <img src={nelsonMandela} className='w-40 rounded-full border-2 border-gray-400' />
              <p className='text-xl text-gray-200'>
                Education is the most powerful tool you can use to change the world.
              </p>
              <h3 className='text-2xl font-semibold'>Nelson Mandela</h3>
              <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <a href='#slide3' className='btn btn-circle'>
                  ❮
                </a>
                <a href='#slide1' className='btn btn-circle'>
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
