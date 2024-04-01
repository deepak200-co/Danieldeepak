import React,{useEffect} from 'react'
import Picture from '../assets/projects/Pic.png'
import Khelo from '../assets/projects/Khelo.png'
import Audio from '../assets/projects/Audio.png'
import Star from '../assets/projects/Star.png'
import Admin from '../assets/projects/Admin.png'


import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  const Projects = () => [
    {
      id: 1,
      src: Picture,
      desc: "A Well coded website with Authenticated pages and features like slide show about and various desings ...",
      demo: "https://picture-sque-frontend.vercel.app/",
      code: "https://github.com/deepak200-co/PictureSque---Frontend"
    },
    {
      id: 2,
      src: Star,
      desc: "This is Web assignment of using RestAPI and making a beautiful background and organizing the table ... ",
      demo: "https://star-war-rho.vercel.app/",
      code: "https://github.com/deepak200-co/star-war"
    },
    {
      id: 3,
      src: Audio,
      desc: "A Musical website where u can upload your fav music and enjoy it and can choose what plays next ...",
      demo: "https://audio-box.vercel.app/",
      code: "https://github.com/deepak200-co/AudioBox"
    },
    {
      id: 4,
      src: Admin,
      desc: "Similar website of using RestAPI and organizing the pagination ... ",
      demo: "https://admin-board-nine.vercel.app/",
      code: "https://github.com/deepak200-co/Admin_Board"
    },
    {
      id: 5,
      src: Khelo,
      desc: "An amazing website we have done for our smart India hackathon which was about sports and gov related ...",
      demo: "https://smart-india-hackathon-project.vercel.app/",
      code: "https://github.com/RohithBoppey/smart-india-hackathon-project"
    },
    // {
    //   id: 6,
    //   src: Gist,
    //   // desc: "It is a Face-Detection application made using Python and Computer Vision...",
    //   demo: "https://gist-ai.vercel.app/",
    //   code: "https://github.com/dipayansarkar47/Gist.AI-Summarizer"
    // },
  ]


  return (
    <div name="projects" className='h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0'>
          {
            Projects().map(({ id, src, desc, demo, code }) => (

              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
                <p className='p-2 text-justify font-extralight'>{desc}</p>
                <div className='flex items-center justify-center'>
                  
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                    <a href={demo}>Demo</a>
                  </button>
                  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a href={code}>Code</a>
                  </button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects