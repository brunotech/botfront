import gql from 'graphql-tag';

export const SEARCH_FRAGMENTS = gql`
query dialogueFragments($projectId: String! $language: String! $queryString: String!) {
    dialogueFragments(projectId: $projectId language: $language queryString: $queryString) {
        _id
        storyGroupId
        type
        title
    }
}`;
