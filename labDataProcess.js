
function labDataProcess()
{
	var glucoseDataToShow = processData(lab_glucose);
	
	var GlucoseData = document.getElementById("glucoseData_tr");
	GlucoseData.innerHTML="";
	var warn="";
	if(glucoseDataToShow.value>=150 || glucoseDataToShow.value < 60) {warn="warn";}
	GlucoseData.appendChild(getTDandSpan(glucoseDataToShow.value,"","glucoseMainWord",warn));

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
	CBCData.appendChild(getTDandSpan(WBCDataToShow.value,"","CBCMainWord"));
	warn="";
	if(HgbDataToShow>=20 || HgbDataToShow < 10) {warn="warn";}
	var td = getTDandSpan(HgbDataToShow.value,"","CBCMainWord",warn);
	td.setAttribute("rowspan","2");
	CBCData.appendChild(td);
	td = getTDandSpan(Math.round(PltDataToShow.value/1000)+"k","","CBCMainWord");
	td.setAttribute("rowspan","2");
	CBCData.appendChild(td);

	var CBCData2 = document.getElementById("CBCData2_tr");
	CBCData2.innerHTML="";
	CBCData2.appendChild(getTDandSpan(SegDataToShow.value,"","CBCSubInfo"));
	
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
	EleData.appendChild(getTDandSpan(NaDataToShow.value,"","EleMainWord",warn));
	warn="";
	if(KDataToShow.value>=6 || KDataToShow.value < 3) {warn="warn";}
	EleData.appendChild(getTDandSpan(KDataToShow.value,"","EleMainWord",warn));
	warn="";
	if(CaDataToShow.value>=1.2 || CaDataToShow.value < 1) {warn="warn";}
	EleData.appendChild(getTDandSpan(CaDataToShow.value,"","EleMainWord",warn));
	warn="";
	if(PDataToShow.value>=6 || PDataToShow.value < 3) {warn="warn";}
	EleData.appendChild(getTDandSpan(PDataToShow.value,"","EleMainWord",warn));
	warn="";
	if(MgDataToShow.value>=4 || MgDataToShow.value < 2) {warn="warn";}
	EleData.appendChild(getTDandSpan(MgDataToShow.value,"","EleMainWord",warn));
	
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
	CRPData.appendChild(getTDandSpan(CRPDataToShow.value,"","CRPMainWord",warn));

	var CRPTime = document.getElementById("CRPTime_tr");
	CRPTime.innerHTML="";
	CRPTime.appendChild(getTDandSpan(getMonthDay(CRPDataToShow.date)+" "+CRPDataToShow.time,"","DateInfo"));

	var PCTDataToShow = processData(lab_PCT);
	var PCTData = document.getElementById("PCTData_tr");
	PCTData.innerHTML="";
	warn="";
	if(PCTDataToShow.value>=0.5) {warn="warn";}
	PCTData.appendChild(getTDandSpan(PCTDataToShow.value,"","CRPMainWord",warn));

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
	renalData.appendChild(getTDandSpan(BUNDataToShow.value,"RenalMainWord","",warn));

	if(CrDataToShow.value>=1) {warn="warn";}
	renalData.appendChild(getTDandSpan(CrDataToShow.value,"RenalMainWord","",warn));

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
	liverData.appendChild(getTDandSpan(ALTDataToShow.value,"LiverMainWord","",warn));
	if(ASTDataToShow.value>=50) {warn="warn";}
	liverData.appendChild(getTDandSpan(ASTDataToShow.value,"LiverMainWord","",warn));

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
	var emptyObject ={"value":"","date":"","time":""};
	var dataToShow=emptyObject;

	if(typeof dataArrayObject =="undefined" && dataArrayObject)
	{
		dataToShow=emptyObject;
	}
	else
	{
		var newArray = dataArrayObject.filter(dateFilter());
		if(newArray[0])
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


function compareDate(dateA, dateB, timeA, timeB)
{
	if(!(dateA && dateB && timeA && timeB))
	{
		return false;
	}
	else if(dateA.split('-')[0] > dateB.split('-')[0])
	{
		return true;
	}else if(dateA.split('-')[1] > dateB.split('-')[1])
	{
		return true;
	}else if(dateA.split('-')[2] > dateB.split('-')[2])
	{
		return true;
	}else if(timeA.split(':')[0] > timeB.split(':')[0])
	{
		return true;
	}else if(timeA.split(':')[1] > timeB.split(':')[1])
	{
		return true;
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


function getTDandSpan(content, tdclass, spanclass, warn)
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
	return td;
}

function getAbx_Array()
{
	var filteredArray = drug_Array.filter(drugDateFilter(new Date("2016-11-18")));
	var matchArray =[];
	var matchedDrugs=[];
	var resultArray=[];

	for(var i = 0; i < filteredArray.length;i++)
	{
		for(var j =0; j<AvailableDrugList.length;j++)
		{
			if( ((filteredArray[i].name.toLowerCase().includes(AvailableDrugList[j].match.toLowerCase()))||
				(filteredArray[i].productName.toLowerCase().includes(AvailableDrugList[j].match.toLowerCase()))) &&
				filteredArray[i].frequency.toLowerCase() != "st" &&
				filteredArray[i].frequency.toLowerCase() != "stat" &&
				filteredArray[i].frequency.toLowerCase() != "once")
			{

				matchArray.push(
					{"name":AvailableDrugList[j].abbr,
					"dosage":filteredArray[i].dosage+filteredArray[i].unit,
					"frequency":filteredArray[i].frequency,
					"startDate":filteredArray[i].startDate}
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

var AvailableDrugList=
[
	{"match":"ampicillin","abbr":"AMPI"},
	{"match":"ampolin","abbr":"AMPI"},
	{"match":"cefotaxime","abbr":"CLAF"},
	{"match":"claforan","abbr":"CLAF"},
	{"match":"unasyn","abbr":"UNAS"},
	{"match":"isepamicin","abbr":"EXAC"},
	{"match":"exacin","abbr":"EXAC"},
	{"match":"vancomycin","abbr":"VANCO"}
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