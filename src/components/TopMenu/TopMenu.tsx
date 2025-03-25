import styles from './topmenu.module.css';
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { Link } from '@mui/material';

export default async function TopMenu () {

    const session = await getServerSession(authOptions)

    return (
        <div className={styles.menucontainer}>

            <div className='flex flex-row absolute left-2 h-full pl-2'>
                <Image src={'/img/logo.jpg'}
                    className={styles.logoimg}
                    alt='logo'
                    width={0}
                    height={0}
                    sizes='100vh'
                />
                <div className='flex justify-center items-center px-5'>
                    <Link href="/" >
                        <img src="/img/homeicon.png" className={styles.homeicon}/>
                    </Link>
                </div>
                <TopMenuItem title='Explore'
                    pageRef='/company'
                />
                {/* <TopMenuItem title='Booking'
                    pageRef='/booking'
                /> */}
            </div>

            <div className='flex flex-row absolute right-5 h-full'>
                <TopMenuItem title='MyBooking' 
                    pageRef='/mybooking'
                />
                {
                    session? 
                    <Link href="/api/auth/signout?callbackUrl=/">
                        <div className='flex items-center h-full px-2 text-gray-500 text-sm'>
                            Sign-Out
                        </div>
                    </Link>
                    : 
                    <div className='flex flex-row'>
                        <Link href="/register">
                            <div className='flex items-center h-full px-2 text-gray-500 text-sm'>
                                Register
                            </div>
                        </Link>
                        <Link href="/api/auth/signin">
                            <div className='flex items-center h-full px-2 text-gray-500 text-sm'>
                                Sign-In
                            </div>
                        </Link>
                        
                    </div>
                    
                }
            </div>
            
        </div>
    )
}