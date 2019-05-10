const data = [
  {
    "paragraph": "位卑未敢忘忧国，事定犹须待阖棺。",
    "author": "宋·陆游",
    "title": "病起书怀"
  },
  {
    "paragraph": "晴川历历汉阳树，芳草萋萋鹦鹉洲。",
    "author": "唐·崔颢",
    "title": "黄鹤楼"
  },
  {
    "paragraph": "众口铄金，积毁销骨。",
    "author": "史记",
    "title": "张仪列传"
  },
  {
    "paragraph": "潮平两岸阔，风正一帆悬。",
    "author": "唐·王湾",
    "title": "次北固山下"
  },
  {
    "paragraph": "春心莫共花争发，一寸相思一寸灰。",
    "author": "唐·李商隐",
    "title": null
  },
  {
    "paragraph": "采得百花成蜜后，为谁辛苦为谁甜。",
    "author": "唐·罗隐",
    "title": "蜂"
  },
  {
    "paragraph": "念天地之悠悠，独怆然而涕下。",
    "author": "唐·陈子昂",
    "title": "登幽州台歌"
  },
  {
    "paragraph": "不积跬步，无以至千里。",
    "author": "",
    "title": "荀子·劝学"
  },
  {
    "paragraph": "问姓惊初见，称名忆旧容。",
    "author": "唐·李益",
    "title": "喜见外弟又言别"
  },
  {
    "paragraph": "天接云涛连晓雾，星河欲转千帆舞。",
    "author": "宋·李清照",
    "title": "渔家傲"
  },
  {
    "paragraph": "君子之交淡如水，小人之交甘若醴。",
    "author": "",
    "title": "庄子"
  },
  {
    "paragraph": "相看两不厌，只有敬亭山。",
    "author": "唐·李白",
    "title": "独坐敬亭山"
  },
  {
    "paragraph": "僵卧孤村不自哀，尚思为国戍轮台。",
    "author": "宋·陆游",
    "title": "十一月四日风雨大作"
  },
  {
    "paragraph": "黯然销魂者，惟别而已矣。",
    "author": "南朝·江淹",
    "title": "别赋"
  },
  {
    "paragraph": "本是同根生，相煎何太急。",
    "author": "三国·曹植",
    "title": "七步诗"
  },
  {
    "paragraph": "穷则独善其身，达则兼济天下。",
    "author": "孟子",
    "title": "尽心上"
  },
  {
    "paragraph": "高岸为谷，深谷为陵。",
    "author": "",
    "title": "诗经·小雅"
  },
  {
    "paragraph": "万事俱备，只欠东风。",
    "author": "元未明初·罗贯中",
    "title": "三国演义"
  },
  {
    "paragraph": "知之者不如好之者，好之者不如乐之者。",
    "author": "",
    "title": "论语·雍也"
  },
  {
    "paragraph": "大鹏一日同风起，扶摇直上九万里。",
    "author": "唐·李白",
    "title": "上李邕"
  },
  {
    "paragraph": "水晶帘动微风起，满架蔷薇一院香。",
    "author": "唐·高骈",
    "title": "山亭夏日"
  },
  {
    "paragraph": "忽如一夜春风来，千树万树梨花开。",
    "author": "唐·岑参",
    "title": "白雪歌送武判官归京"
  },
  {
    "paragraph": "蝉噪林逾静，鸟鸣山更幽。",
    "author": "南朝·王籍",
    "title": "入若耶溪"
  },
  {
    "paragraph": "柴门闻狗吠，风雪夜归人。",
    "author": "唐·刘长卿",
    "title": "逢雪宿芙蓉山主人"
  },
  {
    "paragraph": "兼听则明，偏信则暗。",
    "author": "宋·司马光",
    "title": "资治通鉴"
  },
  {
    "paragraph": "路遥知马力，日久见人心。",
    "author": "元",
    "title": "无名氏"
  },
  {
    "paragraph": "十年磨一剑，霜刃未曾试。",
    "author": "唐·贾岛",
    "title": "剑客"
  },
  {
    "paragraph": "仁者见仁，智者见智。",
    "author": "易经",
    "title": "系辞上"
  },
  {
    "paragraph": "二十四桥仍在，波心荡，冷月无声。",
    "author": "宋·姜夔",
    "title": "扬州慢"
  },
  {
    "paragraph": "投我以桃，报之以李。",
    "author": "<诗经·大雅·抑",
    "title": null
  },
  {
    "paragraph": "举杯邀明月，对影成三人。",
    "author": "唐·李白",
    "title": "月下独酌"
  },
  {
    "paragraph": "尺有所短，寸有所长。",
    "author": "楚辞",
    "title": "卜居"
  },
  {
    "paragraph": "千里莺啼绿映红，水村山郭酒旗风。",
    "author": "唐·杜牧",
    "title": "江南春绝句"
  },
  {
    "paragraph": "举世皆浊我独清，众人皆醉我独醒。",
    "author": "屈原",
    "title": "渔父"
  },
  {
    "paragraph": "春风知别苦，不遣柳条青。",
    "author": "唐·李白",
    "title": "劳劳亭"
  },
  {
    "paragraph": "我劝天公重抖擞，不拘一格降人才。",
    "author": "清·龚自珍",
    "title": "己亥杂诗"
  },
  {
    "paragraph": "欲渡黄河冰塞川，将登太行雪满山。",
    "author": "唐·李白",
    "title": "行路难"
  },
  {
    "paragraph": "吾生也有涯，而知也无涯。",
    "author": "庄子",
    "title": "养生主"
  },
  {
    "paragraph": "人固有一死，或重于泰山，或轻于鸿毛。",
    "author": "",
    "title": "史记·报任少卿书"
  },
  {
    "paragraph": "读书百遍，其义自见。",
    "author": "西晋·陈寿",
    "title": "三国志"
  },
  {
    "paragraph": "山重水复疑无路，柳暗花明又一村。",
    "author": "宋·陆游",
    "title": "游山西村"
  },
  {
    "paragraph": "相顾无相识，长歌怀采薇。",
    "author": "唐·王绩",
    "title": "野望"
  },
  {
    "paragraph": "一骑红尘妃子笑，无人知是荔枝来。",
    "author": "唐·杜牧",
    "title": "过华清宫绝句"
  },
  {
    "paragraph": "多情只有春庭月，犹为离人照落花。",
    "author": "唐·张泌",
    "title": "寄人"
  },
  {
    "paragraph": "鞠躬尽瘁，死而后已。",
    "author": "三国·诸葛亮",
    "title": "后出师表"
  },
  {
    "paragraph": "生当作人杰，死亦为鬼雄。",
    "author": "宋·李清照",
    "title": "夏日绝句"
  },
  {
    "paragraph": "天街小雨润如酥，草色遥看近却无。",
    "author": "唐·韩愈",
    "title": "初春小雨"
  },
  {
    "paragraph": "云霞出海曙，梅柳渡江春。",
    "author": "唐·杜审言",
    "title": "和晋陵陆丞早春游望"
  },
  {
    "paragraph": "天生我材必有用，千金散尽还复来。",
    "author": "唐·李白",
    "title": "将进酒"
  },
  {
    "paragraph": "十年一觉扬州梦，赢得青楼薄幸名。",
    "author": "唐·杜牧",
    "title": "遣怀"
  },
  {
    "paragraph": "马上相逢无纸笔，凭君传语报平安。",
    "author": "唐·岑参",
    "title": "逢入京使"
  },
  {
    "paragraph": "失之东隅，收之桑榆。",
    "author": "",
    "title": "后汉书冯异传"
  },
  {
    "paragraph": "山高月小，水落石出。",
    "author": "宋·苏轼",
    "title": "后赤壁赋"
  },
  {
    "paragraph": "得道多助，失道寡助。",
    "author": "",
    "title": "孟子·公孙丑"
  },
  {
    "paragraph": "衣带渐宽终不悔，为伊消得人憔悴。",
    "author": "宋·柳永",
    "title": "凤栖梧"
  },
  {
    "paragraph": "王师北定中原日，家祭无忘告乃翁。",
    "author": "宋·陆游",
    "title": "示儿"
  },
  {
    "paragraph": "枯藤老树昏鸦，小桥流水人家，古道西风瘦马。夕阳西下，断肠人在天涯。",
    "author": "元·马致远",
    "title": "天净沙·秋思"
  },
  {
    "paragraph": "一张一弛，文武之道。",
    "author": "",
    "title": "礼记·杂记"
  },
  {
    "paragraph": "寻寻觅觅，冷冷清清，凄凄惨惨戚戚。",
    "author": "宋·李清照",
    "title": "声声慢"
  },
  {
    "paragraph": "人归落雁后，思发在花前。",
    "author": "隋·薛道衡",
    "title": "人日思归"
  },
  {
    "paragraph": "他山之石，可以攻玉。",
    "author": "诗经·小雅",
    "title": "鹤鸣"
  },
  {
    "paragraph": "不塞不流，不止不行。",
    "author": "唐·韩愈",
    "title": "原道"
  },
  {
    "paragraph": "历鉴前朝国与家，成由勤俭败由奢。",
    "author": "唐·李商隐",
    "title": null
  },
  {
    "paragraph": "拜迎长官心欲碎，鞭挞黎庶令人悲。",
    "author": "唐·高适",
    "title": "封丘县"
  },
  {
    "paragraph": "博观而约取，厚积而薄发。",
    "author": "宋·苏轼",
    "title": null
  },
  {
    "paragraph": "非淡泊无以明志，非宁静无以致远。",
    "author": "三国·诸葛亮",
    "title": "诫子书"
  },
  {
    "paragraph": "绳锯木断，水滴石穿。",
    "author": "汉书",
    "title": "枚乘传"
  },
  {
    "paragraph": "烟笼寒水月笼沙，夜泊秦淮近酒家。",
    "author": "唐·杜牧",
    "title": "泊秦淮"
  },
  {
    "paragraph": "近乡情更怯，不敢问来人。",
    "author": "唐·宋之问",
    "title": "渡汉江"
  },
  {
    "paragraph": "女娲炼石补天处，石破天惊逗秋雨。",
    "author": "唐·李贺",
    "title": "李凭箜篌引"
  },
  {
    "paragraph": "年年岁岁花相似，岁岁年年人不同。",
    "author": "唐·刘希夷",
    "title": null
  },
  {
    "paragraph": "其身正，不令而行；其身不正，虽令不从。",
    "author": "",
    "title": "论语·子路"
  },
  {
    "paragraph": "手如柔荑，肤如凝脂。",
    "author": "",
    "title": "诗经·卫风·硕人"
  },
  {
    "paragraph": "人面不知何处去，桃花依旧笑春风。",
    "author": "唐·崔护",
    "title": "题都城南庄"
  },
  {
    "paragraph": "曲径通幽处，禅房花木深。",
    "author": "唐·常建",
    "title": "题破山寺后禅院"
  },
  {
    "paragraph": "人有悲欢离合，月有阴晴圆缺。",
    "author": "宋·苏轼",
    "title": "水调歌头"
  },
  {
    "paragraph": "花自飘零水自流，一种相思，两处闲愁。",
    "author": "宋·李清照·如梦令",
    "title": null
  },
  {
    "paragraph": "他人有心，予忖度之。",
    "author": "诗经",
    "title": "小雅"
  },
  {
    "paragraph": "两岸猿声啼不住，轻舟已过万重山。",
    "author": "唐·李白",
    "title": "早发白帝城"
  },
  {
    "paragraph": "纸上得来终觉浅，绝知此事要躬行。",
    "author": "宋·陆游",
    "title": "冬夜读书示子聿"
  },
  {
    "paragraph": "其曲弥高，其和弥寡。",
    "author": "宋玉",
    "title": "对楚王问"
  },
  {
    "paragraph": "若待上林花似锦，出门俱是看花人。",
    "author": "唐·杨巨源",
    "title": "城东早春"
  },
  {
    "paragraph": "知之为知之，不知为不知，是知也。",
    "author": "",
    "title": "论语·为政"
  },
  {
    "paragraph": "黑发不知勤学早，白首方悔读书迟。",
    "author": "唐·颜真卿",
    "title": null
  },
  {
    "paragraph": "乱花渐欲迷人眼，浅草才能没马蹄。",
    "author": "唐·白居易",
    "title": "钱塘湖春行"
  },
  {
    "paragraph": "多情自古伤离别，更那堪冷落清秋节。",
    "author": "宋·柳永",
    "title": "雨霖铃"
  },
  {
    "paragraph": "试玉要烧三日满，辨材须待七年期。",
    "author": "唐·白居易",
    "title": "放言"
  },
  {
    "paragraph": "春潮带雨晚来急，野渡无人舟自横。",
    "author": "唐·韦应物",
    "title": "滁州西涧"
  },
  {
    "paragraph": "富贵不能淫，贫贱不能移，威武不能屈。",
    "author": "孟子",
    "title": "滕文公"
  },
  {
    "paragraph": "君不见黄河之水天上来，奔流到海不复回。",
    "author": "唐·李白",
    "title": "将进酒"
  },
  {
    "paragraph": "巧笑倩兮，美目盼兮。",
    "author": "诗经·卫风",
    "title": "硕人"
  },
  {
    "paragraph": "鉴前世之兴衰，考当今之得失。",
    "author": "宋·司马光",
    "title": "资治通鉴"
  },
  {
    "paragraph": "雪消门外千山绿，花发江边二月晴。",
    "author": "宋",
    "title": "欧阳修"
  },
  {
    "paragraph": "池塘生春草，园柳变鸣禽。",
    "author": "南朝·谢灵运",
    "title": "登池上楼"
  },
  {
    "paragraph": "勿以恶小而为之，勿以善小而不为。",
    "author": "",
    "title": "三国·刘备"
  },
  {
    "paragraph": "只要功夫深，铁杵磨成针。",
    "author": "元",
    "title": "虞韶"
  },
  {
    "paragraph": "字字看来都是血，十年辛苦不寻常。",
    "author": "清·曹雪芹",
    "title": "红楼梦"
  },
  {
    "paragraph": "山不在高，有仙则名；水不在深，有龙则灵。",
    "author": "唐·刘禹锡",
    "title": "陋室铭"
  },
  {
    "paragraph": "使老有所终，壮有所用，幼有所长，鳏寡孤独废疾者皆有所养。",
    "author": "",
    "title": "礼记·礼运"
  },
  {
    "paragraph": "师者，所以传道受业解惑也。",
    "author": "唐·韩愈",
    "title": "师说"
  },
  {
    "paragraph": "民为贵，社稷次之，君为轻。",
    "author": "孟子",
    "title": "尽心上"
  },
  {
    "paragraph": "停车坐爱枫林晚，霜叶红于二月花。",
    "author": "唐·杜牧",
    "title": "山行"
  },
  {
    "paragraph": "有情芍药含春泪，无力蔷薇卧晓枝。",
    "author": "宋·秦观",
    "title": "春日"
  },
  {
    "paragraph": "物是人非事事休，欲语泪先流。",
    "author": "宋·李清照",
    "title": "五陵春"
  },
  {
    "paragraph": "金玉其外，败絮其中。",
    "author": "明·刘基",
    "title": "卖柑者言"
  },
  {
    "paragraph": "大道之行，天下为公。",
    "author": "",
    "title": "礼记·礼运"
  },
  {
    "paragraph": "两岸青山相对出，孤帆一片日边来。",
    "author": "唐·李白",
    "title": "望天门山"
  },
  {
    "paragraph": "但愿人长久，千里共婵娟。",
    "author": "宋·苏轼",
    "title": "水调歌头"
  },
  {
    "paragraph": "螳螂捕蝉，黄雀在后。",
    "author": "",
    "title": "吴越春秋"
  },
  {
    "paragraph": "春城无处不飞花，寒食东风御柳斜。",
    "author": "唐·韩翃",
    "title": "寒食"
  },
  {
    "paragraph": "有志者，事竟成。",
    "author": "后汉书",
    "title": "耿弇传"
  },
  {
    "paragraph": "青女素娥俱耐冷，月中霜里斗婵娟。",
    "author": "唐·李商隐",
    "title": "霜月"
  },
  {
    "paragraph": "良辰美景奈何天，赏心乐事谁家院。",
    "author": "明·汤显祖",
    "title": "牡丹亭"
  },
  {
    "paragraph": "今夜偏知春气暖，虫声新透绿窗纱。",
    "author": "唐·刘方平",
    "title": "月夜"
  },
  {
    "paragraph": "相见时难别亦难，东风无力百花残。",
    "author": "唐·李商隐",
    "title": "无题"
  },
  {
    "paragraph": "燕山雪花大如席，片片吹落轩辕台。",
    "author": "唐·李白",
    "title": "北风行"
  },
  {
    "paragraph": "一叶浮萍归大海，人生何处不相逢。",
    "author": "明·吴承恩",
    "title": "西游记"
  },
  {
    "paragraph": "竹外桃花三两枝，春江水暖鸭先知。",
    "author": "宋·苏轼",
    "title": "惠崇春江晚景"
  },
  {
    "paragraph": "天阶夜色凉如水，卧看牵牛织女星。",
    "author": "唐·杜牧",
    "title": "秋夕"
  },
  {
    "paragraph": "桑柘影斜春社散，家家扶得醉人归。",
    "author": "唐·王驾",
    "title": "社日"
  },
  {
    "paragraph": "小楼一夜听风雨，深巷明朝卖杏花。",
    "author": "宋·陆游",
    "title": "临安春雨初霁"
  },
  {
    "paragraph": "予独爱莲之出污泥而不染，濯清涟而不妖。",
    "author": "宋·周敦颐",
    "title": "爱莲说"
  },
  {
    "paragraph": "无可奈何花落去，似曾相识燕归来。",
    "author": "宋·晏殊",
    "title": "浣溪沙"
  },
  {
    "paragraph": "恸哭六军俱缟素，冲冠一怒为红颜。",
    "author": "清·吴伟业",
    "title": "圆圆曲"
  },
  {
    "paragraph": "水至清则无鱼，人至察则无徒。",
    "author": "汉书",
    "title": "东方朔传"
  },
  {
    "paragraph": "此地一为别，孤蓬万里征。",
    "author": "唐·李白",
    "title": "送友人"
  },
  {
    "paragraph": "非学无以广才，非志无以成学。",
    "author": "三国·诸葛亮",
    "title": "诫子书"
  },
  {
    "paragraph": "春江潮水连海平，海上明月共潮生。",
    "author": "唐·张若虚",
    "title": "春江花月夜"
  },
  {
    "paragraph": "老吾老，以及人之老；幼吾幼，以及人之幼。",
    "author": "孟子",
    "title": "梁惠王下"
  },
  {
    "paragraph": "兴酣落笔摇五岳，诗成笑傲凌沧海。",
    "author": "唐·李白",
    "title": "江上吟"
  },
  {
    "paragraph": "今夜偏知春意暖，虫声新透绿窗纱。",
    "author": "唐·刘方平",
    "title": "夜月"
  },
  {
    "paragraph": "一日不见，如三秋兮。",
    "author": "",
    "title": "诗经·王风采葛"
  },
  {
    "paragraph": "纵使晴明无雨色，入云深处亦沾衣。",
    "author": "唐·张旭",
    "title": "山中留客"
  },
  {
    "paragraph": "智者千虑，必有一失；愚者千虑，必有一得。",
    "author": "史记",
    "title": "淮阴侯列传"
  },
  {
    "paragraph": "月上柳梢头，人约黄昏后。",
    "author": "宋·朱淑真",
    "title": "生查子"
  },
  {
    "paragraph": "如切如磋，如琢如磨。",
    "author": "",
    "title": "诗经·卫风·淇奥"
  },
  {
    "paragraph": "停杯投箸不能食，拔剑四顾心茫然。",
    "author": "唐·李白",
    "title": "行路难"
  },
  {
    "paragraph": "管中窥豹，时见一斑。",
    "author": "晋书",
    "title": "王献之传"
  },
  {
    "paragraph": "借问酒家何处有，牧童遥指杏花村。",
    "author": "唐·杜牧",
    "title": "清明"
  },
  {
    "paragraph": "物以类聚，人以群分。",
    "author": "易经",
    "title": "系辞上"
  },
  {
    "paragraph": "人逢喜事精神爽，月到中秋分外明。",
    "author": "明·冯梦龙",
    "title": "古今小说"
  },
  {
    "paragraph": "此夜曲中闻折柳，何人不起故园情。",
    "author": "唐·李白",
    "title": "春夜洛城闻笛"
  },
  {
    "paragraph": "受任于败军之际，奉命于危难之间。",
    "author": "三国·诸葛亮",
    "title": "出师表"
  },
  {
    "paragraph": "独学而无友，则孤陋而寡闻。",
    "author": "",
    "title": "礼记·杂记"
  },
  {
    "paragraph": "晓来谁染霜林醉？总是离人泪。",
    "author": "元·王实甫",
    "title": "西厢记"
  },
  {
    "paragraph": "生于忧患，死于安乐。",
    "author": "孟子",
    "title": "告子下"
  },
  {
    "paragraph": "祸患常积于忽微，而智勇多困于所溺。",
    "author": "宋·欧阳修",
    "title": "伶官传序"
  },
  {
    "paragraph": "日出江花红胜火，春来江水绿如蓝。",
    "author": "唐·白居易",
    "title": "忆江南"
  },
  {
    "paragraph": "昆山玉碎凤凰叫，芙蓉泣露香兰笑。",
    "author": "唐·李贺",
    "title": "李凭箜篌引"
  },
  {
    "paragraph": "运筹帷幄之中，决胜千里之外。",
    "author": "史记",
    "title": "高祖本纪"
  },
  {
    "paragraph": "青青子衿，悠悠我心。",
    "author": "诗经·郑风",
    "title": "子衿"
  },
  {
    "paragraph": "精诚所至，金石为开。",
    "author": "后汉书",
    "title": "广陵思王荆传"
  },
  {
    "paragraph": "燕雀安知鸿鹄之志哉。",
    "author": "史记",
    "title": "陈涉世家"
  },
  {
    "paragraph": "仰天大笑出门去，我辈岂是蓬蒿人。",
    "author": "唐·李白",
    "title": "南陵别儿童入京"
  },
  {
    "paragraph": "谈笑有鸿儒，往来无白丁。",
    "author": "唐·刘禹锡",
    "title": "陋室铭"
  },
  {
    "paragraph": "关关雎鸠，在河之洲。窈窕淑女，君子好逑。",
    "author": "",
    "title": "诗经·周南关雎"
  },
  {
    "paragraph": "余将董道而不豫兮，固将重昏而终身。",
    "author": "屈原",
    "title": "涉江"
  },
  {
    "paragraph": "抽刀断水水更流，举杯消愁愁更愁。",
    "author": "唐·李白",
    "title": "宣州谢朓饯别校书叔云"
  },
  {
    "paragraph": "苟余心之端直兮，虽僻远其何伤？",
    "author": "屈原",
    "title": "涉江"
  },
  {
    "paragraph": "由俭入奢易，由奢入俭难。",
    "author": "宋·司马光",
    "title": "训俭示康"
  },
  {
    "paragraph": "失之毫厘，谬以千里。",
    "author": "",
    "title": "史记·太史公自序"
  },
  {
    "paragraph": "曾经沧海难为水，除却巫山不是云。",
    "author": "唐·元稹",
    "title": "离思"
  },
  {
    "paragraph": "亦余心之所善兮，虽九死其犹未悔。",
    "author": "屈原",
    "title": "离骚"
  },
  {
    "paragraph": "几处早莺争暖树，谁家新燕啄春泥。",
    "author": "唐·白居易",
    "title": "钱塘湖春行"
  },
  {
    "paragraph": "不识庐山真面目，只缘身在此山中。",
    "author": "宋·苏轼",
    "title": "题西林壁"
  },
  {
    "paragraph": "文章本天成，妙手偶得之。",
    "author": "宋·陆游",
    "title": "文章"
  },
  {
    "paragraph": "吾不能变心以从俗兮，故将愁苦而终穷。",
    "author": "屈原",
    "title": "涉江"
  },
  {
    "paragraph": "天长地久有时尽，此恨绵绵无绝期。",
    "author": "唐·白居易",
    "title": "长恨歌"
  },
  {
    "paragraph": "着意栽花花不发，无意插柳柳成阴。",
    "author": "元·关汉卿",
    "title": null
  },
  {
    "paragraph": "醉卧沙场君莫笑，古来征战几人回！",
    "author": "唐·王翰",
    "title": "凉州词"
  },
  {
    "paragraph": "花径不曾缘客扫，蓬门今始为君开。",
    "author": "唐·杜甫",
    "title": "客至"
  },
  {
    "paragraph": "国以民为本，民以食为天。",
    "author": "西晋·陈寿",
    "title": "三国志"
  },
  {
    "paragraph": "落霞与孤鹜齐飞，秋水共长天一色。",
    "author": "唐·王勃",
    "title": "滕王阁序"
  },
  {
    "paragraph": "疾风知劲草，板荡识诚臣。",
    "author": "唐太宗",
    "title": "赠萧禹"
  },
  {
    "paragraph": "知我者，谓我心忧，不知我者，谓我何求。",
    "author": "",
    "title": "诗经·王风·黍离"
  },
  {
    "paragraph": "三十功名尘与土，八千里路云和月。",
    "author": "宋·岳飞",
    "title": "满江红"
  },
  {
    "paragraph": "删繁就简三秋树，领异标新二月花。",
    "author": "清",
    "title": "郑板桥"
  },
  {
    "paragraph": "问君能有几多愁，恰似一江春水向东流。",
    "author": "五代·李煜",
    "title": "虞美人"
  },
  {
    "paragraph": "山随平野尽，江入大荒流。",
    "author": "唐·李白",
    "title": "渡荆门送别"
  },
  {
    "paragraph": "秋风吹不尽，总是玉关情。",
    "author": "唐·李白",
    "title": "子夜吴歌"
  },
  {
    "paragraph": "锲而不舍，金石可镂。",
    "author": "",
    "title": "荀子·劝学"
  },
  {
    "paragraph": "莫道不销魂，帘卷西风，人比黄花瘦。",
    "author": "宋·李清照",
    "title": "醉花阴"
  },
  {
    "paragraph": "少小离家老大回，乡音未改鬓毛衰。",
    "author": "唐·贺知章",
    "title": "回乡偶书"
  },
  {
    "paragraph": "大江东去，浪淘尽，千古风流人物。",
    "author": "宋·苏轼",
    "title": "念奴娇·赤壁之战"
  },
  {
    "paragraph": "登山则情满于山，观海则意溢于海。",
    "author": "南朝·刘勰",
    "title": "文心雕龙"
  },
  {
    "paragraph": "今宵酒醒何处，杨柳岸晓风残月。",
    "author": "宋·柳永",
    "title": "雨霖铃"
  },
  {
    "paragraph": "有缘千里来相会，无缘对面不相逢。",
    "author": "元未明初·施耐庵",
    "title": "水浒传"
  },
  {
    "paragraph": "两情若是久长时，又岂在朝朝暮暮。",
    "author": "宋·秦观",
    "title": "鹊桥仙"
  },
  {
    "paragraph": "少壮不努力，老大徒伤悲。",
    "author": "汉乐府",
    "title": "长歌行"
  },
  {
    "paragraph": "青，取之于蓝，而青于蓝。",
    "author": "荀子",
    "title": "劝学"
  },
  {
    "paragraph": "今夜月明人尽望，不知愁思落谁家。",
    "author": "唐·王建",
    "title": "十五夜望月"
  },
  {
    "paragraph": "夜阑卧听风吹雨，铁马冰河入梦来。",
    "author": "宋·陆游",
    "title": "十一月四日风雨大作"
  },
  {
    "paragraph": "同声相应，同气相求。",
    "author": "易经",
    "title": "乾"
  },
  {
    "paragraph": "忠言逆耳利于行，良药苦口利于病。",
    "author": "史记",
    "title": "留侯世家"
  },
  {
    "paragraph": "所谓伊人，在水一方。",
    "author": "诗经·秦风",
    "title": "蒹葭"
  },
  {
    "paragraph": "疏影横斜水清浅，暗香浮动月黄昏。",
    "author": "宋·林逋",
    "title": "山园小梅"
  },
  {
    "paragraph": "文章合为时而着，歌诗合为事而作。",
    "author": "唐·白居易",
    "title": "与元九书"
  },
  {
    "paragraph": "海阔凭鱼跃，天高任鸟飞。",
    "author": "唐·僧",
    "title": "云览"
  },
  {
    "paragraph": "山高自有客行路，水深自有渡船人。",
    "author": "明·吴承恩",
    "title": "西游记"
  },
  {
    "paragraph": "庄生晓梦迷蝴蝶，望帝春心托杜鹃。",
    "author": "唐·李商隐",
    "title": "锦瑟"
  },
  {
    "paragraph": "还卿一钵无情泪，恨不相逢未剃时。",
    "author": "苏曼殊",
    "title": "本事诗"
  },
  {
    "paragraph": "瘦影自怜秋水照，卿须怜我我怜卿。",
    "author": "冯小青",
    "title": "怨"
  },
  {
    "paragraph": "落红不是无情物，化作春泥更护花。",
    "author": "龚自珍",
    "title": "己亥杂诗"
  },
  {
    "paragraph": "梧桐树，三更雨，不道离情正苦。一叶叶，一声声，空阶滴到明。",
    "author": "温庭筠",
    "title": "更漏子三首其三"
  },
  {
    "paragraph": "从别後，忆相逢，几回魂梦与君同。",
    "author": "晏几道",
    "title": "鹧鸪天三首其一"
  },
  {
    "paragraph": "死生契阔，与子成说。执子之手，与子偕老。",
    "author": "佚名",
    "title": "诗经。邶风。击鼓"
  },
  {
    "paragraph": "此情可待成追忆，只是当时已惘然。",
    "author": "李商隐",
    "title": "锦瑟"
  },
  {
    "paragraph": "落花人独立，微雨燕双飞。",
    "author": "晏几道",
    "title": "临江仙二首其二"
  },
  {
    "paragraph": "一场寂寞凭谁诉。算前言，总轻负。",
    "author": "柳永",
    "title": "昼夜乐"
  },
  {
    "paragraph": "还君明珠双泪垂，恨不相逢未嫁时。",
    "author": "张籍",
    "title": "节妇吟"
  },
  {
    "paragraph": "生当复来归，死当长相思。",
    "author": "苏武",
    "title": "结发为夫妻"
  },
  {
    "paragraph": "嗟余只影系人间，如何同生不同死？",
    "author": "陈衡恪",
    "title": "题春绮遗像"
  },
  {
    "paragraph": "千金纵买相如赋，脉脉此情谁诉。",
    "author": "辛弃疾",
    "title": "摸鱼儿"
  },
  {
    "paragraph": "多情自古伤离别。更那堪，冷落清秋节。",
    "author": "柳永",
    "title": "雨霖铃"
  },
  {
    "paragraph": "一寸相思千万绪，人间没个安排处。",
    "author": "李冠",
    "title": "蝶恋花"
  },
  {
    "paragraph": "天长路远魂飞苦，梦魂不到关山难，长相思，摧心肝。",
    "author": "",
    "title": "李白长相思二首其一"
  },
  {
    "paragraph": "离恨却如春草，更行更远还生。",
    "author": "李煜",
    "title": "清平乐"
  },
  {
    "paragraph": "直道相思了无益，未妨惆怅是清狂。",
    "author": "李商隐",
    "title": "无题六首其三"
  },
  {
    "paragraph": "思君如明烛，煎心且衔泪。",
    "author": "陈叔达",
    "title": "自君之出矣"
  },
  {
    "paragraph": "春蚕到死丝方尽，蜡炬成灰泪始乾。",
    "author": "李商隐",
    "title": "无题"
  },
  {
    "paragraph": "都道是金玉良缘，俺只念木石前盟。空对着，山中高士晶莹雪；终不忘，世外仙姝寂寞林。",
    "author": "曹雪芹",
    "title": "终身误"
  },
  {
    "paragraph": "别来半岁音书绝，一寸离肠千万结。",
    "author": "韦庄",
    "title": "应天长"
  },
  {
    "paragraph": "只愿君心似我心，定不负相思意。",
    "author": "李之仪",
    "title": "卜算子"
  },
  {
    "paragraph": "一个是阆苑仙葩，一个是美玉无瑕。若说没奇缘，今生偏又遇着他；若说有奇缘，如何心事终虚话？",
    "author": "曹雪芹",
    "title": "枉凝眉"
  },
  {
    "paragraph": "在天愿作比翼鸟，在地愿为连理枝。",
    "author": "白居易",
    "title": "长恨歌"
  },
  {
    "paragraph": "临别殷勤重寄词，词中有誓两心知。",
    "author": "白居易",
    "title": "长恨歌"
  },
  {
    "paragraph": "玲珑骰子安红豆，入骨相思知不知？",
    "author": "温庭筠",
    "title": "杨柳枝"
  },
  {
    "paragraph": "滴不尽相思血泪抛红豆，开不完春柳春花满画楼。",
    "author": "曹雪芹",
    "title": "红豆词"
  },
  {
    "paragraph": "如何让你遇见我，在我最美丽的时刻。为这，我已在佛前求了五百年，求他让我们结一段尘缘。",
    "author": "席慕蓉",
    "title": "一棵开花的树"
  },
  {
    "paragraph": "天不老，情难绝。心似双丝网，中有千千结。",
    "author": "张先",
    "title": "千秋岁"
  },
  {
    "paragraph": "开辟鸿蒙，谁为情种？都只为风月情浓。",
    "author": "曹雪芹",
    "title": "红楼梦引子"
  },
  {
    "paragraph": "终日两相思，为君憔悴尽，百花时。",
    "author": "温庭筠",
    "title": "南歌子四首其二"
  },
  {
    "paragraph": "相思似海深，旧事如天远。",
    "author": "乐婉",
    "title": "卜算子"
  },
  {
    "paragraph": "今夕何夕，见此良人。",
    "author": "佚名",
    "title": "诗经。唐风。绸缪"
  },
  {
    "paragraph": "自君之出矣，明镜暗不治。思君如流水，何有穷已时。",
    "author": "徐干",
    "title": "室思"
  },
  {
    "paragraph": "休言半纸无多重，万斛离愁尽耐担。",
    "author": "陈蓬姐",
    "title": "寄外二首其二"
  },
  {
    "paragraph": "尊前拟把归期说，未语春容先惨咽。",
    "author": "欧阳修",
    "title": "玉楼春"
  },
  {
    "paragraph": "身无彩凤双飞翼，心有灵犀一点通。",
    "author": "李商隐",
    "title": "无题"
  },
  {
    "paragraph": "相思一夜梅花发，忽到窗前疑是君。",
    "author": "卢仝",
    "title": "有所思"
  },
  {
    "paragraph": "鱼沈雁杳天涯路，始信人间别离苦。",
    "author": "戴叔伦",
    "title": "相思曲"
  },
  {
    "paragraph": "相思树底说相思，思郎恨郎郎不知。",
    "author": "梁启超",
    "title": "台湾竹枝词"
  },
  {
    "paragraph": "泪纵能乾终有迹，语多难寄反无词。",
    "author": "陈端生",
    "title": "寄外"
  },
  {
    "paragraph": "关关雎鸠，在河之洲。窈宨淑女，君子好逑。",
    "author": "佚名",
    "title": "诗经。周南。关雎"
  },
  {
    "paragraph": "夜月一帘幽梦，春风十里柔情。",
    "author": "秦观",
    "title": "八六子"
  },
  {
    "paragraph": "天涯地角有穷时，只有相思无尽处。",
    "author": "晏殊",
    "title": "玉楼春"
  },
  {
    "paragraph": "此去经年，应是良辰好景虚设。便纵有，千种风情，更与何人说。",
    "author": "柳永",
    "title": "雨霖铃"
  },
  {
    "paragraph": "人生自是有情痴，此恨不关风与月。",
    "author": "欧阳修",
    "title": "玉楼春"
  },
  {
    "paragraph": "凄凉别後两应同，最是不胜清怨月明中。",
    "author": "纳兰性德",
    "title": "虞美人"
  },
  {
    "paragraph": "衣带渐宽终不悔，为伊消得人憔悴。",
    "author": "柳永",
    "title": "凤栖梧"
  },
  {
    "paragraph": "重叠泪痕缄锦字，人生只有情难死。",
    "author": "文廷式",
    "title": "蝶恋花"
  },
  {
    "paragraph": "平生不会相思，才会相思，便害相思。",
    "author": "徐再思",
    "title": "折桂令"
  },
  {
    "paragraph": "兽炉沈水烟，翠沼残花片，一行行写入相思传。",
    "author": "张可久",
    "title": "塞鸿秋"
  },
  {
    "paragraph": "鸿雁在云鱼在水，惆怅此情难寄。",
    "author": "晏殊",
    "title": "清平乐二首其二"
  },
  {
    "paragraph": "同心而离居，忧伤以终老。",
    "author": "佚名",
    "title": "涉江采芙蓉"
  },
  {
    "paragraph": "明月楼高休独倚，酒入愁肠，化作相思泪。",
    "author": "范仲淹",
    "title": "苏幕遮"
  },
  {
    "paragraph": "直缘感君恩爱一回顾，使我双泪长珊珊。",
    "author": "卢仝",
    "title": "楼上女儿曲"
  },
  {
    "paragraph": "锺情怕到相思路。盼长堤，草尽红心。动愁吟，碧落黄泉，两处难寻。",
    "author": "朱彝尊",
    "title": "高阳台"
  },
  {
    "paragraph": "君若扬路尘，妾若浊水泥，浮沈各异势，会合何时谐？",
    "author": "曹植",
    "title": "明月上高楼"
  },
  {
    "paragraph": "无情不似多情苦，一寸还成千万缕。",
    "author": "晏殊",
    "title": "玉楼春"
  },
  {
    "paragraph": "若教眼底无离恨，不信人间有白头。",
    "author": "辛弃疾",
    "title": "鹧鸪天"
  },
  {
    "paragraph": "忆君心似西江水，日夜东流无歇时。",
    "author": "鱼玄机",
    "title": "江陵愁望有寄"
  },
  {
    "paragraph": "妾似胥山长在眼，郎如石佛本无心。",
    "author": "朱彝尊",
    "title": "鸳鸯湖棹歌"
  },
  {
    "paragraph": "有美人兮，见之不忘，一日不见兮，思之如狂。",
    "author": "佚名",
    "title": "凤求凰。琴歌"
  },
  {
    "paragraph": "入我相思门，知我相思苦，长相思兮长相忆，短相思兮无穷极。",
    "author": "李白",
    "title": "三五七言"
  },
  {
    "paragraph": "离愁渐远渐无穷，迢迢不断如春水。",
    "author": "欧阳修",
    "title": "踏莎行"
  },
  {
    "paragraph": "相见争如不见，有情何似无情。",
    "author": "司马光",
    "title": "西江月"
  },
  {
    "paragraph": "问世间，情是何物，直教生死相许。",
    "author": "元好问",
    "title": "摸鱼儿二首其一"
  },
  {
    "paragraph": "花红易衰似郎意，水流无限似侬愁。",
    "author": "刘禹锡",
    "title": "竹枝词四首其二"
  },
  {
    "paragraph": "十年生死两茫茫，不思量，自难忘，千里孤坟，无处话凄凉。",
    "author": "苏轼",
    "title": "江城子"
  },
  {
    "paragraph": "相思本是无凭语，莫向花牋费泪行。",
    "author": "晏几道",
    "title": "鹧鸪天三首其二"
  },
  {
    "paragraph": "他生莫作有情痴，人间无地着相思。",
    "author": "况周颐",
    "title": "减字浣溪沙"
  },
  {
    "paragraph": "这次我离开你，是风，是雨，是夜晚；你笑了笑，我摆一摆手，一条寂寞的路便展向两头了。",
    "author": "郑愁予",
    "title": "赋别"
  },
  {
    "paragraph": "不知魂已断，空有梦相随。除却天边月，没人知。",
    "author": "韦庄",
    "title": "女冠子二首其一"
  },
  {
    "paragraph": "可怜无定河边骨，犹是春闺梦里人。",
    "author": "陈陶",
    "title": "陇西行"
  },
  {
    "paragraph": "不要因为也许会改变，就不肯说那句美丽的誓言，不要因为也许会分离，就不敢求一次倾心的相遇。",
    "author": "席慕蓉",
    "title": "印记"
  },
  {
    "paragraph": "相恨不如潮有信，相思始觉海非深。",
    "author": "白居易",
    "title": "浪淘沙"
  },
  {
    "paragraph": "人到情多情转薄，而今真个不多情。",
    "author": "纳兰性德",
    "title": "摊破浣溪沙"
  },
  {
    "paragraph": "深知身在情长在，怅望江头江水声。",
    "author": "李商隐",
    "title": "暮秋独游曲江"
  },
  {
    "paragraph": "两情若是久长时，又岂在朝朝暮暮。",
    "author": "秦观",
    "title": "鹊桥仙"
  },
  {
    "paragraph": "若有知音见采，不辞遍唱阳春。",
    "author": "晏殊",
    "title": "山亭柳。赠歌者"
  },
  {
    "paragraph": "诚知此恨人人有，贫*夫妻百事哀。",
    "author": "元稹",
    "title": "遣悲怀三首其二"
  },
  {
    "paragraph": "结发为夫妻，恩爱两不疑。",
    "author": "苏武",
    "title": "结发为夫妻"
  },
  {
    "paragraph": "换我心，为你心，始知相忆深。",
    "author": "顾敻",
    "title": "诉衷情"
  },
  {
    "paragraph": "曾经沧海难为水，除却巫山不是云。",
    "author": "元稹",
    "title": "离思五首其四"
  },
  {
    "paragraph": "执手相看泪眼，竟无语凝噎。",
    "author": "柳永",
    "title": "雨霖铃"
  },
  {
    "paragraph": "明月不谙离恨苦，斜光到晓穿朱户。",
    "author": "晏殊",
    "title": "鹊踏枝"
  },
  {
    "paragraph": "天长地久有时尽，此恨绵绵无绝期。",
    "author": "白居易",
    "title": "长恨歌"
  },
  {
    "paragraph": "愿我如星君如月，夜夜流光相皎洁。",
    "author": "范成大",
    "title": "车遥遥篇"
  },
  {
    "paragraph": "忍把千金酬一笑？毕竟相思，不似相逢好。",
    "author": "邵瑞彭",
    "title": "蝶恋花"
  },
  {
    "paragraph": "寻好梦，梦难成。况谁知我此时情。枕前泪共帘前雨，隔个窗儿滴到明。",
    "author": "聂胜琼",
    "title": "鹧鸪天"
  },
  {
    "paragraph": "春心莫共花争发，一寸相思一寸灰。",
    "author": "李商隐",
    "title": "无题六首其六"
  },
  {
    "paragraph": "若问闲情都几许？一川烟草，满城风絮，梅子黄时雨。",
    "author": "贺铸",
    "title": "横塘路"
  },
  {
    "paragraph": "唯将终夜长开眼，报答平生未展眉。",
    "author": "元稹",
    "title": "遣悲怀三首其三"
  },
  {
    "paragraph": "欲寄彩笺兼尺素，山长水阔知何处。",
    "author": "晏殊",
    "title": "鹊踏枝"
  },
  {
    "paragraph": "似此星辰非昨夜，为谁风露立中宵。",
    "author": "黄景仁",
    "title": "绮怀诗二首其一"
  },
  {
    "paragraph": "相思相见知何日？此时此夜难为情。",
    "author": "李白",
    "title": "三五七言"
  },
  {
    "paragraph": "泪眼问花花不语，乱红飞过秋千去。",
    "author": "欧阳修",
    "title": "蝶恋花二首其一"
  },
  {
    "paragraph": "相思一夜情多少，地角天涯未是长。",
    "author": "张仲素",
    "title": "燕子楼"
  },
  {
    "paragraph": "人如风後入江云，情似雨馀黏地絮。",
    "author": "周邦彦",
    "title": "玉楼春"
  },
  {
    "paragraph": "多情只有春庭月，犹为离人照落花。",
    "author": "张泌",
    "title": "寄人"
  },
  {
    "paragraph": "曾经沧海难为水，除却巫山不是云。",
    "author": "元稹",
    "title": "离思五首·其四"
  },
  {
    "paragraph": "玲珑骰子安红豆，入骨相思知不知。",
    "author": "温庭筠",
    "title": "南歌子词二首 / 新添声杨柳枝词"
  },
  {
    "paragraph": "只愿君心似我心，定不负相思意。",
    "author": "李之仪",
    "title": "卜算子·我住长江头"
  },
  {
    "paragraph": "平生不会相思，才会相思，便害相思。",
    "author": "徐再思",
    "title": "折桂令·春情"
  },
  {
    "paragraph": "入我相思门，知我相思苦。",
    "author": "李白",
    "title": "三五七言 / 秋风词"
  },
  {
    "paragraph": "山无陵，江水为竭。冬雷震震，夏雨雪。天地合，乃敢与君绝。",
    "author": "佚名",
    "title": "上邪"
  },
  {
    "paragraph": "两情若是久长时，又岂在朝朝暮暮。",
    "author": "秦观",
    "title": "鹊桥仙·纤云弄巧"
  },
  {
    "paragraph": "愿得一心人，白头不相离。",
    "author": "卓文君",
    "title": "白头吟"
  },
  {
    "paragraph": "一日不见兮，思之如狂。",
    "author": "司马相如",
    "title": "凤求凰 / 琴歌"
  },
  {
    "paragraph": "身无彩凤双飞翼，心有灵犀一点通。",
    "author": "李商隐",
    "title": "无题·昨夜星辰昨夜风"
  },
  {
    "paragraph": "问世间，情为何物，直教生死相许？",
    "author": "元好问",
    "title": "摸鱼儿·雁丘词 / 迈陂塘"
  },
  {
    "paragraph": "执子之手，与子偕老。",
    "author": "佚名",
    "title": "击鼓"
  },
  {
    "paragraph": "取次花丛懒回顾，半缘修道半缘君。",
    "author": "元稹",
    "title": "离思五首·其四"
  },
  {
    "paragraph": "怕相思，已相思，轮到相思没处辞，眉间露一丝。",
    "author": "俞彦",
    "title": "长相思·折花枝"
  },
  {
    "paragraph": "似此星辰非昨夜，为谁风露立中宵。",
    "author": "黄景仁",
    "title": "绮怀"
  },
  {
    "paragraph": "夜月一帘幽梦，春风十里柔情。",
    "author": "秦观",
    "title": "八六子·倚危亭"
  },
  {
    "paragraph": "还君明珠双泪垂，何不相逢未嫁时。",
    "author": "张籍",
    "title": "节妇吟·寄东平李司空师道"
  },
  {
    "paragraph": "落花人独立，微雨燕双飞。",
    "author": "晏几道",
    "title": "临江仙·梦后楼台高锁"
  },
  {
    "paragraph": "天涯地角有穷时，只有相思无尽处。",
    "author": "晏殊",
    "title": "玉楼春·春恨"
  },
  {
    "paragraph": "直道相思了无益，未妨惆怅是清狂。",
    "author": "李商隐",
    "title": "无题·重帏深下莫愁堂"
  },
  {
    "paragraph": "换我心，为你心，始知相忆深。",
    "author": "顾夐",
    "title": "诉衷情·永夜抛人何处去"
  },
  {
    "paragraph": "闻君有两意，故来相决绝。",
    "author": "卓文君",
    "title": "白头吟"
  },
  {
    "paragraph": "多情自古伤离别，更那堪冷落清秋节！",
    "author": "柳永",
    "title": "雨霖铃·寒蝉凄切"
  },
  {
    "paragraph": "生当复来归，死当长相思。",
    "author": "佚名",
    "title": "留别妻"
  },
  {
    "paragraph": "泪眼问花花不语，乱红飞过秋千去。",
    "author": "欧阳修",
    "title": "蝶恋花·庭院深深深几许"
  },
  {
    "paragraph": "心似双丝网，中有千千结。",
    "author": "张先",
    "title": "千秋岁·数声鶗鴂"
  },
  {
    "paragraph": "日日思君不见君，共饮长江水。",
    "author": "李之仪",
    "title": "卜算子·我住长江头"
  },
  {
    "paragraph": "美人卷珠帘，深坐颦蛾眉。",
    "author": "李白",
    "title": "怨情"
  },
  {
    "paragraph": "人到情多情转薄，而今真个悔多情。",
    "author": "纳兰性德",
    "title": "山花子·风絮飘残已化萍"
  },
  {
    "paragraph": "相思相见知何日？此时此夜难为情！",
    "author": "李白",
    "title": "三五七言 / 秋风词"
  },
  {
    "paragraph": "盈盈一水间，脉脉不得语。",
    "author": "佚名",
    "title": "迢迢牵牛星"
  },
  {
    "paragraph": "天长地久有时尽，此恨绵绵无绝期。",
    "author": "白居易",
    "title": "长恨歌"
  },
  {
    "paragraph": "海水梦悠悠，君愁我亦愁。",
    "author": "佚名",
    "title": "西洲曲"
  },
  {
    "paragraph": "酒入愁肠，化作相思泪。",
    "author": "范仲淹",
    "title": "苏幕遮·怀旧"
  },
  {
    "paragraph": "欲把相思说似谁，浅情人不知。",
    "author": "晏几道",
    "title": "长相思·长相思"
  },
  {
    "paragraph": "相思只在：丁香枝上，豆蔻梢头。",
    "author": "王雱",
    "title": "眼儿媚·杨柳丝丝弄轻柔"
  },
  {
    "paragraph": "曾与美人桥上别，恨无消息到今朝。",
    "author": "刘禹锡",
    "title": "杨柳枝 / 柳枝词"
  },
  {
    "paragraph": "肠已断，泪难收。相思重上小红楼。",
    "author": "辛弃疾",
    "title": "鹧鸪天·晚日寒鸦一片愁"
  },
  {
    "paragraph": "结发为夫妻，恩爱两不疑。",
    "author": "佚名",
    "title": "留别妻"
  },
  {
    "paragraph": "相思了无益，悔当初相见。",
    "author": "朱彝尊",
    "title": "忆少年·飞花时节"
  },
  {
    "paragraph": "无情不似多情苦。一寸还成千万缕。",
    "author": "晏殊",
    "title": "玉楼春·春恨"
  },
  {
    "paragraph": "多情只有春庭月，犹为离人照落花。",
    "author": "张泌",
    "title": "寄人"
  },
  {
    "paragraph": "窈窕淑女，君子好逑。",
    "author": "佚名",
    "title": "关雎"
  },
  {
    "paragraph": "愿为西南风，长逝入君怀。",
    "author": "曹植",
    "title": "明月上高楼"
  },
  {
    "paragraph": "莫唱当年长恨歌，人间亦自有银河。",
    "author": "袁枚",
    "title": "马嵬"
  },
  {
    "paragraph": "借问江潮与海水，何似君情与妾心？",
    "author": "白居易",
    "title": "浪淘沙·借问江潮与海水"
  },
  {
    "paragraph": "君问归期未有期，巴山夜雨涨秋池。",
    "author": "李商隐",
    "title": "夜雨寄北"
  },
  {
    "paragraph": "君知妾有夫，赠妾双明珠。",
    "author": "张籍",
    "title": "节妇吟·寄东平李司空师道"
  },
  {
    "paragraph": "忽见陌头杨柳色，悔教夫婿觅封侯。",
    "author": "王昌龄",
    "title": "闺怨"
  },
  {
    "paragraph": "相恨不如潮有信，相思始觉海非深。",
    "author": "白居易",
    "title": "浪淘沙·借问江潮与海水"
  },
  {
    "paragraph": "情人怨遥夜，竟夕起相思。",
    "author": "张九龄",
    "title": "望月怀远"
  },
  {
    "paragraph": "山远天高烟水寒，相思枫叶丹。",
    "author": "李煜",
    "title": "长相思·一重山"
  },
  {
    "paragraph": "不茶不饭，不言不语，一味供他憔悴。",
    "author": "蜀妓",
    "title": "鹊桥仙·说盟说誓"
  },
  {
    "paragraph": "妆罢低声问夫婿，画眉深浅入时无。",
    "author": "朱庆馀",
    "title": "近试上张籍水部 / 近试上张水部 / 闺意献张水部"
  },
  {
    "paragraph": "孤灯不明思欲绝，卷帷望月空长叹。",
    "author": "李白",
    "title": "长相思·其一"
  },
  {
    "paragraph": "相思相望不相亲，天为谁春。",
    "author": "纳兰性德",
    "title": "画堂春·一生一代一双人"
  },
  {
    "paragraph": "欲寄彩笺兼尺素。山长水阔知何处。",
    "author": "晏殊",
    "title": "蝶恋花·槛菊愁烟兰泣露"
  },
  {
    "paragraph": "思君如流水，何有穷已时。",
    "author": "徐干",
    "title": "室思"
  },
  {
    "paragraph": "千金纵买相如赋，脉脉此情谁诉。",
    "author": "辛弃疾",
    "title": "摸鱼儿·更能消几番风雨"
  },
  {
    "paragraph": "青青子衿，悠悠我心。",
    "author": "佚名",
    "title": "子衿"
  },
  {
    "paragraph": "一寸相思千万绪。人间没个安排处。",
    "author": "李冠",
    "title": "蝶恋花·春暮"
  },
  {
    "paragraph": "当君怀归日，是妾断肠时。",
    "author": "李白",
    "title": "春思"
  },
  {
    "paragraph": "花落花开自有时，总赖东君主。",
    "author": "严蕊",
    "title": "卜算子·不是爱风尘"
  },
  {
    "paragraph": "君为女萝草，妾作菟丝花。",
    "author": "李白",
    "title": "古意"
  },
  {
    "paragraph": "恨君不似江楼月，南北东西，南北东西，只有相随无别离。",
    "author": "吕本中",
    "title": "采桑子·恨君不似江楼月"
  },
  {
    "paragraph": "看朱成碧思纷纷，憔悴支离为忆君。",
    "author": "武则天",
    "title": "如意娘"
  },
  {
    "paragraph": "皑如山上雪，皎若云间月。",
    "author": "卓文君",
    "title": "白头吟"
  },
  {
    "paragraph": "若似月轮终皎洁，不辞冰雪为卿热。",
    "author": "纳兰性德",
    "title": "蝶恋花·辛苦最怜天上月"
  },
  {
    "paragraph": "感君缠绵意，系在红罗襦。",
    "author": "张籍",
    "title": "节妇吟·寄东平李司空师道"
  },
  {
    "paragraph": "谁料同心结不成，翻就相思结。",
    "author": "夏完淳",
    "title": "卜算子·秋色到空闺"
  },
  {
    "paragraph": "诚知此恨人人有，贫贱夫妻百事哀。",
    "author": "元稹",
    "title": "遣悲怀三首·其二"
  },
  {
    "paragraph": "梅花雪，梨花月，总相思。",
    "author": "张惠言",
    "title": "相见欢·年年负却花期"
  },
  {
    "paragraph": "殷勤花下同携手。更尽杯中酒。美人不用敛蛾眉。",
    "author": "叶梦得",
    "title": "虞美人·雨后同干誉才卿置酒来禽花下作"
  },
  {
    "paragraph": "关关雎鸠，在河之洲。窈窕淑女，君子好逑。",
    "author": "佚名",
    "title": "关雎"
  },
  {
    "paragraph": "君若清路尘，妾若浊水泥；",
    "author": "曹植",
    "title": "明月上高楼"
  },
  {
    "paragraph": "琵琶弦上说相思。当时明月在，曾照彩云归。",
    "author": "晏几道",
    "title": "临江仙·梦后楼台高锁"
  },
  {
    "paragraph": "一种相思，两处闲愁。",
    "author": "李清照",
    "title": "一剪梅·红藕香残玉簟秋"
  },
  {
    "paragraph": "两鬓可怜青，只为相思老。",
    "author": "晏几道",
    "title": "生查子·关山魂梦长"
  },
  {
    "paragraph": "若有知音见采，不辞遍唱阳春。",
    "author": "晏殊",
    "title": "山亭柳·赠歌者"
  },
  {
    "paragraph": "相思似海深，旧事如天远。",
    "author": "乐婉",
    "title": "卜算子·答施"
  },
  {
    "paragraph": "梨花院落溶溶月，柳絮池塘淡淡风。",
    "author": "晏殊",
    "title": "无题·油壁香车不再逢"
  },
  {
    "paragraph": "相思本是无凭语，莫向花笺费泪行。",
    "author": "晏几道",
    "title": "鹧鸪天·醉拍春衫惜旧香"
  },
  {
    "paragraph": "相寻梦里路，飞雨落花中。",
    "author": "晏几道",
    "title": "临江仙·斗草阶前初见"
  },
  {
    "paragraph": "深知身在情长在，怅望江头江水声。",
    "author": "李商隐",
    "title": "暮秋独游曲江"
  },
  {
    "paragraph": "春来秋去相思在，秋去春来信息稀。",
    "author": "鱼玄机",
    "title": "闺怨"
  },
  {
    "paragraph": "凄凉别后两应同，最是不胜清怨月明中。",
    "author": "纳兰性德",
    "title": "虞美人·曲阑深处重相见"
  },
  {
    "paragraph": "夜夜相思更漏残，伤心明月凭阑干，想君思我锦衾寒。",
    "author": "韦庄",
    "title": "浣溪沙·夜夜相思更漏残"
  },
  {
    "paragraph": "别来半岁音书绝，一寸离肠千万结。",
    "author": "韦庄",
    "title": "应天长·别来半岁音书绝"
  },
  {
    "paragraph": "斑竹枝，斑竹枝，泪痕点点寄相思。",
    "author": "刘禹锡",
    "title": "潇湘神·斑竹枝"
  },
  {
    "paragraph": "红豆不堪看，满眼相思泪。",
    "author": "牛希济",
    "title": "生查子·新月曲如眉"
  },
  {
    "paragraph": "忆昔花间相见后，只凭纤手，暗抛红豆。",
    "author": "欧阳炯",
    "title": "贺明朝·忆昔花间相见后"
  },
  {
    "paragraph": "相思一夜情多少，地角天涯未是长。",
    "author": "张仲素",
    "title": "燕子楼诗三首"
  },
  {
    "paragraph": "别后不知君远近。触目凄凉多少闷。",
    "author": "欧阳修",
    "title": "玉楼春·别后不知君远近"
  },
  {
    "paragraph": "春宵苦短日高起，从此君王不早朝。",
    "author": "白居易",
    "title": "长恨歌"
  },
  {
    "paragraph": "知君用心如日月，事夫誓拟同生死。",
    "author": "张籍",
    "title": "节妇吟·寄东平李司空师道"
  },
  {
    "paragraph": "四月十七，正是去年今日，别君时。",
    "author": "韦庄",
    "title": "女冠子·四月十七"
  },
  {
    "paragraph": "离愁渐远渐无穷，迢迢不断如春水。",
    "author": "欧阳修",
    "title": "踏莎行·候馆梅残"
  }
]
