import * as APIUtil from '../util/pages-api-util';

export const RECEIVE_PAGES = 'RECEIVE_PAGES';
export const RECEIVE_PAGE = 'RECEIVE_PAGE';
export const REMOVE_PAGE = 'REMOVE_PAGE';
export const RECEIVE_PAGE_ERRORS = 'RECEIVE_PAGE_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

export const receivePages = (pages) => ({
  type: RECEIVE_PAGES,
  pages
});

export const receivePage = (page) => ({
  type: RECEIVE_PAGE,
  page
});

export const removePage = (pageId) => ({
  type: REMOVE_PAGE,
  pageId
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_PAGE_ERRORS,
  errors
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS
});

export const fetchPages = (userId) => (dispatch) => (
  APIUtil.fetchPages(userId).then(
    (pages) => dispatch(receivePages(pages)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const createPage = (page) => (dispatch) => (
  APIUtil.createPage(page).then(
    (page) => dispatch(receivePage(page)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const fetchPage = (pageId) => (dispatch) => (
  APIUtil.fetchPage(pageId).then(
    (page) => dispatch(receivePage(page)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const updatePage = (page) => (dispatch) => (
  APIUtil.updatePage(page).then(
    (page) => dispatch(receivePage(page)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const deletePage = (pageId) => (dispatch) => (
  APIUtil.deletePage(pageId).then(
    () => dispatch(removePage(pageId)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  )
);
