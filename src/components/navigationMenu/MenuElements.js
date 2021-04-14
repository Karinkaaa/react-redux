import React from "react";
import { ANIMATIONS, AUDIOS, DRAGON_BONES, DRUMS, IMAGES, INFO, LAYERS, RULES } from "../../utils/links";
import {
    AccessibilityNew,
    BurstMode,
    Error,
    GroupWork,
    Info,
    Layers,
    PhotoLibrary,
    QueueMusic,
    ViewCarousel,
    Visibility
} from "@material-ui/icons";

export const MenuElements = [
    {
        name: "Resources",
        Icon: () => <ViewCarousel/>,
        children: [
            {
                name: "Images",
                Icon: () => <PhotoLibrary/>,
                link: IMAGES
            },
            {
                name: "Animations",
                Icon: () => <BurstMode/>,
                link: ANIMATIONS
            },
            {
                name: "Dragon Bones",
                Icon: () => <AccessibilityNew/>,
                link: DRAGON_BONES
            },
            {
                name: "Audios",
                Icon: () => <QueueMusic/>,
                link: AUDIOS
            }
        ]
    },
    {
        name: "Drums",
        Icon: () => <GroupWork/>,
        link: DRUMS
    },
    {
        name: "Rules",
        Icon: () => <Error/>,
        link: RULES
    },
    {
        name: "UI",
        Icon: () => <Visibility/>,
        children: [
            {
                name: "Layers",
                Icon: () => <Layers/>,
                link: LAYERS
            }
        ]
    },
    {
        name: "Info",
        Icon: () => <Info/>,
        link: INFO
    }
];
