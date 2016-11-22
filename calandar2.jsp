<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8"%>

<html>
<head>
<%@ include file="/common/inc/norInclude.jsp"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>選擇日期</title>
<script language="javascript" src="<%=path%>/report/FlowSheet/calandar2.js" type="text/javascript"></script>
</head> 
<style type="text/css">
.result{ 
    font-size:large;
    font-weight:bold; 
	color:#333366;
}
.btnctl{
    font-size: small;
	font-weight:bold; width:50px;
	height:35px;
}
.dayst{
    font-size:medium;
	font-weight:bold;
}
.seldefault{
   font-size: large;
	font-weight:bold; width:40px;
	height:40px; 
	background-color: #FFBBDD ;
	color:#C60063
}
.selclick{
   font-size: large;
	font-weight:bold; width:40px;
	height:40px; 
	background-color: #8080FF;
	color:#330099;
}
.nowdts{
   font-size: large;
	font-weight:bold; width:40px;
	height:40px; 
	background-color: #FFDCB9;
	color:#FF0000;
}
.btnnow{
    font-size: small;
	font-weight:bold; width:50px;
	height:35px;
}
</style>
<body>
<table width="430"  height="400">
<tr height="35" bgcolor="#B9B9B9" align="center">
   <td><button id='downmonth' class="btnctl">上一月</button></td>
   <td><button id='downyear' class="btnctl">上一年</button></td>
   <td class='result'><label id='selmonth'></label>月　<label id='selyear'></label></td>
   <td><button class="btnnow" id ="shownow">今日</button></td>
   <td><button id='upyear' class="btnctl">下一年</button></td>
   <td><button id='upmonth' class="btnctl">下一月</button></td>
   
</tr>
<tr bgcolor="#B9B9B9" align="center">
   <td colspan="6">
   	<div id="divtime">
   		<table border="0" cellpadding="0" cellspacing="0" width="100%" height="35px">
   			<tr>
   				<td width="16%"><button id="hrup" class="btnctl">＋</button></td>
   				<td width="16%"><button id="hrdown" class="btnctl">－</button></td>
   				<td width="36%"><input type="text" id="hr" maxlength="2" size="4" class="textresult" style="width:30px"/>:
   				<input type="text" id="min" maxlength="2" size="4" class="textresult" style="width:30px"/></td>
   				<td width="16%"><button id="minup" class="btnctl">＋</button></td>
   				<td width="16%"><button id="mindown" class="btnctl">－</button></td>
   			</tr> 
   		</table>
   	</div>
   </td>   
</tr>

<tr valign="top">
   <td  colspan="6">
      <table width="100%" height="40"  cellpadding="0"  cellspacing="0">
      <tr height="40" bgcolor="#B3B3D9" align="center" class="dayst">
	    <td>一</td>
   		<td>二</td>
  		<td>三</td>
   		<td>四</td>
   		<td>五</td>
   		<td><font color="#FF0000">六</font></td>
   		<td><font color="#FF0000">日</font></td>
	  </tr>
	  <tr>
	  <td  colspan="7"  >
		<table width="100%" height="100%"  cellpadding="0"  cellspacing="1" border="0">
	      <tr align="center" bgcolor="#D0E0FD" height="55">
	       <td id='td_1'><button id='btn_1' class="seldefault"></button></td>
   	   	   <td id='td_2'><button id='btn_2' class="seldefault"></button></td>
		   <td id='td_3'><button id='btn_3' class="seldefault"></button></td>
		   <td id='td_4'><button id='btn_4' class="seldefault"></button></td>
		   <td id='td_5'><button id='btn_5' class="seldefault"></button></td>
		   <td id='td_6'><button id='btn_6' class="seldefault"></button></td>
		   <td id='td_7'><button id='btn_7' class="seldefault"></button></td>
	      </tr>
		  <tr align="center" bgcolor="#D9D9D9" height="55">
			<td id='td_8'><button id='btn_8' class="seldefault"></button></td>
			<td id='td_9'><button id='btn_9' class="seldefault"></button></td>
			<td id='td_10'><button id='btn_10' class="seldefault"></button></td>
			<td id='td_11'><button id='btn_11' class="seldefault"></button></td>
			<td id='td_12'><button id='btn_12' class="seldefault"></button></td>
			<td id='td_13'><button id='btn_13' class="seldefault"></button></td>
			<td id='td_14'><button id='btn_14'class="seldefault"></button></td>
		  </tr>
		  <tr align="center" bgcolor="#D0E0FD" height="55">
			<td id='td_15'><button id='btn_15' class="seldefault"></button></td>
			<td id='td_16'><button id='btn_16' class="seldefault"></button></td>
			<td id='td_17'><button id='btn_17' class="seldefault"></button></td>
			<td id='td_18'><button id='btn_18' class="seldefault"></button></td>
			<td id='td_19'><button id='btn_19' class="seldefault"></button></td>
			<td id='td_20'><button id='btn_20' class="seldefault"></button></td>
			<td id='td_21'><button id='btn_21' class="seldefault"></button></td>
		  </tr>
		  <tr align="center" bgcolor="#D9D9D9" height="55">
			<td id='td_22'><button id='btn_22' class="seldefault"></button></td>
			<td id='td_23'><button id='btn_23' class="seldefault"></button></td>
			<td id='td_24'><button id='btn_24' class="seldefault"></button></td>
			<td id='td_25'><button id='btn_25' class="seldefault"></button></td>
			<td id='td_26'><button id='btn_26' class="seldefault"></button></td>
			<td id='td_27'><button id='btn_27' class="seldefault"></button></td>
			<td id='td_28'><button id='btn_28' class="seldefault"></button></td>
		  </tr>
		  <tr align="center" bgcolor="#D0E0FD" height="55">
			<td id='td_29'><button id='btn_29' class="seldefault"></button></td>
			<td id='td_30'><button id='btn_30' class="seldefault"></button></td>
			<td id='td_31'><button id='btn_31' class="seldefault"></button></td>
			<td id='td_32'><button id='btn_32' class="seldefault"></button></td>
			<td id='td_33'><button id='btn_33' class="seldefault"></button></td>
			<td id='td_34'><button id='btn_34' class="seldefault"></button></td>
			<td id='td_35'><button id='btn_35' class="seldefault"></button></td>
		  </tr>
		  <tr align="center" bgcolor="#D9D9D9" height="55">
			<td id='td_36'><button id='btn_36' class="seldefault"></button></td>
			<td id='td_37'><button id='btn_37' class="seldefault"></button></td>
			<td id='td_38'><button id='btn_38' class="seldefault"></button></td>
			<td id='td_39'><button id='btn_39' class="seldefault"></button></td>
			<td id='td_40'><button id='btn_40' class="seldefault"></button></td>
			<td id='td_41'><button id='btn_41' class="seldefault"></button></td>
			<td id='td_42'><button id='btn_42' class="seldefault"></button></td>
		  </tr>
		 </table>
		</td>
	  </tr>
	  
   </table></td>
</tr>
<!--<tr><td colspan="5"><button class="btnnow">今日</button></td></tr>-->
</table>
<input type='hidden' id='seldate' value=''/>
<input type='hidden' id='nowdate' value=''/>
</body>
</html>
