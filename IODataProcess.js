var infusionArray=[[1,1,1,1,1],[2,2,2,2,2]];
var infusioNames=["TPN","Dopa"];
var infusionRoutes=["IV","CVC"];

var transfusionArray=[[]];
var transfusionNames=[];

var oral=[];
var NG=[];
var RV=[];

var drainArray=[[]];
var drainRoutes=[];
var drainNames=[];

var urine =[];
var stool = [];
var enema =[];

function IODataProcess(){
	var table = document.getElementById("iotable");
	table.innerHTML="";
	table.appendChild(getIOTable());
}

function getIOTable()
{
	var table = document.createElement('table');
	table.appendChild(getSpacingRow());

	printRow_IO("IV","ml","Route",infusionArray[i]);

	table.appendChild(getSpacingRow());

	return table;
}

function printRow_IO(fieldName, Unit, Route, DataArray)
{
	var tr = document.createElement('tr');
	
	td =  document.createElement('td');
	td.setAttribute("class","td_FirstColumn");
	td.appendChild(getSpan(fieldName,""));
	td.appendChild(getSpan(Unit,"fade"));
	tr.appendChild(getSpacingTD_IO());
	tr.appendChild(td);
	tr.appendChild(getSpacingTD_IO());
	for(i=0;i<8;i++){
		tr.appendChild(getTD_IO(DataArray[i]));	
	}
	tr.appendChild(getSpacingTD_IO());
	for(i=8;i<16;i++){
		tr.appendChild(getTD_IO(DataArray[i]));	
	}
	tr.appendChild(getSpacingTD_IO());
	for(i=16;i<24;i++){
		tr.appendChild(getTD_IO(DataArray[i]));	
	}
	tr.appendChild(getSpacingTD_IO());
	return tr;
}

function getTD_IO(value)
{
	td =  document.createElement('td');		

	if(typeof value === "number" && value !=0)
	{
		input=value;
		td.setAttribute("class","tdInTable1");
		td.appendChild(getSpan(value,""));
	}else
	{
		td.setAttribute("class","tdInTableEmpty1");
		td.appendChild(getSpan("",""));
	}
	return td;
}

function getSpacingTD_IO()
{
	var td = document.createElement('td');
	td.setAttribute("class","tdSpacing_TPRtable");
	return td;
}
