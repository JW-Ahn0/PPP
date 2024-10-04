import styled from "@emotion/styled";
import BlogContentCardContainer from "../components/features/News/Blog/BlogContentCardContainer/BlogContentCardContainer";
import RepoCardContainer from "../components/features/News/Github/RepoCardContainer/RepoCardContainer";
import SaraminCardContainer from "../components/features/News/Saramin/SaraminCardContainer/SaraminCardContainer";
import { fetchData } from "../utils/util";
import { BlogContentCardProps, DevToResult } from "../types/News/Blog";
import { useEffect, useState } from "react";
import { blogParam, convertToBlogItem } from "../utils/blog";
import { RepoCardProps, RepoToResult } from "../types/News/Repo";
import { convertToGitHubItem, githubParam } from "../utils/github";

const News = () => {
  const [blogArguList, setBlogArguList] = useState<BlogContentCardProps[]>([]);
  const [githubArguList, setGithubArguList] = useState<RepoCardProps[]>([]);
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const result = await fetchData<DevToResult[]>(blogParam);
        const ArguList = convertToBlogItem(result);
        setBlogArguList(ArguList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchBlogData();

    const fetchGithubData = async () => {
      try {
        const result = await fetchData<RepoToResult>(githubParam);

        const ArguList = convertToGitHubItem(result);
        setGithubArguList(ArguList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchBlogData();
    fetchGithubData();
  }, []);

  const githubArgus = {
    repoImgPath: "/news/github_repo_img.png",
    repoUserProfileImgPath: "/news/github_user_profile.png",
    titleStr: "threejs-portfolio",
    descriptionStr: "Learn how to build 3D websites from scratch ...",
  };
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
      <RepoCardContainer RepoCardPropsList={githubArguList}></RepoCardContainer>
    </NewsWrapper>
  );
};

export default News;

const NewsWrapper = styled.div`
  overflow: auto;
`;
