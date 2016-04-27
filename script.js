var app = document.getElementById("app"),
	output = document.getElementById("output"),
	form = document.getElementById("input-form"),
	nameInput = document.getElementById("name-input"),
	surnameInput = document.getElementById("surname-input"),
	imageURLInput = document.getElementById("imageURL-input"),
	unitInput = document.getElementById("unit-input"),
	titleInput = document.getElementById("title-input"),
	skypeInput = document.getElementById("skype-input"),
	mailInput = document.getElementById("mail-input"),
	descriptionInput = document.getElementById("description-input"),
	saveButton = document.getElementById("save"),
	cancelButton = document.getElementById("cancel"),
	// userTemplate = document.getElementById("templates").querySelector(".user"),
	nextButton = document.getElementById("next"),
	resultButton = document.getElementById("result"),
	fs = require('fs');

nextButton.addEventListener('click', function(){
	app.classList.add('filling-form');
});

resultButton.addEventListener('click', buildFile);

saveButton.addEventListener('click', function(){
	displayItem();
	app.classList.remove('filling-form');
});

cancelButton.addEventListener('click', function(){
	app.classList.remove('filling-form');
});

function displayItem(){
	var element = document.createElement('div'),
		// HTML = `<span class="name">${nameInput.value}</span>
  //       <span class="surname">${surnameInput.value}</span>
  //       <span class="imageURL">${imageURLInput.value}</span>
  //       <span class="unit">${unitInput.value}</span>
  //       <span class="title">${titleInput.value}</span>
  //       <span class="skype">${skypeInput.value}</span>
  //       <span class="mail">${mailInput.value}</span>
  //       <p class="description">${descriptionInput.value}</p>`;
		HTML = `<span class="name">${nameInput.value}</span>
        <span class="surname">${surnameInput.value}</span>
        <span class="imageURL">${imageURLInput.value}</span>
        <span class="unit">${unitInput.value}</span>
        <span class="title">${titleInput.value}</span>
        <span class="skype">${skypeInput.value}</span>
        <span class="mail">${mailInput.value}</span>
        <p class="description">${descriptionInput.value}</p>`;
    element.classList.add('item');
    element.innerHTML = HTML;
    output.appendChild(element);
}

function buildFile(){
	var fileName = 'output.html';
	var stream = fs.createWriteStream(fileName);

	stream.once('open', function(fd) {
	  var html = buildHtml();

	  stream.end(html);
	});
}

function buildHtml() {
  var header = '';
  var body = '';

  // concatenate header string
  // concatenate body string

  return '<!DOCTYPE html>'
       + '<html><header>' + header + '</header><body>' + output.innerHTML + '</body></html>';
};