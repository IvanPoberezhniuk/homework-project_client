import React from 'react';

import {
  WarningModal
} from '../components/Modals/WarningModal';

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