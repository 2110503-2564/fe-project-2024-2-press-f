import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import { getServerSession } from "next-auth"
import getInterviews from "@/libs/manageInterview/getInterviews"
import InterviewList from "@/components/Interview/InterviewList"
import { redirect } from "next/navigation"
import Link from "next/link"

export default async function MyBookingPage() {

    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) {
        redirect('/api/auth/signin?callbackUrl=/mybooking')
    }
    
    const interview = await getInterviews(session.user.token)

    return (
        <main>
            <InterviewList interviewJson={interview} token={session.user.token}/>
            {
                (interview.userRole !== 'admin' && interview.count <3) ?
                <Link className="block rounded-md bg-primary hover:bg-accent px-2 py-2 w-auto m-4 justify-self-center text-center text-white shadow-sm" href={'/company'}>
                    Explore More
                </Link> : null
            }
        </main>
    )
}