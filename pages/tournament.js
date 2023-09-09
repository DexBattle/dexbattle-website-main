import Navbar from '../components/NavAbout'
import ReactPlayer from 'react-player/youtube';


export default function Tournament ( ) {
    return (
        <div className='overflow-y-hidden'>
          <Navbar/>
          <div className='h-full lg:mx-16 mx-4 flex flex-col items-center'>
            <div className='mt-[100px] mb-8'>
                <ReactPlayer url='https://youtu.be/P19JkM2k2hI'
                 controls={true} muted playing
                 width='1080px' height='720px' /> 
             </div>
             <div className=' font-Kanit md:my-8 my-4'>
              <h1 className='text-5xl bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent'>
              Prepare now for Dex Battle Beta launch tournaments
              </h1>
              <h1 className='text-3xl text-gray-300 my-2'>
               on 28 - 30 Jan 2023 in Egypt
              </h1>
              <h1 className='text-3xl text-white md:my-4 my-2'>
              for more information and registration Kindly contact
              </h1>
              <div className='flex'>
              <img src="/whatsapp.png" className='h-[40px] w-[40px] rounded-sm'/>
              <h1 className='text-3xl text-white mx-4'>
                +971554740803
              </h1> 
              </div>
             </div>
          </div>  
        </div>
    )
}