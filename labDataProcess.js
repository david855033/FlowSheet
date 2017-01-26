
function labDataProcess()
{
	var glucoseDataToShow = processData(lab_glucose);
	
	var GlucoseData = document.getElementById("glucoseData_tr");
	GlucoseData.innerHTML="";
	var warn="";
	if(glucoseDataToShow.value>=150 || glucoseDataToShow.value < 50 ||
		(typeof glucoseDataToShow.value=="string" && glucoseDataToShow.value.indexOf(">")>=0)) 
		{warn="warn";}
	GlucoseData.appendChild(getTDandSpan(glucoseDataToShow.value,"","glucoseMainWord",warn,getTooltip(lab_glucose)));

	
	

	var GlucoseTime = document.getElementById("glucoseTime_tr");
	GlucoseTime.innerHTML="";
	GlucoseTime.appendChild(
		getTDandSpan(getMonthDay(glucoseDataToShow.date)+" "+glucoseDataToShow.time,"","DateInfo")
	);


	var WBCDataToShow = processData(lab_WBC);
	var HgbDataToShow = processData(lab_Hgb);
	var PltDataToShow = processData(lab_PLT);

	var SegDataToShow = processData(lab_Seg);
	var CBCData = document.getElementById("CBCData_tr");
	CBCData.innerHTML="";
	warn="";
	if(WBCDataToShow.value>=30000 || WBCDataToShow.value < 5000) {warn="warn";}
	CBCData.appendChild(getTDandSpan(WBCDataToShow.value,"","CBCMainWord",warn,getTooltip(lab_WBC)));

	warn="";
	if(HgbDataToShow.value>=20 || HgbDataToShow.value < 10) {warn="warn";}
	var td = getTDandSpan(HgbDataToShow.value,"","CBCMainWord",warn,getTooltip(lab_Hgb));
	td.setAttribute("rowspan","2");
	CBCData.appendChild(td);

	if(PltDataToShow.value)
	{
		warn="";
		if(PltDataToShow.value >= 400000 || PltDataToShow.value < 100000) {warn="warn";}
		td = getTDandSpan(Math.round(PltDataToShow.value/1000)+"k","","CBCMainWord",warn,getTooltip(lab_PLT));
	}else
	{
		td = getTDandSpan("","","CBCMainWord");
	}
	td.setAttribute("rowspan","2");
	CBCData.appendChild(td);

	var CBCData2 = document.getElementById("CBCData2_tr");
	CBCData2.innerHTML="";
	if(SegDataToShow.value && SegDataToShow.time == WBCDataToShow.time )
	{
		CBCData2.appendChild(getTDandSpan("Seg "+SegDataToShow.value,"","CBCSubInfo","",getTooltip(lab_Seg)));
	}
	
	var CBCTime = document.getElementById("CBCTime");
	CBCTime.innerHTML="";
	CBCTime.appendChild(getTDandSpan(getMonthDay(WBCDataToShow.date)+" "+WBCDataToShow.time,"","DateInfo"));
	CBCTime.appendChild(getTDandSpan(getMonthDay(HgbDataToShow.date)+" "+HgbDataToShow.time,"","DateInfo"));
	CBCTime.appendChild(getTDandSpan(getMonthDay(PltDataToShow.date)+" "+PltDataToShow.time,"","DateInfo"));


	var NaDataToShow = processData(lab_Na);
	var KDataToShow = processData(lab_K);
	var CaDataToShow = processData(lab_Ca);
	var PDataToShow = processData(lab_P);
	var MgDataToShow = processData(lab_Mg);
	var EleData = document.getElementById("EleData_tr");
	EleData.innerHTML="";
	warn="";
	if(NaDataToShow.value>=145 || NaDataToShow.value < 135) {warn="warn";}
	EleData.appendChild(getTDandSpan(NaDataToShow.value,"","EleMainWord",warn,getTooltip(lab_Na)));
	warn="";
	if(KDataToShow.value>=6 || KDataToShow.value < 3) {warn="warn";}
	EleData.appendChild(getTDandSpan(KDataToShow.value,"","EleMainWord",warn,getTooltip(lab_K)));
	warn="";
	if(CaDataToShow.value>=1.2 || CaDataToShow.value < 1) {warn="warn";}
	EleData.appendChild(getTDandSpan(CaDataToShow.value,"","EleMainWord",warn,getTooltip(lab_Ca)));
	warn="";
	if(PDataToShow.value>=6 || PDataToShow.value < 3) {warn="warn";}
	EleData.appendChild(getTDandSpan(PDataToShow.value,"","EleMainWord",warn,getTooltip(lab_P)));
	warn="";
	if(MgDataToShow.value>=2.5 || MgDataToShow.value < 1.7) {warn="warn";}
	EleData.appendChild(getTDandSpan(MgDataToShow.value,"","EleMainWord",warn,getTooltip(lab_Mg)));
	
	var EleTime	= document.getElementById("EleTime_tr");
	EleTime.innerHTML="";
	EleTime.appendChild(getTDandSpan(getMonthDay(NaDataToShow.date)+" "+NaDataToShow.time,"","DateInfo"));
	EleTime.appendChild(getTDandSpan(getMonthDay(KDataToShow.date)+" "+KDataToShow.time,"","DateInfo"));
	EleTime.appendChild(getTDandSpan(getMonthDay(CaDataToShow.date)+" "+CaDataToShow.time,"","DateInfo"));
	EleTime.appendChild(getTDandSpan(getMonthDay(PDataToShow.date)+" "+PDataToShow.time,"","DateInfo"));
	EleTime.appendChild(getTDandSpan(getMonthDay(MgDataToShow.date)+" "+MgDataToShow.time,"","DateInfo"));

	var CRPDataToShow = processData(lab_CRP);
	var CRPData = document.getElementById("CRPData_tr");
	CRPData.innerHTML="";
	warn="";
	if(CRPDataToShow.value>=0.5) {warn="warn";}
	CRPData.appendChild(getTDandSpan(CRPDataToShow.value,"","CRPMainWord",warn, getTooltip(lab_CRP)));

	var CRPTime = document.getElementById("CRPTime_tr");
	CRPTime.innerHTML="";
	CRPTime.appendChild(getTDandSpan(getMonthDay(CRPDataToShow.date),"","DateInfo"));

	var PCTDataToShow = processData(lab_PCT);
	var PCTData = document.getElementById("PCTData_tr");
	PCTData.innerHTML="";
	warn="";
	if(PCTDataToShow.value>=0.5) {warn="warn";}
	PCTData.appendChild(getTDandSpan(PCTDataToShow.value,"","CRPMainWord",warn, getTooltip(lab_PCT)));

	var PCTTime = document.getElementById("PCTTime_tr");
	PCTTime.innerHTML="";
	PCTTime.appendChild(getTDandSpan(getMonthDay(PCTDataToShow.date),"","DateInfo"));
    
	var Abx_Array=getAbx_Array();
	var Abxname = document.getElementById("abxname_tr");
	Abxname.innerHTML="";
	for(var x = 0; x<Abx_Array.length && x<3;x++)
	{
		Abxname.appendChild(getTDandSpan(Abx_Array[x].name,"","AbxMainWord"));
	}
	if(Abx_Array.length==0)
	{
		Abxname.appendChild(getTDandSpan("","","AbxMainWord"));
	}
	if(Abx_Array.length>3)
	{
		Abxname.appendChild(getTDandSpan("...","","AbxMainWord"));
	}

	var Abxdose = document.getElementById("abxdose_tr");
	Abxdose.innerHTML="";
	for(var x = 0; x< Abx_Array.length && x<3;x++)
	{
		Abxdose.appendChild(getTDandSpan(Abx_Array[x].dosage + " " +Abx_Array[x].frequency ,"","DateInfo"));
	}
    
	var BUNDataToShow = processData(lab_BUN);
	var CrDataToShow = processData(lab_Cr);
	var renalData = document.getElementById("renal_tr");
	renalData.innerHTML="";
	warn="";
	if(BUNDataToShow.value>20) {warn="warn";}
	renalData.appendChild(getTDandSpan(BUNDataToShow.value,"RenalMainWord","",warn,getTooltip(lab_BUN)));

	if(CrDataToShow.value>=1) {warn="warn";}
	renalData.appendChild(getTDandSpan(CrDataToShow.value,"RenalMainWord","",warn,getTooltip(lab_Cr)));

	var renalTime = document.getElementById("renaltime_tr");
	renalTime.innerHTML="";
	renalTime.appendChild(getTDandSpan(getMonthDay(BUNDataToShow.date),"","DateInfo"));
	renalTime.appendChild(getTDandSpan(getMonthDay(CrDataToShow.date),"","DateInfo"));

	var ALTDataToShow = processData(lab_ALT);
	var ASTDataToShow = processData(lab_AST);
	var liverData = document.getElementById("liver_tr");
	liverData.innerHTML="";
	warn="";
	if(ALTDataToShow.value>=50) {warn="warn";}
	liverData.appendChild(getTDandSpan(ALTDataToShow.value,"LiverMainWord","",warn,getTooltip(lab_ALT)));
	if(ASTDataToShow.value>=50) {warn="warn";}
	liverData.appendChild(getTDandSpan(ASTDataToShow.value,"LiverMainWord","",warn,getTooltip(lab_AST)));

	var liverTime = document.getElementById("livertime_tr");
	liverTime.innerHTML="";
	liverTime.appendChild(getTDandSpan(getMonthDay(ALTDataToShow.date),"","DateInfo"));
	liverTime.appendChild(getTDandSpan(getMonthDay(ASTDataToShow.date),"","DateInfo"));

	var MicroBilDataToShow = processData(lab_MICROBIL);
	var TBILDataToShow = processData(lab_TBIL);
	var TCBDataToShow = processData(lab_TCB);
	var DBILDataToShow = processData(lab_DBIL);
	var TBILTitle = document.getElementById("TBilTitle_tr");
	TBILTitle.innerHTML="";
	TBilTitle="TBil";
	if(compareDate(MicroBilDataToShow.date, TBILDataToShow.date, MicroBilDataToShow.time, TBILDataToShow.time))
	{
		TBilTitle = "Micro Bili.";
	}
	if(compareDate(TCBDataToShow.date, MicroBilDataToShow.date, TCBDataToShow.time, MicroBilDataToShow.time))
	{
		TBilTitle = "TCB";
	}
	TBILTitle.appendChild(getTDandSpan(TBilTitle,"" ,"TbilTitle"));
	TBILTitle.appendChild(getTDandSpan("D.Bil","" ,"TbilTitle"));

	var TBilData = document.getElementById("TBilData_tr");
	TBilData.innerHTML="";
	TBilToShow = TBILDataToShow.value;
	if(compareDate(MicroBilDataToShow.date, TBILDataToShow.date, MicroBilDataToShow.time, TBILDataToShow.time))
	{
		TBilToShow = MicroBilDataToShow.value;
	}
	if(compareDate(TCBDataToShow.date, MicroBilDataToShow.date, TCBDataToShow.time, MicroBilDataToShow.time))
	{
		TBilToShow = TCBDataToShow.value;
	}
	TBilData.appendChild(getTDandSpan(TBilToShow, "" ,"TbilMainWord"));
	TBilData.appendChild(getTDandSpan(DBILDataToShow.value, "" ,"TbilMainWord"));

	var TBilTime = document.getElementById("TBilTime_tr");
	TBilTime.innerHTML="";
	TBilTimeToShow = TBILDataToShow.date;
	if(compareDate(MicroBilDataToShow.date, TBILDataToShow.date, MicroBilDataToShow.time, TBILDataToShow.time))
	{
		TBilTimeToShow = MicroBilDataToShow.date;
	}
	if(compareDate(TCBDataToShow.date, MicroBilDataToShow.date, TCBDataToShow.time, MicroBilDataToShow.time))
	{
		TBilTimeToShow = TCBDataToShow.date;
	}
	TBilTime.appendChild(getTDandSpan(getMonthDay(TBilTimeToShow), "" ,"DateInfo"));
	TBilTime.appendChild(getTDandSpan(getMonthDay(DBILDataToShow.date), "" ,"DateInfo"));

	var ALKPDataToShow = processData(lab_ALKP);
	var TotalCaDataToShow = processData(lab_TotalCa);
	var LDGDataToShow = processData(lab_LDH);
	var BoneMarkerData = document.getElementById("BoneMarkerData_tr");
	BoneMarkerData.innerHTML="";
	BoneMarkerData.appendChild(getTDandSpan(ALKPDataToShow.value,"","BoneMarkerMainWord"));
	BoneMarkerData.appendChild(getTDandSpan(TotalCaDataToShow.value,"","BoneMarkerMainWord",""));
	BoneMarkerData.appendChild(getTDandSpan(LDGDataToShow.value,"","BoneMarkerMainWord",""));

	var BoneMarkerTime = document.getElementById("BoneMarkerTime_tr");
	BoneMarkerTime.innerHTML="";
	BoneMarkerTime.appendChild(getTDandSpan(getMonthDay(ALKPDataToShow.date),"","DateInfo"));
	BoneMarkerTime.appendChild(getTDandSpan(getMonthDay(TotalCaDataToShow.date),"","DateInfo"));
	BoneMarkerTime.appendChild(getTDandSpan(getMonthDay(LDGDataToShow.date),"","DateInfo"));

	var IronDataToShow = processData(lab_Iron);
	var TIBCDataToShow = processData(lab_TIBC);
	var FerritinDataToShow = processData(lab_Ferritin);
	var AnemiaData = document.getElementById("AnemiaData_tr");
	AnemiaData.innerHTML="";
	AnemiaData.appendChild(getTDandSpan(IronDataToShow.value,"","AnemiaMainWord",""));
	AnemiaData.appendChild(getTDandSpan(TIBCDataToShow.value,"","AnemiaMainWord",""));
	var IronSAT="";
	if(typeof IronDataToShow.value ==="number" && typeof TIBCDataToShow.value ==="number" )
	{
		IronSAT = Math.round(IronDataToShow.value/TIBCDataToShow.value * 1000)/10 +"%";	
	}
	AnemiaData.appendChild(getTDandSpan(IronSAT,"","AnemiaMainWord",""));
	AnemiaData.appendChild(getTDandSpan(FerritinDataToShow.value,"","AnemiaMainWord",""));

	var AnemiaTime = document.getElementById("AnemiaTime_tr");
	AnemiaTime.innerHTML="";
	AnemiaTime.appendChild(getTDandSpan(getMonthDay(IronDataToShow.date),"","DateInfo"));
	AnemiaTime.appendChild(getTDandSpan(getMonthDay(TIBCDataToShow.date),"","DateInfo"));
	AnemiaTime.appendChild(getTDandSpan("","","DateInfo"));
	AnemiaTime.appendChild(getTDandSpan(getMonthDay(FerritinDataToShow.date),"","DateInfo"));
}

function processData(dataArrayObject)
{
	var emptyObject ={"value":"", "date":"","time":""};
	
	if(!dataArrayObject) var dataArrayObject=emptyObject;

	if(typeof dataArrayObject =="undefined" && dataArrayObject)
	{
		dataToShow=emptyObject;
	}
	else
	{
		var newArray=[];
		
		for(var i = 0; i < dataArrayObject.length; i++)
		{
			dataArrayObject[i].date = regularDate(dataArrayObject[i].date);
			dataArrayObject[i].time = regularTime(dataArrayObject[i].time);
			
			if(new Date(dataArrayObject[i].date) <= getThresholdDate() )
			{
				newArray.push(dataArrayObject[i]);
			}
		}
		
		if(newArray.length>0)
		{
			newArray.sort(srtDateTime(true));
			dataToShow= newArray[0];	
		}else
		{
			dataToShow=emptyObject;
		}
	}
	return dataToShow;
}

function getTooltip(dataArrayObject){
	var emptyObject ={"value":"", "date":"","time":""};
	if(!dataArrayObject) return "";
	var sortedArray = dataArrayObject.sort(function (a,b){
		return compareDate(a.date,b.date,a.time,b.time)==false;});

	var finalString="";
	var grabbedArray=[];
	for(var i = 1 ; i < sortedArray.length && grabbedArray.length <=3 ; i++)
	{
		grabbedArray.push(sortedArray[i]);
	}
	
	for(var i = 1 ; i < grabbedArray.length  ; i++)
	{
		if(finalString!="") finalString+="\r\n";
		
		var valuetoshow= grabbedArray[i].value; 
		if(/d+(.d+)?/.test(valuetoshow))
		{
			valuetoshow = valuetoshow.match(/d+(.d+)?/)[0];
			valuetoshow=Math.round(valuetoshow*10)/10;	
		}
		if(valuetoshow>50000) {valuetoshow = valuetoshow/1000+"k";}
		finalString+=grabbedArray[i].date.split('-')[1]+"/"+grabbedArray[i].date.split('-')[2] +" "+valuetoshow;
	}

	//if(sortedArray.length>grabbedArray.length +1) finalString+="\r\n...";

	return finalString;
}

 function getThresholdDate()
 {
 	var nowDate;
		if(currentDate instanceof Date)
		{
			nowDate = currentDate;
		}
		else 
		{
			var Today = new Date();
			nowDate = Today.getFullYear()+"-"+(Today.getMonth()+1)+"-"+Today.getDate();
		}
	return new Date(nowDate);
 }

 function regularDate(inputStringDate)
 {
 	var split = inputStringDate.split('-');
 	if(split[1].length==1) {split[1] = "0"+split[1]};
 	if(split[2].length==1) {split[2] = "0"+split[2]};
 	return split[0]+"-"+split[1]+"-"+split[2];
 }

function regularTime(inputStringDate)
 {
 	var split = inputStringDate.split(':');
 	if(split[0].length==1) {split[0] = "0"+split[0]};
 	if(split[1].length==1) {split[1] = "0"+split[1]};
 	return split[0]+":"+split[1];
 }

 function srtDateTime(desc) {
  return function(a,b){
  	var result;
  		if( a.date == b.date)
  		{
  			 if(a.time > b.time) {result = 1;}else{result = -1;}
  		}
	  	else if(a.date > b.date) {result = 1;}else{result = -1;}
	  	if(desc) result = result * -1;
   	 return result; 
  }
 }


function compareDate(dateA, dateB, timeA, timeB)
{
	
	var result =false;
	
	if(!(dateA && dateB && timeA && timeB))
	{
		return false;
	}
	
	for(var i = 0 ; i < 3; i++)
	{
		if(dateA.split('-')[i] > dateB.split('-')[i])
		{
			return true;
		}else if (dateA.split('-')[i] < dateB.split('-')[i])
		{
			return false
		}
	}

	for(var i = 0 ; i < 2; i++)
	{
		if(timeA.split('-')[i] > timeA.split('-')[i])
		{
			return true;
		}else if (timeA.split('-')[i] < timeB.split('-')[i])
		{
			return false
		}
	}
	return false;
}

function getMonthDay(s)
{
	if(s)
	{
		var d = new Date(s);	
	}
	else
	{
		return "";
	}
	result = (d.getMonth()+1) + "/" + d.getDate();
	if(typeof result === "string")
	{
		return result;
	}else
	{
		return "";
	}
}


function getTDandSpan(content, tdclass, spanclass, warn, tooltip)
{
	td=document.createElement('td');
		td.setAttribute('class',tdclass);
		td.align="center";
			sp=document.createElement('span');
			sp.setAttribute('class',spanclass);
			
			sp2=document.createElement('span');
			sp2.setAttribute('class',warn);
			if((typeof content ==="string" || typeof content ==="number") && content !="")
			{
				sp2.innerHTML=content;	
			}else
			{
				sp2.innerHTML="-";
			}
			sp.appendChild(sp2);
		td.appendChild(sp)
		if(tooltip){td.setAttribute("title",tooltip);}
	return td;
}

function getAbx_Array()
{
	var filteredArray = drug_Array.filter(drugDateFilter(currentDate));
	var matchArray =[];
	var matchedDrugs=[];
	var resultArray=[];

	for(var i = 0; i < filteredArray.length;i++)
	{
		for(var j =0; j<AvailableDrugList.length;j++)
		{
			if( ((filteredArray[i].name.toLowerCase().indexOf(AvailableDrugList[j].match.toLowerCase())>=0)||
				(filteredArray[i].productName.toLowerCase().indexOf(AvailableDrugList[j].match.toLowerCase())>=0)) &&
				filteredArray[i].frequency.trim().toLowerCase() != "st" &&
				filteredArray[i].frequency.trim().toLowerCase() != "stat" &&
				filteredArray[i].frequency.trim().toLowerCase() != "once")
			{

				matchArray.push(
					{"name":AvailableDrugList[j].abbr.trim(),
					"dosage":filteredArray[i].dosage.trim()+" "+filteredArray[i].unit.toLowerCase().trim(),
					"frequency":filteredArray[i].frequency.trim().toLowerCase(),
					"startDate":filteredArray[i].startDate.trim()}
					);
				
				if(matchedDrugs.indexOf(AvailableDrugList[j].abbr)<0)
				{
					matchedDrugs.push(AvailableDrugList[j].abbr);
				}
				break;	
			}
		}
	}
	
	matchedDrugs.sort();
	
	for(var i = 0; i< matchedDrugs.length;i++)
	{
		var uniqueArray = matchArray.filter(function(x){return x.name==matchedDrugs[i];});
		uniqueArray.sort(keysrt("startDate",true));
		resultArray.push(uniqueArray[0]);
	}


	return resultArray;
}

var AvailableDrugList =
[
	
	{"match":"ampicillin","abbr":"AMPI"},
	{"match":"ampolin","abbr":"AMPI"},
	{"match":"oxacillin","abbr":"OXAC"},
	{"match":"unasyn","abbr":"UNAS"},

	{"match":"soonmelt","abbr":"Augmentin"},
	{"match":"tazocin","abbr":"TAZO"},
	{"match":"zovirax","abbr":"ACYCL"},

	{"match":"mepem","abbr":"MEPEM"},
	{"match":"meropenem","abbr":"MEPEM"},
	{"match":"imipenem","abbr":"IMIPENEM"},

	{"match":"cefazolin","abbr":"CEFA"},
	{"match":"cefuroxime","abbr":"CEFU"},
	{"match":"cefotaxime","abbr":"CLAF"},
	{"match":"claforan","abbr":"CLAF"},
	{"match":"rocephin","abbr":"ROCEP"},
	{"match":"ceftriax","abbr":"ROCEP"},
	{"match":"ceftazi","abbr":"CEFTA"},
	{"match":"cefepime","abbr":"CEFEP"},

	{"match":"moxifloxacin","abbr":"MOXI"},
	{"match":"ciprofloxacin","abbr":"CIPRO"},
	{"match":"levofloxacin","abbr":"CRAVIT"},

	{"match":"isepamicin","abbr":"EXAC"},
	{"match":"exacin","abbr":"EXAC"},

	{"match":"metronidazole","abbr":"METRO"},

	{"match":"teico","abbr":"TEICO"},
	{"match":"vancomycin","abbr":"VANCO"},

	{"match":"daptomycin","abbr":"DAPTO"},

	{"match":"linezolid","abbr":"LINEZ"},

	{"match":"fluconazole","abbr":"FLUCO"},
	{"match":"ambisome","abbr":"AMBI"},
	{"match":"fungizone","abbr":"AMBI"},

	{"match":"zovirax","abbr":"ACYCL"}
]

function drugDateFilter(dateToExam)
{
	return function(drugData){
		var splitLine = drugData.startDate.split('-');
		var startDate = new Date(splitLine[0]+"-"+splitLine[1]+"-"+splitLine[2]);
		var splitLine = drugData.endDate.split('-');
		var endDate = new Date(splitLine[0]+"-"+splitLine[1]+"-"+splitLine[2]);
		return (startDate <= dateToExam) && (endDate >= dateToExam);
	}
}