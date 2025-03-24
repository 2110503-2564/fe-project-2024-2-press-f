import CardPanel from "@/components/CardPanel";
import getVenues from "@/libs/getVenues";
import VenueCatalog from "@/components/VenueCatalog";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";
import { CompanyJson } from "../../../../interface";

export default async function Venue() {

    const venues:CompanyJson = await getVenues()

    return (
        <main className="text-center p-5">
            <div className="text-3xl font-lg"> Select your Company </div>
            <Suspense fallback={ <p> Loading ... <LinearProgress/> </p>}>
                <VenueCatalog companysJson={venues}/>
            </Suspense>
        </main>
    )
}