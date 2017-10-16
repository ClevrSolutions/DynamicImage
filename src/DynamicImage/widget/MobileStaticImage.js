define([
	'dojo/_base/declare',
	'mxui/widget/_WidgetBase',
	"dijit/_TemplatedMixin",
	"mxui/dom",
	"dojo/_base/lang",
	"dojo/text!DynamicImage/widget/templates/DynamicImage.html"
], function (declare, _WidgetBase, _TemplatedMixin, mxuiDom, lang, widgetTemplate) {
	'use strict';

	return declare('DynamicImage.widget.MobileStaticImage', [ _WidgetBase, _TemplatedMixin ], {

		templateString: widgetTemplate,

		imageurl: '',
		defaultImage: '',
		alt: '',
		_hasStarted: false,

		startup: function () {
			if (this._hasStarted)
				return;

			this._hasStarted = true;

			this.domNode.appendChild(
				mxuiDom.create("img", {
					src: (this.imageurl != '') ? this.imageurl : this.defaultImage,
					alt: this.alt
				})
			);

			this.actLoaded(function () {}); // temp. fix for a client issue, should be fixed in 4.4
		}
	});
});

require([ 'DynamicImage/widget/MobileStaticImage' ]);
