function ABGDataProcess()
{
	var ABGDiv = document.getElementById("ABGDiv");
	ABGDiv.innerHTML="";
	if(typeof ABG_Array =="undefined")
	{
		ABG_Array=[];
	}
	var tb = getComponent('table');
		tb.appendChild(getSpacingRow());
		tb.appendChild(getFirstRowABG());
		tb.appendChild(getSpacingRow());
		for(i = 0 ; i < ABG_Array.length;i++)
		{
			tb.appendChild(getABGRow(ABG_Array[i]));
		}
		if(ABG_Array.length==0)
		{
			tb.appendChild(getABGRow({"time":"","data":["","","","","","","","","","","","",""]}));	
		}
		tb.appendChild(getSpacingRow());
	ABGDiv.appendChild(tb);
}

function getABGRow(ABG){

	var tr=document.createElement('tr');
		tr.appendChild(getSpacingTD());

		td=document.createElement('td');
		td.setAttribute('class',"ABG_table_TD_Content");
		td.align="center";
		td.appendChild(getSpan(ABG.time));
		tr.appendChild(td);
		for(h=0;h<ABG.data.length;h++)
		{
			td=document.createElement('td');
			td.setAttribute('class',"ABG_table_TD_Content");
			td.align="center";
			if(h==0 || h==6)
			{
				tr.appendChild(getSpacingTD());
			}
			td.appendChild(getSpan(ABG.data[h]));
			tr.appendChild(td);
		}
		tr.appendChild(getSpacingTD());
	return tr;
}

function getFirstRowABG()
{
	var firstRow = getComponent('tr');
		firstRow.appendChild(getSpacingTD());
		
		var td1= getComponent('td',"ABG_table_TD_Time");
			td1.align="center";
			td1.appendChild(getComponent('span',"","時間"));
		firstRow.appendChild(td1);
		
		firstRow.appendChild(getSpacingTD());
		
		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_TD_Element");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("pH"));
		firstRow.appendChild(tdToAdd);

		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_TD_Element");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("PO"));
			tdToAdd.appendChild(getSpan("2","lowerWord"));
		firstRow.appendChild(tdToAdd);
		
		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_TD_Element");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("PaCO"));
			tdToAdd.appendChild(getSpan("2","lowerWord"));
		firstRow.appendChild(tdToAdd);

		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_TD_Element");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("HCO"));
			tdToAdd.appendChild(getSpan("3","lowerWord"));
		firstRow.appendChild(tdToAdd);

		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_TD_Element");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("BE"));
		firstRow.appendChild(tdToAdd);

		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_TD_Element");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("Sat"));
		firstRow.appendChild(tdToAdd);

		firstRow.appendChild(getSpacingTD());

		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_TD_Element");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("Hb"));
		firstRow.appendChild(tdToAdd);

		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_TD_Element");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("Na"));
		firstRow.appendChild(tdToAdd);

		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_TD_Element");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("K"));
		firstRow.appendChild(tdToAdd);

		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_TD_Element");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("Ca"));
		firstRow.appendChild(tdToAdd);

		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_TD_Element");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("Mg"));
		firstRow.appendChild(tdToAdd);

		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_TD_Element");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("BUN"));
		firstRow.appendChild(tdToAdd);
		
		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_TD_Element");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("Cr"));
		firstRow.appendChild(tdToAdd);

		firstRow.appendChild(getSpacingTD());
	return firstRow;
}


