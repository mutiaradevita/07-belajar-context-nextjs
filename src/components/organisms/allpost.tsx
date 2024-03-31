import Heading from "../atoms/heading";
import Section2 from "../atoms/section2";
import RecentPosts from "../molecules/rencentpost";

export default function AllPosts() {
    return (
        <Section2 isFancy={true}>
            <Heading>Posts</Heading>
            <RecentPosts />
        </Section2>
    );
}