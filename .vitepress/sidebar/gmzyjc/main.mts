const path = {
  main: '/gmzyjc/ok/',
  rm: '/gmzyjc/ok/rm/',
  gmzy: '/gmzyjc/ok/gmzy/',
};

const sidebar = [
  {
    text: '第一学年',
    collapsed: true,
    items: [
      { text: '中医概念入门', link: `${path.rm}gangyao` },
      { text: '了解光明', link: `${path.gmzy}gmzy001` },
    ],
  },
  {
    text: '第二学年',
    collapsed: true,
    items: [{ text: 'PostgreSQL(apt)', link: `${path.main}archive/pgsql` }],
  },
  {
    text: '第三学年',
    collapsed: true,
    items: [{ text: 'PostgreSQL(apt)', link: `${path.main}archive/pgsql` }],
  },
  {
    text: '第四学年',
    collapsed: true,
    items: [{ text: 'PostgreSQL(apt)', link: `${path.main}archive/pgsql` }],
  },
  {
    text: '其他',
    collapsed: true,
    items: [
      { text: 'PostgreSQL(apt)', link: `${path.main}archive/pgsql` },
      { text: 'PHP旧版', link: `${path.main}archive/php_old` },
    ],
  },
];

export { sidebar as gmzyjc };
