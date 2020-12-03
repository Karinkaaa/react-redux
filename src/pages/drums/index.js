import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import { Pause, PlayArrow } from "@material-ui/icons";
import { isPlayed, pauseAudio, playAudio, stopAudio } from "../../utils/audioMethods";

const audios = [
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
    const [prevUrl, setPrevUrl] = useState();
    const [currentUrl, setCurrentUrl] = useState();

    const handleClick = (url) => {
        if (prevUrl && prevUrl !== url) {
            stopAudio(prevUrl);
            playAudio(url);
            setCurrentUrl(url);
        } else if (isPlayed(url)) {
            pauseAudio(url);
            setCurrentUrl("");
        } else {
            playAudio(url);
            setCurrentUrl(url);
        }
        setPrevUrl(url);

        // if (audioPlayer.currentSrc === url && !audioPlayer.paused) {
        //     audioPlayer.pauseAudio();
        //     // setisPlayed({
        //     //     ...isPlayed,
        //     //     [url]: true
        //     // });
        // } else if (audioPlayer.currentSrc === url && audioPlayer.paused) {
        //     audioPlayer.playAudio();
        //     // setisPlayed({
        //     //     ...isPlayed,
        //     //     [url]: false
        //     // });
        // } else {
        //     audioPlayer.pauseAudio();
        //     audioPlayer = new Audio(url);
        //     audioPlayer.playAudio();
        //     // setisPlayed({
        //     //     ...isPlayed,
        //     //     [url]: false
        //     // });
        // }
    };

    return (
        <div>
            {
                audios.map(n => (
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