var peripheralRoute=["IV","IV"];
var peripheralName=["TPN","Mepem"];
var peripheralAmount=[[1,1,1,1,1],[,,,,4]];

var alineRoute=[];
var alineName=[];
var alineAmount=[];

var centralRoute=["CVC","PCVL","UV","PD"];
var centralName=["Dopa","S.Lipid","Albumin","PD solution"];
var centralAmount=[[0.2,0,0.2,0.2,0.2,0.1,0,0],[1,1,1,1,1],[0,0,0,0,0,10,10,10,10],[30]];

var transfusionNames=["pRBC","FFP","AlienBLood"];
var transfusionAmount=[[0,0,0,0,0,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,12,12,12,12],[100,100,100]];

var POAmount=[0,0,15,0,0,30,0,0,25];
var NGAmount=[0,0,3,0,0,30,0,0,25];
var RVAmount=[0,0,5,0,0,0,0,0,15];
var RVCharacter=[0,0,"半消",0,0,0,0,0,"黃褐"];

var NGDrain=[0,0,0,15];

var drainRoute=["Pigtail","JP","CVVH","PD"];
var drainName=["右胸","左腹","",""];
var drainAmount=[[45,,,,,,,20,,,,,,,],[15,,,,,,,],[5,5,5,5,5,5,5,5,5],[0,1,1,1]];

var urine =[,,,,30,,,,22,,,,,20,,90,90,];
var stool = [,,,,,"MYP",,,,,,];
var enema =[,,,,"S",,,,"E",,,];

function IODataProcess(){
	var table = document.getElementById("iotable");
	table.innerHTML="";
	table.appendChild(getIOTable());
	generateIOShiftCard();
}

function generateIOShiftCard()
{
	var idcards = document.getElementById("idcards");
	idcards.innerHTML="";
	idcards.appendChild(getIOCard("大夜", 0,7, false));
	idcards.appendChild(getIOCard("白班", 8,15, false));
	idcards.appendChild(getIOCard("小夜", 16,23, false));
	idcards.appendChild(getIOCard("加總", 0,23, true));
}

function getIOCard(shiftname, start, end, isTotal){
	var divCard = document.createElement('div');
	if(isTotal)
	{
		divCard.setAttribute('class',"TotalIOCard");
	}else{
		divCard.setAttribute('class',"IOCard");	
	}
	divCard.appendChild(getShiftName(shiftname,isTotal));
	divCard.appendChild(getIOContainer(start, end, isTotal));
	divCard.appendChild(getIOBalance(start, end, isTotal));
	divCard.appendChild(getClearDiv());
	return divCard;
}

function getShiftName(shiftname, isTotal)
{
	var div = document.createElement('div');
	var setClass;
	if(isTotal){setClass="shifttotal";}else{setClass="shift";}
	div.setAttribute('class',setClass);	
		var tb = document.createElement('table');
			var tr_spacing = document.createElement('tr');
			tr_spacing.setAttribute('class',"tr_shiftSpacing");
		tb.appendChild(tr_spacing);
			var tr = getTDinTR(shiftname);
		tb.appendChild(tr);
	div.appendChild(tb);
	return div;
}


function getIOContainer(start, end, isTotal)
{
	var div = document.createElement('div');
	div.setAttribute('class',"IOContainer");
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
function getIV(start, end){
	var amount=0;
	for(x = 0; x < peripheralRoute.length; x++)
	{
		for(y = start ; y<=end ; y++)
		{
			if(typeof peripheralAmount[x][y] === "number")
			{
				amount +=peripheralAmount[x][y];
			}
		}
	}
	for(x = 0; x < alineRoute.length; x++)
	{
		for(y = start ; y<=end ; y++)
		{
			if(typeof alineAmount[x][y] === "number")
			{
				amount +=alineAmount[x][y];
			}
		}
	}
	for(x = 0; x < centralRoute.length; x++)
	{
		for(y = start ; y<=end ; y++)
		{
			if(typeof centralAmount[x][y] === "number")
			{
				amount +=centralAmount[x][y];
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
	for(x = 0; x < transfusionNames.length; x++)
	{
		for(y = start ; y<=end ; y++)
		{
			if(typeof transfusionAmount[x][y] === "number")
			{
				amount +=transfusionAmount[x][y];
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
	var amount = Math.round (getUrine(start,end)*10 / (end-start+1)/bodyWeight*1000)/10;
	return amount;
}

function getOutput(start,end){
	var amount = getUrine(start, end);
	for(x = 0; x < drainRoute.length; x++)
	{
		for(y = start ; y<=end ; y++)
		{
			if(typeof drainAmount[x][y] === "number")
			{
				amount += drainAmount[x][y];
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


function getInnerCard(name, amount, isTotal, isWide, isWarn)
{
	var div=document.createElement('div');
	div.setAttribute('class',getDivClass(isTotal, isWide));
		var tb = document.createElement('table');
			var td1=getTDinTR(name,getNameTitleClass(isTotal));
			td1.align="center";
			tb.appendChild(td1);
			var td2=getTDinTR(amount,getAmountTitleClass(isTotal,isWarn));
			td2.align="center";
			tb.appendChild(td2);
	div.appendChild(tb);
	div.style.textAlign = "center";
	return div;
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
	var divclass;
	if(isWide)
	{
		if(isTotal)
		{
			divclass="IOInnerCardWideTotal";
		}
		else
		{	
			divclass="IOInnerCardWide";
		}
	}else
	{
		if(isTotal)
		{
			divclass="IOInnerCardTotal";
		}
		else
		{
			divclass="IOInnerCard";
		}
	}
	return divclass
}

function getIOBalance(start, end, isTotal)
{
	var div = document.createElement('div');
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

	div.setAttribute('class',setClass);
	var tb = document.createElement('tb');
		var tb = document.createElement('table');
			var tr_spacing = document.createElement('tr');
			tr_spacing.setAttribute('class',"tr_IObalancespacing");
		tb.appendChild(tr_spacing);
			var tr1 = getTDinTR("I/O",setClass1);
			tr1.align="center";
		tb.appendChild(tr1);
			var tr2 = getTDinTR(getIO(start,end),setClass2);
			tr2.align="center";
		tb.appendChild(tr2);
	div.appendChild(tb);
	return div;
}



function getClearDiv(){
	var clearDiv= document.createElement('div');
	clearDiv.setAttribute('class',"clear");
	return clearDiv;
}


function getTDinTR(content,setTDClass,warn){
	var tr = document.createElement('tr');
		var td = document.createElement('tr');
		if(typeof setTDClass === "string"){
			td.setAttribute('class', setTDClass );
		}
		td.appendChild(getSpan(content,warn));
	tr.appendChild(td)	
	return tr;
}

function getIOTable()
{
	var table = document.createElement('table');
	table.appendChild(getSpacingRow());
	
	for(x = 0; x < peripheralRoute.length;x++)
	{
		table.appendChild(printRow_IO(peripheralRoute[x],"(ml)",peripheralName[x],peripheralAmount[x]));
	}
	if(peripheralRoute.length==0)
	{
		table.appendChild(printRow_IO("IV","(ml)","",[0]));	
	}
	
	for(x = 0; x < alineRoute.length;x++)
	{
		table.appendChild(printRow_IO(alineRoute[x],alineName[x],alineAmount[x]));
	}
	if(alineRoute.length==0)
	{
		table.appendChild(printRow_IO("AL/UA","(ml)","",[0]));	
	}
	
	for(x = 0; x < centralRoute.length;x++)
	{
		table.appendChild(printRow_IO(centralRoute[x],"(ml)",centralName[x],centralAmount[x]));
	}
	if(centralRoute.length==0)
	{
		table.appendChild(printRow_IO("CVC/PCVL","(ml)","",[0]));	
	}
	table.appendChild(getSpacingRow());
	for(x = 0; x < transfusionNames.length;x++)
	{
		table.appendChild(printRow_IO(transfusionNames[x],"(ml)","",transfusionAmount[x]));
	}
	if(transfusionNames.length==0)
	{
		table.appendChild(printRow_IO("Transfusion","(ml)","",[0]));	
	}
	table.appendChild(getSpacingRow());
	table.appendChild(printRow_IO("PO","(ml)","",POAmount));
	table.appendChild(printRow_IO("NG/OG","(ml)","",NGAmount));
	table.appendChild(printRow_IO("RV","(ml)","",RVAmount));
	table.appendChild(printRow_IO("RV Character","","",RVCharacter));
	table.appendChild(getSpacingRow());
	table.appendChild(printRow_IO("NG/OG drain","(ml)","",NGDrain));
	for(x = 0; x < drainRoute.length;x++)
	{
		table.appendChild(printRow_IO(drainRoute[x],"(ml)",drainName[x],drainAmount[x]));
	}
	if(drainRoute.length==0)
	{
		table.appendChild(printRow_IO("Drain","(ml)","",[0]));	
	}
	table.appendChild(printRow_IO("Urine","(ml)","",urine));
	table.appendChild(printRow_IO("Stool","","",stool));
	table.appendChild(printRow_IO("Enema/Stim.","","",enema));
	table.appendChild(getSpacingRow());
	return table;
}

function printRow_IO(route, unit, name, amount)
{
	var tr = document.createElement('tr');
	td =  document.createElement('td');
		td.setAttribute("class","td_FirstColumn");
		td.appendChild(getSpan(route,""));
		td.appendChild(getSpan(unit,"fade"));
		td.appendChild(getSpan(" "+name,"blue"));
		tr.appendChild(getSpacingTD_IO());
	tr.appendChild(td);
	tr.appendChild(getSpacingTD_IO());
	for(i=0;i<8;i++){
		tr.appendChild(getTD_IO(amount[i]));	
	}
	tr.appendChild(getSpacingTD_IO());
	for(i=8;i<16;i++){
		tr.appendChild(getTD_IO(amount[i]));	
	}
	tr.appendChild(getSpacingTD_IO());
	for(i=16;i<24;i++){
		tr.appendChild(getTD_IO(amount[i]));	
	}
	tr.appendChild(getSpacingTD_IO());
	return tr;
}

function getTD_IO(value)
{
	td =  document.createElement('td');		

	if((typeof value === "number" && value !=0) || (typeof value === "string" && value !="") )
	{
		input=value;
		td.setAttribute("class","tdInTable3");
		td.appendChild(getSpan(value,""));
	}else
	{
		td.setAttribute("class","tdInTableEmpty3");
		td.appendChild(getSpan("",""));
	}
	return td;
}

function getSpacingTD_IO()
{
	var td = document.createElement('td');
	td.setAttribute("class","tdSpacing_IO");
	return td;
}
