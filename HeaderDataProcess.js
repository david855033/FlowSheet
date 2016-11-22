
function HeaderDataProcess() {
	generateHeader();
	getCurrentDate();
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

	
	if( typeof gestationalAgeWeek !== "undefined"&&
		typeof gestationalAgeDate !== "undefined" &&
		typeof birthDate !== "undefined" &&
		typeof currentDate !== "undefined" &&
		gestationalAgeWeek<37 &&
		parseInt(getAgeInDays()/365)<2)
	{
		mainHeader.appendChild
		(generateHeaderCard(getCGATitle(),getCGAString(),
			getGAString()));
	}

	mainHeader.appendChild
		(generateHeaderCard2("體重",getBodyWeigth(),
			getBodyWeightDif(),getBirthWeight()));

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

function generateHeaderCard2(s1,s2_1,s2_2,s3){
	
	
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
	var totalGADays = gestationalAgeWeek*7
	+ gestationalAgeDate+diffDays;
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
		return "GA "+gestationalAgeDate+" wk";
	}else
	{
		return "GA "+gestationalAgeWeek+"+" + gestationalAgeDate+" wk";
	}
}



function getBodyWeigth(){
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
			result += " (+"+dif+")";
		}else
		{
			result +=	" ("+dif+")";
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