import { CLICK_PLAY_OR_PAUSE, STOP_AUDIO } from "../../utils/actionConstants";

export const clickPlayOrPause = (url) => ({
    type: CLICK_PLAY_OR_PAUSE,
    url
});

export const stopAudio = (url) => ({
    type: STOP_AUDIO,
    url
});