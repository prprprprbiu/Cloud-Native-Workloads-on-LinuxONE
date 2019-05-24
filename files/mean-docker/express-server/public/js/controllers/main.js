var app = angular.module('meanTodo', []);

app.controller('mainController', function($scope) {
	$scope.customer = {
		id: '',
		password: '',
		accounts: [],
	};
	$scope.accounts = [];
	$scope.account = {
		id: '',
		balance: 0.0,
	};
	$scope.features = [];
	$scope.feature = {
		text:''
	}
	$scope.isSignIn = false;
	$scope.isSelectAccount = false;

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