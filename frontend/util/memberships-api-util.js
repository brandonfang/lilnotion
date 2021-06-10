export const createMembership = (membership) => (
  $.ajax({
    url: '/api/memberships',
    method: 'POST',
    data: { membership }
  })
);
  
export const fetchMembership = (membershipId) => (
  $.ajax({
    url: `api/memberships/${membershipId}`,
    method: 'GET'
  })
);

export const updateMembership = (membership) => (
  $.ajax({
    url: `/api/memberships/${membership.id}`,
    method: 'PATCH',
    data: { membership }
  })
);
  
export const deleteMembership = (membershipId) => (
  $.ajax({
    url: `/api/memberships/${membershipId}`,
    method: 'DELETE'
  })
);
  