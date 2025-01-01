import React from 'react'
import UseMobileOnlyStyles from "../components/style_Modules/UseMobileOnly.module.css"

function UseMobileOnly() {
  return (
    <div>
        <div className={UseMobileOnlyStyles.useMobileOnly_ramp}>
        You can inform customers about the situation with a clear, polite
        message on the website. Here's an example of how you can communicate
        this effectively: --- Message for Users: "Notice: Mobile-Optimized
        Experience Available Our website is currently undergoing maintenance for
        larger screen sizes (e.g., desktop and tablets). For the best
        experience, we recommend using a mobile device to access our services.
        We apologize for the inconvenience and are working hard to bring you a
        seamless experience on all devices soon. Thank you for your
        understanding!"** --- This message can be displayed as a banner, pop-up,
        or modal dialog on the website when users access it on larger screens.
      </div>
    </div>
  )
}

export default UseMobileOnly