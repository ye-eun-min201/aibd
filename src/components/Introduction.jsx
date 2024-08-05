import React from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import "./Introduction.css";
import shortsImage from "../images/shorts.jpg"; // 이미지 import

const Introduction = () => {
  return (
    <section className="introduction">
      <div className="introduction-title section-padding">
        유튜브 쇼츠와 인기 급상승 순위
        <div className="image">
          <img src={shortsImage} alt="유튜브 쇼츠 이미지" />
        </div>
      </div>
      <div className="nav-buttons">
        <ScrollLink to="youtube-shorts" smooth={true} duration={500}>
          <button className="button">유튜브 쇼츠</button>
        </ScrollLink>
        <ScrollLink to="trending-videos" smooth={true} duration={500}>
          <button className="button">유튜브 인기 급상승 순위</button>
        </ScrollLink>
        <ScrollLink to="shortform-trends" smooth={true} duration={500}>
          <button className="button">숏폼 콘텐츠의 성장과 트렌드</button>
        </ScrollLink>
      </div>
      <div className="content section-padding">
        <div className="text">
          <Element name="youtube-shorts">
            <div className="sub-title">유튜브 쇼츠</div>
            <p>
              유튜브 쇼츠는 최대 60초 길이의 짧은 동영상을 쉽게 만들고 공유할 수
              있는 기능입니다. 모바일에 최적화되어 있으며, 다양한 편집 도구를
              제공합니다. 유튜브 쇼츠는 짧고 흥미로운 콘텐츠를 통해 사용자들의
              참여를 유도합니다.
            </p>
            <ul>
              <li>짧은 동영상: 최대 60초 길이의 동영상</li>
              <li>
                손쉬운 제작 도구: 동영상 클립을 쉽게 편집하고, 음악, 텍스트,
                효과 등을 추가할 수 있는 도구 제공
              </li>
              <li>모바일 최적화: 수직 형식으로 모바일 장치에서 가장 잘 작동</li>
              <li>
                발견 및 탐색: 유튜브 메인 페이지와 별도의 쇼츠 피드에서 쉽게
                발견
              </li>
              <li>음악 사용: 방대한 음악 라이브러리에서 배경 음악 선택 가능</li>
            </ul>
          </Element>

          <Element name="trending-videos">
            <div className="sub-title">유튜브 인기 급상승 순위</div>
            <p>
              유튜브 인기 급상승 순위는 현재 유튜브에서 가장 인기 있는 동영상을
              보여주는 섹션입니다. 여러 요소를 고려하여 인기 급상승 동영상을
              선정합니다.
            </p>
            <ul>
              <li>조회수: 동영상이 얼마나 많이 조회되었는지를 고려</li>
              <li>
                조회 속도: 동영상이 짧은 시간 내에 얼마나 빠르게 조회수를
                기록했는지 평가
              </li>
              <li>참여도: 좋아요, 댓글, 공유 등의 사용자 참여 포함</li>
              <li>채널 활동: 채널의 구독자 수와 활동 수준 반영</li>
              <li>
                다양성: 다양한 카테고리와 주제를 포함하여 다양한 콘텐츠 제공
              </li>
              <li>지역성: 각 국가나 지역의 트렌드를 반영</li>
            </ul>
          </Element>

          <Element name="shortform-trends">
            <div className="sub-title">숏폼 콘텐츠의 성장과 트렌드</div>
            <p>
              1분 이내의 짧은 동영상을 뜻하는 숏폼 콘텐츠는 기존 10대, 20대 젊은
              층을 벗어나 모든 연령층에게 사랑받고 있습니다. 본 영상의
              예고편으로 취급되던 숏폼 콘텐츠는 이제 정식 콘텐츠로
              자리매김했습니다. 대표적인 숏폼 콘텐츠 시청 플랫폼으로는 유튜브
              쇼츠, 틱톡, 인스타그램 릴스 등이 있습니다.
            </p>
            <p>
              한국리서치에 따르면 유튜브 쇼츠로 숏폼 콘텐츠를 소비한다고 답한
              응답자는 전체 응답자의 93%입니다. 가장 인기 있는 숏폼 콘텐츠인
              유튜브 쇼츠, 그중에서도 인기 급상승 쇼츠로 선정된 콘텐츠의 인기
              요인을 확인하는 일은 매우 중요합니다. 누구나 숏폼 콘텐츠의
              소비자이자 제작자가 될 수 있습니다. 당신의 쇼츠의 경쟁력을
              찾아보세요.
            </p>
            <p>
              구글의 인기 급상승 쇼츠는 15분마다 업데이트됩니다. 총 15개의
              영상이 선정되는데 15분 뒤에 새로운 영상이 올라올 수도 있지만
              기존과 같은 리스트 내에서 영상의 순위가 변경될 수도 있고 이전과
              같은 순위를 유지할 수도 있습니다.
            </p>
            <div></div>
            <p>구글에 따르면 인기 급상승 쇼츠는</p>
            <ul>
              <li>조회수</li>
              <li>동영상 조회수 증가 속도(즉, ‘온도’)</li>
              <li>YouTube 외부를 포함하여 조회수가 발생하는 소스</li>
              <li>동영상 업로드 기간</li>
              <li>
                해당 동영상을 같은 채널에 최근 업로드한 다른 동영상과 비교한
                결과
              </li>
            </ul>
            <p>
              외에도 다양한 신호를 고려하여 선정됩니다. 단순히 조회수, 좋아요
              수, 댓글 수 등이 많다고 인기 급상승 쇼츠로 선정되는 것이 아닙니다.
              높은 조회수의 영상이 인기 급상승 쇼츠에 선정되지 못할 수 있고
              비교적 낮은 조회수의 영상이 인기 급상승 쇼츠 1위에 올라설 수도
              있습니다.
            </p>
            <p>
              우리가 직접 수집하고 분석한 인기 급상승 쇼츠의 데이터를 바로
              확인해보세요. 영상의 제목, 줄거리, 주제를 추천받거나 복잡한
              데이터를 시각화한 자료를 통해 기존 영상의 분석 결과를 살펴볼 수
              있습니다. 선택한 주제와 관련 있는 단어를 살펴보고 함께 사용하면
              좋을 단어를 확인할 수도 있습니다.
            </p>
          </Element>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
