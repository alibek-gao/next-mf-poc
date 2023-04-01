import Page from 'remote/Page';
const Page2 = Page;

export const getServerSideProps = async (ctx) => {
  const page = await import('remote/Page');

  if (page.getServerSideProps) {
    return page.getServerSideProps(ctx)
  }

  return {
    props: {},
  }
}
export default Page2;