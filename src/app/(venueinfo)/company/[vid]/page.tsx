'use client'
import getCompany from "@/libs/getVenue"
import Image from "next/image"
import DateReserve from "@/components/DateReserve";
import { AppDispatch } from "@/redux/store";
import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { BookingItem } from "../../../../../interface";
import { addBooking } from "@/redux/features/bookSlice";

export default async function CompanyDetailPage( {params} : { params: {vid:string} } ) {

    const companyDetail = await getCompany(params.vid)
    

    /**
     *  Mock Data
     */
    // const mockVenueRepo = new Map()
    // mockVenueRepo.set("001", {name: "The Bloom Pavilion", image: "/img/bloom.jpg"})
    // mockVenueRepo.set("002", {name: "Spark Space", image: "/img/sparkspace.jpg"})
    // mockVenueRepo.set("003", {name: "The Grand Table", image: "/img/grandtable.jpg"})

    return (
        <main className="text-center p-5">
            <div className="text-3xl text-center my-5">
                { companyDetail.data.name }
            </div>
            <div className="flex flex-row my-10">
                <Image src={ companyDetail.data.picture }
                    alt="Company Image"
                    width={0} 
                    height={0}
                    sizes="100vw"
                    className="rounded-lg w-[30%]"
                />
                <div className="text-md mx-5 text-left"> 
                    <div> Name : { companyDetail.data.name } </div>
                    <div> Address : { companyDetail.data.address } { companyDetail.data.province } { companyDetail.data.postalcode } </div>
                    <div> Website :{ companyDetail.data.website }</div>
                    <div> Description : { companyDetail.data.descrition }</div>
                    <div> Tel: { companyDetail.data.tel } </div>
                </div>
            </div>
            
        </main>
    )
}