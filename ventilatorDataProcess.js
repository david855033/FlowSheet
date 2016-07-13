ventilatorTime = 
["10:00",
"15:00", 
"20:00",
"21:00",
"23:00",
"23:30"];
ventilatorMode =
["IMV/OETT",
"IMV/OETT",
"IMV/OETT",
"HFOV/OETT",
"ECMO",
"ECMO|HFOV/OETT"];

ventilatorSetting = 
["FiO2:40%, PIP/PEEP:20/5mmHg, Rate:20/min",
"FiO2:40%, PIP/PEEP:20/5mmHg, Rate:20/min",
"FiO2:40%, PIP/PEEP:20/5mmHg, Rate:20/min",
"FiO2:60%, MAP:25mmHg, AMP: 10mmHg, Freq:10Hz",
"FiO2:100%, Flow: 0.6L/min, 2000RPM",
"FiO2:100%, Flow: 0.6L/min, 2000RPM|FiO2:60%, MAP:25mmHg, AMP: 10mmHg, Freq:10Hz"
];



function ventilatorProcess()
{
	var ventilatorDiv = document.getElementById("ventilatorDiv");
	ventilatorDiv.innerHTML="";
	var tb = document.createElement('table');
		tb.appendChild(getSpacingRow());
		tb.appendChild(getFirstRowVent());
		tb.appendChild(getSpacingRow());
		for(i = 0 ; i < ventilatorTime.length;i++)
		{
			tb.appendChild(getVentRow(ventilatorTime[i],ventilatorMode[i],ventilatorSetting[i]));
		}
		tb.appendChild(getSpacingRow());
	ventilatorDiv.appendChild(tb);
}

function getVentRow(time, mode, setting){

	var tr=document.createElement('tr');
		tr.appendChild(getSpacingTD_vent());

		var td1= document.createElement('td');
			td1.setAttribute('class',"tdInTable_event");
			td1.align="center";
			var sp1 = document.createElement('span');
			sp1.innerHTML=time;
			td1.appendChild(sp1);
		tr.appendChild(td1);

		tr.appendChild(getSpacingTD_vent());

		var td2= document.createElement('td');
			td2.setAttribute('class',"tdInTable_event");
			td2.align="center";

		var splt2 = mode.split("|",3);
		for(k = 0 ; k<splt2.length;k++)
		{
			var sp2 = document.createElement('span');
			sp2.innerHTML=splt2[k];
			if(k>0)
			{
				td2.appendChild(document.createElement('br'));	
			}
			td2.appendChild(sp2);
		}

		tr.appendChild(td2);

		tr.appendChild(getSpacingTD_vent());

		var td3= document.createElement('td');
			td3.setAttribute('class',"tdInTable_event");
			td3.align="center";
		
			var splt3 = setting.split("|",3);
			for(k = 0 ; k<splt3.length;k++)
			{
				var sp3 = document.createElement('span');
				sp3.innerHTML=splt3[k];
				if(k>0)
				{
					td3.appendChild(document.createElement('br'));	
				}
				td3.appendChild(sp3);
			}
		tr.appendChild(td3);

		tr.appendChild(getSpacingTD_vent());
	return tr;
}

function getFirstRowVent()
{
	var firstRow = document.createElement('tr');
		firstRow.appendChild(getSpacingTD_vent());
		
		var td1= document.createElement('td');
			td1.setAttribute('class',"ventilator_table_innerTD1");
			td1.align="center";
			var sp1 = document.createElement('span');
			sp1.innerHTML="時間";
			td1.appendChild(sp1);
		firstRow.appendChild(td1);
		
		firstRow.appendChild(getSpacingTD_vent());
		
		var td2= document.createElement('td');
			td2.setAttribute('class',"ventilator_table_innerTD2");
			td2.align="center";
			td2.innerHTML="Mode";
		firstRow.appendChild(td2);
		
		firstRow.appendChild(getSpacingTD_vent());
		
		var td3= document.createElement('td');
			td3.setAttribute('class',"ventilator_table_innerTD3");
			td3.align="center";
			td3.innerHTML="Settings";
		firstRow.appendChild(td3);

		firstRow.appendChild(getSpacingTD_vent());
	return firstRow;
}

function getSpacingTD_vent()
{
	var td = document.createElement('td');
	td.setAttribute("class","td_spacing_ventilator_table");
	return td;
}