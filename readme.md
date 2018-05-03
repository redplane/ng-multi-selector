# ng-multi-selector

Description:

 * This component provides a control which helps user to find records in service using keyword.
 * More than one item can be selected.
 * AngularJS supported.


Online demo can be found [here](http://ng-multi-selector.bitballoon.com/#!/demo/):

## Installation.
- **NPM**:  ```npm install ng-multi-selector```


## Basic implementation.
```javascript
<ng-multi-selector  ng-items-source="customers"
                    ng-display-property="'email'"
                    ng-model="chosenCustomers">
</ng-multi-selector>
```

#### Custom item template implementation.
```javascript
<ng-multi-selector  ng-items-source="customers"
                    ng-is-search-box-available="true"
                    ng-display-property="'email'"
                    ng-model="chosenCustomers"
                    ng-custom-item-template="true">
                        <a href="javascript:void(0);">
                            <b>{{item.firstName}}</b> <span>{{item.lastName}}</span>
                        </a>
</ng-multi-selector>
```

#### Keyword search event emitter.
```javascript
<ng-multi-selector  ng-items-source="customers"
                    ng-is-search-box-available="true"
                    ng-display-property="'email'"
                    ng-model="chosenCustomers"
                    ng-custom-item-template="true"
                    ng-search-items="getApiItems(keyword)">
                        <a href="javascript:void(0);">
                            <b>{{item.firstName}}</b> <span>{{item.lastName}}</span>
                        </a>
</ng-multi-selector>
```
### Options:
 * ```ng-items-source``` (string): List of item which should be used for displayed in ng-multi-selector.

 * ```ng-display-property``` (string): Which property should be used for display in ng-multi-selector.

 * ```ng-key-property``` (string): Which property should be used to know whether item has been selected or not.

 * ```ng-disabled``` (boolean): Whether directive should be disabled or not.

 * ```ng-placeholder-title``` (string): Text which should be displayed on title place holder.

 * ```ng-placeholder-search``` (string): Text which should be displayed on drop-down list search box.

 * ```maxlength``` (number) : Search box maximum length.

 * ```ng-separator``` (string) : Separator which should be used to separate selected items.

 * ```ng-is-auto-close``` (boolean): Whether drop-down list should automatically closed or manually when an item has been clicked.

 * ```ng-limit-item-amount``` (number): Number of items which should be shown up in drop-down list.

 * ```ng-is-clear-button-available``` (boolean): Whether clear button is visible or not.

 * ```ng-is-search-box-available``` (boolean):  Whether search box is available or not.

 * ```ng-limit-item-selection``` (number): Maximum number of items which can be selected.

 * ```ng-interval``` (number): Amount of time in milliseconds which search event should be emitted.

 * ```ng-custom-item-template``` (string): Template name of drop-down items.

 * ```ng-active-class``` (string): Class which is used when an item is selected (default: 'active').
 
### Events:
 * ```ng-search-items (keyword: string)```: Event which is raised when search event is emitted. 