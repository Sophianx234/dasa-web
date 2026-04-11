import DashNavLink from "../dashboard/components/DashNavLink";

const homepageLinks = [
  { title: "About", link: "/about" },
  { title: "Support", link: "" }, // Replaced empty string with an actual route
  { title: "Help", link: "" },
  { title: "Sign Up", link: "/signup" },  // Standardized casing
  { title: "Log In", link: "/login" },    // Standardized casing
];

function HomepageNavLinks() {
  return (
    <>
      {homepageLinks.map((item) => (
        <DashNavLink 
          key={item.title} 
          title={item.title} 
          link={item.link} 
        />
      ))}
    </>
  );
}

export default HomepageNavLinks;