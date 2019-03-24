import React, {Component} from 'react';
import Main from "/imports/leaveMgmt/LocationWiseHolidays/LocationWiseHolidays.jsx";
import LeaveApprovalForm from "/imports/leaveMgmt/leaveApproval/LeaveApprovalForm.jsx";
import LeaveBalandHistory from "/imports/leaveMgmt/leaveApproval/LeaveBalandHistory.jsx";


export const LmsLayout = ({main})=>(
	<div className="container-fluid">
	<div className="row">
		 
			<div className="col-lg-2 col-md-2 col-sm-2 col-xs-12"> 
			
			</div>

			<div className="col-lg-10 col-md-10 col-sm-10 col-xs-12"> 
		
			</div>

			<div className="col-lg-10 col-md-10 col-sm-10 col-xs-12"> 
				<div className="contentWrapper">
					{main}
				</div>
			</div>
	
			<div className="col-lg-10 col-md-10 col-sm-10 col-xs-12"> 
		
			</div>
		

	</div>
	</div>
);