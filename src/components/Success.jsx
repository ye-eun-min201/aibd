import React from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import "./Success.css";

const Success = () => {
  const successCases = {
    "Vlog/일상": [
      {
        name: "김프로KIMPRO",
        url: "https://www.youtube.com/watch?v=0tFYVjIsPGE",
      },
      {
        name: "승비니 Seungbini",
        url: "https://www.youtube.com/watch?v=lTnSbM91E3w",
      },
      {
        name: "GH'S",
        url: "https://www.youtube.com/watch?v=lr4fwvwx2U0",
      },
    ],
    "푸드/먹방": [
      {
        name: "승비니 Seungbini",
        url: "https://www.youtube.com/watch?v=EogRAvEce0M",
      },
      {
        name: "CuRe 구래",
        url: "https://www.youtube.com/watch?v=e_ANyCbbXus",
      },
      {
        name: "KIMPRO STUDIO",
        url: "https://www.youtube.com/watch?v=t0jVwannoIg",
      },
    ],
    엔터테인먼트: [
      {
        name: "Stray Kids",
        url: "https://www.youtube.com/watch?v=BYabYht7k9Q",
      },
      {
        name: "조동아리",
        url: "https://www.youtube.com/watch?v=p2t7RVCG-ic",
      },
      {
        name: "Workman",
        description: "다양한 직업 체험을 다루는 콘텐츠로 인기를 얻고 있습니다.",
        url: "https://www.youtube.com/watch?v=job_experience",
      },
    ],
    게임: [
      {
        name: "먹방왕 (Mukbang King)",
        description:
          "다양한 음식을 맛보고 먹는 먹방 콘텐츠로 인기를 끌고 있습니다.",
        url: "https://www.youtube.com/watch?v=mukbang",
      },
      {
        name: "홈가드닝 (Home Gardening)",
        description:
          "가정에서 할 수 있는 원예와 정원 가꾸기 콘텐츠로 사랑받고 있습니다.",
        url: "https://www.youtube.com/watch?v=gardening",
      },
      {
        name: "HEOPOP",
        description:
          "다양한 실험과 일상 브이로그를 다루며 어린이와 청소년에게 인기가 많습니다.",
        url: "https://www.youtube.com/watch?v=experiment_fail",
      },
    ],
    패션: [
      {
        name: "전원생활 (Country Life)",
        description:
          "전원에서의 삶과 농사, 자급자족 콘텐츠로 인기를 얻고 있습니다.",
        url: "https://www.youtube.com/watch?v=country_life",
      },
      {
        name: "건강정보 (Health Info)",
        description:
          "다양한 건강 관련 정보를 제공하며, 건강 관리에 관심이 많은 사람들에게 유익합니다.",
        url: "https://www.youtube.com/watch?v=health_info",
      },
      {
        name: "유라준의 문화발전소 (Yurajun's Cultural Development)",
        description: "역사와 문화에 대한 깊이 있는 설명을 제공합니다.",
        url: "https://www.youtube.com/watch?v=culture_talk",
      },
    ],
    뷰티: [
      {
        name: "할담비 (Hal-Dambi)",
        description:
          "60대 유튜버로 다양한 춤과 노래를 통해 젊은이들과 소통합니다.",
        url: "https://www.youtube.com/watch?v=dance_cover",
      },
      {
        name: "박막례 할머니 (Park Makrye)",
        description:
          "70대 유튜버로 요리와 여행 브이로그를 통해 많은 사랑을 받고 있습니다.",
        url: "https://www.youtube.com/watch?v=travel_vlog",
      },
      {
        name: "동네 할머니 (Grandma of the Neighborhood)",
        description: "일상 속의 소소한 이야기를 통해 따뜻한 감동을 전합니다.",
        url: "https://www.youtube.com/watch?v=daily_life",
      },
    ],
  };

  const getThumbnailUrl = (url) => {
    const videoId = url.split("v=")[1];
    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  };

  return (
    <section className="success">
      <h2>카테고리 별 인기 유튜버 순위</h2>
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
                    src={getThumbnailUrl(caseItem.url)}
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
