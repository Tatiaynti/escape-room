// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'components/common/common' or i... Remove this comment to see the full error message
import { Header, Footer } from 'components/common/common';

const MainLayout = ({
  children
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Header />
    {children}
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Footer />
  </>
);

export default MainLayout;
