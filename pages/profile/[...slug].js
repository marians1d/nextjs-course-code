import { useRouter } from 'next/router'

function ProfilePage() {
    const router = useRouter();

    console.log(router.query);

    return (
        <div>
            <h1>Profile Page</h1>
        </div>
    )
}

export default ProfilePage;