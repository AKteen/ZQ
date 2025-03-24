// // import { useEffect } from "react"
// import React, { useEffect, useState } from 'react'

// const API = "AIzaSyCN_CWws7ku_gVsFqZsl-islw-2JGfgvuk"

// const channelId = "www.youtube.com/@aadityakulkarni"

// var fetchurl = "https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxresult=20"



// export const youtubeapi = () => {

//     const [allvideos, setAllvideos] = useState([])
//     useEffect(() => {
//         fetch(fetchurl).then((response) => response.json()).then((resJson) => {
//             const result = resJson.items.map(doc => ({
//                 ...doc,
//                 Videolink: "https://www.youtube.com/embed/" + doc.id.videoId
//             }))
//             setAllvideos(result)
//         })
//     }, [])



//     console.log(allvideos)
//     return (
//         <div>
//             {allvideos.map((item)=>{
//                 return(
//                     <div>

//                         <iframe width="560" height="315" src={item.Videolink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//                         <p>{item.snippet.title}</p>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

// export default youtubeapi

import React, { useEffect, useState } from "react";

const API = "AIzaSyCN_CWws7ku_gVsFqZsl-islw-2JGfgvuk";
const channelId = "UC_yourchannelid_here"; // Replace with actual channel ID

const fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`;

export const YoutubeAPI = () => {
  const [allVideos, setAllVideos] = useState([]);

  useEffect(() => {
    fetch(fetchurl)
      .then((response) => response.json())
      .then((resJson) => {
        if (resJson.items) {
          const result = resJson.items.map((doc) => ({
            ...doc,
            videoLink: `https://www.youtube.com/embed/${doc.id.videoId}`,
          }));
          setAllVideos(result);
        }
      })
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  return (
    <div>
      {allVideos.length === 0 ? (
        <p>Loading videos...</p>
      ) : (
        allVideos.map((item, index) => (
          <div key={index}>
            <iframe
              width="560"
              height="315"
              src={item.videoLink}
              title="YouTube video player"

              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p>{item.snippet.title}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default YoutubeAPI;
