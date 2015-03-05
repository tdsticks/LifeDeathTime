function ApplicationWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});

    var todays_date_label_title = Titanium.UI.createLabel({
        color:'#000',
        text:'Todays date and time',
        font:{
            fontSize:20,
            fontFamily:'Helvetica Neue',
            fontWeight: 'bold'
        },
        top:50,
        textAlign:'center',
        width:'auto'
    });
    var todays_date_label = Titanium.UI.createLabel({
        color:'#999',
        text:'',
        font:{
            fontSize:26,
            fontFamily:'Helvetica Neue'
        },
        top:80,
        textAlign:'center',
        width:'auto'
    });


    var birth_date_label_title = Titanium.UI.createLabel({
        color:'#000',
        text:'Birth date',
        font:{
            fontSize:20,
            fontFamily:'Helvetica Neue',
            fontWeight: 'bold'
        },
        top:150,
        textAlign:'center',
        width:'auto'
    });
        
    var birth_date_label = Titanium.UI.createLabel({
        color:'#999',
        text:'',
        font:{
            fontSize:26,
            fontFamily:'Helvetica Neue'
        },
        top:180,
        textAlign:'center',
        width:'auto'
    });
    
    
    var existence_date_label_title = Titanium.UI.createLabel({
        color:'#000',
        text:'Time on earth',
        font:{
            fontSize:20,
            fontFamily:'Helvetica Neue',
            fontWeight: 'bold'
        },
        top:250,
        textAlign:'center',
        width:'auto'
    });
    var existence_date_label = Titanium.UI.createLabel({
        color:'#999',
        text:'',
        font:{
            fontSize:26,
            fontFamily:'Helvetica Neue'
        },
        top:280,
        textAlign:'center',
        width:'auto'
    });
    
   
    self.add(todays_date_label_title);
    self.add(todays_date_label);
    self.add(birth_date_label_title);
    self.add(birth_date_label);
    self.add(existence_date_label_title);
    self.add(existence_date_label);


    //
    // Calculate the date and time
    //
    var datetime_counter = function ( date ) {
        //console.log(date, display);

        var today = new Date();

        var today_milli = today.getTime();
        //console.log("today_milli", today_milli);

        var date_milli = date.getTime();
        //console.log("date_milli", date_milli);


        var get_month = today.getMonth();
        //console.log(get_month);

        var get_year = today.getFullYear();
        //console.log(get_year);

        var get_seconds = today.getSeconds();


        //var month_name            = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        var month_num = [31,28,31,30,31,30,31,31,30,31,30,31];

        //
        // Factor for leap years: 2016, 2020, 2024...
        var calc_leap_year = get_year % 4;

        if (calc_leap_year === 0) {
            month_num[1] = 29;
        }
        //console.log(" month_num",  month_num );

        //
        // Calculate the average number of days in month for year
        var add_month_num = 0;
        for (i=0; i<month_num.length; i++) {
            add_month_num += month_num[i];
        }
        //console.log("add_month_num", add_month_num);

        //var avg_month_num     = add_month_num / month_num.length; //
        var avg_month_num = 30.4375;
        //console.log("avg_month_num", avg_month_num);

        var cur_month_num = month_num[get_month];
        //console.log(" cur_month_num",  cur_month_num );

        var msPerDay = 24 * 60 * 60 * 1000;
        var msPerMonth = avg_month_num * msPerDay;
        var msPerYear = 12 * msPerMonth;



        //
        // Start calculating time
        //

        var time_existing = ( today_milli - date_milli );
        //console.log("time_existing", time_existing);

        var calc_years_float = time_existing / ( 1000 * 60 * 60 * 24 * 365.25 );
        calc_years_string = calc_years_float.toString();
        calc_years = calc_years_string.substr(0, 4);
        //console.log(calc_years);

        var calc_months_float = time_existing / ( 1000 * 60 * 60 * 24 * avg_month_num);
        calc_months_string = calc_months_float.toString();
        months_index = calc_months_string.indexOf(".");
        calc_months = calc_months_string.substr(0, months_index + 2);
        //console.log(calc_months);

        var calc_days = (time_existing / ( 1000 * 60 * 60 * 24 )).toString();
        days_index = calc_days.indexOf(".");
        calc_days = calc_days.substr(0, days_index + 2);
        //console.log(calc_days);

        var calc_hours = (time_existing / ( 1000 * 60 * 60 )).toString();
        hours_index = calc_hours.indexOf(".");
        calc_hours = calc_hours.substr(0, hours_index + 2);
        //console.log(calc_hours);

        var calc_minutes = (time_existing / ( 1000 * 60 )).toString();
        minutes_index = calc_minutes.indexOf(".");
        calc_minutes = calc_minutes.substr(0, minutes_index + 2);
        //console.log(calc_minutes);

        var calc_seconds = parseInt(time_existing / ( 1000 ));
        //console.log("calc_seconds",calc_seconds);



        //
        // Time in existence from birthday
        //

        var years_existing = Math.floor(calc_years_float);


        var months_existing_calc = ( calc_years_float - years_existing ) * 12;
        //console.log(months_existing_calc);

        var months_existing = Math.floor(months_existing_calc);
        //console.log(months_existing);


        var days_existing_calc = ( months_existing_calc - months_existing ) * cur_month_num;
        //console.log(days_existing_calc);

        var days_existing = Math.floor(days_existing_calc);
        //console.log(days_existing);


        var hours_existing_calc = ( days_existing_calc - days_existing ) * 60;
        //console.log(hours_existing_calc);

        var hours_existing = Math.floor(hours_existing_calc);
        //console.log(hours_existing);


        var mins_existing_calc = ( hours_existing_calc - hours_existing ) * 60;
        //console.log("mins_existing_calc", mins_existing_calc);

        var mins_existing = Math.floor(mins_existing_calc);
        //console.log("mins_existing", mins_existing);
        
        
        todays_date_label.text = today.toLocaleDateString() + " " + today.toLocaleTimeString();
        
        birth_date_label.text = date.toLocaleDateString() + " " + date.toLocaleTimeString();

        existence_date_label.text = years_existing+" years "+months_existing+" months "+days_existing+" days "+hours_existing+" hours "+mins_existing+" minutes "+get_seconds+" seconds ";  
  
    
    };

    var birth_day = new Date("March 20, 1979, 07:49:00");

    var system_timer = setInterval(
        function() { 
            datetime_counter( birth_day );
        }, 1000
    );


	/*
    var button = Ti.UI.createButton({
		height:44,
		width:200,
		title:L('openWindow'),
		top:100
	});
	self.add(button);

	button.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		self.containingTab.open(Ti.UI.createWindow({
			title: L('newWindow'),
			backgroundColor: 'white'
		}));
	});
	*/

	return self;
};

module.exports = ApplicationWindow;
