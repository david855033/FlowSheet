//Header

//病房號及床號(string)
//var wardName = "NICU - 1";  					

//姓名(string)
//var patientName = "郝早生之女"; 				

//主治醫師(string)
//var doctorName = "曹大大"; 						

//病歷號(string)
//var chartNumber = "39482362";					

//住院日期(date)
//var admissionDate = new Date("2016-07-01");		

//生日(date)
//var birthDate = new Date("2014-08-30");			

//頁面當前時間(date)
//var currentDate = new Date("2016-11-18");		

//出生時候週數(cGA)(int)
//var gestationalAgeWeek=28;						
//出生時候週數(cGA)之日數部分(int)
//var gestationalAgeDate=1;						

//今日體重(g),若無資料則傳入空字串(int)
//var bodyWeight = 4360;							

//昨天體重(g),若無資料則傳入空字串(int)
//var bodyWeightLastDate = 1500;			

//最近一筆體重(g),若沒有今日體重，則查詢最近一筆體重傳入(int)
//var mostRecentBodyWeight=5400;					
//最近一筆體重日期(g),若沒有今日體重，則查詢最近一筆體重傳入(date)
//var mostRecentBodyWeightDate=new Date("2016-06-30");		

//出生體重(g)(int)
//var birthBodyWeight = 1212;

//飲食醫囑(尚未確定格式，預計從醫囑系統內抓取)
var dietType="";
var dietAmount="";

//呼吸器設定(尚未確定格式，預計從醫囑系統內抓取)
var currentVentilatorType="";
var currentVentilatorSetting="";

//TPR (**此部分皆為陣列，陣列元素為 1. 時間(string,"hh:mm") 2. 數值) 
//example: {"time":"0:00","value":29.5}
//警告上限及下限：抓取醫囑系統內的設定。若不指定，則會使用預設值

//保溫箱溫度(number) 
var incubatorTemp = []
//保溫箱濕度(%)(number)
var incubatorHumidity = []


//體溫(number)
/*var bodyTemperature =
 [
{"time":"0:00","value":37},
{"time":"1:00","value":37.1},
{"time":"2:00","value":37.2},
{"time":"3:00","value":37.6},
{"time":"4:00","value":38.1},
{"time":"5:00","value":38.5},
{"time":"6:00","value":39},
{"time":"7:00","value":40},
{"time":"7:20","value":41},
{"time":"7:40","value":39},
{"time":"8:00","value":37},
{"time":"9:00","value":37},
]
*/
//體溫警告上限(number) (預計從醫囑系統內抓取)
var bodyTemperatureWarn_U;
//體溫警告下限(number) (預計從醫囑系統內抓取)
var bodyTemperatureWarn_L;

//心跳速度(number)
/*var HeartRate =
[
{"time":"0:00","value":100},
{"time":"1:00","value":120},
{"time":"2:00","value":130},
{"time":"3:00","value":140},
{"time":"4:00","value":130},
{"time":"5:00","value":130},
{"time":"6:00","value":130},
{"time":"7:00","value":130},
{"time":"7:20","value":140},
{"time":"7:40","value":130},
{"time":"8:00","value":120},
{"time":"9:00","value":110},
]*/
//心跳速度警告上限(number) (預計從醫囑系統內抓取)
var HeartRateWarn_U;
//心跳速度警告下限(number) (預計從醫囑系統內抓取)
var HeartRateWarn_L;
//呼吸速度(number)
/*var RespRate=
[
{"time":"0:00","value":40},
{"time":"1:00","value":50},
{"time":"2:00","value":60},
{"time":"3:00","value":40},
{"time":"4:00","value":45},
{"time":"5:00","value":43},
{"time":"6:00","value":44},
{"time":"7:00","value":50},
{"time":"7:20","value":40},
{"time":"7:40","value":30},
{"time":"8:00","value":40},
{"time":"9:00","value":60},
]*/
//呼吸速度上限(number)
var RespRateWarn_U;
//呼吸速度下限(number)
var RespRateWarn_L;
//血氧濃度(%)(number)
/*var Saturation =
[
{"time":"0:00","value":93},
{"time":"1:00","value":94},
{"time":"2:00","value":88},
{"time":"3:00","value":88},
{"time":"4:00","value":90},
{"time":"5:00","value":90},
{"time":"6:00","value":70},
{"time":"7:00","value":65},
{"time":"7:20","value":88},
{"time":"7:40","value":88},
{"time":"8:00","value":90},
{"time":"9:00","value":90},
]*/
//血氧濃度上限(number)
var SaturationWarn_U;
//血氧濃度下限(number)
var SaturationWarn_L; 
//收縮壓(number)
/*var SBP =
 [
{"time":"0:00","value":66},
{"time":"1:00","value":65},
{"time":"2:00","value":53},
{"time":"3:00","value":67},
{"time":"4:00","value":70},
{"time":"5:00","value":66},
{"time":"6:00","value":64},
{"time":"7:00","value":56},
{"time":"7:20","value":57},
{"time":"7:40","value":58},
{"time":"8:00","value":60},
{"time":"9:00","value":54},
]*/
//收縮壓上限
var SBP_U;
//收縮壓下限
var SBP_L; 
//舒張壓
/*var DBP =
 [
{"time":"0:00","value":44},
{"time":"1:00","value":43},
{"time":"2:00","value":33},
{"time":"3:00","value":32},
{"time":"4:00","value":32},
{"time":"5:00","value":34},
{"time":"6:00","value":33},
{"time":"7:00","value":43},
{"time":"7:20","value":38},
{"time":"7:40","value":44},
{"time":"8:00","value":44},
{"time":"9:00","value":45},
]*/
//舒張壓上限
var DBP_U;
//舒張壓下限
var DBP_L; 
//平均壓上限
var MAPWarn_U;
//平均壓下限
var MAPWarn_L;


//Apnea Bradycardia(AB)為用來記錄該小時嬰兒停止呼吸的次數，
//分為自己恢復(ABeventSelfRecovered)或需要處理(ABeventManaged)
//資料格式為由number組成之陣列，24個element分別對應到0-23小時
//目前沒有資料來源，
//可能規劃1.在NIS新增欄位，傳入數字陣列 
//        2.去特殊事件撈事件的內容，在前端解析每個小時的事件數(比如說出現apnea關鍵字)

//自行恢復(array[24] of num)
var ABeventSelfRecovered=
[]
//需處理才恢復(array[24] of num)
var ABeventManaged= 
[];

//Event: 每個event為一個物件，物件內有時間欄位(hh:mm)及內容欄位(string)
/*event_Array=
[
	{"time":"20:00", "content": "Apnea Sat:70%"},
	{"time":"02:18", "content": "Apnea Sat:80%"},
	{"time":"12:15", "content": "Apnea Sat:70%"},
	{"time":"14:00", "content": "Apnea Sat:60%"},
	{"time":"15:00", "content": "Bradycardia Sat:70%"},
	{"time":"15:00", "content": "給藥 lasix 1mg"},
	{"time":"15:00", "content": "給藥 ibuprofen 0.5ml"},
]*/


//IO
//每種IO以物件儲存，有三個欄位，分別是route(string), 名稱(string), 及各小時容積(array of (num or string))
//其中peripheral/aline/central/transfusion/drain 為上述物件的陣列(可能不只一條管路)
//其餘數值為是單獨物件(唯一)，只需要一個陣列

//周邊管路
/*var peripheral_Array=
	[
		{"route":"IV","name":"Dopa","amount":[,,,,2,2,3,44444]},
		{"route":"IV","name":"Dopa","amount":[,,,,2,2,3,4]},
		{"route":"IV","name":"Mepem","amount":[,,,,2,2,3,4]},
	];
*/
	

//動脈管路
/*var aline_Array=
	[
	];
*/
//中央管路
/*var central_Array=
	[
		{"route":"CVC", "name":"S.Lipid","amount":[1,1,1,1,1]},
		{"route":"PCVL", "name":"albumin","amount":[0,0,0,0,0,10,10,10,10]},
		{"route":"PCVL", "name":"Albumin","amount":[0,0,0,0,0,10,10,10,10]},
		{"route":"PCVL", "name":"Alb  umin","amount":[1,0,0,0,0,10,10,10,10,5,5,5]},
	];
*/
//輸血(不論何種管路都將輸血獨立出來，並且顯示血品種類於Route就好)
/*var transfusion_Array=
	[
		{"route":"pRBC","name":"","amount":[1,1,1,1,1]},
		{"route":"FFP","name":"","amount":[0,0,0,0,0,10,10,10,10]}
	];
*/
//口服(用嘴巴吃進去的量), array of num
/*var POAmount=
	[,,30,,30,,30];*/
//灌食,  array of num
/*var NGAmount=
	[,,30,,30,,30];*/
//胃殘餘量,  array of num
/*var RVAmount=
	[0,0,5,0,0,0,0,0,15];*/
//胃殘餘量的性狀, array of string,  for example ["半消化、黃褐"]
var RVCharacter=
	[];
//胃管反抽量, array of num
/*var NGDrain	=
	[0,0,,3,3,,2,20];
*/	

//各種引流陣列 route顯示引流管名稱, name顯示部位
/*var drain_Array=
	[
		{"route":"Pigtail","name":"右胸","amount":[45,,,,,,,20,,,,,,,]},
		{"route":"JP","name":"左腹","amount":[15,,,,,,,]},
		{"route":"CVVH","name":"","amount":[5,5,5,5,5,5,5,5,5]}
	];
*/



//小便量,含Foley(尿管)以及自行解尿   array of num
/*var urine =
	[,,,,30,,,,22,,,,,20,,90,90,];
*/

//大便量以及性狀     array of string  for example["a1","b3"]
var stool = 
	[];

//是否有灌腸(S表示有肛門口刺激，E表示灌腸，D表示digital)   array of string
var enema =
	[];

//ventilator_Array 有三個欄位: time mode setting, 
//預計由RT表單接入
//如果有同時有兩種設定(例如呼吸器+葉克膜) 則用"|"表示換行
//ex
/*	{"time":"10:00","mode":"IMV/OETT",
	"setting":"FiO2:40%, PIP/PEEP:20/5mmHg, Rate:20/min"},
	{"time":"15:00","mode":"IMV/OETT|ECMO",
	"setting":"FiO2:40%, PIP/PEEP:20/5mmHg, Rate:20/min|FiO2=100%, Air flow=2L/min, RPM=2500, Flow=700ml/min"}*/
var ventilator_Array=
[
]

//ABG有兩個欄位(Time/Data)
//Data部分為陣列，資料內容依序為：
//pH PO2 PaCO2 HCO3 BE Sat(%) Hb Na K Ca Mg BUN Cr
/* example
    {"time":"10:00", "data":[7.25,60,40,24,-3,"50%",13.1,140,3.5,1.01,2.03,20,0.34]},
	{"time":"12:00", "data":[7.25,60,40,24,-3,"50%"]},
	{"time":"14:00", "data":[7.25,60,40,24,-3,"50%",13.1,140,3.5,1.01,2.03,20,0.34]},
*/
var ABG_Array =
[

]

//lab data物件的欄位(查詢currentDate算起往前推三個月資料),
// value(num)/date(str)/time(str)
var lab_glucose=
[
{"value":180,"date":"2016-11-22","time":"0:23"},
{"value":30,"date":"2016-10-01","time":"0:23"},
{"value":50,"date":"2016-11-01","time":"10:23"},
{"value":40,"date":"2016-9-01","time":"10:23"}
];

var lab_WBC=
[{"value":20500,"date":"2016-8-01","time":"17:23"},
{"value":20300,"date":"2016-7-01","time":"17:23"},
{"value":12000,"date":"2016-9-01","time":"17:23"}];
var lab_Seg=
[{"value":"43%","date":"2016-7-01","time":"17:23"}];
var lab_Hgb=
[{"value":7.7,"date":"2016-7-01","time":"17:23"}];
var lab_PLT = 
[];

var lab_Na = 
[{"value":143,"date":"2016-7-1","time":"17:23"}];
var lab_K = 
[{"value":2.6,"date":"2016-7-1","time":"17:23"}];
//free calcium(Ca++)，不是total Ca
var lab_Ca = 
[{"value":0.91,"date":"2016-7-1","time":"17:23"}];
var lab_Mg = 
[{"value":2.2,"date":"2016-7-5","time":"17:23"}];
var lab_P = 
[{"value":5.5,"date":"2016-7-1","time":"17:23"}];

var lab_CRP = 
[{"value":3.2,"date":"2016-7-1","time":"17:23"}];

var lab_PCT =
[{"value":0.2,"date":"2016-7-1","time":"17:23"}];

var lab_BUN=
[{"value":19,"date":"2016-7-1","time":"17:23"}];
var lab_Cr=
[{"value":0.4,"date":"2016-7-1","time":"17:23"}];

var lab_ALT=
[{"value":20,"date":"2016-7-1","time":"17:23"}];
var lab_AST=
[{"value":50,"date":"2016-7-1","time":"17:23"}];

//TBIL = 生化檢驗的Tbil
//MicroBil = 兒科的Bil(足跟血)
//TCB = 兒科的TCB(經皮測量)
//前端會自動顯示最近的資料
var lab_TBIL=
[{"value":18,"date":"2016-7-1","time":"17:23"}];
var lab_MICROBIL=
[{"value":22,"date":"2016-7-3","time":"17:23"}];
var lab_TCB=
[{"value":24,"date":"2016-7-2","time":"17:23"}];
var lab_DBIL=
[{"value":0.3,"date":"2016-7-1","time":"17:23"}];

var lab_ALKP = 
[{"value":154,"date":"2016-7-1","time":"17:23"}];
var lab_TotalCa = 
[{"value":9.7,"date":"2016-7-1","time":"17:23"}];
var lab_LDH =
[];

var lab_Iron = 
[{"value":12,"date":"2016-7-1","time":"17:23"}];
var lab_TIBC = 
[{"value":100,"date":"2016-7-1","time":"17:23"}];
var lab_Ferritin = 
[];

//傳入藥物清單(直接從用藥內容把整個陣列複製下來) //(查詢currentDate算起往前推一個月資料 (藥品開始日))
/*
name=學名, productName=商品名, dosage=劑量, unit=單位, route=途徑, frequency=頻次,
startDate=開始日, endDate=結束日, status=狀態, totalAmount=總量, selfPaid=自購, info=說明(把說明內容string全部載入)

(**注意有些藥物名稱內會出現雙引號)
json格式：{"name":"","productName":"","dosage":"","unit":"","route":"","frequency":"","startDate":"",
	"endDate":"","status":"","totalAmount":"","selfPaid":"","info":""},
*/
var drug_Array =
[
	{"name":"Ampicillin sod for inj 500 mg",'productName':'Ampolin inj 500 mg "YF"',"dosage":"270","unit":"mg","route":"IVA",
	"frequency":"QD","startDate":"2016-11-07-16.44",
	"endDate":"2016-12-19-12:00","status":"使用中","totalAmount":"21","selfPaid":"N","info":"test string"},

	{"name":"Ampicillin sod for inj 500 mg",'productName':'Ampolin inj 500 mg "YF"',"dosage":"270","unit":"mg","route":"IVA",
	"frequency":"Q6H","startDate":"2016-11-13-16.44",
	"endDate":"2016-11-20-12:00","status":"使用中","totalAmount":"21","selfPaid":"N","info":"test string"},

	{"name":"unasyn sod for inj 500 mg",'productName':'unasyn inj 500 mg "YF"',"dosage":"270","unit":"mg","route":"IVA",
	"frequency":"Q6H","startDate":"2016-11-18-16.44",
	"endDate":"2016-12-19-12:00","status":"使用中","totalAmount":"21","selfPaid":"N","info":"test string"},

	{"name":"claforan",'productName':'claforan inj 500 mg "YF"',"dosage":"270","unit":"mg","route":"IVA",
	"frequency":"ST","startDate":"2016-11-18-16.44",
	"endDate":"2016-12-19-12:00","status":"使用中","totalAmount":"21","selfPaid":"N","info":"test string"},

	{"name":"vancomycin",'productName':'vancomycin inj 500 mg "YF"',"dosage":"270","unit":"mg","route":"IVA",
	"frequency":"ST","startDate":"2016-11-07-16.44",
	"endDate":"2016-12-19-12:00","status":"使用中","totalAmount":"21","selfPaid":"N","info":"test string"},

	{"name":"not abx test",'productName':'not abx test',"dosage":"270","unit":"mg","route":"IVA",
	"frequency":"Q8H","startDate":"2016-11-04-17.45",
	"endDate":"2016-11-29-12:00","status":"使用中","totalAmount":"21","selfPaid":"N","info":"test string"},

	{"name":"Ampicillin sod for inj 500 mg",'productName':'Ampolin inj 500 mg "YF"',"dosage":"270","unit":"mg","route":"IVA",
	"frequency":"Q8H","startDate":"2016-11-04-17.45",
	"endDate":"2016-11-29-12:00","status":"使用中","totalAmount":"21","selfPaid":"N","info":"test string"}
];

