import React from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import "./Success.css";

const Success = () => {
  const successCases = {
    "10대": [
      {
        name: "Awesome Haeun",
        description:
          "어린이 모델, 댄서, 가수로 다양한 K-pop 그룹과 협업하며 댄스 영상을 주로 올립니다.",
        thumbnail: "https://i.ytimg.com/vi/so_special/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=so_special",
      },
      {
        name: "짧은대화 (ShortConvo)",
        description:
          "짧은 코미디 스케치와 다양한 주제의 짧은 영상을 제공합니다.",
        thumbnail: "https://i.ytimg.com/vi/comedy_sketch/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=comedy_sketch",
      },
      {
        name: "한세드림 (HanSe Dream)",
        description: "교육적인 콘텐츠와 재미있는 실험 영상을 제공합니다.",
        thumbnail: "https://i.ytimg.com/vi/experiment/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=experiment",
      },
    ],
    "20대": [
      {
        name: "장삐쭈 (Jangbbijju)",
        description:
          "애니메이션 스타일의 코믹한 영상들로 인기를 끌고 있습니다.",
        thumbnail: "https://i.ytimg.com/vi/comic_animation/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=comic_animation",
      },
      {
        name: "피식대학 (Psick University)",
        description: "다양한 주제의 코미디와 패러디 영상을 제공합니다.",
        thumbnail: "https://i.ytimg.com/vi/parody/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=parody",
      },
      {
        name: "PONY Syndrome",
        description: "메이크업 튜토리얼과 뷰티 콘텐츠로 유명합니다.",
        thumbnail: "https://i.ytimg.com/vi/makeup_tutorial/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=makeup_tutorial",
      },
    ],
    "30대": [
      {
        name: "슈카월드 (Shuka World)",
        description: "경제와 투자 관련 콘텐츠로 인기를 얻고 있습니다.",
        thumbnail: "https://i.ytimg.com/vi/economy_talk/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=economy_talk",
      },
      {
        name: "나만의냉장고 (My Personal Refrigerator)",
        description: "다양한 요리와 레시피를 소개합니다.",
        thumbnail: "https://i.ytimg.com/vi/cooking_recipe/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=cooking_recipe",
      },
      {
        name: "Workman",
        description: "다양한 직업 체험을 다루는 콘텐츠로 인기를 얻고 있습니다.",
        thumbnail: "https://i.ytimg.com/vi/job_experience/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=job_experience",
      },
    ],
    "40대": [
      {
        name: "먹방왕 (Mukbang King)",
        description:
          "다양한 음식을 맛보고 먹는 먹방 콘텐츠로 인기를 끌고 있습니다.",
        thumbnail: "https://i.ytimg.com/vi/mukbang/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=mukbang",
      },
      {
        name: "홈가드닝 (Home Gardening)",
        description:
          "가정에서 할 수 있는 원예와 정원 가꾸기 콘텐츠로 사랑받고 있습니다.",
        thumbnail: "https://i.ytimg.com/vi/gardening/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=gardening",
      },
      {
        name: "HEOPOP",
        description:
          "다양한 실험과 일상 브이로그를 다루며 어린이와 청소년에게 인기가 많습니다.",
        thumbnail: "https://i.ytimg.com/vi/experiment_fail/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=experiment_fail",
      },
    ],
    "50대": [
      {
        name: "전원생활 (Country Life)",
        description:
          "전원에서의 삶과 농사, 자급자족 콘텐츠로 인기를 얻고 있습니다.",
        thumbnail: "https://i.ytimg.com/vi/country_life/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=country_life",
      },
      {
        name: "건강정보 (Health Info)",
        description:
          "다양한 건강 관련 정보를 제공하며, 건강 관리에 관심이 많은 사람들에게 유익합니다.",
        thumbnail: "https://i.ytimg.com/vi/health_info/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=health_info",
      },
      {
        name: "유라준의 문화발전소 (Yurajun's Cultural Development)",
        description: "역사와 문화에 대한 깊이 있는 설명을 제공합니다.",
        thumbnail: "https://i.ytimg.com/vi/culture_talk/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=culture_talk",
      },
    ],
    "60대 이상": [
      {
        name: "할담비 (Hal-Dambi)",
        description:
          "60대 유튜버로 다양한 춤과 노래를 통해 젊은이들과 소통합니다.",
        thumbnail: "https://i.ytimg.com/vi/dance_cover/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=dance_cover",
      },
      {
        name: "박막례 할머니 (Park Makrye)",
        description:
          "70대 유튜버로 요리와 여행 브이로그를 통해 많은 사랑을 받고 있습니다.",
        thumbnail: "https://i.ytimg.com/vi/travel_vlog/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=travel_vlog",
      },
      {
        name: "동네 할머니 (Grandma of the Neighborhood)",
        description: "일상 속의 소소한 이야기를 통해 따뜻한 감동을 전합니다.",
        thumbnail: "https://i.ytimg.com/vi/daily_life/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=daily_life",
      },
    ],
  };

  return (
    <section className="success">
      <h2>유튜브 쇼츠 성공 사례</h2>
      <div className="age-buttons">
        {Object.keys(successCases).map((ageGroup) => (
          <ScrollLink key={ageGroup} to={ageGroup} smooth={true} duration={500}>
            <button>{ageGroup}</button>
          </ScrollLink>
        ))}
      </div>
      {Object.keys(successCases).map((ageGroup) => (
        <Element key={ageGroup} name={ageGroup}>
          <h3>{ageGroup}</h3>
          <div className="success-cases">
            {successCases[ageGroup].map((caseItem, index) => (
              <div key={index} className="success-case">
                <a
                  href={caseItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={caseItem.thumbnail}
                    alt={caseItem.name}
                    className="thumbnail"
                  />
                </a>
                <h4>{caseItem.name}</h4>
                <p>{caseItem.description}</p>
              </div>
            ))}
          </div>
        </Element>
      ))}
    </section>
  );
};

export default Success;
