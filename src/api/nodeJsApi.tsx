type UserObj = {
  id: string;
  name: string;
  email: string;
  zipCode: number | null;
  city: string | null;
  street: string | null;
};

export default async function sendUserInfo(UserObj: UserObj) {
  const api = "http://localhost:3000/";

  try {
    const response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UserObj),
    });

    if (!response.ok) {
      throw new Error(
        `Error sending user address: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log("User address sent successfully:", data);
  } catch (error) {
    console.error("Error sending user address:", error);
  }
}
