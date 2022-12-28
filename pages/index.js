import Link from "next/link";

function HomePage() {
    return (
        <div>
            <h1>Home page</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/courses">Courses</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default HomePage;