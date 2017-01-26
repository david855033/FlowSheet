
function HeaderDataProcess() {
	generateHeader();
	getCurrentDate();
	translateEvent();
}

function generateHeader(){
	var mainHeader=document.getElementById("mainHeader");
	mainHeader.innerHTML="";
	
	if(typeof wardName == "undefined"){
		wardName = "未知病房";
	}
	if(typeof patientName == "undefined"){
		patientName="未知姓名";
	}
	if(typeof doctorName == "undefined"){
		doctorName="未知醫師";
	}
	mainHeader.appendChild
	(generateHeaderCard(wardName,patientName,"主治醫師: "+doctorName));

	if(typeof chartNumber == "undefined"){
		chartNumber = "01234567";
	}
	if(typeof admissionDate == "undefined"){
		admissionDate = new Date("1990-01-01");
	}
	mainHeader.appendChild
	(generateHeaderCard("病歷號",chartNumber,
		dateToStringShort(admissionDate)+" 住院"));

	if(typeof birthDate == "undefined" || typeof currentDate == "undefined"){
		mainHeader.appendChild
		(generateHeaderCard("實際年齡","未知年齡",
		"未知生日"));
	}else{
		mainHeader.appendChild
		(generateHeaderCard("實際年齡",getAgeStirng(),
		dateToStringShort(birthDate)+" 出生"));
	}

	
	if( typeof gestationalAgeWeek === "number"&&
		typeof gestationalAgeDate === "number" &&
		typeof birthDate !== "undefined" &&
		typeof currentDate !== "undefined" &&
		gestationalAgeWeek<37 &&
		parseInt(getAgeInDays()/365)<2)
	{
		mainHeader.appendChild
		(generateHeaderCard(getCGATitle(),getCGAString(),
			getGAString()));
	}

	setBodyWeight();
	mainHeader.appendChild
		(generateHeaderCardBW("體重",getBodyWeight(),
			getBodyWeightDif(),getBirthWeight(),getBWTooltip()));

	if(dietType && dietAmount)
	{
	mainHeader.appendChild
		(generateHeaderCard("Diet",getDietType(),
			getDietAmount()));
	}

	if(currentVentilatorType && currentVentilatorSetting)
	{
	mainHeader.appendChild
		(generateHeaderCard("Ventilator",getVentilatorType(),
			getVentilatorSetting()));
	}
}

function generateHeaderCard(s1,s2,s3){

	var td1 = getComponent("id","smalltitle",s1);
	var td2 = getComponent('td',"","")
		var split= s2.split("+");
		for(var i = 0 ; i < split.length;i++)
		{
			if(i==0)
			{
				var sp1 = getComponent("span",'bigtitle',split[0]);
				td2.appendChild(sp1);
			}else
			{
				var sp2 = getComponent("span",'midtitle',"+");
				var sp3 = getComponent("span",'bigtitle',split[i]);
				td2.appendChild(sp2);
				td2.appendChild(sp3);
			}
		}
	
	var td3 =  getComponent("id","smalltitle",s3);

	var tr1 =  getComponent('tr');
	var tr2 =  getComponent('tr');
	var tr3 =  getComponent('tr');
	tr1.appendChild(td1);
	tr2.appendChild(td2);
	tr3.appendChild(td3);
	var table =  getComponent('table');
	table.appendChild(tr1);
	table.appendChild(tr2);
	table.appendChild(tr3);

	var newDiv = getComponent('div',"headerCard");
	newDiv.appendChild(table);
	return newDiv;
}

function generateHeaderCardBW(s1,s2_1,s2_2,s3,BWTooltip){
	
	
	var td1 =  getComponent('td','smalltitle',s1);

	var sp1 = getComponent('span','bigtitle',s2_1);
	var sp2 = getComponent('span',"",s2_2);
	var td2 = getComponent('td');
	td2.appendChild(sp1);
	td2.appendChild(sp2);

	var td3 = getComponent('td','smalltitle',s3);
	
	var tr1 =  getComponent('tr');
	var tr2 =  getComponent('tr');
	var tr3 =  getComponent('tr');
	tr1.appendChild(td1);
	tr2.appendChild(td2);
	tr3.appendChild(td3);
	var table =  getComponent('table');
	table.appendChild(tr1);
	table.appendChild(tr2);
	table.appendChild(tr3);

	var newDiv = getComponent('div',"headerCard");
	newDiv.appendChild(table);
	if(BWTooltip){newDiv=getSpanToolTip(newDiv,BWTooltip);}
	return newDiv;
}

function getAgeInDays()
{
	
	var timeDiff = Math.abs(currentDate.getTime() - birthDate.getTime());
	var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
	return diffDays;
}

function getAgeStirng()
{
	var diffDays= getAgeInDays();
	var result;
	if(diffDays<30)
	{
		result = diffDays + " d/o";
	}else if (diffDays<365)
	{
		result = parseInt(diffDays/30)+"m "
		+ (diffDays%30)+"d";
	}
	else if(parseInt(diffDays/365)<10)
	{
		result = parseInt(diffDays/365)+"y "
		+ Math.round((diffDays%365)/30)+"m";
	}else
	{
		result = parseInt(diffDays/365)+"y/o";
	}

	return result;
}


function getCGATitle()
{
	var diffDays= getAgeInDays();
	var totalGADays = gestationalAgeWeek*7
	+ gestationalAgeDate+diffDays;
	cGAweek =  parseInt(totalGADays/7);
	if(cGAweek>40){
		return "矯正年齡";
	}else{
		return "矯正週數";
	}
}

function getCGAString()
{
	var diffDays= getAgeInDays();
	var totalGADays = gestationalAgeWeek*7+ gestationalAgeDate+diffDays;
	
	cGAweek =  parseInt(totalGADays/7);
	cGAdate = totalGADays%7;
	
	if(cGAweek<=40)
	{
		if(cGAdate==0)
		{
			return cGAweek+" wK";
		}else
		{
			return cGAweek+ "+" + cGAdate+" wk";
		}
	}else 
	{
		var ageInDays = totalGADays - 7*40;
		if(ageInDays<30)
		{
			result = ageInDays + " d/o";
		}else if (ageInDays<365)
		{
			result = parseInt(ageInDays/30)+"m "
			+ (ageInDays%30)+"d";
		}else if(parseInt(diffDays/365)<10){
			result = parseInt(diffDays/365)+"y "
			+ Math.round((diffDays%365)/30)+"m";
		}else
		{
			result = parseInt(ageInDays/365)+"y/o"
		}
		return result;
	}
}

function getGAString()
{
	if(gestationalAgeDate==0)
	{
		return "GA "+gestationalAgeWeek+" wk";
	}else
	{
		return "GA "+gestationalAgeWeek+"+" + gestationalAgeDate+" wk";
	}
}


function setBodyWeight(){
	if(typeof bodyWeightArray === "undefined"){
		return;
	}
	var hasCurrentDate=false;
	var latestDate = new Date("0001-01-01");
	var latestWeigtht;
	for(var i = 0 ; i < bodyWeightArray.length ; i++)
	{
		var thisDate = new Date(bodyWeightArray[i].date);

		if(thisDate > latestDate && thisDate <= currentDate)
		{
			latestDate=thisDate;
			latestWeigtht = parseInt(bodyWeightArray[i].weight);	
		}
		if(dateToStringShort(thisDate) == dateToStringShort(currentDate))
		{
			bodyWeight=parseInt(bodyWeightArray[i].weight);
			hasCurrentDate=true;
		}
		
		var dayBeforeCurrentDay = new Date(currentDate);
		dayBeforeCurrentDay.setDate(dayBeforeCurrentDay.getDate()-1);
		if(dateToStringShort(thisDate) == dateToStringShort(dayBeforeCurrentDay))
		{
			bodyWeightLastDate=parseInt(bodyWeightArray[i].weight);
		}
	}

	if(hasCurrentDate==false)
	{
		mostRecentBodyWeight =latestWeigtht;
		mostRecentBodyWeightDate = latestDate;	
	}

}

var bodyWeight;
var bodyWeightLastDate;	

function getBodyWeight(){
	var result;
	if (typeof bodyWeight === "number")
	{
		
		if(bodyWeight<4000)
		{
			result = bodyWeight+"g";
		}else
		{
			result = Math.round(bodyWeight/100)/10+"kg";	
		}
		
	}
	else if(typeof mostRecentBodyWeight === "number")
	{
		
		if(mostRecentBodyWeight<4000)
		{
			result = mostRecentBodyWeight+"g";
		}else
		{
			result = Math.round(mostRecentBodyWeight/100)/10+"kg";	
		}
	}
	else
	{
		result = "未知體重";
	}
	return result;
}

function getBodyWeightDif(){
	var result="";
    
	if(typeof bodyWeightLastDate === "number" && typeof bodyWeight=== "number")
	{
		var dif = bodyWeight-bodyWeightLastDate;
		if(dif>=0)
		{
			result += " (+"+dif+"g)";
		}else
		{
			result +=	" ("+dif+"g)";
		}			
	}else if(typeof mostRecentBodyWeight === "number")
	{
		result += " ("+dateToStringMMDD(mostRecentBodyWeightDate)+")";
	}

	return result;
}

function getBirthWeight(){
	if (typeof birthBodyWeight=== "number" &&
	  typeof birthDate !== "undefined" &&
	  typeof currentDate !=="undefined" &&
	  getAgeInDays() < 365)
	{
		return "BBW:"+birthBodyWeight+"g";
	}else
	{
		return "";
	}
}

var BWTooltipArray;
function getBWTooltip()
{
	if(typeof bodyWeightArray === "undefined"){
		return;
	}

	var sortedArray = bodyWeightArray.sort(keysrt("date",true));
	var grabbedArray = [];
	for(var i = 0 ; i < sortedArray.length && grabbedArray.length<=5 ; i++)
	{	
		var thisDate = new Date(sortedArray[i].date);
		if(thisDate <= currentDate)
		{
			grabbedArray.push(sortedArray[i]);
		}
	}
	
	var result="";
	for(var i = 1; i<grabbedArray.length; i++)
	{
		if(result !="") result+="\r\n";
		var weight;
		if(grabbedArray[i].weight<4000)
			{
				weight = Math.round(grabbedArray[i].weight)+"g";
			}else{ weight=Math.round(grabbedArray[i].weight/100)/10+"kg";}
		result += grabbedArray[i].date.split('-')[1]+"/"+grabbedArray[i].date.split('-')[2] + " "+weight;
	}
	return result;
}

function getDietType()
{
	if(dietType)
	{
		return dietType;
	}
	return "-";
}

function getDietAmount()
{
	if(dietAmount && dietType)
	{
		return dietAmount;
	}
	return "-";
}

function getVentilatorType()
{
	if(currentVentilatorType)
	{
		return currentVentilatorType;
	}
	return "-";
}

function getVentilatorSetting()
{
	if(currentVentilatorSetting && currentVentilatorType)
	{
		return currentVentilatorSetting;
	}
	return "-";
}

function getCurrentDate()
{
	if(dateToStringShort(currentDate))
	{
		document.getElementById('currentDate').innerHTML=
	 	"資料日期: "+dateToStringShort(currentDate);
	}else
	{
		document.getElementById('currentDate').innerHTML=
		"資料日期錯誤";
	}
}

function translateEvent()
{
	var final_event_Array=[];
	var vent_event_Array=[];
	var incubater_temperature_event_Array=[];
	var incubater_humidity_event_Array=[];
	//categorize event
	for(var i = 0; i <event_Array.length;i++)
	{
		if(event_Array[i].content){event_Array[i].content =event_Array[i].content.trim();}
		if(event_Array[i].content && event_Array[i].content.substring(0,2).toLowerCase()=="@v")
		{
			event_Array[i].content = event_Array[i].content.substring(2,event_Array[i].length);
			vent_event_Array.push(event_Array[i]);
		}else if(event_Array[i].content && event_Array[i].content.substring(0,2).toLowerCase()=="@i")
		{
			event_Array[i].content = event_Array[i].content.substring(2,event_Array[i].length);
			incubater_temperature_event_Array.push(event_Array[i]);
		}else if(event_Array[i].content && event_Array[i].content.substring(0,2).toLowerCase()=="@h")
		{
			event_Array[i].content = event_Array[i].content.substring(2,event_Array[i].length);
			incubater_humidity_event_Array.push(event_Array[i]);
		}else
		{
			final_event_Array.push(event_Array[i]);
		}
	}
	event_Array=final_event_Array;
	translateVent(vent_event_Array);
	translateIncubator(incubater_temperature_event_Array);
	translateHumidity(incubater_humidity_event_Array);
}

function translateVent(vent_event_Array)
{
	for(var i = 0; i <vent_event_Array.length;i++)
	{
		var line=vent_event_Array[i].content.trim().replace(/ +/g,",");
		var splitLine = line.split(",");
		var commands=[];
		for(var j = 0; j<splitLine.length;j++)
		{
			if(splitLine[j])
			{
				commands.push(splitLine[j]);
			}
		}
		addVentilatorSetting(vent_event_Array[i].time,commands);
	}
}

function addVentilatorSetting(time, commands)
{
	if(time&&commands)
	{
		var ventilatorySetting={"time":"","mode":"","setting":""};
		ventilatorySetting.time = time;
		var thisVent;

	
		//set mode
		for(var i = 0; i < commands.length && ventilatorySetting.mode==""; i++)
		{
			for(var j = 0; j<availibleVentilatorList.length && ventilatorySetting.mode==""; j++)
			{
				for(var k=0;k<availibleVentilatorList[j].mode.match.length && ventilatorySetting.mode==""; k++)
				{
					if(commands[i].toLowerCase() == availibleVentilatorList[j].mode.match[k].toLowerCase())
					{
						ventilatorySetting.mode  = availibleVentilatorList[j].mode.name;
						thisVent = availibleVentilatorList[j];
						commands.splice(i,1);
					}
				}
			}
		}
		if(!thisVent) {
			ventilatorySetting.mode  = commands[0];
			commands.splice(0,1);

			for(var i = 0; i < commands.length; i++)
			{
				if(ventilatorySetting.setting!="") ventilatorySetting.setting+=", ";
					commands[i]=commands[i].replace(/=/g,":");
					ventilatorySetting.setting+=commands[i];
			}

			ventilator_Array.push(ventilatorySetting);
			return;
		}
	
		//read sequential
		for(var i = 0; i < commands.length; i++)
		{
			isRegexMatch = thisVent.sequentialSetting.regex.test(commands[i]);
			if(isRegexMatch)
			{
				var splitLine= commands[i].split('/');
				for(var j = 0 ; j < splitLine.length && j< thisVent.sequentialSetting.fields.length ;j++)
				{
					if(j >0)
					{
						ventilatorySetting.setting+= ", ";
					}
					if(/\d+(.\d+)?/.test(splitLine[j])){
						var thisValue = splitLine[j].match(/\d+(.\d+)?/)[0];
						ventilatorySetting.setting+=thisVent.sequentialSetting.fields[j] + ": "+
												thisValue + thisVent.sequentialSetting.units[j] ;
					}
				}
				commands.splice(i,1);
			}
		}
		
		//read setting by name
		for(var i = 0; i < commands.length; i++)
		{
			if(ventilatorySetting.setting!="") {ventilatorySetting.setting+=", ";}
			commands[i]=commands[i].replace(/=/g,":");
			ventilatorySetting.setting+=commands[i];
		}
		ventilator_Array.push(ventilatorySetting);

	}
	//alert(time+"  "+commands.toString());
}

var availibleVentilatorList=[
	{"mode":
		{"name":"PC","match":["PC"]},
	 "setting":
	 	[
			{"name":"FiO2","match":["fio2","o2"]},
			{"name":"Rate","match":["rate","rr"]},
			{"name":"PIP","match":["pip"]},
			{"name":"PEEP","match":["peep"]}
		],
	"sequentialSetting":{
		"regex":/\d+(.\d+)?\/\d+(.\d+)?\/\d+(.\d+)?\/\d+(.\d+)?/,
		"fields":["FiO2","Rate","PIP","PEEP"],
		"units":["%","/min","",""]}
	},
	{"mode":
		{"name":"IPPV","match":["IPPV"]},
	 "setting":
	 	[
			{"name":"FiO2","match":["fio2","o2"]},
			{"name":"Rate","match":["rate","rr"]},
			{"name":"PIP","match":["pip"]},
			{"name":"PEEP","match":["peep"]}
		],
	"sequentialSetting":{
		"regex":/\d+(.\d+)?\/\d+(.\d+)?\/\d+(.\d+)?\/\d+(.\d+)?/,
		"fields":["FiO2","Rate","PIP","PEEP"],
		"units":["%","/min","",""]}
	},
	{"mode":
		{"name":"NIPPV","match":["NIPPV"]},
	 "setting":
	 	[
			{"name":"FiO2","match":["fio2","o2"]},
			{"name":"Rate","match":["rate","rr"]},
			{"name":"PIP","match":["pip"]},
			{"name":"PEEP","match":["peep"]}
		],
	"sequentialSetting":{
		"regex":/\d+(.\d+)?\/\d+(.\d+)?\/\d+(.\d+)?\/\d+(.\d+)?/,
		"fields":["FiO2","Rate","PIP","PEEP"],
		"units":["%","/min","",""]}
	},
	{"mode":
		{"name":"HFOV","match":["HFOV"]},
	 "setting":
	 	[
			{"name":"FiO2","match":["fio2","o2"]},
			{"name":"AMP","match":["amp","amplitude"]},
			{"name":"MAP","match":["map"]},
			{"name":"freq","match":["freq","frequency"]}
		],
	"sequentialSetting":{
		"regex":/\d+(.\d+)?\/\d+(.\d+)?\/\d+(.\d+)?\/\d+(.\d+)?/,
		"fields":["FiO2","AMP","MAP","freq"],
		"units":["%","","","Hz"]}
	},
	{"mode":
		{"name":"NC","match":["nc"]},
	 "setting":
	 	[
			{"name":"FiO2","match":["fio2","o2"]},
			{"name":"AMP","match":["amp","amplitude"]},
			{"name":"MAP","match":["map"]},
			{"name":"freq","match":["freq","frequency"]}
		],
	"sequentialSetting":{
		"regex":/\d+(.\d+)?/,
		"fields":["Flow"],
		"units":["L/min"]}
	},
	{"mode":
		{"name":"CPAP","match":["CPAP","bcpap","b-cpap"]},
	 "setting":
	 	[
			{"name":"FiO2","match":["fio2","o2"]},
			{"name":"PEEP","match":["peep"]}
		],
	"sequentialSetting":{
		"regex":/\d+(.\d+)?\/\d+(.\d+)?/,
		"fields":["FiO2","PEEP"],
		"units":["%",""]}
	},
	{"mode":
		{"name":"High Flow","match":["HF","highFlow","High Flow"]},
	 "setting":
	 	[
			{"name":"FiO2","match":["fio2","o2"]},
			{"name":"PEEP","match":["peep"]}
		],
	"sequentialSetting":{
		"regex":/\d+(.\d+)?\/\d+(.\d+)?/,
		"fields":["FiO2","PEEP"],
		"units":["%",""]}
	},
	{"mode":
		{"name":"PCVG","match":["pcvg","volume guarantee"]},
	 "setting":
	 	[
			{"name":"FiO2","match":["fio2","o2"]},
			{"name":"Rate","match":["rate","rr"]},
			{"name":"TV","match":["tv"]},
			{"name":"PEEP","match":["peep"]}
		],
	"sequentialSetting":{
		"regex":/\d+(.\d+)?\/\d+(.\d+)?\/\d+(.\d+)?\/\d+(.\d+)?/,
		"fields":["FiO2","Rate","TV","PEEP"],
		"units":["%","/min","ml",""]}
	}
]

function translateIncubator(incubater_temperature_event_Array)
{
	for(var i = 0; i <incubater_temperature_event_Array.length;i++)
	{
		
		var thisTime = incubater_temperature_event_Array[i].time;
		var thisValue = incubater_temperature_event_Array[i].content.match(/\d+(.\d+)?/);
		if(thisValue){
			incubatorTemp.push({"time":thisTime,"value":thisValue[0]});
		}
	}
} 

function translateHumidity(incubater_humidity_event_Array)
{
	for(var i = 0; i <incubater_humidity_event_Array.length;i++)
	{
		var thisTime = incubater_humidity_event_Array[i].time;
		var thisValue = incubater_humidity_event_Array[i].content.match(/\d+(.\d+)?/);
		if(thisValue){
			incubatorHumidity.push({"time":thisTime,"value":thisValue[0]});
		}
	}
} 