import React from 'react';

import { Input } from 'components';

export default {
  title: 'Main/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'placeholder',
};

export const ValidationError = Template.bind({});
ValidationError.args = {
  error: true,
  helperText: 'Some validation error',
};
