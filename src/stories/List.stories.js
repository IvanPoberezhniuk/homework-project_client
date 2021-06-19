import React from 'react';

import { List } from '../components';

export default {
  title: 'Main/List',
  component: List,
};

const Template = (args) => <List {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  placeholder: 'Placeholder',
  items: [],
};

export const WithItems = Template.bind({});
WithItems.args = {
  placeholder: 'Placeholder',
  items: [
    { id: 1, firstName: 'test', lastName: 'user' },
    { id: 2, firstName: 'test', lastName: 'user' },
    { id: 3, firstName: 'test', lastName: 'user' },
    { id: 4, firstName: 'test', lastName: 'user' },
    { id: 5, firstName: 'test', lastName: 'user' },
    { id: 6, firstName: 'test', lastName: 'user' },
    { id: 7, firstName: 'test', lastName: 'user' },
    { id: 8, firstName: 'test', lastName: 'user' },
    { id: 9, firstName: 'test', lastName: 'user' },
  ],
};
