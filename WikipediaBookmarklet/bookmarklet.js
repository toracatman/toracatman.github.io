var lang = document.documentElement.lang;
var message = document.getElementById("message");

var bookmarklet = {
	"roman": `javascript:(()=>{let e=document.querySelectorAll(".mw-parser-output :lang(ain)");if(null!=e)for(let t=0;t<e.length;t++){if(!e[t].hasChildNodes())continue;let l=e=>{let t=e.getAttribute("data-roman"),l=t??e.textContent;return null!=t&&(l=t,e.removeAttribute("data-roman")),l};if(0==e[t].childElementCount)e[t].textContent=l(e[t]);else{let n=e[t],r=document.createTextNode("");n.replaceWith(r);let a=document.createDocumentFragment(),i=n.firstElementChild;for(;null!=i;)i.replaceWith(document.createTextNode("\\x1a")),a.appendChild(i),i=n.firstElementChild;let d=l(n).split("\\x1a");n.textContent="",n.appendChild(document.createTextNode(d[0]));for(let o=1;o<d.length;o++)n.appendChild(a.firstElementChild),n.appendChild(document.createTextNode(d[o]));r.replaceWith(n)}}})();`,
	"katakana": `javascript:(()=>{let e=[["á","a"],["í","i"],["ú","u"],["é","e"],["ó","o"],[", ?","、"],["\\\\. ?","。"],["! ?","！"],["\\\\? ?","？"],[" ?“","「"],["” ?","」"],[" ?‘","『"],["’ ?","』"],["(?<=[a-z])[-‐](?=[a-z])","・"],["(?<=[a-z])[=⹀]|[=⹀](?=[a-z])","゠"],["ih","iㇶ"],["uh","uㇷ"],["eh","eㇸ"],["oh","oㇹ"],["h","ㇵ"],["ix","iｯㇶ"],["ux","uｯㇷ"],["ex","eｯㇸ"],["ox","oｯㇹ"],["x","ｯㇵ"],["ar","aㇻ"],["ir","iㇼ"],["er","eㇾ"],["or","oㇿ"],["r","ㇽ"],["[ㇵ-ㇹ]a","ハ"],["[ㇵ-ㇹ]i","ヒ"],["[ㇵ-ㇹ]u","フ"],["[ㇵ-ㇹ]e","ヘ"],["[ㇵ-ㇹ]o","ホ"],["[ㇻ-ㇿ]a","ラ"],["[ㇻ-ㇿ]i","リ"],["[ㇻ-ㇿ]u","ル"],["[ㇻ-ㇿ]e","レ"],["[ㇻ-ㇿ]o","ロ"],["ka","カ"],["ki","キ"],["ku","ク"],["ke","ケ"],["ko","コ"],["k","ㇰ"],["ga","ガ"],["gi","ギ"],["gu","グ"],["ge","ゲ"],["go","ゴ"],["g","ㇰ゙"],["sa","サ"],["si","シ"],["su","ス"],["se","セ"],["so","ソ"],["s","ㇱ"],["za","ザ"],["zi","ジ"],["zu","ズ"],["ze","ゼ"],["zo","ゾ"],["z","ㇱ゙"],["ta","タ"],["ti","チ゚"],["tu","ツ゚"],["te","テ"],["to","ト"],["t","ッ"],["da","ダ"],["di","ヂ"],["du","ヅ"],["de","デ"],["do","ド"],["d","ッ゙"],["ca","ﾁｬ"],["ci","チ"],["cu","ﾁｭ"],["ce","ﾁｪ"],["co","ﾁｮ"],["c","ﾁ"],["na","ナ"],["ni","ニ"],["nu","ヌ"],["ne","ネ"],["no","ノ"],["n","ン"],["pa","パ"],["pi","ピ"],["pu","プ"],["pe","ペ"],["po","ポ"],["p","ㇷ゚"],["ba","バ"],["bi","ビ"],["bu","ブ"],["be","ベ"],["bo","ボ"],["b","ㇷ゙"],["ma","マ"],["mi","ミ"],["mu","ム"],["me","メ"],["mo","モ"],["m","ㇺ"],["ya","ヤ"],["yi","ｲｨ"],["yu","ユ"],["ye","ｲｪ"],["yo","ヨ"],["y","ィ"],["ja","ヤ゙"],["ji","ｲｨ゙"],["ju","ユ゙"],["je","ｲｪ゙"],["jo","ヨ゙"],["j","ィ゙"],["wa","ワ"],["wi","ヰ"],["wu","ｳｩ"],["we","ヱ"],["wo","ヲ"],["w","ゥ"],["va","ヷ"],["vi","ヸ"],["vu","ｳｩ゙"],["ve","ヹ"],["vo","ヺ"],["v","ゥ゙"],["fa","ワ゚"],["fi","ヰ゚"],["fu","ｳｩ゚"],["fe","ヱ゚"],["fo","ヲ゚"],["f","ゥ゚"],["a","ア"],["i","イ"],["u","ウ"],["e","エ"],["o","オ"],["['ʼ]",""]],t=document.querySelectorAll(".mw-parser-output :lang(ain)");if(null!=t)for(let a=0;a<t.length;a++){if(!t[a].hasChildNodes())continue;let i=t=>{let a=t.getAttribute("data-roman"),i=a??t.textContent,l=i.split(" | ");null==a&&t.setAttribute("data-roman",i);let o=[];l[0]=l[0].replace(/[A-Z]{2,}|[A-Z]\\d|[0-9↊-↏-]+(?=p|pe|n|iw)|[0-9↊-↏-]+[A-Za-z]+|\\.{2,}/g,e=>(o.push(e),"\\x1b"));for(let n=0;n<e.length;n++)l[0]=l[0].replace(RegExp(e[n][0],"giu"),e[n][1]);let u=l[0].split("\\x1b");l[0]="";for(let r=0;r<o.length;r++)l[0]+=u[r]+o[r];return l[0]+=u[o.length],l.join(" | ")};if(0==t[a].childElementCount)t[a].textContent=i(t[a]);else{let l=t[a],o=document.createTextNode("");l.replaceWith(o);let n=document.createDocumentFragment(),u=l.firstElementChild;for(;null!=u;)u.replaceWith(document.createTextNode("\\x1a")),n.appendChild(u),u=l.firstElementChild;let r=i(l).split("\\x1a");l.textContent="",l.appendChild(document.createTextNode(r[0]));for(let d=1;d<r.length;d++)l.appendChild(n.firstElementChild),l.appendChild(document.createTextNode(r[d]));o.replaceWith(l)}}})();`,
	"cyrillic": `javascript:(()=>{let e=[["á","á"],["í","í"],["ú","ú"],["é","é"],["ó","ó"],["a","а"],["i","и"],["u","у"],["e","э"],["o","о"],["k","к"],["g","г"],["s","с"],["z","з"],["t","т"],["d","д"],["c","ч"],["j","ж"],["n","н"],["h","һ"],["x","х"],["p","п"],["b","б"],["m","м"],["y","й"],["r","р"],["w","ў"],["v","в"],["f","ф"]],t=document.querySelectorAll(".mw-parser-output :lang(ain)");if(null!=t)for(let l=0;l<t.length;l++){if(!t[l].hasChildNodes())continue;let n=t=>{let l=t.getAttribute("data-roman"),n=l??t.textContent,a=n.split(" | ");null==l&&t.setAttribute("data-roman",n);let r=[];a[0]=a[0].replace(/[A-Z]{2,}|[A-Z]\\d|[0-9↊-↏-]+(?=p|pe|n|iw)|[0-9↊-↏-]+[A-Za-z]+|\\.{2,}/g,e=>(r.push(e),"\\x1b"));for(let i=0;i<e.length;i++)a[0]=a[0].replace(RegExp(e[i][0],"giu"),t=>t!=t.toLowerCase()?e[i][1].toUpperCase():e[i][1]);let o=a[0].split("\\x1b");a[0]="";for(let p=0;p<r.length;p++)a[0]+=o[p]+r[p];return a[0]+=o[r.length],a.join(" | ")};if(0==t[l].childElementCount)t[l].textContent=n(t[l]);else{let a=t[l],r=document.createTextNode("");a.replaceWith(r);let i=document.createDocumentFragment(),o=a.firstElementChild;for(;null!=o;)o.replaceWith(document.createTextNode("\\x1a")),i.appendChild(o),o=a.firstElementChild;let p=n(a).split("\\x1a");a.textContent="",a.appendChild(document.createTextNode(p[0]));for(let d=1;d<p.length;d++)a.appendChild(i.firstElementChild),a.appendChild(document.createTextNode(p[d]));r.replaceWith(a)}}})();`,
};

function change() {
	document.form1.output.value = bookmarklet[document.form1.letter.value];
}

function messageActive() {
	message.textContent = lang == "ja" ? "コピーしました！" : "Copied!";
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
	var radio = document.querySelectorAll('input[name="letter"]');
	for (var i = 0; i < radio.length; i++) {
		radio[i].addEventListener("change", change);
	}
	change();
})();