;(function (w, d, s, l) { var r = 100, js, fjs = d.getElementsByTagName(s)[0], id = "IPerceptionsJS", a = "async", b = "defer",go = function() { if(d.getElementById(id)) { return; } js = d.createElement(s);js.src = w.location.protocol + "//ips-invite.iperceptions.com/webValidator.aspx?sdfc=5779afdf-118391-f3b0ca95-df95-41be-b52d-d02ef0b2adbe&lID=1&source=91787"; js.id = id; js.type = "text/javascript"; js[a] = a; js[b] = b; fjs.parentNode.insertBefore(js, fjs); }; if(r < Math.floor(Math.random() * 100)) { d.cookie = "IPE_S_118391=0;Path=/;" } else if(!(/(^|;)\s*IPE(_S_)?118391=/.test(d.cookie))){ if (w.addEventListener) { w.addEventListener(l, go, false); } else if (w.attachEvent) { w.attachEvent("on" + l, go); } } })(window, document, "script", "load");