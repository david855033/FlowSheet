var MAP = [];
function TPRDataProcess()
{
	generateMAP();
	var TPRTable =document.getElementById("tprtable");
	TPRTable.innerHTML="";
	TPRTable.appendChild(getTable());
}

function getTable()
{
	var table = getComponent('table');
	table.appendChild(getSpacingRow());
	table.appendChild(getFirstRow());
	table.appendChild(printRow("箱溫","('C)",incubatorTemp));
	table.appendChild(printRow("濕度","(%)",incubatorHumidity));
	table.appendChild(getSpacingRow());

	if(!(typeof bodyTemperatureWarn_U ==="number")) bodyTemperatureWarn_U=38;
	if(!(typeof bodyTemperatureWarn_L ==="number")) bodyTemperatureWarn_L=36;
	table.appendChild(printRow("體溫","('C)",bodyTemperature,bodyTemperatureWarn_L,bodyTemperatureWarn_U));

	if(!(typeof RespRateWarn_U ==="number")) RespRateWarn_U=80;
	if(!(typeof RespRateWarn_L ==="number")) RespRateWarn_L=20;
	table.appendChild(printRow("心率","(/min)",HeartRate));
	
	if(!(typeof RespRateWarn_U ==="number")) RespRateWarn_U=80;
	if(!(typeof RespRateWarn_L ==="number")) RespRateWarn_L=20;
	table.appendChild(printRow("呼吸","(/min)",RespRate,RespRateWarn_L,RespRateWarn_U));
	
	if(!(typeof SaturationWarn_L ==="number")) SaturationWarn_L=85;
	if(!(typeof SaturationWarn_U ==="number")) SaturationWarn_U=95;
	table.appendChild(printRow("Sat","(%)",Saturation,SaturationWarn_L,SaturationWarn_U));
	table.appendChild(getSpacingRow());
	
	if(!(typeof SBP_L ==="number")) SBP_L=45;
	table.appendChild(printRow("SBP","(/mmHg)",SBP,SBP_L,SBP_U));

	table.appendChild(printRow("DBP","(/mmHg)",DBP,DBP_L,DBP_U));
	
	if(!(typeof MAPWarn_L ==="number")) MAPWarn_L=35;
	table.appendChild(printRow("MAP","(/mmHg)",MAP,MAPWarn_L,MAPWarn_U));
	
	table.appendChild(getSpacingRow());
	return table;
}

function printRow(fieldName, Unit, DataArray, LowerWarn, UpperWarn)
{
	var tr = getComponent('tr');
	
		var td =  getComponent('td',"td_FirstColumn");
		td.appendChild(getComponent('span',"",fieldName));
		td.appendChild(getComponent('span',"fade",Unit));
		if(typeof LowerWarn ==="number" && typeof UpperWarn === "number")
		{
			td.appendChild(getComponent('span',"warnInfo"," "+LowerWarn+"-"+UpperWarn));
		}else if(typeof LowerWarn ==="number")
		{
			td.appendChild(getComponent('span',"warnInfo"," >"+LowerWarn));
		}
		else if(typeof UpperWarn === "number")
		{
			td.appendChild(getComponent('span',"warnInfo"," <"+UpperWarn));
		}
		tr.appendChild(getSpacingTD());
		tr.appendChild(td);
		tr.appendChild(getSpacingTD());

		var dataOutput = generateDataOutput(DataArray);
		for(i=0;i<8;i++){
			tr.appendChild(getTD(dataOutput[i],LowerWarn,UpperWarn));	
		}
		tr.appendChild(getSpacingTD());
		for(i=8;i<16;i++){
			tr.appendChild(getTD(dataOutput[i],LowerWarn,UpperWarn));	
		}
		tr.appendChild(getSpacingTD());
		for(i=16;i<24;i++){
			tr.appendChild(getTD(dataOutput[i],LowerWarn,UpperWarn));	
		}
		tr.appendChild(getSpacingTD());

	return tr;
}

function generateDataOutput(DataArray)
{
	var dataOutput = DataArray;

	for(var i = 0; i<24; i++)
	{
		
	}

	return dataOutput;
}

function getTD(value, L,U)
{
	td =  document.createElement('td');		

	if(typeof value === "number" && value !=0)
	{
		var warn ="";
		if( (typeof L ==="number" && value<L) ||
			(typeof U === "number" && value >U) )
		{
			warn="warn";
		}

		input=value;
		td.setAttribute("class","tdInTable1");
		td.appendChild(getSpan(value,warn));
	}else
	{
		td.setAttribute("class","tdInTableEmpty1");
		td.appendChild(getSpan("",""));
	}
	return td;
}
function getFirstRow()
{
	var tr = document.createElement('tr');
	
	td =  document.createElement('td');
	td.setAttribute("class","td_FirstColumn");
	td.appendChild(getSpan("時間",""));
	tr.appendChild(getSpacingTD());
	tr.appendChild(td);
	tr.appendChild(getSpacingTD());
	for(i=0;i<8;i++){
		td =  document.createElement('td');
		td.setAttribute("class","tdInFirstRow");
		td.appendChild(getSpan(i,""));
		tr.appendChild(td);
	}
	tr.appendChild(getSpacingTD());
	for(i=8;i<16;i++){
		td =  document.createElement('td');
		td.setAttribute("class","tdInFirstRow");
		td.appendChild(getSpan(i,""));
		tr.appendChild(td);
	}
	tr.appendChild(getSpacingTD());
	for(i=16;i<24;i++){
		td =  document.createElement('td');
		td.setAttribute("class","tdInFirstRow");
		td.appendChild(getSpan(i,""));
		tr.appendChild(td);
	}
	tr.appendChild(getSpacingTD());
	return tr;
}



function generateMAP(){

	for(i=0;i<23;i++)
	{
		if(typeof SBP[i] === "number" && typeof DBP[i] === "number" )
		{
			MAP.push(Math.round(SBP[i]/3+DBP[i]*2/3));
		}else
		{
			MAP.push(null);
		}
	}
}