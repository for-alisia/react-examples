// @ts-nocheck
import { useRouter } from 'next/router';

const BlogPostPage = () => {
  const router = useRouter();

  console.log(router.query.slug);
  return (
    <div>
      <h1>Blog Post Page for year month</h1>
    </div>
  );
};

export default BlogPostPage;
