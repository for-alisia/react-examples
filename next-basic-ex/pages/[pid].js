/** Node imports to pre-render */
import fs from 'fs/promises';
import path from 'path';

const ProductDetail = ({ product }) => {
  return <div>Product Details: {product.description}</div>;
};

export async function getStaticProps(context) {
  const {
    params: { pid },
  } = context;

  const jsonData = await fs.readFile(path.join(process.cwd(), 'data', 'dummy-backend.json'));
  // @ts-ignore
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === pid);

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { pid: 'p1' } }, { params: { pid: 'p2' } }, { params: { pid: 'p3' } }],
    fallback: false,
  };
}

export default ProductDetail;
