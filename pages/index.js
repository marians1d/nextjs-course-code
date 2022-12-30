import Link from "next/link";
import router from 'next/router'

function HomePage() {
    const loginHandler = () => {
        setTimeout(() => router.push('/login'), 3000)
    }

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
                    <li>
                        <button onClick={loginHandler}>Login</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default HomePage;