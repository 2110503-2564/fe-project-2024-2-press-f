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
            <div className="fixed top-40 bg-secondary rounded-md hover:bg-purple-300 transition space-y-4 w-[25%]">
                <div className="flex flex-col p-5 space-y-4">
                <TextField variant="outlined" name="Name" label="Name"
                    className="bg-background my-2" required
                    value={nameLastname} onChange={handleNameChange}
                />
                <TextField variant="outlined" name="Tel" label="Tel"
                    className="bg-background my-2" required
                    value={contactNumber} onChange={handleContactChange}
                />
                <TextField variant="outlined" name="Email" label="Email"
                    className="bg-background my-2" required
                    value={contactNumber} onChange={handleContactChange}
                />
                <TextField variant="outlined" name="Password" label="Password"
                    className="bg-background my-2" type="password" required
                    value={contactNumber} onChange={handleContactChange}
                />

                <button
                    className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-white hover:text-purple-500 border border-purple-500 transition my-2"
                    // onClick={handleAdd}
                    // disabled={isLoading}
                >
                    Register
                </button>
                </div>
                
            </div>
            
        </main>
    )
}