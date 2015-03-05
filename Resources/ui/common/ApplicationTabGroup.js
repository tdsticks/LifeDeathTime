function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();

	//create app tabs
	var win1 = new Window(L('Life Death Time')),
		win2 = new Window(L('Settings'));

	var tab1 = Ti.UI.createTab({
		title: L('Life Death Time'),
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	win1.containingTab = tab1;

	var tab2 = Ti.UI.createTab({
		title: L('Settings'),
		icon: '/images/KS_nav_views.png',
		window: win2
	});
	win2.containingTab = tab2;

	self.addTab(tab1);
	self.addTab(tab2);

	return self;
};

module.exports = ApplicationTabGroup;
