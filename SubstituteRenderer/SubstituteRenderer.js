var latin = [
	//ラテン文字
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
	["Hx", "Ĥ"], ["hx", "ĥ"],
	["Ix", "Ɨ"], ["ix", "ɨ"],
	["Jx", "Ĵ"], ["jx", "ĵ"],
	["J3x", "Ɉ"], ["j3x", "ɟ"],
	["Kx", "X"], ["kx", "​x"],
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
	["Sx", "Ŝ"], ["sx", "ŝ"],
	["S2x", "ẞ"], ["s2x", "ß"],
	["Ux", "Ɯ"], ["ux", "ɯ"],
	["Vx", "Ꞟ"], ["vx", "ꞟ"],
	["Wx", "Ŭ"], ["wx", "ŭ"],
	["W2x", "Ꝡ"], ["w2x", "ꝡ"],
	["Y2x", "Ɥ"], ["y2x", "ɥ"],
	["Z2x", "ẞ̂"], ["z2x", "ß̂"],

	//ダイアクリティカルマーク、記号付きラテン文字
	["b3x", "̍"],
	["c2x", "ʗ"],
	["d2x", "̥"],
	["g2x", "ˁ"],
	["bf2x", "ɓ"], ["df2x", "ɗ"], ["ĝf2x", "ɠ̂"], ["gf2x", "ɠ"],
	["gˁf2x", "ʛ"], ["f2x", "ᶠ"],
	["h2x", "̔"],
	["i2x", "̩"],
	["j2x", "ʲ"],
	["k2x", "ˀ"],
	["Ak3x", "Â"], ["ak3x", "â"], ["Ck3x", "Ĉ"], ["ck3x", "ĉ"],
	["Ek3x", "Ê"], ["ek3x", "ê"], ["Gk3x", "Ĝ"], ["gk3x", "ĝ"],
	["Hk3x", "Ĥ"], ["hk3x", "ĥ"], ["Ik3x", "Î"], ["ik3x", "î"],
	["Jk3x", "Ĵ"], ["jk3x", "ĵ"], ["Ok3x", "Ô"], ["ok3x", "ô"],
	["Sk3x", "Ŝ"], ["sk3x", "ŝ"], ["Uk3x", "Û"], ["uk3x", "û"],
	["Wk3x", "Ŵ"], ["wk3x", "ŵ"], ["Zk3x", "Ẑ"], ["zk3x", "ẑ"],
	["k3x", "̂"],
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
	["Drx", "Ɖ"], ["drx", "ɖ"], ["srx", "ʂ"], ["zrx", "ʐ"],
	["rx", "̢"],
	["t2x", "￭"],
	["u2x", "ᵘ"],
	["Av2x", "Ă"], ["av2x", "ă"], ["Ev2x", "Ĕ"], ["ev2x", "ĕ"],
	["Gv2x", "Ğ"], ["gv2x", "ğ"], ["Iv2x", "Ĭ"], ["iv2x", "ĭ"],
	["Ov2x", "Ŏ"], ["ov2x", "ŏ"], ["Uv2x", "Ŭ"], ["uv2x", "ŭ"],
	["v2x", "̆"],
	["yx", "ʸ"],
	["zx", "ｫ"],

	//声調
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
	["ｴ(.)", "ｴ$1͏"],

	//記号
	["(゛|ﾞ)", "゙"],
	["(゜|ﾟ)", "゚"],
	["゙゚", ""],
	["ˠ", ""],
	["‌̣", ""],
	["‌̬", ""],

	//小書きひらがな
	["ﾁき", "𛄰"], ["ﾁぎ", "𛄰゙"],
	["ﾁく", "𛄱"], ["ﾁぐ", "𛄱゙"],
	["ﾁこ", "𛄲"], ["ﾁご", "𛄲゙"],
	["ﾁさ", "𛄳"], ["ﾁざ", "𛄳゙"],
	["ﾁし", "𛄴"], ["ﾁじ", "𛄴゙"],
	["ﾁす", "𛄵"], ["ﾁず", "𛄵゙"],
	["ﾁせ", "𛄶"], ["ﾁぜ", "𛄶゙"],
	["ﾁそ", "𛄷"], ["ﾁぞ", "𛄷゙"],
	["ﾁた", "𛄸"], ["ﾁだ", "𛄸゙"],
	["ﾁちﾒ", ""], ["ﾁぢﾒ", "゙"],
	["ﾁち", "𛄹"], ["ﾁぢ", "𛄹゙"],
	["ﾁて", "𛄺"], ["ﾁで", "𛄺゙"],
	["ﾁと", "𛄻"], ["ﾁど", "𛄻゙"],
	["ﾁな", "𛄼"],
	["ﾁに", "𛄽"],
	["ﾁぬ", "𛄾"],
	["ﾁね", "𛄿"],
	["ﾁの", "𛅀"],
	["ﾁは", "𛅁"], ["ﾁば", "𛅁゙"], ["ﾁぱ", "𛅁゚"],
	["ﾁひ", "𛅂"], ["ﾁび", "𛅂゙"], ["ﾁぴ", "𛅂゚"],
	["ﾁふ", "𛅃"], ["ﾁぶ", "𛅃゙"], ["ﾁぷ", "𛅃゚"],
	["ﾁへ", "𛅄"], ["ﾁべ", "𛅄゙"], ["ﾁぺ", "𛅄゚"],
	["ﾁほ", "𛅅"], ["ﾁぼ", "𛅅゙"], ["ﾁぽ", "𛅅゚"],
	["ﾁま", "𛅆"],
	["ﾁみ", "𛅇"],
	["ﾁむ", "𛅈"],
	["ﾁめ", "𛅉"],
	["ﾁも", "𛅊"],
	["ﾁら", "𛅋"],
	["ﾁり", "𛅌"],
	["ﾁる", "𛅍"],
	["ﾁれ", "𛅎"],
	["ﾁろ", "𛅏"],
	["ﾁゐ", "𛅐"], ["ぅｨ", "𛅐"], ["ぅ゙ｨ", "𛅐゙"], ["ぅ゚ｨ", "𛅐゚"],
	["ﾁゑ", "𛅑"], ["ぅｪ", "𛅑"], ["ぅ゙ｪ", "𛅑゙"], ["ぅ゚ｪ", "𛅑゚"],
	["ﾁを", "𛅒"], ["ぅｫ", "𛅒"], ["ぅ゙ｫ", "𛅒゙"], ["ぅ゚ｫ", "𛅒゚"],
	["ﾁん", "𛅓"],

	//小書きカタカナ
	["ﾁキ", "𛅔"], ["ﾁギ", "𛅔゙"],
	["ﾁコ", "𛅕"], ["ﾁゴ", "𛅕゙"],
	["ﾁサ", "𛅖"], ["ﾁザ", "𛅖゙"],
	["ﾁセ", "𛅗"], ["ﾁゼ", "𛅗゙"],
	["ﾁソ", "𛅘"], ["ﾁゾ", "𛅘゙"],
	["ﾁタ", "𛅙"], ["ﾁダ", "𛅙゙"],
	["ﾁチ", "𛅚"], ["ﾁヂ", "𛅚゙"],
	["ッﾒ", ""],
	["ﾁテ", "𛅛"], ["ﾁデ", "𛅛゙"],
	["ﾁナ", "𛅜"],
	["ﾁニ", "𛅝"],
	["ﾁネ", "𛅞"],
	["ﾁノ", "𛅟"],
	["ﾁマ", "𛅠"],
	["ﾁミ", "𛅡"],
	["ﾁメ", "𛅢"],
	["ﾁモ", "𛅣"],
	["ﾁヰ", "𛅤"], ["ゥｨ", "𛅤"], ["ゥ゙ｨ", "𛅤゙"], ["ゥ゚ｨ", "𛅤゚"],
	["ﾁヱ", "𛅥"], ["ゥｪ", "𛅥"], ["ゥ゙ｪ", "𛅥゙"], ["ゥ゚ｪ", "𛅥゚"],
	["ﾁヲ", "𛅦"], ["ゥｫ", "𛅦"], ["ゥ゙ｫ", "𛅦゙"], ["ゥ゚ｫ", "𛅦゚"],
	["ﾁン", "𛅧"],

	//小書き拡張かナ文字
	["ぃｨ", "𛅨"],
	["ぃｪ", "𛅩"],
	["ぅｩ", "𛅪"], ["ぅ゙ｩ", "𛅪゙"], ["ぅ゚ｩ", "𛅪゚"],
	["ィｨ", "𛅫"],
	["ィｪ", "𛅬"],
	["ゥｩ", "𛅭"], ["ゥ゙ｩ", "𛅭゙"], ["ゥ゚ｩ", "𛅭゚"],

	//ケセン語かナ
	["すﾒ", ""], ["ずﾒ", ""],
	["ちﾒ", ""], ["ぢﾒ", ""],
	["シﾒ", ""], ["ジﾒ", ""],
	["ツﾒ", ""], ["ヅﾒ", ""],
	["す゚ﾒ", ""], ["(ず゚|す)ﾒ", ""],
	["ち゚ﾒ", ""], ["(ぢ゚|ち)ﾒ", ""],
	["ちﾒ", ""], ["(ち゚|ち゚)ﾒ", ""], ["(ち゚|ち゚)ﾒ", ""],
	["シ゚ﾒ", ""], ["(ジ゚|シ)ﾒ", ""],
	["ツ゚ﾒ", ""], ["(ヅ゚|ツ)ﾒ", ""],
	["ツﾒ", ""], ["(ツ゚|ツ゚)ﾒ", ""], ["(ツ゚|ツ゚)ﾒ", ""],
	["ぃ", ""], ["ぅ", ""],
	["ィ", ""], ["ゥ", ""],

	//拡張ひらがな
	["あ", ""],
	["い", ""],
	["う", ""],
	["え", ""],
	["お", ""],
	["か゚", ""],
	["き゚", ""],
	["く゚", ""],
	["け゚", ""],
	["こ゚", ""],
	["さ゚", ""], ["(ざ゚|さ)", ""],
	["すｨ", ""], ["ずｨ", ""], ["す゚ｨ", ""], ["(ず゚|す)ｨ", ""],
	["す゚", ""], ["(ず゚|す)", ""],
	["せ゚", ""], ["(ぜ゚|せ)", ""],
	["そ゚", ""], ["(ぞ゚|そ)", ""],
	["しｬ", "𛁃"], ["じｬ", ""],
	["しｭ", ""], ["じｭ", ""],
	["しｪ", ""], ["じｪ", ""],
	["しｮ", ""], ["じｮ", ""],
	["てｨ", ""], ["でｨ", ""],
	["とｩ", "𛁭"], ["どｩ", ""],
	["ちｬ", ""], ["ぢｬ", ""],
	["ちｭ", ""], ["ぢｭ", ""],
	["ちｪ", ""], ["ぢｪ", ""],
	["ちｮ", ""], ["ぢｮ", ""],
	["つｧ", ""], ["づｧ", ""],
	["つｨ", ""], ["づｨ", ""],
	["つｪ", ""], ["づｪ", ""],
	["つｫ", ""], ["づｫ", ""],
	["ほｩ", "𛀹"],
	["は", ""],
	["ひ", ""],
	["ほｩ", ""],
	["へ", ""],
	["ほ", ""],
	["いｨ", "𛀆"],
	["いｪ", "𛀁"],
	["ら゚", ""],
	["り゚", ""],
	["る゚", ""],
	["れ゚", ""],
	["ろ゚", ""],
	["わ゙", ""], ["わ゚", ""],
	["ゐ゙", ""], ["ゐ゚", ""],
	["ゑ゙", ""], ["ゑ゚", ""],
	["を゙", ""], ["を゚", ""],
	["(ゔ|ゔ)ｩ?", ""], ["う゚ｩ", ""], ["うｩ", "𛄟"],
	["ふﾝ", ""],
	["ぶﾝ", ""],
	["ちｯ", ""],

	//拡張カタカナ
	["ア", ""],
	["イ", ""],
	["ウ", ""],
	["エ", ""],
	["オ", ""],
	["カ゚", ""],
	["キ゚", ""],
	["ク゚", ""],
	["ケ゚", ""],
	["コ゚", ""],
	["サ゚", ""], ["(ザ゚|サ)", ""],
	["スｨ", ""], ["ズｨ", ""], ["ス゚ｨ", ""], ["(ズ゚|ス)ｨ", ""],
	["ス゚", ""], ["(ズ゚|ス)", ""],
	["セ゚", ""], ["(ゼ゚|セ)", ""],
	["ソ゚", ""], ["(ゾ゚|ソ)", ""],
	["シｬ", ""], ["ジｬ", ""],
	["シｭ", ""], ["ジｭ", ""],
	["シｪ", ""], ["ジｪ", ""],
	["シｮ", ""], ["ジｮ", ""],
	["テｨ", ""], ["デｨ", ""],
	["トｩ", ""], ["ドｩ", ""],
	["チｬ", ""], ["ヂｬ", ""],
	["チｭ", ""], ["ヂｭ", ""],
	["チｪ", ""], ["ヂｪ", ""],
	["チｮ", ""], ["ヂｮ", ""],
	["ツｧ", ""], ["ヅｧ", ""],
	["ツｨ", ""], ["ヅｨ", ""],
	["ツｪ", ""], ["ヅｪ", ""],
	["ツｫ", ""], ["ヅｫ", ""],
	["ホｩ", ""],
	["ハ", ""],
	["ヒ", ""],
	["ホｩ", ""],
	["ヘ", ""],
	["ホ", ""],
	["イｨ", "𛄠"],
	["イｪ", "𛄡"],
	["ラ゚", ""],
	["リ゚", ""],
	["ル゚", ""],
	["レ゚", ""],
	["ロ゚", ""],
	["ワ゚", ""],
	["ヰ゚", ""],
	["ヱ゚", ""],
	["ヲ゚", ""],
	["ヴｩ", ""], ["ウ゚ｩ", ""], ["ウｩ", "𛄢"],
	["フﾝ", ""],
	["ブﾝ", ""],
	["チｯ", ""],

	//いｩ段の かナ文字
	["いｩ", ""],
	["きｩ", ""], ["ぎｩ", ""], ["ｩ", ""],
	["ｩ", ""], ["ｩ", ""], ["ｩ", ""], ["ｩ", ""],
	["しｩ", ""], ["じｩ", ""],
	["ｩ", ""], ["ｩ", ""],
	["ちｩ", ""], ["ぢｩ", ""],
	["ｩ", ""], ["ｩ", ""],
	["にｩ", ""],
	["ひｩ", ""], ["びｩ", ""], ["ぴｩ", ""],
	["みｩ", ""],
	["𛀆ｩ", ""],
	["りｩ", ""], ["ｩ", ""],
	["ゐｩ", ""], ["ｩ", ""], ["ｩ", ""],

	["イｩ", ""],
	["キｩ", ""], ["ギｩ", ""], ["ｩ", ""],
	["ｩ", ""], ["ｩ", ""], ["ｩ", ""], ["ｩ", ""],
	["シｩ", ""], ["ジｩ", ""],
	["ｩ", ""], ["ｩ", ""],
	["チｩ", ""], ["ヂｩ", ""],
	["ｩ", ""], ["ｩ", ""],
	["ニｩ", ""],
	["ヒｩ", ""], ["ビｩ", ""], ["ピｩ", ""],
	["ミｩ", ""],
	["𛄠ｩ", ""],
	["リｩ", ""], ["ｩ", ""],
	["ヰｩ", ""], ["ヸｩ", ""], ["ｩ", ""],

	["ぃｩ", ""],
	["ィｩ", ""],

	//変体仮名
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
	["が\\(家\\)", "𛀢゙"],
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
	["ご\\(期\\)", "𛀻゙"],
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
	["づ\\(徒\\)", ""],
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

	["エ\\(衣\\)", "𛀀"],
	["え\\(江\\)", "𛀁"],
	["あ\\(安\\)", "𛀂"],
	["あ\\(愛\\)", "𛀃"],
	["あ\\(阿\\)", "𛀄"],
	["あ\\(惡\\)", "𛀅"],
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
	["か\\(家\\)", "𛀢"],
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
	["こ\\(期\\)", "𛀻"],
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
	["つ\\(徒\\)", "𛁭"],
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
	["と\\(等\\)", "𛁽"],
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
	["に\\(而\\)", "𛂎"],
	["ぬ\\(努\\)", "𛂏"],
	["ぬ\\(奴\\)", "𛂐"],
	["ぬ\\(怒\\)", "𛂑"],
	["ね\\(年1\\)", "𛂒"],
	["ね\\(年2\\)", "𛂓"],
	["ね\\(年3\\)", "𛂔"],
	["ね\\(根\\)", "𛂕"],
	["ね\\(熱\\)", "𛂖"],
	["ね\\(禰\\)", "𛂗"],
	["ね\\(子\\)", "𛂘"],
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
	["め\\(馬\\)", "𛃖"],
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
	["や\\(夜\\)", "𛃢"],
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
	["ん\\(无1\\)", "𛄝"],
	["ん\\(无2\\)", "𛄞"],

	//合略仮名
	["ｺことｳ", "󷲰"],
	["ｺともｳ", ""], ["ｺトモｳ", "𪜈"],
	["ｺなりｳ", "𬼂"], ["ｺナリｳ", "𬻿"],
	["ｺヨリｳ", "󷲵"],

	["ｺさまｳ", ""],
	["ｺそうろうｳ", ""],
	["ｺかしこｳ", ""],
	["ｺまいらせそうろうｳ", ""],

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
	["真ｯ", ""],
	["偽ｯ", ""],
	["無ｯ", ""],

	//色線文字
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
	["コｯ", "⿼"],
	["Jｯ", "⿽"],
	["↔ｯ", "⿾"],
	["↩ｯ", "⿿"],
	["−ｯ", "㇯"],
	["⤵ｯ", ""],
	["⤴ｯ", ""],
	
	//部首
	["月🌃ｯ", "⽉"],
	["月🍖ｯ", "⺼"],
	["月⛵️ｯ", "􁙷"],
	["月ｯ", "月"],
	["二ｯ", "⼆"],
	["三ｯ", ""],

	//漢字
	["⿱苦⿲⿰⿹耳舌鼻⿱⿱平⿰惡意⿱眼⿰淨染⿰⿱女子身", "󸀑"],

	//エスケープ終了
	["ｴ(.)͏", "ｴ$1"]
];

var i;
var text = document.getElementById("text");
var render = document.getElementById("render");
var count = document.getElementById("count");
var message = document.getElementById("message");
var s;
var old_s;
var sh = text.scrollHeight - 96;

(function() {
	var url = new URL(window.location.href);
	var str = url.searchParams.get("text");
	text.value = str;
	inputText();
	text.addEventListener("input", inputText);
})();

function inputText() {
	message.textContent = "";
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

	text.style.height = "9.6rem";
	var height = String(Math.max(96, text.scrollHeight - sh));
	text.style.height = `${height.slice(0, -1)}.${height.slice(-1)}rem`;

	var c = 0;
	for (i = 0; i < s.length; i++) {
		var p = s.codePointAt(i);
		c += p > 0xFF ? 2 : 1;
		if (p > 0xFFFF) i++;
	}
	count.textContent = `${c >> 1}/140`;
	if (c > 280)	count.classList.add("error");
	else			count.classList.remove("error");

	old_s = s;
	var u;
	while ((u = /ﾕ([\dA-Fa-f]{4})/.exec(s)) !== null) {
		s = s.replace(u[0], String.fromCodePoint(parseInt(u[1], 16)));
	}
	while ((u = /ﾕs([\dA-Fa-f]{5})/.exec(s)) !== null) {
		s = s.replace(u[0], String.fromCodePoint(parseInt(u[1], 16)));
	}
	while ((u = /ﾕg([\dA-Fa-f]{4})/.exec(s)) !== null) {
		s = s.replace(u[0], String.fromCodePoint(parseInt(`10${u[1]}`, 16)));
	}
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
}

function textProcess(d) {
	if (s[i] == "ｴ") {
		i++;
		return document.createTextNode(s[i]);
	}

	if (s.slice(i, i + 2) == "ｲ{") {
		i += 2;
		var span = document.createElement("span");
		var heart = s.codePointAt(i);
		if (heart == 0x2764) span.classList.add("red");
		else if (heart == 0x1F9E1) span.classList.add("orange");
		else if (heart == 0x1F49B) span.classList.add("yellow");
		else if (heart == 0x1F350) span.classList.add("lime");
		else if (heart == 0x1F49A) span.classList.add(document.form1.green.value == "green" ? "green" : "lime");
		else if (heart == 0x1FA75) span.classList.add(document.form1.lightblue.value == "aqua" ? "aqua" : "skyblue");
		else if (heart == 0x1F499) span.classList.add("blue");
		else if (heart == 0x1F49C) span.classList.add("purple");
		else if (heart == 0x1FA77) span.classList.add(document.form1.pink.value == "fuchsia" ? "fuchsia" : "pink");
		else if (heart == 0x1F90E) span.classList.add("brown");
		else if (heart == 0x1F5A4) span.classList.add("black");
		else if (heart == 0x1FA76) span.classList.add("grey");
		else if (heart == 0x1F90D) span.classList.add("white");
		else if (heart == 0x1F4C0) span.classList.add("gold");
		else if (heart == 0x1F4BF) span.classList.add("silver");
		else {
			while (s[i] != "|") {
				var e = textProcess(d);
				span.appendChild(e);
				i++;
				if (i >= s.length) break;
			}
			i++;
			heart = s.codePointAt(i);
			if (heart == 0x2764) span.classList.add("red");
			else if (heart == 0x1F9E1) span.classList.add("orange");
			else if (heart == 0x1F49B) span.classList.add("yellow");
			else if (heart == 0x1F350) span.classList.add("lime");
			else if (heart == 0x1F49A) span.classList.add(document.form1.green.value == "green" ? "green" : "lime");
			else if (heart == 0x1FA75) span.classList.add(document.form1.lightblue.value == "aqua" ? "aqua" : "skyblue");
			else if (heart == 0x1F499) span.classList.add("blue");
			else if (heart == 0x1F49C) span.classList.add("purple");
			else if (heart == 0x1FA77) span.classList.add(document.form1.pink.value == "fuchsia" ? "fuchsia" : "pink");
			else if (heart == 0x1F90E) span.classList.add("brown");
			else if (heart == 0x1F5A4) span.classList.add("black");
			else if (heart == 0x1FA76) span.classList.add("grey");
			else if (heart == 0x1F90D) span.classList.add("white");
			else if (heart == 0x1F4C0) span.classList.add("gold");
			else if (heart == 0x1F4BF) span.classList.add("silver");
			i += heart > 0xFFFF ? 2 : 1;
			return span;
		}

		i += heart > 0xFFFF ? 3 : 2;
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
		rp1.textContent = "（";
		rt.before(rp1);
		var rp2 = document.createElement("rp");
		rp2.textContent = "）";
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

	if ((s.slice(i, i + 4) == "&dw-" && document.form1.dwpi.checked) ||
		s.slice(i, i + 4) == "&ni-" || s.slice(i, i + 4) == "&mk-" ||
		s.slice(i, i + 4) == "&jg-" || s.slice(i, i + 4) == "&j2-" ||
		s.slice(i, i + 4) == "&j3-" || s.slice(i, i + 4) == "&sc-" ||
		s.slice(i, i + 4) == "&tc-" || s.slice(i, i + 4) == "&hk-") {
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
		!(/[⿰⿱⿲⿳⿴⿵⿶⿷⿸⿹⿺⿻⿼⿽⿾⿿㇯⚫⚪⬛⬜]/.test(s[i]) ||
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
	else if (s[i] >= "⿲" && s[i] <= "⿳") {
		if (s[i] == "⿲")		e.classList.add("part-tatemiqcu");
		else if (s[i] == "⿳")	e.classList.add("part-yokomiqcu");

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
	else if (s[i] >= "⿰" && s[i] <= "⿱" ||
		s[i] >= "⿴" && s[i] <= "⿽" ||
		s[i] == "㇯") {
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
	else if (s[i] >= "⿾" && s[i] <= "⿿" || s[i] >= "" && s[i] <= "") {
		if (s[i] == "⿾") e.classList.add("part-kagamimojxi");
		else if (s[i] == "⿿") e.classList.add("part-sakasamojxi");
		else if (s[i] == "") e.classList.add("part-migidaosxi");
		else if (s[i] == "") e.classList.add("part-hidaridaosxi");

		var e1 = document.createElement("div");
		e1.classList.add("part-inner");
		i++;
		e1.appendChild(textProcess(d + 1));

		e.appendChild(e1);
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
			else if (c == 0x1F7E2 || c == 0x1F7E9)	e1.classList.add(document.form1.green.value == "green" ? "bg-green" : "bg-lime");
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

	inputText();
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

	inputText();
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
		var kanjxi = prompt("漢字");
		if (kanjxi == null || kanjxi == "") return;
		var ruby = prompt("ルビ（なければ 空欄）");
		if (ruby == null) return;
		var boucxuu = prompt("傍註（なければ 空欄）");
		if (boucxuu == null) return;
		if (boucxuu != "") boucxuu = `|${boucxuu}`;

		insert(`ﾙ{${ruby}|${kanjxi}${boucxuu}}`);
	}

	else {
		var ruby = prompt("ルビ（なければ 空欄）");
		if (ruby == null) return;
		var boucxuu = prompt("傍註（なければ 空欄）");
		if (boucxuu == null) return;
		if (boucxuu != "") boucxuu = `|${boucxuu}`;

		insert2(`ﾙ{${ruby}|`, `${boucxuu}}`);
	}
}

function changeTheme(theme) {
	document.body.className = "";
	if (theme == 1)			document.body.classList.add("beige");
	else if (theme == 2)	document.body.classList.add("dark");
}

function tweetButton() {
	window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(old_s)}`);
}
function misskeyButton() {
	window.open(`https://misskey-hub.net/share?text=${encodeURIComponent(old_s)}&manualInstance=misskey.io`);
}
function messageActive() {
	message.textContent = "コピーしました！";
}
function copyToClipboard() {
	if (navigator.clipboard) {
		return navigator.clipboard.writeText(old_s).then(function() {
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
		e_error.textContent += "行は 整数を 指定してください。";
		error = true;
	}
	rows = Number(e_rows.value);
	if (rows & 1) {
		e_error.textContent += "行は 偶数を 指定してください。";
		error = true;
	}
	else if (rows < 2 || rows > 32) {
		e_error.textContent += "行は 2〰︎32を 指定してください。";
		error = true;
	}

	if (!(/^\d+$/.test(e_cols.value))) {
		e_error.textContent += "列は 整数を 指定してください。";
		error = true;
	}
	cols = Number(e_cols.value);
	if (cols & 1) {
		e_error.textContent += "列は 偶数を 指定してください。";
		error = true;
	}
	else if (cols < 2 || cols > 32) {
		e_error.textContent += "列は 2〰︎32を 指定してください。";
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
	insert(s.replace(/ +$/gm, ""));
}

(function() {
	makeBitmap();
})();
