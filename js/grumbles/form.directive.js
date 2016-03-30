(function(){
  angular
  .module('grumbles')
  .directive('grumbleForm', function(){
    return {
      templateUrl: 'js/grumbles/_grumble_form.html',
      replace: true,
      restrict: "C",
      scope: {
        grumble: '=',
        formType: '@'
      },
      link: function(scope){
       scope.create = function(){
         scope.grumble.$save()
        }
      }
    }
  });
})();
