#客户端编码为UTF8
SET NAMES UTF8;
#丢弃数据库hd，如果存在
DROP DATABASE IF EXISTS hd;
#创建数据库hd,设置编码为UTF8
CREATE DATABASE hd CHARSET=UTF8;
#进入数据库
USE hd;

/**用户信息**/
CREATE TABLE hd_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64)
);

/**购物车条目**/
CREATE TABLE hd_shoppingcart_item(
  iid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,      #用户编号
  product_id INT,   #商品编号
  count INT,        #购买数量
  is_checked BOOLEAN #是否已勾选，确定购买
);

/****首页轮播图片****/
CREATE TABLE hd_index_lunbo(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  href VARCHAR(128)
);

/****首页新闻信息****/
CREATE TABLE hd_index_newslist(
  xid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  showtime VARCHAR(64),
  showtitle VARCHAR(64),
  href VARCHAR(128)
);

/****首页影视动态****/
CREATE TABLE hd_index_yingshi(
  yid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(200),
  showtitle1 VARCHAR(128),
  showtitle2 VARCHAR(128),
  showtitle3 VARCHAR(128),
  href VARCHAR(128)
);

/****商品页轮播图片****/
CREATE TABLE hd_product_lunbo(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  href VARCHAR(128)
);

/****商品页商品信息****/
CREATE TABLE hd_product_list(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(200),
  content VARCHAR(128),
  price VARCHAR(128),
  img2 VARCHAR(128),
  href VARCHAR(128)
);


/*******************/
/******数据导入******/
/*******************/

/**用户信息**/
INSERT INTO hd_user VALUES
(NULL, 'dingding', '123456', 'ding@qq.com'),
(NULL, 'dangdang', '123456', 'dang@qq.com'),
(NULL, 'doudou', '123456', 'dou@qq.com'),
(NULL, 'yaya', '123456', 'ya@qq.com');

/****首页轮播广告****/
INSERT INTO hd_index_lunbo VALUES
(NULL, 'img/shouye/banner1.jpg','轮播广告商品1','productlist.htm'),
(NULL, 'img/shouye/banner2.jpg','轮播广告商品2','productlist.htm'),
(NULL, 'img/shouye/banner3.jpg','轮播广告商品3','productlist.htm'),
(NULL, 'img/shouye/banner4.jpg','轮播广告商品4','productlist.htm'),
(NULL, 'img/shouye/banner5.jpg','轮播广告商品4','productlist.htm');


/****商品页轮播广告****/
INSERT INTO hd_product_lunbo VALUES
(NULL, 'img/products/20180824102155907.jpg','轮播广告商品1','productlist.htm'),
(NULL, 'img/products/jq11.png','轮播广告商品2','productlist.htm'),
(NULL, 'img/products/20180707154555411.jpg','轮播广告商品3','productlist.htm'),
(NULL, 'img/products/o1cn011a7ejz2q5dqvu27_!!731853283.jpg','轮播广告商品4','productlist.htm');


/****首页新闻信息****/
INSERT INTO hd_index_newslist VALUES
(NULL,'横店影视城旺铺招租公告','12-13','横店影视城旺铺招租公告','index.html'),
(NULL,'艾蒂亚大会专访丨殷旭：5年后，横店游客3000万','08-01','艾蒂亚大会专访丨殷旭：5年后，横店……','index.html'),
(NULL,'少儿仙侠剧《十二花仙》高燃开机， “不老男神”关礼杰倾情助阵','08-13','少儿仙侠剧《十二花仙》高燃开机， ……','index.html'),
(NULL,'横店影视城助力东阳市创建全国文明城市','08-16','横店影视城助力东阳市创建全国文明城……','index.html'),
(NULL,'文旅融合”，横店发展之道','07-18','文旅融合”，横店发展之道','index.html'),
(NULL,'横店马拉松再次入选《浙江省重点培育品牌体育赛事名录库（2018年）》','07-12','横店马拉松再次入选《浙江省重点培育……','index.html'),
(NULL,'首届“星空奖”，横店影视城获“最受游客欢迎主题公园”','07-11','首届“星空奖”，横店影视城获“最受……','index.html');

/****商品页商品信息****/
INSERT INTO hd_product_list VALUES
(NULL,'img/products/tb2t9qjv7kwbunjy1zjxxcoypxa-731853283.jpg','两点联票','门市价：￥340元<br>两景点联票（不含梦幻谷）<br>门票两天有效,身份证检票(一人一证)','预付价:￥260元','img/ico/buy.jpg','productlist.htm'),
(NULL,'img/products/20180629104905529.jpg','秦王宫景区','以咸阳宫为原型，黄尘古道，金戈铁马，燕赵建筑，秦汉文化，在秦王宫得以真实再现；五步一楼，十步一阁...','预付价:￥150元','img/ico/buy.jpg','productlist.htm'),
(NULL,'img/products/tb27rtullywbunksmfpxxxguvxa-731853283.jpg','清明上河图景区','以北宋著名画家张择端的巨作《清明上河图》为蓝本，结合北宋时期的民俗、民风及宋时的古建特色，建造而成的影视基地','预付价:￥145元','img/ico/buy.jpg','productlist.htm'),
(NULL,'img/products/20171013104418674.jpg','五点联票','费用包含：任选5大景点门票1套。<br> 超值赠送：大智禅寺景点门票。<br>适合行程：2日游。','预付价:￥435元','img/ico/buy.jpg','productlist.htm'),
(NULL,'img/products/20180629174953510.jpg','明清宫苑景区','按北京故宫1：1比例仿建，是横店影视城目前最大的影视基地，荟萃了京城宫殿、皇家园林、王府衙门、胡同民宅等场景','预付价:￥155元','img/ico/buy.jpg','productlist.htm'),
(NULL,'img/products/20180629174945776.jpg','广州街香港街景区','为拍摄历史巨片《鸦片战争》而建，艺术地再现了1840年前后的羊城旧貌和香江风韵，是中国好莱坞横店影视城发源地','预付价:￥110元','img/ico/buy.jpg','productlist.htm'),
(NULL,'img/products/tb2tj7zyicybunksnavxxcmsvxa_!!731853283.jpg','梦幻谷景区','包括梦文化村、儿童梦工厂、以火山爆发、暴雨山洪等各种自然现象及自然风貌展示为主','预付价:￥265元','img/ico/buy.jpg','productlist.htm'),
(NULL,'img/products/20180629175252432.jpg','三大点+梦幻谷赠明星套餐','门票包含：任选3景点+梦幻谷门票1套','预付价:￥500元','img/ico/buy.jpg','productlist.htm'),
(NULL,'img/products/20180701135940229.jpg','广州街香港街景区（夜游）','住影视主题民宿，泡民国风情酒吧<br>看激情演艺大秀《香江夜艳》<br>原价120元，现价40元起','预付价:￥70元','img/ico/buy.jpg','productlist.htm');



/****首页影视动态****/
INSERT INTO hd_index_yingshi VALUES
(NULL,'img/shouye/201808291615336817.jpg','《香蜜沉沉烬如霜》狗粮告急 杨紫为救邓伦甘愿不辨颜色','《香蜜沉沉烬如霜》狗粮告急 杨紫为救邓伦甘愿不辨颜色','新浪娱乐报道由完美世界影视携手幸福蓝海，与时代众乐、鲲池影业、重庆盛美联合出品，完美世界影视刘宁工作室承制，改编自知名网络作家“电线”同名小说的唯美古装神话爱情巨制《香蜜沉沉烬如霜》（以下简称《香蜜》）正在江苏卫视幸福剧场热播中。近几日，随着高潮剧情来临，…','查看详情','index.html'),
(NULL,'img/shouye/201808311112374168.jpg','《如懿传》风刀霜剑 群芳争艳危机四伏','《如懿传》风刀霜剑 群芳争艳危机四伏','在横店影视城取景拍摄的清宫传奇巨制《如懿传》自开播以来，口碑和播放量持续走高中。在第1-6集的背景交代、情绪铺垫和人物陆续登场后，第7集进入高能剧情：海兰被污蔑偷窃红箩炭，白蕊姬暗指被如懿用白花丹毁容，如懿因提到皇帝生母被冷待，高晞月费尽心思争夺大阿哥未果，莲…','查看详情','index.html'),
(NULL,'img/shouye/201808291408340395.jpg','汪铎《媚者无疆》化身病娇公子 不走花路走“刀”路','汪铎《媚者无疆》化身病娇公子 不走花路走“刀”路',' 在横店影视城拍摄完成的超级网剧《媚者无疆》正在优酷热播。该剧凭借精良的制作、全员演技在线的演员阵容，已然成为18年暑期档国产网剧新爆款。此次汪铎所扮演的公子一角，凭借精湛演技和虐心的人物关系也被网友纷纷Pick为“病娇公子”。“萤火虫”CP开虐公子不走花路走“刀”…','查看详情','index.html'),
(NULL,'img/shouye/201808290902007672.jpg','《延禧攻略》庆功宴重演剧情 “傅璎”CP终于圆满啦！','《延禧攻略》庆功宴重演剧情 “傅璎”CP终于圆满啦！','新浪娱乐报道傅恒亲口对璎珞说下辈子换她守候，明玉和海兰察“完婚”，就连弘昼、袁春望都要“改邪归正”，《延禧攻略》终于有了真正的HE（happy ending幸福结局）——其实这只是主创们在庆功宴上的即兴发挥，依依不舍告别剧集的主演们都说想演续集。《延禧攻略》VIP大结局前晚…','查看详情','index.html');

