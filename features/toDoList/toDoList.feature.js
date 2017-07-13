const toDoListTestData = require('./toDoListTestData.js').toDoListTestData;

Feature('ToDo List');

Before((I) => {
  I.openSite();
});

Scenario('A user can add a ToDo item', (I, toDoList) => {
  toDoList.addToDoItem(toDoListTestData.toDoItemTitle);
  //here should be located a checklist
});

Scenario('A user can complete a ToDo item', (I, toDoList) => {
  toDoList.addToDoItem(toDoListTestData.toDoItemTitle);
  toDoList.completeToDoItem();
  //here should be located a checklist
});

Scenario('A user can remove an incomplete ToDo item', (I, toDoList) => {
  toDoList.addToDoItem(toDoListTestData.toDoItemTitle);
  toDoList.removeToDoItem();
  //here should be located a checklist
});

Scenario('A user can remove an completed ToDo item', (I, toDoList) => {
  toDoList.addToDoItem(toDoListTestData.toDoItemTitle);
  toDoList.completeToDoItem();
  toDoList.removeToDoItem();
  //here should be located a checklist
});

Scenario('A user can add several ToDo items', (I, toDoList) => {
  toDoList.addToDoItem(toDoListTestData.toDoItemTitle);
  toDoList.addToDoItem(toDoListTestData.toDoItemTitle);
  //here should be located a checklist
});

Scenario('A user can remove several ToDo items', (I, toDoList) => {
  toDoList.addToDoItem(toDoListTestData.toDoItemTitle);
  toDoList.addToDoItem(toDoListTestData.toDoItemTitle);
  toDoList.removeToDoItem();
  toDoList.removeToDoItem();
  //here should be located a checklist
});


Scenario('A user cannot add a ToDo item without title', (I, toDoList) => {
  toDoList.addToDoItem(toDoListTestData.toDoItemEmptyTitle);
  I.see('This field is required.', toDoList.addToDo.errorMessage); 
  //here should be located a checklist
});



