import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        title="Contact"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <section className="prose lg:prose-lg">
        <h1>Contact</h1>
        <form className="mx-auto max-w-screen-sm md:max-w-screen-lg lg:max-w-screen-xl">
          <label className="block">
            <span className="text-gray-700">First Name</span>
            <input
              className="form-input mt-1 block w-full"
              id="first-name"
              type="text"
              placeholder="Bill"
            />
          </label>

          <div className="mt-4">
            <label className="block" htmlFor="last-name">
              <span className="text-gray-700">Last Name</span>
              <input
                className="form-input mt-1 block w-full"
                id="last-name"
                type="text"
                placeholder="Murray"
              />
            </label>
          </div>

          <div className="mt-4">
            <label className="block" htmlFor="message">
              <span className="text-gray-700">Message</span>
              <textarea
                className="form-textarea w-full"
                id="message"
                placeholder="Say something..."
                rows="8"
              />
            </label>
          </div>
          <div className="mt-4">
            <button className="form-input text-gray-700">Submit</button>
          </div>
        </form>
      </section>
    </Layout>
  );
}

export default ContactPage;
