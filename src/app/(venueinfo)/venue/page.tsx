import CardPanel from "@/components/CardPanel";
import getVenues from "@/libs/getVenues";
import VenueCatalog from "@/components/VenueCatalog";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";
import { VenueJson } from "../../../../interface";

export default async function Venue() {

    const venues:VenueJson = await getVenues()

    return (
        <main className="text-center p-5">
            <div className="text-3xl font-lg"> Select your Venue </div>
            <Suspense fallback={ <p> Loading ... <LinearProgress/> </p>}>
                <VenueCatalog venuesJson={venues}/>
            </Suspense>
        </main>
    )
}