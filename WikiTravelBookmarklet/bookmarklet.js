var kana = document.getElementById("kana");
var message = document.getElementById("message");

var bookmarklet = [
	`javascript:(()=>{var e="ig",a=[["\xe1","a"],["\xed","i"],["\xfa","u"],["\xe9","e"],["\xf3","o"],["(?<=\\\\w)[-=](?=\\\\w)",""],[", ?","、"],["\\\\. ?","。"],["! ?","！"],["\\\\? ?","？"],[" ?“","「"],["” ?","」"],[" ?‘","『"],["’ ?","』"],["a[hx]","aㇵ"],["i[hx]","iㇶ"],["u[hx]","uㇷ"],["e[hx]","eㇸ"],["o[hx]","oㇹ"],["ar","aㇻ"],["ir","iㇼ"],["ur","uㇽ"],["er","eㇾ"],["or","oㇿ"],["[hxㇵ-ㇹ](?=[hx])","ッ"],["[hxㇵ-ㇹ]a","ハ"],["[hxㇵ-ㇹ]i","ヒ"],["[hḣxㇵ-ㇹ]u","フ"],["[hxㇵ-ㇹ]e","ヘ"],["[hxㇵ-ㇹ]o","ホ"],["[hx]","ㇵ"],["[rㇻ-ㇿ](?=r)","ッ"],["[rㇻ-ㇿ]a","ラ"],["[rㇻ-ㇿ]i","リ"],["[rㇻ-ㇿ]u","ル"],["[rㇻ-ㇿ]e","レ"],["[rㇻ-ㇿ]o","ロ"],["r","ㇽ"],["k(?=k)","ッ"],["ka","カ"],["ki","キ"],["ku","ク"],["ke","ケ"],["ko","コ"],["k","ㇰ"],["g(?=g)","ッ"],["ga","ガ"],["gi","ギ"],["gu","グ"],["ge","ゲ"],["go","ゴ"],["g","ㇰ゙"],["(ts|ċ)a","ツァ"],["ċi","ツィ"],["(ts|ċ)e","ツェ"],["(ts|ċ)o","ツォ"],["(ts|ċ)u","ツ"],["s(?=s)","ッ"],["sa","サ"],["ṡi","スィ"],["su","ス"],["se","セ"],["so","ソ"],["ş(?=ş)","ッ"],["şa","シャ"],["şu","シュ"],["şe","シェ"],["şo","ショ"],["[sş]i","シ"],["d(?=d)","ッ"],["dza","ヅァ"],["dżi","ヅィ"],["dze","ヅェ"],["dzo","ヅォ"],["dzu","ヅ"],["z(?=z)","ッ"],["za","ザ"],["żi","ズィ"],["zu","ズ"],["ze","ゼ"],["zo","ゾ"],["dja","ヂャ"],["dju","ヂュ"],["dje","ヂェ"],["djo","ヂョ"],["d[jz]i","ヂ"],["j(?=j)","ッ"],["ja","ジャ"],["ju","ジュ"],["je","ジェ"],["jo","ジョ"],["[jz]i","ジ"],["ca","チャ"],["cu","チュ"],["ce","チェ"],["co","チョ"],["(ts|c)i","チ"],["(ts|ċ)","ッ"],["ṡ","ㇲ"],["[sş]","ㇱ"],["dż","ッ゙"],["ż","ㇱ゙"],["d[jz]","ッ゙"],["[jz]","ㇱ゙"],["c","ッ"],["ta","タ"],["ti","ティ"],["tu","トゥ"],["te","テ"],["to","ト"],["t","ッ"],["da","ダ"],["di","ディ"],["du","ドゥ"],["de","デ"],["do","ド"],["d","ッ゙"],["na","ナ"],["ni","ニ"],["nu","ヌ"],["ne","ネ"],["no","ノ"],["n","ン"],["m(?=[bmp])","ン"],["b(?=b)","ッ"],["ba","バ"],["bi","ビ"],["bu","ブ"],["be","ベ"],["bo","ボ"],["b","ㇷ゙"],["p(?=p)","ッ"],["pa","パ"],["pi","ピ"],["pu","プ"],["pe","ペ"],["po","ポ"],["p","ㇷ゚"],["ma","マ"],["mi","ミ"],["mu","ム"],["me","メ"],["mo","モ"],["m","ㇺ"],["ya","ヤ"],["yu","ユ"],["ye","イェ"],["yo","ヨ"],["yi?","イ"],["wa","ワ"],["wi","ウィ"],["we","ウェ"],["wo","ウォ"],["wu?","ウ"],["v(?=v)","ッ"],["va","ヴァ"],["vi","ヴィ"],["ve","ヴェ"],["vo","ヴォ"],["vu","ヴ"],["v","ゥ゙"],["f(?=f)","ッ"],["fa","ファ"],["fi","フィ"],["fe","フェ"],["fo","フォ"],["fu","フ"],["f","ㇷ"],["a","ア"],["i","イ"],["u","ウ"],["e","エ"],["o","オ"]],o=document.querySelectorAll(":lang(ain)");if(0!=o.length){for(var i=o[0].textContent,t=1;t<o.length;t++)i+="\x1e"+o[t].textContent;var u=[];i=i.replace(/[A-Z]+\d|[0-9↊-↏-]+(?=p|pe|n|iw)|[0-9↊-↏-]+[A-Za-z]+/g,e=>(u.push(e),"\x1a"));for(var t=0;t<a.length;t++)i=i.replace(RegExp(a[t][0],e),a[t][1]);var r=i.split("\x1a");i="";for(var t=0;t<u.length;t++)i+=r[t]+u[t];i+=r[u.length],i=i.split("\x1e");for(var t=0;t<o.length;t++)o[t].textContent=i[t]}})();`,
	`javascript:(()=>{var a="ig",e=[["\xe1","a"],["\xed","i"],["\xfa","u"],["\xe9","e"],["\xf3","o"],[", ?","、"],["\\\\. ?","。"],["! ?","！"],["\\\\? ?","？"],[" ?“","「"],["” ?","」"],[" ?‘","『"],["’ ?","』"],["(?<=[a-z])-(?=[a-z])","・"],["(?<=[a-z])=|=(?=[a-z])","゠"],["ih","iㇶ"],["uh","uㇷ"],["eh","eㇸ"],["oh","oㇹ"],["h","ㇵ"],["iĥ","iㇶ‌̣"],["uĥ","uㇷ‌̣"],["eĥ","eㇸ‌̣"],["oĥ","oㇹ‌̣"],["ĥ","ㇵ‌̣"],["ar","aㇻ"],["ir","iㇼ"],["er","eㇾ"],["or","oㇿ"],["r","ㇽ"],["[ㇵ-ㇹ]a","ハ"],["[ㇵ-ㇹ]i","ヒ"],["[ㇵ-ㇹ]u","フ"],["[ㇵ-ㇹ]e","ヘ"],["[ㇵ-ㇹ]o","ホ"],["[ㇵ-ㇹ]‌̣a",""],["[ㇵ-ㇹ]‌̣i",""],["[ㇵ-ㇹ]‌̣u",""],["[ㇵ-ㇹ]‌̣e",""],["[ㇵ-ㇹ]‌̣o",""],["ㇷ‌̣","‌̣"],["[ㇻ-ㇿ]a","ラ"],["[ㇻ-ㇿ]i","リ"],["[ㇻ-ㇿ]u","ル"],["[ㇻ-ㇿ]e","レ"],["[ㇻ-ㇿ]o","ロ"],["ka","カ"],["ki","キ"],["ku","ク"],["ke","ケ"],["ko","コ"],["k","ㇰ"],["ga","ガ"],["gi","ギ"],["gu","グ"],["ge","ゲ"],["go","ゴ"],["g","ㇰ゙"],["ċa",""],["ċi",""],["ċu","ツ"],["ċe",""],["ċo",""],["sa","サ"],["ṡi",""],["su","ス"],["se","セ"],["so","ソ"],["ŝa",""],["[sŝ]i","シ"],["ŝu",""],["ŝe",""],["ŝo",""],["d̂a",""],["d̂̇i",""],["d̂u","ヅ"],["d̂e",""],["d̂o",""],["za","ザ"],["żi",""],["zu","ズ"],["ze","ゼ"],["zo","ゾ"],["ĝa",""],["d̂i|ĝi","ヂ"],["ĝu",""],["ĝe",""],["ĝo",""],["ĵa",""],["[ĵz]i","ジ"],["ĵu",""],["ĵe",""],["ĵo",""],["ca",""],["ci","チ"],["cu",""],["ce",""],["co",""],["ċ",""],["ṡ","ㇲ"],["[sŝ]","ㇱ"],["d̂̇","ッ゙"],["ż","ㇲ゙"],["d[ĵz]","\uD82C\uDD5A゙"],["[ĵz]","ㇱ゙"],["c","\uD82C\uDD5A"],["ta","タ"],["ti",""],["tu",""],["te","テ"],["to","ト"],["t","ㇳ"],["da","ダ"],["di",""],["du",""],["de","デ"],["do","ド"],["d","ㇳ゙"],["na","ナ"],["ni","ニ"],["nu","ヌ"],["ne","ネ"],["no","ノ"],["n(?=゠[aiueo])","ㇴ"],["n","ン"],["ḣu",""],["ba","バ"],["bi","ビ"],["bu","ブ"],["be","ベ"],["bo","ボ"],["b","ㇷ゙"],["pa","パ"],["pi","ピ"],["pu","プ"],["pe","ペ"],["po","ポ"],["p","ㇷ゚"],["ma","マ"],["mi","ミ"],["mu","ム"],["me","メ"],["mo","モ"],["m","ㇺ"],["ya","ヤ"],["yi","\uD82C\uDD20"],["yu","ユ"],["ye","\uD82C\uDD21"],["yo","ヨ"],["y",""],["wa","ワ"],["wi","ヰ"],["wu","\uD82C\uDD22"],["we","ヱ"],["wo","ヲ"],["w",""],["va","ヷ"],["vi","ヸ"],["vu",""],["ve","ヹ"],["vo","ヺ"],["v","\uD82C\uDD6D゙"],["fa",""],["fi",""],["fu",""],["fe",""],["fo",""],["f","\uD82C\uDD6D゚"],["a","ア"],["i","イ"],["u","ウ"],["e","エ"],["o","オ"],["ʼ",""]],o=document.createElement("style");o.textContent='@font-face{font-family:"Mkana+";src:local("Mkana+"),url("https://toracatman.github.io/fonts/mkanaplus.woff2")format("woff2"),url("https://toracatman.github.io/fonts/mkanaplus.woff")format("woff");font-display:swap;}:lang(ain){font-family:"Mkana+";}',document.body.appendChild(o);var t=document.querySelectorAll(":lang(ain)");if(0!=t.length){for(var i=t[0].textContent,n=1;n<t.length;n++)i+="\x1e"+t[n].textContent;var u=[];i=i.replace(/[A-Z]+\d|[0-9↊-↏-]+(?=p|pe|n|iw)|[0-9↊-↏-]+[A-Za-z]+/g,a=>(u.push(a),"\x1a"));for(var n=0;n<e.length;n++)i=i.replace(RegExp(e[n][0],a),e[n][1]);var f=i.split("\x1a");i="";for(var n=0;n<u.length;n++)i+=f[n]+u[n];i+=f[u.length],i=i.split("\x1e");for(var n=0;n<t.length;n++)t[n].textContent=i[n]}})();`,
	`javascript:(()=>{var a="igu",e=[["\xe1","a"],["\xed","i"],["\xfa","u"],["\xe9","e"],["\xf3","o"],[", ?","、"],["\\\\. ?","。"],["! ?","！"],["\\\\? ?","？"],[" ?“","「"],["” ?","」"],[" ?‘","『"],["’ ?","』"],["(?<=[a-z])-(?=[a-z])","・"],["(?<=[a-z])=|=(?=[a-z])","゠"],["ih","i\uD82C\uDD42"],["uh","u\uD82C\uDD43"],["eh","e\uD82C\uDD44"],["oh","o\uD82C\uDD45"],["h","\uD82C\uDD41"],["iĥ","i\uD82C\uDD42‌̣"],["uĥ","u\uD82C\uDD43‌̣"],["eĥ","e\uD82C\uDD44‌̣"],["oĥ","o\uD82C\uDD45‌̣"],["ĥ","\uD82C\uDD41‌̣"],["ar","a\uD82C\uDD4B"],["ir","i\uD82C\uDD4C"],["er","e\uD82C\uDD4E"],["or","o\uD82C\uDD4F"],["r","\uD82C\uDD4D"],["[\uD82C\uDD41-\uD82C\uDD45]a","は"],["[\uD82C\uDD41-\uD82C\uDD45]i","ひ"],["[\uD82C\uDD41-\uD82C\uDD45]u","ふ"],["[\uD82C\uDD41-\uD82C\uDD45]e","へ"],["[\uD82C\uDD41-\uD82C\uDD45]o","ほ"],["[\uD82C\uDD41-\uD82C\uDD45]‌̣a",""],["[\uD82C\uDD41-\uD82C\uDD45]‌̣i",""],["[\uD82C\uDD41-\uD82C\uDD45]‌̣u",""],["[\uD82C\uDD41-\uD82C\uDD45]‌̣e",""],["[\uD82C\uDD41-\uD82C\uDD45]‌̣o",""],["\uD82C\uDD43‌̣","‌̣"],["[\uD82C\uDD4B-\uD82C\uDD4F]a","ら"],["[\uD82C\uDD4B-\uD82C\uDD4F]i","り"],["[\uD82C\uDD4B-\uD82C\uDD4F]u","る"],["[\uD82C\uDD4B-\uD82C\uDD4F]e","れ"],["[\uD82C\uDD4B-\uD82C\uDD4F]o","ろ"],["ka","か"],["ki","き"],["ku","く"],["ke","け"],["ko","こ"],["k","\uD82C\uDD31"],["ga","が"],["gi","ぎ"],["gu","ぐ"],["ge","げ"],["go","ご"],["g","\uD82C\uDD31゙"],["ċa",""],["ċi",""],["ċu","つ"],["ċe",""],["ċo",""],["sa","さ"],["ṡi",""],["su","す"],["se","せ"],["so","そ"],["ŝa","\uD82C\uDC43"],["[sŝ]i","し"],["ŝu",""],["ŝe",""],["ŝo",""],["d̂a",""],["d̂̇i",""],["d̂u","づ"],["d̂e",""],["d̂o",""],["za","ざ"],["żi",""],["zu","ず"],["ze","ぜ"],["zo","ぞ"],["ĝa",""],["d̂i|ĝi","ぢ"],["ĝu",""],["ĝe",""],["ĝo",""],["ĵa",""],["[ĵz]i","じ"],["ĵu",""],["ĵe",""],["ĵo",""],["ca",""],["ci","ち"],["cu",""],["ce",""],["co",""],["ċ",""],["ṡ","\uD82C\uDD35"],["[sŝ]","\uD82C\uDD34"],["d̂̇","っ゙"],["ż","\uD82C\uDD35゙"],["d[ĵz]","\uD82C\uDD39゙"],["[ĵz]","\uD82C\uDD34゙"],["c","\uD82C\uDD39"],["ta","た"],["ti",""],["tu","\uD82C\uDC6D"],["te","て"],["to","と"],["t","\uD82C\uDD3B"],["da","だ"],["di",""],["du",""],["de","で"],["do","ど"],["d","\uD82C\uDD3B゙"],["na","な"],["ni","に"],["nu","ぬ"],["ne","ね"],["no","の"],["n(?=゠[aiueo])","\uD82C\uDD3E"],["n","ん"],["ḣu","\uD82C\uDC39"],["ba","ば"],["bi","び"],["bu","ぶ"],["be","べ"],["bo","ぼ"],["b","\uD82C\uDD43゙"],["pa","ぱ"],["pi","ぴ"],["pu","ぷ"],["pe","ぺ"],["po","ぽ"],["p","\uD82C\uDD43゚"],["ma","ま"],["mi","み"],["mu","む"],["me","め"],["mo","も"],["m","\uD82C\uDD48"],["ya","や"],["yi","\uD82C\uDC06"],["yu","ゆ"],["ye","\uD82C\uDC01"],["yo","よ"],["y",""],["wa","わ"],["wi","ゐ"],["wu","\uD82C\uDD1F"],["we","ゑ"],["wo","を"],["w",""],["va",""],["vi",""],["vu",""],["ve",""],["vo",""],["v","\uD82C\uDD6A゙"],["fa",""],["fi",""],["fu",""],["fe",""],["fo",""],["f","\uD82C\uDD6A゚"],["a","あ"],["i","い"],["u","う"],["e","え"],["o","お"],["ʼ",""]],o=document.createElement("style");o.textContent='@font-face{font-family:"Mkana+";src:local("Mkana+"),url("https://toracatman.github.io/fonts/mkanaplus.woff2")format("woff2"),url("https://toracatman.github.io/fonts/mkanaplus.woff")format("woff");font-display:swap;}:lang(ain){font-family:"Mkana+";}',document.body.appendChild(o);var t=document.querySelectorAll(":lang(ain)");if(0!=t.length){for(var i=t[0].textContent,n=1;n<t.length;n++)i+="\x1e"+t[n].textContent;var u=[];i=i.replace(/[A-Z]+\d|[0-9↊-↏-]+(?=p|pe|n|iw)|[0-9↊-↏-]+[A-Za-z]+/g,a=>(u.push(a),"\x1a"));for(var n=0;n<e.length;n++)i=i.replace(RegExp(e[n][0],a),e[n][1]);var f=i.split("\x1a");i="";for(var n=0;n<u.length;n++)i+=f[n]+u[n];i+=f[u.length],i=i.split("\x1e");for(var n=0;n<t.length;n++)t[n].textContent=i[n]}})();`,
	`javascript:(()=>{var e="g",t=[["\xc1","Á"],["\xe1","á"],["\xcd","Í"],["\xed","í"],["\xda","Ú"],["\xfa","ú"],["\xc9","É"],["\xe9","é"],["\xd3","Ó"],["\xf3","ó"],["A","А"],["a","а"],["I","И"],["i","и"],["U","У"],["u","у"],["E","Э"],["e","э"],["O","О"],["o","о"],["K","К"],["k","к"],["G","Г"],["g","г"],["S","С"],["s","с"],["Z","З"],["z","з"],["Ṡ","С̇"],["ṡ","с̇"],["Ż","З̇"],["ż","з̇"],["Ŝ","Ш"],["ŝ","ш"],["Ĵ","Ж"],["ĵ","ж"],["C","Ч"],["c","ч"],["Ċ","Ц"],["ċ","ц"],["T","Т"],["t","т"],["D","Д"],["d","д"],["N","Н"],["n","н"],["Ḣ","Һ̇"],["ḣ","һ̇"],["H","Һ"],["h","һ"],["Ĥ","Х"],["ĥ","х"],["P","П"],["p","п"],["B","Б"],["b","б"],["M","М"],["m","м"],["Y","Ј"],["y","ј"],["R","Р"],["r","р"],["W","Ԝ"],["w","ԝ"],["V","В"],["v","в"],["F","Ф"],["f","ф"]],a=document.querySelectorAll(":lang(ain)");if(0!=a.length){for(var n=a[0].textContent,r=1;r<a.length;r++)n+="\x1e"+a[r].textContent;var l=[];n=n.replace(/[A-Z]+\d|[0-9↊-↏-]+(?=p|pe|n|iw)|[0-9↊-↏-]+[A-Za-z]+/g,e=>(l.push(e),"\x1a"));for(var r=0;r<t.length;r++)n=n.replace(RegExp(t[r][0],e),t[r][1]);var g=n.split("\x1a");n="";for(var r=0;r<l.length;r++)n+=g[r]+l[r];n+=g[l.length],n=n.split("\x1e");for(var r=0;r<a.length;r++)a[r].textContent=n[r]}})();`,
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