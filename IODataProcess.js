
function IODataProcess(){
	var table = document.getElementById("iotable");
	table.innerHTML="";
	table.appendChild(getIOTable());
}


function getIOTable()
{
	var table = getComponent('table');
	table.appendChild(getSpacingRow());
	if(typeof peripheral_Array =="undefined")
	{
		peripheral_Array=[];
	}
	peripheral_Array = combineSameIOArray(peripheral_Array);
	for(var x = 0; x < peripheral_Array.length;x++)
	{
		table.appendChild(printRow_IO(peripheral_Array[x],"(ml)"));
	}
	if(peripheral_Array.length==0)
	{
		table.appendChild(printRow_IO({"route":"IV"},"(ml)"));
	}
	
	if(typeof aline_Array =="undefined")
	{
		aline_Array=[];
	}
	aline_Array = combineSameIOArray(aline_Array);
	for(var x = 0; x < aline_Array.length;x++)
	{
		table.appendChild(printRow_IO(aline_Array[x],"(ml)"));
	}
	if(aline_Array.length==0)
	{
		table.appendChild(printRow_IO({"route":"AL/UA"},"(ml)"));
	}
	

	if(typeof central_Array =="undefined")
	{
		central_Array=[];
	}
	central_Array = combineSameIOArray(central_Array);
	for(var x = 0; x < central_Array.length;x++)
	{
		table.appendChild(printRow_IO(central_Array[x],"(ml)"));
	}
	if(central_Array.length==0)
	{
		table.appendChild(printRow_IO({"route":"CVC/PCVL"},"(ml)"));
	}
	table.appendChild(getSpacingRow());


	if(typeof transfusion_Array =="undefined")
	{
		transfusion_Array=[];
	}
	transfusion_Array = combineSameIOArray(transfusion_Array);
	for(var x = 0; x < transfusion_Array.length;x++)
	{
		table.appendChild(printRow_IO(transfusion_Array[x],"(ml)"));
	}
	if(transfusion_Array.length==0)
	{
		table.appendChild(printRow_IO({"route":"Transfusion"},"(ml)"));	
	}
	
	table.appendChild(getSpacingRow());

	if(typeof POAmount =="undefined")
	{
		POAmount=[];
	}
	table.appendChild(printRow_IO({"route":"PO","amount":POAmount},"(ml)"));

	if(typeof NGAmount =="undefined")
	{
		NGAmount=[];
	}
	table.appendChild(printRow_IO({"route":"NG/OG","amount":NGAmount},"(ml)"));

	if(typeof RVAmount =="undefined")
	{
		RVAmount=[];
	}
	table.appendChild(printRow_IO({"route":"RV","amount":RVAmount},"(ml)"));

	if(typeof RVCharacter =="undefined")
	{
		RVCharacter=[];
	}
	table.appendChild(printRow_IO({"route":"RV Character","amount":RVCharacter},""));
	
	table.appendChild(getSpacingRow());

	if(typeof NGDrain =="undefined")
	{
		NGDrain=[];
	}
	table.appendChild(printRow_IO({"route":"NG/OG drain","amount":NGDrain},""));
	
	if(typeof drain_Array =="undefined")
	{
		drain_Array=[];
	}
	drain_Array = combineSameIOArray(drain_Array);
	for(var x = 0; x < drain_Array.length;x++)
	{
		table.appendChild(printRow_IO(drain_Array[x],"(ml)"));
	}
	if(drain_Array.length==0)
	{
		table.appendChild(printRow_IO({"route":"Drain"},"(ml)"));
	}

	if(typeof urine =="undefined")
	{
		urine=[];
	}
	table.appendChild(printRow_IO({"route":"Urine","amount":urine},"(ml)"));
	
	if(typeof stool =="undefined")
	{
		stool=[];
	}
	table.appendChild(printRow_IO({"route":"Stool","amount":stool},""));
	
	if(typeof enema =="undefined")
	{
		enema=[];
	}
	table.appendChild(printRow_IO({"route":"Enema/Stim","amount":enema},""));

	table.appendChild(getSpacingRow());
	
	return table;
}

function printRow_IO(IOObject, unit)
{
	var tr = getComponent('tr');
	var route = IOObject.route && IOObject.route;
	var name = IOObject.name && (" "+IOObject.name);
	if(IOObject.amount)
	{
		var amount = IOObject.amount;
	}else
	{
		var amount = [0];
	}
	td =  getComponent('td',"td_FirstColumn_IO");
		td.appendChild(getComponent('span',"",route));
		td.appendChild(getComponent('span',"fade",unit));
		td.appendChild(getComponent('span',"blue",name));
	tr.appendChild(getSpacingTD());
	tr.appendChild(td);
	tr.appendChild(getSpacingTD());
	for(var i=0;i<8;i++){
		tr.appendChild(getTDwithData(amount[i],"td_Data_IO"));	
	}
	tr.appendChild(getSpacingTD());
	for(var i=8;i<16;i++){
		tr.appendChild(getTDwithData(amount[i],"td_Data_IO"));	
	}
	tr.appendChild(getSpacingTD());
	for(var i=16;i<24;i++){
		tr.appendChild(getTDwithData(amount[i],"td_Data_IO"));	
	}
	tr.appendChild(getSpacingTD());
	return tr;
}

function combineSameIOArray(IOArray)
{
	var result_Array=[];
	var repeatPosition=[];
	for(var i =0; i<IOArray.length;i++)
	{
		var newElement={"route":"","name":"","amount":[]};
		newElement.route = IOArray[i].route;
		newElement.name = IOArray[i].name;
		newElement.amount=[];
		for(var j=0;j<IOArray.length;j++)
		{
			var compareString1= IOArray[i].name.replace(/\s/g, '').toLowerCase();
			var compareString2= IOArray[j].name.replace(/\s/g, '').toLowerCase();
			if(repeatPosition.indexOf(j)<0 && IOArray[i].route == IOArray[j].route && compareString1 == compareString2)
			{
				for(var k = 0; k<24;k++)
				{
					var toadd=0;
					if(IOArray[j].amount[k])
					{
						toadd=IOArray[j].amount[k];
					}
					var original=0
					if(newElement.amount[k])
					{
						original = newElement.amount[k];
					}
					newElement.amount[k] = original + toadd;
				}
				if(i!=j){
					repeatPosition.push(j);
				}
			}
		}
		if(repeatPosition.indexOf(i)<0)
		{
			result_Array.push(newElement);
		}
	}
	
	result_Array.sort(
		function(a,b){
			var result;
			if(a.route==b.route) {
				if(a.name > b.name) {result = 1;}
				else{result = -1;}
			}
			else if(a.route > b.route) {result = 1;}
			else{result = -1;}
			return result;
		}
	);

	return result_Array;
}

