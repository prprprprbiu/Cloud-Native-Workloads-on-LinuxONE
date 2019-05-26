angular.module('bankController', [])

// inject the Bank service factory into our controller
.controller('mainController', ['$scope', '$http', 'Customers', function($scope, $http, Customers) {
	$scope.formData1 = {};
	$scope.formData2 = {};

	// GET =====================================================================
	// when landing on the page, get all todos and show them
	// use the service to get all the todos
	$scope.checkCustomer = function() { 
		Customers.get()
			.success(function(data) {
			// TODO: 和数据库交叉验证
			});
		};

	// CREATE ==================================================================
	// when submitting the add form, send the text to the node API
	$scope.addCustomer = function() {
		// validate the formData to make sure that something is there
		// if form is empty, nothing will happen
		if ($scope.formData1.id != undefined && $scope.formData1.password != undefined) {
			// call the create function from our service (returns a promise object)
			Customers.create($scope.formData1)

				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.formData1 = {}; // clear the form so our user is ready to enter another
					$scope.customers = data; // assign our new list of todos
				});
		}
	};

});

// Class: Bank
// 构造函数
// Bank(Customer[])
// 属性
// customers: Customer[]
// numberOfCustomer: int
// 方法
// getters and setters

// Class: Customer
// 构造函数
// Customer(int, string, Account[]) 初始化客户
// 属性
// customer_id: int
// name: string
// password: string
// accounts: Account[]
// numberOfAccount: int
// 方法
// getters and setters 

// Class: Account
// Account(double) 初始化账户
// 属性
// account_id: int
// balance: double
// 方法
// getters and setters
// deposit(double): double 
// withdraw(double): double
// invest(double): double



// 注意错误处理和单元测试