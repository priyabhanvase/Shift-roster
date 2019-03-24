import React, {Component} from 'react';
import "/imports/shiftMgmt/common/Sidebar/sidebar.css";
import { withTracker } from 'meteor/react-meteor-data';
// import { EmpMaster } from '/imports/shiftMgmt/shiftRoster/shiftAllotment/empMaster.js';
import { ShiftSetting } from '/imports/shiftMgmt/shiftRoster/shiftSetting/shiftSetting.js';

class Sidebar extends Component{
	constructor(props){
		super(props);
		var empId = FlowRouter.getParam("empid");

		this.state = {
			"empId"	: empId, 
		};		

	}

	render(){
		var empSide = this.props.allEmp[0];
		console.log("side = ",empSide);

		return (
			<div className="row">
				<nav className="sidebar col-lg-12 col-md-12 col-sm-12 hidden-xs">	

					<div className="row">
						<div className ="col-lg-12 sideHeader bg-primary">
							<b>Admin</b>LTE
						</div>
					</div>

					<div className="uerDetails row">
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
							<img  src="/images/man.jpg" className="img-responsive img-circle userImg"/>
						</div>
						

						<div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 row">
							<div className="uname"><strong>Dnyaneshwar</strong></div>
							<div>
								<i className="fa fa-circle"></i>&nbsp;<small className="online">Online</small>
							</div>
									
						</div>
					</div>

					<div className="row">
	        			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
	            			<div id="imaginary_container"> 
	                			<div className="input-group stylish-input-group">
		                    		<input type="text" className="form-control frmcntrl"  placeholder="Search..." />
		                    		<span className="input-group-addon">
		                        	<button type="submit">
		                            	<span className="glyphicon glyphicon-search pull-right"></span>
		                        	</button>  
	                    			</span>
	                			</div>
	            			</div>
	        			</div>
					</div>

					<div className="row">
						<div className ="col-lg-12 col-md-12 col-sm-12 col-xs-12 mainNav">MAIN NAVIGATION</div>

					
						<div className=" col-lg-2 col-md-2 col-sm-2 col-xs-12 row nav-side-menu">
					
					        <div className="col-lg-11 col-md-12 col-sm-12 col-xs-12 row menu-list">
					  
					            <ul id="menu-content" className="menu-content collapse out">
					                <li data-toggle="collapse" data-target="#dashboard" className="collapsed ">
					                  <a href="#">
					                  	<i className="fa fa-dashboard fa-lg falgHeight"></i> Dashboard<i className="fa fa-angle-left pull-right fa-lg falgTop"></i>
					                  </a>
					                </li>

					                <ul className="sub-menu collapse" id="dashboard">
					                <a href={"/dashboard"} >
					                    <li className="active "><i className="fa fa-circle-o"></i> Dashboard V1</li>
					                </a>
					                    <li><i className="fa fa-circle-o"></i> Dashboard v2</li>
					                </ul>

					                <li  data-toggle="collapse" data-target="#products" className="collapsed ">
					                  <a href="#"><i className="fa fa-files-o fa-lg falgHeight"></i> Layout options<span className="label label-primary pull-right falgTop1">4</span></a>
					                </li>
					                <ul className="sub-menu collapse layHover" id="products">
					                  
					                    <li><a href="#"><i className="fa fa-circle-o"></i>Top Navigation</a></li>
					                    <li><a href="#"><i className="fa fa-circle-o"></i>Boxed</a></li>
					                    <li><a href="#"><i className="fa fa-circle-o"></i>Fixed</a></li>
					                    <li><a href="#"><i className="fa fa-circle-o"></i>Collapsed Sidebar</a></li>
					                   
					                </ul>

					                <li data-toggle="collapse" data-target="#service" className="collapsed">
					                  <a href="#"><i className="fa fa-th fa-lg falgHeight"></i> Widgets<span className="label label-success pull-right falgTop1">new</span></a>
					                </li>  
					              
					                <li data-toggle="collapse" data-target="#new" className="collapsed">
					                  <a href="#"><i className="fa fa-pie-chart fa-lg falgHeight"></i> Charts <i className="fa fa-angle-left pull-right fa-lg falgTop"></i></a>
					                </li>
					                <ul className="sub-menu collapse" id="new">
					                  <li><a href="#"><i className="fa fa-circle-o"></i>ChartJS</a></li>
					                  <li><a href="#"><i className="fa fa-circle-o"></i>Morris</a></li>
					                  <li><a href="#"><i className="fa fa-circle-o"></i>Flot</a></li>
					                  <li><a href="#"><i className="fa fa-circle-o"></i>Inline charts</a></li>
					                </ul>


					                  <li data-toggle="collapse" data-target="#UIElem" className="collapsed">
					                  <a href="#"><i className="fa fa-laptop fa-lg falgHeight"></i> UI Elements<i className="fa fa-angle-left pull-right fa-lg falgTop"></i></a>
					                </li>
					                <ul className="sub-menu collapse" id="UIElem">
					                  <li><a href="#"><i className="fa fa-circle-o"></i>General</a></li>
					                  <li><a href="#"><i className="fa fa-circle-o"></i>Icons</a></li>
					                  <li><a href="#"><i className="fa fa-circle-o"></i>Buttons</a></li>
					                  <li><a href="#"><i className="fa fa-circle-o"></i>Sliders</a></li>
					                  <li><a href="#"><i className="fa fa-circle-o"></i>Timeline</a></li>
					                  <li><a href="#"><i className="fa fa-circle-o"></i>Modals</a></li>
					                </ul>

					                  <li data-toggle="collapse" data-target="#form" className="collapsed">
					                  <a href="#"><i className="fa fa-edit fa-lg falgHeight"></i> Forms<i className="fa fa-angle-left pull-right fa-lg falgTop"></i></a>
					                </li>

					                <ul className="sub-menu collapse" id="form">
					                  <li><a href="#"><i className="fa fa-circle-o"></i>General Elements</a></li>
					                  <li><a href="#"><i className="fa fa-circle-o"></i>Advanced Elements</a></li>
					                  <li><a href="#"><i className="fa fa-circle-o">Editors</i></a></li>
					                </ul>

					                <li data-toggle="collapse" data-target="#Tables" className="collapsed">
					                  <a href="#"><i className="fa fa-table fa-lg falgHeight"></i> Tables<i className="fa fa-angle-left pull-right fa-lg falgTop"></i></a>
					                </li>
					                <ul className="sub-menu collapse" id="Tables">
					                  <li><a href="#"><i className="fa fa-circle-o"></i>Simple tables</a></li>
					                  <li><a href="#"><i className="fa fa-circle-o"></i>Data tables</a></li>
					                </ul>

					                <li data-toggle="collapse" data-target="#Calendar" className="collapsed">
					                  <a href="#"><i className="fa fa-calendar fa-lg falgHeight"></i> Calendar<span className="label label-danger pull-right falgTop1">3</span><span className="label label-primary pull-right falgTop1">17</span></a>
					                </li>
					                
					                <li data-toggle="collapse" data-target="#Mailbox" className="collapsed">
					                  <a href="#"><i className="fa fa-envelope fa-lg falgHeight"></i> Mailbox<span className="label label-warning pull-right falgTop1">12</span><span className="label label-success pull-right falgTop1">16</span><span className="label label-danger pull-right falgTop1">5</span></a>
					                </li>
					                <ul className="sub-menu collapse" id="Mailbox">
					                  <li><a href="#"><i className="fa fa-circle-o"></i>Inbox</a></li>
					                  <li><a href="#"><i className="fa fa-circle-o"></i>Compose</a></li>
					                  <li><a href="#"><i className="fa fa-circle-o"></i>Read</a></li>
					              	</ul>
					                
					                <li data-toggle="collapse" data-target="#Examples" className="collapsed">
					                  <a href="#"><i className="fa fa-folder fa-lg falgHeight"></i> Examples<i className="fa fa-angle-left pull-right fa-lg falgTop"></i></a>
					                </li>
					                <ul className="sub-menu collapse" id="Examples">
					                  <li><a href="#"><i className="fa fa-circle-o"></i>Invoice</a></li>
					                  <li><a href="#"><i className="fa fa-circle-o"></i>Profile</a></li>
					                  <li><a href="#"><i className="fa fa-circle-o"></i>Login</a></li>
					                  <li><a href="#"><i className="fa fa-circle-o"></i>Register</a></li>
					                  <li><a href="#"><i className="fa fa-circle-o"></i>Lockscreen</a></li>
					                  <li><a href="#"><i className="fa fa-circle-o"></i>404 Error</a></li>
					                  <li><a href="#"><i className="fa fa-circle-o"></i>500 Error</a></li>
					                  <li><a href="#"><i className="fa fa-circle-o"></i>Blank Page</a></li>
					                  <li><a href="#"><i className="fa fa-circle-o"></i>Pace Page</a></li>
					                </ul>

					                <li data-toggle="collapse" data-target="#Multilevel" className="collapsed">
					                  <a href="#"><i className="fa fa-share fa-lg falgHeight"></i> Multilevel<i className="fa fa-angle-left pull-right fa-lg falgTop"></i></a>
					                </li>
					                <ul className="sub-menu collapse" id="Multilevel">
					                  <li><a href="#"><i className="fa fa-circle-o"></i>Level One</a></li>
					                  <li><a href="#"><i className="fa fa-circle-o"></i>Level Two</a></li>
					                  <li><a href="#"><i className="fa fa-circle-o"></i>Level Three</a></li>
					                </ul>

					                <li data-toggle="collapse" data-target="#Documentation" className="collapsed">
					                  <a href="#"><i className="fa fa-book fa-lg falgHeight"></i> Documentation<i className="fa fa-angle-left pull-right fa-lg falgTop"></i></a>
					                </li>
					          
					            </ul>
					     	</div>
						</div>				
					</div>

	    		</nav>	
    		</div>
		);
	};
}

export default withTracker(()=>{
	var empIdCont = FlowRouter.getParam("empid");
	Meteor.subscribe("empData",empIdCont);

	const oneEmpData = ShiftSetting.find({}).fetch();
	console.log("sideoneEmpData = ",oneEmpData);

	return {
		"allEmp" 	: oneEmpData,
	}
})(Sidebar);

