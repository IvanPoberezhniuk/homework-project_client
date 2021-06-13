import React from 'react';

import ProjectsTable from '../containers/modules/projectsTable/ProjectsTable';

export default {
  title: 'Main/ProjectsTable',
  component: ProjectsTable,
};

const Template = (args) => <ProjectsTable {...args} />;

export const Loaded = Template.bind({});
Loaded.args = {
  isLoading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
