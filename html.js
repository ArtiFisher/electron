module.exports = {
	firstPart: `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
</head>
<body style="margin: 0; padding: 0; font-size: 14px; font-family: Arial,'Times New Roman', serif; color:#727272;" bgcolor="#ffffff">

<table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
    <tr>
        <td align="center" valign="top">

            <!-- header -->
            <table width="738" height="216"  cellspacing="0" cellpadding="0" border="0" style="margin: 17px auto 0;" bgcolor="#39c2d7">
                <tr>
                    <td style="padding-left: 24px; padding-top: 30px; padding-right: 24px; padding-bottom: 70px;">
                        <img width="79" height="28" src="https://drive.google.com/uc?id=0B0gvOB9B-lkHWWE5elI2aGFXbkU" alt="EPAM">
                    </td>
                </tr>
                <tr>
                    <td style="padding-left: 24px; padding-right: 24px; padding-bottom: 22px;">
                        <!-- tytle of Division -->
                        <img src="https://drive.google.com/uc?id=0B0gvOB9B-lkHTWQ4c3d5NDZYMU0" alt="">
                    </td>
                </tr>
            </table>
            <!-- /header -->

            <table width="738" cellspacing="0" cellpadding="0" border="0" style="margin: auto;" bgcolor="#eef2f5">
                <tr>
                    <td style="padding-left: 24px; padding-right: 24px; padding-top: 30px; padding-bottom: 20px; font-weight: 700; font-family: Arial,'Times New Roman', serif; color:#000000;">
                        Друзья, 
                    </td>
                </tr>
                <tr>
                    <td style="padding-left: 24px; padding-right: 24px; padding-bottom: 30px;font-size: 14px; line-height: 25px; font-family: Arial,'Times New Roman', serif; color:#727272;">
                        Во второй половине марта наша команда продолжала пополняться:
                        <br><br>
                        К <b>Front-end Division Belarus</b>  присоединились <b>Евгений Ковальчук, Дмитрий Масюль, Александр Хвайницкий</b>.
                        <br><br>
                        Также произошло пополнение <b>в команде HR BP</b>: ко мне присоединилась <b>Юлия Самуйлик, HR Business Partner Assistant</b>.  В ближайшее время Юля подключится к процессу адаптации и будет сопровождать новых коллег на этом этапе. 
                        <br><br>
                        Продолжаем знакомство, поддерживаем ребят и желаем скореейшей и профессиональных побед!
                        <br><br>
                        Добро пожаловать на борт!
                    </td>
                </tr>
            </table>

            <!-- content -->
            <table width="738" cellspacing="0" cellpadding="0" border="0" style="margin: auto;">
                <tr>
                    <td>`,
                    lastPart: `</td>
                </tr>                
            </table>
            <!-- end content -->
            <!-- footer -->
            <table width="738" cellspacing="0" cellpadding="0" border="0" style="margin: auto;">
                <tr>
                    <td style="color: #000000; font-size: 16px; font-weight: 700; padding-top: 20px; padding-right: 24px; padding-left: 24px; padding-bottom: 37px; font-family: Arial,'Times New Roman', serif;">
                        Welcome on board!
                    </td>
                </tr>
            </table>
            <!-- /footer -->
        </td>
    </tr>
</table>

</body>`,
item: `<table cellspacing="0" cellpadding="0" border="0" style="border-bottom: 1px solid #d2d2d2;" >
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
                        </table>`	
}