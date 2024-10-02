import styled from "@emotion/styled";
import BlogContentCardContainer from "../components/features/News/Blog/BlogContentCardContainer/BlogContentCardContainer";
import RepoCardContainer from "../components/features/News/Github/RepoCardContainer/RepoCardContainer";
import SaraminCardContainer from "../components/features/News/Saramin/SaraminCardContainer/SaraminCardContainer";

const News = () => {
  const blogArgus = {
    dayStr: "Sep 13, 2022",
    profileImgPath: "/news/profile_img.png",
    name: "Vishal Yadav",
    imgPath: "/news/blog_img.png",
    tagList: ["javascript", "react", "html", "css"],
    blogTitle:
      "Launching Oxy-UI: A Powerful and Modern UI Library for Your WebProjects",
  };

  const githubArgus = {
    repoImgPath: "/news/github_repo_img.png",
    repoUserProfileImgPath: "/news/github_user_profile.png",
    titleStr: "threejs-portfolio",
    descriptionStr: "Learn how to build 3D websites from scratch ...",
  };
  const githubArgusArguList = Array.from({ length: 6 }, () => ({
    ...githubArgus,
  }));
  const blogArguList = Array.from({ length: 6 }, () => ({ ...blogArgus }));

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
