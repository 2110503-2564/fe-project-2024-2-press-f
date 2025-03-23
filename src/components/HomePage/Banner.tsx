import Image from 'next/image'
import BannerButton from './BannerButton';

export default function Banner () {
    return (
        <div>
            <div className='block p-1 m-0 w-screen h-[80vh] relative'>
                <Image 
                    src="/img/banner.jpg"
                    alt='banner'
                    fill={true}
                    priority
                    objectFit='cover'
                />

                <div className='relative top-[100px] left-[80px] font-[Nunito Sans]'>
                    <div className='text-8xl w-[50%] font-bold'> 
                        Start your career journey now
                    </div>
                    <div className='text-2xl font-medium mt-10 w-[40%]'> 
                        Build your future with a job you love. Explore career opportunities here. 
                    </div>
                    <BannerButton/>
                </div>
            </div>
        </div>
    )
}