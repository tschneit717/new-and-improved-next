import { createClient } from "next-sanity";

export const client = createClient({
    projectId: process.env.PROJECT_ID,
    dataset: "production"
});