var validStart=23, validEnd=0;


function TPRDataProcess()
{
	
	//generateMAP();
	var TPRTable =document.getElementById("tprtable");
	TPRTable.innerHTML="";
	TPRTable.appendChild(getTable());
}

function getTable()
{
	var table = getComponent('table');
	table.appendChild(getSpacingRow());
	table.appendChild(getFirstRowTPR());
	table.appendChild(printRowTPR("箱溫","('C)",incubatorTemp));
	table.appendChild(printRowTPR("濕度","(%)",incubatorHumidity));
	table.appendChild(getSpacingRow());

	if(!(typeof bodyTemperatureWarn_U ==="number")) bodyTemperatureWarn_U=38;
	if(!(typeof bodyTemperatureWarn_L ==="number")) bodyTemperatureWarn_L=36;
	if(typeof bodyTemperature =="undefined")
	{
		bodyTemperature=[];
	}
	table.appendChild(printRowTPR("體溫","('C)",bodyTemperature,bodyTemperatureWarn_L,bodyTemperatureWarn_U));

	if(typeof HeartRate =="undefined")
	{
		HeartRate=[];
	}
	if(!(typeof HeartRateWarn_U ==="number")) HeartRateWarn_U=220;
	if(!(typeof HeartRateWarn_L ==="number")) HeartRateWarn_L=100;
	table.appendChild(printRowTPR("心率","(/min)",HeartRate,HeartRateWarn_L,HeartRateWarn_U));
	
	if(typeof RespRate =="undefined")
	{
		RespRate=[];
	}
	if(!(typeof RespRateWarn_U ==="number")) RespRateWarn_U=80;
	if(!(typeof RespRateWarn_L ==="number")) RespRateWarn_L=20;
	table.appendChild(printRowTPR("呼吸","(/min)",RespRate,RespRateWarn_L,RespRateWarn_U));
	
	if(typeof Saturation =="undefined")
	{
		Saturation=[];
	}
	if(!(typeof SaturationWarn_L ==="number")) SaturationWarn_L=85;
	if(!(typeof SaturationWarn_U ==="number")) SaturationWarn_U=95;
	table.appendChild(printRowTPR("Sat","(%)",Saturation,SaturationWarn_L,SaturationWarn_U));
	table.appendChild(getSpacingRow());
	
	if(typeof SBP =="undefined")
	{
		SBP=[];
	}
	if(!(typeof SBP_L ==="number")) SBP_L=45;
	table.appendChild(printRowTPR("SBP","(/mmHg)",SBP,SBP_L,SBP_U));

	if(typeof DBP ==="undefined")
	{
		DBP=[];
	}
	table.appendChild(printRowTPR("DBP","(/mmHg)",DBP,DBP_L,DBP_U));
	

	if(!(typeof MAPWarn_L ==="number")) MAPWarn_L=35;
	table.appendChild(printRowTPR("MAP","(/mmHg)",generateMAP(SBP,DBP),MAPWarn_L,MAPWarn_U));
	
	table.appendChild(getSpacingRow());
	return table;
}

//產生一列TPR表格
function printRowTPR(fieldName, Unit, DataArray, LowerWarn, UpperWarn)
{
	var tr = getComponent('tr');
		
		tr.appendChild(getSpacingTD());

			var td = getComponent('td', "td_FirstColumn_TPR");
				td.appendChild(getComponent('span', "", fieldName));
				td.appendChild(getComponent('span', "fade", Unit));
				
				var limittext ;
				if(typeof LowerWarn ==="number" && typeof UpperWarn === "number")
				{
					limittext=" "+LowerWarn+"-"+UpperWarn;
				}else if(typeof LowerWarn ==="number")
				{
					limittext=" >"+LowerWarn;
				}
				else if(typeof UpperWarn === "number")
				{
					limittext=" <"+UpperWarn;
				}
			td.appendChild(getComponent('span',"warnInfo_TPR",limittext));
		tr.appendChild(td);
		tr.appendChild(getSpacingTD());
		var dataOutput = generateDataOutput(DataArray);
		for(var i=0;i<8;i++){
			tr.appendChild(getTDwithData(dataOutput[i],"td_Data_TPR",LowerWarn,UpperWarn));	
		}
		tr.appendChild(getSpacingTD());
		for(var i=8;i<16;i++){
			tr.appendChild(getTDwithData(dataOutput[i],"td_Data_TPR",LowerWarn,UpperWarn));	
		}
		tr.appendChild(getSpacingTD());
		for(var i=16;i<24;i++){
			tr.appendChild(getTDwithData(dataOutput[i],"td_Data_TPR",LowerWarn,UpperWarn));	
		}

		tr.appendChild(getSpacingTD());

	return tr;
}

//產生第一列(時間及0~23)
function getFirstRowTPR()
{
	var tr = getComponent('tr');
	
	tr.appendChild(getSpacingTD());
	
	var td = getComponent('td',"td_FirstColumn_TPR");
		td.appendChild(getComponent('span',"","時間"));
	tr.appendChild(td);
	
	tr.appendChild(getSpacingTD());
	
	for(i=0;i<8;i++){
		var td = getComponent('td',"td_FirstRow_TPR");
		td.appendChild(getComponent('span',"",i));
		tr.appendChild(td);
	}
	
	tr.appendChild(getSpacingTD());
	
	for(i=8;i<16;i++){
		var td = getComponent('td',"td_FirstRow_TPR");
		td.appendChild(getComponent('span',"",i));
		tr.appendChild(td);
	}
	
	tr.appendChild(getSpacingTD());
	
	for(i=16;i<24;i++){
		var td = getComponent('td',"td_FirstRow_TPR");
		td.appendChild(getComponent('span',"",i));
		tr.appendChild(td);
	}
	
	tr.appendChild(getSpacingTD());
	
	return tr;
}


//將interface的資料轉成24小時的資料(若一小時有兩筆以上，選大的數字)
function generateDataOutput(DataArray)
{
	var dataOutput=[];
	for(var i = 0; i<24; i++)
	{
		var max="";
		for(var x = 0;x< DataArray.length;x++)
		{
			if(DataArray[x].time.split(':')[0]==i)
			{
				if( DataArray[x].value > max) max = DataArray[x].value;
				if(validStart > i) {validStart=i;}
				if(validEnd < i) {validEnd=i;}
			}
		}
		dataOutput[i] = max;
	}
	return dataOutput;
}

function generateMAP(SBDDataArray,DBPDataArray){

	var MAP=[];
	var SBPdataOutput=[];
	var DPBdataOutput=[];
	for(var i = 0; i<24; i++)
	{
		var max="";
		for(var x = 0;x< SBDDataArray.length;x++)
		{
			if(SBDDataArray[x].time.split(':')[0]==i)
			{
				if( SBDDataArray[x].value > max) max = SBDDataArray[x].value;
			}
		}
		SBPdataOutput[i] = max;
		var max="";
		for(var x = 0;x< DBPDataArray.length;x++)
		{
			if(DBPDataArray[x].time.split(':')[0]==i)
			{
				if( DBPDataArray[x].value > max) max = DBPDataArray[x].value;
			}
		}
		DPBdataOutput[i] = max;
	}
	for(var i=0;i<23;i++)
	{
		if(typeof SBPdataOutput[i] === "number" && typeof DPBdataOutput[i] === "number" )
		{
			MAP.push({"time":i+":00","value":Math.round(SBPdataOutput[i]/3+DPBdataOutput[i]*2/3)});
		}
	}

	return MAP;
}