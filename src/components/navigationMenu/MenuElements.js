import React from "react";
import {
    LINK_TO_ANIMATIONS,
    LINK_TO_AUDIOS,
    LINK_TO_DRAGON_BONES,
    LINK_TO_DRUMS,
    LINK_TO_IMAGES,
    LINK_TO_LAYERS,
    LINK_TO_MOVIES,
    LINK_TO_RULES
} from "../../utils/links";
import {
    AccessibilityNew,
    BurstMode,
    Error,
    GroupWork,
    Layers,
    Movie,
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
                link: LINK_TO_IMAGES
            },
            {
                name: "Animations",
                Icon: () => <BurstMode/>,
                link: LINK_TO_ANIMATIONS
            },
            {
                name: "Dragon Bones",
                Icon: () => <AccessibilityNew/>,
                link: LINK_TO_DRAGON_BONES
            },
            {
                name: "Audios",
                Icon: () => <QueueMusic/>,
                link: LINK_TO_AUDIOS
            }
        ]
    },
    {
        name: "Drums",
        Icon: () => <GroupWork/>,
        link: LINK_TO_DRUMS
    },
    {
        name: "Rules",
        Icon: () => <Error/>,
        link: LINK_TO_RULES
    },
    {
        name: "UI",
        Icon: () => <Visibility/>,
        children: [
            {
                name: "Layers",
                Icon: () => <Layers/>,
                link: LINK_TO_LAYERS
            }
        ]
    },
    {
        name: "Movies",
        Icon: () => <Movie/>,
        link: LINK_TO_MOVIES
    }
];
