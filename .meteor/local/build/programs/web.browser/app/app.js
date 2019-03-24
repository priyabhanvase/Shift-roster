var require = meteorInstall({"lib":{"leaveMgmtRoutes.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// lib/leaveMgmtRoutes.js                                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let mount;
module.link("react-mounter", {
  mount(v) {
    mount = v;
  }

}, 1);
let LmsLayout;
module.link("/imports/leaveMgmt/LmsLayouts/LmsLayout.jsx", {
  LmsLayout(v) {
    LmsLayout = v;
  }

}, 2);
let LocationWiseHolidays;
module.link("/imports/leaveMgmt/LocationWiseHolidays/LocationWiseHolidays.jsx", {
  default(v) {
    LocationWiseHolidays = v;
  }

}, 3);
let LeaveApprovalForm;
module.link("/imports/leaveMgmt/leaveApproval/LeaveApprovalForm.jsx", {
  default(v) {
    LeaveApprovalForm = v;
  }

}, 4);
let LeaveBalandHistory;
module.link("/imports/leaveMgmt/leaveApproval/LeaveBalandHistory.jsx", {
  default(v) {
    LeaveBalandHistory = v;
  }

}, 5);
// ===================== system Secutity==========================
// ===================== Employee Induction==========================
FlowRouter.route('/LocationWiseHolidays', {
  action: function () {
    mount(LmsLayout, {
      main: React.createElement(LocationWiseHolidays, null)
    });
  }
});
FlowRouter.route('/LeaveApprovalForm', {
  action: function () {
    mount(LmsLayout, {
      main: React.createElement(LeaveApprovalForm, null)
    });
  }
});
FlowRouter.route('/LeaveBalandHistory', {
  action: function () {
    mount(LmsLayout, {
      main: React.createElement(LeaveBalandHistory, null)
    });
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"shiftRosterRoutes.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// lib/shiftRosterRoutes.js                                                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let mount;
module.link("react-mounter", {
  mount(v) {
    mount = v;
  }

}, 1);
let AuthLayout;
module.link("/imports/shiftMgmt/shiftRosterLayouts/shiftRosterLayout.jsx", {
  AuthLayout(v) {
    AuthLayout = v;
  }

}, 2);
let ShiftSetting;
module.link("/imports/shiftMgmt/shiftRoster/shiftSetting/shiftSetting.jsx", {
  default(v) {
    ShiftSetting = v;
  }

}, 3);
let ShiftAllot;
module.link("/imports/shiftMgmt/shiftRoster/shiftAllotment/shiftAllot.jsx", {
  default(v) {
    ShiftAllot = v;
  }

}, 4);
let EmpBasicInfo;
module.link("/imports/shiftMgmt/shiftRoster/empTemp/empBasicInfo.jsx", {
  default(v) {
    EmpBasicInfo = v;
  }

}, 5);
//============================================= Emp Basic Info ==============================================
FlowRouter.route('/shiftSetting', {
  action: function () {
    mount(AuthLayout, {
      main: React.createElement(ShiftSetting, null)
    });
  }
});
FlowRouter.route('/empInfo', {
  action: function () {
    mount(AuthLayout, {
      main: React.createElement(EmpBasicInfo, null)
    });
  }
});
FlowRouter.route('/shiftAllot', {
  action: function () {
    mount(AuthLayout, {
      main: React.createElement(ShiftAllot, null)
    });
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"imports":{"leaveMgmt":{"leaveApproval":{"leaveBalTable":{"LeaveBalTable.css":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/leaveMgmt/leaveApproval/leaveBalTable/LeaveBalTable.css                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.exports = require("meteor/modules").addStyles(
  ".ReactTable .rt-th{\n\tbackground-color: #3e4551 !important;\n\tcolor: #fff;\n\tfont-family: Montserrat-Regular;\n\tfont-size: 14px;\n}\n\n.ReactTable .rt-td{\n\tcolor: #333;\n\tfont-family: Montserrat-Regular;\n\tfont-size: 14px;\n}\n\n"
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"LeaveBalTable.jsx":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/leaveMgmt/leaveApproval/leaveBalTable/LeaveBalTable.jsx                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  default: () => LeaveBalTable
});
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let ReactTable;
module.link("react-table", {
  default(v) {
    ReactTable = v;
  }

}, 1);
module.link("react-table/react-table.css");
module.link("/imports/leaveMgmt/leaveApproval/leaveBalTable/LeaveBalTable.css");

class LeaveBalTable extends Component {
  render() {
    const data = [{
      lt: 'Total Leaves',
      pl: 12,
      sl: 3,
      cl: 5,
      ml: 90,
      lwp: 10
    }, {
      lt: 'Leaves Taken',
      pl: 7,
      sl: 0,
      cl: 3,
      ml: 0,
      lwp: 2
    }, {
      lt: 'Leave Balance',
      pl: 5,
      sl: 3,
      cl: 2,
      ml: 90,
      lwp: 8
    }];
    const columns = [{
      Header: 'Leave Type',
      accessor: 'lt' // String-based value accessors!

    }, {
      Header: 'PL',
      accessor: 'pl' // String-based value accessors!

    }, {
      Header: 'SL',
      accessor: 'cl'
      /*Cell: props => <span className='number'>{props.value}</span> // Custom cell components!*/

    }, {
      Header: 'CL',
      accessor: 'cl' // Custom value accessors!

    }, {
      Header: 'ML',
      // Custom header components!
      accessor: 'ml'
    }, {
      Header: 'LWP',
      // Custom header components!
      accessor: 'lwp'
    }];
    return React.createElement(ReactTable, {
      className: "text-center -striped -highlight lbt",
      showPagination: 0,
      minRows: 0,
      data: data,
      columns: columns
    });
  }

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"leaveHistoryTable":{"LeaveHistoryTable.jsx":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/leaveMgmt/leaveApproval/leaveHistoryTable/LeaveHistoryTable.jsx                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  default: () => LeaveHistoryTable
});
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let ReactTable;
module.link("react-table", {
  default(v) {
    ReactTable = v;
  }

}, 1);
module.link("react-table/react-table.css");

class LeaveHistoryTable extends Component {
  render() {
    const data = [{
      emp_id: '01',
      lt: 'CL',
      fd: '23/11/2019',
      td: '27/11/2019',
      nd: 5,
      rem: '',
      st: 'Granted',
      edit: 45,
      dlt: 75
    }, {
      emp_id: '02',
      lt: 'SL',
      fd: '23/11/2019',
      td: '27/11/2019',
      nd: 5,
      rem: '',
      st: 'Pending',
      edit: 45,
      dlt: 75
    }, {
      emp_id: '03',
      lt: 'PL',
      fd: '23/11/2019',
      td: '27/11/2019',
      nd: 5,
      st: 'Rejected',
      edit: 45,
      dlt: 75
    }];
    const columns = [{
      Header: 'Employee ID',
      accessor: 'emp_id' // String-based value accessors!

    }, {
      Header: 'Leave Type',
      accessor: 'lt' // String-based value accessors!

    }, {
      Header: 'From Date',
      accessor: 'fd'
      /*Cell: props => <span className='number'>{props.value}</span> // Custom cell components!*/

    }, {
      Header: 'To Date',
      accessor: 'td' // Custom value accessors!

    }, {
      Header: 'No. of Days',
      // Custom header components!
      accessor: 'nd'
    }, {
      Header: 'Remark',
      // Custom header components!
      accessor: 'remark'
    }, {
      Header: 'Status',
      accessor: 'st'
    }, {
      Header: 'Edit',
      accessor: 'edit'
    }, {
      Header: 'Delete',
      accessor: 'dlt'
    }];
    return React.createElement(ReactTable, {
      className: "text-center -striped -highlight",
      showPagination: 0,
      minRows: 0,
      data: data,
      columns: columns
    });
  }

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"LeaveApprovalForm.jsx":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/leaveMgmt/leaveApproval/LeaveApprovalForm.jsx                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  default: () => LeaveApprovalForm
});
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let DatePicker;
module.link("react-datepicker", {
  default(v) {
    DatePicker = v;
  }

}, 1);
let LeaveBalTable;
module.link("/imports/leaveMgmt/leaveApproval/leaveBalTable/LeaveBalTable.jsx", {
  default(v) {
    LeaveBalTable = v;
  }

}, 2);
module.link("/imports/leaveMgmt/leaveApproval/leaveApproval.css");
module.link("react-datepicker/dist/react-datepicker.css");
let ReactTable;
module.link("react-table", {
  default(v) {
    ReactTable = v;
  }

}, 3);
module.link("react-table/react-table.css");

class LeaveApprovalForm extends Component {
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

  render() {
    return React.createElement("div", null, React.createElement("h3", null, "Leave Forms"), React.createElement("ul", {
      className: "col-lg-9 col-md-9 col-sm-12 col-xs-12 nav nav-tabs"
    }, React.createElement("li", {
      className: "col-lg-4 text-center"
    }, React.createElement("a", {
      "data-toggle": "tab",
      href: "#leaveForm"
    }, "Leave Form")), React.createElement("li", {
      className: "col-lg-4 text-center"
    }, React.createElement("a", {
      "data-toggle": "tab",
      href: "#ODForm"
    }, "Outdoor Duty Form")), React.createElement("li", {
      className: "col-lg-4 text-center"
    }, React.createElement("a", {
      "data-toggle": "tab",
      href: "#SLForm"
    }, "Short Leave Form"))), React.createElement("div", {
      className: "tab-content col-lg-9 col-md-9 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      id: "leaveForm",
      className: "tab-pane fade in active col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group mt30"
    }, React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      className: "col-lg-4 col-md-3 col-sm-6 col-xs-12 form-group"
    }, React.createElement("label", {
      for: "sel1"
    }, "Select Leave Type"), React.createElement("select", {
      className: "form-control",
      id: "sel1"
    }, React.createElement("option", null, "Privelge Leave"), React.createElement("option", null, "Sick Leave"), React.createElement("option", null, "Casual Leave"), React.createElement("option", null, "Maternity Leave"), React.createElement("option", null, "Leave Without Pay")))), React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      className: "col-lg-4 col-md-6 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      className: "form-group"
    }, React.createElement("label", {
      for: "myInput"
    }, "From"), React.createElement("div", {
      className: "input-group datetimepicker"
    }, React.createElement("span", {
      className: "input-group-addon"
    }, React.createElement("i", {
      className: "fa fa-calendar"
    })), React.createElement("input", {
      name: "idInput",
      id: "idInput",
      className: "set-due-date form-control",
      type: "text"
    })))), React.createElement("div", {
      className: "col-lg-4 col-md-6 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      className: "form-group"
    }, React.createElement("label", {
      for: "myInput"
    }, "To"), React.createElement("div", {
      className: "input-group datetimepicker"
    }, React.createElement("span", {
      className: "input-group-addon"
    }, React.createElement("i", {
      className: "fa fa-calendar"
    })), React.createElement("input", {
      name: "idInput",
      id: "idInput",
      className: "set-due-date form-control",
      type: "text"
    }))))), React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      className: "col-lg-4 col-md-6 col-sm-12 col-xs-12"
    }, React.createElement("label", {
      for: "usr"
    }, "Number of woking days"), React.createElement("input", {
      type: "text",
      className: "form-control",
      id: "usr"
    }))), React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      class: "form-group"
    }, React.createElement("label", {
      for: "comment"
    }, "Reason"), React.createElement("textarea", {
      class: "form-control",
      rows: "5",
      id: "comment"
    })))), React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
    }, React.createElement("button", {
      type: "submit",
      className: "col-lg-3 col-md-3 col-sm-6 col-xs-6 btn btn-primary sbmt pull-right"
    }, "Submit")))), React.createElement("div", {
      id: "ODForm",
      className: "tab-pane fade in col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group mt30"
    }, React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      className: "col-lg-4 col-md-6 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      className: "form-group"
    }, React.createElement("label", {
      for: "myInput"
    }, "From"), React.createElement("div", {
      className: "input-group datetimepicker"
    }, React.createElement("span", {
      className: "input-group-addon"
    }, React.createElement("i", {
      className: "fa fa-calendar"
    })), React.createElement("input", {
      name: "idInput",
      id: "idInput",
      className: "set-due-date form-control",
      type: "text"
    })))), React.createElement("div", {
      className: "col-lg-4 col-md-6 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      className: "form-group"
    }, React.createElement("label", {
      for: "myInput"
    }, "To"), React.createElement("div", {
      className: "input-group datetimepicker"
    }, React.createElement("span", {
      className: "input-group-addon"
    }, React.createElement("i", {
      className: "fa fa-calendar"
    })), React.createElement("input", {
      name: "idInput",
      id: "idInput",
      className: "set-due-date form-control",
      type: "text"
    }))))), React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      className: "col-lg-4 col-md-6 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      className: "form-group"
    }, React.createElement("label", {
      for: "myInput"
    }, "In Time"), React.createElement("div", {
      className: "input-group datetimepicker"
    }, React.createElement("span", {
      className: "input-group-addon"
    }, React.createElement("i", {
      className: "fa fa-calendar"
    })), React.createElement("input", {
      name: "idInput",
      id: "idInput",
      className: "set-due-date form-control",
      type: "text"
    })))), React.createElement("div", {
      className: "col-lg-4 col-md-6 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      className: "form-group"
    }, React.createElement("label", {
      for: "myInput"
    }, "Out Time"), React.createElement("div", {
      className: "input-group datetimepicker"
    }, React.createElement("span", {
      className: "input-group-addon"
    }, React.createElement("i", {
      className: "fa fa-calendar"
    })), React.createElement("input", {
      name: "idInput",
      id: "idInput",
      className: "set-due-date form-control",
      type: "text"
    })))), React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      class: "form-group"
    }, React.createElement("label", {
      for: "comment"
    }, "Reason"), React.createElement("textarea", {
      class: "form-control",
      rows: "5",
      id: "comment"
    }))), React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
    }, React.createElement("button", {
      type: "submit",
      className: "col-lg-3 col-md-3 col-sm-6 col-xs-6 btn btn-primary sbmt pull-right"
    }, "Submit")))), React.createElement("div", {
      id: "SLForm",
      className: "tab-pane fade in col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group mt30"
    }, React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      className: "col-lg-4 col-md-6 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      className: "form-group"
    }, React.createElement("label", {
      for: "myInput"
    }, "Date"), React.createElement("div", {
      className: "input-group datetimepicker"
    }, React.createElement("span", {
      className: "input-group-addon"
    }, React.createElement("i", {
      className: "fa fa-calendar"
    })), React.createElement("input", {
      name: "idInput",
      id: "idInput",
      className: "set-due-date form-control",
      type: "text"
    }))))), React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      className: "col-lg-4 col-md-6 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      className: "form-group"
    }, React.createElement("label", {
      for: "myInput"
    }, "In Time"), React.createElement("div", {
      className: "input-group datetimepicker"
    }, React.createElement("span", {
      className: "input-group-addon"
    }, React.createElement("i", {
      className: "fa fa-calendar"
    })), React.createElement("input", {
      name: "idInput",
      id: "idInput",
      className: "set-due-date form-control",
      type: "text"
    })))), React.createElement("div", {
      className: "col-lg-4 col-md-6 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      className: "form-group"
    }, React.createElement("label", {
      for: "myInput"
    }, "Out Time"), React.createElement("div", {
      className: "input-group datetimepicker"
    }, React.createElement("span", {
      className: "input-group-addon"
    }, React.createElement("i", {
      className: "fa fa-calendar"
    })), React.createElement("input", {
      name: "idInput",
      id: "idInput",
      className: "set-due-date form-control",
      type: "text"
    }))))), React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      class: "form-group"
    }, React.createElement("label", {
      for: "comment"
    }, "Reason"), React.createElement("textarea", {
      class: "form-control",
      rows: "5",
      id: "comment"
    })))), React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
    }, React.createElement("button", {
      type: "submit",
      className: "col-lg-3 col-md-3 col-sm-6 col-xs-6 btn btn-primary sbmt pull-right"
    }, "Submit"))))), React.createElement("div", {
      className: "col-lg-3 col-md-3 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 br1 mt30 h350 text-center"
    }, React.createElement("h3", null, "Coming Soon Company Holidays"))), React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 mb30"
    }, React.createElement(LeaveBalTable, null)));
  }

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"LeaveBalandHistory.jsx":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/leaveMgmt/leaveApproval/LeaveBalandHistory.jsx                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  default: () => LeaveBalandHistory
});
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let DatePicker;
module.link("react-datepicker", {
  default(v) {
    DatePicker = v;
  }

}, 1);
let LeaveBalTable;
module.link("/imports/leaveMgmt/leaveApproval/leaveBalTable/LeaveBalTable.jsx", {
  default(v) {
    LeaveBalTable = v;
  }

}, 2);
let LeaveHistoryTable;
module.link("/imports/leaveMgmt/leaveApproval/leaveHistoryTable/LeaveHistoryTable.jsx", {
  default(v) {
    LeaveHistoryTable = v;
  }

}, 3);
module.link("/imports/leaveMgmt/leaveApproval/leaveApproval.css");
module.link("react-datepicker/dist/react-datepicker.css");
let ReactTable;
module.link("react-table", {
  default(v) {
    ReactTable = v;
  }

}, 4);
module.link("react-table/react-table.css");

class LeaveBalandHistory extends Component {
  render() {
    return React.createElement("div", null, React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 mb30"
    }, React.createElement(LeaveBalTable, null)), React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 mb30"
    }, React.createElement(LeaveHistoryTable, null)));
  }

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"leaveApproval.css":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/leaveMgmt/leaveApproval/leaveApproval.css                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.exports = require("meteor/modules").addStyles(
  ".fz14{\n\tfont-size: 14px;\n}\n\n.mt30{\n\tmargin-top: 30px;\n}\n\n.sbmt:hover{\n\tbackground-color: #337ab7;\n\tborder:1px solid #337ab7;\n}\n\n.mb30{\n\tmargin-bottom:30px;\n}\n\n.h350{\n\theight: 350px;\n}\n\n.br1{\n\tborder:1px solid #979797;\n}"
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"LmsLayouts":{"LmsLayout.jsx":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/leaveMgmt/LmsLayouts/LmsLayout.jsx                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  LmsLayout: () => LmsLayout
});
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let Main;
module.link("/imports/leaveMgmt/LocationWiseHolidays/LocationWiseHolidays.jsx", {
  default(v) {
    Main = v;
  }

}, 1);
let LeaveApprovalForm;
module.link("/imports/leaveMgmt/leaveApproval/LeaveApprovalForm.jsx", {
  default(v) {
    LeaveApprovalForm = v;
  }

}, 2);
let LeaveBalandHistory;
module.link("/imports/leaveMgmt/leaveApproval/LeaveBalandHistory.jsx", {
  default(v) {
    LeaveBalandHistory = v;
  }

}, 3);

const LmsLayout = (_ref) => {
  let {
    main
  } = _ref;
  return React.createElement("div", {
    className: "container-fluid"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-lg-2 col-md-2 col-sm-2 col-xs-12"
  }), React.createElement("div", {
    className: "col-lg-10 col-md-10 col-sm-10 col-xs-12"
  }), React.createElement("div", {
    className: "col-lg-10 col-md-10 col-sm-10 col-xs-12"
  }, React.createElement("div", {
    className: "contentWrapper"
  }, main)), React.createElement("div", {
    className: "col-lg-10 col-md-10 col-sm-10 col-xs-12"
  })));
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"LocationWiseHolidays":{"LocationWiseHolidays.css":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/leaveMgmt/LocationWiseHolidays/LocationWiseHolidays.css                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.exports = require("meteor/modules").addStyles(
  ".box{\n\theight:200px;\n\tborder: 3px solid grey;\n}"
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"LocationWiseHolidays.jsx":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/leaveMgmt/LocationWiseHolidays/LocationWiseHolidays.jsx                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  default: () => LocationWiseHolidays
});
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
module.link("/imports/leaveMgmt/LocationWiseHolidays/LocationWiseHolidays.css");

class LocationWiseHolidays extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return React.createElement("div", {
      className: "row col-lg-10 col-lg-offset-1 col-md-10 col-sm-10 col-xs-12"
    }, React.createElement("form", null, React.createElement("div", {
      className: "row col-lg-8 col-md-8 col-sm-8 col-xs-8"
    }, React.createElement("div", {
      className: "form-group col-lg-4"
    }, React.createElement("label", {
      htmlFor: "sel1"
    }, "Select Location"), React.createElement("select", {
      className: "form-control",
      id: "sel1"
    }, React.createElement("option", null, "Mumbai"), React.createElement("option", null, "Pune"), React.createElement("option", null, "Delhi"), React.createElement("option", null, "Banglore")), React.createElement("br", null)), React.createElement("div", {
      className: "box col-lg-12 col-md-12 col-sm-12 col-xs-12"
    }))));
  }

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"shiftMgmt":{"common":{"Footer":{"Footer.jsx":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/shiftMgmt/common/Footer/Footer.jsx                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  default: () => Footer
});
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
module.link("/imports/shiftMgmt/common/Footer/footer.css");

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return React.createElement("div", {
      className: "row"
    }, React.createElement("footer", {
      className: "footerComp bg-success"
    }));
  }

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"footer.css":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/shiftMgmt/common/Footer/footer.css                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.exports = require("meteor/modules").addStyles(
  ".footerComp{\n\theight: 50px;\n\t/*margin-top: 540px;*/\n}"
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"Header":{"Header.jsx":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/shiftMgmt/common/Header/Header.jsx                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
module.link("/imports/shiftMgmt/common/Header/header.css");
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 1);
let ShiftSetting;
module.link("/imports/shiftMgmt/shiftRoster/shiftSetting/shiftSetting.js", {
  ShiftSetting(v) {
    ShiftSetting = v;
  }

}, 2);

class Header extends Component {
  constructor(props) {
    super(props);
    var empId = FlowRouter.getParam("empid");
    this.state = {
      "empId": empId
    };
  }

  render() {
    var empHead = this.props.allEmp[0];
    console.log("head = ", empHead);
    return React.createElement("div", {
      className: "row"
    }, React.createElement("header", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 bgAdmnLte headBar"
    }, React.createElement("div", {
      className: "col-lg-1 col-md-4 col-sm-4 col-xs-4 row "
    }, React.createElement("div", {
      className: "col-lg-8 col-md-4 col-sm-4 col-xs-4 barIcon row ",
      id: "bars"
    }, React.createElement("i", {
      className: "fa fa-bars"
    }))), React.createElement("div", {
      className: "col-lg-4 col-md-4 col-sm-4 col-xs-12 pull-right"
    }, React.createElement("div", {
      className: "col-lg-6 col-md-6 col-sm-6 col-xs-12 pull-left"
    }, React.createElement("div", {
      className: "col-lg-4 col-md-4 col-sm-4 col-xs-4 barIcon "
    }, React.createElement("i", {
      className: "fa fa-envelope-o headicon "
    }, React.createElement("span", {
      className: "label label-success labelhead "
    }, "4"))), React.createElement("div", {
      className: "col-lg-4 col-md-4 col-sm-4 col-xs-4 barIcon"
    }, React.createElement("i", {
      className: "fa fa-bell-o headicon "
    }, React.createElement("span", {
      className: "label label-warning labelhead "
    }, "10"))), React.createElement("div", {
      className: "col-lg-4 col-md-4 col-sm-4 col-xs-4 barIcon"
    }, React.createElement("i", {
      className: "fa fa-flag-o headicon "
    }, React.createElement("span", {
      className: "label label-danger labelhead "
    }, "9")))), React.createElement("div", {
      className: "col-lg-6 col-md-5 col-sm-5 col-xs-12 row nameHover"
    }, React.createElement("div", {
      className: "col-lg-12 col-md-5 col-sm-5 col-xs-12"
    }, React.createElement("div", {
      className: ""
    }, React.createElement("img", {
      src: "/images/man.jpg",
      className: " img-responsive img-circle row imgUser"
    })), React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 uname1 row"
    }, React.createElement("strong", null, "Dnyaneshwar")))), React.createElement("div", {
      className: "col-lg-1 col-md-1 col-sm-1 col-xs-12 barIcon row pull-right"
    }, React.createElement("i", {
      className: "fa fa-gears"
    })))));
  }

}

module.exportDefault(withTracker(() => {
  var empIdCont = FlowRouter.getParam("empid");
  Meteor.subscribe("empData", empIdCont);
  const oneEmpData = ShiftSetting.find({}).fetch();
  console.log("headeroneEmpData = ", oneEmpData);
  return {
    "allEmp": oneEmpData
  };
})(Header));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"header.css":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/shiftMgmt/common/Header/header.css                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.exports = require("meteor/modules").addStyles(
  ".headerComp{\n\theight: 60px;\n}\n.uname1{\n\tpadding-top: 18px;\n\tfont-size: 12px;\n\tcolor:#fff;\n  margin-left: 5px;\n  width: 150px;\n}\n.imgUser{\n\theight: 25px;\n\tmargin-top: 15px;\n\tfloat: left;\n}\n.bgAdmnLte{\n  background-color: #3C8DBC;\n}\n.headBar,.nameHover{\n  height: 50px;\n}\n.barIcon{\n\theight: 50px;\n\tpadding: 15px;\n\tfont-size: 14px;\n  color: white;\n}\n.barIcon:hover,.nameHover:hover {\n  background-color: #357CA5;\n  cursor: pointer;\n}\n.headicon{\n  font-size: 13px;\n  font-weight: bold;\n  padding-top: 0px;\n  color: #fff;\n}\n.labelhead{\n  position: absolute;\n  top: 11px;\n  text-align: center;\n  font-size: 9px;\n  padding: 2px 3px;\n  line-height: 0.9;\n}\n\n"
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"Sidebar":{"Sidebar.jsx":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/shiftMgmt/common/Sidebar/Sidebar.jsx                                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
module.link("/imports/shiftMgmt/common/Sidebar/sidebar.css");
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 1);
let ShiftSetting;
module.link("/imports/shiftMgmt/shiftRoster/shiftSetting/shiftSetting.js", {
  ShiftSetting(v) {
    ShiftSetting = v;
  }

}, 2);

class Sidebar extends Component {
  constructor(props) {
    super(props);
    var empId = FlowRouter.getParam("empid");
    this.state = {
      "empId": empId
    };
  }

  render() {
    var empSide = this.props.allEmp[0];
    console.log("side = ", empSide);
    return React.createElement("div", {
      className: "row"
    }, React.createElement("nav", {
      className: "sidebar col-lg-12 col-md-12 col-sm-12 hidden-xs"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col-lg-12 sideHeader bg-primary"
    }, React.createElement("b", null, "Admin"), "LTE")), React.createElement("div", {
      className: "uerDetails row"
    }, React.createElement("div", {
      className: "col-lg-4 col-md-4 col-sm-4 col-xs-4"
    }, React.createElement("img", {
      src: "/images/man.jpg",
      className: "img-responsive img-circle userImg"
    })), React.createElement("div", {
      className: "col-lg-8 col-md-8 col-sm-8 col-xs-8 row"
    }, React.createElement("div", {
      className: "uname"
    }, React.createElement("strong", null, "Dnyaneshwar")), React.createElement("div", null, React.createElement("i", {
      className: "fa fa-circle"
    }), "\xA0", React.createElement("small", {
      className: "online"
    }, "Online")))), React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      id: "imaginary_container"
    }, React.createElement("div", {
      className: "input-group stylish-input-group"
    }, React.createElement("input", {
      type: "text",
      className: "form-control frmcntrl",
      placeholder: "Search..."
    }), React.createElement("span", {
      className: "input-group-addon"
    }, React.createElement("button", {
      type: "submit"
    }, React.createElement("span", {
      className: "glyphicon glyphicon-search pull-right"
    }))))))), React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 mainNav"
    }, "MAIN NAVIGATION"), React.createElement("div", {
      className: " col-lg-2 col-md-2 col-sm-2 col-xs-12 row nav-side-menu"
    }, React.createElement("div", {
      className: "col-lg-11 col-md-12 col-sm-12 col-xs-12 row menu-list"
    }, React.createElement("ul", {
      id: "menu-content",
      className: "menu-content collapse out"
    }, React.createElement("li", {
      "data-toggle": "collapse",
      "data-target": "#dashboard",
      className: "collapsed "
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-dashboard fa-lg falgHeight"
    }), " Dashboard", React.createElement("i", {
      className: "fa fa-angle-left pull-right fa-lg falgTop"
    }))), React.createElement("ul", {
      className: "sub-menu collapse",
      id: "dashboard"
    }, React.createElement("a", {
      href: "/dashboard"
    }, React.createElement("li", {
      className: "active "
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), " Dashboard V1")), React.createElement("li", null, React.createElement("i", {
      className: "fa fa-circle-o"
    }), " Dashboard v2")), React.createElement("li", {
      "data-toggle": "collapse",
      "data-target": "#products",
      className: "collapsed "
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-files-o fa-lg falgHeight"
    }), " Layout options", React.createElement("span", {
      className: "label label-primary pull-right falgTop1"
    }, "4"))), React.createElement("ul", {
      className: "sub-menu collapse layHover",
      id: "products"
    }, React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Top Navigation")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Boxed")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Fixed")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Collapsed Sidebar"))), React.createElement("li", {
      "data-toggle": "collapse",
      "data-target": "#service",
      className: "collapsed"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-th fa-lg falgHeight"
    }), " Widgets", React.createElement("span", {
      className: "label label-success pull-right falgTop1"
    }, "new"))), React.createElement("li", {
      "data-toggle": "collapse",
      "data-target": "#new",
      className: "collapsed"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-pie-chart fa-lg falgHeight"
    }), " Charts ", React.createElement("i", {
      className: "fa fa-angle-left pull-right fa-lg falgTop"
    }))), React.createElement("ul", {
      className: "sub-menu collapse",
      id: "new"
    }, React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "ChartJS")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Morris")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Flot")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Inline charts"))), React.createElement("li", {
      "data-toggle": "collapse",
      "data-target": "#UIElem",
      className: "collapsed"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-laptop fa-lg falgHeight"
    }), " UI Elements", React.createElement("i", {
      className: "fa fa-angle-left pull-right fa-lg falgTop"
    }))), React.createElement("ul", {
      className: "sub-menu collapse",
      id: "UIElem"
    }, React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "General")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Icons")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Buttons")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Sliders")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Timeline")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Modals"))), React.createElement("li", {
      "data-toggle": "collapse",
      "data-target": "#form",
      className: "collapsed"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-edit fa-lg falgHeight"
    }), " Forms", React.createElement("i", {
      className: "fa fa-angle-left pull-right fa-lg falgTop"
    }))), React.createElement("ul", {
      className: "sub-menu collapse",
      id: "form"
    }, React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "General Elements")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Advanced Elements")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }, "Editors")))), React.createElement("li", {
      "data-toggle": "collapse",
      "data-target": "#Tables",
      className: "collapsed"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-table fa-lg falgHeight"
    }), " Tables", React.createElement("i", {
      className: "fa fa-angle-left pull-right fa-lg falgTop"
    }))), React.createElement("ul", {
      className: "sub-menu collapse",
      id: "Tables"
    }, React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Simple tables")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Data tables"))), React.createElement("li", {
      "data-toggle": "collapse",
      "data-target": "#Calendar",
      className: "collapsed"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-calendar fa-lg falgHeight"
    }), " Calendar", React.createElement("span", {
      className: "label label-danger pull-right falgTop1"
    }, "3"), React.createElement("span", {
      className: "label label-primary pull-right falgTop1"
    }, "17"))), React.createElement("li", {
      "data-toggle": "collapse",
      "data-target": "#Mailbox",
      className: "collapsed"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-envelope fa-lg falgHeight"
    }), " Mailbox", React.createElement("span", {
      className: "label label-warning pull-right falgTop1"
    }, "12"), React.createElement("span", {
      className: "label label-success pull-right falgTop1"
    }, "16"), React.createElement("span", {
      className: "label label-danger pull-right falgTop1"
    }, "5"))), React.createElement("ul", {
      className: "sub-menu collapse",
      id: "Mailbox"
    }, React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Inbox")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Compose")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Read"))), React.createElement("li", {
      "data-toggle": "collapse",
      "data-target": "#Examples",
      className: "collapsed"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-folder fa-lg falgHeight"
    }), " Examples", React.createElement("i", {
      className: "fa fa-angle-left pull-right fa-lg falgTop"
    }))), React.createElement("ul", {
      className: "sub-menu collapse",
      id: "Examples"
    }, React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Invoice")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Profile")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Login")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Register")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Lockscreen")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "404 Error")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "500 Error")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Blank Page")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Pace Page"))), React.createElement("li", {
      "data-toggle": "collapse",
      "data-target": "#Multilevel",
      className: "collapsed"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-share fa-lg falgHeight"
    }), " Multilevel", React.createElement("i", {
      className: "fa fa-angle-left pull-right fa-lg falgTop"
    }))), React.createElement("ul", {
      className: "sub-menu collapse",
      id: "Multilevel"
    }, React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Level One")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Level Two")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-circle-o"
    }), "Level Three"))), React.createElement("li", {
      "data-toggle": "collapse",
      "data-target": "#Documentation",
      className: "collapsed"
    }, React.createElement("a", {
      href: "#"
    }, React.createElement("i", {
      className: "fa fa-book fa-lg falgHeight"
    }), " Documentation", React.createElement("i", {
      className: "fa fa-angle-left pull-right fa-lg falgTop"
    })))))))));
  }

}

module.exportDefault(withTracker(() => {
  var empIdCont = FlowRouter.getParam("empid");
  Meteor.subscribe("empData", empIdCont);
  const oneEmpData = ShiftSetting.find({}).fetch();
  console.log("sideoneEmpData = ", oneEmpData);
  return {
    "allEmp": oneEmpData
  };
})(Sidebar));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"sidebar.css":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/shiftMgmt/common/Sidebar/sidebar.css                                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.exports = require("meteor/modules").addStyles(
  ".sidebar{\n\tbackground-color: #222d32;\n\theight: 900px;\n}\n.headbar\n{\n \n  height: 50px;\n}\n.newAside{\n  height: 500px;\n}\n.mainBlock{\n\theight:1000px;\n\tbackground-color: #ECF0F5;\n}\n\n.footerbar{\n\tbackground-color: #fff;\n\theight: 60px;\n\tborder-top:3px solid #aaa;\n}\n\n.sideHeader{\n\n\theight: 50px;\n\tbackground-color: #367fa9;\n\tfont-size: 20px;\n\tcolor: #fff;\n\ttext-align: center;\n\tpadding-top: 10px;\n}\n\n.sideHeader a{\n\n\tcolor: #fff;\n\ttext-decoration: none;\n}\n.imgSetting{\n  margin-top: 25px;\n  margin-left: 10px;\n  filter: invert(100%);\n}\n.imgSetting2{\n  width: 90px;\n  height: 40px;\n  margin-top: 25px;\n  margin-left: 0px;\n}\n.imgSetting3{\n  margin-top: 25px;\n  margin-left: 10px;\n}\n.imgSetting4{\n  margin-top: 25px;\n  margin-left: 10px;\n}\n.barIcon{\n\theight: 50px;\n\tpadding-top: 18px;\n\tfont-size: 14px;\n  color: white;\n}\n.nameHover{\n  height: 50px;\n}\n.barIcon:hover,.nameHover:hover {\n  background-color: #357CA5;\n}\n.bgclrBlack\n{\n  background-color: black;\n  min-height: 50px;\n  margin-left: 30px;\n}\n.userDetails{\n\theight: 20px;\n\n}\n\n\n.userImg{\n\tpadding-top: 8px;\n\theight: 55px !important;\n\t\n\n}\n\n.uname{\n\tpadding-top: 15px;\n\tfont-size: 12px;\n\tcolor:#fff;\n\n}\n\n.uname1{\n\tpadding-top: 20px;\n\tfont-size: 12px;\n\tcolor:#fff;\n  margin-left: 5px;\n  width: 150px;\n\n}\n.falgHeight{\n  height: 28px;\n  margin-top: 16px;\n}\n\n\n.online{\n\tcolor: #fff;\n\tfont-size: 10px;\n\n}\n.falgTop{\n  margin-top: 16px;\n}\n.falgTop1{\n  margin-top: 16px;\n  margin-right: 5px;\n}\n\n#imaginary_container{\n  margin-top:10%;\n}\n.stylish-input-group .input-group-addon,.frmcntrl{\n  color: #959596;\n  border:none;\n  background: #374850 !important; \n}\n.fntsize{\n  font-size: 22px;\n}\n.fntsize1{\n  font-size: 18px;\n}\n.divHeight{\n  height: 100px;\n  width: 107%;\n}\n.stylish-input-group .form-control{\n\tborder-right:0; \n\tbox-shadow:0 0 0; \n\tborder-color:#ccc;\n\n}\n.stylish-input-group button{\n    border:0;\n    background:transparent;\n\n}\n\n.mainNav{\n\theight: 35px;\n\tfont-size: 11px;\n\tcolor: #4b646f;\n\tpadding-top: 10px;\n\tbackground-color: #1a2226;\n\tmargin-top: 10px;\n}\n.layHover{\n  color: #aaa;\n}\n.bgAdmnLte{\n  background-color: #3C8DBC;\n}\n.headicon{\n\tfont-size: 13px;\n\tfont-weight: bold;\n\tpadding-top: 20px;\n\tcolor: #fff;\n}\n\n.imgUser{\n\theight: 25px;\n\tmargin-top: 15px;\n\tfloat: left;\n   \n}\n.lableAll{\n  width: 10px;\n  height: 10px;side\n  margin-top: 10px;\n  margin-left: 10px;\n}\n.imgtext{\n\tfont-size: 13px;\n    padding-top: 20px;\n    color: #fff;\n}\n\n.extraa{\n\theight: 50px;\n}\n\n\n.dashboard{\n\tcolor:#fff;\n\tbackground-color: #222d32 !important;\n\tbackground-color: #222d32;\n\tborder: none;\n}\n\n.nav-side-menu {\n  overflow: hidden;\n  font-family: verdana;\n  font-size: 12px;\n  font-weight: 200;\n  background-color: #2e353d;\n  position: absolute;\n  top: 0px;\n  height: 72%;\n  color: #e1ffff;\n  margin-top: 205px;\n  width: 106.5%;\n}\n.col-lg-11 {\n    width: 122%;\n}\n\n.nav-side-menu .toggle-btn {\n  display: none;\n}\n.nav-side-menu ul,\n.nav-side-menu li {\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n  line-height: 35px;\n  cursor: pointer;\n  \n}\n.nav-side-menu ul :not(collapsed) .arrow:before,\n.nav-side-menu li :not(collapsed) .arrow:before {\n  font-family: FontAwesome;\n  content: \"\\f078\";\n  display: inline-block;\n  padding-left: 10px;\n  padding-right: 10px;\n  vertical-align: middle;\n  float: right;\n}\n.nav-side-menu ul .active,\n.nav-side-menu li .active {\n  border-left: 3px solid #d19b3d;\n  background-color: #4f5b69;\n}\n.nav-side-menu ul .sub-menu li.active,\n.nav-side-menu li .sub-menu li.active {\n  color: #d19b3d;\n}\n.nav-side-menu ul .sub-menu li.active a,\n.nav-side-menu li .sub-menu li.active a {\n  color: #d19b3d;\n}\n.nav-side-menu ul .sub-menu li,\n.nav-side-menu li .sub-menu li {\n  background-color: #181c20;\n  border: none;\n  line-height: 28px;\n  border-bottom: 1px solid #23282e;\n  margin-left: 0px;\n}\n.nav-side-menu ul .sub-menu li:hover,\n.nav-side-menu li .sub-menu li:hover {\n  background-color: #020203;\n}\n.nav-side-menu ul .sub-menu li:before,\n.nav-side-menu li .sub-menu li:before {\n  font-family: FontAwesome;\n  content: \"\\f105\";\n  display: inline-block;\n  padding-left: 10px;\n  padding-right: 10px;\n  vertical-align: middle;\n}\n.nav-side-menu li {\n  padding-left: 0px;\n  border-left: 3px solid #2e353d;\n  border-bottom: 1px solid #23282e;\n}\n.nav-side-menu li a {\n  text-decoration: none;\n  color: #e1ffff;\n}\n.nav-side-menu li a i {\n  padding-left: 10px;\n  width: 17%;\n  padding-right: 20px;\n}\n.nav-side-menu li:hover {\n  border-left: 3px solid #d19b3d;\n  background-color: #4f5b69;\n  -webkit-transition: all 1s ease;\n  -moz-transition: all 1s ease;\n  -o-transition: all 1s ease;\n  -ms-transition: all 1s ease;\n  transition: all 1s ease;\n}\n@media (max-width: 767px) {\n  .nav-side-menu {\n    position: relative;\n    width: 100%;\n    margin-bottom: 10px;\n  }\n  .nav-side-menu .toggle-btn {\n    display: block;\n    cursor: pointer;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    z-index: 10 !important;\n    padding: 3px;\n    background-color: #ffffff;\n    color: #000;\n    width: 40px;\n    text-align: center;\n  }\n  .brand {\n    text-align: left !important;\n    font-size: 22px;\n    padding-left: 20px;\n    line-height: 50px !important;\n  }\n}\n@media (min-width: 767px) {\n  .nav-side-menu .menu-list .menu-content {\n    display: block;\n  }\n}\nbody {\n  margin: 0px;\n  padding: 0px;\n}\nul li{\n\tlist-style: none;\n}\n\n\n.content1{\n\theight:90px;\n\twidth: 300px;\n}\n\n.content2{\n\theight:90px;\n\tbackground-color: #fff;\t\n}\n\n.content3a{\n\theight:90px;\n\tbackground-color: #00c0ef;\t\n}\n\n\n.content3b{\n\theight:90px;\n\tbackground-color: #dd4b39;\t\n}\n\n\n.content3c{\n\theight:90px;\n\tbackground-color: #00a65a;\t\n}\n\n\n.content3d{\n\theight:90px;\n\tbackground-color: #F39C12;\t\n}\n\n.content4{\n\theight:90px;\n\tbackground-color: #fff\n}\n.mrgnTp{\n  margin-top: 50px;\n}\n\n.icon-bar {\n  width: 100%;\n  background-color: #555;\n  overflow: auto;\n}\n\n.icon-bar a {\n  float: left;\n  width: 20%;\n  text-align: center;\n  padding: 12px 0;\n  transition: all 0.3s ease;\n  color: white;\n  font-size: 36px;\n}\n\n.icon-bar a:hover {\n  background-color: #000;\n}\n\n.active {\n  background-color: #4CAF50;\n}\n\n\n\n\n\n\n\n\n.headicon{\n    font-size: 13px;\n    font-weight: bold;\n    padding-top: 0px;\n    color: #fff;\n}\n.labelhead{\n    position: absolute;\n    top: 11px;\n    text-align: center;\n    font-size: 9px;\n    padding: 2px 3px;\n    line-height: 0.9;\n}\n\n\n\n.fa-circle{\n\tcolor: green;\n}"
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"shiftRoster":{"empTemp":{"empBasicInfo.jsx":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/shiftMgmt/shiftRoster/empTemp/empBasicInfo.jsx                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 1);
let swal;
module.link("sweetalert", {
  default(v) {
    swal = v;
  }

}, 2);
let EmpMaster;
module.link("/imports/shiftMgmt/shiftRoster/empTemp/empMaster.js", {
  EmpMaster(v) {
    EmpMaster = v;
  }

}, 3);

class EmpBasicInfo extends Component {
  constructor(props) {
    super(props);
    var urlEmpId = FlowRouter.getParam("empid");

    if (urlEmpId) {
      var action = "Update";
    } else {
      var action = "Submit";
    }

    this.state = {
      "empId": urlEmpId,
      "action": action,
      "firstName": "",
      "middleName": "",
      "lastName": "",
      "email": "",
      "phone": "",
      "dob": ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading) {
      if (nextProps.oneEmpData) {
        this.setState({
          "firstName": nextProps.oneEmpData.firstName,
          "middleName": nextProps.oneEmpData.middleName,
          "lastName": nextProps.oneEmpData.lastName,
          "email": nextProps.oneEmpData.email,
          "phone": nextProps.oneEmpData.phone,
          "dob": nextProps.oneEmpData.dob
        });
      }
    }
  }

  submitBasicInfo(event) {
    event.preventDefault();
    var formValues = {
      firstName: this.refs.firstName.value,
      middleName: this.refs.middleName.value,
      lastName: this.refs.lastName.value,
      email: this.refs.email.value,
      phone: this.refs.phone.value,
      dob: this.refs.dob.value
    };

    if (this.state.action == "Submit") {
      Meteor.call("insertBasicInfo1", formValues, (error, result) => {
        if (error) {
          console.log("Something went wrong! Error = ", error);
        } else {
          swal("Congrats!", "Your Information Submitted Successfully.", "success");
          console.log("latest id = ", result);
        }
      });
    } else {
      formValues._id = this.state.empId;
      Meteor.call("updateBasicInfo1", formValues, (error, result) => {
        if (error) {
          console.log("Something went wrong! Error = ", error);
        } else {
          swal("Congrats!", "Employee Profile Updated Successfully.", "success");
          console.log("latest id = ", result);
        }
      });
    }
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      "firstName": this.refs.firstName.value,
      "middleName": this.refs.middleName.value,
      "lastName": this.refs.lastName.value,
      "email": this.refs.email.value,
      "phone": this.refs.phone.value,
      "dob": this.refs.dob.value
    });
  }

  deleteEmpProfile(event) {}

  render() {
    // console.log(this.props.oneEmpData[0]);
    var emp = this.props.oneEmpData[0];
    return React.createElement("div", null, React.createElement("div", {
      className: "row"
    }, React.createElement("span", {
      className: "col-lg-6 col-md-9 col-sm-9 col-xs-9"
    }, React.createElement("h3", null, "Employee Basic Info ")), React.createElement("div", {
      className: "col-lg-6 col-md-3 col-sm-3 col-xs-3"
    }, React.createElement("h3", null), React.createElement("a", {
      href: "/shiftAllot"
    }, React.createElement("div", {
      id: "",
      className: "actionIcon pull-right"
    }, React.createElement("i", {
      className: "fa fa-list"
    }, " "))), React.createElement("h3", null)), React.createElement("hr", null), React.createElement("form", {
      className: "col-lg-12"
    }, React.createElement("div", {
      className: "col-lg-12"
    }, React.createElement("div", {
      className: "form-group col-lg-4 col-md-4 col-sm-6"
    }, React.createElement("label", null, "First Name"), React.createElement("div", {
      className: "input-group"
    }, React.createElement("span", {
      className: "input-group-addon"
    }, React.createElement("i", {
      className: "fa fa-user"
    })), React.createElement("input", {
      type: "text",
      value: this.state.firstName,
      ref: "firstName",
      className: "form-control",
      onChange: this.handleChange.bind(this)
    }))), React.createElement("div", {
      className: "form-group col-lg-4 col-md-4 col-sm-6"
    }, React.createElement("label", null, "Middle Name"), React.createElement("div", {
      className: "input-group"
    }, React.createElement("span", {
      className: "input-group-addon"
    }, React.createElement("i", {
      className: "fa fa-user"
    })), React.createElement("input", {
      type: "text",
      value: this.state.middleName,
      ref: "middleName",
      className: "form-control",
      onChange: this.handleChange.bind(this)
    }))), React.createElement("div", {
      className: "form-group col-lg-4 col-md-4 col-sm-6"
    }, React.createElement("label", null, "Last Name"), React.createElement("div", {
      className: "input-group"
    }, React.createElement("span", {
      className: "input-group-addon"
    }, React.createElement("i", {
      className: "fa fa-user"
    })), React.createElement("input", {
      type: "text",
      value: this.state.lastName,
      ref: "lastName",
      className: "form-control",
      onChange: this.handleChange.bind(this)
    })))), React.createElement("div", {
      className: "col-lg-12"
    }, React.createElement("div", {
      className: "form-group col-lg-4 col-md-4 col-sm-4 col-xs-12 "
    }, React.createElement("label", null, "Email"), React.createElement("div", {
      className: "input-group"
    }, React.createElement("span", {
      className: "input-group-addon"
    }, React.createElement("i", {
      className: "fa fa-envelope"
    })), React.createElement("input", {
      type: "email",
      value: this.state.email,
      ref: "email",
      className: "form-control",
      onChange: this.handleChange.bind(this)
    }))), React.createElement("div", {
      className: "form-group col-lg-4 col-md-4 col-sm-4 col-xs-12"
    }, React.createElement("label", null, "Phone"), React.createElement("div", {
      className: "input-group"
    }, React.createElement("span", {
      className: "input-group-addon"
    }, React.createElement("i", {
      className: "fa fa-phone"
    })), React.createElement("input", {
      type: "phone",
      value: this.state.phone,
      ref: "phone",
      className: "form-control",
      onChange: this.handleChange.bind(this)
    }))), React.createElement("div", {
      className: "form-group col-lg-4 col-md-4 col-sm-4 col-xs-12"
    }, React.createElement("label", null, "DoB"), React.createElement("div", {
      className: "input-group"
    }, React.createElement("span", {
      className: "input-group-addon"
    }, React.createElement("i", {
      className: "fa fa-calendar"
    })), React.createElement("input", {
      type: "Date",
      value: this.state.dob,
      ref: "dob",
      className: "form-control",
      onChange: this.handleChange.bind(this)
    })))), React.createElement("div", {
      className: "col-lg-12"
    }, React.createElement("button", {
      className: "col-lg-2 btn btn-primary pull-right",
      onClick: this.submitBasicInfo.bind(this)
    }, " ", this.state.action, " ")))), React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      className: "col-lg-9 col-md-9 col-sm-9 col-xs-12"
    }, React.createElement("h3", null, " Employee List ")), React.createElement("table", {
      id: "table-to-xls",
      className: "table table-bordered table-hovered table-striped"
    }, React.createElement("thead", null, React.createElement("tr", {
      className: "bg-primary"
    }, React.createElement("th", {
      class: "text-center"
    }, " Sr "), React.createElement("th", {
      class: "text-left"
    }, " Employee Name "), React.createElement("th", {
      class: "text-center"
    }, " Phone "), React.createElement("th", {
      class: "text-center"
    }, " Email "), React.createElement("th", {
      class: "text-center"
    }, " DOB"), React.createElement("th", {
      class: "text-center"
    }, " DOB"), React.createElement("th", {
      class: "text-center"
    }, " DOB"))), React.createElement("tbody", null, this.props.allEmp.map((emp, index) => {
      return React.createElement("tr", {
        key: index
      }, React.createElement("td", null, " ", index + 1, " "), React.createElement("td", {
        class: "text-left"
      }, " ", emp.firstName, " ", emp.middleName, " ", emp.lastName, " "), React.createElement("td", null, " ", emp.phone, " "), React.createElement("td", null, " ", emp.email, " "), React.createElement("td", null, " ", emp.dob, " "), React.createElement("td", null, " ", emp.dob, " "), React.createElement("td", null, " ", emp.dob, " "));
    })))));
  }

}

module.exportDefault(withTracker(() => {
  if (FlowRouter.getParam("empid")) {
    var urlEmpId = FlowRouter.getParam("empid");
  } else {
    var urlEmpId = 0;
  }

  var empSub = Meteor.subscribe("allEmpData");
  const oneEmpData = EmpMaster.find({}).fetch() || [];
  console.log("oneEmpData = ", oneEmpData);
  return {
    "loading": !empSub.ready(),
    "oneEmpData": oneEmpData,
    "allEmp": oneEmpData
  };
})(EmpBasicInfo));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"empMaster.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/shiftMgmt/shiftRoster/empTemp/empMaster.js                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  EmpMaster: () => EmpMaster
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
const EmpMaster = new Mongo.Collection('empMaster');

if (Meteor.isServer) {
  Meteor.publish("empData", function (empid) {
    var empprof = EmpMaster.find({
      "_id": empid
    });
    return empprof;
  });
  Meteor.publish("allEmpData", function () {
    var allEmp = EmpMaster.find({});
    return allEmp;
  });
}

Meteor.methods({
  "insertBasicInfo1": function (formValues) {
    console.log(formValues);
    var emp_id = EmpMaster.insert({
      "firstName": formValues.firstName,
      "middleName": formValues.middleName,
      "lastName": formValues.lastName,
      "email": formValues.email,
      "phone": formValues.phone,
      "dob": formValues.dob
    }, (error, result) => {
      if (error) {
        console.log(error);
        return;
      } else {
        console.log(result);
        return;
      }
    });
    return emp_id;
  },
  "updateBasicInfo1": function (formValues) {
    console.log(formValues);
    var emp_id = EmpMaster.update({
      "_id": formValues._id
    }, {
      $set: {
        "firstName": formValues.firstName,
        "middleName": formValues.middleName,
        "lastName": formValues.lastName,
        "email": formValues.email,
        "phone": formValues.phone,
        "dob": formValues.dob
      }
    }, (error, result) => {
      if (error) {
        console.log(error);
        return;
      } else {
        console.log(result);
        return;
      }
    });
    return emp_id;
  },
  "deleteAllotedShift1": function (empid) {
    EmpMaster.remove({
      "_id": empid
    }, (error, result) => {
      if (error) {
        return error;
        console.log(error);
      } else {
        return result;
      }
    });
    return;
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"shiftAllotment":{"shiftAllocation.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/shiftMgmt/shiftRoster/shiftAllotment/shiftAllocation.js                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  ShiftAllocation: () => ShiftAllocation
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
const ShiftAllocation = new Mongo.Collection('shiftAllocation');

if (Meteor.isServer) {
  Meteor.publish("allShiftsData", function () {
    var allShifts = ShiftAllocation.find({});
    console.log("allShifts", allShifts);
    return allShifts;
  });
}

Meteor.methods({
  "insertBasicInfo2": function (formValues) {
    console.log(formValues);
    var emp_id = ShiftAllocation.insert({
      "shiftName": formValues.shiftName,
      "startTime": formValues.startTime,
      "startTimeAmPm": formValues.startTimeAmPm,
      "endTime": formValues.endTime,
      "endTimeAmPm": formValues.endTimeAmPm,
      "effectiveFrom": formValues.effectiveFrom,
      "tillDate": formValues.tillDate
    }, (error, result) => {
      if (error) {
        console.log(error);
        return;
      } else {
        console.log(result);
        return;
      }
    });
    return emp_id;
  },
  "updateBasicInfo2": function (formValues) {
    console.log(formValues);
    var emp_id = ShiftAllocation.update({
      "_id": formValues._id
    }, {
      $set: {
        "shiftName": formValues.shiftName,
        "startTime": formValues.startTime,
        "startTimeAmPm": formValues.startTimeAmPm,
        "endTime": formValues.endTime,
        "endTimeAmPm": formValues.endTimeAmPm,
        "effectiveFrom": formValues.effectiveFrom,
        "tillDate": formValues.tillDate
      }
    }, (error, result) => {
      if (error) {
        console.log(error);
        return;
      } else {
        console.log(result);
        return;
      }
    });
    return emp_id;
  },
  "deleteAllotedShift2": function (empid) {
    ShiftAllocation.remove({
      "_id": empid
    }, (error, result) => {
      if (error) {
        return error;
        console.log(error);
      } else {
        return result;
      }
    });
    return;
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"shiftAllot.css":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/shiftMgmt/shiftRoster/shiftAllotment/shiftAllot.css                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.exports = require("meteor/modules").addStyles(
  ".userImg{\n\theight: 100px;\n}\n.bgWhite{\n  background-color: #fff\n  /*z-index: 0*/\n}\n.actionIcon{\n\tpadding: 10px;\n\tcursor: pointer;\n}\n\n.actionIcon:hover{\n\tbackground-color: #eee;\n}\n\n.container {\n    width: 0px !important;\n}\n.borderCustom{\n\tborder: transparent;\n\tbackground: transparent;\n}\n.fontSize{\n\tfont-size: 1px !important;\n\toverflow: scroll;\n}\n.customPadding15{\n  padding-top: 15px;\n}\n.customMargin5{\n  margin-top: 5px;\n}\n.customMargin15{\n\tmargin-top: 15px;\n}\n.customMargin25Right{\n  margin-right: 30px;\n}\n.customBottomMargin30{\n  margin-bottom: 15px;\n}\n.customMargin{\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.customWidthTab{\n  width:27%;\n}\n.customWidthBtn{\n  width:14%;\n}\n.customSideMargin{\n  margin-left: 7.5px;\n  margin-right: 7.5px;\n  width: 47.35%;\n}\n.mandatoryField{\n\tcolor: #f00;\n}\n/*----------shiftChange Modal starts----------*/\n\n.radioContainer {\n  display: block;\n  position: relative;\n  margin-top: 5px;\n  cursor: pointer;\n  font-size: 15px;\n  user-select: none;\n  border-radius: 3px;\n  padding: 5px 50px;\n  text-align: left;\n}\n.newBorder{border: 1px solid #ccc}\n\n.shiftText{\n  font-size: 15px;\n  text-align: left;\n\n}\n/* Hide the browser's default radio button */\n.radioContainer input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n}\n\n/* Create a custom radio button */\n.checkmark {\n  position: absolute;\n  top: 9px;\n  left: 10px;\n  height: 15px;\n  width: 15px;\n  background-color: #eee;\n  border-radius: 100%;\n}\n\n/* On mouse-over, add a grey background color */\n.radioContainer:hover input ~ .checkmark {\n  background-color: #ccc;\n}\n\n/* When the radio button is checked, add a blue background */\n.radioContainer input:checked ~ .checkmark {\n  background-color: #2196F3;\n}\n\n/* Create the indicator (the dot/circle - hidden when not checked) */\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the indicator (dot/circle) when checked */\n.radioContainer input:checked ~ .checkmark:after {\n  display: block;\n}\n\n/* Style the indicator (dot/circle) */\n.radioContainer .checkmark:after {\n \ttop: 4px;\n  left: 4px;\n  width: 7px;\n  height: 7px;\n\tborder-radius: 50%;\n\tbackground: #fff;\n}\n\n/*----------shiftChange Modal ends----------*/\n\n.userImg{\n  height: 100px;\n}\n\n.nameEmp{\n\tborder-bottom:1px solid #ccc;\n\tcolor: #ccc;\n\tfont-size: 20px;\n\tpadding-left: 5px;\n}\n\n\n\n\n\n.checkboxContainer{\n  position: relative;\n  padding-left: 3px;\n  margin-bottom: 12px;\n  align-content: center;\n  cursor: pointer;\n  font-size: 10px;\n  user-select: none;\n}\n\n/* Hide the browser's default checkbox */\n.checkboxContainer input {\n  position: relative;\n  opacity: 0;\n  align-content: center;\n  cursor: pointer;\n  height: 17;\n  width: 17;\n}\n\n/* Create a custom checkbox */\n.checkmark1 {\n  position: absolute;\n  z-index: -1;\n  top: 21%;\n  left: 18%;\n  vertical-align: center !important;\n  align-content: center;\n  height: 17px;\n  width: 17px;\n  background-color: #ffffff;\n  border:2px solid #ddd;\n}\n\n/* On mouse-over, add a grey background color */\n.checkboxContainer:hover input ~ .checkmark1{\n  background-color: #eee;\n}\n\n/* When the checkbox is checked, add a blue background */\n.checkboxContainer input:checked ~ .checkmark1 {\n  background-color: #2196F3;\n  border:2px solid #2196F3;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkmark1:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n.checkboxContainer input:checked ~ .checkmark1:after {\n  display: block;\n}\n\n/* Style the checkmark/indicator */\n.checkboxContainer .checkmark1:after {\n  left: 4px;\n  top: 0px;\n  width: 6px;\n  height: 10px;\n  align-content: center;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}"
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"shiftAllot.jsx":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/shiftMgmt/shiftRoster/shiftAllotment/shiftAllot.jsx                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let ReactDOM;
module.link("react-dom", {
  default(v) {
    ReactDOM = v;
  }

}, 1);
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 2);
let swal;
module.link("sweetalert", {
  default(v) {
    swal = v;
  }

}, 3);
let EmpMaster;
module.link("/imports/shiftMgmt/shiftRoster/empTemp/empMaster.js", {
  EmpMaster(v) {
    EmpMaster = v;
  }

}, 4);
let ShiftSetting;
module.link("/imports/shiftMgmt/shiftRoster/shiftSetting/shiftSetting.js", {
  ShiftSetting(v) {
    ShiftSetting = v;
  }

}, 5);
let ShiftAllocation;
module.link("/imports/shiftMgmt/shiftRoster/shiftAllotment/shiftAllocation.js", {
  ShiftAllocation(v) {
    ShiftAllocation = v;
  }

}, 6);

class ShiftAllot extends Component {
  constructor(props) {
    super(props);
    var urlEmpId = FlowRouter.getParam("empid");

    if (urlEmpId) {
      var action = "Update";
    } else {
      var action = "Submit";
    }

    this.state = {
      "empId": urlEmpId,
      "action": action,
      "shiftName": "",
      "startTime": "",
      "startTimeAmPm": "",
      "endTime": "",
      "endTimeAmPm": "",
      "effectiveFrom": "",
      "tillDate": "",
      "empID": "",
      "Year": "",
      "Month": "",
      "isChecked": false,
      "checked": false,
      "weekdays": "",
      "weekNum1": "",
      "weekNum2": "",
      "year": "",
      "dates": [],
      "wDays": [],
      "shifts": [],
      "checkedIndex": "",
      "selectCheck": "checkmark1",
      "valOfShift": "",
      "curTarget": "",
      "weekValDefault": "",
      "weekVal": ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading) {
      if (nextProps.oneShiftData) {
        this.setState({
          "shiftName": nextProps.oneShiftData.shiftName,
          "startTime": nextProps.oneShiftData.startTime,
          "startTimeAmPm": nextProps.oneShiftData.startTimeAmPm,
          "endTime": nextProps.oneShiftData.endTime,
          "endTimeAmPm": nextProps.oneShiftData.endTimeAmPm,
          "effectiveFrom": nextProps.oneShiftData.effectiveFrom,
          "tillDate": nextProps.oneShiftData.tillDate
        });
      }
    }
  }

  getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  getDaysInWeek(week, year) {
    return new Date(year, week, 0).getDay();
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      "shiftName": this.refs.shiftName.value,
      "startTime": this.refs.startTime.value,
      "startTimeAmPm": this.refs.startTimeAmPm.value,
      "endTime": this.refs.endTime.value,
      "endTimeAmPm": this.refs.endTimeAmPm.value,
      "effectiveFrom": this.refs.effectiveFrom.value,
      "tillDate": this.refs.tillDate.value
    });
  } // deleteEmpProfile(event){
  // 	event.preventDefault();
  // 	var empId = event.currentTarget.id;
  // 	console.log("dd = ",empId);
  // 	swal({
  // 	  title     : "Are you sure you want to delete?",
  // 	  text      : "Once deleted, you will not be able to recover this record!",
  // 	  icon      : "warning",
  // 	  buttons   : true,
  // 	  dangerMode: true,
  // 	})
  // 	.then((willDelete) => {
  // 	  if (willDelete) {
  // 		Meteor.call("deleteEmpProfile",empId,
  // 							(error,result) => {
  // 								if(error){
  // 									swal("Something is Wrong","Contact Your System Administrator","error");
  // 									console.log(error);
  // 								}else{
  // 									swal("Great!","Delete is Successful!","success");
  // 									// FlowRouter.go("/empInfo");
  // 								}
  // 							}
  // 					);
  // 	}else {
  // 	    swal("This record is safe!");
  // 	  }
  // 	});
  // }


  passDate(event) {
    event.preventDefault();
    var date1 = this.refs.passDate.value;
    console.log("date1 =", date1);
    var year1 = date1.split('-'); // console.log("Year=",year1[0]);
    // console.log("Month=",year1[1]);

    var empId1 = event.currentTarget.id;
    this.setState({
      Year: year1[0],
      Month: year1[1]
    }, () => {
      console.log("year=" + this.state.Year);
      console.log("month=" + this.state.Month);
    });
  }

  autoWeekFetch(event) {
    event.preventDefault();
    var today = moment().format("MM-DD-YYYY");
    var weeknumber = moment(today).week();

    if (weeknumber <= 9) {
      weeknumber = "0" + weeknumber;
    }

    var yyyy = moment(today).format("YYYY");
    var weekValDefault = yyyy + "-W" + weeknumber;
    var weekVal = this.refs.dateFromWeek.value;
    this.setState({
      weekVal: weekVal,
      weekValDefault: weekValDefault
    }, () => {
      console.log("weekVal==============================" + this.state.weekVal);
      console.log("weekValDefault==============================" + this.state.weekValDefault);
    });
  }

  dateFromWeek(event) {
    var WeekFound = this.state.weekVal ? this.state.weekVal : this.state.weekValDefault;
    console.log("WeekFound =", WeekFound);
    var weekSplit = WeekFound.split('');
    console.log("weekSplit", weekSplit); // var WeekNum = moment(weekSplit[6]+weekSplit[7]).getDate().format('DD MM YYYY');
    // console.log("WeekNum",WeekNum)

    var startDateOfWeek = moment(weekSplit[0] + weekSplit[1] + weekSplit[2] + weekSplit[3]).add(weekSplit[6] + weekSplit[7] - 1, 'weeks').startOf('isoweek');
    var endDateOfWeek = moment(weekSplit[0] + weekSplit[1] + weekSplit[2] + weekSplit[3]).add(weekSplit[6] + weekSplit[7] - 1, 'weeks').endOf('isoweek');
    this.setState({
      startDateOfWeek: startDateOfWeek,
      endDateOfWeek: endDateOfWeek
    }, () => {
      console.log("DatesOfWeek=" + this.state.startDateOfWeek + " " + this.state.endDateOfWeek);
      var week = "DatesOfWeek=" + this.state.startDateOfWeek + " " + this.state.endDateOfWeek;
      var week = this.state.week;
      var startOfWeek = this.state.startDateOfWeek;
      var endOfWeek = this.state.endDateOfWeek;
      console.log("startOfWeek :", startOfWeek);
      var dates = [];
      var date = startOfWeek;

      while (date <= endOfWeek) {
        dates.push(date.toDate());
        console.log("dates", dates);
        date = date.add(1, 'd');
        console.log("date:", date);
      }

      this.setState({
        "dates": dates
      }, () => {
        console.log("dates :", this.state.dates);
      });
    });
  }

  displayEmpShiftHistory(event) {
    event.preventDefault();
    var empId1 = event.currentTarget.id;
    this.setState({
      empID: empId1
    }, () => {
      console.log("new empId" + this.state.empID);
    });
  }

  getDateHeader() {
    var MonthNum = this.state.Month ? this.state.Month : new Date().getMonth() + 1;
    var YearNum = this.state.Year ? this.state.Year : new Date().getFullYear();
    var count = this.getDaysInMonth(MonthNum, YearNum);
    var tDates = [];

    for (let i = 1; i <= count; i++) {
      tDates.push(i);
    }

    return tDates; // console.log("tDates",tDates)
  }

  getDayHeader() {
    var MonthNum = this.state.Month ? this.state.Month : new Date().getMonth() + 1;
    var YearNum = this.state.Year ? this.state.Year : new Date().getFullYear();
    console.log("M= " + MonthNum);
    console.log("Y= " + YearNum);
    var count = this.getDaysInMonth(MonthNum, YearNum);
    var tDays = [];
    var weekday = new Array(7);
    weekday[0] = "S";
    weekday[1] = "M";
    weekday[2] = "T";
    weekday[3] = "W";
    weekday[4] = "T";
    weekday[5] = "F";
    weekday[6] = "S";

    for (let i = 1; i <= count; i++) {
      var day = new Date(YearNum, MonthNum - 1, i).getDay(); // console.log("day =",day);

      tDays.push(weekday[day]);
    }

    return tDays;
  }

  checkAll(event) {
    var shiftCheck = event.target.getAttribute('data-index');
    console.log("className of sel cb=", this.state.checkedIndex);
    console.log("className of sel cb=" + shiftCheck);

    if (event.target.checked) {
      $("." + shiftCheck).prop("checked", true);
    } else {
      $("." + shiftCheck).prop("checked", false);
    }
  }

  deselectCheckbox(event) {
    var shiftCheck = event.target.getAttribute('data-index');

    if (shiftCheck) {
      var splitval = shiftCheck.split(' ');

      if (splitval) {
        console.log("event.target.checked", event.target.checked);
        console.log("shiftCheck", shiftCheck);
        this.setState({
          checkedIndex: shiftCheck,
          curTarget: event.target.checked
        });

        if (!this.state.curTarget) {
          $("#" + splitval[0]).prop("checked", false);
          $("#" + splitval[1]).prop("checked", false);
        } else {
          $("#" + splitval[0]).prop("checked", true);
          $("#" + splitval[1]).prop("checked", true);
        }
      }
    }
  }

  getShiftValue() {
    var getSvalue = event.target.getAttribute('data-index');
    console.log("shiftValue=" + getSvalue);
    this.setState({
      "getSvalue": getSvalue
    }, () => {// console.log("getSvalue :",this.state.getSvalue)
    });
  }

  replaceCheckbox(event) {
    var shiftCheck = this.state.checkedIndex;
    var shift = this.state.getSvalue;
    console.log("shiftCheck=", shiftCheck);
    console.log("shift=", shift);

    if (this.state.curTarget) {
      // $("."+shiftCheck).setState({selectCheck:""});
      // this.setState({valOfShift:shift});
      console.log("Inside if..........."); // $("."+shiftCheck)=(+getvalue);
      // $("."+shiftCheck).(this.state.getSvalue).val().show();
      // $("."+shiftCheck).show((this.state.getSvalue).val());
    } else {// $("."+shiftCheck).(this.state.getSvalue).val().hide();
      }
  } // submitShiftValue(event){
  // 	event.preventDefault();
  // 	var shiftCheck = this.state.checkedIndex;
  //    	var shift=this.state.getSvalue;
  //     console.log("shiftCheck=",shiftCheck);
  //     console.log("shift=",shift);
  // 	if(this.state.action == "Submit"){
  // 			Meteor.call("insertShiftValue",formValues,
  // 										(error,result)=>{
  // 											if(error){
  // 												console.log("Something went wrong! Error = ", error);
  // 											}else{
  // 												swal("Congrats!","Your Information Submitted Successfully.","success");
  // 												console.log("latest id = ",result);
  // 												$(".modal-backdrop").remove();
  // 											}
  // 										});
  // 	}else{
  // 		formValues._id = this.state.empId;
  // 		Meteor.call("updateBasicInfo2",formValues,
  // 									(error,result)=>{
  // 										if(error){
  // 											console.log("Something went wrong! Error = ", error);
  // 										}else{
  // 											swal("Congrats!","Employee Profile Updated Successfully.","success");
  // 											console.log("latest id = ",result);
  // 										}
  // 									});	
  // 	}
  // }
  // hideModal(event) {
  //   if (!event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // }


  render() {
    var emp = this.state.empID; // var userData = ShiftSetting.find({"_id":emp}).fetch();

    var userData = EmpMaster.find({
      "_id": emp
    }).fetch();
    var empHead = this.props.allEmp[0];

    if (emp) {
      if (emp.effectiveFrom == "") {
        emp.effectiveFrom = "-- NA --";
      }
    }

    const data = this.props.allEmp;
    return React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      className: "container-fluid bg-warning"
    }, React.createElement("h3", null, React.createElement("center", null, React.createElement("b", null, "Shift Timing Setting")))), React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 row customMargin"
    }, React.createElement("p", {
      className: "col-lg-2 col-md-3 col-sm-4 col-xs-4 row customMargin5"
    }, React.createElement("b", null, "Shift Planning for")), React.createElement("div", {
      className: " col-lg-1 col-md-1 col-sm-1 col-xs-4 input-group"
    }, React.createElement("span", {
      className: "input-group-addon"
    }, React.createElement("i", {
      className: "fa fa-calendar"
    })), React.createElement("input", {
      className: "form-control",
      type: "Month",
      ref: "passDate",
      onChange: this.passDate.bind(this)
    }))), React.createElement("table", {
      id: "table-to-xls",
      className: "table table-bordered table-hovered table-condensed"
    }, React.createElement("thead", null, React.createElement("tr", {
      className: "bg-primary"
    }, React.createElement("th", {
      className: "text-center",
      rowSpan: "3"
    }, " Sr "), React.createElement("th", {
      className: "text-left",
      rowSpan: "3"
    }, " Employee Name "), React.createElement("th", {
      className: "text-center",
      rowSpan: "3"
    }, " SA "), this.getDateHeader().map((i, index) => {
      return React.createElement("th", {
        key: index
      }, " ", i, " ");
    })), React.createElement("tr", {
      className: "bg-primary"
    }, this.getDayHeader().map((i, index) => {
      return React.createElement("th", {
        key: index
      }, " ", i, " ");
    })), React.createElement("tr", {
      className: "bg-primary"
    }, this.getDateHeader().map((i, index) => {
      return React.createElement("th", {
        key: index,
        className: ""
      }, " ", React.createElement("input", {
        type: "checkbox",
        id: "D" + i,
        "data-index": "D" + i,
        onChange: this.checkAll.bind(this)
      }), React.createElement("span", {
        className: " text-center"
      }), " ");
    }))), React.createElement("tbody", null, this.props.allEmp.map((emp, index) => {
      function empid() {
        return index + 1;
      }

      ;
      return React.createElement("tr", {
        key: index
      }, React.createElement("td", null, " ", index + 1, " "), React.createElement("td", {
        className: "text-left",
        "data-toggle": "modal",
        "data-target": "#empShiftHistory",
        onClick: this.displayEmpShiftHistory.bind(this)
      }, " ", emp.firstName, " ", emp.middleName, " ", emp.lastName, " "), React.createElement("td", {
        className: "checkboxContainer"
      }, " ", React.createElement("input", {
        type: "checkbox",
        id: "E" + (index + 1),
        "data-index": "E" + (index + 1),
        onChange: this.checkAll.bind(this)
      }), React.createElement("span", {
        className: "checkmark1 text-center"
      }), " "), this.getDateHeader().map((index, dt) => {
        return React.createElement("th", {
          key: dt,
          className: "checkboxContainer"
        }, " ", React.createElement("input", {
          type: "checkbox",
          className: "E" + empid() + " D" + (dt + 1),
          align: "center",
          name: "check",
          "data-index": "E" + empid() + " D" + (dt + 1),
          "data-toggle": "modal",
          "data-target": "#shiftChangeModal",
          onChange: this.deselectCheckbox.bind(this)
        }), React.createElement("span", {
          className: this.state.selectCheck
        }, this.state.valOfShift));
      }));
    }))), React.createElement("div", {
      className: "col-lg-12 row shiftText"
    }, React.createElement("b", null, "Change Shift"), React.createElement("span", {
      className: "mandatoryField"
    }, "*")), React.createElement("div", {
      className: "col-lg-12 customMargin5 customPadding15"
    }, this.props.allShift.map((emp, index) => {
      return React.createElement("div", {
        key: index,
        className: "form-group col-lg-4 col-md-4 col-sm-6 col-xs-12 row customWidthTab customMargin25Right newBorder"
      }, React.createElement("div", {
        className: "input-group"
      }, React.createElement("label", {
        className: "radioContainer text-left"
      }, "Shift ", emp.shiftName, React.createElement("input", {
        type: "radio",
        name: "radio",
        "data-index": emp.shiftName,
        value: emp.shiftName,
        onChange: this.getShiftValue.bind(this)
      }), React.createElement("span", {
        className: "checkmark"
      }))));
    }), React.createElement("button", {
      className: "col-lg-2 btn btn-primary customWidthBtn customBottomMargin30 customMargin15 pull-right",
      onClick: this.replaceCheckbox.bind(this)
    }, " ", this.state.action, " "))));
  }

}

module.exportDefault(ShiftAllotContainer = withTracker(() => {
  const shiftSubHandle2 = Meteor.subscribe("allEmpData");
  const allEmpData = EmpMaster.find({}).fetch() || [{}];
  const shiftSubHandle1 = Meteor.subscribe("allShiftData");
  const allShiftData = ShiftSetting.find({}).fetch() || [];
  const shiftSubHandle = Meteor.subscribe("allShiftsData");
  const allShiftsData = ShiftAllocation.find({}).fetch() || [];
  console.log("allEmpData :", allEmpData);
  console.log("allShiftData :", allShiftData);
  console.log("allShiftsData :", allShiftsData);
  return {
    "loading2": !shiftSubHandle2.ready(),
    "loading1": !shiftSubHandle1.ready(),
    "loading": !shiftSubHandle.ready(),
    "allEmp": allEmpData,
    "allShift": allShiftData,
    "allShifts": allShiftsData
  };
})(ShiftAllot));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"shiftSetting":{"shiftSetting.css":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/shiftMgmt/shiftRoster/shiftSetting/shiftSetting.css                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.exports = require("meteor/modules").addStyles(
  ".w1,.w2,.w3{\n\twidth: 50px !important;\n}"
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"shiftSetting.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/shiftMgmt/shiftRoster/shiftSetting/shiftSetting.js                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  ShiftSetting: () => ShiftSetting
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
const ShiftSetting = new Mongo.Collection('shiftSetting');

if (Meteor.isServer) {
  Meteor.publish("allShiftData", function () {
    var allShift = ShiftSetting.find({});
    console.log("allShift", allShift);
    return allShift;
  });
}

Meteor.methods({
  "insertBasicInfo": function (formValues) {
    console.log(formValues);
    var emp_id = ShiftSetting.insert({
      "shiftName": formValues.shiftName,
      "startTime": formValues.startTime,
      "startTimeAmPm": formValues.startTimeAmPm,
      "endTime": formValues.endTime,
      "endTimeAmPm": formValues.endTimeAmPm,
      "effectiveFrom": formValues.effectiveFrom,
      "tillDate": formValues.tillDate
    }, (error, result) => {
      if (error) {
        console.log(error);
        return;
      } else {
        console.log(result);
        return;
      }
    });
    return emp_id;
  },
  "updateBasicInfo": function (formValues) {
    console.log(formValues);
    var emp_id = ShiftSetting.update({
      "_id": formValues._id
    }, {
      $set: {
        "shiftName": formValues.shiftName,
        "startTime": formValues.startTime,
        "startTimeAmPm": formValues.startTimeAmPm,
        "endTime": formValues.endTime,
        "endTimeAmPm": formValues.endTimeAmPm,
        "effectiveFrom": formValues.effectiveFrom,
        "tillDate": formValues.tillDate
      }
    }, (error, result) => {
      if (error) {
        console.log(error);
        return;
      } else {
        console.log(result);
        return;
      }
    });
    return emp_id;
  },
  "deleteAllotedShift": function (empid) {
    ShiftSetting.remove({
      "_id": empid
    }, (error, result) => {
      if (error) {
        return error;
        console.log(error);
      } else {
        return result;
      }
    });
    return;
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"shiftSetting.jsx":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/shiftMgmt/shiftRoster/shiftSetting/shiftSetting.jsx                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 1);
let swal;
module.link("sweetalert", {
  default(v) {
    swal = v;
  }

}, 2);
let ShiftSetting;
module.link("/imports/shiftMgmt/shiftRoster/shiftSetting/shiftSetting.js", {
  ShiftSetting(v) {
    ShiftSetting = v;
  }

}, 3);

class shiftSetting extends Component {
  constructor(props) {
    super(props);
    var urlEmpId = FlowRouter.getParam("empid");

    if (urlEmpId) {
      var action = "Update";
    } else {
      var action = "Submit";
    }

    this.state = {
      "empId": urlEmpId,
      "action": action,
      "shiftName": "",
      "startTime": "",
      "startTimeAmPm": "",
      "endTime": "",
      "endTimeAmPm": "",
      "effectiveFrom": "",
      "tillDate": ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading) {
      if (nextProps.oneShiftData) {
        this.setState({
          "shiftName": nextProps.oneShiftData.shiftName,
          "startTime": nextProps.oneShiftData.startTime,
          "startTimeAmPm": nextProps.oneShiftData.startTimeAmPm,
          "endTime": nextProps.oneShiftData.endTime,
          "endTimeAmPm": nextProps.oneShiftData.endTimeAmPm,
          "effectiveFrom": nextProps.oneShiftData.effectiveFrom,
          "tillDate": nextProps.oneShiftData.tillDate
        });
      }
    }
  }

  clockPicker(event) {
    $('.clockpicker').clockpicker();
  }

  submitBasicInfo(event) {
    event.preventDefault();
    var formValues = {
      shiftName: this.refs.shiftName.value,
      startTime: this.refs.startTime.value,
      startTimeAmPm: this.refs.startTimeAmPm.value,
      endTime: this.refs.endTime.value,
      endTimeAmPm: this.refs.endTimeAmPm.value,
      effectiveFrom: this.refs.effectiveFrom.value,
      tillDate: this.refs.tillDate.value
    };

    if (this.state.action == "Submit") {
      if (formValues.shiftName !== "" && formValues.startime !== "" && formValues.startTimeAmPm !== "" && formValues.endTime !== "" && formValues.endTimeAmPm !== "" && formValues.effectiveFrom !== "" && formValues.tillDate !== "") {
        Meteor.call("insertBasicInfo", formValues, (error, result) => {
          if (error) {
            console.log("Something went wrong! Error = ", error);
          } else {
            swal("Congrats!", "Your Information Submitted Successfully.", "success");
            console.log("latest id = ", result); // FlowRouter.go("/empProfile/"+result);
            // this.setState({"inputValue":""});
          }
        });
      } else {
        swal("No Field should be empty...!", "Please fill the all fields carefully", "warning");
      }
    } else {
      formValues._id = this.state.empId;
      Meteor.call("updateBasicInfo", formValues, (error, result) => {
        if (error) {
          console.log("Something went wrong! Error = ", error);
        } else {
          swal("Congrats!", "Employee Profile Updated Successfully.", "success");
          console.log("latest id = ", result);
          FlowRouter.go("/empProfile/" + this.state.empId);
        }
      });
    }
  }

  displayEmpProfile() {}

  handleChange(event) {
    event.preventDefault();
    this.setState({
      "shiftName": this.refs.shiftName.value,
      "startTime": this.refs.startTime.value,
      "startTimeAmPm": this.refs.startTimeAmPm.value,
      "endTime": this.refs.endTime.value,
      "endTimeAmPm": this.refs.endTimeAmPm.value,
      "effectiveFrom": this.refs.effectiveFrom.value,
      "tillDate": this.refs.tillDate.value
    });
  }

  deleteAllotedShift(event) {
    event.preventDefault();
    var empId = event.currentTarget.id;
    console.log("dd = ", empId);
    swal({
      title: "Are you sure you want to delete?",
      text: "Once deleted, you will not be able to recover this record!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        Meteor.call("deleteAllotedShift", empId, (error, result) => {
          if (error) {
            swal("Something is Wrong", "Contact Your System Administrator", "error");
            console.log(error);
          } else {
            swal("Great!", "Delete is Successful!", "success"); // FlowRouter.go("/empInfo");
          }
        });
      } else {
        swal("This record is safe!");
      }
    });
  }

  render() {
    // console.log(this.props.oneShiftData[0]);
    var emp = this.props.oneShiftData[0];
    return React.createElement("div", null, React.createElement("div", {
      className: "row"
    }, React.createElement("span", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
    }, React.createElement("h3", null, React.createElement("center", null, React.createElement("b", null, "Shift Timing Setting")))), React.createElement("div", {
      className: "col-lg-6 col-md-3 col-sm-3 col-xs-3"
    }, React.createElement("h3", null), React.createElement("h3", null)), React.createElement("hr", null), React.createElement("form", {
      className: "col-lg-12"
    }, React.createElement("div", {
      className: "labelTextBox col-lg-12"
    }, React.createElement("div", {
      className: "col-lg-2 col-md-12 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      className: "col-lg-12 col-md-6 col-sm-6 col-xs-12"
    }, React.createElement("div", {
      className: "form-group"
    }, React.createElement("label", {
      htmlFor: "usr"
    }, "Shift Name"), React.createElement("input", {
      type: "text",
      value: this.state.shiftName,
      ref: "shiftName",
      className: "form-control",
      onChange: this.handleChange.bind(this)
    })))), React.createElement("div", {
      className: "col-lg-3 col-md-6 col-sm-6 col-xs-12 row"
    }, React.createElement("div", {
      className: "col-lg-6 col-md-6 col-sm-6 col-xs-12 row"
    }, React.createElement("div", {
      className: "form-group"
    }, React.createElement("label", {
      htmlFor: "usr"
    }, "Start Time"), React.createElement("div", {
      className: "form-group"
    }, React.createElement("select", {
      id: "sel1",
      value: this.state.startTime,
      ref: "startTime",
      className: "form-control",
      onChange: this.handleChange.bind(this)
    }, React.createElement("option", null, "Select"), React.createElement("option", null, "08:00"), React.createElement("option", null, "09:00"), React.createElement("option", null, "10:00"), React.createElement("option", null, "11:00"))))), React.createElement("div", {
      className: "col-lg-6 col-md-6 col-sm-6 col-xs-12"
    }, React.createElement("div", {
      className: "form-group"
    }, React.createElement("label", {
      htmlFor: "usr"
    }, "AM/PM"), React.createElement("div", {
      className: "form-group"
    }, React.createElement("select", {
      id: "sel1",
      value: this.state.startTimeAmPm,
      ref: "startTimeAmPm",
      className: "form-control",
      onChange: this.handleChange.bind(this)
    }, React.createElement("option", null, "AM"), React.createElement("option", null, "PM")))))), React.createElement("div", {
      className: "col-lg-3 col-md-6 col-sm-6 col-xs-12 row"
    }, React.createElement("div", {
      className: "col-lg-6 col-md-6 col-sm-6 col-xs-12 row"
    }, React.createElement("div", {
      className: "form-group"
    }, React.createElement("label", {
      htmlFor: "usr"
    }, "End Time"), React.createElement("div", {
      className: "form-group"
    }, React.createElement("select", {
      id: "sel1",
      value: this.state.endTime,
      ref: "endTime",
      className: "form-control",
      onChange: this.handleChange.bind(this)
    }, React.createElement("option", null, "Select"), React.createElement("option", null, "05:00"), React.createElement("option", null, "06:00"), React.createElement("option", null, "07:00"), React.createElement("option", null, "08:00"))))), React.createElement("div", {
      className: "col-lg-6 col-md-6 col-sm-6 col-xs-12"
    }, React.createElement("div", {
      className: "form-group"
    }, React.createElement("label", {
      htmlFor: "usr"
    }, "AM/PM"), React.createElement("div", {
      className: "form-group"
    }, React.createElement("select", {
      id: "sel1",
      value: this.state.endTimeAmPm,
      ref: "endTimeAmPm",
      className: "form-control",
      onChange: this.handleChange.bind(this)
    }, React.createElement("option", null, "AM"), React.createElement("option", null, "PM")))))), React.createElement("div", {
      className: "col-lg-4 col-md-6 col-sm-6 col-xs-12 row"
    }, React.createElement("div", {
      className: "col-lg-6 col-md-6 col-sm-6 col-xs-12 row"
    }, React.createElement("div", {
      className: "form-group"
    }, React.createElement("label", {
      htmlFor: "usr"
    }, "Effective From"), React.createElement("input", {
      type: "date",
      id: "usr",
      value: this.state.effectiveFrom,
      ref: "effectiveFrom",
      className: "form-control",
      onChange: this.handleChange.bind(this)
    }))), React.createElement("div", {
      className: "col-lg-6 col-md-6 col-sm-6 col-xs-12"
    }, React.createElement("div", {
      className: "form-group"
    }, React.createElement("label", {
      htmlFor: "usr"
    }, "Till Date"), React.createElement("input", {
      type: "date",
      id: "usr",
      value: this.state.tillDate,
      ref: "tillDate",
      className: "form-control",
      onChange: this.handleChange.bind(this)
    }))))), React.createElement("div", {
      className: "col-lg-12"
    }, React.createElement("button", {
      className: "col-lg-2 btn btn-primary pull-right",
      onClick: this.submitBasicInfo.bind(this)
    }, " ", this.state.action, " ")))), React.createElement("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
    }, React.createElement("div", {
      className: "col-lg-9 col-md-9 col-sm-9 col-xs-12 row"
    }, React.createElement("h3", null, " Shift Details ")), React.createElement("table", {
      id: "table-to-xls",
      className: "table table-bordered table-hovered table-striped"
    }, React.createElement("thead", null, React.createElement("tr", {
      className: "bg-primary"
    }, React.createElement("th", {
      className: "text-center"
    }, " Sr # "), React.createElement("th", {
      className: "text-center"
    }, " Shift Name "), React.createElement("th", {
      className: "text-left"
    }, " Start Time AM/PM"), React.createElement("th", {
      className: "text-center"
    }, " End Time AM/PM"), React.createElement("th", {
      className: "text-center"
    }, " Effective From "), React.createElement("th", {
      className: "text-center"
    }, " Till Date "), React.createElement("th", {
      className: "text-center"
    }, " Action "))), React.createElement("tbody", null, this.props.allShift.map((emp, index) => {
      return React.createElement("tr", {
        key: index
      }, React.createElement("td", null, " ", index + 1, " "), React.createElement("td", null, " ", emp.shiftName, " "), React.createElement("td", null, " ", emp.startTime, " ", emp.startTimeAmPm, " "), React.createElement("td", null, " ", emp.endTime, " ", emp.endTimeAmPm, " "), React.createElement("td", null, " ", emp.effectiveFrom, " "), React.createElement("td", null, " ", emp.tillDate, " "), React.createElement("td", null, React.createElement("i", {
        id: emp._id,
        className: "actionIcon fa fa-trash",
        onClick: this.deleteAllotedShift.bind(this)
      })));
    })))));
  }

}

module.exportDefault(withTracker(() => {
  if (FlowRouter.getParam("empid")) {
    var urlEmpId = FlowRouter.getParam("empid");
  } else {
    var urlEmpId = 0;
  }

  var shiftSub = Meteor.subscribe("allShiftData");
  const oneShiftData = ShiftSetting.find({}).fetch() || []; // console.log("oneShiftData = ",oneShiftData);

  return {
    "allShift": oneShiftData,
    "loading": !shiftSub.ready(),
    "oneShiftData": oneShiftData
  };
})(shiftSetting));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"shiftRosterLayouts":{"shiftRosterLayout.jsx":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/shiftMgmt/shiftRosterLayouts/shiftRosterLayout.jsx                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  AuthLayout: () => AuthLayout
});
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let Header;
module.link("/imports/shiftMgmt/common/Header/Header.jsx", {
  default(v) {
    Header = v;
  }

}, 1);
let Footer;
module.link("/imports/shiftMgmt/common/Footer/Footer.jsx", {
  default(v) {
    Footer = v;
  }

}, 2);
let Sidebar;
module.link("/imports/shiftMgmt/common/Sidebar/Sidebar.jsx", {
  default(v) {
    Sidebar = v;
  }

}, 3);

const AuthLayout = (_ref) => {
  let {
    main
  } = _ref;
  return React.createElement("div", {
    className: "container-fluid"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-lg-2 col-md-2 col-sm-2 col-xs-12"
  }, React.createElement(Sidebar, null)), React.createElement("div", {
    className: "col-lg-10 col-md-10 col-sm-10 col-xs-12"
  }, React.createElement(Header, null)), React.createElement("div", {
    className: "col-lg-10 col-md-10 col-sm-10 col-xs-12"
  }, React.createElement("div", {
    className: "contentWrapper"
  }, main)), React.createElement("div", {
    className: "col-lg-10 col-md-10 col-sm-10 col-xs-12"
  }, React.createElement(Footer, null))));
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"client":{"main.jsx":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/main.jsx                                                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let render;
module.link("react-dom", {
  render(v) {
    render = v;
  }

}, 2);
module.link("/lib/leaveMgmtRoutes.js");
module.link("/lib/shiftRosterRoutes.js");
module.link("/imports/shiftMgmt/shiftRoster/shiftAllotment/shiftAllot.css");
module.link("/imports/shiftMgmt/shiftRoster/shiftSetting/shiftSetting.css");
Meteor.startup(() => {// render(<App />, document.getElementById('react-target'));
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css",
    ".jsx"
  ]
});

var exports = require("/client/main.jsx");