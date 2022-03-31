export const getSong = async (params: any, token: string) => {
  try {
    const url = new URL("https://api.spotify.com/v1/search");

    for (const item of params) {
      const key = Object.keys(item)[0];

      url.searchParams.append(key, item[key]);
    }
    const spotifyCall = await fetch(url.href, {
      method: "GET",

      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await spotifyCall.json();
  } catch (error) {
    console.log(error);
  }
};
