function PetCtrl($scope) {
  $scope.pets = [
    {name:'Doctor Doom', url:"http://placekitten.com/150/150", adopted:false},
    {name:'Wilson Cat', url:"http://placekitten.com/151/150", adopted:false}, 
    {name: 'Tuna', url:"http://placekitten.com/152/150", adopted:false}];
 
  $scope.addPet = function() {
    $scope.pets.push({name:$scope.petName, url:$scope.petURL, adopted:false});
    $scope.petName = '';
    $scope.petURL = '';
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.pets, function(pet) {
      count += pet.adopted ? 0 : 1;
    });
    return count;
  };
  
  $scope.adopt = function() {
    var gonePets = $scope.pets;
    $scope.pets = [];
    angular.forEach(gonePets, function(pet) {
      if (!pet.adopted) $scope.pets.push(pet);
    });
  };
}