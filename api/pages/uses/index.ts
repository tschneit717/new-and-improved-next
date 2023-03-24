import { client } from "../../client";

export async function getServerSideProps({ req, res }) {
    const data = await client.fetch('*[ _type == "page" && slug.current == "uses" ]');
    return {
        props: {
            data
        }
    }
}