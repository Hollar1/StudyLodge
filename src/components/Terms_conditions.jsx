import React from 'react'
import NavBar from "./NavBar";
import Footer from "./Footer";
import Terms_condition_styles from "../components/style_Modules/Terms_conditions.module.css"

function Terms_conditions() {
  return (
    <div>
        <NavBar/>
        <div className={Terms_condition_styles.header_div}><h3>Our Terms & Conditions</h3></div>
        <div className={Terms_condition_styles.parent_div}>

          
   
1. Introduction

These Terms and Conditions govern the occupancy of student accommodation at [Accommodation Name], in accordance with Nigerian law.
2. Definitions

"Accommodation" refers to the rooms and facilities provided by [Accommodation Name].
"Tenant" refers to the student who occupies the accommodation.
"Landlord" refers to [Accommodation Name] or its managing entity.
3. Lease Agreement

The lease is a fixed-term agreement for a period of [e.g., 12 months], commencing on [Start Date] and ending on [End Date].
The agreement may be renewed or extended upon mutual consent of both parties.
4. Rent and Payments

Rent is [Amount] per month, payable in advance by the [e.g., 5th] day of each month.
A security deposit of [Amount] is required before occupancy, refundable upon the end of the tenancy, subject to deductions for damages or unpaid rent.
5. Utilities and Bills

Rent includes/excludes utilities such as water, electricity, and internet. [Specify included utilities.]
Tenants are responsible for the payment of excluded utilities. Meters will be provided for fair calculation.
6. Use of Premises

The accommodation is for residential use only and must not be used for commercial activities.
Subletting is strictly prohibited without prior written consent from the Landlord.
7. Maintenance and Repairs

Tenants must keep the accommodation in good condition and report any damages or needed repairs immediately.
Routine maintenance will be carried out by the Landlord. Tenants may be charged for repairs caused by negligence or misuse.
8. Conduct and Noise

Tenants must conduct themselves in a manner that does not disturb other residents.
Noise levels should be minimized, especially during nighttime hours (10 PM to 6 AM).
9. Visitors

Tenants may have visitors, but overnight stays are limited to [e.g., 3 nights per month], with prior notification to the management.
Visitors must adhere to the accommodation's rules and regulations.
10. Termination of Tenancy

The Landlord may terminate the lease for breach of terms, including non-payment of rent, damage to property, or misconduct.
Tenants may terminate the lease by giving [e.g., 1 month’s] written notice.
11. Security and Safety

Tenants must ensure that doors and windows are locked when leaving the premises.
The use of illegal substances and hazardous materials is prohibited.
12. Insurance

The Landlord is not responsible for the loss or damage of tenants' personal belongings. Tenants are advised to obtain personal property insurance.
13. Governing Law

This agreement shall be governed by and construed in accordance with the laws of Nigeria.
Any disputes arising from this agreement shall be settled in Nigerian courts.
14. Amendments

The Landlord reserves the right to amend these terms and conditions with [e.g., 30 days] notice to tenants.
15. Acceptance

By signing this agreement, the tenant agrees to abide by the terms and conditions set forth herein.

        </div>
        <Footer/>
    </div>
  )
}

export default Terms_conditions