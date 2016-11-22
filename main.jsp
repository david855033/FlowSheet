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
    
    
    //System.out.println("#####  bodyTemperature : " + bodyTemperature );
    //System.out.println("#####  heartRate : " + heartRate );
    //System.out.println("#####  respRate : " + respRate );
    //System.out.println("#####  sbp : " + sbp );
    //System.out.println("#####  dbp : " + dbp );
    
    //System.out.println("#####  peripheral_Array : " + peripheral_Array );
    //System.out.println("#####  aline_Array : " + aline_Array );
    //System.out.println("#####  central_Array : " + central_Array );
    //System.out.println("#####  drain_Array : " + drain_Array );
    //System.out.println("#####  ngDrain : " + ngDrain );

    
    
    //System.out.println("#####  gestationalAgeWeek : [" + gestationalAgeWeek +"]"); 
    //System.out.println("#####  gestationalAgeDate : [" + gestationalAgeDate +"]"); 
    
    
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
   
   
    
  %>  
	<script src="<%=path%>/report/FlowSheet/jquery-1.2.6.pack.js"></script>
	<script src="<%=path%>/report/FlowSheet/flowsheet_main.js"></script>
</head>

<body>
<input type="hidden" id="hdactvdate" value=""/>
<%@ include file="index.html"%>
</body>
</html>