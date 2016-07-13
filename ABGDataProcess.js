ABGTime = 
["10:00","11:00","12:00","13:00","14:00","20:00"];
ABGData =
[
[7.25,60,40,24,-3,"50%",13.1,140,3.5,1.01,2.03,20,0.34],
[7.25,60,40,24,-3,"50%"],
[7.25,60,40,24,-3,"50%"],
[7.25,60,40,24,-3,"50%"],
[7.25,60,40,24,-3,"50%"],
[7.25,60,40,24,-3,"50%",13.1,140,3.5,1.01,2.03,20,0.34]
];



function ABGDataProcess()
{
	var ABGDiv = document.getElementById("ABGDiv");
	ABGDiv.innerHTML="";
	var tb = document.createElement('table');
		tb.appendChild(getSpacingRow());
		tb.appendChild(getFirstRowABG());
		tb.appendChild(getSpacingRow());
		for(i = 0 ; i < ABGTime.length;i++)
		{
			tb.appendChild(getABGRow(ABGTime[i],ABGData[i]));
		}
		tb.appendChild(getSpacingRow());
	ABGDiv.appendChild(tb);
}

function getABGRow(time, Data){

	var tr=document.createElement('tr');
		tr.appendChild(getSpacingTD_ABG());

		td=document.createElement('td');
		td.setAttribute('class',"ABG_table_innterTD");
		td.align="center";
		td.appendChild(getSpan(time));
		tr.appendChild(td);
		for(h=0;h<Data.length;h++)
		{
			td=document.createElement('td');
			td.setAttribute('class',"ABG_table_innterTD");
			td.align="center";
			if(h==0 || h==6)
			{
				tr.appendChild(getSpacingTD_ABG());
			}
			td.appendChild(getSpan(Data[h]));
			tr.appendChild(td);
		}
		tr.appendChild(getSpacingTD_ABG());
	return tr;
}

function getFirstRowABG()
{
	var firstRow = document.createElement('tr');
		firstRow.appendChild(getSpacingTD_ABG());
		
		var td1= document.createElement('td');
			td1.setAttribute('class',"ABG_table_innterTD1");
			td1.align="center";
			td1.appendChild(getSpan("時間"));
		firstRow.appendChild(td1);
		
		firstRow.appendChild(getSpacingTD_ABG());

		
		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_innterTD");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("pH"));
		firstRow.appendChild(tdToAdd);

		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_innterTD");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("PO"));
			tdToAdd.appendChild(getSpan("2","lowerWord"));
		firstRow.appendChild(tdToAdd);
		
		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_innterTD");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("PaCO"));
			tdToAdd.appendChild(getSpan("2","lowerWord"));
		firstRow.appendChild(tdToAdd);

		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_innterTD");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("HCO"));
			tdToAdd.appendChild(getSpan("3","lowerWord"));
		firstRow.appendChild(tdToAdd);

		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_innterTD");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("BE"));
		firstRow.appendChild(tdToAdd);

		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_innterTD");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("Sat"));
		firstRow.appendChild(tdToAdd);

		firstRow.appendChild(getSpacingTD_ABG());

		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_innterTD");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("Hb"));
		firstRow.appendChild(tdToAdd);

		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_innterTD");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("Na"));
		firstRow.appendChild(tdToAdd);

		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_innterTD");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("K"));
		firstRow.appendChild(tdToAdd);

		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_innterTD");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("Ca"));
		firstRow.appendChild(tdToAdd);

		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_innterTD");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("Mg"));
		firstRow.appendChild(tdToAdd);

		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_innterTD");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("BUN"));
		firstRow.appendChild(tdToAdd);
		
		tdToAdd= document.createElement('td');
			tdToAdd.setAttribute('class',"ABG_table_innterTD");
			tdToAdd.align="center";
			tdToAdd.appendChild(getSpan("Cr"));
		firstRow.appendChild(tdToAdd);

		firstRow.appendChild(getSpacingTD_ABG());
	return firstRow;
}

function getSpan(content, setclass, setclass2)
{
	var span = document.createElement('span');
	span.setAttribute('class',setclass);
	span.innerHTML=content;
	if(typeof setclass2 === "string" && setclass2!="")
	{
		var span2 = document.createElement('span');
		span2.setAttribute('class',setclass);
		span2.appendChild(span);
		return span2;
	}
	return span;
}

function getSpacingTD_ABG()
{
	var td = document.createElement('td');
	td.setAttribute("class","td_spacing_ABG_table");
	return td;
}