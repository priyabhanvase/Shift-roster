import React, {Component} from 'react';
import "/imports/leaveMgmt/LocationWiseHolidays/LocationWiseHolidays.css";

export default class LocationWiseHolidays extends Component{
	constructor(props){
		super(props);
		this.state = {
		};		
	}


	render(){
		return (
			<div className="row col-lg-10 col-lg-offset-1 col-md-10 col-sm-10 col-xs-12">
				<form>
					<div className="row col-lg-8 col-md-8 col-sm-8 col-xs-8">
		    			<div className="form-group col-lg-4">
					      <label htmlFor="sel1">Select Location</label>
					      <select className="form-control" id="sel1">
					        <option>Mumbai</option>
					        <option>Pune</option>
					        <option>Delhi</option>
					        <option>Banglore</option>
					      </select>
					      <br/>
		    			</div>

					    <div className="box col-lg-12 col-md-12 col-sm-12 col-xs-12">
					    </div>
					</div>
		  		</form>
    		</div>
		);
	};
}


