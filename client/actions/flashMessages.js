import types from './actionTypes';

/**
 * @export
 * @param {string} message
 * @returns {object} message and action type
 */
export function addFlashMessage(message) {
  return {
    type: types.ADD_FLASH_MESSAGE,
    message
  };
}

/**
 * @export
 * @param {intger} id
 * @returns {object} id and object type
 */
export function deleteFlashMessage(id) {
  return {
    type: types.DELETE_FLASH_MESSAGE,
    id
  };
}
