'use client'

import Card from "./Card"
import { useReducer, useState } from "react";
import Link from "next/link";
import { CompanyItem, CompanyJson } from "../../interface";

export default function CardPanel() {

    const [companyResponse, setcompanyResponse] = useState<CompanyJson|null>(null)

    let defaultcompany = new Map<string, number>([
        ["The Bloom Pavilion", 0],
        ["Spark Space", 0],
        ["The Grand Table", 0],
    ]);

    const cardReducer = (
        companyList: Map<string, number>,
        action: {type: string, companyName: string, rating?: number}
    ) => {
        switch (action.type) {
            case 'add': {
                const newValueList = new Map(companyList);
                newValueList.set(action.companyName, action.rating??0);
                return newValueList;
            }
            case 'remove': {
                const newValueList = new Map(companyList);
                newValueList.delete(action.companyName);
                return newValueList;
            }
            default: {
                return companyList;
            }
        }
    }

    const [companyList, dispatchCard] = useReducer(cardReducer, defaultcompany);

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
                        companyResponse!.data.map((companyItem:CompanyItem) => (   
                            <Link href={`/company/${companyItem.id}`} 
                                className="w-1/5"
                            >
                                <Card companyName={companyItem.name} imgSrc={companyItem.picture}
                                    onRating = { (company:string, rating:number) => 
                                        dispatchCard({type:'add', companyName:company, rating:rating}) 
                                    }
                                />
                            </Link>
                        ))
                    
                }
            </div>

            <div className="w-full text-xl font-medium"> Company List with Ratings : {companyList.size} </div>

            {Array.from(companyList).map(([companyName, rating]) => 
                <div data-testid={companyName} 
                    key={companyName} 
                    onClick={() => dispatchCard({type:'remove', companyName})}
                > 
                    {companyName} : {rating}
                </div>)}
        
        </div>
    )
}