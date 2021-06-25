import React from 'react';

import { EditRoleModal } from '../components';

export default {
  title: 'Main/Modals',
  component: EditRoleModal,
};

const Template = (args) => <EditRoleModal {...args} />;

export const EditRole = Template.bind({});
EditRole.args = { open: true, handleClose: () => {} };
