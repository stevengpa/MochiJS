/*========================================
=            FORMAT PROTOTYPE            =
========================================*/

Object.prototype.addMiles = function()
{
	try
	{
		var value = this.toString().trim();

	    value += '';
	    x = value.split('.');
	    x1 = x[0];
	    x2 = x.length > 1 ? '.' + x[1] : '';
	    var rgx = /(\d+)(\d{3})/;
	    while (rgx.test(x1)) {
	        x1 = x1.replace(rgx, '$1' + ',' + '$2');
	    }
	    return x1 + x2;
	}
	catch (err)
	{
		return null;
	}
};

Object.prototype.removeMiles = function()
{
	try
	{
		var value = this.toString().trim();
		value = parseFloat(value.replace(/,/g, ''));

		return value;
	}
	catch(err)
	{
		return null;
	}
};

/*-----  End of FORMAT PROTOTYPE  ------*/

