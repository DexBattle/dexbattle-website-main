import Navbar from '../components/NavAbout'
export default function Comics(){
    return(
        <div className='overflow-y-hidden'>
            <Navbar/>
            <div  className='flex flex-col items-center md:mx-16 mx-4 overflow-hidden'>
            <h1 className='font-Kanit text-2xl text-[66px] text-blue-400 mt-[100px] mb-4'>Comics</h1>
            <div className='w-full h-full flex flex-col items-center my-4'>
                <img src='/comics/Cover.jpg' className='w-[800px] h-[1000px] rounded-sm border border-white'/>
            </div>
            <div className='grid grid-flow-row md:grid-cols-2 my-4'>
                <img src='/comics/01.jpg' className='rounded-md h-full-w-full mx-2 my-2'/>
                <img src='/comics/02.jpg' className='rounded-md h-full-w-full mx-2 my-2'/>
                <img src='/comics/03.jpg' className='rounded-md h-full-w-full mx-2 my-2'/>
                <img src='/comics/04.jpg' className='rounded-md h-full-w-full mx-2 my-2'/>
                <img src='/comics/05.jpg' className='rounded-md h-full-w-full mx-2 my-2'/>
                <img src='/comics/06.jpg' className='rounded-md h-full-w-full mx-2 my-2'/>
                <img src='/comics/07.jpg' className='rounded-md h-full-w-full mx-2 my-2'/>
                <img src='/comics/08.jpg' className='rounded-md h-full-w-full mx-2 my-2'/>
                <img src='/comics/09.jpg' className='rounded-md h-full-w-full mx-2 my-2'/>
                <img src='/comics/10.jpg' className='rounded-md h-full-w-full mx-2 my-2'/>
                <img src='/comics/11.jpg' className='rounded-md h-full-w-full mx-2 my-2'/>
                <img src='/comics/12.jpg' className='rounded-md h-full-w-full mx-2 my-2'/>

            </div>
            </div>
        </div>
    )
}

