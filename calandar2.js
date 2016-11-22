
$(document).ready(function(){
	var ilist = window.dialogArguments;  
  var pdoc= ilist[0];
  var reqOld = $.trim(getParameter(ilist[1],"old"))=="null"?"":$.trim(getParameter(ilist[1],"old"));
  var reqPre = getParameter(ilist[1],"prefix");
	var reqTime = $.trim(getParameter(ilist[1],"time"))=="null"?"":$.trim(getParameter(ilist[1],"time"));
	var reqHdtime = $.trim(getParameter(ilist[1],"hdtime"))=="null"?"":$.trim(getParameter(ilist[1],"hdtime"));
	var time = new Array(2);
	var b = false;
  var reqSplabel = $.trim(getParameter(ilist[1],"splabel"))=="null"?"":$.trim(getParameter(ilist[1],"splabel"));
  var useRecDate = $.trim(getParameter(ilist[1],"useRecDate"))=="null"?"":$.trim(getParameter(ilist[1],"useRecDate"));

	$('#divtime').hide(); 
	//alert(reqOld+"----");
    if (reqOld != '' && reqOld != null){
		setCalandar(new Date(reqOld),new Date(),1);
	}else{
		setCalandar(new Date(),new Date(),2);
	}
	if(reqHdtime!=""){
		$('#divtime').show();
		time = reqTime.split(":");
		if(time.length>1){
			$('#hr').val(time[0]);
			$('#min').val(time[1]);
		}else{
			var dt = new Date();
			var hh = appendZero(dt.getHours().toString(),2);
			var mm = appendZero(dt.getMinutes().toString(),2);
			$('#hr').val(hh);
			$('#min').val(mm);
		}
		b = true;
	}
	function setCallVal(val){
		var dt = val;
		if(b){
			val += "  "+$('#hr').val()+":"+$('#min').val();
			if(reqHdtime!=""){
				pdoc.$('#'+reqHdtime).val($('#hr').val()+$('#min').val());
			}
		}
		if(useRecDate != ""){
			pdoc.$("#vrecord_date").val(val);
		}else if (reqSplabel == ""){
		  pdoc.$('#lb' + reqPre).html(val);			
		  pdoc.$('#hd' + reqPre).val(dataFormat("S",dt,"/"));
		}else{
		  pdoc.$('#' + reqSplabel).html(val);
		  //pdoc.$('#hd' + reqPre).val(dataFormat("S",dt,"/"));
		}
	}
	$('#shownow').click(function(){
		setCalandar(new Date(),new Date(),2);
		//pdoc.$('#lb' + reqPre).html($('#seldate').val());
		setCallVal($('#seldate').val());
		  window.close();

	});	
	
	$('#hrup').click(function(){
		var val = parseInt($('#hr').val());
		//alert($('#hr').val());
		if(val!="NaN"){
			val++;
			if(val==24){
				val = 0;
			}
		}else{
			return false;
		}
		$('#hr').val(appendZero(val.toString(),2));
	});	
	$('#hrdown').click(function(){
		var val = parseInt($('#hr').val());
		//alert($('#hr').val());
		if(val!="NaN"){
			val--;
			if(val==-1){
				val = 23;
			}
		}else{
			return false;
		}
		$('#hr').val(appendZero(val.toString(),2));
	});
	$('#minup').click(function(){
		var val = parseInt($('#min').val());
		if(val!="NaN"){
			val++;
			if(val==60){
				val = 0;
			}
		}else{
			return false;
		}
		$('#min').val(appendZero(val.toString(),2));
	});	
	$('#mindown').click(function(){
		var val = parseInt($('#min').val());
		if(val!="NaN"){
			val--;
			if(val==-1){
				val = 59;
			}
		}else{
			return false;
		}
		$('#min').val(appendZero(val.toString(),2));
	});


	$('#downmonth').click(function(){
		var aa = $('#seldate').val();
		var bb = aa.split('/');
		var yr = bb[0];
		var mt = bb[1];	
		var cc = parseInt(mt,10) -1;
		
		if (cc == 0){ 
		    yr = parseInt(yr,10) -1 ;
			mt =12;
		}else {
			mt=cc;
	    }
        var dd = new Date(yr + '/' + mt + '/01');
		setCalandar(dd,new Date(),2);

	});	
	$('#upmonth').click(function(){
		var aa = $('#seldate').val();
		var bb = aa.split('/');
		var yr = bb[0];
		var mt = bb[1];		
		var cc = parseInt(mt,10) + 1;
		
		if (cc == 13){ 
		    yr = parseInt(yr,10) +1 ;
			mt =1;
		}else {
			mt=cc;
	    }
        var dd = new Date(yr + '/' + mt + '/01');
		setCalandar(dd,new Date(),2);

	});
	
	$('#downyear').click(function(){
		var aa = $('#seldate').val();
		var bb = aa.split('/');
		var yr = bb[0];
		var mt = bb[1];
		
		var cc = parseInt(yr,10) -1;
		yr=cc;
		
        var dd = new Date(yr + '/' + mt + '/01');
		
		setCalandar(dd,new Date(),2);
	});
	$('#upyear').click(function(){
		var aa = $('#seldate').val();
		var bb = aa.split('/');
		var yr = bb[0];
		var mt = bb[1];
		
		var cc = parseInt(yr,10) +1;
		yr=cc;
		
        var dd = new Date(yr + '/' + mt + '/01');

		setCalandar(dd,new Date(),2);
		
	});
	
	$("button[id^='btn_']").click(function(){
		var yr = $('#selyear').html();
		var mt = $('#selmonth').html();
		var dy = $(this).val();
		if (dy < 10){ dy = '0' + dy;}
		$('#seldate').val(yr + '/' + mt + '/' + dy);
		
        var nowdt = new Date();
		var nyr =nowdt.getFullYear();
        var nmt =nowdt.getMonth() + 1 ;
        var ndy =nowdt.getDate();

        if (ndy < 10){ ndy = '0' + ndy;}
        if (nmt < 10){ nmt = '0' + nmt;} 
		
		$('#nowdate').val(nyr + '/' + nmt + '/' + ndy);
		
		$("button[id^='btn_']").each(function(){
			$(this).removeClass('nowdts');
		    $(this).removeClass('selclick'); 
		    $(this).addClass('seldefault'); 
			var nn1 =$(this).val();
			if (nn1 < 10){ nn1 = '0' + nn1;}
		    var nn2 = yr + '/' + mt + '/' + nn1 ;
			if (nn2== $('#nowdate').val()){
			   $(this).removeClass('seldefault'); 
		       $(this).addClass('nowdts');
			}
		});
		
		  $(this).removeClass('seldefault');
		  $(this).removeClass('nowdts');
          $(this).addClass('selclick');
		  setCallVal($('#seldate').val());

		  window.close();
	})		

	$("input[type='text']").blur(function(){
		var id = $(this).attr('id');
		var val = parseInt($(this).val());
		if(val!="NaN"){
			if(id=="hr"){
				if(val>23){
					val = 0;
				}
			}else{
				if(val>59){
					val = 0;
				}
			}
			$(this).val(appendZero(val.toString(),2));
		}else{
				$(this).val("00");
		}
		return true;
	});

	 $("input[type='text']").keydown(function(e){
		 var kc = e.keyCode;
		 if((kc>47 && kc<59) || (kc<106 && kc>95) || kc==8){
			 return true;
		 }else if(kc==13){
			 nextFocus($(this).attr('id'));
			 return true;
		 }
		 return false;
	 });
	

	function nextFocus(id){
		switch(id){
			case 'hr':
				$('#min').focus();
				break;
			case 'min':
				$('#hr').focus();
				break;
		}
	}
});	

function setCalandar (dd,nowdt,tp){
   
   $("button[id^='btn_']").each(function(){
			$(this).removeClass('selclick');
			$(this).removeClass('nowdts');
            $(this).addClass('seldefault');								  
	});
	
   var yr =dd.getFullYear();
   var mt =dd.getMonth() + 1 ;
   var dy =dd.getDate();
   
   if (dy < 10){ dy = '0' + dy;}
   if (mt < 10){ mt = '0' + mt;}
   
   var nyr =nowdt.getFullYear();
   var nmt =nowdt.getMonth() + 1 ;
   var ndy =nowdt.getDate();

   if (ndy < 10){ ndy = '0' + ndy;}
   if (nmt < 10){ nmt = '0' + nmt;}
   
   var nextmt = dd.getMonth() + 2 ;
   var nextyr = dd.getFullYear() + 1; 
   var first = new Date(yr+ '/' +mt +'/01')
   var firstd =first.getDay();
   var last ='';
   var lastct =1 ;
   
   $('#seldate').val(yr + '/' + mt + '/' + dy);
   $('#nowdate').val(nyr + '/' + nmt + '/' + ndy);
   $('#selmonth').html(mt);
   $('#selyear').html(yr);

   if (firstd==0) {firstd=7;} 
   
   if (mt != 12) {
	  var aa = yr + '/' +  nextmt + '/01' ;
	  aa = addDate(aa,-1);
	  last = aa.getFullYear() +'/' + (aa.getMonth() + 1) + '/' + aa.getDate();
	  lastct = aa.getDate();
   }else {
	  last = yr + '12/31'; 
	  lastct =31;
   }
   var ii = 1;
   for (i=1; i<=42; i++){
	  if (i >= firstd && i < firstd +lastct){
		  var tii = ii;
		  if (tii < 10){ tii = '0' + tii;}
		  var tt = yr + '/' + mt + '/' + tii ;
		  $('#btn_'+ i).text(ii);
		  $('#btn_'+ i).show();
		  if (tt ==  $('#nowdate').val() ){
			 $('#btn_'+ i).removeClass('seldefault');
			 $('#btn_'+ i).removeClass('selclick');
             $('#btn_'+ i).addClass('nowdts');
		  }
		   if (tp == 1 && tt== $('#seldate').val()){
		      $('#btn_'+ i).removeClass('nowdts');
			 $('#btn_'+ i).removeClass('selclick');
             $('#btn_'+ i).addClass('selclick');
		   }
		  ii++;
	  }else {
		  $('#btn_'+ i).hide();
	  }    
   }

}


function addDate(dd,dadd){
   var a=new Date(dd);
   var b= a.getTime();
   b=b+(dadd*24*60*60*1000) ;
   a=new Date(b);
   return a;
}

