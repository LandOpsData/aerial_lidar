// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/TimeSlider/setting/TimeCalendar.html":'\x3cdiv class\x3d"time-calendar-container"\x3e\r\n  \x3cdiv\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"modeSelector" class\x3d"mode-selector"\x3e\x3c/div\x3e\r\n\r\n    \x3cspan data-dojo-attach-point\x3d"timeMode" class\x3d"hide"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"dateBoxContainer" class\x3d"time-selector time-date"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"timeTextBoxContainer" class\x3d"time-selector time-text"\x3e\x3c/div\x3e\r\n    \x3c/span\x3e\r\n    \x3cspan data-dojo-attach-point\x3d"calenderMode" class\x3d"hide"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"operatorContainer" class\x3d"time-selector"\x3e\x3c/div\x3e\r\n      \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberSpinner" value\x3d"0"\r\n         data-dojo-attach-point\x3d"numberSpinner" data-dojo-props\x3d"smallDelta:1,intermediateChanges:true,constraints: {min:0, places:0}"\r\n         class\x3d"time-selector calender-number calendar-inputs"\x3e\r\n      \x3cdiv class\x3d"time-unit"\x3e${nls.unit}\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"unitContainer" class\x3d"calender-unit"\x3e\x3c/div\x3e\r\n    \x3c/span\x3e\r\n    \x3cspan data-dojo-attach-point\x3d"maxminMode"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"maxminDateBoxContainer" class\x3d"time-selector time-date"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"maxminTimeTextBoxContainer" class\x3d"time-selector time-text"\x3e\x3c/div\x3e\r\n    \x3c/span\x3e\r\n\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/Evented dojo/_base/declare dojo/_base/lang dojo/_base/html dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/on dojo/text!./TimeCalendar.html ../utils dijit/form/DateTextBox dijit/form/TimeTextBox dijit/form/Select dijit/form/NumberSpinner dijit/form/ValidationTextBox jimu/dijit/CheckBox".split(" "),function(k,l,c,d,m,n,p,e,q,r,g,h,f){return l([k,m,n,p],{templateString:q,_KEEP_VALUE_FLAG:!1,postCreate:function(){this._timeModeOptions=[{label:this.nls.time,value:"time"},
{label:this.nls.now,value:"now"},{label:this.nls.today,value:"today"}];var a={label:this.nls.maximum,value:"max"},b={label:this.nls.minimum,value:"min"};"min"===this.mode?this._timeModeOptions.push(b):"max"===this.mode&&this._timeModeOptions.push(a);this._operatorOptions=[{label:"+",value:"+"},{label:"-",value:"-"}];this.modeOptions=new f({options:this._timeModeOptions,"class":"calendar-inputs"},this.modeSelector);this.own(e(this.modeOptions,"change",c.hitch(this,function(a){this.toggleTimeMode(a,
!1);"max"===a&&"min"===a||this._setKeepValueFlag(!0)})));this.dateBox=new g({"class":"calendar-inputs"},this.dateBoxContainer);this.dateBox.startup();this.timeTextBox=new h({"class":"calendar-inputs time-inputs"},this.timeTextBoxContainer);this.timeTextBox.startup();this._updateTimeModeValue();this.own(e(this.dateBox,"change",c.hitch(this,function(){this._setKeepValueFlag(!0)})));this.own(e(this.timeTextBox,"change",c.hitch(this,function(){this._setKeepValueFlag(!0)})));this.operatorSelector=new f({options:this._operatorOptions,
"class":"calendar-operator"},this.operatorContainer);this.unit=new f({options:r.intervalUnitOptions,"class":"calendar-inputs"},this.unitContainer);this.own(e(this.operatorSelector,"change",c.hitch(this,function(){this._setKeepValueFlag(!0)})));this.own(e(this.numberSpinner,"change",c.hitch(this,function(){this._setKeepValueFlag(!0)})));this.own(e(this.unit,"change",c.hitch(this,function(){this._setKeepValueFlag(!0)})));this.maxminDateBox=new g({readonly:"readonly","class":"calendar-inputs",disabled:!0},
this.maxminDateBoxContainer);this.maxminDateBox.startup();this.maxminTimeTextBox=new h({readonly:"readonly","class":"calendar-inputs",disabled:!0},this.maxminTimeTextBoxContainer);this.maxminTimeTextBox.startup();this.inherited(arguments)},startup:function(){"min"!==this.mode&&"max"!==this.mode||this.toggleTimeMode(this.mode,!1);this.inherited(arguments);this.emit("haveloaded")},toggleTimeMode:function(a,b){d.addClass(this.calenderMode,"hide");d.addClass(this.timeMode,"hide");d.addClass(this.maxminMode,
"hide");var c=!1;!0===b&&(c=!0);this.modeOptions.set("value",a,c);"time"===a?(d.removeClass(this.timeMode,"hide"),this._getKeepValueFlag()||this._updateTimeModeValue()):"max"===a||"min"===a?(d.removeClass(this.maxminMode,"hide"),this._getMaxOrMinTime()):d.removeClass(this.calenderMode,"hide")},_getMaxOrMinTime:function(){var a=this.parent.getLayersTimeExtent();a&&this.setMaxMinTime(a)},setMaxMinTime:function(a){var b;"min"===this.mode?b=a.timeExtent.startTime:"max"===this.mode&&(b=a.timeExtent.endTime);
this.maxminDateBox.set("value",new Date(b),!1);this.maxminTimeTextBox.set("value",new Date(b),!1)},isValid:function(){return"time"===this.modeOptions.getValue()?this.dateBox.isValid()&&this.timeTextBox.isValid():"max"===this.modeOptions.getValue()||"min"===this.modeOptions.getValue()?this.maxminDateBox.isValid()&&this.maxminTimeTextBox.isValid():this.operatorSelector.isValid()&&this.numberSpinner.isValid()&&this.unit.isValid()},setConfig:function(a){if(this._getKeepValueFlag())a.time&&(this.maxminDateBox.set("value",
new Date(a.time),!1),this.maxminTimeTextBox.set("value",new Date(a.time),!1));else if(a.keepValueFlag&&(this._KEEP_VALUE_FLAG=a.keepValueFlag),a.timeMode&&this.toggleTimeMode(a.timeMode,!1),a.time&&(this.dateBox.set("value",new Date(a.time),!1),this.timeTextBox.set("value",new Date(a.time),!1),this.maxminDateBox.set("value",new Date(a.time),!1),this.maxminTimeTextBox.set("value",new Date(a.time),!1)),a.calender){if("undefined"===typeof a.calender.operator||""===a.calender.operator)a.calender.operator=
"+";this.operatorSelector.set("value",a.calender.operator,!1);this.numberSpinner.set("value",a.calender.number,!1);this.unit.set("value",a.calender.unit,!1)}},getConfig:function(){var a,b,c={operator:"",number:"",unit:""};"time"===this.modeOptions.getValue()?(a=this.dateBox.getValue(),b=this.timeTextBox.getValue(),a=a&&b?new Date(a.getFullYear(),a.getMonth(),a.getDate(),b.getHours(),b.getMinutes(),b.getSeconds()):null):"max"===this.modeOptions.getValue()||"min"===this.modeOptions.getValue()?(a=this.maxminDateBox.getValue(),
b=this.maxminTimeTextBox.getValue(),a=a&&b?new Date(a.getFullYear(),a.getMonth(),a.getDate(),b.getHours(),b.getMinutes(),b.getSeconds()):null):c={operator:this.operatorSelector.getValue(),number:this.numberSpinner.getValue(),unit:this.unit.getValue()};return{keepValueFlag:this._getKeepValueFlag(),timeMode:this.modeOptions.getValue(),time:a,calender:c}},_updateTimeModeValue:function(){this.dateBox.set("value",new Date,!1);this.timeTextBox.set("value",new Date,!1)},_setKeepValueFlag:function(a){this._KEEP_VALUE_FLAG=
a;this.emit("change")},_getKeepValueFlag:function(){return!!this._KEEP_VALUE_FLAG}})});