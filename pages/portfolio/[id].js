import { useRouter } from 'next/router'

function PortfolioSpecificPage(params) {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);

    return (
        <div>
            {router.pathname}

            <h1>Portfolio Specific Page</h1>
        </div>
    );
}

export default PortfolioSpecificPage;