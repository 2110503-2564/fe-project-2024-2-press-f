import { InterviewJson } from "../../../interface";

export default async function getInterview({token, interviewId}:{token:string, interviewId:string}) {

    const response = await fetch(`http://localhost:5000/api/v1/interviews/${interviewId}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`
        },
    })
    if(!response.ok) {
        const errorData = await response.json();
        console.error('Error fetching interviews:', errorData);
        throw new Error(`Failed to fetch interview: ${response.statusText}`);
    }
    return await response.json()
}