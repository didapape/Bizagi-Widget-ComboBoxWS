# Bizagi Widget - ComboBoxWS 
Bizagi Widget repository utility
#Introduction
 This **Bizagi Widget** allows you to populate a combo box with data obtained using a  bizagi rule,which could consume an external web service.

#Instalation
Download the **DropDownPopulateWS.bwg** file and add it in the bizagi studio of your project like a user control.(Review http://help.bizagi.com/bpmsuite/es/widgets_manualinst.htm)

#Usage
Add  the new control in your form on bizagi studio  and define the parameters below:
* **IdRule**: Rule to execute for Widget, which return string XML with data to show, this string should have the format below (this rule maybe consume a web service to query data):
` <Items>
	<Item>
		<Code>1</Code>
		<Name>Item 1</Name>
	</Item>
	<Item>
		<Code>2</Code>
		<Name>Item 2</Name>
	</Item>
	<Item>
		<Code>3</Code>
		<Name>Item 3</Name>
	</Item>
  </Items>
`
* **Code**: Field in XML to use like "id" on combo box  
* **Name**: Field in XML to use like "name" on combo box
* **Title To Show**: Label to show with combo box

#Support
If you have any suggestions, changes or want to include new features, that's easy... create a fork of this project, perform your changes and send a pull request, we will incorporate your changes in this repo to keep growing the library.
