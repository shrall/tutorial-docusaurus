import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";

function Seo() {
  return (
    <Layout>
      <Head>
        <title>SEO</title>
        <meta name="description" content="This is the SEO description" />
      </Head>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
        }}
      >
        Hi! This is the SEO page. 👋
      </div>
    </Layout>
  );
}

export default Seo;
