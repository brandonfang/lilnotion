export const createPage = (page) => (
  $.ajax({
    url: '/api/pages',
    method: 'POST',
    data: { page },
  })
);

export const fetchPages= (workspaceId) => (
  $.ajax({
    url: 'api/pages',
    method: 'GET',
    data: { workspaceId }
  })
)

export const fetchPage = (pageId) => (
  $.ajax({
    url: `api/pages/${pageId}`,
    method: 'GET',
  })
);

export const updatePage = (page) => (
  $.ajax({
    url: `/api/pages/${page.id}`,
    method: 'PATCH',
    data: { page },
  })
);
  
export const deletePage = (pageId) => (
  $.ajax({
    url: `/api/pages/${pageId}`,
    method: 'DELETE',
  })
);
  