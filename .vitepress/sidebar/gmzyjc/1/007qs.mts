const path = {
  main: '/gmzyjc/ok/qs/',
};

const sidebar = [
  { text: '编者说明', link: `${path.main}qs00` },
  {
    text: '一、诊法口诀',
    collapsed: true,
    items: [
      { text: '概述', link: `${path.main}qs01` },
      { text: '望诊', link: `${path.main}qs01_01` },
      { text: '闻诊', link: `${path.main}qs01_02` },
      { text: '问诊', link: `${path.main}qs01_03` },
      { text: '切诊', link: `${path.main}qs01_04` },
    ],
  },
  { text: '二、中药口诀', link: `${path.main}qs02` },
  {
    text: '三、方剂口诀',
    collapsed: true,
    items: [
      { text: '概述', link: `${path.main}qs03` },
      { text: '解表剂', link: `${path.main}qs03_01` },
      { text: '涌吐剂', link: `${path.main}qs03_02` },
      { text: '泻下剂', link: `${path.main}qs03_03` },
      { text: '和解剂', link: `${path.main}qs03_04` },
      { text: '表里双解剂', link: `${path.main}qs03_05` },
      { text: '清热泻火剂', link: `${path.main}qs03_06` },
      { text: '祛暑剂', link: `${path.main}qs03_07` },
      { text: '开窍通关剂', link: `${path.main}qs03_08` },
      { text: '温里回阳剂', link: `${path.main}qs03_09` },
      { text: '消导化积剂', link: `${path.main}qs03_10` },
      { text: '补益剂', link: `${path.main}qs03_11` },
      { text: '重镇安神剂', link: `${path.main}qs03_12` },
      { text: '固涩剂', link: `${path.main}qs03_13` },
      { text: '理气剂', link: `${path.main}qs03_14` },
      { text: '理血剂', link: `${path.main}qs03_15` },
      { text: '治风剂', link: `${path.main}qs03_16` },
      { text: '祛湿剂', link: `${path.main}qs03_17` },
      { text: '润燥剂', link: `${path.main}qs03_18` },
      { text: '祛痰剂', link: `${path.main}qs03_19` },
      { text: '驱虫剂', link: `${path.main}qs03_20` },
      { text: '痈疡剂', link: `${path.main}qs03_21` },
    ],
  },
  { text: '四、经络口诀', link: `${path.main}qs04` },
  { text: '五、医学三字经', link: `${path.main}qs05` },
  { text: '电子版录入与校对', link: `${path.main}dzb` },
];

export { sidebar as qs };
