angular.module('minhasDiretivas', [])
.directive('meu-painel', function(){

    ddo.restrict = "AE";
    ddo.transclude = true;

    ddo.scope = {
        titulo: '@'
    };

    ddo.templateUrl = 'js/directives/meu-painel.html';     

return ddo;
});