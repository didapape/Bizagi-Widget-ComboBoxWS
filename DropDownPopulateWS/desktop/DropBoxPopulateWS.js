/*
Autor:Diego David Pandales

Descripcion:Este widget  permite poblar un combo con datos provinientes de una regla que puede consumer un webservices 
y retorna un xml con los registros a mostrar
*/
bizagi.rendering.basicUserField.extend("bizagi.rendering.DropBoxPopulateWS",{}, {

	/*************************************************************/
	/* methods to be overriden by the implementations            */
	/*************************************************************/
	getEditableControl: function () {
		return this.getGenericControl();
	},
	getReadonlyControl: function () {
		var self = this;
		var initvalue = self.value || "";
		var control = self.getControl();
		var properties = self.properties;
		var displayName  = properties.TitleToShow || "";

		self.myinput = $("<div>");


		var myOptions=$("<P>"+ initvalue+"</P>");

		self.myinput.append(myOptions);

		return self.myinput;

	},
	
	getData: function() {
	    var self = this;
	    
	    var properties = self.properties;
	    
	    var defer = $.Deferred();
        if (!properties.designMode) {
            //Esperar la ejecucion asincrona y crear el campo select    
            self.getPropertyValue("IdRule").done(function(data) {
                defer.resolve(data);
            });
        } else {
			var data = "<Registros> <Registro> <Code>1</Code> <Name>DATO 1</Name> </Registro> <Registro> <Code>2</Code> <Name>DATO 2</Name> </Registro> <Registro> <Code>3</Code> <Name>DATO 3</Name> </Registro> <Registro> <Code>4</Code> <Name>DATO 4</Name> </Registro> <Registro> <Code>5</Code> <Name>DATO 5</Name> </Registro> <Registro> <Code>6</Code> <Name>DATO 6</Name> </Registro> </Registros>";
			var result = {};
			result.value = data;
			result.type = "success";
			defer.resolve(result);
        }
        return defer.promise();
	},
	
	getGenericControl: function () {

        //standard initialization
        var self = this;
        var initvalue = self.value || "";

    	var control = self.getControl();
    	var properties = self.properties;
    	var extendedData = self.extendedData;

        self.myinput = $("<select id='selectorBizWG' />");

        self.myinput.addClass("ui-selectmenu");
        //Esperar la ejecucion asincrona y crear el campo select    
        self.getData().done(function(data) {
            var xml_str;
            console.log(data);
            if (data && data["type"] == "success") {
                xml_str=data.value.toString() ; //Obtener dato desde la regla
            } else if (!data["type"]) {
                xml_str = data.substring("[IdRule]: ".length);
            }
        
            var docXML=null;
    
    
    		try{
    			docXML=$.parseXML(xml_str);
    		}
    		catch(exc){
    			console.log("Paso 1");
    		}
    
    		try {
               docXML=$.parseXML(xml_str.replace("[IdRule]: ",""));  //Para funcinoar con simulador 
           } catch(exc) {
           	console.log("Paso 2");
           }
    
           //Obtener la lista de para Codigo-Nombre del xml devuelto por ws
           var fieldName=self.properties.FieldName;
           var fieldcode=self.properties.FieldCode;
           var x=docXML.getElementsByTagName(fieldName); 
           var y=docXML.getElementsByTagName(fieldcode); 
           //Generar options para el drop down list
           for(i=0;i<x.length;i++)
           {
               var option = $("<option value='" + y[i].childNodes[0].nodeValue + "'>"  + x[i].childNodes[0].nodeValue + "</option>");
               option.appendTo(self.myinput);
           }
       });

        return self.myinput;

    },
    
    getEditableValue: function() {
    	var self = this;
    	var val = self.myinput.val();
    	return val;
    	
    },
    
    setEditableValue: function(value) {
    	var self = this;
    	self.myinput.val(value);
    }

});

