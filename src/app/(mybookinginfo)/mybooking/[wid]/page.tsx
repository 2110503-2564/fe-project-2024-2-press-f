import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import getInterview from "@/libs/manageInterview/getInterview";
import dayjs from "dayjs";
import { getServerSession } from "next-auth";
import { InterviewItem } from "../../../../../interface";
import UpdateComponent from "@/components/Interview/UpdateComponent";
import DeleteComponent from "@/components/Interview/DeleteComponent";

export default async function InterviewDetailPage({ params }: { params: { wid: string } }) {
    
    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null
    const token = session.user.token
    const interviewId = params.wid

    const interview = await getInterview({token, interviewId})
    if (!interview || !interview.data) {
        return <div>Interview not found</div>;
    }
    const interviewData:InterviewItem = interview.data

    function formatDate(dateString: string): string {
            return dayjs(dateString).format('YYYY/MM/DD HH:mm');
        }
    return (
        <main className="p-10 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">{interviewData.company.name}</h1>

                <div className="text-lg mb-2">
                    <strong>Company Description:</strong> {interviewData.company.description}
                </div>

                <div className="text-lg mb-2">
                    <strong>Company Tel:</strong> {interviewData.company.tel}
                </div>

                <div className="text-lg mb-2">
                    <strong>Interview Date:</strong> {formatDate(interviewData.interviewDate)}
                </div>

                <div className="text-lg mb-2">
                    <strong>Created At:</strong> {formatDate(interviewData.createdAt)}
                </div>
  
            </div>
            <div className="flex flex-row justify-around mt-4 max-w-4xl mx-auto">
                <UpdateComponent interviewId={interviewId} token={token}/>
                <DeleteComponent interviewId={interviewId} token={token}/>
            </div>
        </main>
    );
}
