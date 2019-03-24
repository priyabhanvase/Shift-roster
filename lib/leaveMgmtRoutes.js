import React, {Component} from 'react';
import { mount } from 'react-mounter';

import {LmsLayout} from '/imports/leaveMgmt/LmsLayouts/LmsLayout.jsx';
import LocationWiseHolidays from "/imports/leaveMgmt/LocationWiseHolidays/LocationWiseHolidays.jsx";
import LeaveApprovalForm from "/imports/leaveMgmt/leaveApproval/LeaveApprovalForm.jsx";
import LeaveBalandHistory from "/imports/leaveMgmt/leaveApproval/LeaveBalandHistory.jsx";


// ===================== system Secutity==========================

// ===================== Employee Induction==========================
FlowRouter.route('/LocationWiseHolidays', {
    action: function() {
        mount(LmsLayout,{main: (<LocationWiseHolidays/>)});
    }
});

FlowRouter.route('/LeaveApprovalForm', {
    action: function() {
        mount(LmsLayout,{main: (<LeaveApprovalForm/>)});
    }
});

FlowRouter.route('/LeaveBalandHistory', {
    action: function() {
        mount(LmsLayout,{main: (<LeaveBalandHistory/>)});
    }
});