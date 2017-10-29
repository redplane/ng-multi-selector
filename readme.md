## ng-multi-selector

Description:

 * This component provides a control which helps user to find records in service using keyword.
 * More than one item can be selected.
 * AngularJS supported.

Online demo can be found [here](http://ng-multi-selector.bitballoon.com/#!/demo/):

#### Basic implementation.
```javascript
<ng-multi-selector  items="customers"
                    display-property="'email'"
                    ng-model="chosenCustomers">
</ng-multi-selector>
```

#### Custom item template implementation.
```javascript
<ng-multi-selector  items="customers"
                    is-search-box-available="true"
                    display-property="'email'"
                    ng-model="chosenCustomers"
                    custom-item-template="true">
                        <a href="javascript:void(0);">
                            <b>{{item.firstName}}</b> <span>{{item.lastName}}</span>
                        </a>
</ng-multi-selector>
```

#### Keyword search event emitter.
```javascript
<ng-multi-selector  items="customers"
                    is-search-box-available="true"
                    display-property="'email'"
                    ng-model="chosenCustomers"
                    custom-item-template="true"
                    ng-search-items="getApiItems(keyword)">
                        <a href="javascript:void(0);">
                            <b>{{item.firstName}}</b> <span>{{item.lastName}}</span>
                        </a>
</ng-multi-selector>
```
### Options:
 * ```items``` (string): List of item which should be used for displayed in ng-multi-selector.
 * ```display-property``` (string): Which property should be used for display in ng-multi-selector.
 * ```value-property``` (string): Which property of item should be bound to model.
 * ```ng-disabled``` (boolean): Whether directive should be disabled or not.
 * ```placeholder-title``` (string): Text which should be displayed on title place holder.
 * ```placeholder-search``` (string): Text which should be displayed on drop-down list search box.
 * ```maxlength``` (number) : Search box maximum length.
 * ```separator``` (string) : Separator which should be used to separate selected items.
 * ```auto-close``` (boolean): Whether drop-down list should automatically closed or manually when an item has been clicked.
 * ```limit-item-amount``` (number): Number of items which should be shown up in drop-down list.
 * ```is-clear-button-available``` (boolean): Whether clear button is visible or not.
 * ```is-search-box-available``` (boolean):  Whether search box is available or not.
 * ```limit-item-selection``` (number): Maximum number of items which can be selected
 * ```interval``` (number): Amount of time in milliseconds which search event should be emitted.
 * ```custom-item-template``` (string): Template name of drop-down items.
 * ```active-class``` (string): Class which is used when an item is selected (default: 'active').
 * ```disabled``` (boolean): Whether multi drop-down selector control is disabled or not.
 * ```interval``` (number): Time between 2 times of emitting search event to another component to do the search.
 * ```item-template``` (string): Template of item displayed in drop-down list.
 
### Events:
 * ```ng-search-items (keyword: string)```: Event which is raised when search event is emitted. 
