// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"dijit/_editor/nls/commands":{bold:"\u7c97\u9ad4",copy:"\u8907\u88fd",cut:"\u526a\u4e0b","delete":"\u522a\u9664",indent:"\u7e2e\u6392",insertHorizontalRule:"\u6c34\u5e73\u5c3a\u898f",insertOrderedList:"\u7de8\u865f\u6e05\u55ae",insertUnorderedList:"\u9805\u76ee\u7b26\u865f\u6e05\u55ae",italic:"\u659c\u9ad4",justifyCenter:"\u7f6e\u4e2d\u5c0d\u9f4a",justifyFull:"\u5c0d\u9f4a",justifyLeft:"\u9760\u5de6\u5c0d\u9f4a",justifyRight:"\u9760\u53f3\u5c0d\u9f4a",outdent:"\u51f8\u6392",paste:"\u8cbc\u4e0a",
redo:"\u91cd\u505a",removeFormat:"\u79fb\u9664\u683c\u5f0f",selectAll:"\u5168\u9078",strikethrough:"\u522a\u9664\u7dda",subscript:"\u4e0b\u6a19",superscript:"\u4e0a\u6a19",underline:"\u5e95\u7dda",undo:"\u5fa9\u539f",unlink:"\u79fb\u9664\u93c8\u7d50",createLink:"\u5efa\u7acb\u93c8\u7d50",toggleDir:"\u5207\u63db\u65b9\u5411",insertImage:"\u63d2\u5165\u5f71\u50cf",insertTable:"\u63d2\u5165/\u7de8\u8f2f\u8868\u683c",toggleTableBorder:"\u5207\u63db\u8868\u683c\u908a\u6846",deleteTable:"\u522a\u9664\u8868\u683c",
tableProp:"\u8868\u683c\u5167\u5bb9",htmlToggle:"HTML \u539f\u59cb\u6a94",foreColor:"\u524d\u666f\u984f\u8272",hiliteColor:"\u80cc\u666f\u984f\u8272",plainFormatBlock:"\u6bb5\u843d\u6a23\u5f0f",formatBlock:"\u6bb5\u843d\u6a23\u5f0f",fontSize:"\u5b57\u578b\u5927\u5c0f",fontName:"\u5b57\u578b\u540d\u7a31",tabIndent:"\u6a19\u7c64\u7e2e\u6392",fullScreen:"\u5207\u63db\u5168\u87a2\u5e55",viewSource:"\u6aa2\u8996 HTML \u539f\u59cb\u6a94",print:"\u5217\u5370",newPage:"\u65b0\u9801\u9762",systemShortcut:'"${0}" \u52d5\u4f5c\u5728\u60a8\u7684\u700f\u89bd\u5668\u4e2d\uff0c\u53ea\u80fd\u4f7f\u7528\u9375\u76e4\u5feb\u901f\u9375\u3002\u8acb\u4f7f\u7528 ${1}\u3002',
ctrlKey:"ctrl+${0}",appleKey:"\u2318${0}",_localized:{}},"dijit/_editor/nls/FontChoice":{fontSize:"\u5927\u5c0f",fontName:"\u5b57\u578b",formatBlock:"\u683c\u5f0f",serif:"\u65b0\u7d30\u660e\u9ad4","sans-serif":"\u65b0\u7d30\u660e\u9ad4",monospace:"\u7b49\u5bec",cursive:"Cursive",fantasy:"Fantasy",noFormat:"\u7121",p:"\u6bb5\u843d",h1:"\u6a19\u984c",h2:"\u5b50\u6a19\u984c",h3:"\u6b21\u5b50\u6a19\u984c",pre:"\u9810\u5148\u683c\u5f0f\u5316",1:"\u6700\u5c0f",2:"\u8f03\u5c0f",3:"\u5c0f",4:"\u4e2d",5:"\u5927",
6:"\u8f03\u5927",7:"\u6700\u5927",_localized:{}},"dojox/editor/plugins/nls/Preview":{preview:"\u9810\u89bd",_localized:{}},"dojox/editor/plugins/nls/FindReplace":{findLabel:"\u5c0b\u627e\uff1a",findTooltip:"\u8f38\u5165\u8981\u5c0b\u627e\u7684\u6587\u5b57",replaceLabel:"\u53d6\u4ee3\u70ba\uff1a",replaceTooltip:"\u8f38\u5165\u8981\u53d6\u4ee3\u7684\u6587\u5b57",findReplace:"\u5c0b\u627e/\u53d6\u4ee3",matchCase:"\u5927\u5c0f\u5beb\u76f8\u7b26",matchCaseTooltip:"\u5927\u5c0f\u5beb\u76f8\u7b26",backwards:"\u5411\u5f8c",
backwardsTooltip:"\u5f80\u56de\u641c\u5c0b\u6587\u5b57",replaceAllButton:"\u5168\u90e8\u53d6\u4ee3",replaceAllButtonTooltip:"\u53d6\u4ee3\u6240\u6709\u6587\u5b57",findButton:"\u5c0b\u627e",findButtonTooltip:"\u5c0b\u627e\u6587\u5b57",replaceButton:"\u53d6\u4ee3",replaceButtonTooltip:"\u53d6\u4ee3\u6587\u5b57",replaceDialogText:"\u53d6\u4ee3\u4e86 ${0} \u9805\u3002",eofDialogText:"\u524d\u6b21\u51fa\u73fe ${0}",eofDialogTextFind:"\u627e\u5230",eofDialogTextReplace:"\u5df2\u53d6\u4ee3",_localized:{}},
"dojox/editor/plugins/nls/PasteFromWord":{pasteFromWord:"\u5f9e Word \u8cbc\u4e0a",instructions:"\u5c07 Word \u4e2d\u7684\u5167\u5bb9\u8cbc\u5165\u4e0b\u65b9\u7684\u6587\u5b57\u6846\u3002\u5728\u6eff\u610f\u8981\u63d2\u5165\u7684\u5167\u5bb9\u4e4b\u5f8c\uff0c\u8acb\u6309\u8cbc\u4e0a\u6309\u9215\u3002\u82e5\u8981\u4e2d\u65b7\u63d2\u5165\u6587\u5b57\uff0c\u8acb\u6309\u53d6\u6d88\u6309\u9215\u3002",_localized:{}},"dojox/editor/plugins/nls/InsertAnchor":{insertAnchor:"\u63d2\u5165\u9328\u9ede",title:"\u9328\u9ede\u5167\u5bb9",
anchor:"\u540d\u7a31\uff1a",text:"\u8aaa\u660e\uff1a",set:"\u8a2d\u5b9a",cancel:"\u53d6\u6d88",_localized:{}},"dojox/editor/plugins/nls/Blockquote":{blockquote:"\u5340\u584a\u5f15\u6587",_localized:{}},"widgets/NetworkTrace/setting/nls/strings":{taskUrl:"\u4efb\u52d9 URL",setTask:"\u8a2d\u5b9a",setTaskPopupTitle:"\u8a2d\u5b9a\u4efb\u52d9",validate:"\u8a2d\u5b9a",inValidGPService:"\u8acb\u8f38\u5165\u6709\u6548\u7684\u5730\u7406\u8655\u7406\u670d\u52d9\u3002",GPFeatureRecordSetLayerERR:"\u8acb\u8f38\u5165\u50c5\u5305\u542b\u300cGPFeatureRecordSetLayer\u300d\u985e\u578b\u8f38\u5165\u7684\u5730\u7406\u8655\u7406\u670d\u52d9\u3002",
invalidInputParameters:"\u8f38\u5165\u53c3\u6578\u7684\u6578\u76ee\u5c11\u65bc 1 \u6216\u5927\u65bc 3\u3002 \u8acb\u8f38\u5165\u6709\u6548\u7684\u5730\u7406\u8655\u7406\u670d\u52d9\u3002",projectSetting:{title:"\u5c08\u6848\u8a2d\u5b9a",note:"\u9644\u8a3b: \u5c08\u6848\u8a2d\u5b9a\u662f\u9078\u7528\u7684\uff0c\u4e00\u65e6\u914d\u7f6e\u7684\u4f7f\u7528\u8005\u53ef\u4ee5\u5728\u6240\u9700\u7684 Web \u5730\u5716\u5716\u5c64 (\u5177\u6709\u7db2\u8def\u4e2d\u65b7\u5340\u57df\u548c\u8f38\u5165\u53c3\u6578) \u4e2d\u5132\u5b58\u5c08\u6848\u3002 \u4f7f\u7528\u8005\u5373\u53ef\u5f9e\u300c\u8f38\u5165/\u8f38\u51fa\u300d\u9801\u7c64\u7684\u300c\u8f38\u51fa\u300d\u7fa4\u7d44\u4e2d\u5132\u5b58\u5176\u4ed6\u8f38\u51fa\u53c3\u6578\u3002",
projectPolygonLayer:"\u5c08\u6848\u591a\u908a\u5f62\u5716\u5c64",outputParameterName:"\u8f38\u51fa\u53c3\u6578\u540d\u7a31",projectPointLayer:"\u5c08\u6848\u9ede\u5716\u5c64",selectLabel:"\u9078\u64c7",polygonLayerHelp:"\x3cp\x3e\u5c07\u986f\u793a\u5305\u542b\u4e0b\u5217\u689d\u4ef6\u7684\u591a\u908a\u5f62\u5716\u5c64:\x3cbr/\x3e\x3cli\x3e \u5716\u5c64\u5fc5\u9808\u5177\u6709\u540d\u70ba\u300c\u5efa\u7acb\u300d\u3001\u300c\u522a\u9664\u300d\u548c\u300c\u66f4\u65b0\u300d\u7684\u7de8\u8f2f\u529f\u80fd\x3c/li\x3e\x3cli\x3e\u5716\u5c64\u5fc5\u9808\u5177\u6709\u5305\u542b\u5be6\u969b\u540d\u7a31\u548c\u8cc7\u6599\u985e\u578b\u7684 2 \u500b\u6b04\u4f4d:\x3c/li\x3e\x3cul\x3e\x3cli\x3ename (\u5b57\u4e32\u985e\u578b\u6b04\u4f4d)\x3c/li\x3e\x3cli\x3eglobalid (GlobalID \u985e\u578b\u6b04\u4f4d)\x3c/li\x3e\x3c/ul\x3e\x3cp/\x3e",
outputParameterHelp:"\x3cp\x3e\u5c07\u986f\u793a\u4f86\u81ea\u4efb\u52d9 URL \u7684\u8f38\u51fa\u591a\u908a\u5f62\u5716\u5c64\x3cp/\x3e",pointLayerHelp:"\x3cp\x3e\u5c07\u986f\u793a\u5305\u542b\u4e0b\u5217\u689d\u4ef6\u7684\u9ede\u5716\u5c64: \x3cbr/\x3e\x3cli\x3e \u5716\u5c64\u5fc5\u9808\u5177\u6709\u540d\u70ba\u300c\u5efa\u7acb\u300d\u3001\u300c\u522a\u9664\u300d\u548c\u300c\u66f4\u65b0\u300d\u7684\u7de8\u8f2f\u529f\u80fd\x3c/li\x3e\x3cli\x3e\u5716\u5c64\u5fc5\u9808\u5177\u6709\u5305\u542b\u5be6\u969b\u540d\u7a31\u548c\u8cc7\u6599\u985e\u578b\u7684 2 \u500b\u6b04\u4f4d:\x3c/li\x3e\x3cul\x3e\x3cli\x3einputtype (\u5b57\u4e32\u985e\u578b\u6b04\u4f4d)\x3c/li\x3e\x3cli\x3eprojectid (GUID \u985e\u578b\u6b04\u4f4d)\x3c/li\x3e\x3c/ul\x3e\x3cp/\x3e"},
inputOutputTab:{title:"\u8f38\u5165/\u8f38\u51fa",inputSettingsLabel:"\u8f38\u5165\u8a2d\u5b9a",outputSettingsLabel:"\u8f38\u51fa\u8a2d\u5b9a",inputLabel:"\u6a19\u7c64",inputTooltip:"\u5de5\u5177\u63d0\u793a",symbol:"\u7b26\u865f",typeText:"\u985e\u578b",outputParametersText:"\u8f38\u51fa\u53c3\u6578",saveToLayerText:"\u5132\u5b58\u81f3\u5716\u5c64 (\u9078\u7528)",skipText:"\u53ef\u7565\u904e",visibilityText:"\u53ef\u898b",exportToCsvText:"\u532f\u51fa\u81f3 CSV",exportToCsvDisplayText:"CSV",settitngstext:"\u8a2d\u5b9a",
addFieldTitle:"\u589e\u65b0\u589e\u6b04\u4f4d",enterDisplayText:"\u8f38\u5165\u986f\u793a\u6587\u5b57",setScale:"\u8a2d\u5b9a\u6bd4\u4f8b",outputDisplay:"\u986f\u793a\u6587\u5b57",saveToLayerHelp:"\x3cp\x3e\u5c07\u986f\u793a\u5305\u542b\u4e0b\u5217\u689d\u4ef6\u7684\u5716\u5c64:\x3cbr/\x3e\x3cli\x3e \u5716\u5c64\u5fc5\u9808\u5177\u6709\u540d\u70ba\u300c\u5efa\u7acb\u300d\u3001\u300c\u522a\u9664\u300d\u548c\u300c\u66f4\u65b0\u300d\u7684\u7de8\u8f2f\u529f\u80fd\x3c/li\x3e\x3cli\x3e\u5716\u5c64\u5fc5\u9808\u5177\u6709\u5305\u542b\u540d\u7a31\u548c\u8cc7\u6599\u985e\u578b\u7684 2 \u500b\u6b04\u4f4d:\x3c/li\x3e\x3cul\x3e\x3cli\x3eparametername (\u5b57\u4e32\u985e\u578b\u6b04\u4f4d)\x3c/li\x3e\x3cli\x3eprojectid (Guid \u985e\u578b\u6b04\u4f4d)\x3c/li\x3e\x3c/ul\x3e\x3cp/\x3e"},
summaryTab:{title:"\u6458\u8981",summaryFieldsetText:"\u6458\u8981\u8a2d\u5b9a",inputOutput:"\u8f38\u5165/\u8f38\u51fa",field:"\u6b04\u4f4d",operator:"\u904b\u7b97\u7b26",inputOperatorCountOption:"\u8a08\u6578",outputOperatorCountOption:"\u8a08\u6578",outputOperatorSkipCountOption:"SkipCount",fieldOperatorSumOption:"\u7e3d\u548c",fieldOperatorMinOption:"\u6700\u5c0f\u503c",fieldOperatorMaxOption:"\u6700\u5927\u503c",fieldOperatorMeanOption:"\u5e73\u5747\u503c",expressionAddButtonText:"\u65b0\u589e",
expressionVerifyButtonText:"\u9a57\u8b49",summaryEditorText:"\u6458\u8981\u6587\u5b57"},generalSettings:{title:"\u4e00\u822c\u8a2d\u5b9a",displayTextForButtonLegend:"\u300c\u57f7\u884c\u300d\u6309\u9215\u7684\u986f\u793a\u6587\u5b57",displayTextforButtonDefaultValue:"\u57f7\u884c",displayTextForButton:"\u986f\u793a\u6587\u5b57",autoZoomAfterTrace:"\u7e2e\u653e\u9078\u9805",zoomText:"\u8ffd\u8e64\u5f8c\u81ea\u52d5\u7e2e\u653e"},validationErrorMessage:{webMapError:"Web \u5730\u5716\u4e2d\u6c92\u6709\u53ef\u7528\u7684\u5716\u5c64\u3002 \u8acb\u9078\u64c7\u6709\u6548\u7684 Web \u5730\u5716\u3002",
inputTypeFlagGreaterThanError:"\u985e\u578b\u6a19\u8a18\u7684\u8f38\u5165\u4e0d\u53ef\u8d85\u904e\u4e00\u500b\u3002",inputTypeFlagLessThanError:"\u81f3\u5c11\u9700\u8981\u4e00\u500b\u985e\u578b\u6a19\u8a18\u8f38\u5165\u3002",inputTypeBarrierErr:"\u985e\u578b\u5c4f\u969c\u7684\u8f38\u5165\u4e0d\u53ef\u8d85\u904e\u4e00\u500b\u3002",inputTypeSkipErr:"\u985e\u578b\u7565\u904e\u7684\u8f38\u5165\u4e0d\u53ef\u8d85\u904e\u4e00\u500b\u3002",displayTextForButtonError:"\u300c\u57f7\u884c\u300d\u6309\u9215\u7684\u986f\u793a\u6587\u5b57\u4e0d\u53ef\u7a7a\u767d\u3002",
UnableToLoadGeoprocessError:"\u7121\u6cd5\u8f09\u5165\u5730\u7406\u8655\u7406\u670d\u52d9\u3002",invalidSummaryExpression:"\u8868\u9054\u5f0f\u7121\u6548\u3002",validSummaryExpression:"\u6210\u529f!",invalidProjectSettings:"\u5c08\u6848\u8a2d\u5b9a\u7121\u6548\u3002\x3cbr/\x3e \u8acb\u5728 '${projectSetting}\u2019 \u4e2d\u9078\u64c7\u6709\u6548\u503c\u3002"},hintText:{labelTextHint:"\u63d0\u793a: \u63d0\u4f9b\u8f38\u51fa\u53c3\u6578\u7684\u7d50\u679c\u9762\u677f\u7684\u986f\u793a\u6a19\u7c64\u3002",
displayTextHint:"\u63d0\u793a: \u9019\u5c07\u986f\u793a\u65bc\u6b64\u8f38\u51fa\u53c3\u6578\u7684\u8a73\u7d30\u8cc7\u8a0a\u756b\u9762\u4e2d\u3002",inputTextHint:"\u63d0\u793a: \u9078\u64c7\u8f38\u5165\u3001\u8f38\u51fa\u548c\u6b04\u4f4d\u540d\u7a31\u4f86\u5efa\u7acb\u4e0a\u8ff0\u7684\u8868\u9054\u5f0f\u3002",expressionHint:"\u63d0\u793a: \u9078\u64c7\u9805\u76ee\uff0c\u518d\u6309\u4e00\u4e0b\u300c\u65b0\u589e\u300d\u4ee5\u5efa\u7acb\u8868\u9054\u5f0f\u3002"},_localized:{}}});