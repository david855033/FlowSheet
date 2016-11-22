function eventProcess()
{
	if(typeof event_Array==="undefined") event_Array=[];
	event_Array.sort(keysrt('time'));
	var eventdiv = document.getElementById("eventdiv");
	eventdiv.innerHTML="";
	var tb = getComponent('table');
		tb.appendChild(getSpacingRow());
		tb.appendChild(getFirstRowEvent());
		tb.appendChild(getSpacingRow());
		for(i = 0 ; i < event_Array.length;i++)
		{
			tb.appendChild(getEventRow(event_Array[i]));
		}
		tb.appendChild(getSpacingRow());
	eventdiv.appendChild(tb);
}

function getEventRow(event){
	var tr=getComponent('tr');
		tr.appendChild(getSpacingTD());
		var td1= getComponent('td',"tdInTable_event");
			td1.align="center";
			td1.appendChild(getComponent('span',"",event.time));
		tr.appendChild(td1);

		tr.appendChild(getSpacingTD());

		var td2= getComponent('td',"tdInTable_event");
			td2.align="center";
			td2.appendChild(getComponent('span',"",event.content));
		tr.appendChild(td2);

		tr.appendChild(getSpacingTD());
	return tr;
}

function getFirstRowEvent()
{
	var firstRow = document.createElement('tr');
		firstRow.appendChild(getSpacingTD());
		
		var td1= document.createElement('td');
			td1.setAttribute('class',"td_FirstColumn_event");
			td1.align="center";
			var sp1 = document.createElement('span');
			sp1.innerHTML="時間";
			td1.appendChild(sp1);
		firstRow.appendChild(td1);
		
		firstRow.appendChild(getSpacingTD());
		
		var td2= document.createElement('td');
			td2.setAttribute('class',"tdInFirstRow_event");
			td2.align="center";
			td2.innerHTML="事件";
		firstRow.appendChild(td2);
		
		firstRow.appendChild(getSpacingTD());
	return firstRow;
}
