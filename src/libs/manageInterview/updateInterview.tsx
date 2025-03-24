export default async function updateInterview({
    interviewId,
    token,
    updatedData,
}: {
    interviewId: string;
    token: string;
    updatedData: Record<string,string>;
}) {
    const response = await fetch(`http://localhost:5000/api/v1/interviews/${interviewId}`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
        throw new Error(`Failed to update interview: ${response.statusText}`);
    }

    return await response.json();
}
