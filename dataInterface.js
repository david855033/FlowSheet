//Header

//病房號及床號(string)
var wardName = "NICU - 1";  					

//姓名(string)
var patientName = "郝早生之女"; 				

//主治醫師(string)
var doctorName = "曹大大"; 						

//病歷號(string)
var chartNumber = "39482362";					

//住院日期(date)
var admissionDate = new Date("2016-07-01");		

//生日(date)
var birthDate = new Date("2016-06-02");			

//頁面當前時間(date)
var currentDate = new Date("2016-07-01");		

//出生時候週數(cGA)(int)
var gestationalAgeWeek=36;						
//出生時候週數(cGA)之日數部分(int)
var gestationalAgeDate=1;						

//今日體重(g),若無資料則傳入空字串(int)
var bodyWeight = 1300;							

//昨天體重(g),若無資料則傳入空字串(int)
var bodyWeightLastDate = 1500;			

//最近一筆體重(g),若沒有今日體重，則查詢最近一筆體重傳入(int)
var mostRecentBodyWeight=1400;					
//最近一筆體重日期(g),若沒有今日體重，則查詢最近一筆體重傳入(date)
var mostRecentBodyWeightDate=new Date("2016-06-30");		

//出生體重(g)(int)
var birthBodyWeight = 1212;

//飲食醫囑(尚未確定格式，預計從醫囑系統內抓取)
var dietType="BMF+SSC24";
var dietAmount="22ml q3h";

//呼吸器設定(尚未確定格式，要等RT電子表單完成)
var currentVentilatorType="IMV/OETT";
var currentVentilatorSetting="FiO2:21%, P=30/5";

//TPR (**此部分皆為陣列，陣列元素為時間(string,"hh:mm")+數值*)
//保溫箱溫度
var incubatorTemp =
[
{"time":"0:00","value":29.5},
{"time":"1:00","value":29.5},
{"time":"2:00","value":29.5},
{"time":"3:00","value":29.5},
{"time":"4:00","value":29.5},
{"time":"5:00","value":29.5},
{"time":"6:00","value":29.5},
{"time":"7:00","value":29.5},
{"time":"7:20","value":29.5},
{"time":"7:40","value":29.5},
{"time":"8:00","value":29.5},
{"time":"9:00","value":29.5},
]

var incubatorHumidity =
 [70,70,70,70,65,65,65];

var bodyTemperature =
 [37,35.5,36.5,36.5,38,39,38];
var bodyTemperatureWarn_U = 38;
var bodyTemperatureWarn_L = 36;

var HeartRate =
 [120,140,120,133,153,180,93];
var HeartRateWarn_U;
var HeartRateWarn_L;

var  RespRate=
 [44,43,46,99,34,45,18];
var RespRateWarn_U;
var RespRateWarn_L;

var Saturation =
 [92,93,94,95,88,90,70];
var SaturationWarn_U;
var SaturationWarn_L; 

var SBP =
 [65,70,55,66,56,45,33,,50,60];
var SBP_U;
var SBP_L=55; 

var DBP =
[46,45,34,32,44,33,21,39,,20];
var DBP_U;
var DBP_L; 
 
var MAPWarn_U;
var MAPWarn_L;

//Event
eventTime = ["11:00","12:00", "13:34","14:00","15:20","19:30"];
eventContent = ["Apnea Sat:70%","Apnea Sat:70%","Bradycardia HR:65","sent to OR","CPR","test long event test long event test long event test long event test long event"];
eventWarn = [0,0,0,0,1,0];

//Apnea-Bradycardia
var ABeventSelfRecovered=
[1,0,0,0,0,2,0]

 var ABeventManaged=
 [0,0,0,0,0,0,3,2,1];

//IO
var peripheralRoute=["IV","IV"];
var peripheralName=["TPN","Mepem"];
var peripheralAmount=[[1,1,1,1,1],[,,,,4]];

var alineRoute=[];
var alineName=[];
var alineAmount=[];

var centralRoute=["CVC","PCVL","UV","PD"];
var centralName=["Dopa","S.Lipid","Albumin","PD solution"];
var centralAmount=[[0.2,0,0.2,0.2,0.2,0.1,0,0],[1,1,1,1,1],[0,0,0,0,0,10,10,10,10],[30]];

var transfusionNames=["pRBC","FFP","AlienBLood"];
var transfusionAmount=[[0,0,0,0,0,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,12,12,12,12],[100,100,100]];

var POAmount=[0,0,15,0,0,30,0,0,25];
var NGAmount=[0,0,3,0,0,30,0,0,25];
var RVAmount=[0,0,5,0,0,0,0,0,15];
var RVCharacter=[0,0,"半消",0,0,0,0,0,"黃褐"];

var NGDrain=[0,0,0,15];

var drainRoute=["Pigtail","JP","CVVH","PD"];
var drainName=["右胸","左腹","",""];
var drainAmount=[[45,,,,,,,20,,,,,,,],[15,,,,,,,],[5,5,5,5,5,5,5,5,5],[0,1,1,1]];

var urine =[,,,,30,,,,22,,,,,20,,90,90,];
var stool = [,,,,,"MYP",,,,,,];
var enema =[,,,,"S",,,,"E",,,];

//vent
ventilatorTime = 
["10:00",
"15:00", 
"20:00",
"21:00",
"23:00",
"23:30"];
ventilatorMode =
["IMV/OETT",
"IMV/OETT",
"IMV/OETT",
"HFOV/OETT",
"ECMO",
"ECMO|HFOV/OETT"];

ventilatorSetting = 
["FiO2:40%, PIP/PEEP:20/5mmHg, Rate:20/min",
"FiO2:40%, PIP/PEEP:20/5mmHg, Rate:20/min",
"FiO2:40%, PIP/PEEP:20/5mmHg, Rate:20/min",
"FiO2:60%, MAP:25mmHg, AMP: 10mmHg, Freq:10Hz",
"FiO2:100%, Flow: 0.6L/min, 2000RPM",
"FiO2:100%, Flow: 0.6L/min, 2000RPM|FiO2:60%, MAP:25mmHg, AMP: 10mmHg, Freq:10Hz"
];

//ABG
ABGTime = 
["10:00","11:00","12:00","13:00","14:00","20:00"];
ABGData =
[
[7.25,60,40,24,-3,"50%",13.1,140,3.5,1.01,2.03,20,0.34],
[7.25,60,40,24,-3,"50%"],
[7.25,60,40,24,-3,"50%"],
[7.25,60,40,24,-3,"50%"],
[7.25,60,40,24,-3,"50%"],
[7.25,60,40,24,-3,"50%",13.1,140,3.5,1.01,2.03,20,0.34]
];

//Lab
lab_glucose=45;
lab_glucose_time = new Date("2016-7-1 17:23");

lab_WBC=20300;
lab_Seg="43%";
lab_WBCTime = new Date("2016-7-1 17:23");

lab_Hgb=7.7;
lab_HgbTime= new Date("2016-7-1 17:23");

lab_PLT = 213000;
lab_PLTTime = new Date("2016-7-1 17:23");

lab_Na = 143;
lab_NaTime  = new Date("2016-7-1 17:23");
lab_K = 2.6;
lab_KTime  = new Date("2016-7-1 17:23");
lab_Ca = 0.91;
lab_CaTime  = new Date("2016-7-1 17:23");
lab_Mg = 2.2;
lab_MgTime  = new Date("2016-7-1 17:23");
lab_P = 5.5;
lab_PTime = new Date("2016-7-1 17:23");

lab_CRP = 3.2;
lab_CRPTime = new Date("2016-7-1 17:23");

lab_PCT = "";
lab_PCTTime = "";

CurrentABX = ["Vanco","Mepem","Abx1"];
CurrentDose = ["20mg qd","20mg q12h", "test dosage"];

lab_BUN=14
lab_BUNTime = new Date("2016-7-5 17:23");
lab_Cr=0.4;
lab_CrTime = new Date("2016-7-4 17:23");

lab_ALT=20
lab_ALTTime = new Date("2016-7-5 17:23");
lab_AST=50;
lab_ASTTime = new Date("2016-7-4 17:23");

lab_TBIL=18;
lab_TBILTime = new Date("2016-7-5 17:23");
lab_MICROBIL=22;
lab_MICROBILTime = new Date("2016-7-1 17:23");
lab_TCB=24;
lab_TCBTime = new Date("2016-7-1 17:23");
lab_DBIL=0.3;
lab_DBILTime = new Date("2016-7-4 17:23");

lab_ALKP = 154;
lab_ALKPTime = new Date("2016-7-4 17:23");
lab_TotalCa = 9.7;
lab_TotalCaTime = new Date("2016-7-2 17:23");
lab_LDH = "";
lab_LDHTime = "";

lab_Iron = 12;
lab_IronTime = new Date("2016-7-4 17:23");
lab_TIBC = 100;
lab_TIBCTime = new Date("2016-7-2 17:23");
lab_Ferritin = "";
lab_FerritinTime = "";