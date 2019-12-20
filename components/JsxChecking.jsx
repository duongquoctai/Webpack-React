import React from 'react';
import ImportChecking from './ImportChecking.jsx';
import { connect } from 'react-redux';

class JsxChecking extends React.Component {
  
  alertJsx() {
    alert('JSX work!');
  }
  render() {
    return <div>
              <button className="jsx-babel" onClick = {this.alertJsx}>Checking JSX</button>
              <ImportChecking />
            </div>;
  }
  
}
mapStateToProps = (state) => {
  console.log('aaaa',state);
};
export default connect(mapStateToProps)(JsxChecking);