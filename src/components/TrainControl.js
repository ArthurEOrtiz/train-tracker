import React from "react";
// import { connect } from 'react-redux';
// import PropTypes from "prop-types";
import ArrivalList from "./ArrivalList";


class TrainTrackerControl extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      
    }
  }

  // handleAddingTrainsToBoard = (newTrain) => {
  //   const { dispatch } = this.props;
  //   const { map_id, stpId, staNm, rn, destNm, arrT, isApp, id} = newTrain;
  //   const action = {
  //     type: 'ADD_TRAIN',
  //     map_id: map_id,
  //     stpId: stpId,
  //     staNm: staNm,
  //     rn: rn,
  //     destNm: destNm,
  //     arrT: arrT,
  //     isApp: isApp,
  //     id: id
  //   }
  //   dispatch(action);
  // }

  render() {
    return (
      <React.Fragment>
        <h1>TRAIN TRACKER CONTROL</h1>
        <ArrivalList />
      </React.Fragment>
    );
  }
}

// TrainControl.propTypes = {
//   trainList: PropTypes.object
// };

// const mapStateToProps = state => {
//   return {
//     trainList: state
//   }
// }

// TrainControl = connect(mapStateToProps)(TrainControl);

export default TrainTrackerControl