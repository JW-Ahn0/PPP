import { FetchParams } from "../types/Common";
import { BlogContentCardProps, DevToResult } from "../types/News/Blog";

const blogURL = "https://dev.to/api/articles";
// 7일 동안의 인기 포스팅
const blogParams: Record<string, any> = { top: 7 };
export const blogParam: FetchParams = {
  url: blogURL,
  params: blogParams,
};

export function convertToBlogItem(
  result: DevToResult[]
): BlogContentCardProps[] {
  return result.map((item) => ({
    dayStr: new Date(item.created_at).toLocaleDateString(),
    profileImgPath: item.user.profile_image,
    name: item.user.name,
    imgPath: item.cover_image || "/news/blog_img.png",
    tagList: item.tag_list,
    blogTitle: item.title,
    url: item.url,
  }));
}
