import React from "react";
import categoryFrequencyGraph from "../images/image.png";
import keywordFrequencyGraph from "../images/keyword.png";
import videoLengthScatterPlot from "../images/2.png";
import trendingEngagementHistogram from "../images/3.png";
import sentimentViewBoxplot from "../images/sense.png";
import sentimentLikesBoxplot from "../images/sense2.png";
import sentimentCommentsBoxplot from "../images/sense3.png";
import wordNetworkGraph from "../images/word-network.png";
import wordCloudImage from "../images/word-cloud-image.png"; // 새로 추가된 이미지
import "./analysis.css";

const Analysis = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="analysis-container">
      <div className="nav-buttons">
        <button
          className="scroll-button"
          onClick={() => scrollToSection("category-keywords")}
        >
          카테고리 및 키워드
        </button>
        <button
          className="scroll-button"
          onClick={() => scrollToSection("data-correlation")}
        >
          데이터 연관성
        </button>
        <button
          className="scroll-button"
          onClick={() => scrollToSection("text-analysis")}
        >
          텍스트 분석
        </button>
        <button
          className="scroll-button"
          onClick={() => scrollToSection("word-cloud")}
        >
          워드 클라우드
        </button>
      </div>
      <section id="category-keywords">
        <h2>인기 숏츠에서 자주 쓰이는 카테고리와 키워드</h2>
        <p>
          2024년에 유행하는 카테고리는 무엇일까요? 많이 쓰이는 키워드는
          무엇일까요? 인기 숏츠에서 유행하는 카테고리를 알아보기 위해 데이터를
          통합하여 빈도수를 측정해 보았습니다. 그래프는 matplotlib을 기반으로
          seaborn 라이브러리를 사용하여 시각화하였습니다.
        </p>
        <h3>가장 많이 사용된 카테고리</h3>
        <p>
          가장 높은 빈도수로 나타난 카테고리는 'People & Blogs'였으며, 그
          다음으로 'Entertainment', 'Comedy', 'Howto & Style', 'Sports' 등이
          높은 빈도수를 보였습니다.
        </p>
        <img src={categoryFrequencyGraph} alt="카테고리 빈도 그래프" />

        <h3>자주 사용된 키워드</h3>
        <p>
          인기 숏츠에서 자막, 영상 제목, 썸네일 사진 제목에서 단어들을 추출하여
          요즘 많이 쓰이는 단어들을 뽑아 보았습니다. 이때 한글 단어를 추출하기
          위해 KoNLPy Okt 도구를 사용하였고, 시각화에는 Seaborn의 barplot을
          사용하였습니다.
        </p>
        <p>
          '진짜', '음악', '이제', '한번' 등의 키워드가 높은 빈도수를 보였습니다.
          이는 진정성 있는 콘텐츠와 음악 관련 콘텐츠가 많이 사용되고 있음을
          나타냅니다.
        </p>
        <img src={keywordFrequencyGraph} alt="키워드 빈도 그래프" />
      </section>

      <section id="data-correlation">
        <h2>데이터들의 연관성</h2>

        <h3>영상 길이와 조회수, 좋아요 수, 댓글 수의 연관성</h3>
        <p>
          유튜브 숏츠의 최대 길이는 1분입니다. 사람들이 어느 정도 길이의 영상을
          더 선호하는지 알아보기 위해, 수집한 데이터를 가지고 영상 길이별
          조회수, 좋아요 수, 댓글 수와 비교하여 Seaborn의 subplot를 사용하여
          산점도로 표현해보았습니다.
        </p>
        <p>
          점이 고르게 분산되어 있어 영상의 길이와 조회수, 좋아요 수, 댓글 수와는
          관계가 없음을 보여줍니다.
        </p>
        <img
          src={videoLengthScatterPlot}
          alt="영상 길이와 조회수, 좋아요 수, 댓글 수의 산점도"
        />

        <h3>인기 급상승 숏츠와 조회수, 좋아요 수, 댓글 수의 연관성</h3>
        <p>
          구글에 따르면, 유튜브의 인기 급상승 목록은 15분 단위로 변경되며,
          조회수, 동영상 조회수 증가 속도, 조회수가 발생하는 소스, 동영상 업로드
          기간, 해당 동영상을 같은 채널의 최근 업로드 동영상과 비교한 결과로
          결정됩니다.
        </p>
        <p>
          우리는 조회수뿐만 아니라 좋아요 수, 댓글 수도 인기 급상승에 영향을
          미친다고 생각했습니다. 이를 알아보기 위해 유튜브 인기 급상승 숏츠에서
          같은 시간에 올라온 새로운 영상들을 수집하여 YouTube API를 사용하여
          조회수, 좋아요 수, 댓글 수를 분석하였습니다. 시각화에는 Seaborn의
          히스토그램과 KDE 곡선을 사용하였습니다.
        </p>
        <p>
          조회수, 좋아요 수, 댓글 수 모두 우측으로 치우쳐 있음을 볼 수 있습니다.
          이는 조회수, 좋아요 수, 댓글 수의 증가 속도가 인기 급상승 숏츠에
          영향을 미친다는 것을 보여줍니다.
        </p>
        <img
          src={trendingEngagementHistogram}
          alt="인기 급상승 숏츠의 조회수, 좋아요 수, 댓글 수 히스토그램"
        />

        <h3>인기 숏츠 댓글의 감정과 조회수, 좋아요 수, 댓글 수의 연관성</h3>
        <p>
          인기 급상승 숏츠를 분석할 때, 유튜브 숏츠는 조회수를 위해 자극적인
          콘텐츠를 많이 사용한다고 생각했습니다. 이러한 영상들에 대한 댓글은
          부정적인 반응이 많고, 조회수와 댓글 수는 많을 것이지만 좋아요 수는
          적을 것이라고 가정했습니다. 이를 분석하기 위해 KoNLPy와 감정 분석에
          적합한 TextBlob을 사용하여 데이터를 분석하였습니다. 시각화에는 seaborn
          라이브러리의 boxplot 함수를 사용하였습니다.
        </p>
        <p>
          감정별 조회수를 분석한 결과, 긍정적인 댓글이 달린 영상의 조회수는
          중간값이 150만 조회수를 넘습니다. 중립적인 댓글과 중간값이 비슷하며
          조회수 분포도 비슷합니다. 부정적인 댓글이 달린 영상의 조회수는 가장
          낮았습니다.
        </p>
        <img src={sentimentViewBoxplot} alt="감정별 조회수 박스플롯" />

        <p>
          감정별 좋아요 수를 분석한 결과, 긍정적인 댓글이 달린 영상의 좋아요 수
          중간값은 4만보다 약간 낮습니다. 좋아요 수 분포는 넓으며, 최댓값이 가장
          높습니다. 부정적인 댓글이 달린 영상의 좋아요 수 중간값은 가장 낮고
          분포도 좁습니다. 중립적인 댓글이 달린 영상의 좋아요 수 중간값이 셋 중
          가장 높습니다.
        </p>
        <img src={sentimentLikesBoxplot} alt="감정별 좋아요 수 박스플롯" />

        <p>
          감정별 댓글 수를 분석한 결과, 긍정적인 댓글이 달린 영상의 댓글 수
          중간값은 500정도입니다. 댓글 수 분포는 넓은 편입니다. 부정적인 댓글이
          달린 영상의 댓글 수 중간값은 300정도로 가장 낮았으며, 분포도 가장
          좁았습니다. 중립적인 댓글이 달린 영상의 댓글 수 중간값이 가장
          높았습니다.
        </p>
        <img src={sentimentCommentsBoxplot} alt="감정별 댓글 수 박스플롯" />
      </section>

      <section id="text-analysis">
        <h2>TextRank와 단어 네트워크를 사용한 시청자 관심사와 트렌드 파악</h2>
        <p>
          다음 연구에서는 유튜브 인기 급상승 숏츠의 텍스트 데이터를 분석하여
          주요 단어들을 추출하고 이를 시각화하여 단어 간의 관계를
          파악하였습니다. 자막, 영상 제목, 썸네일 제목을 사용하였고, TextRank
          알고리즘을 사용하여 단어의 중요도를 계산하고 네트워크 그래프를 통해
          단어 간의 연관성을 시각화하였습니다.
        </p>
        <p>
          TextRank는 PageRank의 변형 알고리즘으로, 단어의 중요도를 계산하여
          중요한 단어들을 시각화합니다. 형태소 분석기인 Okt를 사용하여 텍스트
          데이터를 단어로 분리하고, 분리된 단어들을 노드로 하여 네트워크를
          구성합니다. PageRank 알고리즘을 적용하여 중요한 노드들이 더 높은
          중요도를 가지도록 합니다. 상위 30개의 단어를 골라내어 단어의 중요도와
          연관성을 시각화하였습니다.
        </p>
        <p>
          '진짜', '음악', '한번', '그냥' 등의 단어가 큰 원으로 표시되며, 이
          단어들이 많이 쓰이는 것을 알 수 있습니다. 밀접한 원은 해당 단어들이
          함께 자주 사용됨을 나타냅니다. 예를 들어, '오늘', '한번'이라는 단어가
          밀접하게 나타난 것은 오늘 한번 시도해보는 콘텐츠가 많음을 시사합니다.
        </p>
        <img src={wordNetworkGraph} alt="단어 네트워크 그래프" />
      </section>

      <section id="word-cloud">
        <h2>영상 제목을 기반으로 한 워드클라우드</h2>
        <p>
          영상 제목을 기반으로 워드클라우드 시각화 작업을 진행했습니다. 제목을
          형태소 단위로 분리하고 빈도수를 계산하여 결과를 도출했습니다. 기본
          파이썬은 한글을 지원하지 않기 때문에 KoNLPy 패키지를 사용하여 한국어
          데이터 처리가 가능하도록 했습니다.
        </p>
        <img src={wordCloudImage} alt="워드클라우드" />
        <p>
          이 워드클라우드는 유튜브 쇼츠 실시간 인기 콘텐츠에서 나온 것들입니다.
          이 결과를 통해 다음과 같은 분석이 가능합니다:
        </p>
        <ul>
          <li>
            '사람', '등장', '여름', '추천' 등의 단어가 크게 나타나며, 이는
            사람들이 주로 사람과 관련된 콘텐츠나 여름에 관련된 활동, 제품 추천
            등의 주제에 관심이 많음을 보여줍니다.
          </li>
          <li>
            '여행', '문제', '초콜릿', '연애' 등의 단어도 자주 사용되었으며, 이는
            여행 경험, 문제 해결, 음식, 특히 초콜릿, 그리고 연애 관련 콘텐츠가
            인기를 끌고 있음을 시사합니다.
          </li>
          <li>
            '마인', '소름', '대신' 등의 단어들은 호기심을 자극하는 제목이나,
            감정을 불러일으키는 콘텐츠가 많이 사용됨을 나타냅니다.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Analysis;
