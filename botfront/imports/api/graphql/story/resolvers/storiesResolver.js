import { searchStories } from '../mongo/stories';

export default {
    Query: {
        dialogueFragments: async (_, args) => {
            const { projectId, language, queryString } = args;
            return searchStories(projectId, language, queryString);
        },
    },
};
