'use client'

import styles from './card.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import { Rating } from '@mui/material'
import { useState } from 'react'

export default function Card({venueName, imgSrc, onRating} : {venueName:string, imgSrc:string, onRating?:Function}) {

    const [value, setValue] = useState<number | null>(2);

    return (
        <InteractiveCard contentName={venueName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image 
                    src={imgSrc}
                    alt='Venue Picture'
                    fill={true}
                    className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full h-[15%] p-[10px]'>
                {venueName}
            </div>
            
            <div className='w-auto h-[10%] p-[10px]' onClick={(e) => e.stopPropagation()}>
            {
                onRating?
                <Rating 
                    name={venueName + ' Rating'}
                    id={venueName + ' Rating'}
                    data-testid={venueName + ' Rating'}
                    value={value}
                    
                    onChange={(e, newValue) => {
                        setValue(newValue);
                        e.stopPropagation();
                        e.preventDefault();
                        onRating(venueName, newValue);
                    }}
                /> : ''
            }
            </div>
            
        </InteractiveCard>
    )
}