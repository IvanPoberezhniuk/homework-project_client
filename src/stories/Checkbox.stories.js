import React from 'react';

import Checkbox from '../components/checkbox/Checkbox';

export default {
  title: 'Main/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Unchecked = Template.bind({});
Unchecked.args = {

};

export const Checked = Template.bind({});
Checked.args = {
    checked: true
};
