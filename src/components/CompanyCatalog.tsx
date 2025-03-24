import Link from "next/link";
import Card from "./Card";
import { CompanyItem,CompanyJson } from "../../interface";

export default async function CompanyCatalog({companysJson}: {companysJson:CompanyJson}) {

    const companyJsonReady = await companysJson

    return (
        <>
            

            <div style={{
                margin: "20px",
                display: "flex",
                flexDirection: "column", 
                alignItems: "center",
                justifyContent: "space-around", 
                padding: "10px"
            }}>
                {
                    companyJsonReady.data.map((companyItem:CompanyItem) => (
                        <Link href={`/company/${companyItem._id}`} 
                            className="w-2/5 m-10"
                        >
                            <Card companyName={companyItem.name} imgSrc={companyItem.picture} />
                        </Link>
                    ))
                }
            </div>
        </>
    )
}