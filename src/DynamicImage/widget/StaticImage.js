  define([
    'dojo/_base/declare',
    "dijit/_TemplatedMixin",
    'mxui/widget/_WidgetBase'
  ], function (declare, _WidgetBase, _TemplatedMixin) {
    'use strict';
  
  return declare('DynamicImage.widget.StaticImage', [_WidgetBase, _TemplatedMixin], {
	//DECLARATION
	 templatePath : dojo.moduleUrl('DynamicImage.widget', "templates/DynamicImage.html"), //MWE: use same template
  inputargs: { 
		  imageurl : '',
    defaultImage : '',
    alt : ''
  },
	
  postCreate : function(){
    if (this.imageurl != '')
      this.imageNode.src = this.imageurl;
    else
      this.imageNode.src = this.defaultImage;
  }
});
});

require(['DynamicImage/widget/StaticImage']);
