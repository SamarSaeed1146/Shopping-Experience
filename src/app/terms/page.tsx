import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions for [Shopping Experience]",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-5 py-12 leading-relaxed">
      <div className="mx-auto text-center">
        <h2 className="py-6 text-4xl font-bold text-gray-900">Terms & Conditions</h2>
        <p className="text-lg font-medium text-gray-700">
          Welcome to Shopping Experience! These Terms & Conditions outline the rules and guidelines for using our website.
        </p>
      </div>

      <div className="space-y-8">
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">1. Introduction</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi, quae error dolore nisi ab suscipit molestias sed qui, in nesciunt obcaecati! Aspernatur, vero amet, vitae rem libero beatae dolorem alias architecto corporis, sapiente odio ad. Commodi, suscipit. Ipsam ullam corporis sit nobis laborum laboriosam velit exercitationem consequatur rerum voluptatum.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">2. Intellectual Property</h3>
          <p className="text-gray-600">
            The content on this website, including text, graphics, logos, and images, is the property of <span className="font-bold">Shopping Experience</span> and is protected by intellectual property laws.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">3. User Responsibilities</h3>
          <p className="text-gray-600">
            By using this website, you agree not to engage in any activity that could harm the website or its users. This includes, but is not limited to, hacking, spamming, or distributing malicious software.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">4. Limitation of Liability</h3>
          <p className="text-gray-600">
          <span className="font-bold">Shopping Experience</span> will not be liable for any damages arising from the use of this website, including direct, indirect, incidental, or consequential damages.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">5. Changes to Terms</h3>
          <p className="text-gray-600">
            We reserve the right to modify these Terms & Conditions at any time. Any changes will be posted on this page, and your continued use of the website constitutes acceptance of the updated terms.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">6. Governing Law</h3>
          <p className="text-gray-600">
            These Terms & Conditions are governed by the laws of <span className="font-bold">Sindh, Pakistan</span>, and any disputes will be resolved in the courts of <span className="font-bold">Sindh</span>.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">7. Contact Us</h3>
          <p className="text-gray-600">
            If you have any questions about these Terms & Conditions, please contact us at <span className="font-bold">shoppingexperience123@gmail.com</span>.
          </p>
        </section>
      </div>
    </main>
  );
}