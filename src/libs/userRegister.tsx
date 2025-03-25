export default async function userRegister({
    Data
}: {
    Data: Record<string,string>;
}) {
    const response = await fetch(`http://localhost:5000/api/v1/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Data),
    });

    if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.message || `Failed to register: ${response.statusText}`;
        alert(errorMessage);
    }

    return await response.json();
}
