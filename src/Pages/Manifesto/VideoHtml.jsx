import { DefaultPlayer as Video } from "react-html5video";
import React, { useEffect, useState } from "react";
import "react-html5video/dist/styles.css";

import css from "./Manifesto.module.scss";

function VideoHtml({ src }) {
  useEffect(() => {}, []);
  const [video, setVideo] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    setVideo(src);
  }, [src]);

  return (
    <>
      <Video
        // autoPlay
        loop
        muted
        controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
        // poster="http://sourceposter.jpg"
        onCanPlayThrough={() => {
          // Do stuff
        }}
      >
        <source src={src} type="video/mp4" />
        <source src="https://player.vimeo.com/external/372099215.sd.mp4?s=314421ac82a58f575db1d282bae758f4f05127cb&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
      </Video>
      {/* <video className={css["video"]} autoPlay controls>
        <source src={src} height="450" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </>
  );
}

export default VideoHtml;
