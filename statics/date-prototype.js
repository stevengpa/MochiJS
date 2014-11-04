/*======================================
=            DATE PROTOTYPE            =
======================================*/

Date.prototype.monthName = function(language) {
	var monthName = "";
	language = language || 'en';

	switch(language.toLowerCase()) 
	{
		case 'en':
			monthName = ['January','February','March','April','May','June','July', 'August','September','October','November','December'];
			break;
		case 'es':
			monthName = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio', 'Agosto','Setiembre','Octubre','Noviembre','Diciembre'];
			break;
	}
	
	return monthName[this.getMonth()];
};

Date.prototype.dayName = function(language) {
	var dayName = "";
	language = language || 'en';

	switch(language.toLowerCase()) 
	{
		case 'en':
			dayName = ['Sunday','Monday','Tuesday','Wednesday', 'Thursday','Friday','Saturday'];
			break;
		case 'es':
			dayName = ['Domingo','Lunes','Martes','Miércoles', 'Jueves','Viernes','Sábado'];
			break;
	}
	
	return dayName[this.getDay()];
};

/*-----  End of DATE PROTOTYPE  ------*/




