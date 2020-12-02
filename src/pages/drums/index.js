import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import { Pause, PlayArrow } from "@material-ui/icons";
import { isPlayed, pause, play, stop } from "../../utils/audioMethods";

const music = [
    {
        id: 1,
        name: "My-Life-Is-Going-On",
        url: "https://static.muzlo.cc/download/24036/Burak-Yeter-Cecilia-Krull_-_My-Life-Is-Going-On-Burak-Yeter-Remix.mp3"
    },
    {
        id: 7,
        name: "Tuesday",
        url: "https://static.muzlo.cc/download/31095/Burak-Yeter-Danelle-Sandoval_-_Tuesday-TPaul-Sax-Remix.mp3"
    },
    {
        id: 3,
        name: "Gorit",
        url: "http://uzmuzon.net/files/zarubezhnye-pesni/dorofeeva-gorit-diflex-remix.mp3"
    }
];

const Drums = () => {
    const [oldUrl, setOldUrl] = useState();
    const [currentUrl, setCurrentUrl] = useState();

    const handleClick = (url) => {
        if (oldUrl && oldUrl !== url) {
            stop(oldUrl);
            play(url);
            setCurrentUrl(url);
        } else if (isPlayed(url)) {
            pause(url);
            setCurrentUrl("");
        } else {
            play(url);
            setCurrentUrl(url);
        }
        setOldUrl(url);

        // if (audio.currentSrc === url && !audio.paused) {
        //     audio.pause();
        //     // setisPlayed({
        //     //     ...isPlayed,
        //     //     [url]: true
        //     // });
        // } else if (audio.currentSrc === url && audio.paused) {
        //     audio.play();
        //     // setisPlayed({
        //     //     ...isPlayed,
        //     //     [url]: false
        //     // });
        // } else {
        //     audio.pause();
        //     audio = new Audio(url);
        //     audio.play();
        //     // setisPlayed({
        //     //     ...isPlayed,
        //     //     [url]: false
        //     // });
        // }
    };

    return (
        <div>
            {
                music.map(n => (
                    <IconButton
                        key={n.id}
                        onClick={() => handleClick(n.url)}
                    >
                        {
                            currentUrl === n.url ? <Pause/> : <PlayArrow/>
                        }
                    </IconButton>
                ))}
        </div>
    );
};

export default Drums;