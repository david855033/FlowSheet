 function ABDataProcess(){
 	var table =document.getElementById("abtable");
	table.innerHTML="";
	table.appendChild(getABTable());
 }

function getABTable()
{
	var table = getComponent('table');
	table.appendChild(getSpacingRow());
	table.appendChild(printRowAB("A-B,自回","(次)",ABeventSelfRecovered));
	table.appendChild(printRowAB("A-B,需處理","(次)",ABeventManaged,0,-1));
	table.appendChild(getSpacingRow());
	return table;
}

function printRowAB(fieldName, Unit, DataArray, LowerWarn, UpperWarn)
{
	var tr = getComponent('tr');
	
	var td = getComponent('td',"td_FirstColumn_AB");
		td.appendChild(getSpan(fieldName,""));
		td.appendChild(getSpan(Unit,"fade"));
		tr.appendChild(getSpacingTD());
		tr.appendChild(td);
		tr.appendChild(getSpacingTD());
		for(i=0;i<8;i++){
			tr.appendChild(getTDwithData(DataArray[i],"td_Data_AB", LowerWarn, UpperWarn));	
		}
		tr.appendChild(getSpacingTD());
		for(i=8;i<16;i++){
			tr.appendChild(getTDwithData(DataArray[i], "td_Data_AB", LowerWarn, UpperWarn));	
		}
		tr.appendChild(getSpacingTD());
		for(i=16;i<24;i++){
			tr.appendChild(getTDwithData(DataArray[i], "td_Data_AB", LowerWarn, UpperWarn));	
		}
	
	tr.appendChild(getSpacingTD());
	return tr;
}
