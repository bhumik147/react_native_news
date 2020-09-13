import gql from 'graphql-tag';

export const TopHeadlines = gql`
  query TopHeadlines($category: String) {
    headlines(category: $category)
      @rest(
        type: "HeadlinesPayload"
        path: "top-headlines?country=us&category={args.category}&pageSize=100"
      ) {
      totalResults
      articles @type(name: "ArticlePayload") {
        title
        publishedAt
        url
        source @type(name: "SourcePayload") {
          name
        }
      }
    }
  }
`;
export default TopHeadlines;
