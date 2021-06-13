import React from 'react';
import Avatar from '../components/Avatar/Avatar.jsx'

export default {
  title: 'Main/Avatar',
  component: Avatar
}

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  firstName: 'test',
  lastName: 'user',
  isShowName: false,
};

export const WithName = Template.bind({});
WithName.args = {
  firstName: 'test',
  lastName: 'user',
  isShowName: true,
}