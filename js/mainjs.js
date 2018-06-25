
    var phonebook = {
        contacts: [],
        addContact: function (firstName, lastName, telephone) {
            this.contacts.push({
                firstName: firstName,
                lastName: lastName,
                telephone: telephone
            });
        },
        deleteContact: function (position) {
            this.contacts.splice(position, 1);
        }
    };

var handlers = {
        addContact: function () {
            var addFirstNameInput = document.getElementById('firstName');
            var addLastNameInput = document.getElementById('lastName');
            var addTelephoneInput = document.getElementById('telephone');
                       
            phonebook.addContact(addFirstNameInput.value, addLastNameInput.value, addTelephoneInput.value );
            
            addFirstNameInput.value = '';
            addLastNameInput.value = '';
            addTelephoneInput.value = '';
            
            view.displayContacts();
        },
        deleteContact: function (position) {
            phonebook.deleteContact(position);
            
            view.displayContacts();
        }

    };

    var view = {
        displayContacts: function () {
            var contactsUl = document.querySelector('ul');
            contactsUl.innerHTML = '';
            for (var i = 0; i < phonebook.contacts.length; i++) {
                var contactLi = document.createElement('li');
                var contact = phonebook.contacts[i];
                var contactTextWithCompletion = phonebook.contacts[i].firstName + '  ' + phonebook.contacts[i].lastName + '  ' + phonebook.contacts[i].telephone + '   ';
                
                contactLi.id = i;
                contactLi.textContent = contactTextWithCompletion;
                contactLi.appendChild(this.createDeleteButton());
                contactsUl.appendChild(contactLi);
            }
        },
        createDeleteButton: function () {
            var deleteButton = document.createElement('button');
            deleteButton.textContent = "Delete";
            deleteButton.className = 'deleteButton';
            return deleteButton;

        },
        setUpEventListeners: function () {
            var contactUl = document.querySelector('ul');

            contactUl.addEventListener('click', function (event) {
                var elementClicked = event.target;

                if (elementClicked.className === 'deleteButton') {
                    handlers.deleteContact(parseInt(elementClicked.parentNode.id));
                }
            });
        }
    };

    view.setUpEventListeners();

























