import React from 'react';

import { Avatar } from '../components';

export default {
  title: 'Main/Avatar',
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'TU',
};
