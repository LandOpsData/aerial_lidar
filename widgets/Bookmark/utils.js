// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/lang dojo/_base/array dojo/_base/html jimu/utils ./ItemNode libs/storejs/store jimu/LayerInfos/LayerInfos".split(" "),function(k,g,q,m,n,l,p){var h={_uID:0,getUID:function(){return h._uID++},findBookMark:function(a,b){var c=-1,d=null;g.some(b,function(b,e){if(parseInt(b._uID,10)===parseInt(a._uID,10))return c=e,d=b,!0},this);return-1!==c?{bookmark:d,idx:c}:null},findBookMarkByUID:function(a,b){var c=-1,d=null;g.some(b,function(b,e){if(parseInt(b._uID,10)===parseInt(a,10))return c=
e,d=b,!0},this);return-1!==c?{bookmark:d,idx:c}:null},findNextBookMarkByIdx:function(a,b){var c=null;a+1<=b.length-1&&(c=b[a+1]);return c},findBookMarkByNameAndExtent:function(a,b){var c=-1,d=null;g.some(b,function(b,e){if(b.name===a.name&&b.extent&&a.extent&&b.extent.xmax===a.extent.xmax&&b.extent.xmin===a.extent.xmin&&b.extent.ymax===a.extent.ymax&&b.extent.ymin===a.extent.ymin)return c=e,d=b,!0},this);return-1!==c?{bookmark:d,idx:c}:null},isBookmarksDataEmpty:function(a){return Array.isArray(a)&&
0===a.length?!0:!1},empty:function(a,b){var c=a;g.forEach(a,function(a){a&&a.itemNode&&a.itemNode.destroy()},this);a=[];a=c;b&&q.empty(b)},createBookMarkNode:function(a,b,c,d,f){c=a.thumbnail||"undefined"!==typeof a.thumbnail&&""!==a.thumbnail?m.processUrlInWidgetConfig(a.thumbnail,c):m.processUrlInWidgetConfig("images/thumbnail_default.png",c);var e=h.getUID();a._uID=e;return new n({dataId:e,img:c,label:a.displayName||a.name,display:d,nls:b,a11y:f})},cloneBookmarksDataWithOutDom:function(a){var b=
[];if("undefined"===typeof a)return b;a.forEach(k.hitch(this,function(a){a.itemNode&&a.itemNode.domNode&&(a=k.clone(a),delete a.itemNode,b.push(a))}));return b},readBookmarksInWebmap:function(a){var b=[];if(!a.itemInfo||!a.itemInfo.itemData||!a.itemInfo.itemData.bookmarks)return b;g.forEach(a.itemInfo.itemData.bookmarks,function(a){a=k.mixin({},a);a.isInWebmap=!0;b.push(a)},this);return b},filterBookmarkFromTarget:function(a,b){for(var c=[],d=0,f=a.length;d<f;d++){var e=a[d];h.findBookmarkByNameOrExtent(e,
b)||c.push(e)}return c},findBookmarkByNameOrExtent:function(a,b){var c=-1,d=null;g.some(b,function(b,e){if((b.displayName||b.name)===(a.displayName||a.name)||b.extent&&a.extent&&b.extent.xmax===a.extent.xmax&&b.extent.xmin===a.extent.xmin&&b.extent.ymax===a.extent.ymax&&b.extent.ymin===a.extent.ymin)return c=e,d=b,!0},this);return-1!==c?{bookmark:d,idx:c}:null},filter:function(a,b){b.forEach(function(b){"undefined"!==typeof a&&""!==a?-1!==(b.displayName||b.name).indexOf(a)?n.show(b):n.hide(b):n.show(b)})},
getKeysKey:function(){return this.appConfig.map["3D"]?this.name+".3D":this.name+".2D"},getAutoRenameBeforeAdd:function(a,b,c){var d=0,f=new RegExp(/\((\d+)\){1}$/g);g.forEach(b,function(b){b&&"undefined"!==typeof b.name&&-1!==b.name.indexOf(a)&&("undefined"===typeof c||!0===c&&a.length===b.name.length)&&(b=f.exec(b.displayName),null===b&&0===d?d=1:b&&"undefined"!==typeof b[1]&&b[1]>=d&&(d=parseInt(b[1],10)+1))});return 0===d?a:a+"("+d+")"},processDuplicateName:function(a){for(var b=[],c={},d=a.length-
1;0<=d;d--){var f=a[d];if(!f||"undefined"===typeof f.name)return;var e=f.name;e in c?c[e]++:c[e]=0;if(0<c[e]){var g=e+"("+c[e]+")";g in c?(c[g]++,c[e]++):c[g]=0;f.displayName=0<c[g]?e+"("+c[e]+")":g;f._autoRename=!0}else f.displayName=e;b.push(f)}a=b},toogleCheckboxChecked:function(a){a&&a.setValue&&a.setValue(!a.checked)},setCheckboxWithoutEvent:function(a,b){a&&a.check&&a.uncheck&&(!0===b?a.check(!0):a.uncheck(!0))},layerInfosRestoreState:function(a,b){var c=p.getInstanceSync(),d={};if(b&&a){for(var f in b)if(b.hasOwnProperty(f)){a=
b[f];var e=!1,e="undefined"===typeof a.visible?a.selected:a.visible;d[f]={visible:e}}c.restoreState({layerOptions:d})}},getlayerInfos:function(){var a={},b=p.getInstanceSync();b&&b.traversal&&b.traversal(k.hitch(this,function(b){a[b.id]={visible:b.isVisible()}}));return a},isWithLayerInfos:function(a){return a.layerOptions&&!1!==a.isSaveLayers?!0:!1},stringifyBookmarks:function(a){var b=[];g.forEach(a,function(a){a=k.mixin({},a);a.itemNode&&delete a.itemNode;b.push(a)},this);return b},parseBookmarks:function(a){return k.clone(a)},
getKey:function(a){return"Bookmark.2D."+encodeURIComponent(m.getAppIdFromUrl())+"."+a},isConfigBefore5_3:function(a){return"undefined"===typeof a.syncMode||!0===a.needToUpdateFlag?!0:!1},getUpdateCacheKey:function(a){return"bookmark_cache_updated_"+encodeURIComponent(h.getKey(a))},setUpdateCacheKey:function(a){l.set(h.getUpdateCacheKey(a),!0)},isCacheKeyUpdatedy:function(a){return l.get(h.getUpdateCacheKey(a))},setDefaultConfigForUpdate:function(a){a.needToUpdateFlag=!0;a.layout={cards:!0,list:!1,
defaultMode:"cards"};a.editable=!0;Array.isArray(a.bookmarks2D)&&0<a.bookmarks2D.length?a.syncMode={webmap:!1,custom:!0}:a.syncMode={webmap:!0,custom:!0}},completeUpdateConfig:function(a){a.needToUpdateFlag&&delete a.needToUpdateFlag},updateBookmarks:function(a){for(var b=0;b<a.length;b++)"undefined"===typeof a[b]&&(a.splice(b,1),b--);var c=/\/widgets\/Bookmark\/images\/thumbnail_default.png$/;g.forEach(a,function(a){"undefined"===typeof a.isSaveExtent&&(a.isSaveExtent=!0);a.thumbnail&&c.test(a.thumbnail)&&
delete a.thumbnail},this)},getLayoutRecorderKey:function(){return"bookMarkLayout_"+encodeURIComponent(m.getAppIdFromUrl())},cleanLayoutRecorder:function(a){l.remove(h.getLayoutRecorderKey(a))},setLastLayout:function(a){l.set(h.getLayoutRecorderKey(),a)},getLastLayout:function(){return l.get(h.getLayoutRecorderKey())},oldBookmarksBackup:'[{"displayName":"Greater Manchester or Greater Lincolnshire HAHAHAHA","name":"Greater Manchester or Greater Lincolnshire HAHAHAHA","extent":{"type":"extent","xmin":8997982.70263581,"ymin":2110475.6293307655,"xmax":14672667.682525788,"ymax":6024051.4775307495,"spatialReference":{"wkid":102100}},"thumbnail":"","isInWebmap":false},{"displayName":"Peterborough and Cambridgeshire HEHEHEHEHEH","name":"Peterborough and Cambridgeshire HEHEHEHEHEH","extent":{"type":"extent","xmin":9055621.33977054,"ymin":445965.34674161975,"xmax":14730306.319660518,"ymax":4359541.194941604,"spatialReference":{"wkid":102100}},"thumbnail":"","isInWebmap":false},{"displayName":"mentougou biejing china","name":"mentougou biejing china","extent":{"type":"extent","xmin":9502343.119353313,"ymin":3151483.465165457,"xmax":15177028.09924329,"ymax":7065059.313365442,"spatialReference":{"wkid":102100}},"thumbnail":"","isInWebmap":false},{"displayName":"\u51e4\u51f0\u7f6e\u5730\u4e09\u5143\u6865\u5317\u4eac\u4e2d\u56fd\u4e16\u754c\u592a\u9633\u7cfb\u5b87\u5b99","name":"\u51e4\u51f0\u7f6e\u5730\u4e09\u5143\u6865\u5317\u4eac\u4e2d\u56fd\u4e16\u754c\u592a\u9633\u7cfb\u5b87\u5b99","extent":{"type":"extent","xmin":-22698739.91955998,"ymin":-13654303.392799985,"xmax":22698739.91955998,"ymax":17654303.39279999,"spatialReference":{"wkid":102100}},"thumbnail":"","isInWebmap":false},{"displayName":"\u77ed\u4e2d\u6587","name":"\u77ed\u4e2d\u6587","extent":{"type":"extent","xmin":-22698739.91955998,"ymin":-13654303.392799985,"xmax":22698739.91955998,"ymax":17654303.39279999,"spatialReference":{"wkid":102100}},"thumbnail":"","isInWebmap":false},{"displayName":"short","name":"short","extent":{"type":"extent","xmin":-22698739.91955998,"ymin":-13654303.392799985,"xmax":22698739.91955998,"ymax":17654303.39279999,"spatialReference":{"wkid":102100}},"thumbnail":"","isInWebmap":false},{"displayName":"\u4e2d\u6587 English","name":"\u4e2d\u6587 English","extent":{"type":"extent","xmin":-22698739.91955998,"ymin":-13654303.392799985,"xmax":22698739.91955998,"ymax":17654303.39279999,"spatialReference":{"wkid":102100}},"thumbnail":"","isInWebmap":false},{"displayName":"Underneath the icons","name":"Underneath the icons","extent":{"type":"extent","xmin":-22698739.91955998,"ymin":-13654303.392799985,"xmax":22698739.91955998,"ymax":17654303.39279999,"spatialReference":{"wkid":102100}},"thumbnail":"","isInWebmap":false},{"displayName":"\u4e2d\u6587\u4e2d\u6587 \u5475\u5475","name":"\u4e2d\u6587\u4e2d\u6587 \u5475\u5475","extent":{"type":"extent","xmin":-22698739.91955998,"ymin":-13654303.392799985,"xmax":22698739.91955998,"ymax":17654303.39279999,"spatialReference":{"wkid":102100}},"thumbnail":"","isInWebmap":false},{"displayName":"eee RTL","name":"eee RTL","extent":{"type":"extent","xmin":-22698739.91955998,"ymin":-13654303.392799985,"xmax":22698739.91955998,"ymax":17654303.39279999,"spatialReference":{"wkid":102100}},"thumbnail":"","isInWebmap":false}]',
_testUpdateOldConfig:function(){return{bookmarks2D:[{extent:{spatialReference:{wkid:102100},xmax:-1656069.6628128502,xmin:-1.0861390956860503E7,ymax:1.510258315961978E7,ymin:-1119447.7364922247},name:"bm1",isInWebmap:!0,displayName:"bm1"},{extent:{spatialReference:{wkid:102100},xmax:-1656069.6628128502,xmin:-1.0861390956860503E7,ymax:1.510258315961978E7,ymin:-1119447.7364922247},name:"bm1",isInWebmap:!0,displayName:"bm1(1)"},{extent:{spatialReference:{wkid:102100},xmax:-3197863.7584074493,xmin:-1.3112899816301128E7,
ymax:1.1466459916526379E7,ymin:-4859686.568575533},name:"bm2",isInWebmap:!0,displayName:"bm2"},{extent:{spatialReference:{wkid:102100},xmax:-3767577.3201611056,xmin:-1.430429896767071E7,ymax:1.5120033300894285E7,ymin:-4622246.062418217},name:"Untitled",isInWebmap:!0,displayName:"Untitled"},{extent:{spatialReference:{wkid:102100},xmax:-4334684.982862408,xmin:-1.6556089386187213E7,ymax:1.6750523655935397E7,ymin:-5666212.383958025},name:"Untitled",isInWebmap:!0,displayName:"Untitled(1)"}],bookmarks3D:[],
flyTime:3E3}},_testSetOldCache:function(a){var b=[];g.forEach(a,function(a){var c="Bookmark.2D."+a.displayName;b.push(c);a=k.mixin({},a);a.itemNode&&delete a.itemNode;a._uID&&delete a._uID;try{l.set(c,a)}catch(f){alert("store error\x3d\x3d\x3e")}},this);l.set("Bookmark.2D",b)},_testSetOldCacheBookmark:function(){return JSON.parse('[{"extent":{"spatialReference":{"wkid":102100,"latestWkid":3857},"xmax":-8273877.24778316,"xmin":-14295892.084200885,"ymax":6466269.8495007465,"ymin":2983187.344602761},"name":"bm1","isInWebmap":true,"displayName":"bm1"},{"extent":{"spatialReference":{"wkid":102100,"latestWkid":3857},"xmax":-8004818.908219411,"xmin":-11015826.326428276,"ymax":5527011.645932751,"ymin":3785470.393483758},"name":"bm1","isInWebmap":true,"displayName":"bm1(1)"},{"extent":{"spatialReference":{"wkid":102100,"latestWkid":3857},"xmax":-12874774.854323175,"xmin":-13627526.708875552,"ymax":4655629.523482032,"ymin":4220244.210369689},"name":"bm2","isInWebmap":true,"displayName":"bm2"},{"extent":{"spatialReference":{"wkid":102100,"latestWkid":3857},"xmax":-11618761.605541585,"xmin":-14629769.023750449,"ymax":6691911.956998556,"ymin":4950370.704549563},"name":"bm3","isInWebmap":true,"displayName":"bm3"},{"extent":{"spatialReference":{"wkid":102100,"latestWkid":3857},"xmax":-4317189.3003047705,"xmin":-16361218.973140221,"ymax":10449906.504800193,"ymin":3483741.495004222},"name":"bm4","isInWebmap":true,"displayName":"bm4"},{"name":"add-inRT-1","displayName":"add-inRT-1","extent":{"xmin":-14714155.502977258,"ymin":2694561.125798012,"xmax":-7855613.8290067855,"ymax":6754896.068305495,"spatialReference":{"wkid":102100,"latestWkid":3857}}},{"name":"add-inRT-2","displayName":"add-inRT-2","extent":{"xmin":-14714155.502977258,"ymin":2694561.125798012,"xmax":-7855613.8290067855,"ymax":6754896.068305495,"spatialReference":{"wkid":102100,"latestWkid":3857}}}]')}};
return h});