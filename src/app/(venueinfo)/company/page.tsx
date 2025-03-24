import CardPanel from "@/components/CardPanel";
import getCompanies from "@/libs/getVenues";
import CompanyCatalog from "@/components/VenueCatalog";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";
import { CompanyJson } from "../../../../interface";

export default async function Company() {

    const companies:CompanyJson = await getCompanies()

    return (
        <main className="text-center p-5">
            <div className="text-3xl font-lg"> Select Company </div>
            <Suspense fallback={ <p> Loading ... <LinearProgress/> </p>}>
                <CompanyCatalog companysJson={companies}/>
            </Suspense>
        </main>
    )
}