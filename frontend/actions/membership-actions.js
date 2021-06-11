import * as APIUtil from '../util/memberships-api-util';

export const RECEIVE_MEMBERSHIP = 'RECEIVE_MEMBERSHIP';
export const REMOVE_MEMBERSHIP = 'REMOVE_MEMBERSHIP';
export const RECEIVE_MEMBERSHIP_ERRORS = 'RECEIVE_MEMBERSHIP_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

export const receiveMembership = (membership) => ({
  type: RECEIVE_MEMBERSHIP,
  membership
});

export const removeMembership = (membershipId) => ({
  type: REMOVE_MEMBERSHIP,
  membershipId
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_MEMBERSHIP_ERRORS,
  errors
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS
});

export const createMembership = (membership) => (dispatch) => (
  APIUtil.createMembership(membership).then(
    (membership) => dispatch(receiveMembership(membership)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const fetchMembership = (membershipId) => (dispatch) => (
  APIUtil.fetchMembership(membershipId).then(
    (membership) => dispatch(receiveMembership(membership)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const updateMembership = (membership) => (dispatch) => (
  APIUtil.updateMembership(membership).then(
    (membership) => dispatch(receiveMembership(membership)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const deleteMembership = (membershipId) => (dispatch) => (
  APIUtil.deleteMembership(membershipId).then(
    () => dispatch(removeMembership(membershipId)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  )
);
