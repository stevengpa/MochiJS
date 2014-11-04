/*========================================
=             IS PROTOTYPE                =
========================================*/

Object.prototype.isNumber = function()
{
	try
	{
		var value = this.toString();

		value = value.replace(",","");

	    if (parseFloat(value)!= value)
	    	return false;
	    else
	    	return true;
	}
	catch (err)
	{
		return false;
	}
};

Object.prototype.isBlank = function()
{
	try
	{
		var value = this.toString().trim();

		// Validate is null
		if (value == null) return true;

		// Validate by length
	    if (value.length == 0)
	    	return true;
	    else
	    	return false;
	}
	catch(err)
	{
		return false;
	}
};

Object.prototype.isDate = function(dateFormat)
{
	try
	{
		var value = this.toString().trim();

		var dateFormat = dateFormat || 'mm/dd/yyyy', // default format

		  delimiter = /[^mdy]/.exec(dateFormat)[0],
		  theFormat = dateFormat.split(delimiter),
		  theDate = value.split(delimiter),

		  isDate = function (date, format) {
		    var m, d, y
		    for (var i = 0, len = format.length; i < len; i++) {
		      if (/m/.test(format[i])) m = date[i]
		      if (/d/.test(format[i])) d = date[i]
		      if (/y/.test(format[i])) y = date[i]
		    }
		    return (
		      m > 0 && m < 13 &&
		      y && y.length === 4 &&
		      d > 0 && d <= (new Date(y, m, 0)).getDate()
		    )
		  }

		  return isDate(theDate, theFormat)
  	}
  	catch (err)
  	{
  		return false;
  	}
};

Object.prototype.isEmail = function() 
{ 
	try
	{
		var value = this.toString().trim();
		
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(value);
	}
	catch (err)
	{
		if (bln_msg) alert(err.message);
		return false;
	}
} 
/*-------  End of IS PROTOTYPE  --------*/

