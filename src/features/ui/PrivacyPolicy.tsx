import { Dispatch, SetStateAction } from "react"
import TermsList from "./TermsList"
import { IoCloseOutline } from "react-icons/io5"
type privacyProps = {
  handleClose?: Dispatch<SetStateAction<boolean>>
}
function PrivacyPolicy({handleClose}:privacyProps) {
  return (
    <div className="fixed mx-3 my-3  inset-0 bg-white px-4 pt-2  ">
      <div className=" overflow-y-scroll  h-[38rem]">

      <div className={`  rounded-full  top-1 right-1 ${'absolute p-1'} bg-white shadow-sm border z-20`}>
                                  <IoCloseOutline onClick={()=>handleClose?.(false)} className="size-6  stroke-red-400  "/>
                                      </div>
      <div className="pb-8">

<h1 className="text-lg font-bold text-center  text-[#33312e] pb-3 pt-2"> Dagbon Students Association <br /> Privacy Policy
</h1>
<p> Your privacy is a top priority. This Privacy Policy outlines how we collect, use, store, and protect your information.</p>


<TermsList
  title="Information We Collect"
  listItems={[
    "Personal Information: Full name, email address, student ID, department, level of study.",
    "Account Information: Login credentials, profile picture, date of joining.",
    "Usage Data: Interactions, messages sent, pages visited, posts submitted.",
    "Optional Data: Business listings, feedback forms, anonymous posts.",
    "Device Data: IP address, browser type, access time.",
  ]}
/>

<TermsList
  title="How We Use Your Information"
  listItems={[
    "Provide you with a personalized and secure experience.",
    "Display relevant content (e.g., announcements, events).",
    "Notify you about important updates.",
    "Facilitate member communication and community interaction.",
    "Moderate content and maintain a safe environment.",
  ]}
/>

<TermsList
  title="Legal Basis for Processing"
  listItems={[
    "Your consent (e.g., for marketing messages).",
    "Our legitimate interest in improving services.",
    "Legal obligations or administrative requirements.",
  ]}
/>

<TermsList
  title="How We Share Information"
  listItems={[
    "We do not sell your data to third parties.",
    "Admins may access certain data for moderation or community support.",
    "We may share anonymized statistics for research or DaSA reports.",
  ]}
/>

<TermsList
  title="Cookies and Tracking Technologies"
  listItems={[
    "We use cookies to maintain your session and analyze usage.",
    "You may disable cookies via browser settings, but this may affect platform functionality.",
  ]}
/>

<TermsList
  title="Data Security"
  listItems={[
    "We use SSL encryption, secure databases, and access controls.",
    "Only authorized personnel have access to sensitive data.",
    "Despite best efforts, no system is 100% secure; use the platform responsibly.",
  ]}
/>

<TermsList
  title="Your Rights"
  listItems={[
    "Access your data.",
    "Request correction or deletion.",
    "Withdraw consent.",
    "Request a copy of your personal data.",
  ]}
/>

<TermsList
  title="Data Retention"
  listItems={[
    "We retain user data for as long as your account is active.",
    "Business or post data may remain archived for community purposes unless requested for removal.",
  ]}
/>

<TermsList
  title="Third-Party Services"
  listItems={[
    "DasaPage may integrate services like Cloudinary (media storage) or Paystack (payment gateway).",
    "Their privacy policies apply.",
  ]}
/>

<TermsList
  title="Changes to This Policy"
  listItems={[
    "We may update this policy periodically.",
    "You will be notified via email or a banner alert on the website.",
  ]}
/>
<h1 className="text-lg font-bold text-center  text-[#33312e] py-1 pt-3">Contact Us</h1>
<p className="text-center">For any privacy-related concerns, please reach out at <a href="mailto:dasaug@gmail.com" className="hover:underline underline-offset-1">dasaug@gmail.com</a> </p>


    </div>
    </div>
    </div>
  )
}

export default PrivacyPolicy
