import type { GithubRepoData, GithubRepoResponse } from '../types/github';

const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

interface CacheEntry {
  data: GithubRepoData;
  cachedAt: number;
}

function cacheKey(owner: string, repo: string): string {
  return `gh:${owner}/${repo}`;
}

function readCache(owner: string, repo: string): GithubRepoData | null {
  try {
    const raw = sessionStorage.getItem(cacheKey(owner, repo));
    if (!raw) return null;
    const entry = JSON.parse(raw) as CacheEntry;
    if (Date.now() - entry.cachedAt > CACHE_TTL_MS) return null;
    return entry.data;
  } catch {
    return null;
  }
}

function writeCache(owner: string, repo: string, data: GithubRepoData): void {
  try {
    const entry: CacheEntry = { data, cachedAt: Date.now() };
    sessionStorage.setItem(cacheKey(owner, repo), JSON.stringify(entry));
  } catch {
    // sessionStorage unavailable or full — caching is a best-effort optimization
  }
}

function mapResponse(payload: GithubRepoResponse): GithubRepoData {
  return {
    stars: payload.stargazers_count,
    language: payload.language,
    updatedAt: payload.updated_at,
    description: payload.description,
    htmlUrl: payload.html_url,
  };
}

export async function fetchRepo(owner: string, repo: string): Promise<GithubRepoData> {
  const cached = readCache(owner, repo);
  if (cached) return cached;

  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    headers: { Accept: 'application/vnd.github+json' },
  });

  if (!response.ok) {
    throw new Error(`GitHub API responded with ${response.status} for ${owner}/${repo}`);
  }

  const payload = (await response.json()) as GithubRepoResponse;
  const data = mapResponse(payload);
  writeCache(owner, repo, data);
  return data;
}
