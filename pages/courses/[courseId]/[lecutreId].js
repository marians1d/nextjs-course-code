import { useRouter } from 'next/router'

function LecturePage(params) {
    const router = useRouter();

    console.log(router.query);

    return (
        <div>
            <h1>Lecture page</h1>
        </div>
    );
}

export default LecturePage;
