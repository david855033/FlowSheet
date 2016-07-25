
function IODataProcess(){
	var table = document.getElementById("iotable");
	table.innerHTML="";
	table.appendChild(getIOTable());
}


function getIOTable()
{
	var table = getComponent('table');
	table.appendChild(getSpacingRow());
	
	for(var x = 0; x < peripheral_Array.length;x++)
	{
		table.appendChild(printRow_IO(peripheral_Array[x],"(ml)"));
	}
	
	if(peripheral_Array.length==0)
	{
		table.appendChild(printRow_IO({"route":"IV"},"(ml)"));
	}
	
	for(var x = 0; x < aline_Array.length;x++)
	{
		table.appendChild(printRow_IO(aline_Array[x],"(ml)"));
	}
	if(aline_Array.length==0)
	{
		table.appendChild(printRow_IO({"route":"AL/UA"},"(ml)"));
	}
	
	for(var x = 0; x < central_Array.length;x++)
	{
		table.appendChild(printRow_IO(central_Array[x],"(ml)"));
	}
	if(central_Array.length==0)
	{
		table.appendChild(printRow_IO({"route":"CVC/PCVL"},"(ml)"));
	}
	table.appendChild(getSpacingRow());

	for(var x = 0; x < transfusion_Array.length;x++)
	{
		table.appendChild(printRow_IO(transfusion_Array[x],"(ml)"));
	}
	if(transfusion_Array.length==0)
	{
		table.appendChild(printRow_IO({"route":"Transfusion"},"(ml)"));	
	}
	
	table.appendChild(getSpacingRow());
	table.appendChild(printRow_IO({"route":"PO","amount":POAmount},"(ml)"));
	table.appendChild(printRow_IO({"route":"NG/OG","amount":NGAmount},"(ml)"));
	table.appendChild(printRow_IO({"route":"RV","amount":RVAmount},"(ml)"));
	table.appendChild(printRow_IO({"route":"RV Character","amount":RVCharacter},""));
	
	table.appendChild(getSpacingRow());
	table.appendChild(printRow_IO({"route":"NG/OG drain","amount":NGDrain},""));
	
	for(var x = 0; x < drain_Array.length;x++)
	{
		table.appendChild(printRow_IO(drain_Array[x],"(ml)"));
	}
	if(drain_Array.length==0)
	{
		table.appendChild(printRow_IO({"route":"Drain"},"(ml)"));
	}
	table.appendChild(printRow_IO({"route":"Urine","amount":urine},"(ml)"));
	table.appendChild(printRow_IO({"route":"Stool","amount":stool},""));
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
