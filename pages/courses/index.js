import Link from "next/link";

function CoursesPage(params) {
    const courses = [
        { key: 'js', name: 'JavaScript'},
        { key: 'react', name: 'React'},
        { key: 'next', name: 'Next'},
    ];

    return (
        <div>
            <h1>Courses Page</h1>
            <nav>
                <ul>
                    {courses.map(({key, name}) => (
                        <li key={key}>
                            <Link href={{
                                pathname: '/courses/[courseId]',
                                query: { courseId: key }
                            }}>{name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default CoursesPage;