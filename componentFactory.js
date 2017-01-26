function getComponent(componentType, setClass,  setHTML)
{
	var result =document.createElement(componentType);
	if(setClass)
	{
		result.setAttribute('class',setClass);
	}
	if(setHTML || setHTML==0)
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
	if(input instanceof Date) //modify by Bob 20161124
	{
		var result=
		input.getFullYear() +"-"+(input.getMonth() + 1) + '-' + input.getDate();
		return result;
	}else
	{
		return "";
	}
}

function dateToStringMMDD(input)
{
	var result=
	(input.getMonth() + 1) + '/' + input.getDate();
	return result;
}

//產生裝資料的格子，無資料的CSS使用pstfix: "_Empty" 警告字體cs ="warn"
function getTDwithData(value, setClass,L,U,isZeroShowed, tooltip,isSmallerWord)
{
	if(!isZeroShowed) {var isZeroShowed = false;}
	var warn = "";
	if( (typeof value === "number" && (false||value !=0 ) ||
		(typeof value === "string" && value !="" ) ))
	{
		var td = getComponent('td',setClass);		
		if( (typeof L === "number" && value < L) ||
			(typeof U === "number" && value > U) )
		{
			warn="warn";
		}
		if(isSmallerWord)
		{
			warn="smallWord";
		}
		if(typeof value == "number") value = Math.round(value*10)/10;
		var toAppend = getSpanWithUnderLineAndToolTip(getComponent('span',warn,value),tooltip);
		td.appendChild(toAppend);
	}
	else{
		var td =  getComponent('td',setClass+"_Empty");	
		td.appendChild(getComponent('span',warn,""));
	}
	return td;
}

function getTRwithTD(content,setTDClass,warn){
	var tr = document.createElement('tr');
		var td = document.createElement('tr');
		if(typeof setTDClass === "string"){
			td.setAttribute('class', setTDClass );
		}
		td.appendChild(getSpan(content,warn));
		td.align="center";
	tr.appendChild(td)	
	tr.align="center";
	return tr;
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

function getClearDiv(){
	var clearDiv= document.createElement('div');
	clearDiv.setAttribute('class',"clear");
	return clearDiv;
}

function keysrt(key,desc) {
  return function(a,b){
  	var result;
  	if(a[key] > b[key]) {result = 1;}else{result = -1;}
  	if(desc) result = result * -1;
   return result;
  }
}

function getSpanWithUnderLineAndToolTip(element, input){
	if(input && input !="")
	{
		var result = getComponent("span","underline");
		element.setAttribute("title",input);	
		result.appendChild(element);	
		return result;
	}else
	{
		return element;
	}
}

function getSpanToolTip(element, input){
	if(input && input !="")
	{
		var result = getComponent("span");
		element.setAttribute("title",input);
			result.appendChild(element);	
		return result;
	}
}
