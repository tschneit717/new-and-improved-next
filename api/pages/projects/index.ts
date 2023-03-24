import { client } from "../../client";

export async function getServerSideProps({ req, res }) {
    const data = await client.fetch('*[ _type == "project" && slug.current == "home" ]');
    const { title, tagline, content } = data[0]
    return {
        props: {
            title,
            tagline,
            content
        }
    }
}