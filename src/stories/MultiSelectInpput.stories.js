import React from 'react';

import { MultiSelectInput } from '../components/';

export default {
  title: 'Main/MultiSelectInput',
  component: MultiSelectInput,
};

const Template = (args) => <MultiSelectInput {...args} />;

export const Standart = Template.bind({});
Standart.args = {
  placeholder: 'placeholder',
  options: [
    {
      id: 1,
      name: 'HTML',
    },
    {
      id: 2,
      name: 'CSS',
    },
  ],
};
