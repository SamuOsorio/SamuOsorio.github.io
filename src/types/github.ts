export interface GithubRepoData {
  stars: number;
  language: string | null;
  updatedAt: string;
  description: string | null;
  htmlUrl: string;
}

export interface GithubRepoResponse {
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  description: string | null;
  html_url: string;
}

export type FetchStatus = 'loading' | 'success' | 'error';
