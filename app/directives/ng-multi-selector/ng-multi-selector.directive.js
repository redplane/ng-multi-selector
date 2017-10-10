'use strict';

angular.module('ng-multi-selector', [])
    .directive('ngMultiSelector', function () {
        return {
            restrict: 'E',
            templateUrl: 'directives/ng-multi-selector/ng-multi-selector.directive.html',
            transclude: false,
            replace: false,
            require: 'ngModel',
            scope: {
                items: '=?', // List of item which should be used for displayed in ng-multi-selector.
                displayProperty: '=', // Which property should be used for display in ng-multi-selector.
                valueProperty: '=',// Which property of item should be bound to model.
                ngDisabled: '=',// Whether directive should be disabled or not.
                placeholderTitle: '=', // Text which should be displayed on title place holder.
                placeholderSearch: '=', // Text which should be displayed on drop-down list search box.
                maxlength: '=?',// Search box maximum length.
                separator: '=', // Separator which should be used to separate selected items.
                autoClose: '=', // Whether drop-down list should automatically closed or manually when an item has been clicked.
                limitItemAmount: '=',// Number of items which should be shown up in drop-down list.
                isClearButtonAvailable: '=',// Whether clear button is visible or not.
                isSearchBoxAvailable: '=',//Whether search box is available or not.
                interval: '=',//Search box de-bounced time.

                ngSearchItems: '&'//Raised when component wants to search for a keyword.
            },
            link: function (scope, element, attr, ngModel) {

                //#region Properties

                // Item has been selected before. Update the ng-model.
                if (scope.item)
                    ngModel.$setViewValue(scope.item);

                //#endregion

                //#region Methods

                /*
                * Watch item for changes.
                * */
                scope.$watch(
                    function () {return ngModel.$modelValue;},
                    function (value) {
                    if (value instanceof Array){
                        if (value.length < 1){
                            ngModel.$setViewValue(null);
                            scope.chosenItems = null;
                        } else {
                            scope.chosenItems = value;
                        }
                    } else {
                        scope.chosenItems = value;
                    }

                }, true);

                /*
                * Clear chosen items from list.
                * */
                scope.clear = function () {
                    scope.chosenItems = null;
                    ngModel.$setViewValue(null);
                };

                /*
                * Called when an item is selected.
                * */
                scope.selectItem = function (item) {
                    // Find item index.
                    let iIndex = -1;

                    if (scope.chosenItems)
                        iIndex = scope.chosenItems.indexOf(item);
                    else
                        scope.chosenItems = [];

                    if (iIndex === -1) {
                        scope.chosenItems.push(item);
                        ngModel.$setViewValue(scope.chosenItems);
                        return;
                    }

                    scope.chosenItems.splice(iIndex, 1);
                    if (!scope.chosenItems || scope.chosenItems.length < 1)
                        scope.chosenItems = null;
                    ngModel.$setViewValue(scope.chosenItems);
                };


                //#endregion
            },
            controller: function ($scope, $element) {
                //#region Properties

                // Chosen items in multi selector.
                $scope.chosenItems = [];

                //#endregion

                //#region Methods

                /*
                * Called when component has been initiated successfully.
                * */
                $scope.init = function () {

                    // Reflect directive instance.
                    $scope.instance = this;
                };

                /*
                *
                * */
                $scope.initSearchBox = function(){

                    // Find search box.
                    let oSearchBox = $element.find('.ng-multi-selector-search-box').first();

                    // Find interval.
                    let iInterval = $scope.interval;
                    if (!iInterval || iInterval < 400)
                        iInterval = 400;

                    Rx.Observable.fromEvent(oSearchBox, 'keyup')
                        .pluck('target', 'value')
                        .map(x => {
                            if (x)
                                return x.trim();
                            return x;
                        })
                        .debounce(iInterval)
                        .distinctUntilChanged()
                        .subscribe((x) => {
                            $scope.ngSearchItems({keyword: x});
                        });
                };

                /**
                 * Generate loop command.
                 */
                $scope.loop = function () {
                    let szCommand = 'item[valueProperty] as item[displayProperty] for item in items';
                    if ($scope.valueProperty)
                        szCommand = szCommand.replace('[valueProperty]', '[\'' + $scope.valueProperty + '\']');
                    else
                        szCommand = szCommand.replace('[valueProperty]', '');

                    if ($scope.displayProperty)
                        szCommand = szCommand.replace('[displayProperty]', '[\'' + $scope.displayProperty + '\']');
                    else
                        szCommand = szCommand.replace('[displayProperty', '');
                    return szCommand;
                };

                /*
                * Contains internal information of directive.
                * */
                $scope.model = {
                    keyword: null,
                    lastModified: 0,
                    timeout: null
                };

                /*
                * Check whether item is selected or not.
                * */
                $scope.getItemSelected = function (item) {

                    // No item has been chosen.
                    if (!$scope.chosenItems)
                        return -1;

                    // Value property has been specified.
                    if ($scope.valueProperty)
                        return $scope.chosenItems.indexOf(item[$scope.valueProperty]);

                    return $scope.chosenItems.indexOf(item);
                };


                /*
                 Get multi-selector title.
                 */
                $scope.getTitle = function () {
                    let szResult = '';

                    // Some items have been chosen.
                    if ($scope.chosenItems && $scope.chosenItems.length > 0) {
                        // Display property has been defined.
                        szResult = $scope.chosenItems
                            .map(function (x) {
                                if ($scope.displayProperty && $scope.displayProperty.length > 0) {
                                    return x[$scope.displayProperty];
                                }
                                return x;
                            })
                            .join($scope.getSeparator());
                        return szResult;
                    }

                    return szResult;
                };

                /*
                * Get separator of selected items.
                * */
                $scope.getSeparator = function () {
                    if (!$scope.separator || !$scope.separator.length < 1)
                        return ' - ';
                    return $scope.separator;
                };

                /*
                * Callback which is raised when drop-down menu is clicked.
                * */
                $scope.clickDropDownMenu = function (event) {

                    // Event is invalid.
                    if (!event)
                        return;

                    if (!$scope.autoClose)
                        event.stopPropagation();
                };
                //#endregion
            }
        };
    });