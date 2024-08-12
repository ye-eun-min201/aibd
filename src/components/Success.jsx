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
        name: "회사원A",
        url: "https://www.youtube.com/watch?v=7-HlwU6yGrE",
      },
    ],
    "푸드/먹방": [
      {
        name: "[햄지]Hamzy",
        url: "https://www.youtube.com/watch?v=uNcsp0TUFOA",
      },
      {
        name: "Jane ASMR 제인",
        url: "https://www.youtube.com/watch?v=ZwXE7A-KLjw",
      },
      {
        name: "Hongyu ASMR 홍유",
        url: "https://www.youtube.com/watch?v=mzN_x5hWtlU",
      },
    ],
    엔터테인먼트: [
      {
        name: "Mnet K-POP",
        url: "https://www.youtube.com/watch?v=qkLMPihvKaQ",
      },
      {
        name: "KBS WORLD TV",
        url: "https://www.youtube.com/watch?v=_ZNF4NDCrTM",
      },
      {
        name: "Stray Kids",
        url: "https://www.youtube.com/watch?v=k8Y6ZTjmCXs",
      },
    ],

    여행: [
      {
        name: "빠니보틀 Pani Bottle",
        url: "https://www.youtube.com/watch?v=uaBHe5P4JF8",
      },
      {
        name: "곽튜브",
        url: "https://www.youtube.com/watch?v=RSv0K4hQyV8",
      },
      {
        name: "jannahkorea 잔나코리아",
        url: "https://www.youtube.com/watch?v=St-eM7JZdqE",
      },
    ],
    뷰티: [
      {
        name: "PONY Syndrome",
        url: "https://www.youtube.com/watch?v=x9EF-r4LMUI",
      },
      {
        name: "화장하는청담언니",
        url: "https://www.youtube.com/watch?v=Dukox0oFb3k",
      },
      {
        name: "RISABAE",
        url: "https://www.youtube.com/watch?v=TSjVsxsQTes",
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
