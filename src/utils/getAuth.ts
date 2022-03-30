export const commonsParams = {
  redirect_uri: process.env.REACT_APP_HOST,
  client_id: process.env.REACT_APP_CLIENT_ID,
  client_secret: process.env.REACT_APP_CLIENT_SECRET,
};

export const auth = async (code: string) => {
  try {
    const params: any = {
      code,
      grant_type: "authorization_code",
      ...commonsParams,
    };
    const searchParams = Object.keys(params)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join("&");

    const spotifyCall = await fetch(`https://accounts.spotify.com/api/token`, {
      method: "POST",
      body: searchParams,
      headers: { "content-type": "application/x-www-form-urlencoded" },
    });
    return await spotifyCall.json();
  } catch (error) {
    console.log(error);
  }
};
