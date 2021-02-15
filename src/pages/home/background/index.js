import React from "react";
import "./index.scss";

const Background = (props) => {
  return (
    <main className="background">
      <section className="background__container">
        <section className="logo-svg">
          {/* <svg width="673px" height="72px" viewBox="0 0 673 72" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <path d="M57.3632287,29.6697009 L62.3071749,4 L74,4 L59.7174888,64 L47.396861,64 L42.2174888,38.5643693 C40.8834081,32.3224967 39.941704,26.236671 39.1569507,19.4486346 L39,19.4486346 C37.9798206,26.236671 36.8811659,32.2444733 35.3901345,38.5643693 L29.5044843,64 L17.2623318,64 L4,4 L16.3206278,4 L20.9506726,29.9037711 C22.206278,37.0819246 23.3834081,44.4941482 24.2466368,50.8920676 L24.4820628,50.8920676 C25.3452915,44.1820546 26.8363229,37.2379714 28.4058296,29.7477243 L33.8991031,4 L45.3565022,4 L50.4573991,30.0598179 C51.7914798,37.0819246 52.9686099,43.7139142 53.7533632,50.7360208 L53.9887892,50.7360208 C54.9304933,43.6358908 56.1076233,36.8478544 57.3632287,29.6697009 Z M92.3581395,54.3250975 L114,54.3250975 L114,64 L81,64 L81,4 L112.772093,4 L112.772093,13.6749025 L92.3581395,13.6749025 L92.3581395,28.1872562 L111.62093,28.1872562 L111.62093,37.6280884 L92.3581395,37.6280884 L92.3581395,54.3250975 Z M135.546099,54.2470741 L157,54.2470741 L157,64 L124,64 L124,4 L135.546099,4 L135.546099,54.2470741 Z M204,5.27594937 L201.727612,14.6936709 C199.376866,13.6734177 196.242537,12.7316456 192.089552,12.7316456 C182.13806,12.7316456 174.145522,19.5594937 174.145522,34.156962 C174.145522,47.8126582 181.119403,55.1113924 192.011194,55.1113924 C195.615672,55.1113924 199.455224,54.4050633 201.80597,53.3848101 L203.451493,62.7240506 C201.179104,63.8227848 196.320896,65 190.130597,65 C172.029851,65 162,52.678481 162,34.7848101 C162,13.6734177 175.55597,3 191.541045,3 C198.044776,3 202.276119,4.33417722 204,5.27594937 Z M234.934884,3 C251.776744,3 260,17.2474747 260,33.2954545 C260,54.2752525 249.246512,65 234.144186,65 C218.093023,65 209,51.6919192 209,34.2348485 C209,16.229798 219.04186,3 234.934884,3 Z M235.116418,12 C226.113433,12 222,22.72 222,34 C222,46.08 226.579104,56 235.038806,56 C243.576119,56 248,46.16 248,33.76 C248,22.48 243.886567,12 235.116418,12 Z M309.27451,4 L323.54902,4 L327,64 L315.941176,64 L314.843137,40.6710013 C314.529412,32.7906372 314.137255,23.1157347 314.215686,17.029909 L313.980392,17.029909 C312.254902,24.2080624 310.058824,32.1664499 308.019608,38.8764629 L300.647059,63.1417425 L291.862745,63.1417425 L285.196078,39.26658 C283.235294,32.4785436 281.352941,24.3641092 279.941176,17.029909 L279.705882,17.029909 C279.54902,24.5981795 279.156863,33.4928479 278.764706,40.9050715 L277.588235,64 L267,64 L271.078431,4 L285.431373,4 L291.941176,26.5487646 C293.901961,33.8049415 295.627451,40.8270481 296.960784,47.6931079 L297.196078,47.6931079 C298.607843,40.9830949 300.411765,33.7269181 302.45098,26.5487646 L309.27451,4 Z M349.35814,54.3250975 L371,54.3250975 L371,64 L338,64 L338,4 L369.772093,4 L369.772093,13.6749025 L349.35814,13.6749025 L349.35814,28.1872562 L368.62093,28.1872562 L368.62093,37.6280884 L349.35814,37.6280884 L349.35814,54.3250975 Z M395,61.6253165 L397.287846,51.8936709 C400.443497,53.7772152 405.492537,55.2683544 410.383795,55.2683544 C416.852878,55.2683544 420.245203,52.2075949 420.245203,47.7341772 C420.245203,43.4177215 417.326226,40.8278481 410.620469,37.9240506 C401.469083,34 395.788913,28.3493671 395.788913,20.5012658 C395.788913,10.6126582 403.599147,3 416.695096,3 C422.454158,3 426.872068,4.33417722 429.712154,5.74683544 L427.266525,15.243038 C425.136461,14.1443038 421.428571,12.6531646 416.458422,12.6531646 C410.304904,12.6531646 407.54371,15.9493671 407.54371,19.3240506 C407.54371,23.6405063 410.541578,25.6025316 417.957356,28.9772152 C427.660981,33.2936709 432,38.8658228 432,46.7924051 C432,57.3088608 424.031983,65 409.910448,65 C403.914712,65 397.840085,63.3518987 395,61.6253165 Z M473.329749,4 L485,4 L485,64 L473.329749,64 L473.329749,38.1742523 L452.670251,38.1742523 L452.670251,64 L441,64 L441,4 L452.670251,4 L452.670251,27.953186 L473.329749,27.953186 L473.329749,4 Z M508,64 L497,64 L497,4 L508,4 L508,64 Z M553.471429,4 L564,4 L564,64 L552.371429,64 L539.407143,39.1885566 C536.185714,33.0247074 532.65,25.6124837 530.135714,19.0585176 L529.821429,19.0585176 C530.292857,26.4707412 530.528571,34.8972692 530.528571,45.5864759 L530.528571,64 L520,64 L520,4 L532.571429,4 L545.3,28.343303 C548.521429,34.3511053 551.9,41.6853056 554.335714,47.9271782 L554.492857,47.9271782 C553.785714,40.2808843 553.471429,31.7763329 553.471429,22.023407 L553.471429,4 Z M598.247475,18.6684005 L604.102694,4 L617,4 L598.959596,39.1885566 L598.959596,64 L587.249158,64 L587.249158,39.5786736 L570,4 L583.055556,4 L589.069024,18.7464239 C590.809764,23.0377113 592.234007,26.7828349 593.658249,30.9180754 L593.816498,30.9180754 C595.003367,26.9388817 596.506734,23.0377113 598.247475,18.6684005 Z M636.256866,4 L650.980614,4 L668,64 L655.73021,64 L651.376414,48.1612484 L635.069467,48.1612484 L630.87399,64 L619,64 L636.256866,4 Z M640.646341,26.2168675 L637,40 L650,40 L646.353659,26.2951807 C645.402439,22.5361446 644.371951,17.6807229 643.579268,14 L643.341463,14 C642.54878,17.7590361 641.518293,22.6927711 640.646341,26.2168675 Z" id="path-1"></path>
              <filter x="-1.1%" y="-8.9%" width="102.3%" height="124.2%" filterUnits="objectBoundingBox" id="filter-2">
                <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
                <feOffset dx="0" dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
                <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
                <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
              </filter>
            </defs>
            <g id="页面1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="WELCOMESHINYA" fill-rule="nonzero">
                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlinkHref="#path-1"></use>
                <use fill-opacity="0" fill="#FFFFFF" xlinkHref="#path-1"></use>
                <use stroke="#6C6C6C" stroke-width="1" fill-opacity="0" fill="#A0A0A0" xlinkHref="#path-1"></use>
              </g>
            </g>
          </svg> */}
        </section>
        {/* <section className="background__container-article">
          <HCLink to="/blog">
            <section className="background__container-article-item">
              READ MY BLOG
            </section>
          </HCLink>
          <section className="background__container-article-item background__container-article-item-jianli">
            <span>WATCH ME</span>
          </section>
        </section> */}
      </section>
    </main>
  );
};

export default React.memo(Background);
