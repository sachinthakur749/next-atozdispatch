"use server";

import { cookies } from "next/headers";

export async function dataFetcher(url) {
  const cookieStore = cookies();
  let accessToken = (await cookieStore).get("api_token")?.value;

  if (!accessToken) {
    accessToken = process.env.NEXT_PUBLIC_API_TOKEN;
  }

  if (!accessToken) {
    throw new Error("No access token available");
  }

  const apiEndpoint = process.env.NEXT_PUBLIC_API_URL;

  if (!apiEndpoint) {
    throw new Error("API_ENDPOINT is not defined in environment variables");
  }

  try {
    const response = await fetch(`${apiEndpoint}/${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in Get request:", error);
    throw error;
  }
}
