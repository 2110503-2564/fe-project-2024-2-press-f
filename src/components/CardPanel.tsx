'use client'

import Card from "./Card"
import { useReducer, useState } from "react";
import Link from "next/link";
import { VenueItem, VenueJson } from "../../interface";

export default function CardPanel() {

    const [venueResponse, setVenueResponse] = useState<VenueJson|null>(null)

    let defaultVenue = new Map<string, number>([
        ["The Bloom Pavilion", 0],
        ["Spark Space", 0],
        ["The Grand Table", 0],
    ]);

    const cardReducer = (
        venueList: Map<string, number>,
        action: {type: string, venueName: string, rating?: number}
    ) => {
        switch (action.type) {
            case 'add': {
                const newValueList = new Map(venueList);
                newValueList.set(action.venueName, action.rating??0);
                return newValueList;
            }
            case 'remove': {
                const newValueList = new Map(venueList);
                newValueList.delete(action.venueName);
                return newValueList;
            }
            default: {
                return venueList;
            }
        }
    }

    const [venueList, dispatchCard] = useReducer(cardReducer, defaultVenue);

    /**
     * Mock Data 
     */
    // const mockVenueRepo = [
    //     {vid: "001", name: "The Bloom Pavilion", image: "/img/bloom.jpg"},
    //     {vid: "002", name: "Spark Space", image: "/img/sparkspace.jpg"},
    //     {vid: "003", name: "The Grand Table", image: "/img/grandtable.jpg"},
    // ]

    return (
        <div className="m-[20px]">

            <div style={{margin:"20px", display:"flex",
                flexDirection:"row", alignContent:"space-around", 
                justifyContent:"space-around", flexWrap:"wrap"}}
            >
                {
                        venueResponse!.data.map((venueItem:VenueItem) => (   
                            <Link href={`/venue/${venueItem.id}`} 
                                className="w-1/5"
                            >
                                <Card companyName={venueItem.name} imgSrc={venueItem.picture}
                                    onRating = { (venue:string, rating:number) => 
                                        dispatchCard({type:'add', venueName:venue, rating:rating}) 
                                    }
                                />
                            </Link>
                        ))
                    
                }
            </div>

            <div className="w-full text-xl font-medium"> Venue List with Ratings : {venueList.size} </div>

            {Array.from(venueList).map(([venueName, rating]) => 
                <div data-testid={venueName} 
                    key={venueName} 
                    onClick={() => dispatchCard({type:'remove', venueName})}
                > 
                    {venueName} : {rating}
                </div>)}
        
        </div>
    )
}