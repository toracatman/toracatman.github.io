var lang = document.documentElement.lang;

var en = document.getElementById("en");
var ipa_uk = document.getElementById("ipa_uk");
var ipa_us = document.getElementById("ipa_us");
var ipa_mix = document.getElementById("ipa_mix");
var shaw = document.getElementById("shaw");
var error = document.getElementById("error");
var ipa_shaw = [
	["aʊ", "𐑬"], ["eɪ", "𐑱"], ["aɪ", "𐑲"],
	["əʊ", "𐑴"], ["ɔɪ", "𐑶"],

	["ɑː?r", "𐑸"], ["ɔː?r", "𐑹"], ["eər", "𐑺"], ["əːr", "𐑻"],
	["ɪər", "𐑽"], ["ər", "𐑼"], ["ɪə", "𐑾"], ["juː?", "𐑿"],

	["p", "𐑐"], ["t", "𐑑"], ["k", "𐑒"], ["f", "𐑓"], ["θ", "𐑔"],
	["s", "𐑕"], ["ʃ", "𐑖"], ["ʧ", "𐑗"], ["j", "𐑘"], ["ŋ", "𐑙"],
	["b", "𐑚"], ["d", "𐑛"], ["ɡ", "𐑜"], ["v", "𐑝"], ["ð", "𐑞"],
	["z", "𐑟"], ["ʒ", "𐑠"], ["ʤ", "𐑡"], ["w", "𐑢"], ["h", "𐑣"],
	["l", "𐑤"], ["m", "𐑥"], ["ɪ", "𐑦"], ["ɛ", "𐑧"], ["æ", "𐑨"],
	["ə", "𐑩"], ["ɒ", "𐑪"], ["ʊ", "𐑫"], ["ɑː?", "𐑭"],
	["r", "𐑮"], ["n", "𐑯"], ["iː?", "𐑰"],
	["ʌ", "𐑳"], ["uː?", "𐑵"], ["ɔː?", "𐑷"]
];
document.getElementById("convert_btn").addEventListener("click", function() {
	error.textContent = "";
	var s = ipa_uk.value.trim() + "\x1e" + ipa_us.value.trim();
	s = s.replace(/['ʼˈˌ]/g, "").replace(/ᵊ/g, "ə").replace(/ɜː?/g, "əː").replace(/"(.+?)"/g, "“$1”");
	s = s.split("\x1e");
	var uk_words = s[0].split(/([\P{L}]+)/gu);
	var us_words = s[1].split(/([\P{L}]+)/gu);
	for (var i = 1; i < uk_words.length; i += 2) {
		if (uk_words[i] == "-" && us_words[i] != "-") {
			var p = us_words[i - 1].indexOf(uk_words[i + 1][0], uk_words[i - 1].replace(/ː/g, "").length);
			if (p !== -1) {
				var h_before = us_words[i - 1].slice(0, p);
				var h_after = us_words[i - 1].slice(p);
				us_words.splice(i - 1, 1, h_before, "-", h_after);
			}
		}
	}
	for (var i = 1; i < us_words.length; i += 2) {
		if (us_words[i] == "-" && uk_words[i] != "-") {
			var p = uk_words[i - 1].indexOf(us_words[i + 1][0], us_words[i - 1].length);
			if (p !== -1) {
				var h_before = uk_words[i - 1].slice(0, p);
				var h_after = uk_words[i - 1].slice(p);
				uk_words.splice(i - 1, 1, h_before, "-", h_after);
			}
		}
	}
	if (uk_words.length != us_words.length) {
		error.textContent = lang == "ja" ?
			"エラー: 単語数が 一致しません。" :
			"Error: Number of words mismatch.";
		return;
	}
	for (var i = 0; i < uk_words.length; i += 2) {
		if (!(/r$/.test(uk_words[i])) &&
			/r$/.test(us_words[i])) uk_words[i] += "r";
		var re = /r([^aeiouæɑɒɔəɛɪʊʌ])/g;
		var r;
		while ((r = re.exec(us_words[i])) != null) {
			var ri;
			if ((ri = uk_words[i].indexOf(r[1], r.index)) !== -1) {
				uk_words[i] = uk_words[i].slice(0, ri) + "r" + uk_words[i].slice(ri);
			}
		}
	}
	s = uk_words.join("");
	s = uk_words[0];
	for (var i = 2; i < uk_words.length; i += 2) {
		s += us_words[i - 1] + uk_words[i];
	}
	ipa_mix.value = s;

	var en_words = en.value.trim().replace(/['ʼ’]/g, "ˈ").split(/(\P{L}+)/gu);
	var mix_words = s.split(/(\P{L}+)/gu);
	if (en_words.length == mix_words.length) {
		for (var i = 0; i < en_words.length; i += 2) {
			if (en_words[i] == "") continue;
			en_words[i] = en_words[i].toLowerCase();
			if (en_words[i] == "the") mix_words[i] = "ð";
			else if (en_words[i] == "of") mix_words[i] = "v";
			else if (en_words[i] == "and") mix_words[i] = "n";
			else if (en_words[i] == "to") mix_words[i] = "t";
			else if (en_words[i].slice(-1) == "ˈ") mix_words[i] += "ʼ";
			else if (en_words[i].slice(-2, -1) == "ˈ" ||
				en_words[i].slice(-3, -2) == "ˈ") {
				mix_words[i] = mix_words[i].slice(0, -1) + "ʼ" + mix_words[i].slice(-1);
			}
			else if (en_words[i][1] == "ˈ") {
				mix_words[i] = mix_words[i][0] + "ʼ" + mix_words[i].slice(1);
			}
		}
		s = mix_words.join("");
	}
	else {
		error.textContent = lang == "ja" ?
			"英語と IPA の 単語数が 一致しないので，正しく 変換されない 可能性が あります。" :
			"It may convert incorrectly because number of English and IPA words mismatch.";
	}

	for (var i = 0; i < ipa_shaw.length; i++) {
		s = s.replace(new RegExp(ipa_shaw[i][0], "g"), ipa_shaw[i][1]);
	}
	shaw.value = s;
});