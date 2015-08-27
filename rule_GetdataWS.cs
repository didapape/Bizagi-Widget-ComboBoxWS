//_11:Variables Declaration
var sXMLReg='null'; //string
//__11
//_1:Expression
if(sXMLReg=="")
	sXMLReg="<Registros> <Registro> <Code>1</Code> <Name>REGISTRO 1</Name> </Registro> <Registro> <Code>2</Code> <Name>REGISTRO 2</Name> </Registro> <Registro> <Code>3</Code> <Name>REGISTRO 3</Name> </Registro> <Registro> <Code>4</Code> <Name>REGISTRO 4</Name> </Registro> <Registro> <Code>5</Code> <Name>REGISTRO 5</Name> </Registro> <Registro> <Code>6</Code> <Name>REGISTRO 6</Name> </Registro> </Registros>";
CHelper.trace("WidgetDDL",sXMLReg);
//__1
//_6:Web Service
sXMLReg = CWebService.invokeWS(/*_1*/"http://localhost/Bizagi.WidgetWS/WidgetWS.asmx"/*_*/,
/*_1*/"GetDataToDropDown"/*_*/,
/*_1*/[""]/*_*/);
//__6

//_1:Expression
//var sXMLReg="<Registros> <Registro> <Code>1</Code> <Name>REGISTRO 1</Name> </Registro> <Registro> <Code>2</Code> <Name>REGISTRO 2</Name> </Registro> <Registro> <Code>3</Code> <Name>REGISTRO 3</Name> </Registro> <Registro> <Code>4</Code> <Name>REGISTRO 4</Name> </Registro> <Registro> <Code>5</Code> <Name>REGISTRO 5</Name> </Registro> <Registro> <Code>6</Code> <Name>REGISTRO 6</Name> </Registro> </Registros>";
CHelper.trace("WidgetDDL",sXMLReg);
sXMLReg;
//__1