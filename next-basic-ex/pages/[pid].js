/** Node imports to pre-render */
import fs from 'fs/promises';
import path from 'path';

const ProductDetail = ({ product }) => {
  return <div>Product Details: {product && product.description}</div>;
};

const getData = async () => {
  const jsonData = await fs.readFile(path.join(process.cwd(), 'data', 'dummy-backend.json'));
  // @ts-ignore
  const data = JSON.parse(jsonData);

  return data;
};

export async function getStaticProps(context) {
  const {
    params: { pid },
  } = context;

  const data = await getData();

  const product = data.products.find((product) => product.id === pid);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: pathsWithParams,
    fallback: true, // true (with fallback in the component). 'blocking' (without fallback), false (no fallbacks)
  };
}

export default ProductDetail;
