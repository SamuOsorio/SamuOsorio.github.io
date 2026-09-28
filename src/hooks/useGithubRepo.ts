import { useEffect, useState } from 'react';
import { fetchRepo } from '../lib/githubApi';
import type { FetchStatus, GithubRepoData } from '../types/github';

interface UseGithubRepoResult {
  data: GithubRepoData | null;
  status: FetchStatus;
}

export function useGithubRepo(owner: string, repo: string): UseGithubRepoResult {
  const requestKey = `${owner}/${repo}`;
  const [trackedKey, setTrackedKey] = useState(requestKey);
  const [data, setData] = useState<GithubRepoData | null>(null);
  const [status, setStatus] = useState<FetchStatus>('loading');

  // Reset during render (not in the effect body) when owner/repo changes,
  // per React's "adjusting state when props change" pattern.
  if (requestKey !== trackedKey) {
    setTrackedKey(requestKey);
    setStatus('loading');
    setData(null);
  }

  useEffect(() => {
    let cancelled = false;

    fetchRepo(owner, repo)
      .then((result) => {
        if (cancelled) return;
        setData(result);
        setStatus('success');
      })
      .catch(() => {
        if (cancelled) return;
        setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, [owner, repo]);

  return { data, status };
}
