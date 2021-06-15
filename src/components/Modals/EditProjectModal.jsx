import React from 'react';

import { ProjectForm, ProjectModal } from '../index';

const EditProjectModal = ({
  projectName,
  availableItems,
  selectedItems,
  ...props
}) => {
  debugger;
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const content = (
    <ProjectForm
      projectName={projectName}
      availableItems={availableItems}
      selectedItems={selectedItems}
      closeHandler={handleClose}
    />
  );

  return <ProjectModal title='Edit Project' content={content} />;
};

export default EditProjectModal;
