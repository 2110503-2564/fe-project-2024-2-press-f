'use client'
import deleteInterviews from "@/libs/manageInterview/deleteInterview"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function DeleteComponent({interviewId,token}:{interviewId:string, token:string}) {
    
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()
    
    const handleDelete = async (e:React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        if (!window.confirm("Are you sure you want to delete this interview?")) return
        try {
            setIsLoading(true)
            await deleteInterviews({interviewId, token})
            alert("Interview deleted successfully!")
            router.refresh()
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            <button className="block rounded-md bg-primary hover:bg-accent px-2 py-2 text-white shadow-sm" 
            onClick={handleDelete} disabled={isLoading}>
                {isLoading ? 'Deleting...' : 'Delete Interview'}
            </button>
        </div>
    )
}