import { Helmet } from "react-helmet";

export default function Careers() {
  const jobs = [
    { role: "Field Executive (Lucknow)", type: "Full-time", email: "hr@healthmember.co" },
    { role: "Partnerships Associate", type: "Full-time", email: "hr@healthmember.co" },
  ];

  return (
    <>
    <Helmet>
        <title>Careers | HealthEase Membership Pvt. Ltd.</title>
        <meta name="description" content="Explore career opportunities at HealthEase Membership Pvt. Ltd. Join our team and make a difference in the healthcare industry." />
      </Helmet>
      <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Careers</h1>
        <p className="opacity-80 mb-8">
          We hire through HR & block-level RMs as per our policy. Send your resume directly to our HR team.
        </p>

        <div className="space-y-4">
          {jobs.map((j, i) => (
            <div key={i} className="border rounded-2xl p-5 flex items-center justify-between">
              <div>
                <div className="font-semibold">{j.role}</div>
                <div className="text-sm opacity-80">{j.type}</div>
              </div>
              <a className="px-4 py-2 rounded-full bg-primary text-white font-semibold"
                 href={`mailto:${j.email}?subject=Application: ${encodeURIComponent(j.role)}`}>
                Apply Now
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-gray-50">
          <div className="font-semibold mb-2">HR Eligibility Snapshot</div>
          <ul className="list-disc list-inside text-sm opacity-80">
            <li>Graduation OR 3 years corporate experience OR 6-month Training Certificate</li>
            <li>Appointments authorized by HR; at block level, RM is authorized</li>
            <li>Employee & joining data maintained with RM</li>
          </ul>
        </div>
       </div>
      </section>
    </>
   
  );
}
