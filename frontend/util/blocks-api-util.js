export const createBlock = (block) => (
  $.ajax({
    url: '/api/blocks',
    method: 'POST',
    data: { block }
  })
);

export const fetchBlocks = (userId) => (
  $.ajax({
    url: `api/users/${userId}/blocks`,
    method: 'GET',
  })
);

// export const fetchBlocks = (pageId) => (
//   $.ajax({
//     url: `api/pages/${pageId}/blocks`,
//     method: 'GET',
//   })
// );
  
export const fetchBlock = (blockId) => (
  $.ajax({
    url: `api/blocks/${blockId}`,
    method: 'GET'
  })
);

export const updateBlock = (block) => (
  $.ajax({
    url: `/api/blocks/${block.id}`,
    method: 'PATCH',
    data: { block }
  })
);
  
export const deleteBlock = (blockId) => (
  $.ajax({
    url: `/api/blocks/${blockId}`,
    method: 'DELETE'
  })
);
  