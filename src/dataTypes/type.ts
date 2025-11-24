
export interface ServiceItem {
    title: string;
    description: string;
}

export interface ServiceData {
    id: number;
    title: string;
    image: string[]; 
    description: string;
    items: ServiceItem[];
}


export interface Skill {
    title: string;
    url: string;
    color: string;
}

export type  SkillList  = Skill[]


export interface Tech {
    id: number;
    title: string;
    logo: string;
    color: string;
}


export interface Project {
    id: number;
    title: string;
    tech: Tech[];
    image: string[];
    description: string;
    link: string;      
    demo?: string;     
}