import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Karte from "../components/Karte";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <Karte title="Titel">
        <p>
          Ut ullamco culpa ad quis excepteur dolor eiusmod aliquip. Adipisicing
          do in qui eiusmod ea in velit quis in labore aliquip do. Quis non
          deserunt do sint. Esse qui in duis ullamco elit ipsum in cupidatat
          occaecat magna do culpa. Tempor ut laborum sit velit dolore mollit
          reprehenderit ut ullamco. Labore laboris excepteur laborum ea et ipsum
          magna exercitation amet laboris culpa. Do reprehenderit labore
          exercitation voluptate qui ipsum sunt enim sunt pariatur nisi irure.
          Magna magna officia cupidatat ad sint dolor ipsum pariatur
          exercitation enim tempor. Do fugiat fugiat incididunt tempor
          consectetur velit nostrud eiusmod reprehenderit. Eiusmod dolore
          deserunt nulla sint duis id excepteur incididunt aliqua fugiat. Sit
          veniam irure esse consectetur. Aliquip deserunt sint enim labore
          voluptate Lorem veniam consequat commodo ad dolor. Labore occaecat
          dolore incididunt ipsum cillum nostrud ad incididunt sunt nulla sit
          duis veniam. Ut ea dolor laboris duis duis consectetur esse mollit id
          laborum anim. Amet esse commodo officia dolore ea adipisicing.
        </p>
      </Karte>
    </Layout>
  );
}

export default IndexPage;
