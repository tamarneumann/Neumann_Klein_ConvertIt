var convertClick = function () 
{
	var from = document.getElementById("numFrom").value;		//measurment you want to convert from
	
	if(isNaN(from) || from <= 0)
	{
		alert("Amount must be a valid number greater than zero.");
	}
	else if(dropFrom == null)
	{
		alert("You must select a unit of measure to convert from.");
	}
	else if(dropTo == null)
	{
		alert("You must select a unit of measure to convert to.");
	}
	else 
	{
		//search for the appropirate function to call based on the unit of measure
		//that the user wants to convert to and from
		if(dropFrom == "lb")
		{
			if(dropTo == "kg")
			{
				lb2kg(from);
			}
			else if(dropTo == "ton")
			{
				lb2ton(from);
			}
			else if(dropTo == "gram")
			{
				lb2gram(from);
			}
			else if(dropTo == "ounce")
			{
				lb2ounce(from);
			}
		}
		else if(dropFrom == "kg")
		{
			if(dropTo == "lb")
			{
				kg2lb(from);
			}
			else if(dropTo == "ton")
			{
				kg2ton(from);
			}
			else if(dropTo == "gram")
			{
				kg2gram(from);
			}
			else if(dropTo == "ounce")
			{
				kg2ounce(from);
			}
		}
		else if(dropFrom == "ton")
		{
			if(dropTo == "lb")
			{
				ton2lb(from);
			}
			else if(dropTo == "kg")
			{
				ton2kg(from);
			}
			else if(dropTo == "gram")
			{
				ton2gram(from);
			}
			else if(dropTo == "ounce")
			{
				ton2ounce(from);
			}
		}
		else if(dropFrom == "gram")
		{
			if(dropTo == "lb")
			{
				gram2lb(from);
			}
			else if(dropTo == "kg")
			{
				gram2kg(from);
			}
			else if(dropTo == "ton")
			{
				gram2ton(from);
			}
			else if(dropTo == "ounce")
			{
				gram2ounce(from);
			}
		}
		else if(dropFrom == "ounce")
		{
			if(dropTo == "lb")
			{
				ounce2lb(from);
			}
			else if(dropTo == "kg")
			{
				ounce2kg(from);
			}
			else if(dropTo == "ton")
			{
				ounce2ton(from);
			}
			else if(dropTo == "gram")
			{
				ounce2gram(from);
			}
		}
	} 
};

//convert from pounds to kg
var lb2kg = function(from)
{
	 var kg = parseFloat(from) * 0.45359237;
	 setValue(kg);
};

//convert from pounds to ton
var lb2ton = function(from)
{
	 var ton = parseFloat(from) / 2204.6226199999;
	 setValue(ton);
};

//convert from pounds to gram
var lb2gram = function(from)
{
	 var gram = parseFloat(from) / 0.0022046;
	 setValue(gram);
};

//convert from pounds to ounce
var lb2ounce = function(from)
{
	 var oz = parseFloat(from) * 16;
	 setValue(oz);
};

//convert from kg to pounds
var kg2lb = function(from)
{
	 var lb = parseFloat(from) / 0.45359237;
	 setValue(lb);
};

//convert from kg to ton (metric)
var kg2ton = function(from)
{
	 var ton = parseFloat(from) / 1000;
	 setValue(ton);
};

//convert from kg to gram
var kg2gram = function(from)
{
	 var gram = parseFloat(from) * 1000;
	 setValue(gram);
};

//convert from kg to oz
var kg2ounce = function(from)
{
	 var oz = parseFloat(from) / 0.02834952;
	 setValue(oz);
};

//convert from (metric) ton to lb
var ton2lb = function(from)
{
	 var lb = parseFloat(from) * 2204.6226199999;
	 setValue(lb);
};

//convert from (metric) ton to kg
var ton2kg = function(from)
{
	 var kg = parseFloat(from) * 1000;
	 setValue(kg);
};

//convert from (metric) ton to gram
var ton2gram = function(from)
{
	 var gram = parseFloat(from) * 1000000;
	 setValue(gram);
};

//convert from (metric) ton to oz
var ton2ounce = function(from)
{
	 var oz = parseFloat(from) * 35273.9619;
	 setValue(oz);
};

//convert from gram to lb
var gram2lb = function(from)
{
	 var lb = parseFloat(from) * 0.0022046;
	 setValue(lb);
};

//convert from gram to kg
var gram2kg = function(from)
{
	 var kg = parseFloat(from) / 1000;
	 setValue(kg);
};

//convert from gram to (metric) ton 
var gram2ton = function(from)
{
	 var ton = parseFloat(from) / 1000000;
	 setValue(ton);
};

//convert from gram to ounce 
var gram2ounce = function(from)
{
	 var ounce = parseFloat(from) / 28.34952;
	 setValue(ounce);
};

//convert from ounces to pounds
var ounce2lb = function(from)
{
	 var lb = parseFloat(from) / 16;
	 setValue(lb);
};

//convert from oz to kg
var ounce2kg = function(from)
{
	 var kg = parseFloat(from) * 0.02834952;
	 setValue(kg);
};

//convert from oz to (metric) ton
var ounce2ton = function(from)
{
	 var oz = parseFloat(from) / 35273.9619;
	 setValue(oz);
};

//convert from ounce to gram 
var ounce2gram = function(from)
{
	 var gram = parseFloat(from) * 28.34952;
	 setValue(gram);
};

//set the value that is passed in to be the converted value
//the value passed in is based on the calculation
var setValue = function(num)
{
	document.getElementById("converted_value").innerHTML = num.toFixed(4);
};

