export default async function addInterview({
    companyId,
    token,
    Data,
}: {
    companyId: string;
    token: string;
    Data: Record<string,string>;
}) {
    const response = await fetch(`http://localhost:5000/api/v1/companies/${companyId}/interviews/`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Data),
    });

    if (!response.ok) {
        throw new Error(`Failed to add interview: ${response.statusText}`);
    }

    return await response.json();
}
