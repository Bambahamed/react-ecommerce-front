import{t as u}from"./index-C2HzGy_n.js";function e(r,t){var i=u({},r);return Array.isArray(t)&&t.forEach(function(f){delete i[f]}),i}const s=function(r){if(!r)return!1;if(r instanceof Element){if(r.offsetParent)return!0;if(r.getBBox){var t=r.getBBox(),i=t.width,f=t.height;if(i||f)return!0}if(r.getBoundingClientRect){var o=r.getBoundingClientRect(),n=o.width,a=o.height;if(n||a)return!0}}return!1};export{s as i,e as o};