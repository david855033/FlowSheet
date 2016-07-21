function getComponent(componentType, setClass,  setHTML)
{
	var result =document.createElement(componentType);
	if(setClass)
	{
		result.setAttribute('class',setClass);
	}
	if(setHTML)
	{
		result.innerHTML=setHTML;
	}
	
	return result;
}


//產生表格中橫向填充
function getSpacingRow()
{	
	return getComponent('tr',"tr_spacing");
}

//產生表格中縱向填充
function getSpacingTD()
{
	return getComponent('td',"td_spacing");
}


function dateToStringShort(input)
{
	var result=
	input.getFullYear() +"-"+(input.getMonth() + 1) + '-' + input.getDate();
	return result;
}

function dateToStringMMDD(input)
{
	var result=
	(input.getMonth() + 1) + '/' + input.getDate();
	return result;
}
