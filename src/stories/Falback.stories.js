import React from 'react';

import { Fallback } from 'components';

export default {
  title: 'Main/Fallback',
  component: Fallback,
};

const Template = (args) => <Fallback {...args} />;

export const Standart = Template.bind({});
Standart.args = {};
