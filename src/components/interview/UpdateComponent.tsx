'use client'
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import DateReserve from "../DateReserve";
import { useRouter } from "next/navigation";
import updateInterview from "@/libs/manageInterview/updateInterview";

export default function UpdateComponent({interviewId,token}:{interviewId:string, token:string}) {
    const [date, setDate] = useState<Dayjs | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isUpdate, setIsUpdate] = useState<boolean>(false)
    const router = useRouter()
    
    const handleUpdate = async (e:React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        if (!window.confirm("Are you sure you want to update this interview?")) {
            setIsUpdate(false)
            return
        }
        try {
            setIsLoading(true)
            if (date) {
                const updatedData: Record<string,string> = {
                    interviewDate: dayjs(date).format("YYYY-MM-DD HH:mm"),
                }
                await updateInterview({interviewId, token, updatedData})
                alert("Interview updated successfully!")
                setIsUpdate(false)
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
                isUpdate ? <div className="flex flex-row">
                    <div>
                        <button className="block rounded-md bg-primary hover:bg-accent px-2 py-2 text-white shadow-sm"
                        onClick={handleUpdate} disabled={isLoading}>
                            {isLoading ? "Updating..." : "Update"}
                        </button>
                        <button className="block rounded-md bg-primary hover:bg-accent px-2 py-2 text-white shadow-sm"
                        onClick={(e)=>{{setIsUpdate(false); e.stopPropagation(); e.preventDefault();}}} disabled={isLoading}>
                            Cancel
                        </button>
                    </div>
                    <DateReserve onDateChange={(value:Dayjs) => {setDate(value)}}/>
                </div>
                : <div>
                    <button className="block rounded-md bg-primary hover:bg-accent px-2 py-2 text-white shadow-sm"
                    onClick={(e)=>{{setIsUpdate(true); e.stopPropagation(); e.preventDefault();}}}>Update Interview</button>
                </div>
            }
            
            
        </div>
    );
}
