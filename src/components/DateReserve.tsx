'use client'

import { DatePicker, DateTimePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { useState } from "react"
import { Dayjs } from "dayjs"

export default function DateReserve({onDateChange}:{onDateChange:Function}){

    const [bookDate, setBookDate] = useState<Dayjs|null>(null);

    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker className="bg-white"
                    value={bookDate}
                    onChange={(value) => {setBookDate(value); onDateChange(value)}}    
                />
            </LocalizationProvider>
        </div>
    )
}