import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@material-ui/core";
import { MuiThemeProvider } from "material-ui";
import { theme } from "../../utils/theme";
import DragDropComponent from "./DragDropComponent";

export default {
    title: 'DragDrop/DragDropComponent',
    component: DragDropComponent,
};

const Template = (args) =>
    <MuiThemeProvider theme={theme}>
        <BrowserRouter>
            <Container maxWidth="xs">
                <DragDropComponent {...args} />
            </Container>
        </BrowserRouter>
    </MuiThemeProvider>

export const Primary = Template.bind({});
Primary.args = {
    renderItem: (item) => <div>
        {item.id + " " + item.name}
        <button onClick={() => console.log("onClickBtn", item.id)}>btn</button>
    </div>,
    items: [
        {
            id: "1",
            name: "Boos",
        },
        {
            id: "2",
            name: "Boos",
        },
        {
            id: "3",
            name: "Boos",
        },
        {
            id: "4",
            name: "Boos",
        }
    ]
};
export const Primary2 = Template.bind({});
Primary2.args = {
    renderItem: (item) => <div>
        {item.name + " " + item.name}
        <button onClick={() => console.log("onClickBtn", item.name)}>btn</button>
    </div>,
    items: [
        {
            name: "1Boos",
        },
        {
            name: "2Boos",
        },
        {
            name: "3Boos",
        },
        {
            name: "4Boos",
        }
    ]
};
export const Primary3 = Template.bind({});
Primary3.args = {
    renderItem: (item) => <div>
        {item}
        <button onClick={() => console.log("onClickBtn", item)}>btn</button>
    </div>,
    items: ["1Boos", "2Boos", "3Boos", "4Boos"]
};

export const Demo = (args) => {
    const [items, setItems] = useState([
        {
            id: "1",
            name: "Boos",
        },
        {
            id: "2",
            name: "Boos",
        },
        {
            id: "3",
            name: "Boos",
        },
        {
            id: "4",
            name: "Boos",
        }
    ]);
    const renderItem = (item) => <div>
        {item.id + " " + item.name}
        <button onClick={() => console.log("onClickBtn", item.id)}>btn</button>
    </div>;


    return (
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <Container maxWidth="xs">
                    <DragDropComponent items={items} renderItem={renderItem}
                                       onDragAndDrop={(newItems) => setItems(newItems)}/>
                </Container>
            </BrowserRouter>
        </MuiThemeProvider>
    )
}