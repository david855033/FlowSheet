
function labDataProcess()
{
	glucoseData = document.getElementById("glucoseData_tr");
	glucoseData.innerHTML="";
	warn="";
	if(lab_glucose>=150 || lab_glucose < 60) {warn="warn";}
	glucoseData.appendChild(getTDandSpan(lab_glucose,"","glucoseMainWord",warn));

	glucoseTime = document.getElementById("glucoseTime_tr");
	glucoseTime.innerHTML="";
	glucoseTime.appendChild(getTDandSpan(getMonthDayTime(lab_glucose_time),"","DateInfo"));

	CBCData = document.getElementById("CBCData_tr");
	CBCData.innerHTML="";
	CBCData.appendChild(getTDandSpan(lab_WBC,"","CBCMainWord"));
	warn="";
	if(lab_Hgb>=20 || lab_Hgb < 10) {warn="warn";}
	td = getTDandSpan(lab_Hgb,"","CBCMainWord",warn);
	td.setAttribute("rowspan","2");
	CBCData.appendChild(td);
	td = getTDandSpan(Math.round(lab_PLT/1000)+"k","","CBCMainWord");
	td.setAttribute("rowspan","2");
	CBCData.appendChild(td);

	CBCData2 = document.getElementById("CBCData2_tr");
	CBCData2.innerHTML="";
	CBCData2.appendChild(getTDandSpan(lab_Seg,"","CBCSubInfo"));
	

	CBCTime = document.getElementById("CBCTime");
	CBCTime.innerHTML="";
	CBCTime.appendChild(getTDandSpan(getMonthDayTime(lab_WBCTime),"","DateInfo"));
	CBCTime.appendChild(getTDandSpan(getMonthDayTime(lab_HgbTime),"","DateInfo"));
	CBCTime.appendChild(getTDandSpan(getMonthDayTime(lab_PLTTime),"","DateInfo"));

	EleData = document.getElementById("EleData_tr");
	EleData.innerHTML="";
	warn="";
	if(lab_Na>=145 || lab_Na < 135) {warn="warn";}
	EleData.appendChild(getTDandSpan(lab_Na,"","EleMainWord",warn));
	warn="";
	if(lab_K>=6 || lab_K < 3) {warn="warn";}
	EleData.appendChild(getTDandSpan(lab_K,"","EleMainWord",warn));
	warn="";
	if(lab_Ca>=1.2 || lab_Ca < 1) {warn="warn";}
	EleData.appendChild(getTDandSpan(lab_Ca,"","EleMainWord",warn));
	warn="";
	if(lab_P>=6 || lab_P < 3) {warn="warn";}
	EleData.appendChild(getTDandSpan(lab_P,"","EleMainWord",warn));
	warn="";
	if(lab_Mg>=4 || lab_Mg < 2) {warn="warn";}
	EleData.appendChild(getTDandSpan(lab_Mg,"","EleMainWord",warn));
	
	EleTime	= document.getElementById("EleTime_tr");
	EleTime.innerHTML="";
	EleTime.appendChild(getTDandSpan(getMonthDayTime(lab_NaTime),"","DateInfo"));
	EleTime.appendChild(getTDandSpan(getMonthDayTime(lab_KTime),"","DateInfo"));
	EleTime.appendChild(getTDandSpan(getMonthDayTime(lab_CaTime),"","DateInfo"));
	EleTime.appendChild(getTDandSpan(getMonthDayTime(lab_PTime),"","DateInfo"));
	EleTime.appendChild(getTDandSpan(getMonthDayTime(lab_MgTime),"","DateInfo"));

	CRPData = document.getElementById("CRPData_tr");
	CRPData.innerHTML="";
	warn="";
	if(lab_CRP>=0.5) {warn="warn";}
	CRPData.appendChild(getTDandSpan(lab_CRP,"","CRPMainWord",warn));

	CRPTime = document.getElementById("CRPTime_tr");
	CRPTime.innerHTML="";
	CRPTime.appendChild(getTDandSpan(getMonthDay(lab_CRPTime),"","DateInfo"));

	PCTData = document.getElementById("PCTData_tr");
	PCTData.innerHTML="";
	warn="";
	if(lab_PCT>=0.5) {warn="warn";}
	PCTData.appendChild(getTDandSpan(lab_PCT,"","CRPMainWord",warn));

	PCTTime = document.getElementById("PCTTime_tr");
	PCTTime.innerHTML="";
	PCTTime.appendChild(getTDandSpan(getMonthDay(lab_PCTTime),"","DateInfo"));

	Abxname = document.getElementById("abxname_tr");
	Abxname.innerHTML="";
	for(x = 0; x<CurrentABX.length && x<3;x++)
	{
		Abxname.appendChild(getTDandSpan(CurrentABX[x],"","AbxMainWord"));
	}
	if(CurrentABX.length>3)
	{
		Abxname.appendChild(getTDandSpan("...","","AbxMainWord"));
	}

	Abxdose = document.getElementById("abxdose_tr");
	Abxdose.innerHTML="";
	for(x = 0; x<CurrentABX.length && x<3;x++)
	{
		Abxdose.appendChild(getTDandSpan(CurrentDose[x],"","DateInfo"));
	}

	renalData = document.getElementById("renal_tr");
	renalData.innerHTML="";
	warn="";
	if(lab_BUN>20) {warn="warn";}
	renalData.appendChild(getTDandSpan(lab_BUN,"RenalMainWord","",warn));
	if(lab_Cr>=1) {warn="warn";}
	renalData.appendChild(getTDandSpan(lab_Cr,"RenalMainWord","",warn));

	renalTime = document.getElementById("renaltime_tr");
	renalTime.innerHTML="";
	renalTime.appendChild(getTDandSpan(getMonthDay(lab_BUNTime),"","DateInfo"));
	renalTime.appendChild(getTDandSpan(getMonthDay(lab_CrTime),"","DateInfo"));

	liverData = document.getElementById("liver_tr");
	liverData.innerHTML="";
	warn="";
	if(lab_ALT>=50) {warn="warn";}
	liverData.appendChild(getTDandSpan(lab_ALT,"LiverMainWord","",warn));
	if(lab_AST>=50) {warn="warn";}
	liverData.appendChild(getTDandSpan(lab_AST,"LiverMainWord","",warn));

	liverTime = document.getElementById("livertime_tr");
	liverTime.innerHTML="";
	liverTime.appendChild(getTDandSpan(getMonthDay(lab_ALTTime),"","DateInfo"));
	liverTime.appendChild(getTDandSpan(getMonthDay(lab_ASTTime),"","DateInfo"));

	TBILTitle = document.getElementById("TBilTitle_tr");
	TBILTitle.innerHTML="";
	TBilTitle="TBil";
	if(lab_MICROBILTime > lab_TBILTime)
	{
		TBilTitle="Micro Bili.";
	}
	if(lab_TCBTime > lab_MICROBILTime)
	{
		TBilTitle="TCB";
	}
	TBILTitle.appendChild(getTDandSpan(TBilTitle,"" ,"TbilTitle"));
	TBILTitle.appendChild(getTDandSpan("D.Bil","" ,"TbilTitle"));

	TBilData = document.getElementById("TBilData_tr");
	TBilData.innerHTML="";
	TBilToShow = lab_TBIL;
	if(lab_MICROBILTime > lab_TBILTime)
	{
		TBilToShow = lab_MICROBIL;
	}
	if(lab_TCBTime > lab_MICROBILTime)
	{
		TBilToShow = lab_TCB;
	}
	TBilData.appendChild(getTDandSpan(TBilToShow, "" ,"TbilMainWord"));
	TBilData.appendChild(getTDandSpan(lab_DBIL, "" ,"TbilMainWord"));

	TBilTime = document.getElementById("TBilTime_tr");
	TBilTime.innerHTML="";
	TBilTimeToShow = lab_TCBTime;
	if(lab_MICROBILTime > lab_TBILTime)
	{
		TBilTimeToShow = lab_MICROBIL;
	}
	if(lab_TCBTime > lab_MICROBILTime)
	{
		TBilTimeToShow = lab_TCB;
	}
	TBilTime.appendChild(getTDandSpan(getMonthDay(TBilTimeToShow), "" ,"DateInfo"));
	TBilTime.appendChild(getTDandSpan(getMonthDay(lab_DBILTime), "" ,"DateInfo"));

	BoneMarkerData = document.getElementById("BoneMarkerData_tr");
	BoneMarkerData.innerHTML="";
	BoneMarkerData.appendChild(getTDandSpan(lab_ALKP,"","BoneMarkerMainWord"));
	BoneMarkerData.appendChild(getTDandSpan(lab_TotalCa,"","BoneMarkerMainWord",""));
	BoneMarkerData.appendChild(getTDandSpan(lab_LDH,"","BoneMarkerMainWord",""));

	BoneMarkerTime = document.getElementById("BoneMarkerTime_tr");
	BoneMarkerTime.innerHTML="";
	BoneMarkerTime.appendChild(getTDandSpan(getMonthDay(lab_ALKPTime),"","DateInfo"));
	BoneMarkerTime.appendChild(getTDandSpan(getMonthDay(lab_TotalCaTime),"","DateInfo"));
	BoneMarkerTime.appendChild(getTDandSpan(getMonthDay(lab_LDHTime),"","DateInfo"));

	AnemiaData = document.getElementById("AnemiaData_tr");
	AnemiaData.innerHTML="";
	AnemiaData.appendChild(getTDandSpan(lab_Iron,"","AnemiaMainWord",""));
	AnemiaData.appendChild(getTDandSpan(lab_TIBC,"","AnemiaMainWord",""));
	var IronSAT="";
	if(typeof lab_Iron ==="number" && typeof lab_TIBC ==="number" )
	{
		IronSAT = Math.round( lab_Iron/lab_TIBC * 1000)/10 +"%";	
	}
	AnemiaData.appendChild(getTDandSpan(IronSAT,"","AnemiaMainWord",""));
	AnemiaData.appendChild(getTDandSpan(lab_Ferritin,"","AnemiaMainWord",""));

	AnemiaTime = document.getElementById("AnemiaTime_tr");
	AnemiaTime.innerHTML="";
	AnemiaTime.appendChild(getTDandSpan(getMonthDay(lab_IronTime),"","DateInfo"));
	AnemiaTime.appendChild(getTDandSpan(getMonthDay(lab_TIBCTime),"","DateInfo"));
	AnemiaTime.appendChild(getTDandSpan("","","DateInfo"));
	AnemiaTime.appendChild(getTDandSpan(getMonthDay(lab_FerritinTime),"","DateInfo"));
}

function getMonthDay(d)
{
	if(d=="")
	{
		return "";
	}
	result = (d.getMonth()+1) +"/"+d.getDate();
	if(typeof result ==="string")
	{
		return result;
	}else
	{
		return "";
	}
}

function getMonthDayTime(d)
{
	if(d=="")
	{
		return "";
	}
	return (d.getMonth()+1) +"/"+d.getDate() + " " + d.getHours()+":"+d.getMinutes();;
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
