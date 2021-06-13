import React from 'react';

import {
  WarningModal
} from '../components/index';

export default {
  title: 'Main/Modals',
  component: WarningModal,
};

const Template = (args) => < WarningModal {
  ...args
}
/>;

export const Standart = Template.bind({});
Standart.args = {
  description: 'description'
};