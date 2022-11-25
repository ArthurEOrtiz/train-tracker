const reducer = (state = {}, action) => {
  const { map_id, stpId, staNm, rn, destNm, arrT, isApp, id} = action;

  switch (action.type){
  case 'ADD_TRAIN':
    return Object.assign({}, state, {
      [id]: {
        map_id: map_id,
        stpId: stpId,
        staNm: staNm,
        rn: rn,
        destNm: destNm,
        arrT: arrT,
        isApp: isApp,
        id: id
      }
    });
    case 'DELETE_TRAIN':
      let newState = { ...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default reducer;