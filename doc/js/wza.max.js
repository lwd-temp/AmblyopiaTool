﻿function isMobile(){var regex_match=/(nokia|iphone|android|motorola|micromessenger|^mot-|softbank|foma|docomo|kddi|up.browser|up.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte-|longcos|pantech|gionee|^sie-|portalmmm|jigs browser|hiptop|^benq|haier|^lct|operas*mobi|opera*mini|320x320|240x320|176x220)/i;var u=navigator.userAgent;if(null===u){return true}var result=regex_match.exec(u);if(null===result){return false}else{return true}};function loadScript(url,callback){var script=document.createElement("script");script.type="text/javascript";if(script.readyState){script.onreadystatechange=function(){if(script.readyState=="loaded"||script.readyState=="complete"){script.onreadystatechange=null;callback()}}}else{script.onload=function(){callback()}}script.src=url;document.getElementsByTagName("head")[0].appendChild(script)};var _hmt=_hmt||[];(function(){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?c3f009f814f701e8fad8a17f9682ec79";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s);loadScript("//apps.bdimg.com/libs/jquery/1.10.2/jquery.min.js",function(){var wxArr=Math.floor(Math.random()*10+1);var domain="res";if(wxArr<6){domain="wza"}if(isMobile()){loadScript("//"+domain+".rrbay.com/js/v2.1/wzatool-m.js",function(){})}else{loadScript("//"+domain+".rrbay.com/js/v2.1/wzatool.js",function(){})}})})();