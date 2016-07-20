
function HeaderDataProcess() {
	generateHeader();
	getCurrentDate();
}

function generateHeader(){
	document.getElementById("mainHeader").innerHTML="";

	document.getElementById("mainHeader").appendChild
	(generateHeaderCard(wardName,patientName,doctorName));

	document.getElementById("mainHeader").appendChild
	(generateHeaderCard("病歷號",chartNumber,
		dateToStringShort(admissionDate)+" 住院"));

	document.getElementById("mainHeader").appendChild
	(generateHeaderCard("實際年齡",getAgeStirng(),
		dateToStringShort(birthDate)+" 生"));

	if(gestationalAgeWeek<37)
	{
		document.getElementById("mainHeader").appendChild
		(generateHeaderCard(getCGATitle(),getCGAString(),
			getGAString()));
	}

	document.getElementById("mainHeader").appendChild
		(generateHeaderCard2("體重",getBodyWeigth(),
			getBodyWeightDif(),getBirthWeight()));

	document.getElementById("mainHeader").appendChild
		(generateHeaderCard("Diet",getDietType(),
			getDietAmount()));

	document.getElementById("mainHeader").appendChild
		(generateHeaderCard("Ventilator",getVentilatorType(),
			getVentilatorSetting()));
}

function generateHeaderCard(s1,s2,s3){

	var td1 = getComponent("id","smalltitle",s1);
	var td2 = document.createElement('td');
		var split= s2.split("+");
		for(i = 0 ; i < split.length;i++)
		{
			if(i==0)
			{
				var sp1 = getComponent("span",'bigtitle',split[0]);
				td2.appendChild(sp1);
			}else
			{
				var sp2 = getComponent("span",'bigtitle',"+");
				var sp3 = document.createElement('span');
				sp2.setAttribute('class','bigtitle');
				sp2.innerHTML=split[i];
				td2.appendChild(sp1);
				td2.appendChild(sp2);
			}
		}
	var td3 =  getComponent("id","smalltitle",s3);

	var newDiv = getComponent("div","headerCard");
	var table =  document.createElement('table');
	var tr1 =  document.createElement('tr');
	var tr2 =  document.createElement('tr');
	var tr3 =  document.createElement('tr');
	tr1.appendChild(td1);
	tr2.appendChild(td2);
	tr3.appendChild(td3);
	table.appendChild(tr1);
	table.appendChild(tr2);
	table.appendChild(tr3);
	newDiv.appendChild(table);
	return newDiv;
}

function generateHeaderCard2(s1,s2,s2_2,s3){
	var newDiv = document.createElement('div');
	var table =  document.createElement('table');
	var tr1 =  document.createElement('tr');
	var tr2 =  document.createElement('tr');
	var tr3 =  document.createElement('tr');
	var td1 =  document.createElement('td');
	var td2 = document.createElement('td');
	var td3 = document.createElement('td');
	newDiv.setAttribute('class','headerCard');
	td1.setAttribute('class','smalltitle');
	td1.innerHTML=s1;
	var sp1 = document.createElement('span');
	sp1.setAttribute('class','bigtitle');
	sp1.innerHTML=s2;
	var sp2 = document.createElement('span');
	sp2.innerHTML=s2_2;
	td2.appendChild(sp1);
	td2.appendChild(sp2);
	td3.setAttribute('class','smalltitle');
	td3.innerHTML=s3;
	tr1.appendChild(td1);
	tr2.appendChild(td2);
	tr3.appendChild(td3);
	table.appendChild(tr1);
	table.appendChild(tr2);
	table.appendChild(tr3);
	newDiv.appendChild(table);
	return newDiv;
}

function dateToStringShort(input)
{
	var result=
	input.getFullYear() +"-"+(input.getMonth() + 1) + '-' + input.getDate();
	return result;
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
		result = diffDays + " D";
	}else if (diffDays<365)
	{
		result = parseInt(diffDays/30)+"M "
		+ (diffDays%30)+"D";
	}else
	{
		result = parseInt(diffDays/365)+"Y "
		+ Math.round((diffDays%365)/30)+"M";
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
			result = ageInDays + " D";
		}else if (ageInDays<365)
		{
			result = parseInt(ageInDays/30)+"M "
			+ (ageInDays%30)+"D";
		}else
		{
			result = parseInt(ageInDays/365)+"Y "
			+ Math.round((ageInDays%365)/30)+"M";
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

function getBirthWeight(){
	if (typeof birthBodyWeight=== "number")
	{
		return "BBW:"+birthBodyWeight+"g";
	}else
	{
		return "-";
	}
}

function getBodyWeigth(){
	var result;
	if (typeof bodyWeight=== "number")
	{
		result = bodyWeight+"g";
	}
	else
	{
		result = "-";
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
	}
	return result;
}
function getDietType()
{
	if(typeof dietType === "string")
	{
		return dietType;
	}
	return "-";
}

function getDietAmount()
{
	if(typeof dietAmount === "string")
	{
		return dietAmount;
	}
	return "-";
}

function getVentilatorType()
{
	if(typeof ventilatorType === "string")
	{
		return ventilatorType;
	}
	return "-";
}

function getVentilatorSetting()
{
	if(typeof ventilatorSetting === "string")
	{
		return ventilatorSetting;
	}
	return "-";
}

function getCurrentDate()
{
	document.getElementById('currentDate').innerHTML=
	 "資料日期: "+dateToStringShort(currentDate);
}