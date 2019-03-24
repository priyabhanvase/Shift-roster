import React, {Component} from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css';

export default class LeaveHistoryTable extends Component{

  



  render(){
	const data = [{
									emp_id:'01',
							    lt: 'CL',
							    fd: '23/11/2019',
							    td: '27/11/2019',
							    nd: 5,
							    rem:'',
							    st: 'Granted',
							    edit: 45,
							    dlt: 75,
							  }, {
									emp_id:'02',
							    lt: 'SL',
							    fd: '23/11/2019',
							    td: '27/11/2019',
							    nd: 5,
							    rem:'',
							    st: 'Pending',
							    edit: 45,
							    dlt: 75,
							  }, {
									emp_id:'03',
							    lt: 'PL',
							    fd: '23/11/2019',
							    td: '27/11/2019',
							    nd: 5,
							    st: 'Rejected',
							    edit: 45,
							    dlt: 75,
							  }]
							 
							  const columns = [
							  {
							    Header: 'Employee ID',
							    accessor: 'emp_id' // String-based value accessors!
							  }, {
							    Header: 'Leave Type',
							    accessor: 'lt' // String-based value accessors!
							  }, {
							    Header: 'From Date',
							    accessor: 'fd',
							    /*Cell: props => <span className='number'>{props.value}</span> // Custom cell components!*/
							  }, {
							    Header: 'To Date',
							    accessor:'td'  // Custom value accessors!
							  }, {
							    Header: 'No. of Days', // Custom header components!
							    accessor: 'nd'
							  }, {
							    Header: 'Remark', // Custom header components!
							    accessor: 'remark'
							  }, {
							  	Header: 'Status',
							  	accessor: 'st' 
							  },{
							  	Header: 'Edit',
							  	accessor:'edit'
							  },{
							  	Header:'Delete',
							  	accessor:'dlt'
							  }]

			return(
				<ReactTable className="text-center -striped -highlight"
					   	showPagination={0}
					   	minRows={0}
					    data={data}
					    columns={columns}
					  />
			)		
}

}