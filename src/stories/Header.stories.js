import React from 'react';

import { Header } from 'components';

export default {
  title: 'Main/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Auth = Template.bind({});
Auth.args = {
  isAuth: true,
};

export const NotAuth = Template.bind({});
NotAuth.args = {
  isAuth: false,
};
