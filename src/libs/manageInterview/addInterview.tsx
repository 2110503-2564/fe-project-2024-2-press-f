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
        const errorData = await response.json();
        const errorMessage = errorData.message || `Failed to add interview: ${response.statusText}`;
        alert(errorMessage);
    }

    return await response.json();
}
