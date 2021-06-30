import React from 'react';

import { TeamModal } from 'components';

export default {
  title: 'Main/Modals/Team',
  component: TeamModal,
};

const Template = (args) => <TeamModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  teamList: [
    { id: 1, firstName: 'test 1', lastName: 'user' },
    { id: 2, firstName: 'test 2', lastName: 'user' },
    { id: 3, firstName: 'test 3', lastName: 'user' },
    { id: 4, firstName: 'test 4', lastName: 'user' },
    { id: 5, firstName: 'test 5', lastName: 'user' },
    { id: 6, firstName: 'test 6', lastName: 'user' },
    { id: 7, firstName: 'test 7', lastName: 'user' },
    { id: 8, firstName: 'test 8', lastName: 'user' },
    { id: 9, firstName: 'test 9', lastName: 'user' },
  ],
};
