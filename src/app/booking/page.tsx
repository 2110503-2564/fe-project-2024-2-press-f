'use client'

import DateReserve from "@/components/DateReserve";
import { AppDispatch } from "@/redux/store";
import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { BookingItem } from "../../../interface";
import { addBooking } from "@/redux/features/bookSlice";

export default function Booking() {

    const [nameLastname, setNameLastname] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [venue, setVenue] = useState("");
    const [date, setDate] = useState<Dayjs | null>(null);

    const dispatch = useDispatch<AppDispatch>()

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameLastname(event.target.value)
    };

    const handleContactChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContactNumber(event.target.value)
    };

    const handleVenueChange = (event: SelectChangeEvent) => {
        setVenue(event.target.value);
    };

    const makeBooking = () => {
        if (nameLastname && contactNumber && venue && date) {
            const item:BookingItem = {
                nameLastname: nameLastname,
                tel: contactNumber,
                company: venue,
                bookDate: dayjs(date).format("YYYY/MM/DD"),
            }
            dispatch(addBooking(item))
        }
    }

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            {/* <div className="text-2xl mt-5"> {profile.data.name} </div> */}
            {/* <table className="table-auto border-separate border-spacing-2 my-5">
                <tbody>
                <tr>
                        <td> Name </td>
                        <td> {profile.data.name} </td>
                    </tr>
                    <tr>
                        <td> Email </td>
                        <td> {profile.data.email} </td>
                    </tr>
                    <tr>
                        <td> Tel. </td>
                        <td> {profile.data.tel} </td>
                    </tr>
                    <tr>
                        <td> Member Since </td>
                        <td> {createdAt.toString()} </td>
                    </tr>
                </tbody>
            </table> */}

            <TextField variant="standard" name="Name-Lastname" label="Name-Lastname" 
                value={nameLastname} onChange={handleNameChange}
            />
            <TextField variant="standard" name="Contact-Number" label="Contact-Number" 
                value={contactNumber} onChange={handleContactChange}
            />
            <Select variant="standard" name="venue" id="venue" className="h-[2em] w-[200px]"
                value={venue} onChange={handleVenueChange}
            >
                <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                <MenuItem value="Spark">Spark Space</MenuItem>
                <MenuItem value="GrandTable">The Grand Table</MenuItem>
            </Select>
            <DateReserve 
                onDateChange={(value:Dayjs) => {setDate(value)}}
            />
            <button name="Book Venue" className="block rounded-md bg-sky-600 hover:bg-sky-800 px-3 py-2 shadow-sm text-white"
                onClick={makeBooking}
            >
                Book Venue
            </button>
        </main>
    )
}