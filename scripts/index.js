"use strict";

class Album{
    constructor(name_,singer_,country_,year_,price_,songList_,songLenList_,songTotal_,language_,style_,msg_,videoSrc_){
        this.name = name_;
        this.singer = singer_;
        this.country = country_;
        this.year = year_;
        this.price = price_;
        this.songList = songList_;
        this.songLenList = songLenList_
        this.songTotal = songTotal_;
        this.msg = msg_;
        this.language = language_;
        this.style = style_;
        this.videoSrc = videoSrc_;
        this.code = null;
        this.hot = Math.random()*100;
    }
}

class purchaseItem{
    constructor(code_,num_) {
        this.code = code_;
        this.num = num_;
    }
}

let slider_len_1 = 0;
let slider_len_2 = 0;
let slider_gap = 2;
let total_items = 10;
let cur_idx_1 = 1;
let cur_idx_2 = 1;

let Data = [
    new Album("范特西", "周杰伦", "中国(台湾)", "2001", "91",
        ["爱在西元前", "爸，我回來了", "简单爱", "忍者", "开不了口", "上海一九四三", "对不起", "威廉古堡", "双截棍", "安静"],
        ["3:54", "3:55", "4:31", "2:38", "4:44", "3:15", "3:45", "3:56", "3:21", "5:34"],
        10, "中文", "流行",
        "《范特西》的专辑名称来源是英文“Fantasy”的发音，意为“幻想” 。之所以使用“范特西”作为专辑名，是因为周杰伦要用音乐给人带来异想天开的想象空间，" +
        "并且“范特西”这个名字也反映了周杰伦一贯的音乐理念——音乐是幻想的，幻想是快乐的.《范特西》是周杰伦的第二张音乐专辑，由周杰伦担任制作人，于2001年9月14日发行，共收录《爱在西元前》《威廉古堡》《双截棍》等10首歌曲" +
        "2002年，该专辑获得第13届台湾金曲奖最佳流行音乐专辑奖、新加坡金曲奖年度最畅销专辑等奖项，周杰伦凭借该专辑获得第13届台湾金曲奖最佳专辑制作人奖、第二届全球华语歌曲排行榜颁奖礼最佳制作人等奖项。",
        "//player.bilibili.com/player.html?isOutside=true&aid=717634070&bvid=BV1vQ4y117zu&cid=398374892&p=1"),
    new Album("周杰伦的床边故事", "周杰伦", "中国(台湾)", "2016", "86",
        ["床边故事", "说走就走", "一点点", "前世情人", "英雄", "不该", "土耳其冰淇淋", "告白气球", "Now You See Me", "爱情废材"],
        ["3:46", "4:26", "3:42", "3:20", "unknown", "unknown", "3:15", "3:30", "2:54", "4:45"],
        10, "中文", "流行，摇滚，流行",
        "《周杰伦的床边故事》是周杰伦发行的第14张音乐专辑，由周杰伦担任制作人，共收录了《床边故事》《说走就走》《前世情人》等共10首歌曲，于2016年6月24日发行。2015年，周杰伦与昆凌结婚并诞下一女，生活美满的周杰伦将自己的幸福感注入了专辑《周杰伦的床边故事》中。" +
        "在专辑中，周杰伦把自己视作说书人，将十首歌曲看作是十个不同的故事，将不泯的童心和天马行空的想象力融入故事中并诉说给听众。",
        "//player.bilibili.com/player.html?isOutside=true&aid=850033897&bvid=BV1GL4y1n7FE&cid=468095187&p=1"),
    new Album("反正是我", "陈奕迅", "中国(香港)", "2001", "72",
        ["Because You're Good To Me", "反正是我", "低等动物", "不如这样", "爱是怀疑", "K歌之王", "没有你", "冤家", "全世界失眠", "Good Times"],
        ["3:38", "4:19", "4:39", "4:28", "4:27", "3:38", "4:26", "4:16", "4:08", "4:01"],
        10, "中文", "嘻哈，民谣，流行",
        "《反正是我》是陈奕迅的一张普通话专辑，收录11首歌曲，于2001年7月17日由新艺宝唱片发行。 该专辑先后获得新城国语力颁奖礼优秀专辑、IFPI香港唱片销量大奖十大销量国语唱片、第八届音乐风云榜（港台）最佳专辑等奖项.经过两年的蛰伏，陈奕迅对国语专辑《反正是我》十分重视，他亲自参与了该专辑从无到有的所有过程。包括从专辑方向订定、选曲、音乐制作、造型，甚至音乐录影带情节等等。该专辑的企划方向为脱掉以往过重的情歌包袱，以反向思考的企划方式来凸显陈奕迅的个人特质。",
        "//player.bilibili.com/player.html?isOutside=true&aid=852673372&bvid=BV1BL4y177WB&cid=560093407&p=1"),
    new Album("认了吧", "陈奕迅", "中国(香港)", "2007", "115",
        ["烟味", "淘汰", "快乐男生", "红玫瑰", "月黑风高", "爱情转移", "好久不见", "爱是一本书", "第一个雅皮士", "白色球鞋", "月球上的人"],
        ["4:22", "4:41", "3:20", "3:58", "4:36", "4:17", "4:08", "4:22", "3:23", "4:35", "3:42"],
        11, "中文", "电子，爵士，嘻哈，流行",
        "《认了吧》是陈奕迅的一张普通话专辑，收录11首歌曲，于2007年4月24日由新艺宝唱片发行。" +
        "该专辑先后获得新城国语力颁奖礼优秀专辑、IFPI香港唱片销量大奖十大销量国语唱片、第八届音乐风云榜（港台）最佳专辑等奖项" +
        "在发行专辑《怎么样》后，陈奕迅原本想策划推出一张包含5首粤语歌、5首普通话歌的专辑，普通话、粤语是一支曲子两套歌词，彼此呼应，但由于时间紧迫，于是就先推出粤语专辑《What's Going On...?》，再推出普通话版，计划把《What’s Going On》内的歌曲重新填上歌词及编曲，但内容及感觉都要和原先的歌曲有互相呼应之效，不过最后也因为时间关系而未能全部配合到，所以唯有认命，专辑名称由此而来。",
        "//player.bilibili.com/player.html?isOutside=true&aid=783822656&bvid=BV1C24y1P77u&cid=1133861602&p=1"),
    new Album("伟大的渺小", "林俊杰", "中国(台湾)", "2017", "82",
        ["圣所", "伟大的渺小", "穿越", "四点四十四", "我继续", "剪云者", "黑夜问白天", "丹宁执著", "身为风帆", "小瓶子", "Until The Day"],
        ["3:49", "4:37", "4:37", "3:47", "4:40", "3:35", "4:52", "4:20", "3:57", "4:12", "4:35"],
        11, "中文", "电子，摇滚，嘻哈，流行",
        "《伟大的渺小》是林俊杰演唱的歌曲，由小寒填词，林俊杰谱曲，收录于林俊杰2017年发行的同名专辑《伟大的渺小》。" +
        "2018年，该曲获得Hit Fm年度百首单曲票选冠军。同年，该曲入围第29届金曲奖年度歌曲奖" +
        "《伟大的渺小》作为专辑的同名曲，邀请了小寒填词。小寒在拿到曲子后，被林俊杰告知自由发挥。于是，她想起在网上看到一个提高对难民关注的视频，最终朝“打破隔阂”的方向创作。小寒认为，每一个渺小的人都是伟大的。因此，为歌曲取名《伟大的渺小》。随后，该词一次过关，未作任何修改 [3]。为了让歌曲充满生命力，林俊杰邀请了爱乐乐团加入弦乐",
        "//player.bilibili.com/player.html?isOutside=true&aid=17310861&bvid=BV1mW411b71p&cid=28284527&p=1\""),

    new Album("模特", "李荣浩", "中国(大陆)", "2013", "83",
        ["模特", "李白", "两个人", "太坦白", "老伴", "演员和歌手", "都一样", "有一个姑娘", "蓝绿", "拜拜"],
        ["4:37", "4:30", "4:10", "3:55", "4:20", "4:10", "3:55", "4:30", "4:10", "3:55"],
        10, "中文", "民谣，声乐，流行",
        "《模特》是由音乐人李荣浩制作并演唱的一首歌曲。由李荣浩谱曲并演唱，周耀辉填词，发行于2013年9月17日，是其同名专辑《模特》中的主打歌" +
        "2015年1月16日，李荣浩作为首位踢馆歌手参加《我是歌手第三季》，并演唱该曲。《模特》创作本身的源头，来自于黑人音乐。同时李荣浩坦言，歌曲灵感是由观察而来，从电影、人事物等多方面参考。《模特》前后贯通一体，不强加主题，却仍有一场小型Live的即视感。灵魂唱法更是主骨，也是唱片可听统一的重要原因。在犀巧动听的口气、柔韧有余的放声中，好像听觉的淤塞被疏通了，阴霾和愤懑像降了火般散去。",
        "//player.bilibili.com/player.html?isOutside=true&aid=17456087&bvid=BV1HW41187a4&cid=28511607&p=1",
    ),
    new Album("麻雀", "李荣浩", "中国(大陆)", "2020", "66",
        ["麻雀", "年少有为", "不搭", "爱的恰恰", "耳朵", "突然好想你", "歌谣", "麦田的守望者", "麻雀", "麻雀"],
        ["4:10", "4:30", "3:55", "4:20", "4:10", "3:55", "4:30", "4:10", "3:55", "4:20"],
        10, "中文", "民谣，流行",
        "《麻雀》是李荣浩的第六张录音室专辑，由李荣浩担任专辑制作人，共收录10首歌曲，于2020年7月30日发行 [1]。" +
        "2019年12月14日，专辑中的歌曲《麻雀》获得全球中文音乐榜上榜周冠军" +
        "专辑《麻雀》如同在听众的生活里安装了监视器，一举一动一哭一笑都被李荣浩记录下来写成了歌。整张专辑聚焦社会现状，述说都市人实实在在的生活常态，《麻雀》的青云之志，《等着等着就老了》的遗憾未平，《在一起嘛好不好》的甜蜜，《如果我是海》远离喧嚣的向往，这一切到最后好像也只有《要我怎么办》里的”哈哈 呵呵”四字能概括得了。",
        "//player.bilibili.com/player.html?isOutside=true&aid=78625772&bvid=BV1dJ411v7ax&cid=134533761&p=1"),

    new Album("逆光", "孙燕姿", "中国(大陆)", "2007", "108",
        ["In The Beginning", "逆光", "梦游", "咕叽咕叽", "我怀念的", "安宁", "飘着", "爱情的花样", "漩涡", "需要你", "关于", "Afterward"],
        ["1:00", "4:53", "3:08", "4:33", "4:49", "3:19", "4:10", "3:43", "4:51", "4:09", "4:20", "0:56"],
        12, "中文", "摇滚，民谣，流行",
        "逆光》是新加坡歌手孙燕姿发行的第十张专辑，该专辑由李偲菘、李伟菘、孙燕姿担任制作人，音乐总监由孙燕姿担任。专辑共收录12首歌曲，于2007年3月22日正式发行。" +
        "2007年该专辑获得“第七届全球华语歌曲排行榜最佳专辑”。" +
        "“永不放弃”是这张专辑的主旨。为体现这一主旨，MV剧组成员远赴埃及拍摄取景，借用埃及的恶劣环境特质去体验《逆光》所要传达：“永不放弃”的深刻感受。",
        "//player.bilibili.com/player.html?isOutside=true&aid=81400068&bvid=BV1HJ411h7i8&cid=289923416&p=1"),

    new Album("风筝", "孙燕姿", "中国(大陆)", "2001", "52",
        ["绿光", "风筝", "任性", "逃亡", "不是真的爱我", "真的", "练习", "爱情字典", "随堂测验", "我是我"],
        ["3:11", "4:34", "3:47", "4:42", "3:58", "4:41", "4:15", "3:48", "3:35", "3:47"],
        10, "中文", "摇滚，流行",
        "《风筝》是孙燕姿于2001年7月12日发行的音乐专辑，共收录10首歌曲，由李偲菘、李伟菘、包小柏等担任制作人。" +
        "2002年，该专辑入围第13届台湾金曲奖最佳流行音乐演唱专辑奖。" +
        "在专辑筹备期间，孙燕姿一听到专辑同名歌曲《风筝》的音乐小样，就已经爱不释手，迫不及待的想到录音室试唱。华纳唱片对该曲特别重视，找了20位词人为该曲填词，最终选定了易家扬填词的版本。在录唱该曲时，孙燕姿一度被勾起思乡的心情，常常唱到一半就哭泣 。" +
        "《绿光》最初由孙燕姿构思，她在同李偲菘、李伟菘提及这首歌的想法后，两位制作人很快就领会了孙燕姿的想法，将其构思发展成一首完整的歌曲，最终的成品令孙燕姿感到满意。此外，专辑制作团队给了孙燕姿很大的创作和发挥空间。在巴厘岛、纽约度假期间，孙燕姿得到了很多灵感，创作出《真的》《任性》在内的两首歌曲",
        "//player.bilibili.com/player.html?isOutside=true&aid=932948440&bvid=BV1oM4y1G7o7&cid=408129921&p=1"),

    new Album("不可能错过你", "王力宏", "中国(大陆)", "1999", "117",
        ["钓灵感", "不可能错过你", "流泪手心", "Julia", "感情副作用", "打开爱", "不降落的滑翔翼", "失去了你", "你爱过没有", "Happy Ending", "Mary Says"],
        ["4:19", "4:52", "4:53", "4:30", "4:04", "4:32", "5:02", "4:17", "4:40", "4:14", "5:06"],
        11, "中文", "嘻哈,流行",
        "《不可能错过你》是王力宏的第六张录音室专辑，于1999年6月22日发行，共收录11首歌曲，由王力宏、陈伟、李振权、黄怡担任制作人。" +
        "2000年2月，该专辑获得中华音乐人交流协会“十大专辑”奖项。" +
        "《不可能错过你》是王力宏的第六张录音室专辑，他亲自参与了大半的词曲创作及制作工作。专辑体现了王力宏制作专辑一年来生活及创作音乐的酸甜苦辣，" +
        "他在内容上加入了更多贴近人心的情绪。大学毕业后，王力宏从未停止对音乐上的研究精神。在《不可能错过你》中，" +
        "他把重心放在演唱技巧的表现上，并在爵士乐歌手雪莉·班婷（Cheryl Bentyne）的指导下对发声技巧有新的认识。",
        "//player.bilibili.com/player.html?isOutside=true&aid=598820182&bvid=BV1rB4y1k7HJ&cid=782564541&p=1"),

    new Album("Hit Me Hard And Soft", "Billie Eilish", "欧洲", "2024", "210",
        ["Hard Times", "Soft Edges", "Echoes in the Dark", "Silent Screams", "Deep Waters", "Loud Silence", "Shadow Play", "Bright Night", "Fading Memories", "Whispered Secrets", "Golden Hour", "Last Breath"],
        ["3:45", "4:10", "3:58", "4:23", "4:05", "3:50", "4:12", "4:30", "3:40", "4:00", "4:15", "3:55"],
        12, "英文", "其他,流行",
        "《Hit Me Hard And Soft》是Billie Eilish的最新录音室专辑，于2024年发行，共收录12首歌曲。Billie Eilish在这张专辑中继续探索她独特的音乐风格，融合了另类和流行元素。" +
        "专辑中的歌曲讲述了情感的起伏、生活中的挑战和内心的挣扎，展现了她深刻的音乐洞察力和情感表达能力。" +
        "《Hit Me Hard And Soft》不仅仅是一张音乐专辑，更是Billie Eilish在音乐道路上不断探索和成长的见证。", "//player.bilibili.com/player.html?isOutside=true&aid=1654774438&bvid=BV1r7421f7rR&cid=1550800231&p=1"),


    new Album("Guts", "Olivia Rodrigo", "美国", "2023", "140",
        ["all-american bitch", "bad idea right?", "vampire", "lacy", "ballad of a homeschooled girl", "making the bed", "logical", "get him back!", "love is embarrassing", "the grudge", "pretty isn't pretty", "teenage dream"],
        ["2:37", "3:05", "3:39", "2:54", "2:28", "3:16", "3:32", "3:22", "2:26", "2:53", "2:39", "3:41"],
        12, "英文", "流行,摇滚",
        "《Guts》是Olivia Rodrigo的第二张录音室专辑，于2023年发行，共收录12首歌曲。Olivia Rodrigo在这张专辑中延续了她在首张专辑《SOUR》中展现的音乐风格，" +
        "并进一步探索了个人成长、情感纠葛和青春期的复杂情绪。" +
        "专辑中的每一首歌都充满了她独特的音乐才华和深刻的歌词，展现了她作为一个年轻艺术家的成熟与进步。",
        "《Guts》不仅是一张音乐专辑，更是Olivia Rodrigo对她青春岁月的真实记录。", "//player.bilibili.com/player.html?isOutside=true&aid=364217598&bvid=BV1t94y1h717&cid=1360022888&p=1"),

    new Album("Eternal Sunshine", "Ariana Grande", "美国", "2024", "135",
        ["Sunrise Intro", "Eternal Sunshine", "Infinite Love", "Starlight Serenade", "Moonlit Dreams", "Golden Hour", "Celestial Bodies", "Radiant", "Twilight Glow", "Sunset Outro"],
        ["1:45", "4:00", "3:50", "4:10", "3:55", "4:05", "3:35", "4:20", "3:45", "2:10"],
        10, "英文", "流行, 蓝调",
        "《Eternal Sunshine》是Ariana Grande的最新录音室专辑，于2024年发行，共收录10首歌曲。这张专辑融合了流行和R&B的元素，展示了Ariana Grande在音乐创作和演唱上的多样性和深度。" +
        "专辑中的歌曲讲述了爱情、梦想和生活中的美好瞬间，展现了她对音乐的热爱和对生活的积极态度。" +
        "《Eternal Sunshine》不仅是一张音乐专辑，更是Ariana Grande在音乐道路上不断进步和探索的体现。",
        "//player.bilibili.com/player.html?isOutside=true&aid=1201669729&bvid=BV1dF4m1F7A9&cid=1462890620&p=1"),

    new Album("Emails I Can't Send", "Sabrina Carpenter", "美国", "2022", "280",
        ["intro", "emails i can't send", "Vicious", "Read your mind", "Tornado warnings", "because i liked a boy", "Already Over", "how many things", "bet u wanna", "Nonsense", "Fast times", "Skinny dipping", "Bad for business", "decode"],
        ["0:48", "3:13", "2:30", "2:33", "2:40", "2:58", "2:54", "3:19", "2:26", "2:43", "3:08", "2:57", "2:34", "4:17"],
        14, "英文", "流行",
        "《Emails I Can't Send》是Sabrina Carpenter的第五张录音室专辑，于2022年发行，共收录14首歌曲。Sabrina Carpenter在这张专辑中继续展示了她在流行音乐领域的才华和深度，探索了个人情感和成长的主题。",
        "//player.bilibili.com/player.html?isOutside=true&aid=903430503&bvid=BV1aP4y1Q7GZ&cid=912994059&p=1"),

    new Album("Radical Optimism", "Dua Lipa", "英国", "2024", "221",
        ["Optimism Intro", "Future Nostalgia", "Levitating", "Break My Heart", "Physical", "Cool", "Hallucinate", "Love Again", "Pretty Please", "Good in Bed", "Boys Will Be Boys", "Don't Start Now", "Electricity", "Kiss and Make Up"],
        ["1:50", "3:14", "3:23", "3:41", "3:13", "3:30", "3:29", "4:18", "3:17", "3:38", "2:49", "3:03", "4:36", "3:09"],
        14, "英文", "流行, 电子",
        "《Radical Optimism》是Dua Lipa的第三张录音室专辑，于2024年发行。专辑中融合了流行和电子音乐元素，延续了她前作的成功并探索了新的音乐方向。",
        "//player.bilibili.com/player.html?isOutside=true&aid=1903872954&bvid=BV14m41117P7&cid=1528303606&p=1"
    ),

    new Album("The Rise And Fall Of A Midwest Princess", "Chappell Roan", "美国", "2023", "180",
        ["Pink Pony Club", "California", "Love Me Anyway", "Casual", "My Kink is Karma", "Coffee", "Naked in Manhattan", "Femininomenon", "Heteronormative", "I-10", "Super Graphic Ultra Modern Girl", "Sugar High", "Gossip"],
        ["3:28", "3:20", "2:58", "3:12", "3:07", "2:43", "3:33", "3:16", "3:05", "3:10", "3:50", "3:29", "3:13"],
        13, "英文", "摇滚，流行",
        "《The Rise And Fall Of A Midwest Princess》是Chappell Roan的首张录音室专辑，于2023年发行。专辑探索了个人身份和成长的主题，充满了独立流行的风格。",
        "//player.bilibili.com/player.html?isOutside=true&aid=793998501&bvid=BV1qC4y1C7Zm&cid=1411043289&p=1"),

    new Album("Françoise Hardy", "Françoise Hardy", "法国", "2024", "199",
        ["Tous les garçons et les filles", "Le temps de l'amour", "Ça a raté", "La fille avec toi", "Oh oh chéri", "Il est tout pour moi", "J'suis d'accord", "C'est à l'amour auquel je pense", "Je pense à lui", "Il est parti un jour", "Il est tout pour moi", "Tous les garçons et les filles"],
        ["3:05", "2:26", "2:20", "2:25", "2:23", "2:30", "2:20", "2:30", "2:30", "2:20", "2:30", "3:05"],
        12, "法文", "流行",
        "《Françoise Hardy》是Françoise Hardy的最新录音室专辑，于2024年发行。专辑延续了她一贯的香颂风格，展现了她在音乐上的成熟和对爱情的深刻理解。",
        "//player.bilibili.com/player.html?isOutside=true&aid=25783157&bvid=BV1ws41157ZK&cid=44026545&p=1"),

    new Album("Moriarty", "Fat Cairo", "英国", "2001", "78",
        ["Introduction", "The Case Begins", "Chase Scene", "Clues", "Moriarty's Theme", "The Escape", "Showdown", "Finale"],
        ["1:45", "3:20", "4:10", "2:30", "3:45", "4:00", "5:00", "2:55"],
        8, "英文", "摇滚, 电子",
        "《Moriarty》是Fat Cairo的首张录音室专辑，于2001年发行。这张专辑结合了摇滚和电子音乐元素，讲述了一个侦探故事，展现了他们独特的音乐风格。"),


    new Album("Reputation", "Taylor Swift", "美国", "2017", "99",
        ["...Ready for It?", "End Game", "I Did Something Bad", "Don't Blame Me", "Delicate", "Look What You Made Me Do",
            "So It Goes...", "Gorgeous", "Getaway Car", "King of My Heart", "Dancing with Our Hands Tied", "Dress", "This Is Why We Can't Have Nice Things", "Call It What You Want", "New Year's Day"],
        ["3:28", "4:04", "3:58", "3:56", "3:52", "3:31", "3:47", "3:30", "3:53", "3:34", "3:31", "3:50", "3:27", "3:23", "3:55"],
        15, "英文", "流行，摇滚，电子",
        "《Reputation》是美国歌手Taylor Swift的第六张录音室专辑，由Big Machine Records发行。这张专辑是Swift从她的乡村音乐根源进一步转向流行音乐的重要一步，展示了她在音乐风格上的不断进化。这张专辑的创作过程中，Swift汲取了电子流行和流行摇滚的元素，与她之前的作品相比，呈现出更为成熟和复杂的音色。",
        "//player.bilibili.com/player.html?isOutside=true&aid=61524580&bvid=BV1Ct411c7Sa&cid=107010112&p=1"),

    new Album("Black Moses", "Isaac Hayes", "美国", "2024", "59",
        ["Never Can Say Goodbye", "They Long To Be Close To You", "Nothing Takes The Place Of You", "Man's Temptation", "Part-Time Love", "Medley: A Brand New Me", "Going In Circles"],
        ["5:07", "9:07", "5:31", "5:02", "8:30", "9:36", "7:03"],
        7, "英文", "摇滚，朋克",
        "《Black Moses》是Isaac Hayes的经典录音室专辑，原版于1971年发行。这张专辑重新定义了灵魂乐，融合了放克和R&B元素，展现了Hayes标志性的深情和独特的音乐风格。此次重新发行于2024年。"),

    new Album("Cosmo's Factory", "Creedence Clearwater Revival", "美国", "1970", "88",
        ["Ramble Tamble", "Before You Accuse Me", "Travelin' Band", "Ooby Dooby", "Lookin' Out My Back Door", "Run Through the Jungle", "Up Around the Bend", "My Baby Left Me", "Who'll Stop the Rain", "I Heard It Through the Grapevine", "Long as I Can See the Light"],
        ["7:09", "3:24", "2:07", "2:05", "2:31", "3:09", "2:42", "2:20", "2:29", "11:07", "3:33"],
        11, "英文", "摇滚，蓝调",
        "《Cosmo's Factory》是Creedence Clearwater Revival的专辑，发布于1970年。这张专辑以其经典的摇滚和蓝调风格赢得了大量听众，展现了乐队的卓越音乐天赋和创新精神。"),

    new Album("Live '88", "Supertramp", "英国", "2004", "77",
        ["You Started Laughing", "It's Alright", "Not The Moment", "Bloody Well Right", "Breakfast In America", "From Now On", "Free As A Bird", "Oh Darling", "Just Another Nervous Wreck", "The Logical Song", "I'm Your Hoochie Cooche Man", "Don't You Lie To Me", "Crime Of The Century"],
        ["4:02", "6:32", "6:39", "6:55", "2:44", "7:41", "4:43", "4:16", "4:40", "4:06", "3:25", "3:31", "6:23"],
        13, "英文", "摇滚,蓝调",
        "《Live '88》是Supertramp的现场专辑，捕捉了他们在1988年的现场表演。这张专辑展示了乐队的现场魅力和经典曲目的现场版本。"),

    new Album("Already Free", "The Derek Trucks Band", "美国", "2009", "137",
        ["Down In The Flood", "Something To Make You Happy", "Maybe This Time", "Sweet Inspiration", "Don't Miss Me", "Get What You Deserve", "Our Love", "Down Don't Bother Me", "Days Is Almost Gone", "Back Where I Started", "I Know", "Already Free"],
        ["5:02", "5:03", "6:55", "4:39", "4:58", "3:33", "5:17", "4:10", "5:40", "4:39", "4:40", "2:56"],
        12, "英文", "摇滚,蓝调",
        "《Already Free》是The Derek Trucks Band的专辑，发布于2009年。这张专辑融合了摇滚和蓝调元素，展现了乐队的音乐才华和独特风格。"),

    new Album("Room Under The Stairs", "ZAYN", "英国", "2024", "143",
        ["Better", "Outside", "Vibez", "When Love's Around", "Connexion", "Sweat", "Unfuckwitable", "Windowsill", "Tightrope", "River Road"],
        ["2:55", "2:56", "2:45", "3:08", "3:17", "3:24", "2:51", "3:04", "3:19", "3:24"],
        10, "英文", "摇滚,蓝调,朋克,乡村",
        "《Room Under The Stairs》是ZAYN的专辑，发布于2024年。这张专辑展现了ZAYN多样的音乐风格，融合了摇滚、蓝调、朋克和乡村元素。"),

    new Album("Empty Flower", "Raquel Martins", "英国", "2023", "67",
        ["Empty Flower", "Erase You", "All Over Again", "Put It In Words", "The Hardest Thing", "I'll Be There", "Inner Child", "Every Way", "I'm Fine", "Confusion"],
        ["4:21", "3:48", "3:29", "4:14", "3:56", "4:09", "4:30", "4:01", "4:12", "3:50"],
        10, "英文", "爵士,蓝调",
        "《Empty Flower》是Raquel Martins的专辑，发布于2023年。这张专辑融合了爵士和蓝调元素，展现了Raquel Martins的音乐才华和情感表达。"),

    new Album("七里香", "周杰伦", "中国(台湾)", "2004", "99",
        ["我的地盘", "七里香", "借口", "外婆", "将军", "搁浅", "乱舞春秋", "困兽之斗", "园游会", "止战之殇"],
        ["3:42", "5:34", "4:42", "4:52", "3:54", "4:39", "4:12", "4:01", "3:41", "3:34"],
        10, "中文", "流行,民谣，乡村",
        "《七里香》是周杰伦的经典专辑，发布于2004年。这张专辑包含多首经典曲目，展现了周杰伦的创作才华和音乐风格。"),

    new Album("最伟大的作品", "周杰伦", "中国(台湾)", "2022", "89",
        ["最伟大的作品", "还在流浪", "说好不哭", "红颜如霜", "Mojito", "英雄", "错过的烟火", "等你下课", "粉色海洋"],
        ["4:12", "3:48", "4:02", "3:56", "3:05", "3:55", "3:38", "4:21", "3:57"],
        9, "中文", "流行,民谣，乡村",
        "《最伟大的作品》是周杰伦的专辑，发布于2022年。这张专辑延续了周杰伦的音乐风格，包含多首动人的歌曲。2021年5月12日，周杰伦凭借该专辑中的歌曲《Mojito》入围第32届台湾金曲奖最佳单曲制作人奖。2023年4月26日，周杰伦凭借该专辑入围第一届浪潮音乐大赏最佳男歌手的奖项，该专辑也入围了第一届浪潮音乐大赏最佳制作荣誉。",
        "//player.bilibili.com/player.html?isOutside=true&aid=215631694&bvid=BV1ua411p7iA&cid=765060141&p=1"),


    new Album("魔杰座", "周杰伦", "中国(台湾)", "2008", "67",
        ["龙战骑士", "给我一首歌的时间", "蛇舞", "花海", "魔术先生", "说好的幸福呢", "兰亭序", "流浪诗人", "时光机", "乔克叔叔", "稻香"],
        ["4:05", "4:12", "3:45", "4:24", "3:54", "4:28", "4:24", "3:53", "4:15", "4:02", "3:42"],
        11, "中文", "流行,民谣，乡村",
        "《魔杰座》是周杰伦的专辑，发布于2008年。这张专辑展示了周杰伦的多样音乐风格和创作才华。"),

    new Album("跨时代", "周杰伦", "中国(台湾)", "2010", "109",
        ["跨时代", "说了再见", "烟花易冷", "免费教学录影带", "好久不见", "雨下一整晚", "嘻哈空姐", "我落泪·情绪零碎", "爱疯头", "自导自演", "超人不会飞"],
        ["3:58", "3:55", "5:05", "3:26", "3:48", "5:19", "3:43", "3:58", "3:14", "3:56", "5:31"],
        11, "中文", "流行，摇滚",
        "《跨时代》是周杰伦的专辑，发布于2010年。这张专辑结合了流行和摇滚元素，展现了周杰伦的音乐创作"),

    new Album("纵横四海", "李荣浩", "中国(大陆)", "2022", "59",
        ["不说", "海藻", "你不懂我", "王牌冤家", "太坦白", "让世界陷入爱里", "两个人", "小黄人", "要我怎么办", "慢动作"],
        ["3:41", "3:24", "3:31", "3:58", "3:47", "3:52", "4:10", "3:39", "3:40", "3:57"],
        10, "中文", "流行",
        "《纵横四海》是李荣浩的专辑，发布于2022年。该专辑展示了李荣浩的音乐创作才华，融合了多种音乐元素，深受听众喜爱。《纵横四海》是李荣浩的第七张音乐专辑，共收录10首歌曲，发行于2022年12月21日，由李荣浩担任制作人。2022年，专辑同名歌曲《纵横四海》获得第29届东方风云榜“十大金曲奖”。",
        "//player.bilibili.com/player.html?isOutside=true&aid=690343377&bvid=BV1A24y117XF&cid=897254406&p=1"),

    new Album("I Was / I Am", "Noah Kahan", "美国", "2024", "159",
        ["Part of Me", "She Calls Me Back", "Everywhere, Everything", "Growing Sideways", "All My Love", "Orange Juice", "Strawberry Wine", "Your Needs, My Needs", "False Confidence", "Young Blood"],
        ["3:46", "3:44", "4:11", "4:20", "4:03", "3:35", "4:28", "3:49", "3:38", "3:56"],
        10, "英文", "民谣，流行，乡村",
        "《I Was / I Am》是Noah Kahan的专辑，发布于2024年。这张专辑融合了民谣、流行和乡村音乐元素，展示了Noah Kahan的音乐多样性和深情表演。"),

    new Album("无法长大", "赵雷", "中国(大陆)", "2017", "77",
        ["无法长大", "妈妈", "理想", "少年锦时", "南方姑娘", "画", "初夏的你", "未给姐姐递出的信", "你是我心里的一首歌", "吉姆餐厅"],
        ["5:18", "4:37", "4:19", "4:21", "5:07", "4:30", "4:25", "3:57", "4:32", "5:09"],
        10, "中文", "民谣，乡村",
        "《无法长大》是赵雷的专辑，发布于2017年。这张专辑包含了多首动人的民谣歌曲，展示了赵雷的音乐才华和情感表达。"),

    new Album("吉姆餐厅", "赵雷", "中国(大陆)", "2014", "104",
        ["吉姆餐厅", "南方姑娘", "三十岁的女人", "家乡", "鼓楼", "理想", "我们的时光", "再也不会去丽江", "少年锦时", "无法长大"],
        ["4:57", "4:55", "4:24", "5:02", "4:15", "4:44", "4:20", "3:33", "4:02", "4:28"],
        10, "中文", "民谣，乡村",
        "《吉姆餐厅》是赵雷的专辑，发布于2014年。这张专辑以民谣风格为主，展示了赵雷的音乐创作和独特风格。"),

    new Album("赵小雷", "赵雷", "中国(大陆)", "2011", "64",
        ["赵小雷", "画", "未给姐姐递出的信", "北京的冬天", "南方姑娘", "三十岁的女人", "再也不会去丽江", "理想", "少年锦时", "鼓楼", "家乡", "我们的时光", "无法长大"],
        ["3:54", "4:17", "4:10", "4:03", "5:12", "3:54", "4:18", "5:02", "3:51", "3:52", "5:05", "3:44", "4:30"],
        13, "中文", "民谣，乡村",
        "《赵小雷》是赵雷的专辑，发布于2011年。这张专辑展示了赵雷的音乐才华和深情表达，包含多首经典民谣歌曲。"),

    new Album("Suites A Violoncello Solo Senza Basso", "J. S. Bach, Claire Giardelli", "法国", "2013", "219",
        ["Suite No. 1 in G Major, BWV 1007: I. Prélude", "Suite No. 1 in G Major, BWV 1007: II. Allemande", "Suite No. 1 in G Major, BWV 1007: III. Courante", "Suite No. 1 in G Major, BWV 1007: IV. Sarabande", "Suite No. 1 in G Major, BWV 1007: V. Menuet I & II", "Suite No. 1 in G Major, BWV 1007: VI. Gigue", "Suite No. 2 in D Minor, BWV 1008: I. Prélude", "Suite No. 2 in D Minor, BWV 1008: II. Allemande", "Suite No. 2 in D Minor, BWV 1008: III. Courante", "Suite No. 2 in D Minor, BWV 1008: IV. Sarabande"],
        ["2:32", "3:12", "2:19", "2:25", "3:34", "1:44", "3:38", "2:56", "2:13", "2:32"],
        10, "英文", "古典",
        "《Suites A Violoncello Solo Senza Basso》是J. S. Bach创作的无伴奏大提琴组曲，由Claire Giardelli演奏，发布于2013年。这张专辑展示了巴赫的经典作品和Giardelli的精湛演奏。"),

    new Album("Home For The Holidays", "André Rieu & His Johann Strauss Orchestra", "其他", "2012", "119",
        ["Silent Night", "Deck The Halls", "O Come All Ye Faithful", "O Holy Night", "Jingle Bells", "White Christmas", "The Holy City", "Ave Maria", "Panis Angelicus", "Walking In The Air", "Angels We Have Heard On High", "The First Noël", "Winter Wonderland", "Feliz Navidad"],
        ["3:45", "2:34", "4:12", "3:56", "2:10", "3:34", "4:03", "2:58", "3:24", "4:01", "3:12", "4:01", "2:58", "3:30"],
        14, "英文", "古典",
        "《Home For The Holidays》是André Rieu和他的Johann Strauss Orchestra的专辑，发布于2012年。这张专辑包含了多首经典圣诞歌曲，展现了Rieu和乐团的卓越表演。"),

    new Album("公转自转", "王力宏", "中国(大陆)", "2017", "133",
        ["公转自转", "忘了时间的钟", "龙的传人", "唯一", "心跳", "另一个天堂", "梦醒时分", "爱错", "你不知道的事", "春雨里洗过的太阳"],
        ["4:15", "4:50", "3:36", "4:05", "3:58", "4:12", "4:23", "4:11", "4:34", "4:28"],
        10, "中文", "流行，爵士，嘻哈",
        "《公转自转》是王力宏的专辑，发布于2017年。这张专辑融合了流行、爵士和嘻哈元素，展示了王力宏的音乐多样性和创作才华。"),

    new Album("Battle Metal", "Turisas", "德国", "2004", "45", [],
        [], 12, "德文", "民谣，金属"),

    new Album("Italian Folk Metal", "Nanowar Of Steel", "其他", "2021", "146",
        ["La Polenta Taragnarock", "Uranus", "Norwegian Reggaeton", "Barbie, MILF Princess of the Twilight", "Armpits of Immortals", "Disco Metal", "And Then I Noticed That She Was a Gargoyle", "The Call of Cthulhu", "Raptus", "La Maledizione di Capitan Findus", "In The Sky", "Tooth Fairy", "L'Assedio di Porto Cervo", "Kurograd", "El Campo de Nabos", "Il Maestro Myiagi di Pino"],
        ["2:53", "3:43", "3:43", "4:15", "4:13", "3:38", "3:42", "3:59", "3:29", "2:46", "2:56", "3:26", "3:19", "3:50", "3:04", "2:59"],
        16, "英文", "摇滚，金属",
        "《Italian Folk Metal》是Nanowar Of Steel在2021年发行的一张专辑，融合了意大利民谣和金属元素，以其幽默和戏剧性的风格著称。专辑中包含了16首独特的歌曲，每首都具有不同的风格和主题。"),

    new Album("Split", "The Badge", "其他", "2024", "99",
        ["Blackout", "Electric", "Rainbows", "Tokyo Underground"],
        ["3:52", "3:47", "4:15", "3:33"],
        4, "日文", "摇滚，流行",
        "《Split》是The Badge在2024年发行的一张专辑，融合了摇滚和流行元素。这张专辑包含了4首歌曲，每首歌都展现了不同的情感和音乐风格。"),

    new Album("启示录", "邓紫棋", "中国(大陆)", "2022", "105",
        ["少年与海", "Hell", "只有我和你的地方", "你不是第一个离开的人", "不想回家", "冰河时代", "受难曲", "Gloria", "老人与海", "Find You", "离心力", "让世界暂停一分钟", "夜的尽头", "天空没有极限"],
        ["3:44", "4:08", "3:18", "3:20", "4:07", "3:31", "3:00", "4:05", "3:02", "4:16", "5:02", "3:53", "4:42", "4:40"],
        14, "中文", "流行，摇滚",
        "《启示录》是邓紫棋（G.E.M.）的专辑，发布于2022年。这张专辑分为“致天堂的信”和“来自天堂的信”两部分，展示了邓紫棋的音乐才华和深情表达。专辑包含了多首经典歌曲，展现了她在流行音乐和Mandopop领域的杰出表现。当多彩的生活失去了颜色，她的心该如何保持灿烂？当璀璨的世界变成一片废土，她又能在哪里重拾希望？她绝望地来到自己的尽头，才发现那是通往自由的一扇门。经过潜心闭关，G.E.M.邓紫棋终于带来2022年全新创作专辑《启示录》",
        "//player.bilibili.com/player.html?isOutside=true&aid=819258291&bvid=BV1rG4y177pP&cid=938526644&p=1"),

    new Album("CHIN UP!", "陈奕迅", "中国(大陆)", "2023", "69",
        ["英雄", "背对背拥抱", "在这角落唱情歌", "真相", "放", "你给我听好", "单车", "早开的晚霞", "床头灯", "独自等待"],
        ["4:11", "4:43", "3:56", "4:22", "4:08", "3:42", "4:35", "4:26", "4:09", "4:03"],
        10, "中文", "流行",
        "《CHIN UP!》是陈奕迅的一张专辑，发布于2022年。这张专辑融合了多种音乐元素，展示了陈奕迅的音乐才华和多样性，包含了多首深受欢迎的歌曲。《CHIN UP!》是陈奕迅于2023年10月27日发行的音乐专辑，共收录6首粤语歌曲和2首普通话歌曲，由陈奕迅、林家谦担任制作人。2023年7月1日，周耀辉凭借专辑收录曲《人啊人》获得第34届台湾金曲奖最佳作词人奖。",
        "//player.bilibili.com/player.html?isOutside=true&aid=407865498&bvid=BV1gG411y7bu&cid=1315649977&p=1")
]

let purchaseList = [];

function highLightIndicator(f, num) {
    if (num === 1) {
        if (f === false) {
            cur_idx_1--;
            if (cur_idx_1 === 0) {
                cur_idx_1 = 1;
            }
        } else {
            cur_idx_1++;
            if (cur_idx_1 === 5) {
                cur_idx_1 = 4;
            }
        }
        let name = "#indicator_1_"
        for(let i = 1 ; i <= 4 ; i ++){
            if( !(i === cur_idx_1) ){
                $(name + i).css("background-color","gray");
            }else{
                $(name + i).css("background-color","black");
            }
        }
    }else{
        if(f === false){
            cur_idx_2--;
            if(cur_idx_2 === 0){
                cur_idx_2 = 1;
            }
        }
        else{
            cur_idx_2++;
            if(cur_idx_2 === 5){
                cur_idx_2 = 4;
            }
        }
        let name = "#indicator_2_"
        for(let i = 1 ; i <= 4 ; i ++){
            if( !(i === cur_idx_2) ){
                $(name + i).css("background-color","gray");
            }else{
                $(name + i).css("background-color","black");
            }
        }
    }

}

function addToCart(code_){
    //从浏览器缓存中提取当前购物车清单
    let nowCartList = JSON.parse(localStorage.getItem("purchaseList"));
    let finished = false;
    for(let i = 0 ; i < nowCartList.length ; i ++){
        if(code_ === nowCartList[i].code){
            nowCartList[i].num++;
            finished  = true;
            break;
        }
    }
    if(!finished){
        nowCartList.push(new purchaseItem(code_,1));
    }

    //保存在浏览器缓存中，并提示
    localStorage.setItem("purchaseList",JSON.stringify(nowCartList));
    window.alert("专辑《" + Data[parseInt(code_) - 1].name + "》 : 已成功加入购物车")
}

function searchAlbum(str){
    if(str.length === 0) return;
    for(let i = 0 ; i < Data.length ; i ++){
        if(Data[i].name.indexOf(str) !== -1){
            window.location = "details.html?code=" + (i+1);
            return;
        }
    }
    window.alert("未在专辑库中找到 ： " + str);
}

$(document).ready(function(){
    localStorage.removeItem('Data');

    for(let i = 0 ; i < Data.length ; i ++){
        Data[i].code = i+1;
    }

    localStorage.setItem('Data', JSON.stringify(Data));
    if(localStorage.getItem('purchaseList') == null){
        localStorage.setItem('purchaseList', JSON.stringify(purchaseList));
    }

    $("#search-button").on("click", function(){
        searchAlbum($("#search-input").val());
    })
    $('#search-input').on('keypress', function(event) {
        console.log(event.which);
        event.preventDefault();
        if (event.which === 13) {
            searchAlbum($(this).val());
        }
    });

    $("#indicator_1_1").css("background-color","black");
    $("#indicator_2_1").css("background-color","black");

    //轮播图移动事件
    $("#arrows-left").click(function (){
        let MAX_LEFT = 0;
        let next_step = Math.min(slider_len_1 + slider_gap*273,MAX_LEFT);
        for(let i = 1 ; i <= 10 ; i ++){
            $("#item_1_" + i).animate({position:"relative",left:next_step});
        }
        slider_len_1 = next_step;
        highLightIndicator(false,1);
    })
    $("#arrows-right").click(function (){
        let MIN_LEFT = -273*(total_items - 5);
        let next_step = Math.max(slider_len_1 - slider_gap*273,MIN_LEFT);
        for(let i = 1 ; i <= 10 ; i ++){
            $("#item_1_" + i).animate({position:"relative",left:next_step});
        }
        slider_len_1 = next_step;
        highLightIndicator(true,1);
    })
    $("#arrows-left-2").click(function (){
        let MAX_LEFT = 0;
        let next_step = Math.min(slider_len_2 + slider_gap*273,MAX_LEFT);
        for(let i = 1 ; i <= 10 ; i ++){
            $("#item_2_" + i).animate({position:"relative",left:next_step});
        }
        slider_len_2 = next_step;
        highLightIndicator(false,2);
    })
    $("#arrows-right-2").click(function (){
        let MIN_LEFT= -273*(total_items - 5);
        let next_step = Math.max(slider_len_2 - slider_gap*273,MIN_LEFT);
        for(let i = 1 ; i <= 10 ; i ++){
            $("#item_2_" + i).animate({position:"relative",left:next_step});
        }
        slider_len_2 = next_step;
        highLightIndicator(true,2);
    })

    //分类栏触发动画
    for(let i = 1 ; i <= 12 ; i ++){
        $("#bar-item" + i + " img").mouseenter(function (){
            var src = $(this).attr("src");
            if (!src.includes("-active")) {
                $(this).stop().attr("src", src.replace(".png","-active.png"));
            }
            $(this).stop().animate({
                width:"305px",
                height:"165px"
            },"0.5s")
        })
        $("#bar-item" + i + " img").mouseleave(function (){
            var src = $(this).attr("src");
            if (src.includes("-active")) {
                $(this).stop().attr("src", src.replace("-active.png",".png"));
            }
            $(this).stop().animate({
                width:"300px",
                height:"160px"
            },"0.5s")
        })

    }
})
