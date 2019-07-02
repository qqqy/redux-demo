import React from 'react';
import {connect} from 'react-redux';
import {changeProps} from './redux/reducer';

function App(props) {
  console.log("App Mounted:", props)
  return (
    <>Open your Console</>
  );
}

export default connect(state => state, {changeProps})(App);


// -- TO BREAK APART THAT LAST LINE, WE COULD ALSO DO IT THIS WAY --

// function mapStateToProps (state){
//   const {props} = state
//   return {props}
// }

// const mapDispatchToProps = {
//   changeProps: changeProps
// }

// -- BELOW IS THE FUNCTION THAT INJECTS PROPS INTO APP BEFORE RENDERING IT --

// const connectBabyFunction = connect(mapStateToProps, mapDispatchToProps);

// export default connectBabyFunction(App);