import { useRouter } from 'next/router'

function CoursePage(params) {
    const router = useRouter();

    console.log(router.query);

    return (
        <div>
            <h1>Course page</h1>
        </div>
    );
}

export default CoursePage;
