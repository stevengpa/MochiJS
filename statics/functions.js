/*===========================================
=            GENERATOR PROTOTYPE            =
===========================================*/

function genID()
{
	try
	{
		var now = new Date();

		var components = [
		    now.getFullYear(),
		    (now.getMonth() + 1) < 9 ? '0' + now.getMonth().toString() : now.getMonth().toString(),
		    (now.getDate() < 9) ? '0' + now.getDate().toString() : now.getDate().toString(),
		    now.getHours(),
		    now.getMinutes(),
		    now.getSeconds(),
		    now.getMilliseconds()
		];

		return components.join("");
	}
	catch(err)
	{
		console.log(err);
		return '';
	}
};

/*-----  End of GENERATOR PROTOTYPE  ------*/

