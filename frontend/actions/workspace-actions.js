import * as APIUtil from '../util/workspaces-api-util';

export const RECEIVE_WORKSPACE = 'RECEIVE_WORKSPACE';
export const RECEIVE_WORKSPACE_ERRORS = 'RECEIVE_WORKSPACE_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

export const receiveWorkspace = (workspace) => ({
  type: RECEIVE_WORKSPACE,
  workspace
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_WORKSPACE_ERRORS,
  errors,
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS,
});

export const createWorkspace = (workspace) => (dispatch) => (
  APIUtil.createWorkspace(workspace).then(
    (workspace) => dispatch(receiveWorkspace(workspace)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const fetchWorkspace = (workspaceId) => (dispatch) => (
  APIUtil.show(workspaceId).then(
    (workspace) => dispatch(showWorkspace(workspace.id)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const updateWorkspace = (workspace) => (dispatch) =>
  APIUtil.updateWorkspace(workspace).then(
    (workspace) => dispatch(showWorkspace(workspace)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
