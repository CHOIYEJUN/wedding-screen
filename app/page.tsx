import { Countdown } from "@/components/countdown";
import {
  IconCalendar,
  IconChart,
  IconCode,
  IconMoon,
  IconNote,
  IconPill,
  IconPin,
  IconRacket,
  IconSpark,
  PixelHeart,
} from "@/components/icons";
import { wedding } from "@/lib/wedding";

export default function Home() {
  return (
    <>
      <header className="topbar">
        <a className="brand" href="#home">
          <PixelHeart size={14} />
          <span>YJs</span>
        </a>
        <nav className="nav" aria-label="페이지">
          <a className="nav-home" href="#home">
            Home
          </a>
          <a href="#story">우리 이야기</a>
          <a href="#ceremony">예식 안내</a>
          <a href="#place">오시는 길</a>
          <a href="#guestbook">방명록</a>
        </nav>
        <div className="loading" aria-hidden="true">
          <IconMoon />
          <div className="loading-copy">
            <span>LOVE IS LOADING...</span>
            <div className="loading-track">
              <div className="loading-fill" />
              <PixelHeart size={12} />
              <PixelHeart size={10} />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <img
            className="hero-bg"
            src="/art/night.jpg"
            alt="벚꽃, 남산타워, 호수가 있는 서울의 밤"
            width={1024}
            height={768}
          />
          <div className="hero-shade" />

          <div className="hero-grid">
            <article className="panel">
              <div className="panel-top">
                <span className="pink-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span>GROOM.EXE</span>
                <span className="panel-mark">&lt;/&gt;</span>
              </div>
              <h2>
                신랑 <span>|</span> {wedding.groom}
              </h2>
              <ul className="facts">
                <li>
                  <IconCode />
                  <span>웹 개발 · 인공지능</span>
                </li>
                <li>
                  <IconSpark />
                  <span>코드로 세상을 잇는 사람</span>
                </li>
                <li>
                  <IconNote />
                  <span>언제나 배우는 중...</span>
                </li>
              </ul>
              <p className="prompt">&gt; TOGETHER</p>
              <p className="prompt">&gt; A BRIGHTER TOMORROW</p>
            </article>

            <div className="center">
              <p className="eyebrow">
                <PixelHeart size={14} />
                SAVE THE DATE
                <PixelHeart size={14} />
              </p>
              <h1 className="names">
                <span>{wedding.groom}</span>
                <PixelHeart size={48} />
                <span>{wedding.bride}</span>
              </h1>
              <p className="until">
                <PixelHeart size={12} />
                우리의 결혼식까지
                <PixelHeart size={12} />
              </p>
              <Countdown />
              <p className="when">
                <IconCalendar />
                <time dateTime={wedding.iso}>{wedding.when}</time>
              </p>
              <p className="where">
                <IconPin />
                <span>{wedding.place}</span>
              </p>
              <p className="line">좋아하는 것을 함께 하며, 더 좋은 날들을 만들어가요.</p>
            </div>

            <article className="panel">
              <div className="panel-top">
                <span className="pink-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span>BRIDE.EXE</span>
                <PixelHeart size={14} />
              </div>
              <h2>
                신부 <span>|</span> {wedding.bride}
              </h2>
              <ul className="facts">
                <li>
                  <IconPill />
                  <span>제약사 마케팅</span>
                </li>
                <li>
                  <IconChart />
                  <span>더 건강한 일상을 만드는 사람</span>
                </li>
                <li>
                  <IconNote />
                  <span>좋은 가치를 전하는 중...</span>
                </li>
              </ul>
            </article>
          </div>

          <div className="cast">
            <div className="pair">
              <figure className="actor dog">
                <img src="/art/samoyed.png" alt="미소 짓는 하얀 사모예드" width={909} height={926} />          
              </figure>
              <img
                className="person groom"
                src="/art/groom.png"
                alt="노트북과 배드민턴 라켓을 든 최예준"
                width={641}
                height={964}
              />
            </div>
            <div className="pair">
              <img
                className="person bride"
                src="/art/bride.png"
                alt="부케와 배드민턴 라켓을 든 양윤주"
                width={776}
                height={808}
              />
              <figure className="actor cat">
                <img src="/art/cat.png" alt="핑크 리본을 한 검은고양이" width={830} height={956} />
              </figure>
            </div>
          </div>
        </section>

        <section className="story" id="story">
          <div className="story-top">
            <h2>OUR STORY</h2>
            <p>
              <PixelHeart size={12} />
              SAME TEAM, ALWAYS
              <PixelHeart size={12} />
            </p>
          </div>
          <div className="story-grid">
            <article>
              <div className="badge">
                <IconCode />
              </div>
              <h3>신랑 | 웹 개발 · 인공지능</h3>
              <p>기술로 더 나은 세상을 꿈꾸는 사람</p>
              <p>그리고, 너와 더 나은 하루를 꿈꾸는 사람</p>
            </article>
            <article>
              <div className="badge">
                <IconRacket />
              </div>
              <h3>공통 취미 | 배드민턴</h3>
              <p>같은 취미로, 더 멀리</p>
              <p>함께하는 모든 순간이 즐거운 우리</p>
            </article>
            <article>
              <div className="badge">
                <IconPill />
              </div>
              <h3>신부 | 제약 마케팅</h3>
              <p>사람들의 더 건강한 내일을 고민하는 사람</p>
              <p>그리고, 너와 더 행복한 오늘을 만드는 사람</p>
            </article>
          </div>
        </section>

        <div className="sheets">
          <section className="sheet" id="ceremony">
            <p className="sheet-kicker">CEREMONY</p>
            <h2>예식 안내</h2>
            <p className="sheet-label">일시</p>
            <p className="sheet-strong">
              <time dateTime={wedding.iso}>{wedding.when}</time>
            </p>
            <p className="sheet-label">장소</p>
            <p className="sheet-strong">{wedding.place}</p>
          </section>

          <section className="sheet" id="place">
            <p className="sheet-kicker">LOCATION</p>
            <h2>오시는 길</h2>
            <p className="sheet-strong">{wedding.place}</p>
            <a className="map-link" href={wedding.mapUrl} target="_blank" rel="noreferrer">
              <IconPin />
              지도에서 장소 보기
            </a>
          </section>

          <section className="sheet guestbook" id="guestbook">
            <p className="sheet-kicker">GUESTBOOK</p>
            <h2>방명록</h2>
            <p>방명록은 아직 열지 않았어요.</p>
            <p>지금은 이 화면으로 우리의 날짜를 먼저 전합니다.</p>
          </section>
        </div>
      </main>

      <footer className="footer">
        <PixelHeart size={14} />
        <span>
          {wedding.groom} · {wedding.bride}
        </span>
        <span>2027. 07. 10</span>
      </footer>
    </>
  );
}
