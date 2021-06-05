import React from 'react';

import { Button } from '../components/button/Button';

export default {
  title: 'Main/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'Primary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled',
};

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};
