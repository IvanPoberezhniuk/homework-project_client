import React from 'react';
import {Input} from './../components/Input/Input.jsx';

export default {
  title: 'Main/Input',
  component: Input
}

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'placeholder',
};