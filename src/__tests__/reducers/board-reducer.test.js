import trainListReducer from '../../reducers/train-list-reducer';

describe('trainListReducer', () => {
  let action;
  const trainData = {
    map_id: "40830",
    stpId: "30162",
    staNm: "18th",
    rn: "311",
    destNm: "54th/Cermak",
    arrT: "2022-11-25T14:26:45",
    isApp: "0",
    id: 1
  };


  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(trainListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new train data to board', () =>{
    const { map_id, stpId, staNm, rn, destNm, arrT, isApp, id} = trainData;
    action = {
      type: 'ADD_TRAIN',
      map_id: map_id,
      stpId: stpId,
      staNm: staNm,
      rn: rn,
      destNm: destNm,
      arrT: arrT,
      isApp: isApp,
      id: id
    };

    expect(trainListReducer({}, action)).toEqual({
      [id] : {
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
  });
});