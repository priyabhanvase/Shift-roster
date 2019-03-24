import React, {Component} from "react";
import DatePicker from "react-datepicker";
import LeaveBalTable from "/imports/leaveMgmt/leaveApproval/leaveBalTable/LeaveBalTable.jsx"
import LeaveHistoryTable from "/imports/leaveMgmt/leaveApproval/leaveHistoryTable/LeaveHistoryTable.jsx"


import "/imports/leaveMgmt/leaveApproval/leaveApproval.css";
import "react-datepicker/dist/react-datepicker.css";
import ReactTable from "react-table";
import 'react-table/react-table.css';

export default class LeaveBalandHistory extends Component{



  render(){

		

		return(

			<div>
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb30">
					<LeaveBalTable />	   
				</div>

				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb30">
					<LeaveHistoryTable />	   
				</div>
			</div>
		)

	}

}