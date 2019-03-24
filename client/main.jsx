import React,{Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
/*import App from '/imports/ui/App'*/
import '/lib/leaveMgmtRoutes.js';
import '/lib/shiftRosterRoutes.js';
import "/imports/shiftMgmt/shiftRoster/shiftAllotment/shiftAllot.css";
import "/imports/shiftMgmt/shiftRoster/shiftSetting/shiftSetting.css";


Meteor.startup(() => {
  // render(<App />, document.getElementById('react-target'));

});


