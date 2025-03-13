const path = {
  main: '/gmzyjc/ok/gl/',
};

const sidebar = [
  { text: '编者', link: `${path.main}gl00.0-0.0.1.0.0` },
  { text: '导言', link: `${path.main}daoyan` },
  { text: '编者的话', link: `${path.main}gl00.0-0.0.2.0.0` },
  {
    text: '绪  论',
    collapsed: true,
    items: [
      { text: '概述', link: `${path.main}gl00.1` },
      { text: '第一节  中医学理论体系的形成和发展', link: `${path.main}gl00.1-0.1.0.0.0` },
      {
        text: '第二节  中医学的唯物辩证观',
        collapsed: true,
        items: [
          { text: '概述', link: `${path.main}gl00.1-0.2.0.0.0` },
          {
            text: '一、中医学的唯物观',
            collapsed: true,
            items: [
              { text: '概述', link: `${path.main}gl00.1-0.2.1.0.0` },
              { text: '（一） 对生命认识的唯物观', link: `${path.main}gl00.1-0.2.1.1.0` },
              { text: '（二） 形神统一的唯物观', link: `${path.main}gl00.1-0.2.1.2.0` },
              { text: '（三） 疾病可知、可防、可治的唯物观', link: `${path.main}gl00.1-0.2.1.3.0` },
            ],
          },
          { text: '二、中医学的辩证观', link: `${path.main}gl00.1-0.2.2.0.0` },
        ],
      },
      {
        text: '第三节  中医学的基本特点',
        collapsed: true,
        items: [
          { text: '概述', link: `${path.main}gl00.1-0.3.0.0.0` },
          {
            text: '一、整体观',
            collapsed: true,
            items: [
              { text: '概述', link: `${path.main}gl00.1-0.3.1.0.0` },
              { text: '（一）  人体是一个有机整体', link: `${path.main}gl00.1-0.3.1.1.0` },
              { text: '（二）人与自然界的统一性', link: `${path.main}gl00.1-0.3.1.2.0` },
            ],
          },
          { text: '二、辨证论治', link: `${path.main}gl00.1-0.3.2.0.0` },
        ],
      },
    ],
  },
  {
    text: '第一章  阴阳五行学说',
    collapsed: true,
    items: [
      { text: '概述', link: `${path.main}gl01` },
      {
        text: '第一节  阴阳学说',
        collapsed: true,
        items: [
          { text: '概述', link: `${path.main}gl01-0.1.0.0.0` },
          { text: '一、阴阳的基本属性', link: `${path.main}gl01-0.1.1.0.0` },
          { text: '二、阴阳的相互关系', link: `${path.main}gl01-0.1.2.0.0` },
          { text: '三、阴阳学说在中医学中的应用', link: `${path.main}gl01-0.1.3.0.0` },
        ],
      },
      {
        text: '第二节  五行学说',
        collapsed: true,
        items: [
          { text: '概述', link: `${path.main}gl01-0.2.0.0.0` },
          {
            text: '一、五行学说的基本内容',
            collapsed: true,
            items: [
              { text: '概述', link: `${path.main}gl01-0.2.1.0.0` },
              { text: '（一） 五行的基本属性', link: `${path.main}gl01-0.2.1.1.0` },
              { text: '（二）五行的相互关系', link: `${path.main}gl01-0.2.1.2.0` },
            ],
          },
          { text: '二、五行学说在中医学中的应用', link: `${path.main}gl01-0.2.2.0.0` },
        ],
      },
      { text: '第三节  阴阳学说和五行学说的关系', link: `${path.main}gl01-0.3.0.0.0` },
    ],
  },
  {
    text: '第二章  藏象',
    collapsed: true,
    items: [
      { text: '概述', link: `${path.main}gl02` },
      { text: '一、藏象的概念', link: `${path.main}gl02-0.0.1.0.0` },
      { text: '二、藏象学说的主要内容', link: `${path.main}gl02-0.0.2.0.0` },
      { text: '三、藏象学说的形成', link: `${path.main}gl02-0.0.3.0.0` },
      { text: '四、藏象学说的特点', link: `${path.main}gl02-0.0.4.0.0` },
      {
        text: '第一节  脏腑',
        collapsed: true,
        items: [
          { text: '概述', link: `${path.main}gl02-0.1.0.0.0` },
          {
            text: '一、五脏六腑',
            collapsed: true,
            items: [
              { text: '概述', link: `${path.main}gl02-0.1.1.0.0` },
              { text: '（一）心、小肠（附心胞络）', link: `${path.main}gl02-0.1.1.1.0` },
              { text: '（二）肺、大肠', link: `${path.main}gl02-0.1.1.2.0` },
              { text: '（三）脾、胃', link: `${path.main}gl02-0.1.1.3.0` },
              { text: '（四） 肝、胆', link: `${path.main}gl02-0.1.1.4.0` },
              { text: '（五）肾、膀胱（附命门）', link: `${path.main}gl02-0.1.1.5.0` },
              { text: '（六）三焦', link: `${path.main}gl02-0.1.1.6.0` },
            ],
          },
          { text: '二、五脏之间的相互关系', link: `${path.main}gl02-0.1.2.0.0` },
          { text: '三、六腑之间的相互关系', link: `${path.main}gl02-0.1.3.0.0` },
          { text: '四、奇恒之腑', link: `${path.main}gl02-0.1.4.0.0` },
        ],
      },
      {
        text: '第二节  精、气、血、津液',
        collapsed: true,
        items: [
          { text: '概述', link: `${path.main}gl02-0.2.0.0.0` },
          { text: '一、气', link: `${path.main}gl02-0.2.1.0.0` },
          {
            text: '二、血',
            collapsed: true,
            items: [
              { text: '概述', link: `${path.main}gl02-0.2.2.0.0` },
              { text: '（一）血的生成', link: `${path.main}gl02-0.2.3.0.0` },
              { text: '（二）血的功能', link: `${path.main}gl02-0.2.4.0.0` },
              { text: '（三）血的运行', link: `${path.main}gl02-0.2.5.0.0` },
            ],
          },
          { text: '三、津液', link: `${path.main}gl02-0.2.6.0.0` },
          { text: '四、气血津液之间的相互关系', link: `${path.main}gl02-0.2.7.0.0` },
        ],
      },
    ],
  },
  {
    text: '第三章  经络',
    collapsed: true,
    items: [
      { text: '概述', link: `${path.main}gl03` },
      { text: '第一节 经络与经络系统的组成', link: `${path.main}gl03-0.1.0.0.0` },
      {
        text: '第二节  十二经脉',
        collapsed: true,
        items: [
          { text: '概述', link: `${path.main}gl03-0.2.0.0.0` },
          { text: '一、十二经脉的命名', link: `${path.main}gl03-0.2.1.0.0` },
          { text: '二、十二经脉的循行走向和交接规律', link: `${path.main}gl03-0.2.2.0.0` },
          { text: '三、十二经脉的表里关系', link: `${path.main}gl03-0.2.3.0.0` },
          { text: '四、十二经脉气血流注次序', link: `${path.main}gl03-0.2.4.0.0` },
          { text: '五、十二经脉的循行部位', link: `${path.main}gl03-0.2.5.0.0` },
          { text: '[附]《灵枢·经脉》十二经脉原文', link: `${path.main}gl03-0.2.6.0.0` },
        ],
      },
      { text: '第三节  奇经八脉', link: `${path.main}gl03-0.3.0.0.0` },
      { text: '第四节  十二经别', link: `${path.main}gl03-0.4.0.0.0` },
      { text: '第五节  十五别络', link: `${path.main}gl03-0.5.0.0.0` },
      { text: '第六节  十二经筋', link: `${path.main}gl03-0.6.0.0.0` },
      { text: '第七节  皮部', link: `${path.main}gl03-0.7.0.0.0` },
      { text: '第八节  经络系统的作用', link: `${path.main}gl03-0.8.0.0.0` },
      {
        text: '第九节  经络学说的临床应用',
        collapsed: true,
        items: [
          { text: '概述', link: `${path.main}gl03-0.9.0.0.0` },
          { text: '一、指导临床辨证', link: `${path.main}gl03-0.9.1.0.0` },
          { text: '〔附〕《内经》有关经络病证的原文（仅供临床辨证参考）', link: `${path.main}gl03-0.9.2.0.0` },
          { text: '二、指导临床治疗', link: `${path.main}gl03-0.9.3.0.0` },
        ],
      },
    ],
  },
  {
    text: '第四章  病因与病机',
    collapsed: true,
    items: [
      { text: '概述', link: `${path.main}gl04` },
      {
        text: '第一节  病因',
        collapsed: true,
        items: [
          { text: '概述', link: `${path.main}gl04-0.1.0.0.0` },
          {
            text: '一、六淫',
            collapsed: true,
            items: [
              { text: '概述', link: `${path.main}gl04-0.1.1.0.0` },
              { text: '（一）风', link: `${path.main}gl04-0.1.1.1.0` },
              { text: '（二）寒', link: `${path.main}gl04-0.1.1.2.0` },
              { text: '（三）暑', link: `${path.main}gl04-0.1.1.3.0` },
              { text: '（四）湿', link: `${path.main}gl04-0.1.1.4.0` },
              { text: '（五）燥', link: `${path.main}gl04-0.1.1.5.0` },
              { text: '（六）火', link: `${path.main}gl04-0.1.1.6.0` },
            ],
          },
          { text: '二、疫疠', link: `${path.main}gl04-0.1.2.0.0` },
          { text: '三、情志', link: `${path.main}gl04-0.1.3.0.0` },
          { text: '四、饮食、劳倦', link: `${path.main}gl04-0.1.4.0.0` },
          { text: '五、外伤及虫兽伤害', link: `${path.main}gl04-0.1.5.0.0` },
          { text: '六、寄生虫', link: `${path.main}gl04-0.1.6.0.0` },
          { text: '七、痰饮、瘀血', link: `${path.main}gl04-0.1.7.0.0` },
        ],
      },
      { text: '第二节  病机', link: `${path.main}gl04-0.2.0.0.0` },
    ],
  },
  {
    text: '第五章  诊法',
    collapsed: true,
    items: [
      { text: '概述', link: `${path.main}gl05` },
      {
        text: '第一节  望诊',
        collapsed: true,
        items: [
          { text: '概述', link: `${path.main}gl05-0.1.0.0.0` },
          { text: '一、望神', link: `${path.main}gl05-0.1.1.0.0` },
          { text: '二、望面', link: `${path.main}gl05-0.1.2.0.0` },
          { text: '三、望目', link: `${path.main}gl05-0.1.3.0.0` },
          { text: '四、望舌', link: `${path.main}gl05-0.1.4.0.0` },
          { text: '五、望形体姿态', link: `${path.main}gl05-0.1.5.0.0` },
          { text: '六、望排泄物', link: `${path.main}gl05-0.1.6.0.0` },
          { text: '七、望头、髮、五窍', link: `${path.main}gl05-0.1.7.0.0` },
          { text: '八、望皮肤', link: `${path.main}gl05-0.1.8.0.0` },
          { text: '九、望小儿指纹', link: `${path.main}gl05-0.1.9.0.0` },
        ],
      },
      {
        text: '第二节  闻诊',
        collapsed: true,
        items: [
          { text: '概述', link: `${path.main}gl05-0.2.0.0.0` },
          { text: '一、听声音', link: `${path.main}gl05-0.2.1.0.0` },
          { text: '二、嗅气味', link: `${path.main}gl05-0.2.2.0.0` },
        ],
      },
      {
        text: '第三节  问诊',
        collapsed: true,
        items: [
          { text: '概述', link: `${path.main}gl05-0.3.0.0.0` },
          { text: '一、问一般情况', link: `${path.main}gl05-0.3.1.0.0` },
          {
            text: '二、问现在病情',
            collapsed: true,
            items: [
              { text: '概述', link: `${path.main}gl05-0.3.2.0.0` },
              { text: '（一）问寒热', link: `${path.main}gl05-0.3.2.1.0` },
              { text: '（二）  问汗', link: `${path.main}gl05-0.3.2.2.0` },
              { text: '（三）问疼痛', link: `${path.main}gl05-0.3.2.3.0` },
              { text: '（四）问饮食', link: `${path.main}gl05-0.3.2.4.0` },
              { text: '（五）问二便', link: `${path.main}gl05-0.3.2.5.0` },
              { text: '（六）问睡眠', link: `${path.main}gl05-0.3.2.6.0` },
              { text: '（七）问经带胎产', link: `${path.main}gl05-0.3.2.7.0` },
              { text: '（八）问小儿', link: `${path.main}gl05-0.3.2.8.0` },
            ],
          },
        ],
      },
      {
        text: '第四节  切诊',
        collapsed: true,
        items: [
          { text: '概述', link: `${path.main}gl05-0.4.0.0.0` },
          { text: '一、脉诊', link: `${path.main}gl05-0.4.1.0.0` },
          { text: '二、按诊', link: `${path.main}gl05-0.4.2.0.0` },
        ],
      },
    ],
  },
  {
    text: '第六章 辨证',
    collapsed: true,
    items: [
      { text: '概述', link: `${path.main}gl06` },
      {
        text: '第一节八纲辨证',
        collapsed: true,
        items: [
          { text: '概述', link: `${path.main}gl06-0.1.0.0.0` },
          { text: '一、八纲辨证的基本内容', link: `${path.main}gl06-0.1.1.0.0` },
          { text: '二、八纲之间的相互关系', link: `${path.main}gl06-0.1.2.0.0` },
        ],
      },
      { text: '第二节  气血津液辨证', link: `${path.main}gl06-0.2.0.0.0` },
      { text: '第三节  脏腑辨证', link: `${path.main}gl06-0.3.0.0.0` },
      { text: '第四节   六经辨证', link: `${path.main}gl06-0.4.0.0.0` },
      { text: '第五节  卫气营血辨证', link: `${path.main}gl06-0.5.0.0.0` },
      { text: '第六节  三焦辨证', link: `${path.main}gl06-0.6.0.0.0` },
      { text: '第七节  经络辨证', link: `${path.main}gl06-0.7.0.0.0` },
    ],
  },

  {
    text: '第七章 治则与治法',
    collapsed: true,
    items: [
      { text: '概述', link: `${path.main}gl07` },
      {
        text: '第一节 防治原则',
        collapsed: true,
        items: [
          { text: '概述', link: `${path.main}gl07-0.1.0.0.0` },
          { text: '一、预防原则', link: `${path.main}gl07-0.1.1.0.0` },
          {
            text: '二、治疗原则',
            collapsed: true,
            items: [
              { text: '概述', link: `${path.main}gl07-0.1.0.0.0` },
              { text: '概述', link: `${path.main}gl07-0.1.2.0.0` },
              { text: '（一）治病求本', link: `${path.main}gl07-0.1.2.1.0` },
              { text: '（二）扶正祛邪', link: `${path.main}gl07-0.1.2.2.0` },
              { text: '（三）调整阴阳', link: `${path.main}gl07-0.1.2.3.0` },
              { text: '（四）因时、因地、因人制宜', link: `${path.main}gl07-0.1.2.4.0` },
            ],
          },
        ],
      },
      {
        text: '第二节  治疗方法',
        collapsed: true,
        items: [
          { text: '概述', link: `${path.main}gl07-0.2.0.0.0` },
          {
            text: '一、内治法',
            collapsed: true,
            items: [
              { text: '概述', link: `${path.main}gl07-0.2.1.0.0` },
              { text: '（一） 汗法', link: `${path.main}gl07-0.2.1.1.0` },
              { text: '（二） 吐法', link: `${path.main}gl07-0.2.1.2.0` },
              { text: '（三） 下法', link: `${path.main}gl07-0.2.1.3.0` },
              { text: '（四）  和法', link: `${path.main}gl07-0.2.1.4.0` },
              { text: '（五）  温法', link: `${path.main}gl07-0.2.1.5.0` },
              { text: '（六）  清法', link: `${path.main}gl07-0.2.1.6.0` },
              { text: '（七）  补法', link: `${path.main}gl07-0.2.1.7.0` },
              { text: '（八） 消法', link: `${path.main}gl07-0.2.1.8.0` },
              { text: '（九）  八法的配合使用', link: `${path.main}gl07-0.2.1.9.0` },
            ],
          },
          { text: '二、外治法', link: `${path.main}gl07-0.2.2.0.0` },
        ],
      },
    ],
  },
  {
    text: '第八章  中药学概述',
    collapsed: true,
    items: [
      { text: '概述', link: `${path.main}gl08` },
      { text: '第一节 中药的性能', link: `${path.main}gl08-0.1.0.0.0` },
      { text: '第二节  中药的归经', link: `${path.main}gl08-0.2.0.0.0` },
      { text: '第三节  中药的炮制', link: `${path.main}gl08-0.3.0.0.0` },
      { text: '第四节  中药的配伍', link: `${path.main}gl08-0.4.0.0.0` },
      { text: '第五节   中药的有毒、无毒与用药禁忌', link: `${path.main}gl08-0.5.0.0.0` },
      { text: '第六节  中药的服用法', link: `${path.main}gl08-0.6.0.0.0` },
    ],
  },
  {
    text: '第九章  方剂学概述',
    collapsed: true,
    items: [
      { text: '概述', link: `${path.main}gl09` },
      { text: '第一节  方剂的组成', link: `${path.main}gl09-0.1.0.0.0` },
      { text: '第二节  方剂的分类', link: `${path.main}gl09-0.2.0.0.0` },
      { text: '第三节  方剂的剂型及应用特点', link: `${path.main}gl09-0.3.0.0.0` },
    ],
  },
  {
    text: '第十章   中医药学在医疗上的优势',
    collapsed: true,
    items: [
      { text: '概述', link: `${path.main}gl10` },
      { text: '一、医疗思想的先进性', link: `${path.main}gl10-0.1.0.0.0` },
      { text: '二、治疗手段的优越性', link: `${path.main}gl10-0.2.0.0.0` },
    ],
  },
  {
    text: '附：形体骨骼',
    collapsed: true,
    items: [
      { text: '概述', link: `${path.main}gl11fu` },
      {
        text: '一、头面颈项部',
        collapsed: true,
        items: [
          { text: '概述', link: `${path.main}gl11fu-0.0.1.0.0` },
          { text: '（一） 前、侧面观（见图48、49）', link: `${path.main}gl11fu-0.0.1.1.0` },
          { text: '（二） 背面观（见图50）', link: `${path.main}gl11fu-0.0.1.2.0` },
        ],
      },
      {
        text: '二、躯干部',
        collapsed: true,
        items: [
          { text: '概述', link: `${path.main}gl11fu-0.0.2.0.0` },
          { text: '（一）  前、侧面观（见图51、52）', link: `${path.main}gl11fu-0.0.2.1.0` },
          { text: '（二）背面观（见图53）', link: `${path.main}gl11fu-0.0.2.2.0` },
        ],
      },
      {
        text: '三、四肢部（见图54、55、56）',
        collapsed: true,
        items: [
          { text: '概述', link: `${path.main}gl11fu-0.0.3.0.0` },
          { text: '（一）上肢（见图54）', link: `${path.main}gl11fu-0.0.3.1.0` },
          { text: '（二） 下肢（见图55、56）', link: `${path.main}gl11fu-0.0.3.2.0` },
        ],
      },
    ],
  },
  { text: '电子版录入与校对', link: `${path.main}dzb` },
];

export { sidebar as gl };
