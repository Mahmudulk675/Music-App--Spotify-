export const initialState = {
  user: null,
  playList: [],
  playing: false,
  item: null,
  // token:
  //   "BQDftogXsSanGZmudOzmEXqVfr_eTckqXSgkdEJCOAwIpu6x8ONiZ22tMhNAcD_O8JxabHZ3lzIV0pWoRPzv9WoLb7maYFYIma5YoSYQLVekuJBPbe1VQsHpP3P3B-kV6OPqifVAwu64fO0Bq5uc9_vYZ6v_REeAUSk0KP8rqHql2jCm9GGD",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEAKLY":
      return {
        ...state,
        discover_weakly: action.discover_weakly,
      };
    default:
      return state;
  }
};

export default reducer;
