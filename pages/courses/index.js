import Link from "next/link";

function CoursesPage(params) {
    return (
        <div>
            <h1>Courses Page</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/courses/1">One</Link>
                    </li>
                    <li>
                        <Link href="/courses/2">Two</Link>
                    </li>
                    <li>
                        <Link href="/courses/3">Three</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default CoursesPage;