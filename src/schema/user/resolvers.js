import fetchData from '../../github/dataFetcher';
import githubQueries from '../../github/queries';

export default {
  Query: {
    me: async (parent, args, { token }) => {
      const body = githubQueries.me();
      const data = await fetchData(body, token);
  
      const viewer = data.data.viewer;
  
      return {
        id: viewer.id,
        login: viewer.login,
        name: viewer.name,
        location: viewer.location,
        bio: viewer.bio,
        totalRepos: viewer.repositories.totalCount
      }
    }
  }
}