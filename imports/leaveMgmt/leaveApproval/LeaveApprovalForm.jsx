import React, {Component} from "react";
import DatePicker from "react-datepicker";
import LeaveBalTable from "/imports/leaveMgmt/leaveApproval/leaveBalTable/LeaveBalTable.jsx"

import "/imports/leaveMgmt/leaveApproval/leaveApproval.css";
import "react-datepicker/dist/react-datepicker.css";
import ReactTable from "react-table";
import 'react-table/react-table.css'

export default class LeaveApprovalForm extends Component{


	constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }


	render(){

		


		return(

			<div>
				<h3>Leave Forms</h3>
			  <ul className="col-lg-9 col-md-9 col-sm-12 col-xs-12 nav nav-tabs">
			    {/*<li className="active"><a href="#">Home</a></li>*/}
			    <li className="col-lg-4 text-center"><a data-toggle="tab" href="#leaveForm">Leave Form</a></li>
			    <li className="col-lg-4 text-center"><a data-toggle="tab" href="#ODForm">Outdoor Duty Form</a></li>
			    <li className="col-lg-4 text-center"><a data-toggle="tab" href="#SLForm">Short Leave Form</a></li>
			  </ul>

			  <div className="tab-content col-lg-9 col-md-9 col-sm-12 col-xs-12">
{/*------------------------------------------------------------------------------------
																			Leave Approval Form
---------------------------------------------------------------------------------------*/}
			  
			  	<div id="leaveForm" className="tab-pane fade in active col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group mt30">
				  	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					  	<div className="col-lg-4 col-md-3 col-sm-6 col-xs-12 form-group">
							  <label for="sel1">Select Leave Type</label>
							  <select className="form-control" id="sel1">
							    <option>Privelge Leave</option>
							    <option>Sick Leave</option>
							    <option>Casual Leave</option>
							    <option>Maternity Leave</option>
							    <option>Leave Without Pay</option>
							  </select>
							</div>
						</div>

						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">							
								<div className="form-group">
				          <label for="myInput">From</label>
				          <div className="input-group datetimepicker">
				             <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
				             <input name="idInput" id="idInput" className="set-due-date form-control" type="text"/>
				           </div>
				        </div>
							</div>
							
							<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">							
								<div className="form-group">
				          <label for="myInput">To</label>
				          <div className="input-group datetimepicker">
				             <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
				             <input name="idInput" id="idInput" className="set-due-date form-control" type="text"/>
				           </div>
				        </div>								
							</div>
						</div>

						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
								<label for="usr">Number of woking days</label>
	  							<input type="text" className="form-control" id="usr" />
							</div>
						</div>

						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div class="form-group">
								  <label for="comment">Reason</label>
								  <textarea class="form-control" rows="5" id="comment"></textarea>
								</div>								
							</div>
						</div>

						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<button type="submit" className="col-lg-3 col-md-3 col-sm-6 col-xs-6 btn btn-primary sbmt pull-right">Submit</button>							
							</div>
						</div>

					</div>

{/*------------------------------------------------------------------------------------
																			Outdoor Duty Form
---------------------------------------------------------------------------------------*/}

					<div id="ODForm" className="tab-pane fade in col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group mt30">
				  	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">							
								<div className="form-group">
				          <label for="myInput">From</label>
				          <div className="input-group datetimepicker">
				             <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
				             <input name="idInput" id="idInput" className="set-due-date form-control" type="text"/>
				           </div>
				        </div>
							</div>
							
							<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">							
								<div className="form-group">
				          <label for="myInput">To</label>
				          <div className="input-group datetimepicker">
				             <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
				             <input name="idInput" id="idInput" className="set-due-date form-control" type="text"/>
				           </div>
				        </div>								
							</div>
						</div>

						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">							
								<div className="form-group">
				          <label for="myInput">In Time</label>
				          <div className="input-group datetimepicker">
				             <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
				             <input name="idInput" id="idInput" className="set-due-date form-control" type="text"/>
				           </div>
				        </div>
							</div>
							
							<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">							
								<div className="form-group">
				          <label for="myInput">Out Time</label>
				          <div className="input-group datetimepicker">
				             <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
				             <input name="idInput" id="idInput" className="set-due-date form-control" type="text"/>
				           </div>
				        </div>								
							</div>

							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div class="form-group">
								  <label for="comment">Reason</label>
								  <textarea class="form-control" rows="5" id="comment"></textarea>
								</div>								
							</div>

							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<button type="submit" className="col-lg-3 col-md-3 col-sm-6 col-xs-6 btn btn-primary sbmt pull-right">Submit</button>							
							</div>
						</div>

					</div>
{/*------------------------------------------------------------------------------------
																			Sick Leave Form
---------------------------------------------------------------------------------------*/}
					<div id="SLForm" className="tab-pane fade in col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group mt30">

						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">							
								<div className="form-group">
				          <label for="myInput">Date</label>
				          <div className="input-group datetimepicker">
				             <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
				             <input name="idInput" id="idInput" className="set-due-date form-control" type="text"/>
				           </div>
				        </div>
							</div>
						</div>

				  	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">							
								<div className="form-group">
				          <label for="myInput">In Time</label>
				          <div className="input-group datetimepicker">
				             <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
				             <input name="idInput" id="idInput" className="set-due-date form-control" type="text"/>
				           </div>
				        </div>
							</div>
							
							<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">							
								<div className="form-group">
				          <label for="myInput">Out Time</label>
				          <div className="input-group datetimepicker">
				             <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
				             <input name="idInput" id="idInput" className="set-due-date form-control" type="text"/>
				           </div>
				        </div>								
							</div>
						</div>

						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div class="form-group">
								  <label for="comment">Reason</label>
								  <textarea class="form-control" rows="5" id="comment"></textarea>
								</div>								
							</div>
						</div>

						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<button type="submit" className="col-lg-3 col-md-3 col-sm-6 col-xs-6 btn btn-primary sbmt pull-right">Submit</button>							
								</div>		
						</div>
					</div>
			  </div>

{/*-------------------------------------------------------------------------------------
																	Company Holiday Block
---------------------------------------------------------------------------------------*/}			  
			  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 br1 mt30 h350 text-center">
			  		<h3>Coming Soon Company Holidays</h3>
			  	</div>	
			 	</div>

{/*-------------------------------------------------------------------------------------
																	Leave Table
---------------------------------------------------------------------------------------*/}			  
			  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb30">
					   <LeaveBalTable />
					
			  </div>
			</div>


			);
			


	};

}