import React from 'react';

import { EditRoleModal } from '../components';

export default {
  title: 'Main/Modals/EditRoleModal',
  component: EditRoleModal,
};

const Template = (args) => <EditRoleModal {...args} />;

export const Error = Template.bind({});
Error.args = {
  children: 'error',
};
