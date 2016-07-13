var incubatorTemp =
 [28,29.5,29,30,30,30,30];
var incubatorHumidity =
 [70,70,70,70,65,65,65];

var bodyTemperature =
 [37,35.5,36.5,36.5,38,39,38];
var bodyTemperatureWarn_U = 38;
var bodyTemperatureWarn_L = 36;

var HeartRate =
 [120,140,120,133,153,180,93];
var HeartRateWarn_U;
var HeartRateWarn_L;

var  RespRate=
 [44,43,46,99,34,45,18];
var RespRateWarn_U;
var RespRateWarn_L;

var Saturation =
 [92,93,94,95,88,90,70];
var SaturationWarn_U;
var SaturationWarn_L; 

var SBP =
 [65,70,55,66,56,45,33,,50,60];
var SBP_U;
var SBP_L=55; 

var DBP =
[46,45,34,32,44,33,21,39,,20];
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
	var tr = document.createElement('tr');
	
	td =  document.createElement('td');
	td.setAttribute("class","td_FirstColumn");
	td.appendChild(getSpan(fieldName,""));
	td.appendChild(getSpan(Unit,"fade"));
	if(typeof LowerWarn ==="number" && typeof UpperWarn === "number")
	{
		td.appendChild(getSpan(" "+LowerWarn+"-"+UpperWarn,"warnInfo"));
	}else if(typeof LowerWarn ==="number")
	{
		td.appendChild(getSpan(" >"+LowerWarn,"warnInfo"));
	}
	else if(typeof UpperWarn === "number")
	{
		td.appendChild(getSpan(" <"+UpperWarn,"warnInfo"));
	}
	tr.appendChild(getSpacingTD());
	tr.appendChild(td);
	tr.appendChild(getSpacingTD());
	for(i=0;i<8;i++){
		tr.appendChild(getTD(DataArray[i],LowerWarn,UpperWarn));	
	}
	tr.appendChild(getSpacingTD());
	for(i=8;i<16;i++){
		tr.appendChild(getTD(DataArray[i],LowerWarn,UpperWarn));	
	}
	tr.appendChild(getSpacingTD());
	for(i=16;i<24;i++){
		tr.appendChild(getTD(DataArray[i],LowerWarn,UpperWarn));	
	}
	tr.appendChild(getSpacingTD());
	return tr;
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