import React from 'react';

import Alert from '../components/alert/Alert';

export default {
  title: 'Main/Alert',
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const Error = Template.bind({});
Error.args = {
  severity: 'error',
  children: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  severity: 'warning',
  children: 'warning',
};

export const Info = Template.bind({});
Info.args = {
  severity: 'info',
  children: 'info',
};

export const Success = Template.bind({});
Success.args = {
  severity: 'success',
  children: 'success',
};
