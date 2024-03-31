import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function RecentPosts() {
    return (
        <Section2 isFancy = {true}>
            <Heading>Posting Terbaru</Heading>
            <Post
                title="Nama"
                body="Nama : Mutiara Devita Eka Putri"
            />
            <Post
                title="NIM"
                body="NIM : 2141720135"
            />
            <Post
                title="Cita Rasa Lisbon"
                body="...those pastéis de nata!"
            />
            <Post
                title="Buenos Aires dalam irama tango"
                body="Saya menyukainya!"
            />
        </Section2>
    );
}