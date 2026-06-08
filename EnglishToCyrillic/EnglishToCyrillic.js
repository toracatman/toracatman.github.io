var lang = document.documentElement.lang;

var en = document.getElementById("en");
var ipa_uk = document.getElementById("ipa_uk");
var ipa_us = document.getElementById("ipa_us");
var ipa_mix = document.getElementById("ipa_mix");
var cyrillic = document.getElementById("cyrillic");
var error = document.getElementById("error");
var ipa_cyrillic = [
	["eɪ", "ej"], ["aɪ", "aj"], ["əʊ", "ow"], ["ɔɪ", "ɔj"], ["aʊ", "aw"],

	["[əʌ]", "ә"], ["[aɑ]", "а"], ["æ", "ӕ"], ["[eɛ]", "э"],
	["ɪ", "і"], ["i", "и"], ["ɒ", "ꙩ"], ["[oɔ]", "о"], ["ʊ", "ұ"], ["u", "у"],

	["оːr", "оr"],

	["jа", "я"], ["jӕ", "ԙ"], ["jэ", "е"],
	["jи", "ї"], ["jꙩ", "є̈"], ["jо", "ё"], ["jу", "ю"],

	["k", "к"], ["s", "с"], ["ʃ", "ш"], ["ʧ", "ч"], ["ts", "ц"],
	["θ", "ҫ"], ["t", "т"], ["p", "п"], ["f", "ф"],

	["ɡ", "г"], ["z", "з"], ["ʒ", "ж"], ["ʤ", "џ"], ["dz", "ѕ"],
	["ð", "ҙ"], ["d", "д"], ["b", "б"], ["v", "в"],

	["h", "һ"], ["ŋ", "ӈ"], ["n", "н"], ["m", "м"], ["j", "ј"],
	["r", "р"], ["l", "л"], ["w", "ԝ"]
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
			if (en_words[i][0] != en_words[i][0].toLowerCase()) {
				mix_words[i] = mix_words[i][0].toUpperCase() + mix_words[i].slice(1);
			}
			if (en_words[i].slice(-1) == "ˈ") mix_words[i] += "ʼ";
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

	for (var i = 0; i < ipa_cyrillic.length; i++) {
		s = s.replace(new RegExp(ipa_cyrillic[i][0], "gi"), m => m != m.toLowerCase() ?
			(ipa_cyrillic[i][1][0] == "і" ? "І̇" : ipa_cyrillic[i][1][0].toUpperCase()) + ipa_cyrillic[i][1].slice(1) :
			ipa_cyrillic[i][1]);
	}

	cyrillic.value = s.replace(/ː/g, "̄").normalize("NFC");
});