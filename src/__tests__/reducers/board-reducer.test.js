import trainListReducer from '../../reducers/train-list-reducer';

describe('trainListReducer', () => {
  const currentState = {
    1: {
      map_id: "40830",
      stpId: "30162",
      staNm: "18th",
      rn: "311",
      destNm: "54th/Cermak",
      arrT: "2022-11-25T14:26:45",
      isApp: "0",
      id: 1
    }, 2: {
      map_id: "40830",
      stpId: "30162",
      staNm: "18th",
      rn: "309",
      destNm: "54th/Cermak",
      arrT: "2022-11-25T14:47:55",
      isApp: "0",
      id: 2
    }
  }


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

  test('Should successfully delete a train', () => {
    action = {
      type: 'DELETE_TRAIN',
      id: 1
    };

    expect(trainListReducer(currentState, action)).toEqual({
      2: {
        map_id: "40830",
        stpId: "30162",
        staNm: "18th",
        rn: "309",
        destNm: "54th/Cermak",
        arrT: "2022-11-25T14:47:55",
        isApp: "0",
        id: 2
      }
    });
  });
  
});