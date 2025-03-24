'use client'

import { useAppSelector, AppDispatch } from "@/redux/store"
import { removeBooking } from "@/redux/features/bookSlice"
import { useDispatch } from "react-redux"

export default function BookingList() {

    const bookItems = useAppSelector((state) => state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    if (bookItems.length === 0) {
        return <div> No Interview Booking </div>;
    }

    return (
        <>
        {
            bookItems.length == 0? "No venue Booking"
            :bookItems.map((bookItem) => (
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
                    key={bookItem.nameLastname}>
                        <div className="text-md"> {bookItem.nameLastname} </div>
                        <div className="text-md">
                            {bookItem.tel} 
                        </div>
                        <div className="text-md">
                            {bookItem.venue}
                        </div>
                        <div className="text-md"> {bookItem.bookDate} </div>
                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
                        onClick={() => dispatch(removeBooking(bookItem))}>
                            Remove Booking
                        </button>    
                </div>
            ))
        }
        </>
    )
}