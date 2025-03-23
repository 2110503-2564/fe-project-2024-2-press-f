'use client'

import { useRouter } from 'next/navigation';

export default function BannerButton() {

    const router = useRouter();

    return (
        <button className="rounded-lg bg-primary mt-10 py-2 px-5 text-white
            hover:shadow-xl hover:shadow-secondary"
            onClick={(e) => { e.stopPropagation(); router.push('/venue') }}
        >
            Explore
        </button> 
    )
}