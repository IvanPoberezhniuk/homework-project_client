import React from 'react';

import ProjectForm from '../Forms/ProjectForm';
import ProjectModal from './ProjectModal';

const EditProjectModal = ({ projectName, availableItems, selectedItems, ...props }) => {
  debugger;
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const content = (<ProjectForm
    projectName={projectName}
    availableItems={availableItems}
    selectedItems={selectedItems}
    closeHandler={handleClose} />
  )

  return <ProjectModal title='Create new Project' content={content} />
}

export default EditProjectModal;