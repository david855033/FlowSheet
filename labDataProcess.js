function labDataProcess()
{
	var emptyObject ={"value":"","date":"","time":""};
	var glucoseData = document.getElementById("glucoseData_tr");
	glucoseData.innerHTML="";
	var warn="";
	if(lab_glucose.value>=150 || lab_glucose.value < 60) {warn="warn";}
	glucoseData.appendChild(getTDandSpan(lab_glucose.value,"","glucoseMainWord",warn));

	var glucoseTime = document.getElementById("glucoseTime_tr");
	glucoseTime.innerHTML="";
	glucoseTime.appendChild(
		getTDandSpan(getMonthDay(lab_glucose.date)+" "+lab_glucose.time,"","DateInfo")
		);

	var CBCData = document.getElementById("CBCData_tr");
	CBCData.innerHTML="";
	CBCData.appendChild(getTDandSpan(lab_WBC.value,"","CBCMainWord"));
	warn="";
	if(lab_Hgb>=20 || lab_Hgb < 10) {warn="warn";}
	var td = getTDandSpan(lab_Hgb.value,"","CBCMainWord",warn);
	td.setAttribute("rowspan","2");
	CBCData.appendChild(td);
	td = getTDandSpan(Math.round(lab_PLT.value/1000)+"k","","CBCMainWord");
	td.setAttribute("rowspan","2");
	CBCData.appendChild(td);

	var CBCData2 = document.getElementById("CBCData2_tr");
	CBCData2.innerHTML="";
	CBCData2.appendChild(getTDandSpan(lab_Seg.value,"","CBCSubInfo"));
	
	var CBCTime = document.getElementById("CBCTime");
	CBCTime.innerHTML="";
	CBCTime.appendChild(getTDandSpan(getMonthDay(lab_WBC.date)+" "+lab_WBC.time,"","DateInfo"));
	CBCTime.appendChild(getTDandSpan(getMonthDay(lab_Hgb.date)+" "+lab_Hgb.time,"","DateInfo"));
	CBCTime.appendChild(getTDandSpan(getMonthDay(lab_PLT.date)+" "+lab_PLT.time,"","DateInfo"));

	var EleData = document.getElementById("EleData_tr");
	EleData.innerHTML="";
	warn="";
	if(lab_Na.value>=145 || lab_Na.value < 135) {warn="warn";}
	EleData.appendChild(getTDandSpan(lab_Na.value,"","EleMainWord",warn));
	warn="";
	if(lab_K.value>=6 || lab_K.value < 3) {warn="warn";}
	EleData.appendChild(getTDandSpan(lab_K.value,"","EleMainWord",warn));
	warn="";
	if(lab_Ca.value>=1.2 || lab_Ca.value < 1) {warn="warn";}
	EleData.appendChild(getTDandSpan(lab_Ca.value,"","EleMainWord",warn));
	warn="";
	if(lab_P.value>=6 || lab_P.value < 3) {warn="warn";}
	EleData.appendChild(getTDandSpan(lab_P.value,"","EleMainWord",warn));
	warn="";
	if(lab_Mg.value>=4 || lab_Mg.value < 2) {warn="warn";}
	EleData.appendChild(getTDandSpan(lab_Mg.value,"","EleMainWord",warn));
	
	var EleTime	= document.getElementById("EleTime_tr");
	EleTime.innerHTML="";
	EleTime.appendChild(getTDandSpan(getMonthDay(lab_Na.date)+" "+lab_Na.time,"","DateInfo"));
	EleTime.appendChild(getTDandSpan(getMonthDay(lab_K.date)+" "+lab_K.time,"","DateInfo"));
	EleTime.appendChild(getTDandSpan(getMonthDay(lab_Ca.date)+" "+lab_Ca.time,"","DateInfo"));
	EleTime.appendChild(getTDandSpan(getMonthDay(lab_Mg.date)+" "+lab_Mg.time,"","DateInfo"));
	EleTime.appendChild(getTDandSpan(getMonthDay(lab_P.date)+" "+lab_P.time,"","DateInfo"));

	var CRPData = document.getElementById("CRPData_tr");
	CRPData.innerHTML="";
	warn="";
	if(lab_CRP.value>=0.5) {warn="warn";}
	CRPData.appendChild(getTDandSpan(lab_CRP.value,"","CRPMainWord",warn));

	var CRPTime = document.getElementById("CRPTime_tr");
	CRPTime.innerHTML="";
	CRPTime.appendChild(getTDandSpan(getMonthDay(lab_CRP.date)+" "+lab_CRP.time,"","DateInfo"));

	var PCTData = document.getElementById("PCTData_tr");
	PCTData.innerHTML="";
	warn="";
	if(lab_PCT.value>=0.5) {warn="warn";}
	PCTData.appendChild(getTDandSpan(lab_PCT.value,"","CRPMainWord",warn));

	var PCTTime = document.getElementById("PCTTime_tr");
	PCTTime.innerHTML="";
	PCTTime.appendChild(getTDandSpan(getMonthDay(lab_PCT.date),"","DateInfo"));

	var Abxname = document.getElementById("abxname_tr");
	Abxname.innerHTML="";
	for(var x = 0; x<Abx_Array.length && x<3;x++)
	{
		Abxname.appendChild(getTDandSpan(Abx_Array[x].name,"","AbxMainWord"));
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

	var renalData = document.getElementById("renal_tr");
	renalData.innerHTML="";
	warn="";
	if(lab_BUN.value>20) {warn="warn";}
	renalData.appendChild(getTDandSpan(lab_BUN.value,"RenalMainWord","",warn));

	if(lab_Cr.value>=1) {warn="warn";}
	renalData.appendChild(getTDandSpan(lab_Cr.value,"RenalMainWord","",warn));

	var renalTime = document.getElementById("renaltime_tr");
	renalTime.innerHTML="";
	renalTime.appendChild(getTDandSpan(getMonthDay(lab_BUN.date),"","DateInfo"));
	renalTime.appendChild(getTDandSpan(getMonthDay(lab_Cr.date),"","DateInfo"));

	var liverData = document.getElementById("liver_tr");
	liverData.innerHTML="";
	warn="";
	if(lab_ALT.value>=50) {warn="warn";}
	liverData.appendChild(getTDandSpan(lab_ALT.value,"LiverMainWord","",warn));
	if(lab_AST.value>=50) {warn="warn";}
	liverData.appendChild(getTDandSpan(lab_AST.value,"LiverMainWord","",warn));

	var liverTime = document.getElementById("livertime_tr");
	liverTime.innerHTML="";
	liverTime.appendChild(getTDandSpan(getMonthDay(lab_ALT.date),"","DateInfo"));
	liverTime.appendChild(getTDandSpan(getMonthDay(lab_AST.date),"","DateInfo"));

	var TBILTitle = document.getElementById("TBilTitle_tr");
	TBILTitle.innerHTML="";
	TBilTitle="TBil";
	if(compareDate(lab_MICROBIL.date, lab_TBIL.date, lab_MICROBIL.time, lab_TBIL.time))
	{
		TBilTitle = "Micro Bili.";
	}
	if(compareDate(lab_TCB.date, lab_MICROBIL.date, lab_TCB.time, lab_MICROBIL.time))
	{
		TBilTitle = "TCB";
	}
	TBILTitle.appendChild(getTDandSpan(TBilTitle,"" ,"TbilTitle"));
	TBILTitle.appendChild(getTDandSpan("D.Bil","" ,"TbilTitle"));

	var TBilData = document.getElementById("TBilData_tr");
	TBilData.innerHTML="";
	TBilToShow = lab_TBIL.value;
	if(compareDate(lab_MICROBIL.date, lab_TBIL.date, lab_MICROBIL.time, lab_TBIL.time))
	{
		TBilToShow = lab_MICROBIL.value;
	}
	if(compareDate(lab_TCB.date, lab_MICROBIL.date, lab_TCB.time, lab_MICROBIL.time))
	{
		TBilToShow = lab_TCB.value;
	}
	TBilData.appendChild(getTDandSpan(TBilToShow, "" ,"TbilMainWord"));
	TBilData.appendChild(getTDandSpan(lab_DBIL.value, "" ,"TbilMainWord"));

	var TBilTime = document.getElementById("TBilTime_tr");
	TBilTime.innerHTML="";
	TBilTimeToShow = lab_TBIL.date;
	if(compareDate(lab_MICROBIL.date, lab_TBIL.date, lab_MICROBIL.time, lab_TBIL.time))
	{
		TBilTimeToShow = lab_MICROBIL.date;
	}
	if(compareDate(lab_TCB.date, lab_MICROBIL.date, lab_TCB.time, lab_MICROBIL.time))
	{
		TBilTimeToShow = lab_TCB.date;
	}
	TBilTime.appendChild(getTDandSpan(getMonthDay(TBilTimeToShow), "" ,"DateInfo"));
	TBilTime.appendChild(getTDandSpan(getMonthDay(lab_DBIL.date), "" ,"DateInfo"));

	var BoneMarkerData = document.getElementById("BoneMarkerData_tr");
	BoneMarkerData.innerHTML="";
	BoneMarkerData.appendChild(getTDandSpan(lab_ALKP.value,"","BoneMarkerMainWord"));
	BoneMarkerData.appendChild(getTDandSpan(lab_TotalCa.value,"","BoneMarkerMainWord",""));
	BoneMarkerData.appendChild(getTDandSpan(lab_LDH.value,"","BoneMarkerMainWord",""));

	var BoneMarkerTime = document.getElementById("BoneMarkerTime_tr");
	BoneMarkerTime.innerHTML="";
	BoneMarkerTime.appendChild(getTDandSpan(getMonthDay(lab_ALKP.date),"","DateInfo"));
	BoneMarkerTime.appendChild(getTDandSpan(getMonthDay(lab_TotalCa.date),"","DateInfo"));
	BoneMarkerTime.appendChild(getTDandSpan(getMonthDay(lab_LDH.date),"","DateInfo"));

	var AnemiaData = document.getElementById("AnemiaData_tr");
	AnemiaData.innerHTML="";
	AnemiaData.appendChild(getTDandSpan(lab_Iron.value,"","AnemiaMainWord",""));
	AnemiaData.appendChild(getTDandSpan(lab_TIBC.value,"","AnemiaMainWord",""));
	var IronSAT="";
	if(typeof lab_Iron.value ==="number" && typeof lab_TIBC.value ==="number" )
	{
		IronSAT = Math.round(lab_Iron.value/lab_TIBC.value * 1000)/10 +"%";	
	}
	AnemiaData.appendChild(getTDandSpan(IronSAT,"","AnemiaMainWord",""));
	AnemiaData.appendChild(getTDandSpan(lab_Ferritin.value,"","AnemiaMainWord",""));

	var AnemiaTime = document.getElementById("AnemiaTime_tr");
	AnemiaTime.innerHTML="";
	AnemiaTime.appendChild(getTDandSpan(getMonthDay(lab_Iron.date),"","DateInfo"));
	AnemiaTime.appendChild(getTDandSpan(getMonthDay(lab_TIBC.date),"","DateInfo"));
	AnemiaTime.appendChild(getTDandSpan("","","DateInfo"));
	AnemiaTime.appendChild(getTDandSpan(getMonthDay(lab_Ferritin.date),"","DateInfo"));
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


function getTDandSpan(content, tdclass,spanclass,warn)
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
