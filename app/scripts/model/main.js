'use strict';

angular.module('clothsizingApp') .controller('ClothCtrl', function ($scope) {
  $scope.sizes = [
    {gender: 'Men', cloth: 'Shirts', region: 'United Kingdom', XXS: '32', XS: '34', S: '36', M: '38', L: '40', XL: '42', XXL: '44', XXXL: '42', done: false},
    {gender: 'Men', cloth: 'Shirts', region: 'United States', XXS: '12.5', XS: '13.5', S: '14.5', M: '15.5', L: '16.5', XL: '17.5', XXL: '18.5', XXXL: '19.5', done: false},
    {gender: 'Men', cloth: 'Shirts', region: 'Europe', XXS: '44', XS: '46', S: '48', M: '50', L: '52', XL: '54', XXL: '56', XXXL: '58', done: false},

    {gender: 'Men', cloth: 'T-shirts', region: 'United Kingdom', XXS: 'XXS', XS: 'XS', S: 'S', M: 'M', L: 'L', XL: 'XL', XXL: 'XXL', XXXL: 'XXXL', done: false},
    {gender: 'Men', cloth: 'T-shirts', region: 'United States', XXS: 'XXS', XS: 'XS', S: 'S', M: 'M', L: 'L', XL: 'XL', XXL: 'XXL', XXXL: 'XXXL', done: false},
    {gender: 'Men', cloth: 'T-shirts', region: 'Europe', XXS: '34', XS: '36', S: '37/38', M: '39/40', L: '41/42', XL: '43/44', XXL: '45/46', XXXL: '47/48', done: false},

    {gender: 'Men', cloth: 'Underwear', region: 'United Kingdom', XXS: 'XXS', XS: 'XS', S: 'S', M: 'M', L: 'L', XL: 'XL', XXL: 'XXL', XXXL: 'XXXL', done: false},
    {gender: 'Men', cloth: 'Underwear', region: 'United States', XXS: 'XXS', XS: 'XS', S: 'S', M: 'M', L: 'L', XL: 'XL', XXL: 'XXL', XXXL: 'XXXL', done: false},
    {gender: 'Men', cloth: 'Underwear', region: 'Europe', XXS: '', XS: '', S: '1', M: '2', L: '3', XL: '4', XXL: '5', XXXL: '', done: false},

    {gender: 'Men', cloth: 'Trousers/Jeans', region: 'United Kingdom', XXS: '30', XS: '32', S: '34', M: '36', L: '38', XL: '40', XXL: '42', XXXL: '44', done: false},
    {gender: 'Men', cloth: 'Trousers/Jeans', region: 'United States', XXS: '30', XS: '32', S: '34', M: '36', L: '38', XL: '40', XXL: '42', XXXL: '44', done: false},
    {gender: 'Men', cloth: 'Trousers/Jeans', region: 'Europe', XXS: '44', XS: '46', S: '48', M: '50', L: '52', XL: '56', XXL: '58', XXXL: '60', done: false},
    
    {gender: 'Men', cloth: 'Suits', region: 'United Kingdom', XXS: '30', XS: '32', S: '34/36', M: '38/40', L: '42/44', XL: '46', XXL: '48', XXXL: '50', done: false},
    {gender: 'Men', cloth: 'Suits', region: 'United States', XXS: '30', XS: '32', S: '34/36', M: '38/40', L: '42/44', XL: '46', XXL: '48', XXXL: '50', done: false},
    {gender: 'Men', cloth: 'Suits', region: 'Europe', XXS: '40', XS: '42', S: '44/46', M: '48/50', L: '52/54', XL: '56', XXL: '58', XXXL: '60', done: false},
    {gender: 'Men', cloth: 'Suits', region: 'Japan', XXS: '32', XS: '34', S: '36/38', M: '40/42', L: '44/46', XL: '48', XXL: '50', XXXL: '52', done: false},
    {gender: 'Men', cloth: 'Suits', region: 'Korea', XXS: '80', XS: '85', S: '90/95', M: '100/105', L: '110/115', XL: '120', XXL: '125', XXXL: '130', done: false},

    {gender: 'Men', cloth: 'Jackets', region: 'United Kingdom', XXS: '30', XS: '32', S: '34/36', M: '38/40', L: '42/44', XL: '46', XXL: '48', XXXL: '50', done: false},
    {gender: 'Men', cloth: 'Jackets', region: 'United States', XXS: '30', XS: '32', S: '34/36', M: '38/40', L: '42/44', XL: '46', XXL: '48', XXXL: '50', done: false},
    {gender: 'Men', cloth: 'Jackets', region: 'Europe', XXS: '40', XS: '42', S: '44/46', M: '48/50', L: '52/54', XL: '56', XXL: '58', XXXL: '60', done: false},
    {gender: 'Men', cloth: 'Jackets', region: 'Japan', XXS: '32', XS: '34', S: '36/38', M: '40/42', L: '44/46', XL: '48', XXL: '50', XXXL: '52', done: false},
    {gender: 'Men', cloth: 'Jackets', region: 'Korea', XXS: '80', XS: '85', S: '90/95', M: '100/105', L: '110/115', XL: '120', XXL: '125', XXXL: '130', done: false},

    {gender: 'Men', cloth: 'Coats', region: 'United Kingdom', XXS: '30', XS: '32', S: '34/36', M: '38/40', L: '42/44', XL: '46', XXL: '48', XXXL: '50', done: false},
    {gender: 'Men', cloth: 'Coats', region: 'United States', XXS: '30', XS: '32', S: '34/36', M: '38/40', L: '42/44', XL: '46', XXL: '48', XXXL: '50', done: false},
    {gender: 'Men', cloth: 'Coats', region: 'Europe', XXS: '40', XS: '42', S: '44/46', M: '48/50', L: '52/54', XL: '56', XXL: '58', XXXL: '60', done: false},
    {gender: 'Men', cloth: 'Coats', region: 'Japan', XXS: '32', XS: '34', S: '36/38', M: '40/42', L: '44/46', XL: '48', XXL: '50', XXXL: '52', done: false},
    {gender: 'Men', cloth: 'Coats', region: 'Korea', XXS: '80', XS: '85', S: '90/95', M: '100/105', L: '110/115', XL: '120', XXL: '125', XXXL: '130', done: false},
  ];
  $scope.regions = [
    {name: 'United Kingdom', value: 'uk'},
    {name: 'United States', value: 'us'},
    {name: 'Europe', value: 'eu'},
    {name: 'Japan', value: 'jp'},
    {name: 'Korea', value: 'kr'},
  ];
  $scope.genders = [
    {name: 'Women', value: 'Women'},
    {name: 'Men', value: '!Women'},
  ];
  $scope.clothes = [
    {name: 'Shirts'},
    {name: 'T-shirts'},
    {name: 'Underwear'},
    {name: 'Trousers/Jeans'},
    {name: 'Suits'},
    {name: 'Jackets'},
    {name: 'Coats'},
  ];
});
