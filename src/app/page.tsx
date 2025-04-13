'use client'

import "./styles/globals.scss";
import MenyUploadSection from "./blocks/MenuUploadSection";

const Home: React.FC = () => {
  return (
    <div className="max-w-screen-xl p-2 my-0 mx-auto font-[family-name:var(--font-geist-sans)]">
      <main className="py-8">
          <MenyUploadSection />
      </main>
    </div>
  );
};

export default Home;
