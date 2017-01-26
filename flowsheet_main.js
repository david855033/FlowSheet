
$(document).ready(function(){
  	$('#chgdate').click(function(){ 
    	var aa =[];
		  aa[0] = window;
		  aa[1] = 'prefix=actvdate&old='+ qdate;
	    window.showModalDialog(path+'/report/FlowSheet/calandar2.jsp',aa,'status:no;dialogWidth:437px;dialogHeight:475px;dialogTop:200px;dialogLeft:200px');
      var cho=$('#hdactvdate').val();
      window.location=path +"/report/FlowSheet/main.do?gaugeDate1="+cho;
      
    });

	  
});
