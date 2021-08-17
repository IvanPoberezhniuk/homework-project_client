import React from 'react';

import {
  CreateProjectModal,
  EditProjectModal,
  EditRoleModal,
  ProjectsModal,
  TeamModal,
  WarningModal,
} from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import {
  createProject,
  deleteProject,
  editProject,
  eraseCurrentProject,
  finishProject,
  startProject,
} from 'redux/modules/projects';
import { deleteUser, editUser } from 'redux/modules/users';

export const ENTITY = {
  PROJECTS: 'projects',
  USERS: 'users',
}

export const OPERATIONS = {
  EDIT: 'edit',
  CREATE: 'create',
  DELETE: 'delete',
  FINISH: 'finish',
  START: 'start',
  TEAM: 'team',
  PROJECTS: 'projects',
}


const ModalSwitcher = ({ ...other }) => {
  const history = useHistory();
  const isLoadingProject = useSelector((state) => state.projects.isLoading);
  const isLoadingUser = useSelector((state) => state.users.isLoading);

  const dispatch = useDispatch();
  const location = useLocation();
  const { entity, id, type } = useParams();
  const { payload } = location.state && location.state;
  const goBack = () => history.goBack();

  const submit = async (action, id) => {
    try {
      await dispatch(action({ id, type }));
    } finally {
      history.goBack();
    }
  };

  const getModal = (entity, type) => {
    switch (true) {
      case (entity === ENTITY.PROJECTS && type === OPERATIONS.CREATE):
        return (
          <CreateProjectModal
            isLoading={isLoadingProject}
            handleClose={goBack}
            handleSubmit={() => submit(createProject, id)}
          />
        );
      case (entity === ENTITY.PROJECTS && type === OPERATIONS.EDIT):
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
      case (entity === ENTITY.PROJECTS && type === OPERATIONS.DELETE):
        return (
          <WarningModal
            isLoading={isLoadingProject}
            description={`Are you sure you want to delete ${payload.projectName}?`}
            handleClose={goBack}
            handleSubmit={() => submit(deleteProject, id)}
          />
        );
      case (entity === ENTITY.PROJECTS && type === OPERATIONS.START):
        return (
          <WarningModal
            isLoading={isLoadingProject}
            description={`Are you sure you want to start ${payload.projectName}?`}
            handleClose={goBack}
            handleSubmit={() => submit(startProject, id)}
          />
        );
      case (entity === ENTITY.PROJECTS && type === OPERATIONS.FINISH):
        return (
          <WarningModal
            isLoading={isLoadingProject}
            description={`Are you sure you want to finish ${payload.projectName}?`}
            handleClose={goBack}
            handleSubmit={() => submit(finishProject, id)}
          />
        );
      case (entity === ENTITY.PROJECTS && type === OPERATIONS.TEAM):
        return <TeamModal id={id} handleClose={goBack} team={payload} />;
      case (entity === ENTITY.USERS && type === OPERATIONS.PROJECTS):
        return <ProjectsModal userId={id} handleClose={goBack} />;
      case (entity === ENTITY.USERS && type === OPERATIONS.EDIT):
        return (
          <EditRoleModal
            isOpen={true}
            handleSubmit={() => submit(editUser, payload)}
            handleClose={goBack}
            user={payload}
          />
        );
      case (entity === ENTITY.USERS && type === OPERATIONS.DELETE):
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

  return getModal(entity, type);
};

export default ModalSwitcher;
