define([
	'dojo/_base/declare',
	"dijit/_TemplatedMixin",
	'mxui/widget/_WidgetBase'
], function (declare, _WidgetBase, _TemplatedMixin) {
	'use strict';

return declare('DynamicImage.widget.MobileStaticImage', [_WidgetBase, _TemplatedMixin], {
	imageurl : '',
	defaultImage : '',
	alt : '',
	_hasStarted : false,

	startup : function(){
		if (this._hasStarted)
			return;

		this._hasStarted = true;

		this.domNode.appendChild(
			mobile.dom.create("img", {
				src : (this.imageurl != '')?this.imageurl:this.defaultImage,
				alt : this.alt
			})
		);
		
		this.actLoaded(function (){}); // temp. fix for a client issue, should be fixed in 4.4
	}
});
});

require(['DynamicImage/widget/MobileStaticImage']);
