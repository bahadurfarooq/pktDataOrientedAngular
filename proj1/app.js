var app = angular.module('collectionBindingApp', []);

app.controller('EmployeeCtrl', ['$scope', 'employeeSvc',
    function($scope, employeeSvc) {

        $scope.employeeData = {
            employees: employeeSvc.getEmployees()
        };
    }
]);


app.service('employeeSvc',['$resource', function($resource) {

    var Employee = function(name, age) {
        this.name = name;
        this.age = age;
    };

    var getEmployees = function () {
        return [
            new Employee("First employee", 56),
            new Employee("First old employee", 58),
            new Employee("Second employee", 44),
            new Employee("Second old employee", 59),
            new Employee("Last employee", 32)
        ];
    };

    // Public API
    this.Employee = Employee;
    this.getEmployees = getEmployees;
}]);

app.filter('seniorEmployeesFltr', function () {
    return function (items) {
        return _.filter(items, function (item) {
            return item.age >= 58;
        })
    }
});