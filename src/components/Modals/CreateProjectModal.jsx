import React from 'react';

import { ProjectForm, ProjectModal } from '../';

const CreateProjectModal = ({ availableItems, ...props }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const content = (
    <ProjectForm
      projectName={''}
      availableItems={availableItems}
      selectedItems={[]}
      closeHandler={handleClose}
    />
  );

  return <ProjectModal title='Create new Project' content={content} />;
};

export default CreateProjectModal;
