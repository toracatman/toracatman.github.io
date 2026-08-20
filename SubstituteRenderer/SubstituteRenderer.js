var lang = document.documentElement.lang;
var i;
var custom_theme = document.getElementById("custom-theme");
var custom_linegap = document.getElementById("custom-linegap");
var text = document.getElementById("text");
var render = document.getElementById("render");
var count = document.getElementById("count");
var message = document.getElementById("message");
var s;
var old_s;
var sh = text.scrollHeight - 96;

(() => {
	var url = new URL(window.location.href);
	var str = url.searchParams.get("text");
	text.value = str;
	text.addEventListener("input", autoExpand);
	changeText();
	text.addEventListener("change", changeText);
})();

function autoExpand() {
	text.style.height = "9.6rem";
	var height = String(Math.max(96, text.scrollHeight - sh));
	text.style.height = `${height.slice(0, -1)}.${height.slice(-1)}rem`;
}

function changeText() {
	changeTheme();
	changeLineGap();
	s = text.value;
	if (document.form1.latin.value != "no") {
		var back = 0;
		var old_l;
		for (i = 0; i < latin.length; i++) {
			old_l = s.length;
			s = s.replace(new RegExp(latin[i][0], "g"), latin[i][1]);
			back += old_l - s.length;
		}
		if (document.form1.latin.value == "henkan") {
			var selectionStart = text.selectionStart;
			text.value = s;
			selectionStart -= back;
			text.setSelectionRange(selectionStart, selectionStart);
		}
		s = s.replace(/​x/g, "x");
	}

	old_s = s.replace(//g, "Kʷ").replace(//g, "kʷ").replace(//g, "Gʷ").replace(//g, "gʷ");
	var c = 0;
	for (i = 0; i < old_s.length; i++) {
		var p = old_s.codePointAt(i);
		c += p > 0xFF ? 2 : 1;
		if (p > 0xFFFF) i++;
	}
	count.textContent = lang == "ja" ? `${c >> 1}/140` : `${c}/280`;
	if (c > 280)	count.classList.add("error");
	else			count.classList.remove("error");

	for (i = 0; i < DWPIsubstitute.length; i++) {
		s = s.replace(new RegExp(`&GJ0*${DWPIsubstitute[i][1]};`, "g"), `&dw-${DWPIsubstitute[i][0].toString(16)};`);
	}
	for (i = 0; i < tolxyolxkanjxi_converter.length; i++) {
		s = s.replace(new RegExp(tolxyolxkanjxi_converter[i][0], "gu"), tolxyolxkanjxi_converter[i][1]);
	}
	s = s.replace(/ﾕ([\dA-Fa-f]{4})/g, (_, p) => String.fromCodePoint(parseInt(p, 16)))
		.replace(/ﾕs([\dA-Fa-f]{5})/g, (_, p) => String.fromCodePoint(parseInt(p, 16)))
	for (i = 0; i < chr.length; i++) {
		s = s.replace(new RegExp(chr[i][0], "gu"), chr[i][1]);
	}

	var f = document.createDocumentFragment();
	for (i = 0; i < s.length; i++) {
		var e = textProcess(0);
		f.appendChild(e);
	}
	f.normalize();
	render.innerHTML = "";
	render.appendChild(f);
	var width2x = document.getElementsByClassName("width2x");
	for (i = 0; i < width2x.length; i++) {
		width2x[i].style.width = `${width2x[i].clientWidth * 2}px`;
	}
}

function textProcess(d) {
	if (s[i] == "ｴ") {
		i++;
		return document.createTextNode(s[i]);
	}

	if (s[i] >= "" && s[i] <= "") {
		return document.createTextNode("");
	}

	if (s.slice(i, i + 2) == "ｲ{") {
		i += 2;
		var span = document.createElement("span");
		var p = s.codePointAt(i);
		var emojxi = s.slice(i, i + (p == 0x200B ? 3 : p > 0xFFFF ? 2 : 1));
		if (emojxi == "🖤") span.classList.add("black");
		else if (emojxi == "🍁") span.classList.add("redorange");
		else if (emojxi == "🌞") span.classList.add("yelloworange");
		else if (emojxi == "💛") span.classList.add("yellow");
		else if (emojxi == "🍐") span.classList.add("lime");
		else if (emojxi == "💚") span.classList.add("green");
		else if (emojxi == "🥒") span.classList.add("bluegreen");
		else if (emojxi == "🩵") span.classList.add("cyan");
		else if (emojxi == "💙") span.classList.add("blue");
		else if (emojxi == "🍆") span.classList.add("bluepurple");
		else if (emojxi == "💜") span.classList.add("purple");
		else if (emojxi == "🩷") span.classList.add("magenta");
		else if (emojxi == "❤") span.classList.add("red");
		else if (emojxi == "🤎") span.classList.add("brown");
		else if (emojxi == "🧡") span.classList.add("orange");
		else if (emojxi == "📀") span.classList.add("gold");
		else if (emojxi == "💿") span.classList.add("silver");
		else if (emojxi == "🩶") span.classList.add("gray");
		else if (emojxi == "🤍") span.classList.add("white");
		else if (emojxi == "➖") span.classList.add("transparent");
		else if (emojxi == "🍋") span.classList.add("lemon");
		else if (emojxi == "🌚") span.classList.add("navy");
		else if (emojxi == "🥔") span.classList.add("ocher");
		else if (emojxi == "🌸") span.classList.add("pink");
		else if (emojxi == "💧") span.classList.add("skyblue");
		else if (emojxi == "​🏻") span.classList.add("skincolor1");
		else if (emojxi == "​🏼") span.classList.add("skincolor2");
		else if (emojxi == "​🏽") span.classList.add("skincolor3");
		else if (emojxi == "​🏾") span.classList.add("skincolor4");
		else if (emojxi == "​🏿") span.classList.add("skincolor5");
		else if (emojxi == "🌈") span.classList.add("rainbow");
		else {
			while (s[i] != "|") {
				var e = textProcess(d);
				span.appendChild(e);
				i++;
				if (i >= s.length) break;
			}
			i++;
			p = s.codePointAt(i);
			emojxi = s.slice(i, i + (p == 0x200B ? 3 : p > 0xFFFF ? 2 : 1));
			if (emojxi == "🖤") span.classList.add("black");
			else if (emojxi == "🍁") span.classList.add("redorange");
			else if (emojxi == "🌞") span.classList.add("yelloworange");
			else if (emojxi == "💛") span.classList.add("yellow");
			else if (emojxi == "🍐") span.classList.add("lime");
			else if (emojxi == "💚") span.classList.add("green");
			else if (emojxi == "🥒") span.classList.add("bluegreen");
			else if (emojxi == "🩵") span.classList.add("cyan");
			else if (emojxi == "💙") span.classList.add("blue");
			else if (emojxi == "🍆") span.classList.add("bluepurple");
			else if (emojxi == "💜") span.classList.add("purple");
			else if (emojxi == "🩷") span.classList.add("magenta");
			else if (emojxi == "❤") span.classList.add("red");
			else if (emojxi == "🤎") span.classList.add("brown");
			else if (emojxi == "🧡") span.classList.add("orange");
			else if (emojxi == "📀") span.classList.add("gold");
			else if (emojxi == "💿") span.classList.add("silver");
			else if (emojxi == "🩶") span.classList.add("gray");
			else if (emojxi == "🤍") span.classList.add("white");
			else if (emojxi == "➖") span.classList.add("transparent");
			else if (emojxi == "🍋") span.classList.add("lemon");
			else if (emojxi == "🌚") span.classList.add("navy");
			else if (emojxi == "🥔") span.classList.add("ocher");
			else if (emojxi == "🌸") span.classList.add("pink");
			else if (emojxi == "💧") span.classList.add("skyblue");
			else if (emojxi == "​🏻") span.classList.add("skincolor1");
			else if (emojxi == "​🏼") span.classList.add("skincolor2");
			else if (emojxi == "​🏽") span.classList.add("skincolor3");
			else if (emojxi == "​🏾") span.classList.add("skincolor4");
			else if (emojxi == "​🏿") span.classList.add("skincolor5");
			else if (emojxi == "🌈") span.classList.add("rainbow");
			i += emojxi.length;
			return span;
		}

		i += emojxi.length + 1;
		while (s[i] != "}") {
			var e = textProcess(d);
			span.appendChild(e);
			i++;
			if (i >= s.length) break;
		}
		return span;
	}

	if (s.slice(i, i + 2) == "ﾌ{" || s.slice(i, i + 2) == "ﾅ{" || s.slice(i, i + 2) == "ｱ{") {
		var span = document.createElement(s[i] == "ﾌ" ? "b" : (s[i] == "ﾅ" ? "i" : "u"));
		i += 2;
		while (s[i] != "}") {
			var e = textProcess(d);
			span.appendChild(e);
			i++;
			if (i >= s.length) break;
		}
		return span;
	}

	if (s.slice(i, i + 2) == "ﾆ{") {
		var span = document.createElement("span");
		span.classList.add("width2x");
		i += 2;
		while (s[i] != "}") {
			var e = textProcess(d);
			span.appendChild(e);
			i++;
			if (i >= s.length) break;
		}
		return span;
	}

	if (s.slice(i, i + 2) == "ﾙ{") {
		i += 2;
		var ruby = document.createElement("ruby");
		var rt = document.createElement("rt");
		ruby.appendChild(rt);
		while (s[i] != "|") {
			var e = textProcess(d);
			rt.appendChild(e);
			i++;
			if (i >= s.length) break;
		}
		i++;
		var rb = document.createElement("rb");
		rt.before(rb);
		while (s[i] != "}" && s[i] != "|") {
			var e = textProcess(d);
			rb.appendChild(e);
			i++;
			if (i >= s.length) break;
		}
		if (s[i] == "|") {
			i++;
			var rtc = document.createElement("rtc");
			rt.after(rtc);
			while (s[i] != "}") {
				var e = textProcess(d);
				rtc.appendChild(e);
				i++;
				if (i >= s.length) break;
			}
		}
		var rp1 = document.createElement("rp");
		rp1.textContent = lang == "ja" ? "（" : " (";
		rt.before(rp1);
		var rp2 = document.createElement("rp");
		rp2.textContent = lang == "ja" ? "）" : ") ";
		rt.after(rp2);
		return ruby;
	}

	if (s.slice(i, i + 2) == "▒{") {
		i += 3;
		var div = document.createElement("div");
		div.classList.add("bitmap");
		var b = "";
		while (s[i] != "}" && s[i] != "(") {
			b += s[i];
			i++;
			if (i >= s.length) break;
		}
		div.textContent = b;
		if (s[i] == "(") {
			while (s[i] != "}") {
				i++;
				if (i >= s.length) break;
			}
		}
		var l = div.textContent.match(/\n/g).length;
		div.style.fontSize = `${3.2 / l}rem`;
		return div;
	}

	if (s.slice(i, i + 2) == "ﾛ{") {
		i += 3;
		var div = document.createElement("div");
		div.classList.add("bitmap-color");
		while (s[i] != "}" && s[i] != "(") {
			var p = s.codePointAt(i);
			var c = s.slice(i, i + (p == 0x200B ? 3 : p > 0xFFFF ? 2 : 1));
			if (s[i] == "\n") {
				div.appendChild(document.createTextNode("\n"));
			}
			else {
				var e1 = document.createElement("div");
				if (c == "0" || c == "🖤") e1.classList.add("bg-black");
				else if (c == "1" || c == "🍁") e1.classList.add("bg-redorange");
				else if (c == "2" || c == "🌞") e1.classList.add("bg-yelloworange");
				else if (c == "3" || c == "💛") e1.classList.add("bg-yellow");
				else if (c == "4" || c == "🍐") e1.classList.add("bg-lime");
				else if (c == "5" || c == "💚") e1.classList.add("bg-green");
				else if (c == "6" || c == "🥒") e1.classList.add("bg-bluegreen");
				else if (c == "7" || c == "🩵") e1.classList.add("bg-cyan");
				else if (c == "8" || c == "💙") e1.classList.add("bg-blue");
				else if (c == "9" || c == "🍆") e1.classList.add("bg-bluepurple");
				else if (c == "↊" || c == "💜" || c == "A") e1.classList.add("bg-purple");
				else if (c == "↋" || c == "🩷" || c == "B") e1.classList.add("bg-magenta");
				else if (c == "↌" || c == "❤" || c == "C") e1.classList.add("bg-red");
				else if (c == "↍" || c == "🤎" || c == "D") e1.classList.add("bg-brown");
				else if (c == "↎" || c == "🧡" || c == "E") e1.classList.add("bg-orange");
				else if (c == "↏" || c == "📀" || c == "F") e1.classList.add("bg-gold");
				else if (c == "" || c == "💿" || c == "G") e1.classList.add("bg-silver");
				else if (c == "" || c == "🩶" || c == "H") e1.classList.add("bg-gray");
				else if (c == "" || c == "🤍" || c == "I") e1.classList.add("bg-white");
				else if (c == "" || c == "➖" || c == "J" || c == ".") e1.classList.add("bg-transparent");
				else if (c == "🍋" || c == "L") e1.classList.add("bg-lemon");
				else if (c == "🌚" || c == "N") e1.classList.add("bg-navy");
				else if (c == "🥔" || c == "O") e1.classList.add("bg-ocher");
				else if (c == "🌸" || c == "P") e1.classList.add("bg-pink");
				else if (c == "💧" || c == "S") e1.classList.add("bg-skyblue");
				else if (c == "​🏻" || c == "U") e1.classList.add("bg-skincolor1");
				else if (c == "​🏼" || c == "V") e1.classList.add("bg-skincolor2");
				else if (c == "​🏽" || c == "W") e1.classList.add("bg-skincolor3");
				else if (c == "​🏾" || c == "Y") e1.classList.add("bg-skincolor4");
				else if (c == "​🏿" || c == "Z") e1.classList.add("bg-skincolor5");
				else if (c == "🌈" || c == "R") e1.classList.add("bg-rainbow");
				div.appendChild(e1);
			}
			i += c.length;
			if (i >= s.length) break;
		}
		if (s[i] == "(") {
			while (s[i] != "}") {
				i++;
				if (i >= s.length) break;
			}
		}
		var l = div.textContent.match(/\n/g).length;
		var d = div.children;
		for (var j = 0; j < d.length; j++) {
			d[j].style.width = `${3.2 / l}rem`;
			d[j].style.height = `${3.2 / l}rem`;
		}
		return div;
	}

	if (s.slice(i, i + 4) == "&dw-" ||
		s.slice(i, i + 4) == "&ni-" || s.slice(i, i + 4) == "&mk-" ||
		s.slice(i, i + 4) == "&jg-" || s.slice(i, i + 4) == "&j2-" ||
		s.slice(i, i + 4) == "&j3-" || s.slice(i, i + 4) == "&sc-" ||
		s.slice(i, i + 4) == "&tc-" || s.slice(i, i + 4) == "&hk-" ||
		s.slice(i, i + 4) == "&jp-" || s.slice(i, i + 4) == "&kr-" ||
		s.slice(i, i + 4) == "&em-"
		) {
		var span = document.createElement("span");
		if (s.slice(i, i + 4) == "&dw-") span.classList.add("dwpi");
		else if (s.slice(i, i + 4) == "&ni-") span.classList.add("nishiki");
		else if (s.slice(i, i + 4) == "&jg-") span.classList.add("jigmo");
		else if (s.slice(i, i + 4) == "&j2-") span.classList.add("jigmo2");
		else if (s.slice(i, i + 4) == "&j3-") span.classList.add("jigmo3");
		else if (s.slice(i, i + 4) == "&sc-") {
			span.classList.add("zh-cn");
			span.lang = "zh-cn";
		}
		else if (s.slice(i, i + 4) == "&tc-") {
			span.classList.add("zh-tw");
			span.lang = "zh-tw";
		}
		else if (s.slice(i, i + 4) == "&hk-") {
			span.classList.add("zh-hk");
			span.lang = "zh-hk";
		}
		else if (s.slice(i, i + 4) == "&kr-") {
			span.classList.add("ko");
			span.lang = "ko";
		}
		else if (s.slice(i, i + 4) == "&em-") {
			span.classList.add("em");
		}
		i += 4;
		var p = "";
		while (s[i] != ";") {
			p += s[i];
			i++;
			if (i >= s.length) break;
		}
		var q = parseInt(p, 16);
		if (!isNaN(q) && q >= 0 && q <= 0x10FFFF) {
			span.textContent = String.fromCodePoint(q);
		}
		else {
			span.textContent = p;
		}
		return span;
	}

	if (d == 0 &&
		!(/[⿰-⿿㇯--⚫⚪⬛⬜]/.test(s[i]) ||
		/[🔴🟠🟡🟢🔵🟣🟤🟥🟧🟨🟩🟦🟪🟫]/u.test(s.slice(i, i + 2)))) {
		return document.createTextNode(s[i]);
	}

	var e = document.createElement("div");
	e.classList.add("part");
	if (i >= s.length) {
		var e1 = document.createElement("div");
		e1.classList.add("part-inner");
		e1.classList.add("part-over");
		e.appendChild(e1);
	}
	else if (s[i] == "⬚") {
		var e1 = document.createElement("div");
		e1.classList.add("part-inner");
		e.appendChild(e1);
	}
	else if (/[⿲-⿳]/.test(s[i])) {
		if (s[i] == "⿲")		e.classList.add("part-tatemiqcu");
		else if (s[i] == "⿳")	e.classList.add("part-yokomiqcu");
		else if (s[i] == "")	e.classList.add("part-sugekae");

		var e1 = document.createElement("div");
		e1.classList.add("part-inner");
		i++;
		e1.appendChild(textProcess(d + 1));

		var e2 = document.createElement("div");
		e2.classList.add("part-inner");
		i++;
		e2.appendChild(textProcess(d + 1));

		var e3 = document.createElement("div");
		e3.classList.add("part-inner");
		i++;
		e3.appendChild(textProcess(d + 1));

		e.appendChild(e1);
		e.appendChild(e2);
		e.appendChild(e3);
	}
	else if (/[⿰⿱⿴-⿽㇯-]/.test(s[i])) {
		if (s[i] == "⿰")		e.classList.add("part-hencukuri");
		else if (s[i] == "⿱")	e.classList.add("part-kanmuriasxi");
		else if (s[i] == "⿴")	e.classList.add("part-kunigakomi");
		else if (s[i] == "⿵")	e.classList.add("part-dougakomi");
		else if (s[i] == "⿶")	e.classList.add("part-ukegakomi");
		else if (s[i] == "⿷")	e.classList.add("part-hakogakomi");
		else if (s[i] == "⿸")	e.classList.add("part-gangakomi");
		else if (s[i] == "⿹")	e.classList.add("part-cucumigakomi");
		else if (s[i] == "⿺")	e.classList.add("part-nyougakomi");
		else if (s[i] == "⿼")	e.classList.add("part-konojxigakomi");
		else if (s[i] == "⿽")	e.classList.add("part-gyakunyou");
		else if (s[i] == "㇯")	e.classList.add("part-torinozoku");
		else if (s[i] == "")	e.classList.add("part-hocunarabe");
		else if (s[i] == "")	e.classList.add("part-hecunarabe");
		else if (s[i] == "")	e.classList.add("part-mauezoe");
		else if (s[i] == "")	e.classList.add("part-mamigizoe");
		else if (s[i] == "")	e.classList.add("part-masxitazoe");
		else if (s[i] == "")	e.classList.add("part-mahidarizoe");
		else if (s[i] == "")	e.classList.add("part-migiuezoe");
		else if (s[i] == "")	e.classList.add("part-migisxitazoe");
		else if (s[i] == "")	e.classList.add("part-hidarisxitazoe");
		else if (s[i] == "")	e.classList.add("part-hidariuezoe");

		var e1 = document.createElement("div");
		e1.classList.add("part-inner");
		i++;
		e1.appendChild(textProcess(d + 1));

		var e2 = document.createElement("div");
		e2.classList.add("part-inner");
		i++;
		e2.appendChild(textProcess(d + 1));

		e.appendChild(e1);
		e.appendChild(e2);
	}
	else if (/[⿾⿿-]/.test(s[i])) {
		if (s[i] == "⿾") e.classList.add("part-kagamimojxi");
		else if (s[i] == "⿿") e.classList.add("part-sakasamojxi");
		else if (s[i] == "") e.classList.add("part-youon");
		else if (s[i] == "") e.classList.add("part-youontop");
		else if (s[i] == "") e.classList.add("part-migidaosxi");
		else if (s[i] == "") e.classList.add("part-hidaridaosxi");

		var ids = s[i];
		if (ids == "") e.classList.add("part-kanmuriasxi");
		else if (ids == "") e.classList.add("part-hencukuri");
		else if (ids == "") e.classList.add("part-hinjxiyou");
		else if (ids == "") e.classList.add("part-yokomiqcu");
		else if (ids == "") e.classList.add("part-tatemiqcu");
		else if (ids == "") e.classList.add("part-sxikakunarabe");
		else if (ids == "") e.classList.add("part-tateonajxiyoqcu");
		else if (ids == "") e.classList.add("part-yokoonajxiyoqcu");

		var e1 = document.createElement("div");
		e1.classList.add("part-inner");
		i++;
		e1.appendChild(textProcess(d + 1));

		e.appendChild(e1);
		var n = 0;
		if (/[]/.test(ids)) n = 1;
		else if (/[-]/.test(ids)) n = 2;
		else if (/[-]/.test(ids)) n = 3;
		for (var j = 0; j < n; j++) {
			e.appendChild(e1.cloneNode(true));
		}
	}
	else {
		var e1 = document.createElement("div");
		e1.classList.add("part-inner");
		var c = s.codePointAt(i);
		if (c >= 0x26AA && c <= 0x26AB || c >= 0x2B1B && c <= 0x2B1C) {
			if (c >= 0x26AA && c <= 0x26AB) e1.classList.add("circle");

			if (c == 0x26AA || c == 0x2B1C)			e1.classList.add("bg-white");
			else if (c == 0x26AB || c == 0x2B1B)	e1.classList.add("bg-black");
		}
		else if (c >= 0x1F534 && c <= 0x1F535 || c >= 0x1F7E0 && c <= 0x1F7EB) {
			if (c >= 0x1F534 && c <= 0x1F535 ||
				c >= 0x1F7E0 && c <= 0x1F7E4) e1.classList.add("circle");

			if (c == 0x1F534 || c == 0x1F7E5)		e1.classList.add("bg-red");
			else if (c == 0x1F535 || c == 0x1F7E6)	e1.classList.add("bg-blue");
			else if (c == 0x1F7E0 || c == 0x1F7E7)	e1.classList.add("bg-orange");
			else if (c == 0x1F7E1 || c == 0x1F7E8)	e1.classList.add("bg-yellow");
			else if (c == 0x1F7E2 || c == 0x1F7E9)	e1.classList.add("bg-green");
			else if (c == 0x1F7E3 || c == 0x1F7EA)	e1.classList.add("bg-purple");
			else if (c == 0x1F7E4 || c == 0x1F7EB)	e1.classList.add("bg-brown");
			i++;
		}
		else {
			var l = c > 0xFFFF ? 2 : 1;
			if (i < s.length - l) {
				var nc = s.codePointAt(i + l);
				if (nc >= 0x180B && nc <= 0x180D ||
					nc >= 0xFE00 && nc <= 0xFE0F) l++;
				else if (nc >= 0xE0100 && nc <= 0xE01EF) l += 2;
			}
			e1.textContent = s.slice(i, i + l);
			i += l - 1;
		}
		e.appendChild(e1);
	}
	return e;
}

function insert(c) {
	var selectionStart = text.selectionStart;
	var selectionEnd = text.selectionEnd;

	var prefix = text.value.slice(0, selectionStart);
	var suffix = text.value.slice(selectionEnd);
	text.value = `${prefix}${c}${suffix}`;

	var newSelection = selectionStart + c.length;
	text.setSelectionRange(newSelection, newSelection);

	text.focus();

	changeText();
}

function insert2(s, e) {
	var selectionStart = text.selectionStart;
	var selectionEnd = text.selectionEnd;

	var prefix = text.value.slice(0, selectionStart);
	var inserted = s + text.value.slice(selectionStart, selectionEnd) + e;
	var suffix = text.value.slice(selectionEnd);
	text.value = `${prefix}${inserted}${suffix}`;

	var newSelectionStart = selectionStart + s.length;
	var newSelectionEnd = selectionEnd + s.length;
	text.setSelectionRange(newSelectionStart, newSelectionEnd);

	text.focus();

	changeText();
}

function insertColor() {
	if (document.form2.icxi.value == "mae") {
		insert2(`ｲ{${document.form2.color.value}|`, "}");
	}
	else {
		insert2("ｲ{", `|${document.form2.color.value}}`);
	}
}

function insertRuby() {
	if (text.selectionStart == text.selectionEnd) {
		var kanjxi = prompt(lang == "ja" ? "漢字" : "Body");
		if (kanjxi == null || kanjxi == "") return;
	}

	var ruby = prompt(lang == "ja" ?
		"ルビ（なければ 空欄）" : "Top (Empty for no Top)");
	if (ruby == null) return;
	var boucxuu = prompt(lang == "ja" ?
		"傍註（なければ 空欄）" : "Bottom (Empty for no Bottom)");
	if (boucxuu == null) return;
	if (boucxuu != "") boucxuu = `|${boucxuu}`;

	if (text.selectionStart == text.selectionEnd) {
		insert(`ﾙ{${ruby}|${kanjxi}${boucxuu}}`);
	}
	else {
		insert2(`ﾙ{${ruby}|`, `${boucxuu}}`);
	}
}

function changeTheme() {
	document.body.removeAttribute("class");
	custom_theme.textContent = "";
	switch (document.form1.theme.value) {
	case "dark":
		document.body.classList.add("dark");
		break;
	case "custom":
		custom_theme.textContent = `body,input,input[type="button"],button,select,textarea {
	color: ${document.form1.fg.value};
	background-color: ${document.form1.bg.value};
}`;
		break;
	}
}
function changeColor() {
	document.form1.theme.value = "custom";
	changeTheme();
}
function changeLineGap() {
	render.removeAttribute("class");
	var line_height;
	switch (document.form1.linegap.value) {
	case "nogap":
		line_height = "1";
		break;
	case "normal":
		line_height = "1.2";
		break;
	case "custom":
		line_height = document.form1.lineheight.value;
		break;
	}
	if (document.form1.autoexpand.checked) render.classList.add("autoexpand");
	var top = ((Number(line_height) - 1) * 1.6).toFixed(1);
	custom_linegap.textContent = `#render {
	line-height: ${line_height};
}
#render>.part,#render>.bitmap {
	top: ${top}rem;
}`;
}
function changeLineHeight() {
	document.form1.linegap.value = "custom";
	changeLineGap();
}

function twitterButton() {
	window.open(`https://x.com/intent/post?text=${encodeURIComponent(old_s)}`);
}
function blueskyButton() {
	window.open(`https://bsky.app/intent/compose?text=${encodeURIComponent(old_s)}`);
}
function threadsButton() {
	window.open(`https://www.threads.net/intent/post?text=${encodeURIComponent(old_s)}`);
}
function mastodonButton() {
	var instance = prompt("Mastodon の インスタンス", "https://mstdn.jp");
	if (instance == "" || instance == null) return;
	if (instance.slice(0, 8) != "https://") instance = `https://${instance}`;
	if (instance.slice(-1) == "/") instance = instance.slice(0, -1);
	window.open(`${instance}/share?text=${encodeURIComponent(old_s)}`);
}
function misskeyButton() {
	window.open(`https://misskey-hub.net/share?text=${encodeURIComponent(old_s)}&manualInstance=misskey.io`);
}
function facebookButton() {
	var url = encodeURIComponent(`https://toracatman.github.io/SubstituteRenderer?text=old_s`);
	window.open(`http://www.facebook.com/share.php?u=${url}`);
}
function lineButton() {
	if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
		window.open(`https://line.me/R/share?text=${encodeURIComponent(old_s)}`);
	}
	else {
		window.open(`https://social-plugins.line.me/lineit/share?text=${encodeURIComponent(old_s)}`);
	}
}
function fiicenButton() {
	window.open(`https://fiicen.jp`);
}
function messageActive() {
	message.textContent = lang == "ja" ? "コピーしました！" : "Copied!";
	setTimeout(() => { message.textContent = ""; }, 1000);
}
function copyToClipboard() {
	if (navigator.clipboard) {
		return navigator.clipboard.writeText(old_s).then(() => {
			messageActive();
		});
	}
	else {
		var t = text.value;
		text.value = old_s;
		text.select();
		document.execCommand("copy");
		text.value = t;
		messageActive();
	}
}

var block = [
	[" ", "▘", "▝", "▀"],
	["▖", "▌", "▞", "▛"],
	["▗", "▚", "▐", "▜"],
	["▄", "▙", "▟", "█"]
];
var e_wc = document.getElementById("wc");
var e_bc = document.getElementById("bc");

var e_rows = document.getElementById("rows");
var e_cols = document.getElementById("cols");
var rows;
var cols;

var e_error = document.getElementById("error");
var error;

var e_bitmap = document.getElementById("bitmap");
var bitmap;

var e_name = document.getElementById("name");

function makeBitmap() {
	error = false;
	e_error.textContent = "";
	if (!(/^\d+$/.test(e_rows.value))) {
		e_error.textContent += lang == "ja" ?
			"行は 整数を 指定してください。" :
			"Set Row even from 2 to 32.";
		error = true;
	}
	rows = Number(e_rows.value);
	if (rows & 1) {
		e_error.textContent += lang == "ja" ?
			"行は 偶数を 指定してください。" :
			"Set Row even from 2 to 32.";
		error = true;
	}
	else if (rows < 2 || rows > 32) {
		e_error.textContent += lang == "ja" ?
			"行は 2〰︎32を 指定してください。" :
			"Set Row even from 2 to 32.";
		error = true;
	}

	if (!(/^\d+$/.test(e_cols.value))) {
		e_error.textContent += lang == "ja" ?
			"列は 整数を 指定してください。" :
			"Set Column even from 2 to 32.";
		error = true;
	}
	cols = Number(e_cols.value);
	if (cols & 1) {
		e_error.textContent += lang == "ja" ?
			"列は 偶数を 指定してください。" :
			"Set Column even from 2 to 32.";
		error = true;
	}
	else if (cols < 2 || cols > 32) {
		e_error.textContent += lang == "ja" ?
			"列は 2〰︎32を 指定してください。" :
			"Set Column even from 2 to 32.";
		error = true;
	}

	if (error) return;

	var w = cols * 32;
	var ws = String(w);
	e_bitmap.style.width = `${ws.slice(0, -1)}.${ws.slice(-1)}rem`;
	var h = rows * 32;
	var hs = String(h);
	e_bitmap.style.height = `${hs.slice(0, -1)}.${hs.slice(-1)}rem`;
	e_bitmap.innerHTML = "";
	bitmap = Array(rows).fill().map(() => Array(cols).fill(0));

	for (var i = 0; i < rows; i++) {
		var r = document.createElement("div");
		e_bitmap.appendChild(r);
		r.className = "bitmap-row";
		for (var j = 0; j < cols; j++) {
			var d = document.createElement("div");
			r.appendChild(d);
			d.id = `bitmap${i}-${j}`;
			d.className = "bitmap-dot";
			d.addEventListener("click", function() {
				this.classList.toggle("bg-black");
			});
		}
	}
}

function makeOutput() {
	if (error) return;
	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < cols; j++) {
			bitmap[i][j] = document.getElementById(`bitmap${i}-${j}`).classList.contains("bg-black") ? 1 : 0;
		}
	}
	var s = "▒{\n";

	var r = rows / 2;
	var c = cols / 2;
	for (var i = 0; i < r; i++) {
		for (var j = 0; j < c; j++) {
			var b = bitmap[i * 2 + 1][j * 2] + bitmap[i * 2 + 1][j * 2 + 1] * 2;
			var t = bitmap[i * 2][j * 2] + bitmap[i * 2][j * 2 + 1] * 2;
			s += block[b][t];
		}
		s += "\n";
	}
	if (e_name.value != "") s += `(${e_name.value})
`;
	s += "}";
	insert(s);
}

(() => {
	makeBitmap();
})();