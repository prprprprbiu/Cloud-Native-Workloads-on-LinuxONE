angular.module('todoController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Todos', function($scope, $http, Todos) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Todos.get()
			.success(function(data) {
				$scope.todos = data;
				$scope.loading = false;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createTodo = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Todos.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.todos = data; // assign our new list of todos
					});
			}
		};

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteTodo = function(id) {
			$scope.loading = true;

			Todos.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.todos = data; // assign our new list of todos
				});
		};
	}]);

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
// balance: double
// 方法
// getters and setters
// deposit(double): double 
// withdraw(double): double
// invest(double): double



// 注意错误处理和单元测试