const audioMap = {};

const getAudio = (url) => {
    if (audioMap[url]) {
        return audioMap[url];
    }
    const audio = new Audio(url);
    audioMap[url] = audio;

    return audio;
};

export const playAudio = (url) => {
    return getAudio(url).play();
};

export const pauseAudio = (url) => {
    return getAudio(url).pause();
};

export const stopAudio = (url) => {
    const sound = getAudio(url);
    sound.pause();
    sound.currentTime = 0;
};

export const isPlayed = (url) => {
    return !getAudio(url).paused;
};
