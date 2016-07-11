var incubatorTemp =
 [29.5,29.5,29,30,30,30,30];
var incubatorHumidity =
 [70,70,70,70,65,65,65];
var bodyTemperature =
 [37,37,36.5,36.5,38,39,38];
var HeartRate =
 [120,140,120,133,153,180,93];
var HeartRateWarn_U;
var HeartRateWarn_L;

var  RespRate=
 [44,43,46,57,34,45,65];
var RespRateWarn_U;
var RespRateWarn_L;

var Saturation =
 [92,93,94,95,88,90,70];
var SaturationWarn_U;
var SaturationWarn_L; 

var SBP =
 [65,70,55,66,56,45,33];
var SBP_U;
var SBP_L; 
 
var DBP =
[46,45,34,32,44,33,21];
var DBP_U;
var DBP_L; 
 
 var MAPWarn_U;
 var MAPWarn_L;


var MAP = new Array();
function TPRDataProcess()
{
	generateMAP();
	var TPRTable =document.getElementById("tprtable");
	TPRTable.innerHTML="";
	TPRTable.appendChild(getTable());
}

function getTable()
{
	var table = document.createElement('table');
	table.appendChild(getSpacingRow());
	table.appendChild(getFirstRow());
	table.appendChild(printRow("箱溫","('C)",incubatorTemp));
	table.appendChild(printRow("濕度","(%)",incubatorHumidity));
	table.appendChild(getSpacingRow());
	table.appendChild(printRow("體溫","('C)",bodyTemperature));
	table.appendChild(printRow("心率","(/min)",HeartRate));
	table.appendChild(printRow("呼吸","(/min)",RespRate));
	table.appendChild(printRow("Sat","(%)",Saturation));
	table.appendChild(getSpacingRow());
	table.appendChild(printRow("SBP","(/mmHg)",SBP));
	table.appendChild(printRow("SBP","(/mmHg)",DBP));
	table.appendChild(printRow("MAP","(/mmHg)",MAP));
	table.appendChild(getSpacingRow());
	return table;
}

function printRow(fieldName, Unit, DataArray)
{
	var tr = document.createElement('tr');
	
	td =  document.createElement('td');
	td.setAttribute("class","td_FirstColumn");
	td.appendChild(getSpan(fieldName,""));
	td.appendChild(getSpan(Unit,"fade"));
	
	tr.appendChild(getSpacingTD());
	tr.appendChild(td);
	tr.appendChild(getSpacingTD());
	for(i=0;i<8;i++){
		td =  document.createElement('td');		
		if(typeof DataArray[i] === "number")
		{
			input=DataArray[i];
			td.setAttribute("class","tdInTable1");
			td.appendChild(getSpan(input,""));
		}else
		{
			td.setAttribute("class","tdInTableEmpty1");
			td.appendChild(getSpan("",""));
		}
		tr.appendChild(td);
	}
	tr.appendChild(getSpacingTD());
	for(i=8;i<16;i++){
		td =  document.createElement('td');		
		if(typeof DataArray[i] === "number")
		{
			input=DataArray[i];
			td.setAttribute("class","tdInTable1");
			td.appendChild(getSpan(input,""));
		}else
		{
			td.setAttribute("class","tdInTableEmpty1");
			td.appendChild(getSpan("",""));
		}
		tr.appendChild(td);
	}
	tr.appendChild(getSpacingTD());
	for(i=16;i<24;i++){
		td =  document.createElement('td');		
		if(typeof DataArray[i] === "number")
		{
			input=DataArray[i];
			td.setAttribute("class","tdInTable1");
			td.appendChild(getSpan(input,""));
		}else
		{
			td.setAttribute("class","tdInTableEmpty1");
			td.appendChild(getSpan("",""));
		}
		tr.appendChild(td);
	}
	tr.appendChild(getSpacingTD());
	return tr;
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

function getSpacingTD()
{
	var td = document.createElement('td');
	td.setAttribute("class","tdSpacing_TPRtable");
	return td;
}

function getSpacingRow()
{	
	var tr = document.createElement('tr');
	tr.setAttribute("class","tr_spacing");
	return tr;
}

function getSpan(content,classname){
	if(classname=="")
	{
		var	sp=document.createElement('span');
		sp.innerHTML=content;
		return sp;
	}else
	{
		var	sp=document.createElement('span');
		sp.setAttribute('class',classname);
		sp.innerHTML=content;
		return sp;
	}
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