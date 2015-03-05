function ApplicationWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});

    var label = Titanium.UI.createLabel({
        color:'#999',
        text:'',
        font:{
            fontSize:20,
            fontFamily:'Helvetica Neue'
        },
        top:80,
        textAlign:'center',
        width:'auto'
    });
    
    self.add(label);

	/*var button = Ti.UI.createButton({
		height:44,
		width:200,
		title:L('openWindow'),
		top:200
	});
	self.add(button);

	button.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		self.containingTab.open(Ti.UI.createWindow({
			title: L('newWindow'),
			backgroundColor: 'white'
		}));
	});*/

	return self;
};

module.exports = ApplicationWindow;
