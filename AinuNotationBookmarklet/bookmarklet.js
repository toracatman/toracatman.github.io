var kana = document.getElementById("kana");
var message = document.getElementById("message");

var bookmarklet = [
	`javascript:(()=>{var e,t="data-convert",a="true",i=[["\xe1","a"],["\xed","i"],["\xfa","u"],["\xe9","e"],["\xf3","o"],["(?<=\\\\w)[-=](?=\\\\w)",""],[", ?","、"],["\\\\. ?","。"],["! ?","！"],["\\\\? ?","？"],[" ?“","「"],["” ?","」"],[" ?‘","『"],["’ ?","』"],["a[hx]","aㇵ"],["i[hx]","iㇶ"],["u[hx]","uㇷ"],["e[hx]","eㇸ"],["o[hx]","oㇹ"],["ar","aㇻ"],["ir","iㇼ"],["ur","uㇽ"],["er","eㇾ"],["or","oㇿ"],["[hxㇵ-ㇹ](?=[hx])","ッ"],["[hxㇵ-ㇹ]a","ハ"],["[hxㇵ-ㇹ]i","ヒ"],["[hḣxㇵ-ㇹ]u","フ"],["[hxㇵ-ㇹ]e","ヘ"],["[hxㇵ-ㇹ]o","ホ"],["[hx]","ㇵ"],["[rㇻ-ㇿ](?=r)","ッ"],["[rㇻ-ㇿ]a","ラ"],["[rㇻ-ㇿ]i","リ"],["[rㇻ-ㇿ]u","ル"],["[rㇻ-ㇿ]e","レ"],["[rㇻ-ㇿ]o","ロ"],["r","ㇽ"],["k(?=k)","ッ"],["ka","カ"],["ki","キ"],["ku","ク"],["ke","ケ"],["ko","コ"],["k","ㇰ"],["g(?=g)","ッ"],["ga","ガ"],["gi","ギ"],["gu","グ"],["ge","ゲ"],["go","ゴ"],["g","ㇰ゙"],["(ts|ċ)a","ツァ"],["ċi","ツィ"],["(ts|ċ)e","ツェ"],["(ts|ċ)o","ツォ"],["(ts|ċ)u","ツ"],["s(?=s)","ッ"],["sa","サ"],["ṡi","スィ"],["su","ス"],["se","セ"],["so","ソ"],["ş(?=ş)","ッ"],["şa","シャ"],["şu","シュ"],["şe","シェ"],["şo","ショ"],["[sş]i","シ"],["d(?=d)","ッ"],["dza","ヅァ"],["dżi","ヅィ"],["dze","ヅェ"],["dzo","ヅォ"],["dzu","ヅ"],["z(?=z)","ッ"],["za","ザ"],["żi","ズィ"],["zu","ズ"],["ze","ゼ"],["zo","ゾ"],["dja","ヂャ"],["dju","ヂュ"],["dje","ヂェ"],["djo","ヂョ"],["d[jz]i","ヂ"],["j(?=j)","ッ"],["ja","ジャ"],["ju","ジュ"],["je","ジェ"],["jo","ジョ"],["[jz]i","ジ"],["ca","チャ"],["cu","チュ"],["ce","チェ"],["co","チョ"],["(ts|c)i","チ"],["(ts|ċ)","ッ"],["ṡ","ㇲ"],["[sş]","ㇱ"],["dż","ッ゙"],["ż","ㇱ゙"],["d[jz]","ッ゙"],["[jz]","ㇱ゙"],["c","ッ"],["ta","タ"],["ti","ティ"],["tu","トゥ"],["te","テ"],["to","ト"],["t","ッ"],["da","ダ"],["di","ディ"],["du","ドゥ"],["de","デ"],["do","ド"],["d","ッ゙"],["na","ナ"],["ni","ニ"],["nu","ヌ"],["ne","ネ"],["no","ノ"],["n","ン"],["m(?=[bmp])","ン"],["b(?=b)","ッ"],["ba","バ"],["bi","ビ"],["bu","ブ"],["be","ベ"],["bo","ボ"],["b","ㇷ゙"],["p(?=p)","ッ"],["pa","パ"],["pi","ピ"],["pu","プ"],["pe","ペ"],["po","ポ"],["p","ㇷ゚"],["ma","マ"],["mi","ミ"],["mu","ム"],["me","メ"],["mo","モ"],["m","ㇺ"],["ya","ヤ"],["yu","ユ"],["ye","イェ"],["yo","ヨ"],["yi?","イ"],["wa","ワ"],["wi","ウィ"],["we","ウェ"],["wo","ウォ"],["wu?","ウ"],["v(?=v)","ッ"],["va","ヴァ"],["vi","ヴィ"],["ve","ヴェ"],["vo","ヴォ"],["vu","ヴ"],["v","ゥ゙"],["f(?=f)","ッ"],["fa","ファ"],["fi","フィ"],["fe","フェ"],["fo","フォ"],["fu","フ"],["f","ㇷ"],["a","ア"],["i","イ"],["u","ウ"],["e","エ"],["o","オ"]];if(null!=(e=document.querySelectorAll('style,.mw-parser-output [lang]:not([lang^="ain"]),.mw-parser-output [lang]:not([lang^="ain"]) *,.mw-editsection *,.external,pre')))for(var r=0;r<e.length;r++)e[r].getAttribute(t)!=a&&e[r].setAttribute(t,a);if(null!=(e=document.querySelectorAll(".mw-parser-output *,#mw-panel-toc-list :nth-child(n+2) *,#firstHeading *,#catlinks ul *,.mw-prefixindex-list *,.mw-allpages-chunk *,.mw-category *"))){for(var r=0;r<e.length;r++)if(e[r].getAttribute(t)!=a&&(e[r].setAttribute(t,a),e[r].hasChildNodes())){var o=e=>{for(var t=e.split(" | "),a=0;a<i.length;a++)t[0]=t[0].replace(RegExp(i[a][0],"ig"),i[a][1]);return t.join(" | ")};if(0==e[r].childElementCount)e[r].textContent=o(e[r].textContent);else{var n=e[r],l=document.createTextNode("");n.replaceWith(l);for(var u=document.createDocumentFragment(),d=n.firstElementChild;null!=d;)d.replaceWith(document.createTextNode("\\x1a")),u.appendChild(d),d=n.firstElementChild;var s=o(n.textContent).split("\\x1a");n.textContent="",n.appendChild(document.createTextNode(s[0]));for(var h=1;h<s.length;h++)n.appendChild(u.firstElementChild),n.appendChild(document.createTextNode(s[h]));l.replaceWith(n)}}}})();`,
	`javascript:(()=>{var e,t="data-convert",a="true",i=[["\xe1","a"],["\xed","i"],["\xfa","u"],["\xe9","e"],["\xf3","o"],[", ?","、"],["\\\\. ?","。"],["! ?","！"],["\\\\? ?","？"],[" ?“","「"],["” ?","」"],[" ?‘","『"],["’ ?","』"],["a[hx]","aㇵ"],["i[hx]","iㇶ"],["u[hx]","uㇷ"],["e[hx]","eㇸ"],["o[hx]","oㇹ"],["ar","aㇻ"],["ir","iㇼ"],["ur","uㇽ"],["er","eㇾ"],["or","oㇿ"],["[hxㇵ-ㇹ]a","ハ"],["[hxㇵ-ㇹ]i","ヒ"],["[hxㇵ-ㇹ]u","フ"],["[hxㇵ-ㇹ]e","ヘ"],["[hxㇵ-ㇹ]o","ホ"],["[hx]","ㇵ"],["[rㇻ-ㇿ]a","ラ"],["[rㇻ-ㇿ]i","リ"],["[rㇻ-ㇿ]u","ル"],["[rㇻ-ㇿ]e","レ"],["[rㇻ-ㇿ]o","ロ"],["r","ㇽ"],["ka","カ"],["ki","キ"],["ku","ク"],["ke","ケ"],["ko","コ"],["k","ㇰ"],["ga","ガ"],["gi","ギ"],["gu","グ"],["ge","ゲ"],["go","ゴ"],["g","ㇰ゙"],["(ts|ċ)a",""],["ċi",""],["(ts|ċ)u","ツ"],["(ts|ċ)e",""],["(ts|ċ)o",""],["sa","サ"],["ṡi",""],["su","ス"],["se","セ"],["so","ソ"],["şa",""],["[sş]i","シ"],["şu",""],["şe",""],["şo",""],["dza",""],["dżi",""],["dzu","ヅ"],["dze",""],["dzo",""],["za","ザ"],["żi",""],["zu","ズ"],["ze","ゼ"],["zo","ゾ"],["dja",""],["d[jz]i","ヂ"],["dju",""],["dje",""],["djo",""],["ja",""],["[jz]i","ジ"],["ju",""],["je",""],["jo",""],["ca",""],["(ts|c)i","チ"],["cu",""],["ce",""],["co",""],["(ts|ċ)",""],["ṡ","ㇲ"],["[sş]","ㇱ"],["dż","ッ゙"],["ż","ㇲ゙"],["d[jz]","\uD82C\uDD5A゙"],["[jz]","ㇱ゙"],["c","\uD82C\uDD5A"],["ta","タ"],["ti",""],["tu",""],["te","テ"],["to","ト"],["t","ㇳ"],["da","ダ"],["di",""],["du",""],["de","デ"],["do","ド"],["d","ㇳ゙"],["na","ナ"],["ni","ニ"],["nu","ヌ"],["ne","ネ"],["no","ノ"],["n","ン"],["ḣu",""],["ba","バ"],["bi","ビ"],["bu","ブ"],["be","ベ"],["bo","ボ"],["b","ㇷ゙"],["pa","パ"],["pi","ピ"],["pu","プ"],["pe","ペ"],["po","ポ"],["p","ㇷ゚"],["ma","マ"],["mi","ミ"],["mu","ム"],["me","メ"],["mo","モ"],["m","ㇺ"],["ya","ヤ"],["yi","\uD82C\uDD20"],["yu","ユ"],["ye","\uD82C\uDD21"],["yo","ヨ"],["y",""],["wa","ワ"],["wi","ヰ"],["wu","\uD82C\uDD22"],["we","ヱ"],["wo","ヲ"],["w",""],["va","ヷ"],["vi","ヸ"],["vu",""],["ve","ヹ"],["vo","ヺ"],["v","\uD82C\uDD6D゙"],["fa",""],["fi",""],["fu",""],["fe",""],["fo",""],["f","\uD82C\uDD6D゚"],["a","ア"],["i","イ"],["u","ウ"],["e","エ"],["o","オ"]],o=document.createElement("style");if(o.textContent='@font-face{font-family:"Mkana+";src:local("Mkana+"),url("https://toracatman.github.io/fonts/mkanaplus.woff2")format("woff2"),url("https://toracatman.github.io/fonts/mkanaplus.woff")format("woff");font-display:swap;}*{font-family:"Mkana+"!important;}',document.head.appendChild(o),null!=(e=document.querySelectorAll('style,.mw-parser-output [lang]:not([lang^="ain"]),.mw-parser-output [lang]:not([lang^="ain"]) *,.mw-editsection *,.external,pre')))for(var n=0;n<e.length;n++)e[n].getAttribute(t)!=a&&e[n].setAttribute(t,a);if(null!=(e=document.querySelectorAll(".mw-parser-output *,#mw-panel-toc-list :nth-child(n+2) *,#firstHeading *,#catlinks ul *,.mw-prefixindex-list *,.mw-allpages-chunk *,.mw-category *"))){for(var n=0;n<e.length;n++)if(e[n].getAttribute(t)!=a&&(e[n].setAttribute(t,a),e[n].hasChildNodes())){var r=e=>{for(var t=e.split(" | "),a=0;a<i.length;a++)t[0]=t[0].replace(RegExp(i[a][0],"ig"),i[a][1]);return t.join(" | ")};if(0==e[n].childElementCount)e[n].textContent=r(e[n].textContent);else{var l=e[n],u=document.createTextNode("");l.replaceWith(u);for(var d=document.createDocumentFragment(),s=l.firstElementChild;null!=s;)s.replaceWith(document.createTextNode("\\x1a")),d.appendChild(s),s=l.firstElementChild;var f=r(l.textContent).split("\\x1a");l.textContent="",l.appendChild(document.createTextNode(f[0]));for(var p=1;p<f.length;p++)l.appendChild(d.firstElementChild),l.appendChild(document.createTextNode(f[p]));u.replaceWith(l)}}}})();`,
	`javascript:(()=>{var e,t="data-convert",a="true",i=[["\xe1","a"],["\xed","i"],["\xfa","u"],["\xe9","e"],["\xf3","o"],[", ?","、"],["\\\\. ?","。"],["! ?","！"],["\\\\? ?","？"],[" ?“","「"],["” ?","」"],[" ?‘","『"],["’ ?","』"],["a[hx]","a\uD82C\uDD41"],["i[hx]","i\uD82C\uDD42"],["u[hx]","u\uD82C\uDD43"],["e[hx]","e\uD82C\uDD44"],["o[hx]","o\uD82C\uDD45"],["ar","a\uD82C\uDD4B"],["ir","i\uD82C\uDD4C"],["ur","u\uD82C\uDD4D"],["er","e\uD82C\uDD4E"],["or","o\uD82C\uDD4F"],["[hx\uD82C\uDD41-\uD82C\uDD45]a","は"],["[hx\uD82C\uDD41-\uD82C\uDD45]i","ひ"],["[hx\uD82C\uDD41-\uD82C\uDD45]u","ふ"],["[hx\uD82C\uDD41-\uD82C\uDD45]e","へ"],["[hx\uD82C\uDD41-\uD82C\uDD45]o","ほ"],["[hx]","\uD82C\uDD41"],["[r\uD82C\uDD4B-\uD82C\uDD4F]a","ら"],["[r\uD82C\uDD4B-\uD82C\uDD4F]i","り"],["[r\uD82C\uDD4B-\uD82C\uDD4F]u","る"],["[r\uD82C\uDD4B-\uD82C\uDD4F]e","れ"],["[r\uD82C\uDD4B-\uD82C\uDD4F]o","ろ"],["r","\uD82C\uDD4D"],["ka","か"],["ki","き"],["ku","く"],["ke","け"],["ko","こ"],["k","\uD82C\uDD31"],["ga","が"],["gi","ぎ"],["gu","ぐ"],["ge","げ"],["go","ご"],["g","\uD82C\uDD31゙"],["(ts|ċ)a",""],["ċi",""],["(ts|ċ)u","つ"],["(ts|ċ)e",""],["(ts|ċ)o",""],["sa","さ"],["ṡi",""],["su","す"],["se","せ"],["so","そ"],["şa","\uD82C\uDC43"],["[sş]i","し"],["şu",""],["şe",""],["şo",""],["dza",""],["dżi",""],["dzu","づ"],["dze",""],["dzo",""],["za","ざ"],["żi",""],["zu","ず"],["ze","ぜ"],["zo","ぞ"],["dja",""],["d[jz]i","ぢ"],["dju",""],["dje",""],["djo",""],["ja",""],["[jz]i","じ"],["ju",""],["je",""],["jo",""],["ca",""],["(ts|c)i","ち"],["cu",""],["ce",""],["co",""],["(ts|ċ)",""],["ṡ","\uD82C\uDD35"],["[sş]","\uD82C\uDD34"],["dż","っ゙"],["ż","\uD82C\uDD35゙"],["d[jz]","\uD82C\uDD39゙"],["[jz]","\uD82C\uDD34゙"],["c","\uD82C\uDD39"],["ta","た"],["ti",""],["tu","\uD82C\uDC6D"],["te","て"],["to","と"],["t","\uD82C\uDD3B"],["da","だ"],["di",""],["du",""],["de","で"],["do","ど"],["d","\uD82C\uDD3B゙"],["na","な"],["ni","に"],["nu","ぬ"],["ne","ね"],["no","の"],["n","ん"],["ḣu","\uD82C\uDC39"],["ba","ば"],["bi","び"],["bu","ぶ"],["be","べ"],["bo","ぼ"],["b","\uD82C\uDD43゙"],["pa","ぱ"],["pi","ぴ"],["pu","ぷ"],["pe","ぺ"],["po","ぽ"],["p","\uD82C\uDD43゚"],["ma","ま"],["mi","み"],["mu","む"],["me","め"],["mo","も"],["m","\uD82C\uDD48"],["ya","や"],["yi","\uD82C\uDC06"],["yu","ゆ"],["ye","\uD82C\uDC01"],["yo","よ"],["y",""],["wa","わ"],["wi","ゐ"],["wu","\uD82C\uDD1F"],["we","ゑ"],["wo","を"],["w",""],["va",""],["vi",""],["vu",""],["ve",""],["vo",""],["v","\uD82C\uDD6A゙"],["fa",""],["fi",""],["fu",""],["fe",""],["fo",""],["f","\uD82C\uDD6A゚"],["a","あ"],["i","い"],["u","う"],["e","え"],["o","お"]],o=document.createElement("style");if(o.textContent='@font-face{font-family:"Mkana+";src:local("Mkana+"),url("https://toracatman.github.io/fonts/mkanaplus.woff2")format("woff2"),url("https://toracatman.github.io/fonts/mkanaplus.woff")format("woff");font-display:swap;}*{font-family:"Mkana+"!important;}',document.head.appendChild(o),null!=(e=document.querySelectorAll('style,.mw-parser-output [lang]:not([lang^="ain"]),.mw-parser-output [lang]:not([lang^="ain"]) *,.mw-editsection *,.external,pre')))for(var n=0;n<e.length;n++)e[n].getAttribute(t)!=a&&e[n].setAttribute(t,a);if(null!=(e=document.querySelectorAll(".mw-parser-output *,#mw-panel-toc-list :nth-child(n+2) *,#firstHeading *,#catlinks ul *,.mw-prefixindex-list *,.mw-allpages-chunk *,.mw-category *"))){for(var n=0;n<e.length;n++)if(e[n].getAttribute(t)!=a&&(e[n].setAttribute(t,a),e[n].hasChildNodes())){var r=e=>{for(var t=e.split(" | "),a=0;a<i.length;a++)t[0]=t[0].replace(RegExp(i[a][0],"igu"),i[a][1]);return t.join(" | ")};if(0==e[n].childElementCount)e[n].textContent=r(e[n].textContent);else{var l=e[n],u=document.createTextNode("");l.replaceWith(u);for(var d=document.createDocumentFragment(),s=l.firstElementChild;null!=s;)s.replaceWith(document.createTextNode("\\x1a")),d.appendChild(s),s=l.firstElementChild;var f=r(l.textContent).split("\\x1a");l.textContent="",l.appendChild(document.createTextNode(f[0]));for(var p=1;p<f.length;p++)l.appendChild(d.firstElementChild),l.appendChild(document.createTextNode(f[p]));u.replaceWith(l)}}}})();`,
	`javascript:(()=>{var e,t="data-convert",r="true",l=[["\xc1","Á"],["\xe1","á"],["\xcd","Í"],["\xed","í"],["\xda","Ú"],["\xfa","ú"],["\xc9","É"],["\xe9","é"],["\xd3","Ó"],["\xf3","ó"],["A","А"],["a","а"],["I","И"],["i","и"],["U","У"],["u","у"],["E","Э"],["e","э"],["O","О"],["o","о"],["K","К"],["k","к"],["G","Г"],["g","г"],["S","С"],["s","с"],["Z","З"],["z","з"],["Ṡ","С̇"],["ṡ","с̇"],["Ż","З̇"],["ż","з̇"],["Ş","Ш"],["ş","ш"],["J","Ж"],["J","ж"],["C","Ч"],["c","ч"],["Ċ","Ц"],["ċ","ц"],["T","Т"],["t","т"],["D","Д"],["d","д"],["N","Н"],["n","н"],["Ḣ","Х̇"],["ḣ","х̇"],["[HX]","Х"],["[hx]","х"],["P","П"],["p","п"],["B","Б"],["b","б"],["M","М"],["m","м"],["Y","Й"],["y","й"],["R","Р"],["r","р"],["W","Ў"],["w","ў"],["V","В"],["v","в"],["F","Ф"],["f","ф"]];if(null!=(e=document.querySelectorAll('style,.mw-parser-output [lang]:not([lang^="ain"]),.mw-parser-output [lang]:not([lang^="ain"]) *,.mw-editsection *,.external,pre')))for(var n=0;n<e.length;n++)e[n].getAttribute(t)!=r&&e[n].setAttribute(t,r);if(null!=(e=document.querySelectorAll(".mw-parser-output *,#mw-panel-toc-list :nth-child(n+2) *,#firstHeading *,#catlinks ul *,.mw-prefixindex-list *,.mw-allpages-chunk *,.mw-category *"))){for(var n=0;n<e.length;n++)if(e[n].getAttribute(t)!=r&&(e[n].setAttribute(t,r),e[n].hasChildNodes())){var a=e=>{for(var t=e.split(" | "),r=0;r<l.length;r++)t[0]=t[0].replace(RegExp(l[r][0],"g"),l[r][1]);return t.join(" | ")};if(0==e[n].childElementCount)e[n].textContent=a(e[n].textContent);else{var i=e[n],o=document.createTextNode("");i.replaceWith(o);for(var p=document.createDocumentFragment(),d=i.firstElementChild;null!=d;)d.replaceWith(document.createTextNode("\\x1a")),p.appendChild(d),d=i.firstElementChild;var u=a(i.textContent).split("\\x1a");i.textContent="",i.appendChild(document.createTextNode(u[0]));for(var c=1;c<u.length;c++)i.appendChild(p.firstElementChild),i.appendChild(document.createTextNode(u[c]));o.replaceWith(i)}}}})();`,
];

function change() {
	var l = Number(document.form1.letter.value);
	var b = bookmarklet[l];
	if (l == 0) {
		kana.classList.remove("none");
		switch (document.form1.tu.value) {
		case "1":
			b = b.replace("トゥ", "ト゚");
			break;
		case "2":
			b = b.replace("トゥ", "ツ゚");
			break;
		}
		if (document.form1.ce.value == "1") {
			b = b.replace("チェ", "セ゚");
		}
		if (document.form1.yw.value == "1") {
			b = b.replace('["yi?","イ"]', '["yi","イ"],["y","ィ"]')
				.replace('["wu?","ウ"]', '["wu","ウ"],["w","ゥ"]');
		}
		if (document.form1.renzoku.value == "1") {
			b = b.replace(/\["[^"]+?\(\?=[^"]+?\)","ッ"\],/g, "");
		}
		if (document.form1.nm.value == "1") {
			b = b.replace('["m(?=[bmp])","ン"],', "");
		}
	}
	else {
		kana.classList.add("none");
	}

	document.form1.output.value = b;
}

function messageActive() {
	message.textContent = "コピーしました！";
	setTimeout(() => { message.textContent = ""; }, 1000);
}
function copyToClipboard() {
	if (navigator.clipboard) {
		return navigator.clipboard.writeText(document.form1.output.value).then(() => {
			messageActive();
		});
	}
	else {
		document.form1.output.select();
		document.execCommand("copy");
		messageActive();
	}
}

(() => {
	change();
})();