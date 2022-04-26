/*
 Highmaps JS v7.1.3 (2019-08-14)

 Tilemap module

 (c) 2010-2019 Highsoft AS

 License: www.highcharts.com/license
*/
(function(e){"object"===typeof module&&module.exports?(e["default"]=e,module.exports=e):"function"===typeof define&&define.amd?define("highcharts/modules/tilemap",["highcharts","highcharts/modules/map"],function(r){e(r);e.Highcharts=r;return e}):e("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(e){function r(d,e,r,f){d.hasOwnProperty(e)||(d[e]=f.apply(null,r))}e=e?e._modules:{};r(e,"modules/tilemap.src.js",[e["parts/Globals.js"]],function(d){var e=d.seriesType,r=d.pick,f=function(a,
b,c){return Math.min(Math.max(b,a),c)},v=function(a,b,c){a=a.options;return{xPad:(a.colsize||1)/-b,yPad:(a.rowsize||1)/-c}};d.tileShapeTypes={hexagon:{alignDataLabel:d.seriesTypes.scatter.prototype.alignDataLabel,getSeriesPadding:function(a){return v(a,3,2)},haloPath:function(a){if(!a)return[];var b=this.tileEdges;return["M",b.x2-a,b.y1+a,"L",b.x3+a,b.y1+a,b.x4+1.5*a,b.y2,b.x3+a,b.y3-a,b.x2-a,b.y3-a,b.x1-1.5*a,b.y2,"Z"]},translate:function(){var a=this.options,b=this.xAxis,c=this.yAxis,e=a.pointPadding||
0,d=(a.colsize||1)/3,w=(a.rowsize||1)/2,m;this.generatePoints();this.points.forEach(function(a){var t=f(Math.floor(b.len-b.translate(a.x-2*d,0,1,0,1)),-b.len,2*b.len),h=f(Math.floor(b.len-b.translate(a.x-d,0,1,0,1)),-b.len,2*b.len),p=f(Math.floor(b.len-b.translate(a.x+d,0,1,0,1)),-b.len,2*b.len),u=f(Math.floor(b.len-b.translate(a.x+2*d,0,1,0,1)),-b.len,2*b.len),q=f(Math.floor(c.translate(a.y-w,0,1,0,1)),-c.len,2*c.len),g=f(Math.floor(c.translate(a.y,0,1,0,1)),-c.len,2*c.len),k=f(Math.floor(c.translate(a.y+
w,0,1,0,1)),-c.len,2*c.len),l=r(a.pointPadding,e),n=l*Math.abs(h-t)/Math.abs(k-g);n=b.reversed?-n:n;var x=b.reversed?-l:l;l=c.reversed?-l:l;a.x%2&&(m=m||Math.round(Math.abs(k-q)/2)*(c.reversed?-1:1),q+=m,g+=m,k+=m);a.plotX=a.clientX=(h+p)/2;a.plotY=g;t+=n+x;h+=x;p-=x;u-=n+x;q-=l;k+=l;a.tileEdges={x1:t,x2:h,x3:p,x4:u,y1:q,y2:g,y3:k};a.shapeType="path";a.shapeArgs={d:["M",h,q,"L",p,q,u,g,p,k,h,k,t,g,"Z"]}});this.translateColors()}},diamond:{alignDataLabel:d.seriesTypes.scatter.prototype.alignDataLabel,
getSeriesPadding:function(a){return v(a,2,2)},haloPath:function(a){if(!a)return[];var b=this.tileEdges;return["M",b.x2,b.y1+a,"L",b.x3+a,b.y2,b.x2,b.y3-a,b.x1-a,b.y2,"Z"]},translate:function(){var a=this.options,b=this.xAxis,c=this.yAxis,d=a.pointPadding||0,e=a.colsize||1,w=(a.rowsize||1)/2,m;this.generatePoints();this.points.forEach(function(a){var n=f(Math.round(b.len-b.translate(a.x-e,0,1,0,0)),-b.len,2*b.len),h=f(Math.round(b.len-b.translate(a.x,0,1,0,0)),-b.len,2*b.len),p=f(Math.round(b.len-
b.translate(a.x+e,0,1,0,0)),-b.len,2*b.len),u=f(Math.round(c.translate(a.y-w,0,1,0,0)),-c.len,2*c.len),q=f(Math.round(c.translate(a.y,0,1,0,0)),-c.len,2*c.len),g=f(Math.round(c.translate(a.y+w,0,1,0,0)),-c.len,2*c.len),k=r(a.pointPadding,d),l=k*Math.abs(h-n)/Math.abs(g-q);l=b.reversed?-l:l;k=c.reversed?-k:k;a.x%2&&(m=Math.abs(g-u)/2*(c.reversed?-1:1),u+=m,q+=m,g+=m);a.plotX=a.clientX=h;a.plotY=q;n+=l;p-=l;u-=k;g+=k;a.tileEdges={x1:n,x2:h,x3:p,y1:u,y2:q,y3:g};a.shapeType="path";a.shapeArgs={d:["M",
h,u,"L",p,q,h,g,n,q,"Z"]}});this.translateColors()}},circle:{alignDataLabel:d.seriesTypes.scatter.prototype.alignDataLabel,getSeriesPadding:function(a){return v(a,2,2)},haloPath:function(a){return d.seriesTypes.scatter.prototype.pointClass.prototype.haloPath.call(this,a+(a&&this.radius))},translate:function(){var a=this.options,b=this.xAxis,c=this.yAxis,d=a.pointPadding||0,e=(a.rowsize||1)/2,r=a.colsize||1,m,t,v,h,p=!1;this.generatePoints();this.points.forEach(function(a){var n=f(Math.round(b.len-
b.translate(a.x,0,1,0,0)),-b.len,2*b.len),g=f(Math.round(c.translate(a.y,0,1,0,0)),-c.len,2*c.len),k=d,l=!1;void 0!==a.pointPadding&&(k=a.pointPadding,p=l=!0);if(!h||p)m=Math.abs(f(Math.floor(b.len-b.translate(a.x+r,0,1,0,0)),-b.len,2*b.len)-n),t=Math.abs(f(Math.floor(c.translate(a.y+e,0,1,0,0)),-c.len,2*c.len)-g),v=Math.floor(Math.sqrt(m*m+t*t)/2),h=Math.min(m,v,t)-k,p&&!l&&(p=!1);a.x%2&&(g+=t*(c.reversed?-1:1));a.plotX=a.clientX=n;a.plotY=g;a.radius=h;a.shapeType="circle";a.shapeArgs={x:n,y:g,r:h}});
this.translateColors()}},square:{alignDataLabel:d.seriesTypes.heatmap.prototype.alignDataLabel,translate:d.seriesTypes.heatmap.prototype.translate,getSeriesPadding:function(){},haloPath:d.seriesTypes.heatmap.prototype.pointClass.prototype.haloPath}};d.addEvent(d.Axis,"afterSetAxisTranslation",function(){if(!this.recomputingForTilemap){var a=this,b=a.series.map(function(b){return b.getSeriesPixelPadding&&b.getSeriesPixelPadding(a)}).reduce(function(a,b){return(a&&a.padding)>(b&&b.padding)?a:b},void 0)||
{padding:0,axisLengthFactor:1},c=Math.round(b.padding*b.axisLengthFactor);b.padding&&(a.len-=c,a.recomputingForTilemap=!0,a.setAxisTranslation(),delete a.recomputingForTilemap,a.minPixelPadding+=b.padding,a.len+=c)}});e("tilemap","heatmap",{states:{hover:{halo:{enabled:!0,size:2,opacity:.5,attributes:{zIndex:3}}}},pointPadding:2,tileShape:"hexagon"},{setOptions:function(){var a=d.seriesTypes.heatmap.prototype.setOptions.apply(this,Array.prototype.slice.call(arguments));this.tileShape=d.tileShapeTypes[a.tileShape];
return a},alignDataLabel:function(){return this.tileShape.alignDataLabel.apply(this,Array.prototype.slice.call(arguments))},getSeriesPixelPadding:function(a){var b=a.isXAxis,c=this.tileShape.getSeriesPadding(this);if(!c)return{padding:0,axisLengthFactor:1};var d=Math.round(a.translate(b?2*c.xPad:c.yPad,0,1,0,1));a=Math.round(a.translate(b?c.xPad:0,0,1,0,1));return{padding:Math.abs(d-a)||0,axisLengthFactor:b?2:1.1}},translate:function(){return this.tileShape.translate.apply(this,Array.prototype.slice.call(arguments))}},
d.extend({haloPath:function(){return this.series.tileShape.haloPath.apply(this,Array.prototype.slice.call(arguments))}},d.colorPointMixin))});r(e,"masters/modules/tilemap.src.js",[],function(){})});
//# sourceMappingURL=tilemap.js.map