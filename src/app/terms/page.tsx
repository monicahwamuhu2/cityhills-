// src/app/terms/page.tsx
import Link from "next/link";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link 
          href="/" 
          className="text-blue-600 hover:text-blue-700 font-medium mb-8 inline-block"
        >
          ← Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'serif' }}>
            Terms of Service
          </h1>
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing or using the CityHills Initiatives website ("Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About CityHills Initiatives</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              CityHills Initiatives is a youth-led nonprofit organization committed to empowering young people through education, leadership development, skills training, mentorship, and entrepreneurship programs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Our Website</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Permitted Use</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may use our Site for lawful purposes only. You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Use the Site in any way that violates any applicable law or regulation</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Transmit any viruses, malware, or harmful code</li>
              <li>Engage in any automated use of the system</li>
              <li>Harass, abuse, or harm another person</li>
              <li>Impersonate CityHills Initiatives or any other person or entity</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Account Responsibilities</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you create an account or join our community, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content on this Site, including text, graphics, logos, images, and software, is the property of CityHills Initiatives or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may not reproduce, distribute, modify, or create derivative works from our content without express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">User-Generated Content</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you submit content through our contact forms, community platforms, or social media:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>You retain ownership of your content</li>
              <li>You grant us a license to use, display, and distribute your content for our organizational purposes</li>
              <li>You represent that you have the right to submit the content</li>
              <li>You agree that your content does not violate any third-party rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Programs and Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Information about our programs, events, and services is subject to change. We reserve the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Modify or discontinue programs at any time</li>
              <li>Change program requirements or eligibility criteria</li>
              <li>Limit participation in programs</li>
              <li>Update program schedules and locations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Donations and Payments</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All donations are voluntary and non-refundable unless otherwise stated. We use secure third-party payment processors. By making a donation, you agree to the terms of our payment processor.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer of Warranties</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Site is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>The Site will be uninterrupted or error-free</li>
              <li>Defects will be corrected</li>
              <li>The Site is free of viruses or harmful components</li>
              <li>Information on the Site is accurate or complete</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the fullest extent permitted by law, CityHills Initiatives shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to indemnify and hold CityHills Initiatives harmless from any claims, damages, losses, or expenses arising from your use of the Site or violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Site may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites. Your use of third-party websites is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to terminate or suspend your access to our Site at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of Nigeria, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:cityhills@cityhillinitiatives.com" className="text-blue-600 hover:text-blue-700">
                  cityhills@cityhillinitiatives.com
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Location:</strong> Nigeria
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By using our Site, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}