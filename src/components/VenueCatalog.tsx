import Link from "next/link";
import Card from "./Card";
import { VenueItem, VenueJson } from "../../interface";

export default async function VenueCatalog({venuesJson}: {venuesJson:VenueJson}) {

    const venueJsonReady = await venuesJson

    return (
        <>
            Explore {venueJsonReady.count} fabulous companies in our catalog
            

            <div style={{
                margin: "20px",
                display: "flex",
                flexDirection: "row", 
                alignItems: "center",
                justifyContent: "space-around", 
                padding: "10px"
            }}>
                {
                    venueJsonReady.data.map((venueItem:VenueItem) => (
                        <Link href={`/venue/${venueItem.id}`} 
                            className="w-1/5"
                        >
                            <Card companyName={venueItem.name} imgSrc={venueItem.picture} />
                        </Link>
                    ))
                }
            </div>
        </>
    )
}