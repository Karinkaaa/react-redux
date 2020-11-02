import React from 'react';

import {muiTheme} from 'storybook-addon-material-ui';
import { Button } from './Button';
import {MuiThemeProvider} from "@material-ui/core";
import {theme} from "../utils/theme";

export default {
  title: 'Example/Button',
  component: Button,
  decorators: [muiTheme([theme]), Story => <MuiThemeProvider theme={theme}> <Story/></MuiThemeProvider>],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
