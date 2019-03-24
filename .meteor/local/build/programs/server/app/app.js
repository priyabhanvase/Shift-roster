var require = meteorInstall({"imports":{"shiftMgmt":{"shiftRoster":{"empTemp":{"empMaster.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// imports/shiftMgmt/shiftRoster/empTemp/empMaster.js                            //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////

}},"shiftAllotment":{"shiftAllocation.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// imports/shiftMgmt/shiftRoster/shiftAllotment/shiftAllocation.js               //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////

}},"shiftSetting":{"shiftSetting.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// imports/shiftMgmt/shiftRoster/shiftSetting/shiftSetting.js                    //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////

}}}}},"server":{"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// server/main.js                                                                //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
                                                                                 //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
module.link("/imports/shiftMgmt/shiftRoster/empTemp/empMaster.js");
module.link("/imports/shiftMgmt/shiftRoster/shiftAllotment/shiftAllocation.js");
module.link("/imports/shiftMgmt/shiftRoster/shiftSetting/shiftSetting.js");

/*import Links from '/imports/api/links';

function insertLink(title, url) {
  Links.insert({ title, url, createdAt: new Date() });
}*/
Meteor.startup(() => {// If the Links collection is empty, add some data.

  /*  if (Links.find().count() === 0) {
      insertLink(
        'Do the Tutorial',
        'https://www.meteor.com/tutorials/react/creating-an-app'
      );
  
      insertLink(
        'Follow the Guide',
        'http://guide.meteor.com'
      );
  
      insertLink(
        'Read the Docs',
        'https://docs.meteor.com'
      );
  
      insertLink(
        'Discussions',
        'https://forums.meteor.com'
      );
    }*/
});
///////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".jsx"
  ]
});

var exports = require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zaGlmdE1nbXQvc2hpZnRSb3N0ZXIvZW1wVGVtcC9lbXBNYXN0ZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvc2hpZnRNZ210L3NoaWZ0Um9zdGVyL3NoaWZ0QWxsb3RtZW50L3NoaWZ0QWxsb2NhdGlvbi5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zaGlmdE1nbXQvc2hpZnRSb3N0ZXIvc2hpZnRTZXR0aW5nL3NoaWZ0U2V0dGluZy5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL21haW4uanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0IiwiRW1wTWFzdGVyIiwiTW9uZ28iLCJsaW5rIiwidiIsIkNvbGxlY3Rpb24iLCJNZXRlb3IiLCJpc1NlcnZlciIsInB1Ymxpc2giLCJlbXBpZCIsImVtcHByb2YiLCJmaW5kIiwiYWxsRW1wIiwibWV0aG9kcyIsImZvcm1WYWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiZW1wX2lkIiwiaW5zZXJ0IiwiZmlyc3ROYW1lIiwibWlkZGxlTmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZSIsImRvYiIsImVycm9yIiwicmVzdWx0IiwidXBkYXRlIiwiX2lkIiwiJHNldCIsInJlbW92ZSIsIlNoaWZ0QWxsb2NhdGlvbiIsImFsbFNoaWZ0cyIsInNoaWZ0TmFtZSIsInN0YXJ0VGltZSIsInN0YXJ0VGltZUFtUG0iLCJlbmRUaW1lIiwiZW5kVGltZUFtUG0iLCJlZmZlY3RpdmVGcm9tIiwidGlsbERhdGUiLCJTaGlmdFNldHRpbmciLCJhbGxTaGlmdCIsInN0YXJ0dXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQUNDLFdBQVMsRUFBQyxNQUFJQTtBQUFmLENBQWQ7QUFBeUMsSUFBSUMsS0FBSjtBQUFVSCxNQUFNLENBQUNJLElBQVAsQ0FBWSxjQUFaLEVBQTJCO0FBQUNELE9BQUssQ0FBQ0UsQ0FB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QUgsRUFBUztBQUNSLGVBQU9BLEtBQVA7QUFDQVYsZUFBTyxDQUFDQyxHQUFSLENBQVlTLEtBQVo7QUFDQSxPQUhELE1BR0s7QUFDSixlQUFPQyxNQUFQO0FBQ0E7QUFDRixLQVBEO0FBU0E7QUFDQTtBQXBFYSxDQUFmLEU7Ozs7Ozs7Ozs7O0FDYkEsSUFBSXBCLE1BQUo7QUFBV1AsTUFBTSxDQUFDSSxJQUFQLENBQVksZUFBWixFQUE0QjtBQUFDRyxRQUFNLENBQUNGLENBQUQsRUFBRztBQUFDRSxVQUFNLEdBQUNGLENBQVA7QUFBUzs7QUFBcEIsQ0FBNUIsRUFBa0QsQ0FBbEQ7QUFBcURMLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLHFEQUFaO0FBQW1FSixNQUFNLENBQUNJLElBQVAsQ0FBWSxrRUFBWjtBQUFnRkosTUFBTSxDQUFDSSxJQUFQLENBQVksNkRBQVo7O0FBTW5OOzs7OztBQU1BRyxNQUFNLENBQUNvQyxPQUFQLENBQWUsTUFBTSxDQUNuQjs7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJDLENBdkJELEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcblxuZXhwb3J0IGNvbnN0IEVtcE1hc3RlciA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdlbXBNYXN0ZXInKTtcblxuaWYoTWV0ZW9yLmlzU2VydmVyKXtcblx0TWV0ZW9yLnB1Ymxpc2goXCJlbXBEYXRhXCIsZnVuY3Rpb24oZW1waWQpe1xuXHRcdHZhciBlbXBwcm9mID0gRW1wTWFzdGVyLmZpbmQoe1wiX2lkXCI6ZW1waWR9KTtcblx0XHRyZXR1cm4gZW1wcHJvZjtcblx0fSk7XG5cblx0TWV0ZW9yLnB1Ymxpc2goXCJhbGxFbXBEYXRhXCIsZnVuY3Rpb24oKXtcblx0XHR2YXIgYWxsRW1wID0gRW1wTWFzdGVyLmZpbmQoe30pO1xuXHRcdHJldHVybiBhbGxFbXA7XG5cdH0pO1xufVxuXG5NZXRlb3IubWV0aG9kcyh7XG5cdFwiaW5zZXJ0QmFzaWNJbmZvMVwiIDogZnVuY3Rpb24oZm9ybVZhbHVlcyl7XG5cdFx0Y29uc29sZS5sb2coZm9ybVZhbHVlcyk7XG5cblx0XHR2YXIgZW1wX2lkID0gRW1wTWFzdGVyLmluc2VydCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XCJmaXJzdE5hbWVcIiBcdDogZm9ybVZhbHVlcy5maXJzdE5hbWUsXHQgICAgICAgIFxuXHRcdFx0XHRcdFx0XHQgICAgICAgIFwibWlkZGxlTmFtZVwiIFx0OiBmb3JtVmFsdWVzLm1pZGRsZU5hbWUsXHQgICAgICAgIFxuXHRcdFx0XHRcdFx0XHQgICAgICAgIFwibGFzdE5hbWVcIiBcdFx0OiBmb3JtVmFsdWVzLmxhc3ROYW1lLFx0ICAgICAgICBcblx0XHRcdFx0XHRcdFx0ICAgICAgICBcImVtYWlsXCIgXHRcdDogZm9ybVZhbHVlcy5lbWFpbCxcdCAgICAgICAgXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgXCJwaG9uZVwiIFx0XHQ6IGZvcm1WYWx1ZXMucGhvbmUsXHQgICAgICAgIFxuXHRcdFx0XHRcdFx0XHQgICAgICAgIFwiZG9iXCIgXHRcdFx0OiBmb3JtVmFsdWVzLmRvYixcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdFx0XHRcdChlcnJvcixyZXN1bHQpPT57XG5cdFx0XHRcdFx0XHRcdFx0XHRpZihlcnJvcil7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdCk7XG5cblx0XHRyZXR1cm4gZW1wX2lkO1xuXHR9LFx0XG5cblx0XCJ1cGRhdGVCYXNpY0luZm8xXCIgOiBmdW5jdGlvbihmb3JtVmFsdWVzKXtcblx0XHRjb25zb2xlLmxvZyhmb3JtVmFsdWVzKTtcblxuXHRcdHZhciBlbXBfaWQgPSBFbXBNYXN0ZXIudXBkYXRlKFxuXHRcdFx0XHRcdFx0XHRcdHtcIl9pZFwiOiBmb3JtVmFsdWVzLl9pZH0sXG5cdFx0XHRcdFx0XHRcdFx0eyRzZXQgOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJmaXJzdE5hbWVcIiBcdDogZm9ybVZhbHVlcy5maXJzdE5hbWUsXHQgICAgICAgIFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBcIm1pZGRsZU5hbWVcIiBcdDogZm9ybVZhbHVlcy5taWRkbGVOYW1lLFx0ICAgICAgICBcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgXCJsYXN0TmFtZVwiIFx0XHQ6IGZvcm1WYWx1ZXMubGFzdE5hbWUsXHQgICAgICAgIFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBcImVtYWlsXCIgXHRcdDogZm9ybVZhbHVlcy5lbWFpbCxcdCAgICAgICAgXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIFwicGhvbmVcIiBcdFx0OiBmb3JtVmFsdWVzLnBob25lLFx0ICAgICAgICBcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgXCJkb2JcIiBcdFx0XHQ6IGZvcm1WYWx1ZXMuZG9iLFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0KGVycm9yLHJlc3VsdCk9Pntcblx0XHRcdFx0XHRcdFx0XHRcdGlmKGVycm9yKXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0KTtcblxuXHRcdHJldHVybiBlbXBfaWQ7XG5cdH0sXG5cblx0XCJkZWxldGVBbGxvdGVkU2hpZnQxXCIgOiBmdW5jdGlvbihlbXBpZCl7XG5cdFx0RW1wTWFzdGVyLnJlbW92ZSh7XCJfaWRcIjplbXBpZH0sIChlcnJvcixyZXN1bHQpPT57XG5cdFx0XHRcdGlmKGVycm9yKXtcblx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxufSk7IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuXG5cbmV4cG9ydCBjb25zdCBTaGlmdEFsbG9jYXRpb24gPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignc2hpZnRBbGxvY2F0aW9uJyk7XG5cbmlmKE1ldGVvci5pc1NlcnZlcil7XG5cblx0TWV0ZW9yLnB1Ymxpc2goXCJhbGxTaGlmdHNEYXRhXCIsZnVuY3Rpb24oKXtcblx0XHR2YXIgYWxsU2hpZnRzID0gU2hpZnRBbGxvY2F0aW9uLmZpbmQoe30pO1xuXHRcdGNvbnNvbGUubG9nKFwiYWxsU2hpZnRzXCIsYWxsU2hpZnRzKTtcblx0XHRyZXR1cm4gYWxsU2hpZnRzO1xuXHR9KTtcbn1cblxuTWV0ZW9yLm1ldGhvZHMoe1xuXHRcImluc2VydEJhc2ljSW5mbzJcIiA6IGZ1bmN0aW9uKGZvcm1WYWx1ZXMpe1xuXHRcdGNvbnNvbGUubG9nKGZvcm1WYWx1ZXMpO1xuXG5cdFx0dmFyIGVtcF9pZCA9IFNoaWZ0QWxsb2NhdGlvbi5pbnNlcnQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFwic2hpZnROYW1lXCIgXHRcdDogZm9ybVZhbHVlcy5zaGlmdE5hbWUsXHQgICAgICAgIFxuXHRcdFx0XHRcdFx0XHQgICAgICAgIFwic3RhcnRUaW1lXCIgXHRcdDogZm9ybVZhbHVlcy5zdGFydFRpbWUsXHQgICAgICAgIFxuXHRcdFx0XHRcdFx0XHQgICAgICAgIFwic3RhcnRUaW1lQW1QbVwiIFx0OiBmb3JtVmFsdWVzLnN0YXJ0VGltZUFtUG0sXHQgICAgICAgIFxuXHRcdFx0XHRcdFx0XHQgICAgICAgIFwiZW5kVGltZVwiIFx0XHRcdDogZm9ybVZhbHVlcy5lbmRUaW1lLFx0ICAgICAgICBcblx0XHRcdFx0XHRcdFx0ICAgICAgICBcImVuZFRpbWVBbVBtXCIgXHRcdDogZm9ybVZhbHVlcy5lbmRUaW1lQW1QbSxcdCAgICAgICAgXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgXCJlZmZlY3RpdmVGcm9tXCIgXHQ6IGZvcm1WYWx1ZXMuZWZmZWN0aXZlRnJvbSxcdCAgIFxuXHRcdFx0XHRcdFx0XHQgICAgICAgIFwidGlsbERhdGVcIiBcdFx0XHQ6IGZvcm1WYWx1ZXMudGlsbERhdGUsXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdH0sIFxuXHRcdFx0XHRcdFx0XHRcdChlcnJvcixyZXN1bHQpPT57XG5cdFx0XHRcdFx0XHRcdFx0XHRpZihlcnJvcil7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdCk7XG5cblx0XHRyZXR1cm4gZW1wX2lkO1xuXHR9LFx0XG5cblx0XCJ1cGRhdGVCYXNpY0luZm8yXCIgOiBmdW5jdGlvbihmb3JtVmFsdWVzKXtcblx0XHRjb25zb2xlLmxvZyhmb3JtVmFsdWVzKTtcblxuXHRcdHZhciBlbXBfaWQgPSBTaGlmdEFsbG9jYXRpb24udXBkYXRlKFxuXHRcdFx0XHRcdFx0XHRcdHtcIl9pZFwiOiBmb3JtVmFsdWVzLl9pZH0sXG5cdFx0XHRcdFx0XHRcdFx0eyRzZXQgOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwic2hpZnROYW1lXCIgXHRcdDogZm9ybVZhbHVlcy5zaGlmdE5hbWUsXHQgICAgICAgIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgXCJzdGFydFRpbWVcIiBcdFx0OiBmb3JtVmFsdWVzLnN0YXJ0VGltZSxcdCAgICAgICAgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBcInN0YXJ0VGltZUFtUG1cIiBcdDogZm9ybVZhbHVlcy5zdGFydFRpbWVBbVBtLFx0ICAgICAgICBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIFwiZW5kVGltZVwiIFx0XHRcdDogZm9ybVZhbHVlcy5lbmRUaW1lLFx0ICAgICAgICBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIFwiZW5kVGltZUFtUG1cIiBcdFx0OiBmb3JtVmFsdWVzLmVuZFRpbWVBbVBtLFx0ICAgICAgICBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIFwiZWZmZWN0aXZlRnJvbVwiIFx0OiBmb3JtVmFsdWVzLmVmZmVjdGl2ZUZyb20sXHQgICBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIFwidGlsbERhdGVcIiBcdFx0XHQ6IGZvcm1WYWx1ZXMudGlsbERhdGUsXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0KGVycm9yLHJlc3VsdCk9Pntcblx0XHRcdFx0XHRcdFx0XHRcdGlmKGVycm9yKXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0KTtcblxuXHRcdHJldHVybiBlbXBfaWQ7XG5cdH0sXG5cblx0XCJkZWxldGVBbGxvdGVkU2hpZnQyXCIgOiBmdW5jdGlvbihlbXBpZCl7XG5cdFx0U2hpZnRBbGxvY2F0aW9uLnJlbW92ZSh7XCJfaWRcIjplbXBpZH0sIChlcnJvcixyZXN1bHQpPT57XG5cdFx0XHRcdGlmKGVycm9yKXtcblx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxufSk7IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuXG5leHBvcnQgY29uc3QgU2hpZnRTZXR0aW5nID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ3NoaWZ0U2V0dGluZycpO1xuXG5pZihNZXRlb3IuaXNTZXJ2ZXIpe1xuXG5cdE1ldGVvci5wdWJsaXNoKFwiYWxsU2hpZnREYXRhXCIsZnVuY3Rpb24oKXtcblx0XHR2YXIgYWxsU2hpZnQgPSBTaGlmdFNldHRpbmcuZmluZCh7fSk7XG5cdFx0Y29uc29sZS5sb2coXCJhbGxTaGlmdFwiLGFsbFNoaWZ0KTtcblx0XHRyZXR1cm4gYWxsU2hpZnQ7XG5cdH0pO1xufVxuXG5NZXRlb3IubWV0aG9kcyh7XG5cdFwiaW5zZXJ0QmFzaWNJbmZvXCIgOiBmdW5jdGlvbihmb3JtVmFsdWVzKXtcblx0XHRjb25zb2xlLmxvZyhmb3JtVmFsdWVzKTtcblxuXHRcdHZhciBlbXBfaWQgPSBTaGlmdFNldHRpbmcuaW5zZXJ0KHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcInNoaWZ0TmFtZVwiIFx0XHQ6IGZvcm1WYWx1ZXMuc2hpZnROYW1lLFx0ICAgICAgICBcblx0XHRcdFx0XHRcdFx0ICAgICAgICBcInN0YXJ0VGltZVwiIFx0XHQ6IGZvcm1WYWx1ZXMuc3RhcnRUaW1lLFx0ICAgICAgICBcblx0XHRcdFx0XHRcdFx0ICAgICAgICBcInN0YXJ0VGltZUFtUG1cIiBcdDogZm9ybVZhbHVlcy5zdGFydFRpbWVBbVBtLFx0ICAgICAgICBcblx0XHRcdFx0XHRcdFx0ICAgICAgICBcImVuZFRpbWVcIiBcdFx0XHQ6IGZvcm1WYWx1ZXMuZW5kVGltZSxcdCAgICAgICAgXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgXCJlbmRUaW1lQW1QbVwiIFx0XHQ6IGZvcm1WYWx1ZXMuZW5kVGltZUFtUG0sXHQgICAgICAgIFxuXHRcdFx0XHRcdFx0XHQgICAgICAgIFwiZWZmZWN0aXZlRnJvbVwiIFx0OiBmb3JtVmFsdWVzLmVmZmVjdGl2ZUZyb20sXHQgICBcblx0XHRcdFx0XHRcdFx0ICAgICAgICBcInRpbGxEYXRlXCIgXHRcdFx0OiBmb3JtVmFsdWVzLnRpbGxEYXRlLFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHR9LCBcblx0XHRcdFx0XHRcdFx0XHQoZXJyb3IscmVzdWx0KT0+e1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYoZXJyb3Ipe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQpO1xuXG5cdFx0cmV0dXJuIGVtcF9pZDtcblx0fSxcdFxuXG5cdFwidXBkYXRlQmFzaWNJbmZvXCIgOiBmdW5jdGlvbihmb3JtVmFsdWVzKXtcblx0XHRjb25zb2xlLmxvZyhmb3JtVmFsdWVzKTtcblxuXHRcdHZhciBlbXBfaWQgPSBTaGlmdFNldHRpbmcudXBkYXRlKFxuXHRcdFx0XHRcdFx0XHRcdHtcIl9pZFwiOiBmb3JtVmFsdWVzLl9pZH0sXG5cdFx0XHRcdFx0XHRcdFx0eyRzZXQgOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwic2hpZnROYW1lXCIgXHRcdDogZm9ybVZhbHVlcy5zaGlmdE5hbWUsXHQgICAgICAgIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgXCJzdGFydFRpbWVcIiBcdFx0OiBmb3JtVmFsdWVzLnN0YXJ0VGltZSxcdCAgICAgICAgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBcInN0YXJ0VGltZUFtUG1cIiBcdDogZm9ybVZhbHVlcy5zdGFydFRpbWVBbVBtLFx0ICAgICAgICBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIFwiZW5kVGltZVwiIFx0XHRcdDogZm9ybVZhbHVlcy5lbmRUaW1lLFx0ICAgICAgICBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIFwiZW5kVGltZUFtUG1cIiBcdFx0OiBmb3JtVmFsdWVzLmVuZFRpbWVBbVBtLFx0ICAgICAgICBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIFwiZWZmZWN0aXZlRnJvbVwiIFx0OiBmb3JtVmFsdWVzLmVmZmVjdGl2ZUZyb20sXHQgICBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIFwidGlsbERhdGVcIiBcdFx0XHQ6IGZvcm1WYWx1ZXMudGlsbERhdGUsXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0KGVycm9yLHJlc3VsdCk9Pntcblx0XHRcdFx0XHRcdFx0XHRcdGlmKGVycm9yKXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0KTtcblxuXHRcdHJldHVybiBlbXBfaWQ7XG5cdH0sXG5cblx0XCJkZWxldGVBbGxvdGVkU2hpZnRcIiA6IGZ1bmN0aW9uKGVtcGlkKXtcblx0XHRTaGlmdFNldHRpbmcucmVtb3ZlKHtcIl9pZFwiOmVtcGlkfSwgKGVycm9yLHJlc3VsdCk9Pntcblx0XHRcdFx0aWYoZXJyb3Ipe1xuXHRcdFx0XHRcdHJldHVybiBlcnJvcjtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybjtcblx0fVxuXG59KTsiLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCBcIi9pbXBvcnRzL3NoaWZ0TWdtdC9zaGlmdFJvc3Rlci9lbXBUZW1wL2VtcE1hc3Rlci5qc1wiO1xuaW1wb3J0IFwiL2ltcG9ydHMvc2hpZnRNZ210L3NoaWZ0Um9zdGVyL3NoaWZ0QWxsb3RtZW50L3NoaWZ0QWxsb2NhdGlvbi5qc1wiO1xuaW1wb3J0IFwiL2ltcG9ydHMvc2hpZnRNZ210L3NoaWZ0Um9zdGVyL3NoaWZ0U2V0dGluZy9zaGlmdFNldHRpbmcuanNcIjtcblxuXG4vKmltcG9ydCBMaW5rcyBmcm9tICcvaW1wb3J0cy9hcGkvbGlua3MnO1xuXG5mdW5jdGlvbiBpbnNlcnRMaW5rKHRpdGxlLCB1cmwpIHtcbiAgTGlua3MuaW5zZXJ0KHsgdGl0bGUsIHVybCwgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpIH0pO1xufSovXG5cbk1ldGVvci5zdGFydHVwKCgpID0+IHtcbiAgLy8gSWYgdGhlIExpbmtzIGNvbGxlY3Rpb24gaXMgZW1wdHksIGFkZCBzb21lIGRhdGEuXG4vKiAgaWYgKExpbmtzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG4gICAgaW5zZXJ0TGluayhcbiAgICAgICdEbyB0aGUgVHV0b3JpYWwnLFxuICAgICAgJ2h0dHBzOi8vd3d3Lm1ldGVvci5jb20vdHV0b3JpYWxzL3JlYWN0L2NyZWF0aW5nLWFuLWFwcCdcbiAgICApO1xuXG4gICAgaW5zZXJ0TGluayhcbiAgICAgICdGb2xsb3cgdGhlIEd1aWRlJyxcbiAgICAgICdodHRwOi8vZ3VpZGUubWV0ZW9yLmNvbSdcbiAgICApO1xuXG4gICAgaW5zZXJ0TGluayhcbiAgICAgICdSZWFkIHRoZSBEb2NzJyxcbiAgICAgICdodHRwczovL2RvY3MubWV0ZW9yLmNvbSdcbiAgICApO1xuXG4gICAgaW5zZXJ0TGluayhcbiAgICAgICdEaXNjdXNzaW9ucycsXG4gICAgICAnaHR0cHM6Ly9mb3J1bXMubWV0ZW9yLmNvbSdcbiAgICApO1xuICB9Ki9cbn0pO1xuIl19
