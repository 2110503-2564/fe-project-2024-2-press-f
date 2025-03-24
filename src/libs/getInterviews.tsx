export default async function getInterviews(token:string) {

    const response = await fetch("http://localhost:5000/api/v1/interviews", {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`
        },
        next:{
            tags:['interviews']
        }
    })
    if(!response.ok) {
        const errorData = await response.json();
        console.error('Error fetching interviews:', errorData);
        throw new Error("Failed to fetch interviews");
    }
    return await response.json()
}