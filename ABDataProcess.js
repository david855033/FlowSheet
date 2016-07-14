

 function ABDataProcess(){
 	var table =document.getElementById("abtable");
	table.innerHTML="";
	table.appendChild(getABTable());
 }

function getABTable()
{
	var table = document.createElement('table');
	table.appendChild(getSpacingRow());
	table.appendChild(printRowAB("A-B,自回","(次)",ABeventSelfRecovered));
	table.appendChild(printRowAB("A-B,需處理","(次)",ABeventManaged,0,-1));
	table.appendChild(getSpacingRow());
	return table;
}

function printRowAB(fieldName, Unit, DataArray, LowerWarn, UpperWarn)
{
	var tr = document.createElement('tr');
	
	td =  document.createElement('td');
	td.setAttribute("class","td_FirstColumn");
	td.appendChild(getSpan(fieldName,""));
	td.appendChild(getSpan(Unit,"fade"));
	tr.appendChild(getSpacingTD_AB());
	tr.appendChild(td);
	tr.appendChild(getSpacingTD_AB());
	for(i=0;i<8;i++){
		tr.appendChild(getTD_AB(DataArray[i], LowerWarn, UpperWarn));	
	}
	tr.appendChild(getSpacingTD_AB());
	for(i=8;i<16;i++){
		tr.appendChild(getTD_AB(DataArray[i], LowerWarn, UpperWarn));	
	}
	tr.appendChild(getSpacingTD_AB());
	for(i=16;i<24;i++){
		tr.appendChild(getTD_AB(DataArray[i], LowerWarn, UpperWarn));	
	}
	tr.appendChild(getSpacingTD_AB());
	return tr;
}

function getTD_AB(value, L,U)
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
		td.setAttribute("class","tdInTable2");
		td.appendChild(getSpan(value,warn));
	}else
	{
		td.setAttribute("class","tdInTableEmpty2");
		td.appendChild(getSpan("",""));
	}
	return td;
}

function getSpacingTD_AB()
{
	var td = document.createElement('td');
	td.setAttribute("class","tdSpacing_ABtable");
	return td;
}
