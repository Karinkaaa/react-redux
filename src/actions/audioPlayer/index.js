import { CLICK_PLAY_OR_PAUSE } from "../../utils/actionConstants";

export const clickPlayOrPause = (url) => ({
    type: CLICK_PLAY_OR_PAUSE,
    url
});