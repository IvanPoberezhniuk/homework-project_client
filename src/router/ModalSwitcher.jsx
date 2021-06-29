import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import {
  CreateProjectModal,
  EditProjectModal,
  EditRoleModal,
  ProjectsModal,
  TeamModal,
  WarningModal,
} from '../components';
import {
  addProject,
  deleteProject,
  editProject,
  eraseCurrentProject,
  finishProject,
  startProject,
} from '../redux/modules/projects';
import { deleteUser, editUser } from '../redux/modules/users';

export const MODAL_PROJECT = {
  EDIT: 'editproject',
  ADD: 'addproject',
  DELETE: 'deleteproject',
  FINISH: 'finishproject',
  START: 'startproject',
  TEAM: 'teamproject',
};

export const MODAL_USER = {
  EDIT: 'edituser',
  DELETE: 'deleteuser',
  PROJECTS: 'projectssuser',
};

const ModalSwitcher = ({ ...other }) => {
  const history = useHistory();
  const isLoadingProject = useSelector((state) => state.projects.isLoading);
  const isLoadingUser = useSelector((state) => state.users.isLoading);

  const dispatch = useDispatch();
  const location = useLocation();
  const { id, type } = useParams();
  const { payload } = location.state && location.state;

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
      case MODAL_PROJECT.ADD:
        return (
          <CreateProjectModal
            isLoading={isLoadingProject}
            handleClose={goBack}
            handleSubmit={() => submit(addProject, id)}
          />
        );
      case MODAL_PROJECT.EDIT:
        return (
          <EditProjectModal
            isLoading={isLoadingProject}
            handleClose={() => {
              dispatch(eraseCurrentProject());
              goBack();
            }}
            id={id}
            handleSubmit={async (project) => {
              await dispatch(editProject({ ...project, id }));
              await history.goBack();
            }}
          />
        );
      case MODAL_PROJECT.DELETE:
        return (
          <WarningModal
            isLoading={isLoadingProject}
            description={`Are you sure you want to delete ${payload.projectName}?`}
            handleClose={goBack}
            handleSubmit={() => submit(deleteProject, id)}
          />
        );
      case MODAL_PROJECT.START:
        return (
          <WarningModal
            isLoading={isLoadingProject}
            description={`Are you sure you want to start ${payload.projectName}?`}
            handleClose={goBack}
            handleSubmit={() => submit(startProject, id)}
          />
        );
      case MODAL_PROJECT.FINISH:
        return (
          <WarningModal
            isLoading={isLoadingProject}
            description={`Are you sure you want to finish ${payload.projectName}?`}
            handleClose={goBack}
            handleSubmit={() => submit(finishProject, id)}
          />
        );
      case MODAL_PROJECT.TEAM:
        return <TeamModal id={id} handleClose={goBack} />;
      case MODAL_USER.PROJECTS:
        return <ProjectsModal user={payload} handleClose={goBack} />;
      case MODAL_USER.EDIT:
        return (
          <EditRoleModal
            isOpen={true}
            handleSubmit={() => submit(editUser, payload)}
            handleClose={goBack}
            user={payload}
          />
        );
      case MODAL_USER.DELETE:
        return (
          <WarningModal
            isLoading={isLoadingUser}
            description={`Are you sure you want to remove ${payload.firstName} ${payload.lastName}?`}
            handleClose={goBack}
            handleSubmit={() => submit(deleteUser, id)}
          />
        );
      default:
        return null;
    }
  };

  return getModal(type);
};

export default ModalSwitcher;
