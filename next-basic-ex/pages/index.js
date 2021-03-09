import Link from 'next/link';
/** Node imports to pre-render */
import fs from 'fs/promises';
import path from 'path';

const HomePage = ({ products }) => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
      <ul>
        {products.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Static generation (pre-renders on building a project)
export async function getStaticProps(context) {
  console.log(context);
  const jsonData = await fs.readFile(path.join(process.cwd(), 'data', 'dummy-backend.json'));
  // @ts-ignore
  const data = JSON.parse(jsonData);
  return {
    props: {
      products: data.products,
    },
    // To re-render each 60 seconds (ISR)
    revalidate: 60,
    // If 'true' returns 404
    //notFound: false,
    // Redirect users to another page
    //redirect: {
    //  destination: '/',
    //},
  };
}

export default HomePage;
