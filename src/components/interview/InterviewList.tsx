'use client'
import { alertClasses } from "@mui/material";
import { InterviewItem, InterviewJson } from "../../../interface";
import dayjs from "dayjs";

export default function InterviewList( {interviewJson}:{interviewJson:InterviewJson} ) {

    function formatDate(dateString: string): string {
        return dayjs(dateString).format('YYYY/MM/DD HH:mm');
    }

    return (
        <>
        <div>
            {
                interviewJson.data.map((interveiwItem:InterviewItem)=>(
                    <div className="bg-secondary rounded-md px-5 mx-5 py-2 my-2" key={interveiwItem._id}>
                        <table className="table-auto border-separate border-spacing-2 text-gray-700"><tbody>
                            <tr><td className="col-span-2 text-2xl text-gray-700">{interveiwItem.company.name}</td></tr>
                            <tr><td>Interview Date:</td><td>{formatDate(interveiwItem.interviewDate)}</td></tr>
                            <tr><td>Created:</td><td>{formatDate(interveiwItem.createdAt)}</td></tr>
                        </tbody></table>
                        <div className="flex flex-row gap-2">
                            <button className="block rounded-md bg-primary hover:bg-accent px-2 py-2 text-white shadow-sm">
                                Update Interview
                            </button>
                            <button className="block rounded-md bg-primary hover:bg-accent px-2 py-2 text-white shadow-sm"
                            onClick={()=>{
                                const isConfirm = window.confirm(`Do you want to cancel the interview with ${interveiwItem.company.name}?`)
                                if (isConfirm) {
                                    alert('Delete')
                                }
                            }}>
                                Cancel Interview
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
        </>
    )
}