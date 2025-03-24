export default async function deleteInterviews({
  interviewId,
  token
}:{
  interviewId: string;
  token: string;
}) {
  const response = await fetch(
    `http://localhost:5000/api/v1/interviews/${interviewId}`,
    {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to delete interviews: ${response.statusText}`);
  }

  return await response.json();
}
