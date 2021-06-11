import React from 'react';

import CreateProjectModal from '../components/Modals/CreateProjectModal';

export default {
  title: 'Main/Modals',
  component: CreateProjectModal,
};

const Template = (args) => < CreateProjectModal {
  ...args
}
/>;

export const CreateProject = Template.bind({});
CreateProject.args = {
};