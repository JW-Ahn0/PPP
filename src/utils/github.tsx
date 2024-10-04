import { FetchParams } from "../types/Common";
import { BlogContentCardProps, DevToResult } from "../types/News/Blog";
import {
  RepoCardProps,
  RepoContentCardProps,
  RepoToResult,
} from "../types/News/Repo";

const githubURL = "https://api.github.com/search/repositories";
const githubHeaderParams: Record<string, any> = {
  accept: "application/vnd.github+json",
};
function getDate30DaysAgo(): string {
  const today = new Date();
  const date30DaysAgo = new Date(today.setDate(today.getDate() - 30));
  return date30DaysAgo.toISOString().split("T")[0]; // "YYYY-MM-DD" 형식으로 변환
}

const languages = "language:javascript language:typescript";
const dateQuery = `created:>${getDate30DaysAgo()}`;
const q = `${languages} ${dateQuery}`;

const githubParams: Record<string, any> = {
  q: q,
  sort: "stars",
  order: "desc",
};

export const githubParam: FetchParams = {
  url: githubURL,
  headers: githubHeaderParams,
  params: githubParams,
};

export function convertToGitHubItem(result: RepoToResult): RepoCardProps[] {
  return result.items.map((item) => ({
    repoImgPath: "/news/github_repo_img.png",
    repoUserProfileImgPath: item.owner.avatar_url,
    titleStr: item.name,
    descriptionStr: item.description || "there is no description on this repo",
    url: item.html_url,
  }));
}
