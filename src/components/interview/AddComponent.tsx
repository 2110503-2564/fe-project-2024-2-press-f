'use client'
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import DateReserve from "../DateReserve";
import { useRouter } from "next/navigation";
import addInterview from "@/libs/manageInterview/addInterview";

export default function AddComponent({companyId, token}:{companyId:string, token:string}) {
    const [date, setDate] = useState<Dayjs | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isAdd, setIsAdd] = useState<boolean>(false)
    const router = useRouter()

    const handleAdd = async (e:React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        if (!window.confirm("Are you sure you want to select this company?")) {
            setIsAdd(false)
            return
        }
        try {
            setIsLoading(true)
            if (date) {
                const Data: Record<string,string> = {
                    interviewDate: dayjs(date).format("YYYY-MM-DD HH:mm"),
                }
                await addInterview({companyId, token, Data})
                alert("Interview updated successfully!")
                setIsAdd(false)
                router.refresh()
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            {   
            isAdd ? <div className="flex flex-row">
                    <div>
                        <button className="bg-purple-400 text-white px-6 py-2 rounded-lg shadow-md hover:bg-white hover:text-purple-500 border border-purple-500 transition"
                        onClick={handleAdd} disabled={isLoading}>
                            {isLoading ? "Adding..." : "Add"}
                        </button>
                        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-white hover:text-purple-600 border border-purple-600 transition"
                        onClick={(e)=>{{setIsAdd(false); e.stopPropagation(); e.preventDefault();}}} disabled={isLoading}>
                            Cancel
                        </button>
                    </div>
                    <DateReserve onDateChange={(value:Dayjs) => {setDate(value)}}/>
                </div>
                : <div>
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-white hover:text-purple-600 border border-purple-600 transition"
                    onClick={(e)=>{setIsAdd(true); e.stopPropagation(); e.preventDefault();}}>
                        Add Interview
                    </button>
                </div> 
            }
        </div>
    );
}
