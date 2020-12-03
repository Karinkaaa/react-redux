import React from "react";
import { theme } from "../../utils/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import AudioResourceTable from "./index";

export default {
    title: "Audio/AudioResourceTable",
    component: AudioResourceTable
};

const Template = (args) =>
    <ThemeProvider theme={theme}>
        <AudioResourceTable {...args}/>
    </ThemeProvider>;

export const Default = Template.bind({});
Default.args = {
    audios: [],
    sorting: {}
};

export const WithData = Template.bind({});
WithData.args = {
    audios: [
        {
            id: "1",
            name: "Boos",
            url: "https://static.muzlo.cc/download/31095/Burak-Yeter-Danelle-Sandoval_-_Tuesday-TPaul-Sax-Remix.mp3"
        },
        {
            id: "45",
            name: "Sunshine",
            url: "http://uzmuzon.net/files/zarubezhnye-pesni/dorofeeva-gorit-diflex-remix.mp3"
        },
        {
            id: "5",
            name: "Sea",
            url: "https://static.muzlo.cc/download/24036/Burak-Yeter-Cecilia-Krull_-_My-Life-Is-Going-On-Burak-Yeter-Remix.mp3"
        }
    ],
    sorting: {}
};