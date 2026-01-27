import { Phone, Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 px-6 bg-orange-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Contact Us Anytime
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="tel:+94769300334"
            className="bg-white text-gray-900 p-6 rounded-xl flex justify-center gap-3"
          >
            <Phone /> (+94) 769 300 334
          </a>

          <a
            href="mailto:info@srilankatoursdriver.com"
            className="bg-white text-gray-900 p-6 rounded-xl flex justify-center gap-3"
          >
            <Mail /> info@srilankatoursdriver.com
          </a>
        </div>
      </div>
    </section>
  );
}
