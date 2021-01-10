import React from "react";
import {
    AcUnit,
    AllInclusive,
    Android,
    Apple,
    Audiotrack,
    BeachAccess,
    BlurCircular,
    Brightness2,
    BrightnessHigh,
    Brush,
    Eco,
    EmojiEmotions,
    Favorite,
    House,
    MusicNote
} from "@material-ui/icons";

export const RuleItems = [
    [
        {
            id: 1,
            x: 0,
            y: 0,
            Icon: () => <AcUnit fontSize={"large"} style={{ color: "#005047" }}/>
        },
        {
            id: 2,
            x: 1,
            y: 0,
            Icon: () => <Apple fontSize={"large"} style={{ color: "#005047" }}/>
        },
        {
            id: 3,
            x: 2,
            y: 0,
            Icon: () => <AllInclusive fontSize={"large"} style={{ color: "#005047" }}/>
        },
        {
            id: 4,
            x: 3,
            y: 0,
            Icon: () => <Audiotrack fontSize={"large"} style={{ color: "#005047" }}/>
        },
        {
            id: 5,
            x: 4,
            y: 0,
            Icon: () => <Android fontSize={"large"} style={{ color: "#005047" }}/>
        }
    ],
    [
        {
            id: 6,
            x: 0,
            y: 1,
            Icon: () => <MusicNote fontSize={"large"} style={{ color: "#005047" }}/>
        },
        {
            id: 7,
            x: 1,
            y: 1,
            Icon: () => <BeachAccess fontSize={"large"} style={{ color: "#005047" }}/>
        },
        {
            id: 8,
            x: 2,
            y: 1,
            Icon: () => <BlurCircular fontSize={"large"} style={{ color: "#005047" }}/>
        },
        {
            id: 9,
            x: 3,
            y: 1,
            Icon: () => <Brightness2 fontSize={"large"} style={{ color: "#005047" }}/>
        },
        {
            id: 10,
            x: 4,
            y: 1,
            Icon: () => <Brush fontSize={"large"} style={{ color: "#005047" }}/>
        }
    ],
    [
        {
            id: 11,
            x: 0,
            y: 2,
            Icon: () => <BrightnessHigh fontSize={"large"} style={{ color: "#005047" }}/>
        },
        {
            id: 12,
            x: 1,
            y: 2,
            Icon: () => <House fontSize={"large"} style={{ color: "#005047" }}/>
        },
        {
            id: 13,
            x: 2,
            y: 2,
            Icon: () => <Eco fontSize={"large"} style={{ color: "#005047" }}/>
        },
        {
            id: 14,
            x: 3,
            y: 2,
            Icon: () => <Favorite fontSize={"large"} style={{ color: "#005047" }}/>
        },
        {
            id: 15,
            x: 4,
            y: 2,
            Icon: () => <EmojiEmotions fontSize={"large"} style={{ color: "#005047" }}/>
        }
    ]
];