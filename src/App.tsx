import "./style.css";

// ============================================================
// ここを自分の情報に書き換えてください
// ============================================================

const oshi = {
  name: "澤田空海理",
  catchcopy: "自身の人生を切り取った歌詞を書くシンガーソングライター。",
  description:
    "澤田空海理は、日本の作曲家・シンガーソングライター。2021年にアーティスト名義を「sori sawada」から本名の「澤田空海理」に変更し活動している。自ら「人生の切り取り」と称す赤裸々で私小説的な歌詞と、その言葉に付随する心象風景を緻密なサウンドメイクが特徴。個人活動を行う傍ら作家としても活動し、数々のアーティストに楽曲提供などを行なっている。",
  imageUrl:
    "https://sorisawada.com/wp-content/uploads/2024/10/Main-5-683x1024.jpg",
  genre: "MUSIC",
  since: "2012",
};

type Point = {
  label: string;
  text: string;
};

const points: Point[] = [
  {
    label: "音楽",
    text: "丁寧な音作りで、一つ一つの音に物語性を感じさせる。アナログな音もデジタルな音も扱い、多彩な音色で世界観を立ち上げている。",
  },
  {
    label: "言葉",
    text: "彼が紡ぐ言葉は繊細で、文学的である。歌詞は自身の体験に深く基づいており、自身を嘘偽りなく実直に表現する歌詞が心に響く。",
  },
  {
    label: "生き方",
    text: "ただ1人を思い続けて音楽を作り続けてきた生き様、体験した出来事一つ一つに美しさや価値を見出す感性、それらは彼が「生きることを全うしている」ことを感じさせる。",
  },
];

type Item = {
  title: string;
  year: string;
  note: string;
};

const picks: Item[] = [
  {
    title: "遺書",
    year: "2023",
    note: "澤田総理のメジャーデビュー曲。ただ1人に届けたい、ありったけの思いが綴られた長尺バラード。",
  },
  {
    title: "東京",
    year: "2024",
    note: "メジャーデビュー後初のアルバムに収録された、アルバムの一曲目。歌詞の朗読とサウンドエフェクトのみで構成された、10分を超えるポエトリー。",
  },
  {
    title: "魚と猫",
    year: "2020",
    note: "アルバム「魚と猫」の表題曲。魚と猫という共生できない2匹を男女に例えた曲。大切な人が去った後の痕跡を眺めるかのような切ない歌詞が印象的。",
  },
  {
    title: "与太話",
    year: "2021",
    note: "「与太話」のリリースをきっかけとして、名義を澤田空海理へと変更した。非常にパーソナルな楽曲で、明確に一人に向けて歌われた「攻撃の歌」。",
  },
];

// ============================================================
// コンポーネント（基本的に変更不要）
// ============================================================

function Hero() {
  return (
    <section className="hero">
      {oshi.imageUrl && (
        <div className="hero-image-wrap">
          <img className="hero-image" src={oshi.imageUrl} alt={oshi.name} />
          <div className="hero-image-overlay" />
        </div>
      )}
      <div className="hero-content">
        <p className="hero-genre">
          {oshi.genre} · since {oshi.since}
        </p>
        <h1 className="hero-name">{oshi.name}</h1>
        <p className="hero-catchcopy">{oshi.catchcopy}</p>
      </div>
    </section>
  );
}

function Description() {
  return (
    <section className="section">
      <h2 className="section-title">About</h2>
      <p className="description-text">{oshi.description}</p>
    </section>
  );
}

function Points() {
  return (
    <section className="section">
      <h2 className="section-title">推しポイント</h2>
      <div className="points-list">
        {points.map((p) => (
          <div key={p.label} className="point-item">
            <span className="point-label">{p.label}</span>
            <p className="point-text">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Picks() {
  return (
    <section className="section">
      <h2 className="section-title">My Picks</h2>
      <div className="picks-grid">
        {picks.map((item, i) => (
          <div key={i} className="pick-card">
            <span className="pick-number">0{i + 1}</span>
            <h3 className="pick-title">{item.title}</h3>
            <p className="pick-year">{item.year}</p>
            <p className="pick-note">{item.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="page">
      <Hero />
      <main className="container">
        <Description />
        <Points />
        <Picks />
      </main>
      <footer className="footer">
        <p>My Favorite · {oshi.name}</p>
      </footer>
    </div>
  );
}

export default App;
