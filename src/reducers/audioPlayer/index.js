import { CLICK_PLAY_OR_PAUSE } from "../../utils/actionConstants";
import { isPlayed, pauseAudio, playAudio, stopAudio } from "../../utils/audioMethods";

const initialState = {
    currentUrl: "",
    prevUrl: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CLICK_PLAY_OR_PAUSE: {
            const { url } = action;
            const { prevUrl } = state;
            let currentUrl;

            if (prevUrl && prevUrl !== url) {
                stopAudio(prevUrl);
                playAudio(url);
                currentUrl = url;
            } else if (isPlayed(url)) {
                pauseAudio(url);
                currentUrl = "";
            } else {
                playAudio(url);
                currentUrl = url;
            }

            return {
                ...state,
                currentUrl,
                prevUrl: url
            };
        }
        default:
            return state;
    }
}