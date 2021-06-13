import React from 'react';

import { CustomPaper } from '../components/Paper/Paper';

export default {
  title: 'Main/Paper',
  component: CustomPaper,
};

const Template = (args) => <CustomPaper {...args} />;

export const Simple = Template.bind({});
Simple.args = {
};