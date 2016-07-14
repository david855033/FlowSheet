

function eventProcess()
{
	var eventdiv = document.getElementById("eventdiv");
	eventdiv.innerHTML="";
	var tb = document.createElement('table');
		tb.appendChild(getSpacingRow());
		tb.appendChild(getFirstRowEvent());
		tb.appendChild(getSpacingRow());
		for(i = 0 ; i < eventTime.length;i++)
		{
			tb.appendChild(getEventRow(eventTime[i],eventContent[i],eventWarn[i]));
		}
		tb.appendChild(getSpacingRow());
	eventdiv.appendChild(tb);
}

function getEventRow(time, content, warnIndex){
	var warn="";
	if(warnIndex==1) { warn="warn"; }	
	var tr=document.createElement('tr');
		tr.appendChild(getSpacingTD_event());

		var td1= document.createElement('td');
			td1.setAttribute('class',"tdInTable_event");
			td1.align="center";
			var sp1 = document.createElement('span');
			sp1.innerHTML=time;
			td1.appendChild(sp1);
		tr.appendChild(td1);

		tr.appendChild(getSpacingTD_event());

		var td2= document.createElement('td');
			td2.setAttribute('class',"tdInTable_event");
			td2.align="center";
			var sp2 = document.createElement('span');
			sp2.setAttribute('class',warn);
			sp2.innerHTML=content;
			td2.appendChild(sp2);
		tr.appendChild(td2);

		tr.appendChild(getSpacingTD_event());
	return tr;
}

function getFirstRowEvent()
{
	var firstRow = document.createElement('tr');
		firstRow.appendChild(getSpacingTD_event());
		
		var td1= document.createElement('td');
			td1.setAttribute('class',"td_FirstColumn_event");
			td1.align="center";
			var sp1 = document.createElement('span');
			sp1.innerHTML="時間";
			td1.appendChild(sp1);
		firstRow.appendChild(td1);
		
		firstRow.appendChild(getSpacingTD_event());
		
		var td2= document.createElement('td');
			td2.setAttribute('class',"tdInFirstRow_event");
			td2.align="center";
			td2.innerHTML="事件";
		firstRow.appendChild(td2);
		
		firstRow.appendChild(getSpacingTD_event());
	return firstRow;
}

function getSpacingTD_event()
{
	var td = document.createElement('td');
	td.setAttribute("class","tdSpacing_TPRtable_event");
	return td;
}