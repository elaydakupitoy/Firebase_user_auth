import React from 'react';
 
class Switcher extends React.Component {
  render() {
  	return (
        <div id="style-switcher">
            <div>
                <h3>Select your color</h3>
                 
            </div>
            <div className="bottom">
            <a href="#" className="settings"><i className="mdi mdi-settings mdi-spin"></i></a>
            </div>
        </div>
  	);
  }
}
export default Switcher;