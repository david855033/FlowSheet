<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9" >
	<title>NICU FLow Sheet Main Page</title>
	<%
    String path = request.getContextPath();
    out.println("<script language='javaScript'>var path='"+ path +"';</script>");

    String qdate=(String) request.getAttribute("qdate");
    String chartNumber=(String) request.getAttribute("chartNumber");
    String wardName=(String)	request.getAttribute("wardName");
    String patientName=(String) request.getAttribute("patientName");
    String doctorName=(String) request.getAttribute("doctorName");
    String admissionDate=(String) request.getAttribute("admissionDate");
    String birthDate=(String) request.getAttribute("birthDate");
    String currentDate=(String) request.getAttribute("currentDate");
    
    if (chartNumber == null){
       out.println("<script language='javaScript'>alert('查無病人資訊，請重新點選病人!!');</script>");
       out.println("<script language='javaScript'>window.close();</script>");
    }
    
    if (qdate != null){
       currentDate=(qdate.substring(0,4)+ "-"+qdate.substring(4,6)+ "-" + qdate.substring(6,8)) ;
       out.println("<script language='javaScript'>var qdate='"+  qdate.substring(0,4) +"/" +  qdate.substring(4,6) +"/"  + qdate.substring(6,8) +"';</script>");
    }	
    		 
    String gestationalAgeWeek=(String) request.getAttribute("gestationalAgeWeek");
    String gestationalAgeDate=(String) request.getAttribute("gestationalAgeDate");
    String bodyWeight=(String) request.getAttribute("bodyWeight");
    String bodyWeightLastDate=(String) request.getAttribute("bodyWeightLastDate");
    String mostRecentBodyWeight=(String) request.getAttribute("mostRecentBodyWeight");
    String mostRecentBodyWeightDate=(String) request.getAttribute("mostRecentBodyWeightDate");
    String birthBodyWeight=(String) request.getAttribute("birthBodyWeight");
    
    String bodyWeightArray=(String) request.getAttribute("bodyWeightArray");
 
    String bodyTemperature=(String)request.getAttribute("bodyTemperature");
    String heartRate=(String)request.getAttribute("heartRate");
    String respRate=(String)request.getAttribute("respRate");
    String sbp=(String)request.getAttribute("sbp");
    String dbp=(String)request.getAttribute("dbp");
    
    String peripheral_Array=(String)request.getAttribute("peripheral_Array");
    String aline_Array=(String)request.getAttribute("aline_Array");
    String central_Array=(String)request.getAttribute("central_Array");
    String transfusion_Array=(String)request.getAttribute("transfusion_Array");
    String drain_Array=(String)request.getAttribute("drain_Array");
    String ngDrain=(String)request.getAttribute("NGDrain");
    String event_Array=(String)request.getAttribute("event_Array");
    
    String poAmount=(String)request.getAttribute("POAmount");
    String ngAmount=(String)request.getAttribute("NGAmount");
    String rvAmount=(String)request.getAttribute("RVAmount");
    
    String urine=(String)request.getAttribute("urine");
    
    String stool=(String)request.getAttribute("stool");
    String enema=(String)request.getAttribute("enema");
    
    String lab_glucose=(String)request.getAttribute("lab_glucose");
    String lab_WBC=(String)request.getAttribute("lab_WBC");
    String lab_Seg=(String)request.getAttribute("lab_Seg");
    String lab_Hgb=(String)request.getAttribute("lab_Hgb");
    String lab_PLT=(String)request.getAttribute("lab_PLT");
    String lab_Na=(String)request.getAttribute("lab_Na");
    String lab_K=(String)request.getAttribute("lab_K");
    String lab_Ca=(String)request.getAttribute("lab_Ca");
    String lab_Mg=(String)request.getAttribute("lab_Mg");
    String lab_P=(String)request.getAttribute("lab_P");
    String lab_CRP=(String)request.getAttribute("lab_CRP");
    String lab_PCT=(String)request.getAttribute("lab_PCT");
    
    
    String lab_BUN=(String)request.getAttribute("lab_BUN");
    String lab_Cr=(String)request.getAttribute("lab_Cr");
    String lab_ALT=(String)request.getAttribute("lab_ALT");
    String lab_AST=(String)request.getAttribute("lab_AST");
    String lab_TBIL=(String)request.getAttribute("lab_TBIL");
    String lab_MICROBIL=(String)request.getAttribute("lab_MICROBIL");
    String lab_TCB=(String)request.getAttribute("lab_TCB");
    String lab_DBIL=(String)request.getAttribute("lab_DBIL");
    String lab_ALKP=(String)request.getAttribute("lab_ALKP");
    String lab_TotalCa=(String)request.getAttribute("lab_TotalCa");
    String lab_LDH=(String)request.getAttribute("lab_LDH");
    String lab_Iron=(String)request.getAttribute("lab_Iron");
    String lab_TIBC=(String)request.getAttribute("lab_TIBC");
    String lab_Ferritin=(String)request.getAttribute("lab_Ferritin");
    
    String drug_Array=(String)request.getAttribute("drug_Array");
    
    String saturation=(String)request.getAttribute("saturation");
    
    String ABG_Array=(String)request.getAttribute("ABG_Array");
    
    
    
    //System.out.println("#####  currentDate : " + currentDate );
    //System.out.println("#####  bodyWeight : " + bodyWeight );
    //System.out.println("#####  bodyWeightLastDate : " + bodyWeightLastDate );
    //System.out.println("#####  mostRecentBodyWeight : " + mostRecentBodyWeight );
    //System.out.println("#####  bodyTemperature : " + bodyTemperature );
    //System.out.println("#####  heartRate : " + heartRate );
    //System.out.println("#####  respRate : " + respRate );
    //System.out.println("#####  sbp : " + sbp );
    //System.out.println("#####  dbp : " + dbp );
    System.out.println("#####  bodyWeightArray : " + bodyWeightArray );
    
    
    //System.out.println("#####  peripheral_Array : " + peripheral_Array );
    //System.out.println("#####  aline_Array : " + aline_Array );
    //System.out.println("#####  central_Array : " + central_Array );
    //System.out.println("#####  drain_Array : " + drain_Array );
    //System.out.println("#####  ngDrain : " + ngDrain );

    
    
    //System.out.println("#####  gestationalAgeWeek : [" + gestationalAgeWeek +"]"); 
    //System.out.println("#####  gestationalAgeDate : [" + gestationalAgeDate +"]"); 
    
    //System.out.println("#####  stool : " + stool );
    //System.out.println("#####  enema : " + enema );
    
    /*
    System.out.println("------------------------------------ ");
    System.out.println("#####  lab_glucose : " + lab_glucose );
    System.out.println("------------------------------------ ");
    System.out.println("#####  lab_WBC : " + lab_WBC );
    System.out.println("------------------------------------ ");
    System.out.println("#####  lab_Seg : " + lab_Seg );
    System.out.println("------------------------------------ ");
    System.out.println("#####  lab_Hgb : " + lab_Hgb );
    System.out.println("------------------------------------ ");
    System.out.println("#####  lab_PLT : " + lab_PLT );
    System.out.println("------------------------------------ ");
    System.out.println("#####  lab_Na : " + lab_Na );
    System.out.println("------------------------------------ ");
    System.out.println("#####  lab_K : " + lab_K );
    System.out.println("------------------------------------ ");
    System.out.println("#####  lab_Ca : " + lab_Ca );
    System.out.println("------------------------------------ ");
    System.out.println("#####  lab_Mg : " + lab_Mg );
    System.out.println("------------------------------------ ");
    System.out.println("#####  lab_P : " + lab_P );
    System.out.println("------------------------------------ ");
    System.out.println("#####  lab_CRP : " + lab_CRP );
    System.out.println("------------------------------------ ");
    System.out.println("#####  lab_PCT : " + lab_PCT );
    System.out.println("------------------------------------ ");
    */
    
    
    //System.out.println("#####  drug_Array : " + drug_Array );
    
    System.out.println("#####  ABG_Array : " + ABG_Array );
    
    
    out.println("<script language='javaScript'>var chartNumber='"+ chartNumber +"';</script>");
    out.println("<script language='javaScript'>var wardName='"+ wardName +"';</script>");
    out.println("<script language='javaScript'>var patientName='" + patientName +"';</script>");
    out.println("<script language='javaScript'>var doctorName='"+ doctorName +"';</script>");
    
    if (currentDate != null && currentDate.trim().length()>0){
        out.println("<script language='javaScript'>var currentDate=new Date('"+ currentDate +"');</script>");
    }
    
    if (admissionDate != null && admissionDate.trim().length()>0){
        out.println("<script language='javaScript'>var admissionDate=new Date('"+ admissionDate +"');</script>");
    }
    
    if (birthDate != null && birthDate.trim().length()>0){
        out.println("<script language='javaScript'>var birthDate=new Date('"+ birthDate +"');</script>");
    }
    
    if (gestationalAgeWeek != null && gestationalAgeWeek.trim().length()>0){
        out.println("<script language='javaScript'>var gestationalAgeWeek="+ gestationalAgeWeek +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var gestationalAgeWeek='';</script>");
    }
    
    if (gestationalAgeDate != null && gestationalAgeDate.trim().length()>0){
        out.println("<script language='javaScript'>var gestationalAgeDate="+ gestationalAgeDate +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var gestationalAgeDate='';</script>");
    }
    
    if (bodyWeight != null && bodyWeight.trim().length()>0){
        out.println("<script language='javaScript'>var bodyWeight="+ bodyWeight +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var bodyWeight='';</script>");
    }
    
    if (bodyWeightLastDate != null && bodyWeightLastDate.trim().length()>0){
        out.println("<script language='javaScript'>var bodyWeightLastDate="+ bodyWeightLastDate +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var bodyWeightLastDate='';</script>");
    }

    if (mostRecentBodyWeight != null && mostRecentBodyWeight.trim().length()>0){
        out.println("<script language='javaScript'>var mostRecentBodyWeight="+ mostRecentBodyWeight +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var mostRecentBodyWeight='';</script>");
    }
    
    if (mostRecentBodyWeightDate != null && mostRecentBodyWeightDate.trim().length()>0){
        out.println("<script language='javaScript'>var mostRecentBodyWeightDate=new Date('"+ mostRecentBodyWeightDate +"');</script>");
    }else{
    	   out.println("<script language='javaScript'>var mostRecentBodyWeightDate='';</script>");
    }
   
    
    if (birthBodyWeight != null && birthBodyWeight.trim().length()>0){
        out.println("<script language='javaScript'>var birthBodyWeight="+ birthBodyWeight +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var birthBodyWeight='';</script>");
    }
    
    
    if (bodyWeightArray != null && bodyWeightArray.trim().length()>0){
        out.println("<script language='javaScript'>var bodyWeightArray="+ bodyWeightArray +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var bodyWeightArray=[];</script>");
    }
    
    
    if (bodyTemperature != null && bodyTemperature.trim().length()>0){
        out.println("<script language='javaScript'>var bodyTemperature="+ bodyTemperature +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var bodyTemperature=[];</script>");
    }
    
    if (heartRate != null && heartRate.trim().length()>0){
        out.println("<script language='javaScript'>var HeartRate="+ heartRate +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var HeartRate=[];</script>");
    }
    
    if (respRate != null && respRate.trim().length()>0){
        out.println("<script language='javaScript'>var RespRate="+ respRate +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var RespRate=[];</script>");
    }
    
    if (sbp != null && sbp.trim().length()>0){
        out.println("<script language='javaScript'>var SBP="+ sbp +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var SBP=[];</script>");
    }
    
    if (dbp != null && dbp.trim().length()>0){
        out.println("<script language='javaScript'>var DBP="+ dbp +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var DBP=[];</script>");
    }
    
    if (peripheral_Array != null && peripheral_Array.trim().length()>0){
        out.println("<script language='javaScript'>var peripheral_Array="+ peripheral_Array +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var peripheral_Array=[];</script>");
    }
    
    if (aline_Array != null && aline_Array.trim().length()>0){
        out.println("<script language='javaScript'>var aline_Array="+ aline_Array +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var aline_Array=[];</script>");
    }
    
    if (central_Array != null && central_Array.trim().length()>0){
        out.println("<script language='javaScript'>var central_Array="+ central_Array +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var central_Array=[];</script>");
    }
    
    if (transfusion_Array != null && transfusion_Array.trim().length()>0){
        out.println("<script language='javaScript'>var transfusion_Array="+ transfusion_Array +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var transfusion_Array=[];</script>");
    }
    
    if (drain_Array != null && drain_Array.trim().length()>0){
        out.println("<script language='javaScript'>var drain_Array="+ drain_Array +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var drain_Array=[];</script>");
    }
    
    if (ngDrain != null && ngDrain.trim().length()>0){
        out.println("<script language='javaScript'>var NGDrain="+ ngDrain +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var NGDrain=[];</script>");
    }
    
    if (event_Array != null && event_Array.trim().length()>0){
        out.println("<script language='javaScript'>var event_Array="+ event_Array +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var event_Array=[];</script>");
    }
    
    if (poAmount != null && poAmount.trim().length()>0){
        out.println("<script language='javaScript'>var POAmount="+ poAmount +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var POAmount=[];</script>");
    }
    
    if (ngAmount != null && ngAmount.trim().length()>0){
        out.println("<script language='javaScript'>var NGAmount="+ ngAmount +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var NGAmount=[];</script>");
    }
    
    
    if (rvAmount != null && rvAmount.trim().length()>0){
        out.println("<script language='javaScript'>var RVAmount="+ rvAmount +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var RVAmount=[];</script>");
    }
    
    
    if (urine != null && urine.trim().length()>0){
        out.println("<script language='javaScript'>var urine="+ urine +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var urine=[];</script>");
    }
    
    if (stool != null && stool.trim().length()>0){
        out.println("<script language='javaScript'>var stool="+ stool +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var stool=[];</script>");
    }
    
    if (enema != null && enema.trim().length()>0){
        out.println("<script language='javaScript'>var enema="+ enema +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var enema=[];</script>");
    }
    
    //-------------   lab Data start  -------------------------------------------------
    
    if (lab_glucose != null && lab_glucose.trim().length()>0){
        out.println("<script language='javaScript'>var lab_glucose="+ lab_glucose +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_glucose=[];</script>");
    }
    
    
    if (lab_WBC != null && lab_WBC.trim().length()>0){
        out.println("<script language='javaScript'>var lab_WBC="+ lab_WBC +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_WBC=[];</script>");
    }
    
    if (lab_Seg != null && lab_Seg.trim().length()>0){
        out.println("<script language='javaScript'>var lab_Seg="+ lab_Seg +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_Seg=[];</script>");
    }
    
    if (lab_Hgb != null && lab_Hgb.trim().length()>0){
        out.println("<script language='javaScript'>var lab_Hgb="+ lab_Hgb +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_Hgb=[];</script>");
    }
    
    if (lab_PLT != null && lab_PLT.trim().length()>0){
        out.println("<script language='javaScript'>var lab_PLT="+ lab_PLT +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_PLT=[];</script>");
    }
    
    if (lab_Na != null && lab_Na.trim().length()>0){
        out.println("<script language='javaScript'>var lab_Na="+ lab_Na +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_Na=[];</script>");
    }
    
    if (lab_K != null && lab_K.trim().length()>0){
        out.println("<script language='javaScript'>var lab_K="+ lab_K +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_K=[];</script>");
    }
    
    if (lab_Ca != null && lab_Ca.trim().length()>0){
        out.println("<script language='javaScript'>var lab_Ca="+ lab_Ca +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_Ca=[];</script>");
    }
    
    if (lab_Mg != null && lab_Mg.trim().length()>0){
        out.println("<script language='javaScript'>var lab_Mg="+ lab_Mg +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_Mg=[];</script>");
    }
    
    if (lab_P != null && lab_P.trim().length()>0){
        out.println("<script language='javaScript'>var lab_P="+ lab_P +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_P=[];</script>");
    }
    
    if (lab_CRP != null && lab_CRP.trim().length()>0){
        out.println("<script language='javaScript'>var lab_CRP="+ lab_CRP +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_CRP=[];</script>");
    }
    
    if (lab_PCT != null && lab_PCT.trim().length()>0){
        out.println("<script language='javaScript'>var lab_PCT="+ lab_PCT +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_PCT=[];</script>");
    }
    
    if (lab_BUN != null && lab_BUN.trim().length()>0){
        out.println("<script language='javaScript'>var lab_BUN="+ lab_BUN +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_BUN=[];</script>");
    }	  
    
    if (lab_Cr != null && lab_Cr.trim().length()>0){
        out.println("<script language='javaScript'>var lab_Cr="+ lab_Cr +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_Cr=[];</script>");
    }	
    
    if (lab_ALT != null && lab_ALT.trim().length()>0){
        out.println("<script language='javaScript'>var lab_ALT="+ lab_ALT +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_ALT=[];</script>");
    }	
    
    if (lab_AST != null && lab_AST.trim().length()>0){
        out.println("<script language='javaScript'>var lab_AST="+ lab_AST +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_AST=[];</script>");
    }	
    
    if (lab_TBIL != null && lab_TBIL.trim().length()>0){
        out.println("<script language='javaScript'>var lab_TBIL="+ lab_TBIL +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_TBIL=[];</script>");
    }	
    
    if (lab_MICROBIL != null && lab_MICROBIL.trim().length()>0){
        out.println("<script language='javaScript'>var lab_MICROBIL="+ lab_MICROBIL +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_MICROBIL=[];</script>");
    }
    
    if (lab_TCB != null && lab_TCB.trim().length()>0){
        out.println("<script language='javaScript'>var lab_TCB="+ lab_TCB +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_TCB=[];</script>");
    }
    
    if (lab_DBIL != null && lab_DBIL.trim().length()>0){
        out.println("<script language='javaScript'>var lab_DBIL="+ lab_DBIL +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_DBIL=[];</script>");
    }
    
    if (lab_ALKP != null && lab_ALKP.trim().length()>0){
        out.println("<script language='javaScript'>var lab_ALKP="+ lab_ALKP +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_ALKP=[];</script>");
    }
    
    if (lab_TotalCa != null && lab_TotalCa.trim().length()>0){
        out.println("<script language='javaScript'>var lab_TotalCa="+ lab_TotalCa +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_TotalCa=[];</script>");
    }
    
    if (lab_LDH != null && lab_LDH.trim().length()>0){
        out.println("<script language='javaScript'>var lab_LDH="+ lab_LDH +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_LDH=[];</script>");
    }
  
    if (lab_Iron != null && lab_Iron.trim().length()>0){
        out.println("<script language='javaScript'>var lab_Iron="+ lab_Iron +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_Iron=[];</script>");
    }
    
    if (lab_TIBC != null && lab_TIBC.trim().length()>0){
        out.println("<script language='javaScript'>var lab_TIBC="+ lab_TIBC +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_TIBC=[];</script>");
    }
    
    if (lab_Ferritin != null && lab_Ferritin.trim().length()>0){
        out.println("<script language='javaScript'>var lab_Ferritin="+ lab_Ferritin +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var lab_Ferritin=[];</script>");
    }
    
   
    //-------------   lab Data end  -------------------------------------------------
    
    
    if (drug_Array != null && drug_Array.trim().length()>0){
        out.println("<script language='javaScript'>var drug_Array="+ drug_Array +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var drug_Array=[];</script>");
    }
    
    if (saturation != null && saturation.trim().length()>0){
        out.println("<script language='javaScript'>var Saturation="+ saturation +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var Saturation=[];</script>");
    }
    
    if (ABG_Array != null && ABG_Array.trim().length()>0){
        out.println("<script language='javaScript'>var ABG_Array="+ ABG_Array +";</script>");
    }else{
    	  out.println("<script language='javaScript'>var ABG_Array=[];</script>");
    }
    
    
    
  %>  
	<script src="<%=path%>/report/FlowSheet/jquery-1.2.6.pack.js"></script>
	<script src="<%=path%>/report/FlowSheet/flowsheet_main.js"></script>
</head>

<body>
<input type="hidden" id="hdactvdate" value=""/>
<%@ include file="index.html"%>
</body>
</html>