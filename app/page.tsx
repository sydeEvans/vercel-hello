import { Clock, TrendingUp, ShoppingBag } from "lucide-react";

const hotLists = [
  {
    name: "知乎热榜",
    icon: "🔍",
    items: [
      { title: "如何看待2026年AI大模型竞争新格局", rank: 1 },
      { title: "年轻人为什么开始放弃北上广", rank: 2 },
      { title: "2026年房价走势深度分析", rank: 3 },
      { title: "延迟退休政策最新解读与影响", rank: 4 },
      { title: "新能源车还值得买吗？真实数据", rank: 5 },
      { title: "为什么考公热持续升温", rank: 6 },
      { title: "中产家庭如何应对资产缩水", rank: 7 },
      { title: "AI对职场影响调查报告", rank: 8 },
    ],
  },
  {
    name: "微博热搜",
    icon: "💬",
    items: [
      { title: "某顶流官宣恋情引爆热搜", rank: 1 },
      { title: "教育部发布2026年高考改革方案", rank: 2 },
      { title: "全国多地出现极端天气预警", rank: 3 },
      { title: "某主播偷税漏税被罚巨额", rank: 4 },
      { title: "618预售大战正式开启", rank: 5 },
      { title: "多地限购政策松绑消息", rank: 6 },
      { title: "某明星塌房事件持续发酵", rank: 7 },
      { title: "油价调整最新消息", rank: 8 },
    ],
  },
  {
    name: "36氪热榜",
    icon: "📊",
    items: [
      { title: "OpenAI发布GPT-5，性能超越预期", rank: 1 },
      { title: "国内AI创业公司融资再创新高", rank: 2 },
      { title: "新能源汽车Q1销量数据公布", rank: 3 },
      { title: "字节跳动IPO传闻再起", rank: 4 },
      { title: "华为发布新折叠屏旗舰", rank: 5 },
      { title: "为什么AI代码工具开始普及", rank: 6 },
      { title: "A股科技股行情分析", rank: 7 },
      { title: "年轻人为何爱上轻创业", rank: 8 },
    ],
  },
  {
    name: "抖音热榜",
    icon: "🎵",
    items: [
      { title: "#某网红餐厅打卡# 播放破亿", rank: 1 },
      { title: "00后用AI创作月入十万", rank: 2 },
      { title: "农村婚礼现场太震撼了", rank: 3 },
      { title: "这首BGM听完才有力气", rank: 4 },
      { title: "全国最大失恋博物馆开放", rank: 5 },
      { title: "自建房设计惊艳全网", rank: 6 },
      { title: "一人食火锅正确打开方式", rank: 7 },
      { title: "街头采访：现在还该买房吗", rank: 8 },
    ],
  },
  {
    name: "微信热文",
    icon: "📝",
    items: [
      { title: "深度好文：为什么越努力越焦虑", rank: 1 },
      { title: "一个中年男人的反思：我为什么离开大厂", rank: 2 },
      { title: "关于延迟退休，你必须知道的5个真相", rank: 3 },
      { title: "房价下跌后，资产如何保值", rank: 4 },
      { title: "普通家庭存款达到这个数就算成功了", rank: 5 },
      { title: "为什么越省钱越穷", rank: 6 },
      { title: "人到中年，必须学会的5个理财技巧", rank: 7 },
      { title: "我身边那些不焦虑的人，都做对了什么", rank: 8 },
    ],
  },
  {
    name: "B站热榜",
    icon: "📺",
    items: [
      { title: "口技表演《三打白骨精》", rank: 1 },
      { title: "《崩坏：星穹铁道》银狼LV.999角色PV——「我独自满级」", rank: 2 },
      { title: "郝 哥 不 在", rank: 3 },
      { title: "楚人美游记 1-5 合集：当楚人美被孙悟空拐去取经", rank: 4 },
      { title: "狡兔屋老大希希芙", rank: 5 },
      { title: "［meme］豌豆公主", rank: 6 },
      { title: "终于来了！大疆Pocket 4上手", rank: 7 },
      { title: "破产大王如何搞发明？【小约翰】", rank: 8 },
    ],
  },
];

const shoppingHot = [
  { rank: 1, title: "恋上鸭鸭脖/鸭翅根小包装零食500g", price: "¥19.9", sold: "9500件", tag: "爆款" },
  { rank: 2, title: "布班迪灵龙裤pro婴儿超薄拉拉裤", price: "¥45.9", sold: "5500件", tag: "热卖" },
  { rank: 3, title: "2.1元/盒！没见过这么低的价！", price: "¥34.9", sold: "1500件", tag: "神价" },
  { rank: 4, title: "86.4两盒！瑞幸生椰拿铁咖啡液64杯+保温杯", price: "¥128", sold: "1500件", tag: "推荐" },
  { rank: 5, title: "长粒香啊【国企汉江大牌】10斤长粒虾稻香米", price: "¥26.9", sold: "1500件", tag: "" },
  { rank: 6, title: "【品质超好】菌妍本草有机银耳40g", price: "¥9.9", sold: "1500件", tag: "" },
  { rank: 7, title: "16枚大漏【≥51%果肉】台湾金钻凤梨酥铁盒", price: "¥9.9", sold: "1500件", tag: "" },
  { rank: 8, title: "7.9/4包！植护乳霜纸云柔巾100抽", price: "¥7.94", sold: "1000件", tag: "" },
];

function RankBadge({ rank }: { rank: number }) {
  return (
    <span className="rank-num shrink-0 w-6 text-center text-xs font-medium text-zinc-400 dark:text-zinc-600">
      {rank}
    </span>
  );
}

function HotListCard({ data, index }: { data: typeof hotLists[0]; index: number }) {
  return (
    <div
      className="card card-hover rounded-2xl p-5"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-lg">
          {data.icon}
        </div>
        <div>
          <h2 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
            {data.name}
          </h2>
          <div className="flex items-center gap-1 text-xs text-zinc-400 mt-0.5">
            <Clock className="w-3 h-3" />
            <span>每5分钟更新</span>
          </div>
        </div>
      </div>
      <ul className="space-y-0.5">
        {data.items.map((item) => (
          <li key={item.rank}>
            <div className="hot-item flex items-start gap-3">
              <RankBadge rank={item.rank} />
              <span className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed cursor-pointer">
                {item.title}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ShoppingCard({ item }: { item: typeof shoppingHot[0] }) {
  return (
    <div className="shop-card flex items-center gap-4 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
      <div className="shrink-0 w-6 text-center text-xs font-medium text-zinc-400 dark:text-zinc-600">
        {item.rank}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate">
          {item.title}
        </p>
        <div className="flex items-center gap-3 mt-1.5">
          <span className="text-base font-medium text-zinc-900 dark:text-zinc-100">
            {item.price}
          </span>
          <span className="text-xs text-zinc-400 flex items-center gap-1">
            已售 {item.sold}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const today = new Date();
  const dateStr = today.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <header className="sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 font-medium text-sm">
                T
              </div>
              <div>
                <h1 className="text-lg font-medium text-zinc-900 dark:text-white">
                  今日热榜
                </h1>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  tophub.today
                </p>
              </div>
            </div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">
              {dateStr}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
        <section className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-4 text-zinc-900 dark:text-white tracking-tight">
            全网热点一网打尽
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
            聚合知乎、微博、抖音、B站、微信等各大平台热门内容
          </p>
        </section>

        <section className="mb-16">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            热门榜单
          </h3>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {hotLists.map((list, i) => (
              <HotListCard key={list.name} data={list} index={i} />
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            好物推荐
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {shoppingHot.map((item, i) => (
              <ShoppingCard key={item.rank} item={item} />
            ))}
          </div>
        </section>

        <footer className="mt-20 pt-8 text-center border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            tophub.today · 由 AI 自动聚合生成
          </p>
        </footer>
      </main>
    </div>
  );
}