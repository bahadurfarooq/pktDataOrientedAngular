'use strict';

app.controller('EmployeeCtrl', ['$scope',
  function ($scope) {

    var Employee = function (name, age) {
      this.name = name;
      this.age = age;
    };

    var GetEmployees = function () {
      return [
        new Employee("First employee", 56),
        new Employee("Second employee", 44),
        new Employee("Last employee", 32)
      ];
    };

    var employees = GetEmployees();

    $scope.employeeData = {
      first: employees[0],
      second: employees[1]
    };
  }
]);