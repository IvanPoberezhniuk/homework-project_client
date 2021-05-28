import React from 'react';

import { Button } from '../components/Button/Button';

export default {
  title: 'Main/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Default = Template.bind({});
Default.args = {};
