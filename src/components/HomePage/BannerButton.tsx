'use client'

import Link from 'next/link';

export default function BannerButton() {
    return (
        <div className='mt-10'>
            <Link className="rounded-lg bg-primary py-2 px-5 text-white
            hover:shadow-xl hover:shadow-secondary"
            href='/company'
        >
            Explore
        </Link>
        </div>
    )
}