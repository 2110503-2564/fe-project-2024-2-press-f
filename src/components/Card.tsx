'use client'

import styles from './card.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import { Rating } from '@mui/material'
import { useState } from 'react'

export default function Card({companyName, imgSrc, onRating} : {companyName:string, imgSrc:string, onRating?:Function}) {

    const [value, setValue] = useState<number | null>(2);

    return (
        <InteractiveCard contentName={companyName}>
            <div className='w-full h-[70%] relative rounded-t-lg '>
                <Image 
                    src={imgSrc}
                    alt='Company Picture'
                    fill={true}
                    className='object-cover rounded-t-lg'
                    priority
                />
            </div>
            <div className='w-full h-[15%] p-[10px]'>
                {companyName}
            </div>
            
            <div className='w-auto h-[10%] p-[10px]' onClick={(e) => e.stopPropagation()}>
            {
                onRating?
                <Rating 
                    name={companyName + ' Rating'}
                    id={companyName + ' Rating'}
                    data-testid={companyName + ' Rating'}
                    value={value}
                    
                    onChange={(e, newValue) => {
                        setValue(newValue);
                        e.stopPropagation();
                        e.preventDefault();
                        onRating(companyName, newValue);
                    }}
                /> : ''
            }
            </div>
            
        </InteractiveCard>
    )
}