define([
  'dojo/_base/declare',
  'mxui/widget/_WidgetBase',
  "dijit/_TemplatedMixin",
  "dojo/_base/lang",
  "dojo/text!DynamicImage/widget/templates/DynamicImage.html"
], function (declare, _WidgetBase, _TemplatedMixin, lang, widgetTemplate) {
  'use strict';

  return declare('DynamicImage.widget.StaticImage', [_WidgetBase, _TemplatedMixin], {

    templateString: widgetTemplate,

    alt: '',
    //DECLARATION
    imageurl: '',
    defaultImage: '',

    postCreate: function () {
      if (this.imageurl != '')
        this.imageNode.src = this.imageurl;
      else
        this.imageNode.src = this.defaultImage;
      this.actRendered();
    }
  });
});

require(['DynamicImage/widget/StaticImage']);
