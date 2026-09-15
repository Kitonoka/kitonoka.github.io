export interface About {
    name: string;
    username: string;
    role: string;
    bio: string;
    location?: string;
    interests: string[];
    technologies: string[];
}

export const about: About = {
    name: "Kitonoka",
    username: "Kitonoka",

    role: "Developer · Cybersecurity · Game Development",

    bio: "I build software, experiment with technology, and work on projects across development, cybersecurity, and game development.",

    interests: [
        "Cybersecurity",
        "Software Development",
        "Game Development",
        "Linux",
        "Open Source",
        "AI",
    ],

    technologies: [
        "Rust",
        "C++",
        "Python",
        "TypeScript",
        "C#",
        "Unity",
        "Linux",
    ],
};