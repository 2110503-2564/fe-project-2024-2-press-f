import Link from "next/link";
import Card from "./Card";
import { CompanyItem, CompanyJson } from "../../interface";

export default async function CompanyCatalog({companysJson}: {companysJson:CompanyJson}) {

    const companyJsonReady = await companysJson

    return (
        <>
            Explore {companyJsonReady.count} fabulous companies in our catalog
            

            <div style={{
                margin: "20px",
                display: "flex",
                flexDirection: "row", 
                alignItems: "center",
                justifyContent: "space-around", 
                padding: "10px"
            }}>
                {
                    companyJsonReady.data.map((companyItem:CompanyItem) => (
                        <Link href={`/company/${companyItem.id}`} 
                            className="w-1/5"
                        >
                            <Card companyName={companyItem.name} imgSrc={companyItem.picture} />
                        </Link>
                    ))
                }
            </div>
        </>
    )
}