'use strict';

module.exports = function (ngModule) {

    // Default debounce time.
    const defaultDebounceTime = 400;

    ngModule.directive('ngMultiSelector', function () {
        return {
            restrict: 'E',
            templateUrl: function (tElement, tAttrs) {
                return tAttrs.templateUrl || 'ng-multi-selector.html';
            },
            transclude: true,
            replace: false,
            require: 'ngModel',
            scope: {
                ngItemsSource: '=?', // List of item which should be used for displayed in ng-multi-selector.
                ngKeyProperty: '=', // Name of property which is used for define the selected item.
                ngDisplayProperty: '=', // Which property should be used for display in ng-multi-selector.
                ngDisabled: '=',// Whether directive should be disabled or not.
                ngPlaceholderTitle: '@', // Text which should be displayed on title place holder.
                ngPlaceholderSearch: '@', // Text which should be displayed on drop-down list search box.
                maxlength: '=?',// Search box maximum length.
                ngSeparator: '=', // Separator which should be used to separate selected items.
                ngIsAutoClose: '=', // Whether drop-down list should automatically closed or manually when an item has been clicked.
                ngLimitItemAmount: '=',// Number of items which should be shown up in drop-down list.
                ngIsClearButtonAvailable: '=',// Whether clear button is visible or not.
                ngIsSearchBoxAvailable: '=',//Whether search box is available or not.
                ngInterval: '=',// Search box de-bounced time.
                ngCustomItemTemplate: '=',// Whether custom template is supported or not.
                ngActiveClass: '=?',// Class which will be added when item is active.

                ngSearchItems: '&'//Raised when component wants to search for a keyword.
            },
            link: function (scope, element, attr, ngModel) {

                //#region Properties

                // Directive options.
                scope.options = {
                    debounceTime: defaultDebounceTime
                };

                //#endregion

                //#region Methods

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
                scope.fnSelectItem = function (item) {
                    // Find item index.
                    let iIndex = -1;

                    // Get item value.
                    let itemValue = item;

                    if (scope.chosenItems)
                        iIndex = scope.chosenItems.indexOf(itemValue);
                    else
                        scope.chosenItems = [];

                    if (iIndex === -1) {
                        scope.chosenItems.push(itemValue);
                        ngModel.$setViewValue(scope.chosenItems);
                        return;
                    }

                    // Item has been selected before. Remove it from the selected one.
                    scope.chosenItems.splice(iIndex, 1);
                    if (!scope.chosenItems || scope.chosenItems.length < 1)
                        scope.chosenItems = null;
                    ngModel.$setViewValue(scope.chosenItems);
                };


                //#endregion

                //#region Watchers

                /*
                * Watch item for changes.
                * */
                scope.$watch(
                    function () {
                        return ngModel.$modelValue;
                    },
                    function (value) {

                        // Value is not a list.
                        if (!(value instanceof Array)){
                            scope.chosenItems = value;
                            ngModel.$setViewValue(null);
                            return;
                        }

                        // Empty array.
                        if (value.length < 1) {
                            ngModel.$setViewValue(null);
                            scope.chosenItems = null;
                            return;
                        }
                        scope.chosenItems = value;
                    }, true);

                /*
                * Watch for interval changes.
                * */
                scope.$watch('ngInterval', function (oldValue, value) {
                    if (!value || value < defaultDebounceTime)
                        return;

                    // Value didn't change.
                    if (oldValue === value)
                        return;

                    scope.options.debounceTime = value;
                });

                //#endregion
            },
            controller: function ($scope, $element, $timeout) {
                //#region Properties

                // Chosen items in ng-multi-selector.
                $scope.chosenItems = [];

                // Chosen values in ng-multi-selector.
                $scope.chosenValues = [];

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

                    // Key property has been specified.
                    if ($scope.ngKeyProperty) {
                        let items = $scope.chosenItems.filter(function (x) {
                            return x[$scope.ngKeyProperty] === item[$scope.ngKeyProperty];
                        });
                        return (items && items.length > 0) ? 0 : -1;
                    }

                    // Value property has been specified.
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
                                if ($scope.ngDisplayProperty && $scope.ngDisplayProperty.length > 0) {
                                    return x[$scope.ngDisplayProperty];
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
                    if (!$scope.ngSeparator || !$scope.ngSeparator.length < 1)
                        return ' - ';
                    return $scope.ngSeparator;
                };

                /*
                * Callback which is raised when drop-down menu is clicked.
                * */
                $scope.clickDropDownMenu = function (event) {

                    // Event is invalid.
                    if (!event)
                        return;

                    if (!$scope.ngIsAutoClose)
                        event.stopPropagation();
                };

                /*
                * Get item display
                * */
                $scope.getItemDisplay = function (item) {
                    if (!$scope.ngDisplayProperty || $scope.ngDisplayProperty.length < 1)
                        return item;

                    return item[$scope.ngDisplayProperty];
                };

                /*
                * Get active class.
                * */
                $scope.fnGetActiveClass = function () {
                    // Active class is not defined.
                    if (!$scope.ngActiveClass) {
                        return 'active';
                    }

                    return $scope.ngActiveClass;
                };

                /*
                * Event which is raised when keyword is entered to search box.
                * */
                $scope.fnEmitSearchKeyword = function () {
                    $scope.ngSearchItems({keyword: $scope.model.keyword});
                }

                //#endregion
            }
        };
    })
};
