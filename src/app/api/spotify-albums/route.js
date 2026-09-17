// export async function GET() {
//   const artistId = "2Zc4vkRdTEylIW2efddjX1";

//   const client_id = process.env.SPOTIFY_CLIENT_ID;
//   const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

//   const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       Authorization:
//         "Basic " +
//         Buffer.from(client_id + ":" + client_secret).toString("base64"),
//     },
//     body: "grant_type=client_credentials",
//   });

//   const tokenData = await tokenResponse.json();
//   const access_token = tokenData.access_token;

//   const albumsResponse = await fetch(
//     `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album,single&market=US&limit=10`,
//     {
//       headers: {
//         Authorization: `Bearer ${access_token}`,
//       },
//       next: { revalidate: 3600 },
//     },
//   );
//   const albumsData = await albumsResponse.json();
//   // FIX: Fallback to .albums or .albums.items depending on your specific Spotify endpoint
//   const records = albumsData.albums || albumsData.items || (albumsData.albums && albumsData.albums.items) || [];

//   if (!albumsData || !albumsData.items) {
//     console.error("Spotify API response missing items:", albumsData);
//     return Response.json([], { status: 200 }); // Returns empty array to prevent 500 crashes
// }

//   return Response.json(albumsData.items);
// }
