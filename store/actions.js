
import { RESET, MOB_MENU } from './constants';


export const resetStoreAction = () => ({
  type: RESET,
});

const resetStore = () => async (dispatch) => {
  dispatch(resetStoreAction());
};

// mob menu

export const mobMenuAction = () => ({
  type: MOB_MENU,
});

const mobMenu = () => async (dispatch) => {
  dispatch(mobMenuAction());
};

export default {
  resetStore,
  mobMenu,
};
