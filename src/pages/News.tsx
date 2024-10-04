import styled from "@emotion/styled";
import BlogContentCardContainer from "../components/features/News/Blog/BlogContentCardContainer/BlogContentCardContainer";
import RepoCardContainer from "../components/features/News/Github/RepoCardContainer/RepoCardContainer";
import SaraminCardContainer from "../components/features/News/Saramin/SaraminCardContainer/SaraminCardContainer";
import { fetchData } from "../utils/util";
import { BlogContentCardProps, DevToResult } from "../types/News/Blog";
import { useEffect, useState } from "react";
import { blogParam, convertToBlogItem } from "../utils/Blog";
import { RepoCardProps, RepoToResult } from "../types/News/Repo";
import { convertToGitHubItem, githubParam } from "../utils/Github";
import { convertToSaraminItem, tempSaraminParam } from "../utils/Saramin";
import { SaraminCardProps, SaraminToResult } from "../types/News/Saramin";
import { FetchParams } from "../types/Common";

const News = () => {
  const [blogArguList, setBlogArguList] = useState<BlogContentCardProps[]>([]);
  const [githubArguList, setGithubArguList] = useState<RepoCardProps[]>([]);
  const [saraminArgusList, setSaraminArgusList] = useState<SaraminCardProps[]>(
    []
  );

  useEffect(() => {
    const fetchAndSetData = async <T,>(
      fetchParams: FetchParams,
      convertFunction: (data: T) => any,
      setStateFunction: React.Dispatch<React.SetStateAction<any>>
    ) => {
      try {
        const result = await fetchData<T>(fetchParams);
        const ArguList = convertFunction(result);
        setStateFunction(ArguList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAndSetData<DevToResult[]>(
      blogParam,
      convertToBlogItem,
      setBlogArguList
    );
    fetchAndSetData<RepoToResult>(
      githubParam,
      convertToGitHubItem,
      setGithubArguList
    );
    fetchAndSetData<SaraminToResult>(
      tempSaraminParam,
      convertToSaraminItem,
      setSaraminArgusList
    );
  }, []);

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
  min-width: 300px;
  overflow: auto;
`;
