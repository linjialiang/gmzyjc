const path = {
  main: '/gmzyjc/ok/lzcx/',
};

const sidebar = [
  { text: '编者与编者的话', link: `${path.main}lzcx00` },
  { text: '导言', link: `${path.main}daoyan` },
  {
    text: '第一章 概述',
    collapsed: true,
    items: [
      { text: '概述', link: `${path.main}lzcx01` },
      {
        text: '第一节 本学科定义与辨证方法的概念',
        collapsed: true,
        items: [
          { text: '概述', link: `${path.main}lzcx01-0.1.0.0.0` },
          { text: '一、本学科定义', link: `${path.main}lzcx01-0.1.1.0.0` },
          { text: '二、辨证方法的概念', link: `${path.main}lzcx01-0.1.2.0.0` },
        ],
      },
      {
        text: '第二节 中医学思维形式及其特征',
        collapsed: true,
        items: [
          { text: '概述', link: `${path.main}lzcx01-0.2.0.0.0` },
          { text: '一、中医学逻辑思维', link: `${path.main}lzcx01-0.2.1.0.0` },
          { text: '二、中医学直觉思维', link: `${path.main}lzcx01-0.2.2.0.0` },
          {
            text: '三、中医学思维特征',
            collapsed: true,
            items: [
              { text: '概述', link: `${path.main}lzcx01-0.2.3.0.0` },
              { text: '1. 从整体联系、活体功能方面认识病证', link: `${path.main}lzcx01-0.2.3.1.0` },
              { text: '2. 从动态观念、主从关系方面认识病证', link: `${path.main}lzcx01-0.2.3.2.0` },
              { text: '3. 从具体分析个体特征着眼认识病证', link: `${path.main}lzcx01-0.2.3.3.0` },
            ],
          },
        ],
      },
    ],
  },
  {
    text: '第二章 临证须知',
    collapsed: true,
    items: [
      { text: '概述', link: `${path.main}lzcx02` },
      { text: '第一节 自觉加强医德修养', link: `${path.main}lzcx02-0.1.0.0.0` },
      { text: '第二节 勤学苦练临证基本功', link: `${path.main}lzcx02-0.2.0.0.0` },
    ],
  },
  {
    text: '第三章 临证程序',
    collapsed: true,
    items: [
      { text: '概述', link: `${path.main}lzcx03` },
      { text: '第一节 诊察', link: `${path.main}lzcx03-0.1.0.0.0` },
      { text: '第二节 辨证', link: `${path.main}lzcx03-0.2.0.0.0` },
      { text: '第三节 论治', link: `${path.main}lzcx03-0.3.0.0.0` },
    ],
  },
  {
    text: '第四章辨证思维方法',
    collapsed: true,
    items: [
      { text: '概述', link: `${path.main}lzcx04` },
      { text: '第一节常用的辨证方法', link: `${path.main}lzcx04-0.1.0.0.0` },
      { text: '第二节常用的辨证思维方法', link: `${path.main}lzcx04-0.2.0.0.0` },
      {
        text: '第三节古今名医辨证思维范例',
        collapsed: true,
        items: [
          { text: '概述', link: `${path.main}lzcx04-0.3.0.0.0` },
          { text: '一、观索水不欲咽，辨寒盛格阳', link: `${path.main}lzcx04-0.3.1.0.0` },
          { text: '二、察色切脉审证、寻求病因病机', link: `${path.main}lzcx04-0.3.2.0.0` },
          { text: '三、辨脉定位求因', link: `${path.main}lzcx04-0.3.3.0.0` },
          { text: '四、以脉象求病因', link: `${path.main}lzcx04-0.3.4.0.0` },
          { text: '五、从脉象、呼吸方面辨战汗与脱证', link: `${path.main}lzcx04-0.3.5.0.0` },
          { text: '六、辨证与相体互参', link: `${path.main}lzcx04-0.3.6.0.0` },
          { text: '七、脉证与人事合参', link: `${path.main}lzcx04-0.3.7.0.0` },
          { text: '八、证与脉反宜询问病因', link: `${path.main}lzcx04-0.3.8.0.0` },
          { text: '九、形症俱实而无脉细辨热极反伏', link: `${path.main}lzcx04-0.3.9.0.0` },
          { text: '十、凭脉辨证论治', link: `${path.main}lzcx04-0.3.10.0.0` },
          { text: '十一、舍时从证', link: `${path.main}lzcx04-0.3.11.0.0` },
          { text: '十二、舍脉从舌象与证候', link: `${path.main}lzcx04-0.3.12.0.0` },
          { text: '十三、从脉证、病势上辨阴阳', link: `${path.main}lzcx04-0.3.13.0.0` },
          { text: '十四、顺逆交杂、谨导病机', link: `${path.main}lzcx04-0.3.14.0.0` },
          { text: '十五、寻求病因，锲而不舍', link: `${path.main}lzcx04-0.3.15.0.0` },
          { text: '十六、外感内伤疑似之间宜细辨脉象', link: `${path.main}lzcx04-0.3.16.0.0` },
          { text: '十七、脉证不符、细辨其因', link: `${path.main}lzcx04-0.3.17.0.0` },
          { text: '十八、太阳中风谵语', link: `${path.main}lzcx04-0.3.18.0.0` },
          { text: '十九、中风先辨中腑与中脏', link: `${path.main}lzcx04-0.3.19.0.0` },
          { text: '二十、怪病从痰辨', link: `${path.main}lzcx04-0.3.20.0.0` },
          { text: '二十一、因情志致病的辨证', link: `${path.main}lzcx04-0.3.21.0.0` },
          { text: '二十二、勿忘问内科病女患者的经期', link: `${path.main}lzcx04-0.3.22.0.0` },
          { text: '二十三、不宜凭西医病名选取常用方', link: `${path.main}lzcx04-0.3.23.0.0` },
          { text: '二十四、误治生弊端，先以药纠偏', link: `${path.main}lzcx04-0.3.24.0.0` },
          { text: '二十五、论治宜先后有序', link: `${path.main}lzcx04-0.3.25.0.0` },
        ],
      },
    ],
  },
  {
    text: '第五章 临证失误的原因',
    collapsed: true,
    items: [
      { text: '概述', link: `${path.main}lzcx05` },
      { text: '第一节 辨证失误的思维原因', link: `${path.main}lzcx05-0.1.0.0.0` },
      {
        text: '第二节 诊治失误原因举例',
        collapsed: true,
        items: [
          { text: '概述', link: `${path.main}lzcx05-0.2.0.0.0` },
          { text: '一、不重视脉诊', link: `${path.main}lzcx05-0.2.1.0.0` },
          { text: '二、不先明阴阳', link: `${path.main}lzcx05-0.2.2.0.0` },
          { text: '三、不细辨真假寒热', link: `${path.main}lzcx05-0.2.3.0.0` },
          { text: '四、不明虚实挟杂', link: `${path.main}lzcx05-0.2.4.0.0` },
          { text: '五、不识标本', link: `${path.main}lzcx05-0.2.5.0.0` },
          { text: '六、不熟悉经络', link: `${path.main}lzcx05-0.2.6.0.0` },
          { text: '七、不时时留心病势', link: `${path.main}lzcx05-0.2.7.0.0` },
          { text: '八、不懂装懂', link: `${path.main}lzcx05-0.2.8.0.0` },
          { text: '九、用药太过', link: `${path.main}lzcx05-0.2.9.0.0` },
          { text: '十、用药不及', link: `${path.main}lzcx05-0.2.10.0.0` },
          { text: '十一、用药中病不止', link: `${path.main}lzcx05-0.2.11.0.0` },
          { text: '十二、方证不符', link: `${path.main}lzcx05-0.2.12.0.0` },
          { text: '十三、用药不达病所', link: `${path.main}lzcx05-0.2.13.0.0` },
          { text: '十四、用药轻重与病情轻重不相应', link: `${path.main}lzcx05-0.2.14.0.0` },
          { text: '十五、用药不结合时宜', link: `${path.main}lzcx05-0.2.15.0.0` },
          { text: '十六、不善守法守方', link: `${path.main}lzcx05-0.2.16.0.0` },
        ],
      },
    ],
  },
  {
    text: '第六章 中医病案书写与总结',
    collapsed: true,
    items: [
      { text: '概述', link: `${path.main}lzcx06` },
      {
        text: '第一节 中医病案书写',
        collapsed: true,
        items: [
          { text: '概述', link: `${path.main}lzcx06-0.1.0.0.0` },
          { text: '一、病案的内容', link: `${path.main}lzcx06-0.1.1.0.0` },
          { text: '二、病案书写要求', link: `${path.main}lzcx06-0.1.2.0.0` },
          { text: '三、病案格式', link: `${path.main}lzcx06-0.1.3.0.0` },
        ],
      },
      {
        text: '第二节 中医病案总结',
        collapsed: true,
        items: [
          { text: '概述', link: `${path.main}lzcx06-0.2.0.0.0` },
          { text: '一、病案收集的标准', link: `${path.main}lzcx06-0.2.1.0.0` },
          { text: '二、病案总结的内容', link: `${path.main}lzcx06-0.2.2.0.0` },
          { text: '三、病案总结的方法', link: `${path.main}lzcx06-0.2.3.0.0` },
        ],
      },
    ],
  },
  { text: '电子版录入与校对', link: `${path.main}dzb` },
];

export { sidebar as lzcx };
