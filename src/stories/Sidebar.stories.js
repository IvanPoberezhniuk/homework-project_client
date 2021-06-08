import React from 'react';

import Sidebar from '../components/shared/sidebar/Sidebar';

export default {
  title: 'Main/Sidebar',
  component: Sidebar,
};

const Template = (args) => <Sidebar {...args} />;

export const Admin = Template.bind({});
Admin.args = {
  isAuth: true,
};

export const Guest = Template.bind({});
Guest.args = {
  isAuth: false,
};

export const User = Template.bind({});
User.args = {
  isAuth: false,
};
