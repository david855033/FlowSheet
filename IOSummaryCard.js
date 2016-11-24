
function IOSummaryCard(){
	var idcards = document.getElementById("idcards");
	idcards.innerHTML="";
	idcards.appendChild(getIOCard("大夜", 0,7, false));
	idcards.appendChild(getIOCard("白班", 8,15, false));
	idcards.appendChild(getIOCard("小夜", 16,23, false));
	idcards.appendChild(getIOCard("全日", 0,23, true));
}


function getIOCard(shiftname, start, end, isTotal){
	
	if(isTotal)
	{
		var Card = getComponent('div',"IOCard_Total");
	}else{
		var Card = getComponent('div',"IOCard");	
	}
	Card.appendChild(getShiftName(shiftname,isTotal));
	Card.appendChild(getIOContainer(start, end, isTotal));
	Card.appendChild(getIOBalance(start, end, isTotal));
	Card.appendChild(getClearDiv());
	return Card;
}

function getShiftName(shiftname, isTotal)
{
	var setClass;
	if(isTotal){setClass="shift_Total";}else{setClass="shift";}
	var div =getComponent('div',setClass);
		var table =getComponent('table');
		table.appendChild(getComponent('tr','tr_shiftSpacing'));
		table.appendChild(getTRwithTD(shiftname));
	div.appendChild(table);
	return div;
}


function getIOContainer(start, end, isTotal)
{
	var div = getComponent('div',"IOContainer");
	div.appendChild(getInnerCard("IV", getIV(start, end), isTotal, false));
	div.appendChild(getInnerCard("Feed", getFeed(start, end), isTotal, false));
	div.appendChild(getInnerCard("Input",getInput(start, end), isTotal, true));
	div.appendChild(getClearDiv());
	div.appendChild(getInnerCard("Urine",getUrine(start, end), isTotal, false));
	var uo = getUrinePerHour(start, end);
	var warn;
	if(uo >= 5 || (uo <1 && uo>0)) {warn="warn";}
	div.appendChild(getInnerCard("ml/kg/h",uo, isTotal, false, warn));
	div.appendChild(getInnerCard("Output",getOutput(start,end), isTotal, true));
	div.appendChild(getClearDiv());
	return div;
}

function getInnerCard(name, amount, isTotal, isWide, isWarn)
{
	var div= getComponent('div',getDivClass(isTotal, isWide));
		var tb = getComponent('table');
			var td1=getTRwithTD(name,getNameTitleClass(isTotal));
			td1.align="center";
			tb.appendChild(td1);
			var td2=getTRwithTD(amount,getAmountTitleClass(isTotal,isWarn));
			td2.align="center";
			tb.appendChild(td2);
	div.appendChild(tb);
	div.align = "center";
	return div;
}



function getIOBalance(start, end, isTotal)
{
	var setClass,setClass1,setClass2;
	if(isTotal){
		setClass="IOBalanceTotal";
		setClass1="IOInnerSmallTotal";
		setClass2="IOInnerBigTotal";
	}else{
		setClass="IOBalance";
		setClass1="IOInnerSmall";
		setClass2="IOInnerBig";
	}
	var div = getComponent('div',setClass);
		var tb = document.createElement('table');
		tb.appendChild(getComponent('tr',"tr_IObalancespacing"));
			var tr1 = getTRwithTD("I/O",setClass1);
			tr1.align="center";
		tb.appendChild(tr1);
			var tr2 = getTRwithTD(getIO(start,end),setClass2);
			tr2.align="center";
		tb.appendChild(tr2);
	div.appendChild(tb);
	return div;
}



function getIV(start, end){
	var amount=0;
	for(x = 0; x < peripheral_Array.length; x++)
	{
		for(y = start ; y<=end ; y++)
		{
			if(typeof peripheral_Array[x].amount[y] === "number")
			{
				amount +=peripheral_Array[x].amount[y];
			}
		}
	}
	for(x = 0; x < peripheral_Array.length; x++)
	{
		for(y = start ; y<=end ; y++)
		{
			if(typeof peripheral_Array[x].amount[y] === "number")
			{
				amount +=peripheral_Array[x].amount[y];
			}
		}
	}
	for(x = 0; x < central_Array.length; x++)
	{
		for(y = start ; y<=end ; y++)
		{
			if(typeof central_Array[x].amount[y] === "number")
			{
				amount +=central_Array[x].amount[y];
			}
		}
	}
	amount = Math.round(amount);
	return amount;
}

function getFeed(start, end){
	var amount=0;
	for(y = start ; y<=end ; y++)
	{
			if(typeof POAmount[y] === "number")
			{
				amount += POAmount[y];
			}
			if(typeof NGAmount[y] === "number")
			{
				amount += NGAmount[y];
			}
	}
	amount = Math.round(amount);
	return amount;	
}

function getInput(start, end){
	var amount=getIV(start, end)+getFeed(start,end);
	for(x = 0; x < transfusion_Array.length; x++)
	{
		for(y = start ; y<=end ; y++)
		{
			if(typeof transfusion_Array[x].amount[y] === "number")
			{
				amount +=transfusion_Array[x].amount[y];
			}
		}
	}
	amount = Math.round(amount);
	return amount;
}

function getUrine(start, end){
	var amount=0;
	for(y = start ; y<=end ; y++)
	{
			if(typeof urine[y] === "number")
			{
				amount += urine[y];
			}
	}
	amount = Math.round(amount);
	return amount;	
}

function getUrinePerHour(start,end){	

	if(end>validEnd) {end = validEnd;}
	if(start<validStart) {start = validStart;}
	

	var validHour = end-start+1 ;

	if(typeof bodyWeight !== "undefined" && bodyWeight)
	{
	var amount = Math.round (getUrine(start,end)*10 / (validHour)/bodyWeight*1000)/10;
	}else if(typeof mostRecentBodyWeight !== "undefined" && mostRecentBodyWeight)
	{
	var amount = Math.round (getUrine(start,end)*10 / (validHour)/mostRecentBodyWeight*1000)/10;
	}else
	{
	var amount = "-";
	}
	
	return amount;
}

function getOutput(start,end){
	var amount = getUrine(start, end);
	for(x = 0; x < drain_Array.length; x++)
	{
		for(y = start ; y<=end ; y++)
		{
			if(typeof drain_Array[x].amount[y] === "number")
			{
				amount += drain_Array[x].amount[y];
			}
		}
	}
	for(y = start ; y<=end ; y++)
		{
			if(typeof NGDrain[y] === "number")
			{
				amount += NGDrain[y];
			}
		}
	return amount;
}

function getIO(start,end){
	var amount = getInput(start,end)-getOutput(start,end);
	return amount;
}



function getNameTitleClass(isTotal){
	var divclass;
	if(isTotal)
	{
		divclass="IOInnerSmallTotal";
	}else{
		divclass="IOInnerSmall";
	}
	return divclass
}

function getAmountTitleClass(isTotal,isWarn){
	var divclass;
	if(isTotal)
	{
		divclass="IOInnerBigTotal";
	}else{
		divclass="IOInnerBig";
	}
	if(isWarn)
	{divclass+="Warn";}
	return divclass
}

function getDivClass(isTotal, isWide)
{
	var divclass="IOInnerCard";
	if(isWide)
	{
		divclass+="_Wide";
	}
	if(isTotal)
	{
		divclass+="_Total";
	}
	
	return divclass
}
