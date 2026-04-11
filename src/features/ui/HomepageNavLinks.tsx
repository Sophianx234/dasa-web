import DashNavLink from "../dashboard/components/DashNavLink";

function HomepageNavLinks() {
  return (
    <>
      <DashNavLink title="About" link="/about" />
      <DashNavLink title="Support" link="" />
      <DashNavLink title="Help" link="" />
      <DashNavLink title="Signup" link="/signup" />
      <DashNavLink title="login" link="/login" />
    </>
  );
}

export default HomepageNavLinks;
