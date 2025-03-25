import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import { getServerSession } from "next-auth"
import getInterviews from "@/libs/manageInterview/getInterviews"
import InterviewList from "@/components/Interview/InterviewList"

export default async function MyBookingPage() {

    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null
    
    const interview = await getInterviews(session.user.token)

    return (
        <main>
            <InterviewList interviewJson={interview} token={session.user.token}/>
        </main>
    )
}