function ventilatorProcess()
{
	var ventilatorDiv = document.getElementById("ventilatorDiv");
	ventilatorDiv.innerHTML="";
	if(typeof ventilator_Array =="undefined")
	{
		ventilator_Array=[];
	}
	var tb = getComponent('table');
		tb.appendChild(getSpacingRow());
		tb.appendChild(getFirstRowVent());
		tb.appendChild(getSpacingRow());
		for(i = 0 ; i < ventilator_Array.length;i++)
		{
			tb.appendChild(getVentRow(ventilator_Array[i]));
		}
		if(ventilator_Array.length==0)
		{
			tb.appendChild(getVentRow({"time":"","mode":"","setting":""}));	
		}
		tb.appendChild(getSpacingRow());
	ventilatorDiv.appendChild(tb);
}

function getVentRow(ventilator){

	var tr=getComponent('tr');
		tr.appendChild(getSpacingTD());

		tr.appendChild(getComponent('td',"ventilator_table_Content_TD",ventilator.time));

		tr.appendChild(getSpacingTD());

		var td2= getComponent('td',"ventilator_table_Content_TD");

		var splt2 = ventilator.mode.split("|",3);
		for(var k = 0 ; k<splt2.length;k++)
		{
			if(k>0)
			{
				td2.appendChild(document.createElement('br'));	
			}
			td2.appendChild(getComponent('span',"",splt2[k]));
		}

		tr.appendChild(td2);

		tr.appendChild(getSpacingTD());

		var td3=  getComponent('td',"ventilator_table_Content_TD");
			var splt3 = ventilator.setting.split("|",3);
			for(var k = 0 ; k<splt3.length;k++)
			{
				if(k>0)
				{
					td3.appendChild(document.createElement('br'));	
				}
				td3.appendChild(getComponent('span',"",splt3[k]));
			}
		tr.appendChild(td3);

		tr.appendChild(getSpacingTD());
	return tr;
}

function getFirstRowVent()
{
	var firstRow =getComponent('tr');
		firstRow.appendChild(getSpacingTD());
		
		firstRow.appendChild(getComponent('td',"ventilator_table_innerTD1","時間"));
		
		firstRow.appendChild(getSpacingTD());
		
		firstRow.appendChild(getComponent('td',"ventilator_table_innerTD2","Mode"));
		
		firstRow.appendChild(getSpacingTD());
		
		firstRow.appendChild(getComponent('td',"ventilator_table_innerTD3","Settings"));

		firstRow.appendChild(getSpacingTD());
	return firstRow;
}