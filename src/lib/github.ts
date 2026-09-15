export interface GitHubRepository {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    archived: boolean;
    fork: boolean;
    private: boolean;
    topics: string[];
    pushed_at: string;
    updated_at: string;
}

const API_URL = "https://api.github.com";
const USERNAME = "Kitonoka";

export async function getGitHubRepositories(): Promise<GitHubRepository[]> {
    const response = await fetch(
        `${API_URL}/users/${USERNAME}/repos?type=owner&sort=pushed&direction=desc&per_page=100`,
        {
            headers: {
                Accept: "application/vnd.github+json",
                "X-GitHub-Api-Version": "2026-03-10",
            },
        },
    );

    if (!response.ok) {
        throw new Error(
            `GitHub API request failed: ${response.status} ${response.statusText}`,
        );
    }

    const repositories =
        (await response.json()) as GitHubRepository[];

    return repositories
        .filter((repository) => {
            return (
                !repository.private &&
                !repository.fork &&
                !repository.archived
            );
        })
        .sort((a, b) => {
            return (
                new Date(b.pushed_at).getTime() -
                new Date(a.pushed_at).getTime()
            );
        });
}