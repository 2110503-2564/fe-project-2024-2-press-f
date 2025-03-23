import Link from "next/link";
import Card from "./Card";
import { VenueItem, VenueJson } from "../../interface";

export default async function VenueCatalog({venuesJson}: {venuesJson:VenueJson}) {

    const venueJsonReady = await venuesJson

    return (
        <>
            Explore {venueJsonReady.count} fabulous venues in our catalog
            

            <div style={{
                margin: "20px",
                display: "flex",
                flexDirection: "column", // เปลี่ยนเป็นแนวตั้ง
                alignItems: "center", // จัดให้อยู่ตรงกลางในแนวขวาง
                justifyContent: "space-around", // กระจายช่องว่างระหว่าง element
                padding: "10px",gap: "20px"
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