'use client'
import { InterviewItem, InterviewJson } from "../../../interface";
import dayjs from "dayjs";
import DeleteComponent from "./DeleteComponent";
import UpdateComponent from "./UpdateComponent";
import Link from "next/link";

export default function InterviewList( {interviewJson, token}:{interviewJson:InterviewJson, token:string} ) {

    function formatDate(dateString: string): string {
        return dayjs(dateString).format('YYYY/MM/DD HH:mm');
    }

    return (
        <>
        <div>
            {
                interviewJson.data.map((interveiwItem:InterviewItem)=>(
                    <Link href={`/mybooking/${interveiwItem._id}`} key={interveiwItem._id}>
                        <div className="bg-secondary rounded-md px-5 mx-5 py-2 my-2 hover:bg-purple-300 transition" key={interveiwItem._id}>
                            <table className="table-auto border-separate border-spacing-2 text-gray-700"><tbody>
                                <tr><td className="col-span-2 text-2xl">{interveiwItem.company.name}</td></tr>
                                {
                                (interviewJson.userRole === "admin") ? <tr><td>Username:</td><td>{interveiwItem.user.name}</td></tr> : null   
                                }
                                <tr><td>Interview Date:</td><td>{formatDate(interveiwItem.interviewDate)}</td></tr>
                                <tr><td>Created:</td><td>{formatDate(interveiwItem.createdAt)}</td></tr>
                            </tbody></table>
                            <div className="flex flex-row gap-2">
                                <UpdateComponent interviewId={interveiwItem._id} token={token}/>
                                <DeleteComponent interviewId={interveiwItem._id} token={token}/>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
        </>
    )
}