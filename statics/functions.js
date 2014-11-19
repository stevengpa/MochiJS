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
		return '';
	}
};

/*-----  End of GENERATOR PROTOTYPE  ------*/

/*====================================
=            Set Cache ID            =
====================================*/

function setCacheID(objData)
{
	try
	{
		for (key in objData) {
			objData[key]["cid"] = genID() + key.toString();
		};

		return objData;
	}
	catch(err) { return err; }
}

/*-----  End of Set Cache ID  ------*/

/*========================================
=            Get Cache Object            =
========================================*/

function getCacheObject(cID, objData)
{
	try
	{
		return Enumerable.From(objData).Where(
												function (x) { 
													return x.cid.toString() == cID.toString() 
												})
										.Select()
										.ToArray()[0];
	}
	catch(err) { return err; }
}

/*-----  End of Get Cache Object  ------*/

