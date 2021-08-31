import PageBody from "./page-body";
import PageTitle from "./page-title";

const PageLayout = ({ title, children }) => {
  return (
    <>
      <PageTitle title={title} />
      <PageBody>{children}</PageBody>
    </>
  );
};

export default PageLayout;
