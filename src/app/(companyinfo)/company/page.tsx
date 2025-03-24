import CardPanel from "@/components/CardPanel";
import getCompanies from "@/libs/getCompanies";
import CompanyCatalog from "@/components/CompanyCatalog";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";
import { CompanyJson } from "../../../../interface";

export default async function Company() {

    const companies:CompanyJson = await getCompanies()

    return (
        <main className="text-center p-5">
            <div className="text-3xl font-lg"> All Companies </div>
            <CompanyCatalog companysJson={companies}/>
        </main>
    )
}