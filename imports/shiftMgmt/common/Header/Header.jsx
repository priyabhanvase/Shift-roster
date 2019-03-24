import React, {Component} from 'react';
import "/imports/shiftMgmt/common/Header/header.css";
import { withTracker } from 'meteor/react-meteor-data';
// import { EmpMaster } from '/imports/shiftMgmt/shiftRoster/shiftAllotment/empMaster.js';
import { ShiftSetting } from '/imports/shiftMgmt/shiftRoster/shiftSetting/shiftSetting.js';

class Header extends Component{
	constructor(props){
		super(props);
		var empId = FlowRouter.getParam("empid");

		this.state = {
			"empId"	: empId, 
		};		

	}

	render(){
		var empHead = this.props.allEmp[0];
		console.log("head = ",empHead);
		return (
			<div className="row">
				<header className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bgAdmnLte headBar">

					<div className ="col-lg-1 col-md-4 col-sm-4 col-xs-4 row ">
						<div className ="col-lg-8 col-md-4 col-sm-4 col-xs-4 barIcon row " id="bars">
							<i className="fa fa-bars"></i>
						</div>
					</div>
							
					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 pull-right">
						<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pull-left">
							<div className ="col-lg-4 col-md-4 col-sm-4 col-xs-4 barIcon ">
								<i className="fa fa-envelope-o headicon "><span className="label label-success labelhead ">4</span></i>
							</div>
							<div className ="col-lg-4 col-md-4 col-sm-4 col-xs-4 barIcon">
								<i className="fa fa-bell-o headicon "><span className="label label-warning labelhead ">10</span></i>
							</div>
							<div className ="col-lg-4 col-md-4 col-sm-4 col-xs-4 barIcon">
								<i className="fa fa-flag-o headicon "><span className="label label-danger labelhead ">9</span></i>
							</div>
						</div>
						<div className="col-lg-6 col-md-5 col-sm-5 col-xs-12 row nameHover">
						<div className="col-lg-12 col-md-5 col-sm-5 col-xs-12">
							<div className="">
								<img src="/images/man.jpg" className=" img-responsive img-circle row imgUser"/>
							</div>
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 uname1 row">
								<strong>Dnyaneshwar</strong>
							</div>
						</div>
						</div>
						<div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 barIcon row pull-right">
							<i className="fa fa-gears"></i>
						</div>
					</div>			
				</header>
					
    		</div>
		);
	};
}

export default withTracker(()=>{
	var empIdCont = FlowRouter.getParam("empid");
	Meteor.subscribe("empData",empIdCont);

	const oneEmpData = ShiftSetting.find({}).fetch();
	console.log("headeroneEmpData = ",oneEmpData);

	return {
		"allEmp" 	: oneEmpData,
	}
})(Header);

