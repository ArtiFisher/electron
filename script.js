var app = document.getElementById("app"),
	result = document.getElementById("result"),
	form = document.getElementById("input-form"),
	name = document.getElementById("name-input"),
	surname = document.getElementById("surname-input"),
	imageURL = document.getElementById("imageURL-input"),
	unit = document.getElementById("unit-input"),
	title = document.getElementById("title-input"),
	skype = document.getElementById("skype-input"),
	mail = document.getElementById("mail-input"),
	description = document.getElementById("description-input"),
	saveButton = document.getElementById("save"),
	// userTemplate = document.getElementById("templates").querySelector(".user"),
	nextButton = document.getElementById("next");

nextButton.addEventListener('click', function(){
	app.classList.add('filling-form');
});

saveButton.addEventListener('click', function(){
	displayUser();
	app.classList.remove('filling-form');
});

function displayUser(){
	var element = document.createElement('div'),
		HTML = `<span class="name">${name.value}</span>
        <span class="surname">${surname.value}</span>
        <span class="imageURL">${imageURL.value}</span>
        <span class="unit">${unit.value}</span>
        <span class="title">${title.value}</span>
        <span class="skype">${skype.value}</span>
        <span class="mail">${mail.value}</span>
        <p class="description">${description.value}</p>`;
    element.classList.add('user');
    element.innerHTML = HTML;
    result.appendChild(element);
}