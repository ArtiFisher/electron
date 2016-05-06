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
	var element = document.createElement('div');
		HTML = `<table cellspacing="0" cellpadding="0" border="0" style="border-bottom: 1px solid #d2d2d2;" >
                            <tr>
                                <td collspan="2" height="23">&nbsp;</td>
                            </tr>
                            <tr>
                                <td valign="top" style="padding-bottom: 30px;">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tr>
                                            <td align="center"valign="top" style="padding-left: 13px; padding-right: 13px;">
                                                <img width="166" height="217" src="${imageURLInput.value}" alt="">
                                            </td>
                                        </tr>
                                        <tr><td>&nbsp;</td></tr>
                                    </table>
                                </td>
                                <td valign="top" style="padding-left: 20px; padding-bottom: 30px;">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tr>
                                            <td style="font-style: italic; color: #38899b; font-size: 12px; padding-bottom: 10px; font-family: Arial,'Times New Roman', serif;">
                                                <!-- Название отдела -->
                                                <span style="font-style: italic; color: #38899b; font-size: 12px; padding-bottom: 10px; font-family: Arial,'Times New Roman', serif; line-height: 19px;">${unitInput.value}</span>
                                                <!-- / Название отдела -->
                                                <br>
                                                <!-- Позиция сотрудника -->
                                                ${titleInput.value}
                                                <!-- / Позиция сотрудника -->

                                             </td>
                                        </tr>
                                        <tr>
                                            <td style="color: #333333; font-size: 15px; font-weight: 700; padding-bottom: 16px; font-family: Arial,'Times New Roman', serif;">

                                                <!-- ФИО -->
                                                ${nameInput.value} ${surnameInput.value}
                                                <!-- / ФИО -->

                                            </td>
                                        </tr>
                                            <td style="color: #727272; font-size: 14px; font-style: italic; padding-bottom: 20px; font-family: Arial,'Times New Roman';">
                                                <img src="https://drive.google.com/uc?id=0B0gvOB9B-lkHV1BwRkhYNVVpY2M" alt="Skype">&nbsp;<span style="vertical-align: 15px;">${skypeInput.value}</span>&nbsp;&nbsp;&nbsp;
                                                <img src="https://drive.google.com/uc?id=0B0gvOB9B-lkHTlpVRXl3Sl9aS0U" alt="Lync">&nbsp;<span  style="vertical-align: 15px;">${mailInput.value}</span>
                                            </td>
                                        <tr>
                                            <td style="line-height: 25px; font-family: Arial,'Times New Roman', serif; color:#727272;">

                                                <!-- О сотруднике -->
                                                ${descriptionInput.value}
                                                <!-- / О сотруднике -->
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>`;
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
    return htmlParts.start + output.innerHTML + htmlParts.ending;
};