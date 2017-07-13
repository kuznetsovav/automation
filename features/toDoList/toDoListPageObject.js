let I;

module.exports = {

    _init() {
        I = actor();
    },

    addToDo: {
        field: '.form-group.bootstrap3-req .form-control',
	button: '.form-group .btn.btn-default',
	errorMessage: '.alert.alert-danger.alert-dismissable.alert-link',
    },

    /* items: {
	completeButton: '.class',
	removeButton: '.class',
	title: '.class',
    }, 
    */


    addToDoItem(toDoTitle) {
        I.waitForVisible(this.addToDo.field, 10);
	I.waitForVisible(this.addToDo.button, 10);  
        I.click(this.addToDo.field);
        I.fillField(this.addToDo.field, toDoTitle);
        I.click(this.addToDo.button); 
    },

    completeToDoItem() {
	//list of actions
    },
    

    removeToDoItem() {
	//list of actions
    },
};

