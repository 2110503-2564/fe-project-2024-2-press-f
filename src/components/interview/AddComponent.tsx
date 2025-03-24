'use client'
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import DateReserve from "../DateReserve";
import { useRouter } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import addInterview from "@/libs/manageInterview/addInterview";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";

export default function AddComponent({companyId}:{companyId:string}) {
    const [date, setDate] = useState<Dayjs | null>(null);
    const [isSigned, setSigned] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isAdd, setIsAdd] = useState<boolean>(false)
    const router = useRouter()

    const handleAdd = async () => {
        const session = await getServerSession(authOptions)
        if (!session || !session.user.token) {
            setSigned(false)
            return
        }
        const token = session.user.token
        
        if (!window.confirm("Are you sure you want to update this interview?")) {
            setIsAdd(false)
            return
        }
        try {
            setIsLoading(true)
            if (date) {
                const Data: Record<string,string> = {
                    interviewDate: dayjs(date).format("YYYY/MM/DD"),
                }
                await addInterview({companyId, token, Data})
                alert("Interview updated successfully!")
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
                isSigned ? <div>
                    {isAdd ? <div className="flex flex-row">
                        <div>
                            <button className="block rounded-md bg-primary hover:bg-accent px-2 py-2 text-white shadow-sm"
                            onClick={handleAdd} disabled={isLoading}>
                                {isLoading ? "Adding..." : "Add"}
                            </button>
                            <button className="block rounded-md bg-primary hover:bg-accent px-2 py-2 text-white shadow-sm"
                            onClick={()=>{setIsAdd(false)}} disabled={isLoading}>
                                Cancel
                            </button>
                        </div>
                        <DateReserve onDateChange={(value:Dayjs) => {setDate(value)}}/>
                    </div>
                    : <div>
                        <button className="block rounded-md bg-primary hover:bg-accent px-2 py-2 text-white shadow-sm"
                        onClick={()=>setIsAdd(true)}>
                            Update Interview
                        </button>
                    </div>}
                </div>
                : <div>
                    please log-in
                </div>
                
            }
        </div>
    );
}
