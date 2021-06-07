export const createWorkspace = (workspace) => (
  $.ajax({
    url: '/api/workspaces',
    method: 'POST',
    data: { workspace }
  })
);

export const fetchWorkspace = (workspaceId) => (
  $.ajax({
    url: `api/workspaces/${workspaceId}`,
    method: 'GET'
  })
);
  
export const updateWorkspace = (workspace) => (
  $.ajax({
    url: `/api/workspaces/${workspace.id}`,
    method: 'PATCH',
    data: { workspace }
  })
);
