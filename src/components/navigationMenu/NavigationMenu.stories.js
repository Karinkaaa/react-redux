import React from "react";
import NavigationMenu from "./";
import { CloudDownload } from "@material-ui/icons";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@material-ui/core";
import { MuiThemeProvider } from "material-ui";
import { theme } from "../../utils/theme";

export default {
    title: 'Example/NavigationMenu',
    component: NavigationMenu,
};

const Template = (args) =>
    <MuiThemeProvider theme={theme}>
        <BrowserRouter>
            <Container maxWidth="xs">
                <NavigationMenu {...args} />
            </Container>
        </BrowserRouter>
    </MuiThemeProvider>

export const Primary = Template.bind({});
Primary.args = {
    items: [
        {
            name: "Boos",
            Icon: () => <CloudDownload/>,
            link: "",
        },
        {
            name: "Boos",
            Icon: () => <CloudDownload/>,
            link: "",
        },
        {
            name: "Boos",
            Icon: () => <CloudDownload/>,
            link: "",
        },
        {
            name: "Boos",
            Icon: () => <CloudDownload/>,
            link: "",
        }
    ]
};

export const WithNested = Template.bind({});
WithNested.args = {
    items: [
        {
            name: "Resources",
            Icon: () => <CloudDownload/>,
            link: "",
            children: [
                {
                    name: "Images",
                    Icon: () => <CloudDownload/>,
                    link: "",
                },
                {
                    name: "Animations",
                    Icon: () => <CloudDownload/>,
                    link: "",
                }
            ]
        },
        {
            name: "Boos",
            Icon: () => <CloudDownload/>,
            link: "",
        },
        {
            name: "Boos",
            Icon: () => <CloudDownload/>,
            link: "",
        },
        {
            name: "Boos",
            Icon: () => <CloudDownload/>,
            link: "",
        }
    ]
};
