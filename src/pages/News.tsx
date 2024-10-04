import styled from "@emotion/styled";
import BlogContentCardContainer from "../components/features/News/Blog/BlogContentCardContainer/BlogContentCardContainer";
import RepoCardContainer from "../components/features/News/Github/RepoCardContainer/RepoCardContainer";
import SaraminCardContainer from "../components/features/News/Saramin/SaraminCardContainer/SaraminCardContainer";
import { fetchData } from "../utils/util";
import { BlogContentCardProps, DevToResult } from "../types/News/Blog";
import { useEffect, useState } from "react";
import { blogParam, convertToBlogItem } from "../utils/blog";

const News = () => {
  const [blogArguList, setBlogArguList] = useState<BlogContentCardProps[]>([]); // 상태로 관리

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const result = await fetchData<DevToResult[]>(blogParam); // 비동기 호출
        console.log(result);
        const ArguList = convertToBlogItem(result);
        setBlogArguList(ArguList); // 변환된 데이터를 상태에 저장
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchBlogData(); // 비동기 함수 호출
  }, []);

  const githubArgus = {
    repoImgPath: "/news/github_repo_img.png",
    repoUserProfileImgPath: "/news/github_user_profile.png",
    titleStr: "threejs-portfolio",
    descriptionStr: "Learn how to build 3D websites from scratch ...",
  };
  const githubArgusArguList = Array.from({ length: 6 }, () => ({
    ...githubArgus,
  }));

  const saraminArgus = {
    logoImgPath: "/news/saramin_logo.png",
    titleStr: "자동화장비 기술영업 담당자 채용",
    compnayNameStr: "(주)제일에프에이",
    conditionStr: "경기전체 | 10년 | 초대졸이상",
    locationImgPath: "/icons/location.svg",
    dateStr: "~10.09(수)",
  };
  const saraminArgusList = Array.from({ length: 6 }, () => ({
    ...saraminArgus,
  }));
  return (
    <NewsWrapper>
      <SaraminCardContainer
        SaraminCardPropsList={saraminArgusList}
      ></SaraminCardContainer>
      <BlogContentCardContainer
        BlogContentCardPropsList={blogArguList}
      ></BlogContentCardContainer>
      <RepoCardContainer
        RepoCardPropsList={githubArgusArguList}
      ></RepoCardContainer>
    </NewsWrapper>
  );
};

export default News;

const NewsWrapper = styled.div`
  overflow: auto;
`;
