import { useRouter } from 'next/router';

const PortfolioProjectPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Portfolio Project Page: {router.query.id}</h1>
    </div>
  );
};

export default PortfolioProjectPage;
