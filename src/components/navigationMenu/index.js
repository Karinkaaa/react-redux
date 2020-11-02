import React from "react";
import PropTypes from 'prop-types';
import List from "@material-ui/core/List";
import NavigationMenuElement from "./NavigationMenuElement";

const NavigationMenu = ({items}) => (
    <List>
        {
            items
                .map(item =>
                    <NavigationMenuElement
                        key={item.name}
                        {...item}
                    />
                )
        }
    </List>
)

NavigationMenu.propTypes = {
    items: PropTypes.array.isRequired
}

export default NavigationMenu