import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Tailwind = () => (
  <div>
    <h1 className="text-teal-500 text-5xl font-extrabold leading-9 tracking-tight font-inter">
      Warning
    </h1>
    <br />
    <h2 className="text-xl font-bold text-gray-800 leading-8 tracking-tight">
      Future Flags
    </h2>

    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
      <p>
        Some future flags of tailwind are in effect
        <br />
        <code className="bg-gray-400 rounded px-2 py-1">
          removeDeprecatedGapUtilities: true
        </code>
        <br />
        <code className="bg-gray-400 rounded px-2 py-1">
          purgeLayersByDefault: true
        </code>
        <br />
        You can disable them by adding double slashes <br />
        <code className="bg-gray-400 rounded px-2 py-1">
          // purgeLayersByDefault: true
        </code>
        <br />
      </p>
      <p>
        This makes upgrading to Tailwind 2.0 easier in the future. If you want
        to know more about them read{" "}
        <a href="https://tailwindcss.com/docs/upcoming-changes">here.</a>
      </p>

      <h3>Tailwindcss Typography</h3>
      <img
        className="w-64 h-auto "
        src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss-typography/master/.github/logo.svg"
      ></img>
      <p>
        is also active. This adds some new classes <br />
        <code className="bg-gray-400 rounded px-2 py-1">
          prose prose-sm sm:prose lg:prose-lg xl:prose-xl
        </code>{" "}
        <br />
        for automatic text styling. You can read more about it{" "}
        <a href="https://github.com/tailwindlabs/tailwindcss-typography">
          here.
        </a>
      </p>
    </div>
  </div>
);

const ProseHero = () => (
  <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mt-48">
    <h2>Home</h2>
    <h3>Lorem Ipsum</h3>
    <p>
      Voluptate Lorem laborum eiusmod occaecat fugiat exercitation cupidatat
      nulla. Consectetur labore aute irure dolore. Lorem adipisicing excepteur
      mollit nisi non exercitation. Aute quis consequat duis aliquip magna. Et
      ullamco officia nulla labore exercitation ea officia pariatur
      excepteur.Veniam officia anim nostrud pariatur sit ullamco non eu. Laboris
      cupidatat ad velit minim magna velit laboris magna reprehenderit sit
      proident do consectetur exercitation. Proident ea veniam ad adipisicing
      quis ut ipsum anim. Ullamco cillum non dolore elit sunt elit. Labore quis
      laborum cillum quis reprehenderit laborum esse minim elit eu non ea sunt
      velit. Non incididunt ullamco minim nostrud.Labore et anim labore ut et.
      Pariatur mollit qui sint eiusmod cupidatat officia veniam aliqua fugiat
      deserunt commodo ad nisi sit. Ut do irure laborum nisi in culpa ad. Dolore
      ea aute deserunt nulla labore anim. Aliquip duis excepteur veniam id
      exercitation anim incididunt elit veniam officia ex aliqua id.
    </p>
  </div>
);

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <Tailwind />
      <ProseHero />
    </Layout>
  );
}

export default IndexPage;
