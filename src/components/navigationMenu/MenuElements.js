import React from "react";
import { BurstMode, Error, GroupWork, Info, PhotoLibrary, ViewCarousel, Visibility } from "@material-ui/icons";
import { ANIMATIONS, DRUMS, IMAGES, INFO, RULES, UI } from "../../utils/links";

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
        link: UI
    },
    {
        name: "Info",
        Icon: () => <Info/>,
        link: INFO
    }
];
