var $ = function (id) 
{
    return document.getElementById(id);
};
	
window.onload = function () 
{
	$("convert").onclick = convertClick;
	$("from").focus();	//measurment you want to convert from
};

   		
var convertClick = function () 
{
	var from = parseFloat($("from").value);	//measurment you want to convert from
	var unitFrom = $("unitFrom").value;		//unit to measure you want to convert from
	var unitTo = $("unitTo").value;			//unit of measure you want to convert to
	
	if(isNaN(from) || from <= 0)
	{
		alert("Amount must be a valid number greater than zero.");
	}
	else if(unitFrom == null)
	{
		alert("You must select a unit of measure to convert from.");
	}
	else if(unitTo == null)
	{
		alert("You must select a unit of measure to convert to.");
	}
	else 
	{
		//search for the appropirate function to call based on the unit of measure
		//that the user wants to convert to and from
		//really if last else if should just be else...but keep for testing and then take out
		if(unitFrom.localeCompare("farenheit"))
		{
			if(unitTo.localeCompare("celcius"))
			{
				far2cel(from);
			}
			else if(unitTo.localeCompare("kelvin"))
			{
				far2kel(from);
			}
		}
		else if(unitFrom.localeCompare("celcius"))
		{
			if(unitTo.localeCompare("kelvin"))
			{
				cel2kel(from);
			}
			else if(unitTo.localeCompare("farenheit"))
			{
				cel2far(from);
			}
		}
		else if(unitFrom.localeCompare("kelvin"))
		{
			if(unitTo.localeCompare("farenheit"))
			{
				kel2far(from);
			}
			else if(unitTo.localeCompare("celcius"))
			{
				kel2cel(from);
			}
		}
	} 
};

//convert from farenheit to celcius
var far2cel = function(from)
{
	 var celcius = (from - 32) * (5/9);
	 setValue(celcius);
};

//convert from farenheit to kelvin
var far2kel = function(from)
{
	 var kelvin = (from + 459.67) * (5/9);
	 setValue(kelvin);
};

//convert from celcius to kelvin
var cel2kel = function(from)
{
	 var kelvin = from + 273.15;
	 setValue(kelvin); 
};

//convert from celcius to farenheit
var cel2far = function(from)
{
	 var farenheit = from * (9/5) + 32;
	 setValue(farenheit); 
};

//convert from kelvin to farenheit
var kel2far = function(from)
{
	 var farenheit = from * (9/5) - 459.67;
	 setValue(farenheit); 
};

//convert from kelvin to celcius
var kel2cel = function(from)
{
	 var celcius = from - 273.15;
	 setValue(celcius); 
};

//set the value that is passed in to be the converted value
//the value passed in is based on the calculation
var setValue = function(num)
{
	$("converted_value").value = num.toFixed();		
};

