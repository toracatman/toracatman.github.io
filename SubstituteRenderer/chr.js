var latin = [
	//ラテン文字
	//Latin
	["Ax", "Ə"], ["ax", "ə"],
	["A2x", "Æ"], ["a2x", "æ"],
	["A3x", "A̩"], ["a3x", "a̩"],
	["Bx", "Ð"], ["bx", "ð"],
	["B2x", "Ƅ"], ["b2x", "ƅ"],
	["Cx", "Ĉ"], ["cx", "ĉ"],
	["C3x", "Ꞓ"], ["c3x", "ꞓ"],
	["Dx", "D̂"], ["dx", "d̂"],
	["Ex", "Ɛ"], ["ex", "ɛ"],
	["E2x", "Ƹ"], ["e2x", "ƹ"],
	["Fx", "F̂"], ["fx", "f̂"],
	["Gx", "Ĝ"], ["gx", "ĝ"],
	["G3x", "Ɣ"], ["g3x", "ɣ"],
	["G4x", ""], ["g4x", ""],
	["Hx", "Ĥ"], ["hx", "ĥ"],
	["Ix", "Ɨ"], ["ix", "ɨ"],
	["Jx", "Ĵ"], ["jx", "ĵ"],
	["J3x", "Ɉ"], ["j3x", "ɟ"],
	["Kx", "X"], ["kx", "​x"],
	["K4x", ""], ["k4x", ""],
	["L2x", "L̂"], ["l2x", "l̂"],
	["Nx", "Ŋ"], ["nx", "ŋ"],
	["N2x", "Ñ"], ["n2x", "ñ"],
	["Ox", "Ɔ"], ["ox", "ɔ"],
	["O2x", "Ø"], ["o2x", "ø"],
	["O3x", "Ơ"], ["o3x", "ơ"],
	["Px", "Þ"], ["px", "þ"],
	["Qx", "Ɂ"], ["qx", "ɂ"],
	["Q2x", "Q̂"], ["q2x", "q̂"],
	["R2x", "R̂"], ["r2x", "r̂"],
	["R3x", "Ɍ"], ["r3x", "ɍ"],
	["R4x", "Ꝛ"], ["r4x", "ꝛ"],
	["Sx", "Ŝ"], ["sx", "ŝ"],
	["S2x", "ẞ"], ["s2x", "ß"],
	["Ux", "Ɯ"], ["ux", "ɯ"],
	["Vx", "Ꞟ"], ["vx", "ꞟ"],
	["Wx", "Ŭ"], ["wx", "ŭ"],
	["W2x", "Ꝡ"], ["w2x", "ꝡ"],
	["Y2x", "Ɥ"], ["y2x", "ɥ"],
	["Z2x", "ẞ̂"], ["z2x", "ß̂"],

	//ダイアクリティカルマーク、記号付きラテン文字
	//Diacritical Marks
	["b3x", "̍"],
	["b4x", "̏"],
	["c2x", "ʗ"],
	["C4x", "Ċ"], ["c4x", "ċ"],
	["d2x", "̥"],
	["D4x", "Ḋ"], ["d4x", "ḋ"],
	["g2x", "ˁ"],
	["bf2x", "ɓ"], ["df2x", "ɗ"], ["ĝf2x", "ɠ̂"], ["gf2x", "ɠ"],
	["gˁf2x", "ʛ"], ["f2x", "ᶠ"],
	["h2x", "̔"],
	["H4x", "Ḣ"], ["h4x", "ḣ"],
	["i2x", "̩"],
	["i4x", "ı"],
	["j2x", "ʲ"],
	["k2x", "ˀ"],
	["Ak3x", "Â"], ["ak3x", "â"], ["Ck3x", "Ĉ"], ["ck3x", "ĉ"],
	["Ek3x", "Ê"], ["ek3x", "ê"], ["Gk3x", "Ĝ"], ["gk3x", "ĝ"],
	["Hk3x", "Ĥ"], ["hk3x", "ĥ"], ["Ik3x", "Î"], ["ik3x", "î"],
	["Jk3x", "Ĵ"], ["jk3x", "ĵ"], ["Ok3x", "Ô"], ["ok3x", "ô"],
	["Sk3x", "Ŝ"], ["sk3x", "ŝ"], ["Uk3x", "Û"], ["uk3x", "û"],
	["Wk3x", "Ŵ"], ["wk3x", "ŵ"], ["Zk3x", "Ẑ"], ["zk3x", "ẑ"],
	["k3x", "̂"],
	["Lx", "ː"],
	["Alx", "Ā"], ["alx", "ā"], ["Elx", "Ē"], ["elx", "ē"],
	["Ilx", "Ī"], ["ilx", "ī"], ["Olx", "Ō"], ["olx", "ō"],
	["Ulx", "Ū"], ["ulx", "ū"], ["lx", "̄"],
	["l3x", "ᴸ"],
	["mx", "ﾕ"],
	["Am2x", "Ã"], ["am2x", "ã"], ["Em2x", "Ẽ"], ["em2x", "ẽ"],
	["Im2x", "Ĩ"], ["im2x", "ĩ"], ["Nm2x", "Ñ"], ["nm2x", "ñ"],
	["Om2x", "Õ"], ["om2x", "õ"], ["Um2x", "Ũ"], ["um2x", "ũ"], 
	["Vm2x", "Ṽ"], ["vm2x", "ṽ"], ["Ym2x", "Ỹ"], ["ym2x", "ỹ"],
	["m2x", "̃"],
	["m3x", "̼"],
	["p2x", "ʼ"],
	["p3x", "̩"],
	["p4x", "̊"],
	["q3x", "ẋ"],
	["Drx", "Ɖ"], ["drx", "ɖ"], ["srx", "ʂ"], ["zrx", "ʐ"],
	["rx", "̢"],
	["S4x", "Ṡ"], ["s4x", "ṡ"],
	["t2x", "￭"],
	["T4x", "Ṫ"], ["t4x", "ṫ"],
	["u2x", "ᵘ"],
	["u4x", "̮"],
	["Av2x", "Ă"], ["av2x", "ă"], ["Ev2x", "Ĕ"], ["ev2x", "ĕ"],
	["Gv2x", "Ğ"], ["gv2x", "ğ"], ["Iv2x", "Ĭ"], ["iv2x", "ĭ"],
	["Ov2x", "Ŏ"], ["ov2x", "ŏ"], ["Uv2x", "Ŭ"], ["uv2x", "ŭ"],
	["v2x", "̆"],
	["yx", "ʸ"],
	["zx", "ｫ"],
	["Z4x", "Ż"], ["z4x", "ż"],

	//声調
	//Tone
	["s3x", "˥"], ["t3x", "˩˥"], ["u3x", "˩"], ["v3x", "˥˩"],
	["w3x", "꜊"],
	
	["Ay3x", "Á"], ["ay3x", "á"], ["Az3x", "À"], ["az3x", "à"],
	["Ey3x", "É"], ["ey3x", "é"], ["Ez3x", "È"], ["ez3x", "è"],
	["Iy3x", "Í"], ["iy3x", "í"], ["Iz3x", "Ì"], ["iz3x", "ì"],
	["Oy3x", "Ó"], ["oy3x", "ó"], ["Oz3x", "Ò"], ["oz3x", "ò"],
	["Uy3x", "Ú"], ["uy3x", "ú"], ["Uz3x", "Ù"], ["uz3x", "ù"],
	["Y3x", "ꜛ"], ["y3x", "́"],
	["Z3x", "ꜜ"], ["z3x", "̀"],
];
var chr = [
	//エスケープ開始
	//Begin Escape
	["(?<=ｴ).", "$&͏"],

	//記号
	//Marks
	["゛|ﾞ", "゙"],
	["゜|ﾟ", "゚"],
	["゙゚", ""],
	["(?<![͏​‌])ˠ", ""],
	["‌̑", ""],
	["‌̣", ""],
	["‌̬", ""],
	["‌̃", ""],
	["‌̐", ""],
	["‌̉", ""],
	["‌̾", ""],
	["‌̱", ""],
	["‌̼", ""],
	["‌̆", ""],
	["‌̶", ""],
	["‌̫", ""],
	["‌̡", ""],
	["‌̢", ""],
	["‌ᷥ", ""],
	["‌̯", ""],
	["‌̂", ""],
	["‌̗", ""],
	["‌̖", ""],
	["‌͡", ""],
	["くｯ", "〱"],
	["ぐｯ", "〲"],
	["く゚ｯ", "〱゚"],

	//小書きひらがな
	//Small Hiragana
	["ﾁん", "𛅓"],
	["ﾁふﾝ", ""],
	["ﾁｷち", ""],
	["ﾁはｼ", ""],
	["ﾁすﾒ", ""], ["ﾁずﾒ", "゙"],
	["ﾁちﾒ", ""], ["ﾁぢﾒ", "゙"],
	["ﾁちｭｯ", ""],
	["ﾁちｯ", ""],
	["ﾁちｬｯ", ""],
	["ﾁちｼ", ""],
	["ﾁちﾗ", ""],
	["ぃｩ", ""],
	["ﾁきｩ", ""], ["ﾁぎｩ", "゙"],
	["ﾁき", "𛄰"], ["ﾁぎ", "𛄰゙"],
	["ﾁく", "𛄱"], ["ﾁぐ", "𛄱゙"],
	["ﾁこ", "𛄲"], ["ﾁご", "𛄲゙"],
	["ﾁさ", "𛄳"], ["ﾁざ", "𛄳゙"],
	["ﾁすｨｩ", ""], ["ﾁずｨｩ", "゙"],
	["ﾁすｨ", ""], ["ﾁずｨ", "゙"],
	["ﾁす", "𛄵"], ["ﾁず", "𛄵゙"],
	["ﾁせ", "𛄶"], ["ﾁぜ", "𛄶゙"],
	["ﾁそ", "𛄷"], ["ﾁぞ", "𛄷゙"],
	["ﾁしｬ", ""], ["ﾁじｬ", "゙"],
	["ﾁしｭ", ""], ["ﾁじｭ", "゙"],
	["ﾁしｪ", ""], ["ﾁじｪ", "゙"],
	["ﾁしｮ", ""], ["ﾁじｮ", "゙"],
	["ﾁしｩ", ""], ["ﾁじｩ", "゙"],
	["ﾁし", "𛄴"], ["ﾁじ", "𛄴゙"],
	["ﾁた", "𛄸"], ["ﾁだ", "𛄸゙"],
	["ﾁてｨｩ", ""], ["ﾁでｨｩ", "゙"],
	["ﾁてｨ", ""], ["ﾁでｨ", "゙"],
	["ﾁとｩ", ""], ["ﾁどｩ", "゙"],
	["ﾁて", "𛄺"], ["ﾁで", "𛄺゙"],
	["ﾁと", "𛄻"], ["ﾁど", "𛄻゙"],
	["ﾁちｬ", ""], ["ﾁぢｬ", "゙"],
	["ﾁちｭ", ""], ["ﾁぢｭ", "゙"],
	["ﾁちｪ", ""], ["ﾁぢｪ", "゙"],
	["ﾁちｮ", ""], ["ﾁぢｮ", "゙"],
	["ﾁちｩ", ""], ["ﾁぢｩ", "゙"],
	["ﾁち", "𛄹"], ["ﾁぢ", "𛄹゙"],
	["っｧ", ""], ["っ゙ｧ", "゙"],
	["っｨｩ", ""], ["っ゙ｨｩ", "゙"],
	["っｨ", ""], ["っ゙ｨ", "゙"],
	["っｪ", ""], ["っ゙ｪ", "゙"],
	["っｫ", ""], ["っ゙ｫ", "゙"],
	["ﾁな", "𛄼"],
	["ﾁにｩ", ""],
	["ﾁに", "𛄽"],
	["ﾁぬ", "𛄾"],
	["ﾁね", "𛄿"],
	["ﾁの", "𛅀"],
	["ﾁは", "𛅁"], ["ﾁば", "𛅁゙"], ["ﾁぱ", "𛅁゚"],
	["ﾁひｩ", ""], ["ﾁびｩ", "゙"], ["ﾁぴｩ", "゚"],
	["ﾁひ", "𛅂"], ["ﾁび", "𛅂゙"], ["ﾁぴ", "𛅂゚"],
	["ﾁふ", "𛅃"], ["ﾁぶ", "𛅃゙"], ["ﾁぷ", "𛅃゚"],
	["ﾁへ", "𛅄"], ["ﾁべ", "𛅄゙"], ["ﾁぺ", "𛅄゚"],
	["ﾁほｩ", ""],
	["ﾁほ", "𛅅"], ["ﾁぼ", "𛅅゙"], ["ﾁぽ", "𛅅゚"],
	["ﾁま", "𛅆"],
	["ﾁみｩ", ""],
	["ﾁみ", "𛅇"],
	["ﾁむ", "𛅈"],
	["ﾁめ", "𛅉"],
	["ﾁも", "𛅊"],
	["ぃｨｩ", ""],
	["ぃｨ", "𛅨"],
	["ぃｪ", "𛅩"],
	["ﾁら", "𛅋"],
	["ﾁりｩ", ""],
	["ﾁり", "𛅌"],
	["ﾁるｧ", ""],
	["ﾁるｨｩ", ""],
	["ﾁるｨ", ""],
	["ﾁるｩ", ""],
	["ﾁるｪ", ""],
	["ﾁるｫ", ""],
	["ﾁる", "𛅍"],
	["ﾁれ", "𛅎"],
	["ﾁろ", "𛅏"],
	["ぅｨｩ", ""], ["ぅ゙ｨｩ", "゙"], ["ぅ゚ｨｩ", "゚"],
	["ぅｨ", "𛅐"], ["ぅ゙ｨ", "𛅐゙"], ["ぅ゚ｨ", "𛅐゚"],
	["ぅｩ", "𛅪"], ["ぅ゙ｩ", "𛅪゙"], ["ぅ゚ｩ", "𛅪゚"],
	["ぅｪ", "𛅑"], ["ぅ゙ｪ", "𛅑゙"], ["ぅ゚ｪ", "𛅑゚"],
	["ぅｫ", "𛅒"], ["ぅ゙ｫ", "𛅒゙"], ["ぅ゚ｫ", "𛅒゚"],

	//小書きカタカナ
	//Small Katakana
	["ﾁン", "𛅧"],
	["ㇷﾝ", ""],
	["ﾁｷチ", ""],
	["ㇵｼ", ""],
	["ㇱﾒ", ""], ["ㇱ゙ﾒ", "゙"],
	["ッﾒ", ""], ["ッ゙ﾒ", "゙"],
	["ﾁチｭｯ", ""],
	["ﾁチｯ", ""],
	["ﾁチｬｯ", ""],
	["ﾁチｼ", ""],
	["ﾁチﾗ", ""],
	["ィｩ", ""],
	["ﾁキｩ", ""], ["ﾁギｩ", "゙"],
	["ﾁキ", "𛅔"], ["ﾁギ", "𛅔゙"],
	["ﾁコ", "𛅕"], ["ﾁゴ", "𛅕゙"],
	["ﾁサ", "𛅖"], ["ﾁザ", "𛅖゙"],
	["ㇲｨｩ", ""], ["ㇲ゙ｨｩ", "゙"],
	["ㇲｨ", ""], ["ㇲ゙ｨ", "゙"],
	["ﾁセ", "𛅗"], ["ﾁゼ", "𛅗゙"],
	["ﾁソ", "𛅘"], ["ﾁゾ", "𛅘゙"],
	["ㇱｬ", ""], ["ㇱ゙ｬ", "゙"],
	["ㇱｭ", ""], ["ㇱ゙ｭ", "゙"],
	["ㇱｪ", ""], ["ㇱ゙ｪ", "゙"],
	["ㇱｮ", ""], ["ㇱ゙ｮ", "゙"],
	["ㇱｩ", ""], ["ㇱ゙ｩ", "゙"],
	["ﾁタ", "𛅙"], ["ﾁダ", "𛅙゙"],
	["ﾁテｨｩ", ""], ["ﾁデｨｩ", "゙"],
	["ﾁテｨ", ""], ["ﾁデｨ", "゙"],
	["ㇳｩ", ""], ["ㇳ゙ｩ", "゙"],
	["ﾁテ", "𛅛"], ["ﾁデ", "𛅛゙"],
	["ﾁチｬ", ""], ["ﾁヂｬ", "゙"],
	["ﾁチｭ", ""], ["ﾁヂｭ", "゙"],
	["ﾁチｪ", ""], ["ﾁヂｪ", "゙"],
	["ﾁチｮ", ""], ["ﾁヂｮ", "゙"],
	["ﾁチｩ", ""], ["ﾁヂｩ", "゙"],
	["ﾁチ", "𛅚"], ["ﾁヂ", "𛅚゙"],
	["ッｧ", ""], ["ッ゙ｧ", "゙"],
	["ッｨｩ", ""], ["ッ゙ｨｩ", "゙"],
	["ッｨ", ""], ["ッ゙ｨ", "゙"],
	["ッｪ", ""], ["ッ゙ｪ", "゙"],
	["ッｫ", ""], ["ッ゙ｫ", "゙"],
	["ﾁナ", "𛅜"],
	["ﾁニｩ", ""],
	["ﾁニ", "𛅝"],
	["ﾁネ", "𛅞"],
	["ﾁノ", "𛅟"],
	["ㇶｩ", ""], ["ㇶ゙ｩ", "゙"], ["ㇶ゚ｩ", "゚"],
	["ㇹｩ", ""],
	["ﾁマ", "𛅠"],
	["ﾁミｩ", ""],
	["ﾁミ", "𛅡"],
	["ﾁメ", "𛅢"],
	["ﾁモ", "𛅣"],
	["ィｨｩ", ""],
	["ィｨ", "𛅫"],
	["ィｪ", "𛅬"],
	["ㇼｩ", ""],
	["ㇽｧ", ""],
	["ㇽｨｩ", ""],
	["ㇽｨ", ""],
	["ㇽｩ", ""],
	["ㇽｪ", ""],
	["ㇽｫ", ""],
	["ゥｨｩ", ""], ["ゥ゙ｨｩ", "゙"], ["ゥ゚ｨｩ", "゚"],
	["ゥｨ", "𛅤"], ["ゥ゙ｨ", "𛅤゙"], ["ゥ゚ｨ", "𛅤゚"],
	["ゥｩ", "𛅭"], ["ゥ゙ｩ", "𛅭゙"], ["ゥ゚ｩ", "𛅭゚"],
	["ゥｪ", "𛅥"], ["ゥ゙ｪ", "𛅥゙"], ["ゥ゚ｪ", "𛅥゚"],
	["ゥｫ", "𛅦"], ["ゥ゙ｫ", "𛅦゙"], ["ゥ゚ｫ", "𛅦゚"],

	//ケセン語かナ
	//Kesen Kana
	["すﾒ", ""], ["ずﾒ", ""],
	["ちﾒ", ""], ["ぢﾒ", ""],
	["シﾒ", ""], ["ジﾒ", ""],
	["ツﾒ", ""], ["ヅﾒ", ""],
	["す゚ﾒ", ""], ["ず゚ﾒ", ""], ["す(ﾒ|ﾒ)", ""],
	["ち゚ﾒ", ""], ["ぢ゚ﾒ", ""], ["ち(ﾒ|ﾒ)", ""],
	["ちﾒ", ""], ["ち(゚|゚)ﾒ", ""],
	["シ゚ﾒ", ""], ["ジ゚ﾒ", ""], ["シ(ﾒ|ﾒ)", ""],
	["ツ゚ﾒ", ""], ["ヅ゚ﾒ", ""], ["ツ(ﾒ|ﾒ)", ""],
	["ツﾒ", ""], ["ツ(゚|゚)ﾒ", ""],
	["ぃ|ぃｯ", ""], ["ぅ|ぅｯ", ""],
	["ィ|ィｯ", ""], ["ゥ|ゥｯ", ""],
	["〆ｯ", ""],
	["るｯ", ""],

	//拡張ひらがな
	//Extended Hiragana
	["ふﾝ", ""], ["ぶﾝ", ""],
	["ｷち", ""], ["ｷぢ", ""],
	["はｼ", ""], ["ばｼ", ""],
	["ちｭｯ", ""],
	["ちｯ", ""],
	["ちｬｯ", ""],
	["ちｼ", ""],
	["ちﾗ", ""],
	["あ", ""],
	["いｩ", ""], ["いｩ", ""],
	["い", ""],
	["う", ""],
	["え", ""],
	["お", ""],
	["か゚", ""],
	["きｩ", ""], ["ぎｩ", ""], ["き゚ｩ", ""],
	["き゚", ""],
	["く゚", ""],
	["け゚", ""],
	["こ゚", ""],
	["さ゚", ""], ["ざ゚|さ", ""],
	["すｨｩ", ""], ["ずｨｩ", ""], ["す゚ｨｩ", ""], ["(ず゚|す)ｨｩ", ""],
	["すｨ", ""], ["ずｨ", ""], ["す゚ｨ", ""], ["(ず゚|す)ｨ", ""],
	["す゚", ""], ["ず゚|す", ""],
	["せ゚", ""], ["ぜ゚|せ", ""],
	["そ゚", ""], ["ぞ゚|そ", ""],
	["しｬ", "𛁃"], ["じｬ", ""],
	["しｭ", ""], ["じｭ", ""],
	["しｪ", ""], ["じｪ", ""],
	["しｮ", ""], ["じｮ", ""],
	["しｩ", ""], ["じｩ", ""],
	["てｨｩ", ""], ["でｨｩ", ""],
	["てｨ", ""], ["でｨ", ""],
	["とｩ", "𛁭"], ["どｩ", ""],
	["ちｬ", ""], ["ぢｬ", ""],
	["ちｭ", ""], ["ぢｭ", ""],
	["ちｪ", ""], ["ぢｪ", ""],
	["ちｮ", ""], ["ぢｮ", ""],
	["ちｩ", ""], ["ぢｩ", ""],
	["つｧ", ""], ["づｧ", ""],
	["つｨｩ", ""], ["づｨｩ", ""],
	["つｨ", ""], ["づｨ", ""],
	["つｪ", ""], ["づｪ", ""],
	["つｫ", ""], ["づｫ", ""],
	["にｩ", ""],
	["は", ""],
	["ひｩ", ""], ["びｩ", ""], ["ぴｩ", ""], ["ひｩ", ""],
	["ひ", ""],
	["ほｩ", "𛀹"], ["ほｩ", ""],
	["へ", ""],
	["ほ", ""],
	["みｩ", ""],
	["いｨｩ", ""],
	["いｨ", "𛀆"],
	["いｪ", "𛀁"],
	["ら゚", ""],
	["りｩ", ""], ["り゚ｩ", ""],
	["り゚", ""],
	["る゚", ""],
	["れ゚", ""],
	["ろ゚", ""],
	["るｧ", ""],
	["るｨｩ", ""],
	["るｨ", ""],
	["るｩ", ""],
	["るｪ", ""],
	["るｫ", ""],
	["わ゙", ""], ["わ゚", ""],
	["ゐｩ", ""], ["ゐ゙ｩ", ""], ["ゐ゚ｩ", ""],
	["ゐ゙", ""], ["ゐ゚", ""],
	["(ゔ|ゔ)ｩ", ""], ["う゚ｩ", ""], ["うｩ", "𛄟"],
	["ゑ゙", ""], ["ゑ゚", ""],
	["を゙", ""], ["を゚", ""],

	//拡張カタカナ
	//Extended Katakana
	["フﾝ", ""], ["ブﾝ", ""],
	["ｷチ", ""], ["ｷヂ", ""],
	["ハｼ", ""], ["バｼ", ""],
	["チｭｯ", ""],
	["チｯ", ""],
	["チｬｯ", ""],
	["チｼ", ""],
	["チﾗ", ""],
	["ア", ""],
	["イｩ", ""], ["イｩ", ""],
	["イ", ""],
	["ウ", ""],
	["エ", ""],
	["オ", ""],
	["カ゚", ""],
	["キｩ", ""], ["ギｩ", ""], ["キ゚ｩ", ""],
	["キ゚", ""],
	["ク゚", ""],
	["ケ゚", ""],
	["コ゚", ""],
	["サ゚", ""], ["ザ゚|サ", ""],
	["スｨｩ", ""], ["ズｨｩ", ""], ["ス゚ｨｩ", ""], ["(ズ゚|ス)ｨｩ", ""],
	["スｨ", ""], ["ズｨ", ""], ["ス゚ｨ", ""], ["(ズ゚|ス)ｨ", ""],
	["ス゚", ""], ["ズ゚|ス", ""],
	["セ゚", ""], ["ゼ゚|セ", ""],
	["ソ゚", ""], ["ゾ゚|ソ", ""],
	["シｬ", ""], ["ジｬ", ""],
	["シｭ", ""], ["ジｭ", ""],
	["シｪ", ""], ["ジｪ", ""],
	["シｮ", ""], ["ジｮ", ""],
	["シｩ", ""], ["ジｩ", ""],
	["テｨｩ", ""], ["デｨｩ", ""],
	["テｨ", ""], ["デｨ", ""],
	["トｩ", ""], ["ドｩ", ""],
	["チｬ", ""], ["ヂｬ", ""],
	["チｭ", ""], ["ヂｭ", ""],
	["チｪ", ""], ["ヂｪ", ""],
	["チｮ", ""], ["ヂｮ", ""],
	["チｩ", ""], ["ヂｩ", ""],
	["ツｧ", ""], ["ヅｧ", ""],
	["ツｨｩ", ""], ["ヅｨｩ", ""],
	["ツｨ", ""], ["ヅｨ", ""],
	["ツｪ", ""], ["ヅｪ", ""],
	["ツｫ", ""], ["ヅｫ", ""],
	["ニｩ", ""],
	["ハ", ""],
	["ヒｩ", ""], ["ビｩ", ""], ["ピｩ", ""], ["ヒｩ", ""],
	["ヒ", ""],
	["ホｩ", ""], ["ホｩ", ""],
	["ヘ", ""],
	["ホ", ""],
	["ミｩ", ""],
	["イｨｩ", ""],
	["イｨ", "𛄠"],
	["イｪ", "𛄡"],
	["ラ゚", ""],
	["リｩ", ""], ["リ゚ｩ", ""],
	["リ゚", ""],
	["ル゚", ""],
	["レ゚", ""],
	["ロ゚", ""],
	["ルｧ", ""],
	["ルｨｩ", ""],
	["ルｨ", ""],
	["ルｩ", ""],
	["ルｪ", ""],
	["ルｫ", ""],
	["ワ゚", ""],
	["ヰｩ", ""], ["ヸｩ", ""], ["ヰ゚ｩ", ""],
	["ヰ゚", ""],
	["ヴｩ", ""], ["ウ゚ｩ", ""], ["ウｩ", "𛄢"],
	["ヱ゚", ""],
	["ヲ゚", ""],

	//上代特殊仮名遣
	//Ancient Special Kana Spelling
	["きｦ", "𛀦"],
	["けｦ", "𛀳"],
	["こｦ", "𛀸"],
	["そｦ", "𛁜"],
	["とｦ", "𛁷"],
	["のｦ", "𛂝"],
	["ひｦ", "𛂬"],
	["へｦ", "𛂹"],
	["みｦ", "𛃌"],
	["めｦ", "𛃕"],
	["もｦ", "𛃚"],
	["よｦ", "𛃢"],
	["ろｦ", "𛄆"],

	["きｵ", "𛀩"],
	["けｵ", "𛀵"],
	["こｵ", "𛀺"],
	["そｵ", "𛁗"],
	["とｵ", "𛁻"],
	["のｵ", "𛂛"],
	["ひｵ", "𛂯"],
	["へｵ", "𛂳"],
	["みｵ", "𛃏"],
	["めｵ", "𛃔"],
	["もｵ", "𛃗"],
	["よｵ", "𛃪"],
	["ろｵ", "𛄂"],

	["キｦ", ""],
	["ケｦ", ""],
	["コｦ", ""],
	["ソｦ", ""],
	["トｦ", ""],
	["ノｦ", ""],
	["ヒｦ", ""],
	["ヘｦ", ""],
	["ミｦ", ""],
	["メｦ", ""],
	["モｦ", ""],
	["ヨｦ", ""],
	["ロｦ", ""],

	["キｵ", ""],
	["ケｵ", ""],
	["コｵ", ""],
	["ソｵ", ""],
	["トｵ", ""],
	["ノｵ", ""],
	["ヒｵ", ""],
	["ヘｵ", ""],
	["ミｵ", ""],
	["メｵ", ""],
	["モｵ", ""],
	["ヨｵ", ""],
	["ロｵ", ""],

	//変体仮名
	//Hentaigana
	["が\\(佳\\)", "𛀗゙"],
	["が\\(加\\)", "𛀘゙"],
	["が\\(可1\\)", "𛀙゙"],
	["が\\(可2\\)", "𛀚゙"],
	["が\\(嘉\\)", "𛀛゙"],
	["が\\(我\\)", "𛀜゙"],
	["が\\(歟\\)", "𛀝゙"],
	["が\\(賀\\)", "𛀞゙"],
	["が\\(閑\\)", "𛀟゙"],
	["が\\(香\\)", "𛀠゙"],
	["が\\(駕\\)", "𛀡゙"],
	["[がげ]\\(家\\)", "𛀢゙"],
	["ぎ\\(喜\\)", "𛀣゙"],
	["ぎ\\(幾1\\)", "𛀤゙"],
	["ぎ\\(幾2\\)", "𛀥゙"],
	["ぎ\\(支\\)", "𛀦゙"],
	["ぎ\\(木\\)", "𛀧゙"],
	["ぎ\\(祈\\)", "𛀨゙"],
	["ぎ\\(貴\\)", "𛀩゙"],
	["ぎ\\(起\\)", "𛀪゙"],
	["ぐ\\(久1\\)", "𛀫゙"],
	["ぐ\\(久2\\)", "𛀬゙"],
	["ぐ\\(九\\)", "𛀭゙"],
	["ぐ\\(供\\)", "𛀮゙"],
	["ぐ\\(倶\\)", "𛀯゙"],
	["ぐ\\(具\\)", "𛀰゙"],
	["ぐ\\(求\\)", "𛀱゙"],
	["げ\\(介1\\)", "𛀲゙"],
	["げ\\(介2\\)", "𛀳゙"],
	["げ\\(希\\)", "𛀴゙"],
	["げ\\(氣\\)", "𛀵゙"],
	["げ\\(計\\)", "𛀶゙"],
	["げ\\(遣\\)", "𛀷゙"],
	["ご\\(古\\)", "𛀸゙"],
	["ご\\(故\\)", "𛀹゙"],
	["ご\\(許\\)", "𛀺゙"],
	["[ごぎ]\\(期\\)", "𛀻゙"],
	["ざ\\(乍\\)", "𛀼゙"],
	["ざ\\(佐1\\)", "𛀽゙"],
	["ざ\\(佐2\\)", "𛀾゙"],
	["ざ\\(左\\)", "𛀿゙"],
	["ざ\\(差\\)", "𛁀゙"],
	["ざ\\(散\\)", "𛁁゙"],
	["ざ\\(斜\\)", "𛁂゙"],
	["ざ\\(沙\\)", ""],
	["じ\\(之1\\)", "𛁄゙"],
	["じ\\(之2\\)", "𛁅゙"],
	["じ\\(事\\)", "𛁆゙"],
	["じ\\(四\\)", "𛁇゙"],
	["じ\\(志\\)", "𛁈゙"],
	["じ\\(新\\)", "𛁉゙"],
	["ず\\(受\\)", "𛁊゙"],
	["ず\\(壽\\)", "𛁋゙"],
	["ず\\(數1\\)", "𛁌゙"],
	["ず\\(數2\\)", "𛁍゙"],
	["ず\\(春1\\)", "𛁎゙"],
	["ず\\(春2\\)", "𛁏゙"],
	["ず\\(須1\\)", "𛁐゙"],
	["ず\\(須2\\)", "𛁑゙"],
	["ぜ\\(世1\\)", "𛁒゙"],
	["ぜ\\(世2\\)", "𛁓゙"],
	["ぜ\\(世3\\)", "𛁔゙"],
	["ぜ\\(勢\\)", "𛁕゙"],
	["ぜ\\(聲\\)", "𛁖゙"],
	["ぞ\\(所1\\)", "𛁗゙"],
	["ぞ\\(所2\\)", "𛁘゙"],
	["ぞ\\(曾1\\)", "𛁙゙"],
	["ぞ\\(曾2\\)", "𛁚゙"],
	["ぞ\\(楚\\)", "𛁛゙"],
	["ぞ\\(蘇\\)", "𛁜゙"],
	["ぞ\\(處\\)", "𛁝゙"],
	["だ\\(堂\\)", "𛁞゙"],
	["だ\\(多1\\)", "𛁟゙"],
	["だ\\(多2\\)", "𛁠゙"],
	["だ\\(當\\)", "𛁡゙"],
	["ぢ\\(千\\)", "𛁢゙"],
	["ぢ\\(地\\)", "𛁣゙"],
	["ぢ\\(智\\)", "𛁤゙"],
	["ぢ\\(知1\\)", "𛁥゙"],
	["ぢ\\(知2\\)", "𛁦゙"],
	["ぢ\\(致\\)", "𛁧゙"],
	["ぢ\\(遲\\)", "𛁨゙"],
	["づ\\(川1\\)", "𛁩゙"],
	["づ\\(川2\\)", "𛁪゙"],
	["づ\\(津\\)", "𛁫゙"],
	["づ\\(都\\)", "𛁬゙"],
	["[づど]\\(徒\\)", ""],
	["で\\(亭\\)", "𛁮゙"],
	["で\\(低\\)", "𛁯゙"],
	["で\\(傳\\)", "𛁰゙"],
	["で\\(天1\\)", "𛁱゙"],
	["で\\(天2\\)", "𛁲゙"],
	["で\\(天3\\)", "𛁳゙"],
	["で\\(帝\\)", "𛁴゙"],
	["で\\(弖\\)", "𛁵゙"],
	["で\\(轉\\)", "𛁶゙"],
	["ど\\(土\\)", "𛁷゙"],
	["ど\\(度\\)", "𛁸゙"],
	["ど\\(東\\)", "𛁹゙"],
	["ど\\(登1\\)", "𛁺゙"],
	["ど\\(登2\\)", "𛁻゙"],
	["ど\\(砥\\)", "𛁼゙"],
	["ど\\(等\\)", "𛁽゙"],
	["で\\(而\\)", "𛂎゙"],
	["ご\\(子\\)", "𛂘゙"],
	["ば\\(八\\)", "𛂞゙"],
	["ば\\(半\\)", "𛂟゙"],
	["ば\\(婆\\)", "𛂠゙"],
	["ば\\(波\\)", "𛂡゙"],
	["ば\\(盤1\\)", "𛂢゙"],
	["ば\\(盤2\\)", "𛂣゙"],
	["ば\\(破\\)", "𛂤゙"],
	["ば\\(者1\\)", "𛂥゙"],
	["ば\\(者2\\)", "𛂦゙"],
	["ば\\(葉\\)", "𛂧゙"],
	["ば\\(頗\\)", "𛂨゙"],
	["び\\(悲\\)", "𛂩゙"],
	["び\\(日\\)", "𛂪゙"],
	["び\\(比\\)", "𛂫゙"],
	["び\\(避\\)", "𛂬゙"],
	["び\\(非\\)", "𛂭゙"],
	["び\\(飛1\\)", "𛂮゙"],
	["び\\(飛2\\)", "𛂯゙"],
	["ぶ\\(不\\)", "𛂰゙"],
	["ぶ\\(婦\\)", "𛂱゙"],
	["ぶ\\(布\\)", "𛂲゙"],
	["べ\\(倍\\)", "𛂳゙"],
	["べ\\(弊1\\)", "𛂴゙"],
	["べ\\(弊2\\)", "𛂵゙"],
	["べ\\(遍\\)", "𛂶゙"],
	["べ\\(邊1\\)", "𛂷゙"],
	["べ\\(邊2\\)", "𛂸゙"],
	["べ\\(部\\)", "𛂹゙"],
	["ぼ\\(保1\\)", "𛂺゙"],
	["ぼ\\(保2\\)", "𛂻゙"],
	["ぼ\\(報\\)", "𛂼゙"],
	["ぼ\\(奉\\)", "𛂽゙"],
	["ぼ\\(寶\\)", "𛂾゙"],
	["ぼ\\(本1\\)", "𛂿゙"],
	["ぼ\\(本2\\)", "𛃀゙"],
	["ぼ\\(豐\\)", "𛃁゙"],

	["ぱ\\(八\\)", "𛂞゚"],
	["ぱ\\(半\\)", "𛂟゚"],
	["ぱ\\(婆\\)", "𛂠゚"],
	["ぱ\\(波\\)", "𛂡゚"],
	["ぱ\\(盤1\\)", "𛂢゚"],
	["ぱ\\(盤2\\)", "𛂣゚"],
	["ぱ\\(破\\)", "𛂤゚"],
	["ぱ\\(者1\\)", "𛂥゚"],
	["ぱ\\(者2\\)", "𛂦゚"],
	["ぱ\\(葉\\)", "𛂧゚"],
	["ぱ\\(頗\\)", "𛂨゚"],
	["ぴ\\(悲\\)", "𛂩゚"],
	["ぴ\\(日\\)", "𛂪゚"],
	["ぴ\\(比\\)", "𛂫゚"],
	["ぴ\\(避\\)", "𛂬゚"],
	["ぴ\\(非\\)", "𛂭゚"],
	["ぴ\\(飛1\\)", "𛂮゚"],
	["ぴ\\(飛2\\)", "𛂯゚"],
	["ぷ\\(不\\)", "𛂰゚"],
	["ぷ\\(婦\\)", "𛂱゚"],
	["ぷ\\(布\\)", "𛂲゚"],
	["ぺ\\(倍\\)", "𛂳゚"],
	["ぺ\\(弊1\\)", "𛂴゚"],
	["ぺ\\(弊2\\)", "𛂵゚"],
	["ぺ\\(遍\\)", "𛂶゚"],
	["ぺ\\(邊1\\)", "𛂷゚"],
	["ぺ\\(邊2\\)", "𛂸゚"],
	["ぺ\\(部\\)", "𛂹゚"],
	["ぽ\\(保1\\)", "𛂺゚"],
	["ぽ\\(保2\\)", "𛂻゚"],
	["ぽ\\(報\\)", "𛂼゚"],
	["ぽ\\(奉\\)", "𛂽゚"],
	["ぽ\\(寶\\)", "𛂾゚"],
	["ぽ\\(本1\\)", "𛂿゚"],
	["ぽ\\(本2\\)", "𛃀゚"],
	["ぽ\\(豐\\)", "𛃁゚"],

	["え\\(江\\)", "𛀁"],
	["あ\\(安\\)", "𛀂"],
	["あ\\(愛\\)", "𛀃"],
	["あ\\(阿\\)", "𛀄"],
	["[あを]\\(惡\\)", "𛀅"],
	["い\\(以\\)", "𛀆"],
	["い\\(伊\\)", "𛀇"],
	["い\\(意\\)", "𛀈"],
	["い\\(移\\)", "𛀉"],
	["う\\(宇1\\)", "𛀊"],
	["う\\(宇2\\)", "𛀋"],
	["う\\(憂\\)", "𛀌"],
	["う\\(有\\)", "𛀍"],
	["う\\(雲\\)", "𛀎"],
	["え\\(盈\\)", "𛀏"],
	["え\\(縁\\)", "𛀐"],
	["え\\(衣1\\)", "𛀑"],
	["え\\(衣2\\)", "𛀒"],
	["え\\(要\\)", "𛀓"],
	["お\\(於1\\)", "𛀔"],
	["お\\(於2\\)", "𛀕"],
	["お\\(隱\\)", "𛀖"],
	["か\\(佳\\)", "𛀗"],
	["か\\(加\\)", "𛀘"],
	["か\\(可1\\)", "𛀙"],
	["か\\(可2\\)", "𛀚"],
	["か\\(嘉\\)", "𛀛"],
	["か\\(我\\)", "𛀜"],
	["か\\(歟\\)", "𛀝"],
	["か\\(賀\\)", "𛀞"],
	["か\\(閑\\)", "𛀟"],
	["か\\(香\\)", "𛀠"],
	["か\\(駕\\)", "𛀡"],
	["[かけ]\\(家\\)", "𛀢"],
	["き\\(喜\\)", "𛀣"],
	["き\\(幾1\\)", "𛀤"],
	["き\\(幾2\\)", "𛀥"],
	["き\\(支\\)", "𛀦"],
	["き\\(木\\)", "𛀧"],
	["き\\(祈\\)", "𛀨"],
	["き\\(貴\\)", "𛀩"],
	["き\\(起\\)", "𛀪"],
	["く\\(久1\\)", "𛀫"],
	["く\\(久2\\)", "𛀬"],
	["く\\(九\\)", "𛀭"],
	["く\\(供\\)", "𛀮"],
	["く\\(倶\\)", "𛀯"],
	["く\\(具\\)", "𛀰"],
	["く\\(求\\)", "𛀱"],
	["け\\(介1\\)", "𛀲"],
	["け\\(介2\\)", "𛀳"],
	["け\\(希\\)", "𛀴"],
	["け\\(氣\\)", "𛀵"],
	["け\\(計\\)", "𛀶"],
	["け\\(遣\\)", "𛀷"],
	["こ\\(古\\)", "𛀸"],
	["こ\\(故\\)", "𛀹"],
	["こ\\(許\\)", "𛀺"],
	["[こき]\\(期\\)", "𛀻"],
	["さ\\(乍\\)", "𛀼"],
	["さ\\(佐1\\)", "𛀽"],
	["さ\\(佐2\\)", "𛀾"],
	["さ\\(左\\)", "𛀿"],
	["さ\\(差\\)", "𛁀"],
	["さ\\(散\\)", "𛁁"],
	["さ\\(斜\\)", "𛁂"],
	["さ\\(沙\\)", "𛁃"],
	["し\\(之1\\)", "𛁄"],
	["し\\(之2\\)", "𛁅"],
	["し\\(事\\)", "𛁆"],
	["し\\(四\\)", "𛁇"],
	["し\\(志\\)", "𛁈"],
	["し\\(新\\)", "𛁉"],
	["す\\(受\\)", "𛁊"],
	["す\\(壽\\)", "𛁋"],
	["す\\(數1\\)", "𛁌"],
	["す\\(數2\\)", "𛁍"],
	["す\\(春1\\)", "𛁎"],
	["す\\(春2\\)", "𛁏"],
	["す\\(須1\\)", "𛁐"],
	["す\\(須2\\)", "𛁑"],
	["せ\\(世1\\)", "𛁒"],
	["せ\\(世2\\)", "𛁓"],
	["せ\\(世3\\)", "𛁔"],
	["せ\\(勢\\)", "𛁕"],
	["せ\\(聲\\)", "𛁖"],
	["そ\\(所1\\)", "𛁗"],
	["そ\\(所2\\)", "𛁘"],
	["そ\\(曾1\\)", "𛁙"],
	["そ\\(曾2\\)", "𛁚"],
	["そ\\(楚\\)", "𛁛"],
	["そ\\(蘇\\)", "𛁜"],
	["そ\\(處\\)", "𛁝"],
	["た\\(堂\\)", "𛁞"],
	["た\\(多1\\)", "𛁟"],
	["た\\(多2\\)", "𛁠"],
	["た\\(當\\)", "𛁡"],
	["ち\\(千\\)", "𛁢"],
	["ち\\(地\\)", "𛁣"],
	["ち\\(智\\)", "𛁤"],
	["ち\\(知1\\)", "𛁥"],
	["ち\\(知2\\)", "𛁦"],
	["ち\\(致\\)", "𛁧"],
	["ち\\(遲\\)", "𛁨"],
	["つ\\(川1\\)", "𛁩"],
	["つ\\(川2\\)", "𛁪"],
	["つ\\(津\\)", "𛁫"],
	["つ\\(都\\)", "𛁬"],
	["[つと]\\(徒\\)", "𛁭"],
	["て\\(亭\\)", "𛁮"],
	["て\\(低\\)", "𛁯"],
	["て\\(傳\\)", "𛁰"],
	["て\\(天1\\)", "𛁱"],
	["て\\(天2\\)", "𛁲"],
	["て\\(天3\\)", "𛁳"],
	["て\\(帝\\)", "𛁴"],
	["て\\(弖\\)", "𛁵"],
	["て\\(轉\\)", "𛁶"],
	["と\\(土\\)", "𛁷"],
	["と\\(度\\)", "𛁸"],
	["と\\(東\\)", "𛁹"],
	["と\\(登1\\)", "𛁺"],
	["と\\(登2\\)", "𛁻"],
	["と\\(砥\\)", "𛁼"],
	["[とら]\\(等\\)", "𛁽"],
	["な\\(南\\)", "𛁾"],
	["な\\(名\\)", "𛁿"],
	["な\\(奈1\\)", "𛂀"],
	["な\\(奈2\\)", "𛂁"],
	["な\\(奈3\\)", "𛂂"],
	["な\\(菜\\)", "𛂃"],
	["な\\(那1\\)", "𛂄"],
	["な\\(那2\\)", "𛂅"],
	["な\\(難\\)", "𛂆"],
	["に\\(丹\\)", "𛂇"],
	["に\\(二\\)", "𛂈"],
	["に\\(仁\\)", "𛂉"],
	["に\\(兒\\)", "𛂊"],
	["に\\(爾1\\)", "𛂋"],
	["に\\(爾2\\)", "𛂌"],
	["に\\(耳\\)", "𛂍"],
	["[にて]\\(而\\)", "𛂎"],
	["ぬ\\(努\\)", "𛂏"],
	["ぬ\\(奴\\)", "𛂐"],
	["ぬ\\(怒\\)", "𛂑"],
	["ね\\(年1\\)", "𛂒"],
	["ね\\(年2\\)", "𛂓"],
	["ね\\(年3\\)", "𛂔"],
	["ね\\(根\\)", "𛂕"],
	["ね\\(熱\\)", "𛂖"],
	["ね\\(禰\\)", "𛂗"],
	["[ねこ]\\(子\\)", "𛂘"],
	["の\\(乃\\)", "𛂙"],
	["の\\(濃\\)", "𛂚"],
	["の\\(能1\\)", "𛂛"],
	["の\\(能2\\)", "𛂜"],
	["の\\(農\\)", "𛂝"],
	["は\\(八\\)", "𛂞"],
	["は\\(半\\)", "𛂟"],
	["は\\(婆\\)", "𛂠"],
	["は\\(波\\)", "𛂡"],
	["は\\(盤1\\)", "𛂢"],
	["は\\(盤2\\)", "𛂣"],
	["は\\(破\\)", "𛂤"],
	["は\\(者1\\)", "𛂥"],
	["は\\(者2\\)", "𛂦"],
	["は\\(葉\\)", "𛂧"],
	["は\\(頗\\)", "𛂨"],
	["ひ\\(悲\\)", "𛂩"],
	["ひ\\(日\\)", "𛂪"],
	["ひ\\(比\\)", "𛂫"],
	["ひ\\(避\\)", "𛂬"],
	["ひ\\(非\\)", "𛂭"],
	["ひ\\(飛1\\)", "𛂮"],
	["ひ\\(飛2\\)", "𛂯"],
	["ふ\\(不\\)", "𛂰"],
	["ふ\\(婦\\)", "𛂱"],
	["ふ\\(布\\)", "𛂲"],
	["へ\\(倍\\)", "𛂳"],
	["へ\\(弊1\\)", "𛂴"],
	["へ\\(弊2\\)", "𛂵"],
	["へ\\(遍\\)", "𛂶"],
	["へ\\(邊1\\)", "𛂷"],
	["へ\\(邊2\\)", "𛂸"],
	["へ\\(部\\)", "𛂹"],
	["ほ\\(保1\\)", "𛂺"],
	["ほ\\(保2\\)", "𛂻"],
	["ほ\\(報\\)", "𛂼"],
	["ほ\\(奉\\)", "𛂽"],
	["ほ\\(寶\\)", "𛂾"],
	["ほ\\(本1\\)", "𛂿"],
	["ほ\\(本2\\)", "𛃀"],
	["ほ\\(豐\\)", "𛃁"],
	["ま\\(万\\)", "𛃂"],
	["ま\\(末1\\)", "𛃃"],
	["ま\\(末2\\)", "𛃄"],
	["ま\\(滿1\\)", "𛃅"],
	["ま\\(滿2\\)", "𛃆"],
	["ま\\(萬\\)", "𛃇"],
	["ま\\(麻\\)", "𛃈"],
	["み\\(三\\)", "𛃉"],
	["み\\(微\\)", "𛃊"],
	["み\\(美1\\)", "𛃋"],
	["み\\(美2\\)", "𛃌"],
	["み\\(美3\\)", "𛃍"],
	["み\\(見\\)", "𛃎"],
	["み\\(身\\)", "𛃏"],
	["む\\(武\\)", "𛃐"],
	["む\\(無\\)", "𛃑"],
	["む\\(牟\\)", "𛃒"],
	["む\\(舞\\)", "𛃓"],
	["め\\(免\\)", "𛃔"],
	["め\\(面\\)", "𛃕"],
	["[めま]\\(馬\\)", "𛃖"],
	["も\\(母\\)", "𛃗"],
	["も\\(毛1\\)", "𛃘"],
	["も\\(毛2\\)", "𛃙"],
	["も\\(毛3\\)", "𛃚"],
	["も\\(茂\\)", "𛃛"],
	["も\\(裳\\)", "𛃜"],
	["や\\(也1\\)", "𛃝"],
	["や\\(也2\\)", "𛃞"],
	["や\\(屋\\)", "𛃟"],
	["や\\(耶1\\)", "𛃠"],
	["や\\(耶2\\)", "𛃡"],
	["[やよ]\\(夜\\)", "𛃢"],
	["ゆ\\(游\\)", "𛃣"],
	["ゆ\\(由1\\)", "𛃤"],
	["ゆ\\(由2\\)", "𛃥"],
	["ゆ\\(遊\\)", "𛃦"],
	["よ\\(代\\)", "𛃧"],
	["よ\\(余\\)", "𛃨"],
	["よ\\(與1\\)", "𛃩"],
	["よ\\(與2\\)", "𛃪"],
	["よ\\(與3\\)", "𛃫"],
	["よ\\(餘\\)", "𛃬"],
	["ら\\(羅\\)", "𛃭"],
	["ら\\(良1\\)", "𛃮"],
	["ら\\(良2\\)", "𛃯"],
	["ら\\(良3\\)", "𛃰"],
	["り\\(利1\\)", "𛃱"],
	["り\\(利2\\)", "𛃲"],
	["り\\(李\\)", "𛃳"],
	["り\\(梨\\)", "𛃴"],
	["り\\(理\\)", "𛃵"],
	["り\\(里\\)", "𛃶"],
	["り\\(離\\)", "𛃷"],
	["る\\(流\\)", "𛃸"],
	["る\\(留1\\)", "𛃹"],
	["る\\(留2\\)", "𛃺"],
	["る\\(留3\\)", "𛃻"],
	["る\\(累\\)", "𛃼"],
	["る\\(類\\)", "𛃽"],
	["れ\\(禮1\\)", "𛃾"],
	["れ\\(禮2\\)", "𛃿"],
	["れ\\(連\\)", "𛄀"],
	["れ\\(麗\\)", "𛄁"],
	["ろ\\(呂1\\)", "𛄂"],
	["ろ\\(呂2\\)", "𛄃"],
	["ろ\\(婁\\)", "𛄄"],
	["ろ\\(樓\\)", "𛄅"],
	["ろ\\(路\\)", "𛄆"],
	["ろ\\(露\\)", "𛄇"],
	["わ\\(倭\\)", "𛄈"],
	["わ\\(和1\\)", "𛄉"],
	["わ\\(和2\\)", "𛄊"],
	["わ\\(王1\\)", "𛄋"],
	["わ\\(王2\\)", "𛄌"],
	["ゐ\\(井1\\)", "𛄍"],
	["ゐ\\(井2\\)", "𛄎"],
	["ゐ\\(居\\)", "𛄏"],
	["ゐ\\(爲\\)", "𛄐"],
	["ゐ\\(遺\\)", "𛄑"],
	["ゑ\\(惠\\)", "𛄒"],
	["ゑ\\(衞1\\)", "𛄓"],
	["ゑ\\(衞2\\)", "𛄔"],
	["ゑ\\(衞3\\)", "𛄕"],
	["を\\(乎1\\)", "𛄖"],
	["を\\(乎2\\)", "𛄗"],
	["を\\(尾\\)", "𛄘"],
	["を\\(緒\\)", "𛄙"],
	["を\\(越\\)", "𛄚"],
	["を\\(遠1\\)", "𛄛"],
	["を\\(遠2\\)", "𛄜"],
	["[んむも]\\(无1\\)", "𛄝"],
	["[んむも]\\(无2\\)", "𛄞"],

	["エ\\(衣\\)", "𛀀"],
	["キ\\(支\\)", ""],
	["キ\\(贵\\)", ""],
	["ケ\\(介\\)", ""],
	["ケ\\(気\\)", ""],
	["コ\\(古\\)", ""],
	["コ\\(巨\\)", ""],
	["ソ\\(苏\\)", ""],
	["ソ\\(曽\\)", ""],
	["ト\\(斗\\)", ""],
	["ト\\(登\\)", ""],
	["ノ\\(农\\)", ""],
	["ノ\\(⿰䏍长\\)", ""],
	["ヒ\\(氷\\)", ""],
	["ヒ\\(飞\\)", ""],
	["ヘ\\(部\\)", ""],
	["ヘ\\(倍\\)", ""],
	["ミ\\(弥\\)", ""],
	["ミ\\(身\\)", ""],
	["メ\\(面\\)", ""],
	["メ\\(免\\)", ""],
	["モ\\(毛\\)", ""],
	["モ\\(母\\)", ""],
	["ヨ\\(夜\\)", ""],
	["ヨ\\(与\\)", ""],
	["ロ\\(漏\\)", ""],
	["ロ\\(侶\\)", ""],

	//合略仮名
	//Ligatures of Kana
	["ｺことｳ", "󷲰"],
	["ｺともｳ", ""], ["ｺトモｳ", "𪜈"],
	["ｺなりｳ", "𬼂"], ["ｺナリｳ", "𬻿"],
	["ｺヨリｳ", "󷲵"],

	["ｺさまｳ", ""],
	["ｺそうろうｳ", ""],
	["ｺかしこｳ", ""],
	["ｺまいらせそうろうｳ", ""],

	["ｺイウｳ", ""],
	["ｺシテｳ", "𬼀"],
	["ｺトイウｳ", "󷲴"],
	["ｺトキｳ", "󷲲"],
	["ｺトキ2ｳ", ""],
	["ｺトテｳ", "󷲳"],

	["ｺならｳ", ""],
	["ｺてもｳ", ""],
	["ｺしかしｳ", ""],
	["ｺアリｳ", ""],
	["ｺタイｳ", ""],
	["ｺなどｳ", ""],
	["ｺへとｳ", ""],

	//拡張算用数字
	//Extended Arabic Numerals
	["2ｫ", "↊"],
	["3ｫ", "↋"],
	["4ｫ", "↌"],
	["5ｫ", "↍"],
	["6ｫ", "↎"],
	["7ｫ", "↏"],
	["8ｫ", ""],
	["9ｫ", ""],
	["0ｫ", ""],
	["1ｫ", ""],

	//真偽値を 表す 文字
	//Characters for Boolean
	["真ｯ", ""],
	["偽ｯ", ""],
	["無ｯ", ""],

	//色線文字
	//Colinor Script
	["ｶ\\{⟀⎝\\}", ""],
	["ｶ\\{⟀ᴶ⎝\\}", ""],
	["ｶ\\{⟀⏋\\}", ""],
	["ｶ\\{⟀ᴶ∖⎞⏋\\}", ""],
	["ｶ\\{⟀∖⎞⏋\\}", ""],
	["ｶ\\{⟀⎞⏋\\}", ""],
	["ｶ\\{⟀ᴶ⎞⏋\\}", ""],
	["ｶ\\{⟀⎞\\}", ""],
	["ｶ\\{⟀ᴶ⎞\\}", ""],
	["ｶ\\{⟀∖⎞\\}", ""],
	["ｶ\\{⟀ᴶ∖⎞\\}", ""],
	["ｶ\\{⟀ᴶ∖\\}", ""],
	["ｶ\\{⟀∖\\}", ""],
	["ｶ\\{⟀ᴶ∖⏋\\}", ""],
	["ｶ\\{⟀∖⏋\\}", ""],
	["ｶ\\{⟀ᴶ⏋\\}", ""],

	["ｶ\\{∟⎝\\}", ""],
	["ｶ\\{∟ᴶ⎝\\}", ""],
	["ｶ\\{∟⏋\\}", ""],
	["ｶ\\{∟ᴶ∖⎞⏋\\}", ""],
	["ｶ\\{∟∖⎞⏋\\}", ""],
	["ｶ\\{∟⎞⏋\\}", ""],
	["ｶ\\{∟ᴶ⎞⏋\\}", ""],
	["ｶ\\{∟⎞\\}", ""],
	["ｶ\\{∟ᴶ⎞\\}", ""],
	["ｶ\\{∟∖⎞\\}", ""],
	["ｶ\\{∟ᴶ∖⎞\\}", ""],
	["ｶ\\{∟ᴶ∖\\}", ""],
	["ｶ\\{∟∖\\}", ""],
	["ｶ\\{∟ᴶ∖⏋\\}", ""],
	["ｶ\\{∟∖⏋\\}", ""],
	["ｶ\\{∟ᴶ⏋\\}", ""],

	["ｶ\\{∠⎝\\}", ""],
	["ｶ\\{∠ᴶ⎝\\}", ""],
	["ｶ\\{∠⏋\\}", ""],
	["ｶ\\{∠ᴶ∖⎞⏋\\}", ""],
	["ｶ\\{∠∖⎞⏋\\}", ""],
	["ｶ\\{∠⎞⏋\\}", ""],
	["ｶ\\{∠ᴶ⎞⏋\\}", ""],
	["ｶ\\{∠⎞\\}", ""],
	["ｶ\\{∠ᴶ⎞\\}", ""],
	["ｶ\\{∠∖⎞\\}", ""],
	["ｶ\\{∠ᴶ∖⎞\\}", ""],
	["ｶ\\{∠ᴶ∖\\}", ""],
	["ｶ\\{∠∖\\}", ""],
	["ｶ\\{∠ᴶ∖⏋\\}", ""],
	["ｶ\\{∠∖⏋\\}", ""],
	["ｶ\\{∠ᴶ⏋\\}", ""],

	["ｶ\\{＿⎝\\}", ""],
	["ｶ\\{＿ᴶ⎝\\}", ""],
	["ｶ\\{＿⏋\\}", ""],
	["ｶ\\{＿ᴶ∖⎞⏋\\}", ""],
	["ｶ\\{＿∖⎞⏋\\}", ""],
	["ｶ\\{＿⎞⏋\\}", ""],
	["ｶ\\{＿ᴶ⎞⏋\\}", ""],
	["ｶ\\{＿⎞\\}", ""],
	["ｶ\\{＿ᴶ⎞\\}", ""],
	["ｶ\\{＿∖⎞\\}", ""],
	["ｶ\\{＿ᴶ∖⎞\\}", ""],
	["ｶ\\{＿ᴶ∖\\}", ""],
	["ｶ\\{＿∖\\}", ""],
	["ｶ\\{＿ᴶ∖⏋\\}", ""],
	["ｶ\\{＿∖⏋\\}", ""],
	["ｶ\\{＿ᴶ⏋\\}", ""],

	["ｶ\\{⎝\\}", ""],
	["ｶ\\{ᴶ⎝\\}", ""],
	["ｶ\\{⏋\\}", ""],
	["ｶ\\{ᴶ∖⎞⏋\\}", ""],
	["ｶ\\{∖⎞⏋\\}", ""],
	["ｶ\\{⎞⏋\\}", ""],
	["ｶ\\{ᴶ⎞⏋\\}", ""],
	["ｶ\\{⎞\\}", ""],
	["ｶ\\{ᴶ⎞\\}", ""],
	["ｶ\\{∖⎞\\}", ""],
	["ｶ\\{ᴶ∖⎞\\}", ""],
	["ｶ\\{ᴶ∖\\}", ""],
	["ｶ\\{∖\\}", ""],
	["ｶ\\{ᴶ∖\\}", ""],
	["ｶ\\{∖⏋\\}", ""],
	["ｶ\\{ᴶ⏋\\}", ""],

	["ｶ\\{⟀\\}", ""],
	["ｶ\\{∟\\}", ""],
	["ｶ\\{∠\\}", ""],
	["ｶ\\{＿\\}", ""],

	//漢字構成記述文字
	//IDS
	["コｯ", "⿼"],
	["Jｯ", "⿽"],
	["↔ｯ", "⿾"],
	["↩ｯ", "⿿"],
	["−ｯ", "㇯"],
	["⤵ｯ", ""],
	["⤴ｯ", ""],
	
	//部首
	//Radicals
	["月🌃ｯ", "⽉"],
	["月🍖ｯ", "⺼"],
	["月⛵️ｯ", "􁙷"],
	["月ｯ", "月"],
	["二ｯ", "⼆"],
	["三ｯ", ""],

	//漢字
	//Kanji
	["⿱苦⿲⿰⿹耳舌鼻⿱⿱平⿰惡意⿱眼⿰淨染⿰⿱女子身", "󸀑"],

	//エスケープ終了
	//End Escape
	["(?<=ｴ)(.)͏", "$1"]
];