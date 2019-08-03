// Controller
// Style Guide: https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#servicesangular
// controllerAs Controller Syntax
//      Use the controllerAs syntax over the classic controller with $scope syntax.
//      this inside controllers gets bound to $scope
//      use $scope inside a controller only when needed. 
//
// controllerAs with vm
//      Use a capture variable for this when using the controllerAs syntax. 
//      Choose a consistent variable name such as vm, which stands for ViewModel.
//      Use a mpre specific name instead of vm on larger projects such as customerViewModel
//
// Bindable Members Up Top
//      Place bindable members at the top of the controller, alphabetized, and not spread through the controller code.
//
// Function Declarations to Hide Implementation Details
//      helps readability. 
//      one line functions are OK up top
//
// Defer Controller Logic to Services/Factories
//      better for code reuse
//      better for unit testing
//
// Keep Controllers Focused
//      try to keep one controller per view
//      
// Assigning Controllers
//      only use dynamic pairing if you know what you are doing
// 
// Use Named functions instead of passing anonymous function callbacks
//

angular
    .module('invoice', ['finance'])
    .controller('InvoiceController', ['currencyConverter', InvoiceController]);


// Use Named functions instead of passing anonymous function callbacks
function InvoiceController(currencyConverter) {
        // Binding members defined/declared up top and alphabetically
        var vm = this; // ViewModel: use instead of this to avoid scope rules inside functions
        vm.cost = 2;
        vm.inCurr = 'EUR';
        vm.pay = pay;
        vm.qty = 1;
        vm.total = total;
        vm.currencies = currencyConverter.currencies;
        
        // Function implementations below

        function pay() {
            window.alert('Thanks!');
        };

        function total(outCurr) {
            return currencyConverter.convert(vm.qty * vm.cost, vm.inCurr, outCurr);
        };
};