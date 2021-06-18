import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import {
  CreateProjectModal,
  EditProjectModal,
  WarningModal,
} from '../components';
import {
  addProject,
  deleteProject,
  editProject,
  finishProject,
  startProject,
} from '../redux/modules/projects';

export const MODAL = {
  EDIT: 'edit',
  ADD: 'add',
  DELETE: 'delete',
  FINISH: 'finish',
  START: 'start',
};

const ModalSwitcher = ({ ...other }) => {
  const history = useHistory();
  const isLoadingProject = useSelector((state) => state.projects.isLoading);
  const dispatch = useDispatch();
  const { id, type } = useParams();

  const goBack = () => history.goBack();

  const submit = async (action, id) => {
    try {
      await dispatch(action({ id, type }));
    } finally {
      history.goBack();
    }
  };

  const getModal = (type) => {
    switch (type) {
      case MODAL.ADD:
        return (
          <CreateProjectModal
            isLoading={isLoadingProject}
            handleClose={goBack}
            handleSubmit={() => submit(addProject, id)}
          />
        );
      case MODAL.EDIT:
        return (
          <EditProjectModal
            isLoading={isLoadingProject}
            handleClose={goBack}
            id={id}
            handleSubmit={() => submit(editProject, id)}
          />
        );
      case MODAL.DELETE:
        return (
          <WarningModal
            isLoading={isLoadingProject}
            description='Are you sure you want to delete {projectName}?'
            handleClose={goBack}
            handleSubmit={() => submit(deleteProject, id)}
          />
        );
      case MODAL.START:
        return (
          <WarningModal
            isLoading={isLoadingProject}
            description='Are you sure you want to start {projectName}?'
            handleClose={goBack}
            handleSubmit={() => submit(startProject, id)}
          />
        );
      case MODAL.FINISH:
        return (
          <WarningModal
            isLoading={isLoadingProject}
            description='Are you sure you want to finish {projectName}?'
            handleClose={goBack}
            handleSubmit={() => submit(finishProject, id)}
          />
        );
      default:
        return null;
    }
  };

  return getModal(type);
};

export default ModalSwitcher;
