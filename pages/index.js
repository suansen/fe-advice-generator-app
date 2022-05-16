import { useState, useEffect } from "react";

import DividerDesktopComponent from "../assets/divider-desktop";
import IconDiceComponent from "../assets/icon-dice";

export default function Home({ adviceLoad }) {
  const [advice, setAdvice] = useState();
  const [loading, setLoading] = useState(false);

  const fetchAdvice = async () => {
    setLoading(true);
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip);
    setLoading(false);
  };

  const handleClick = e => {
    e.preventDefault();

    fetchAdvice();
  };

  useEffect(() => {
    setLoading(true);
    adviceLoad && setAdvice(adviceLoad.slip);
    setLoading(false);
  }, []);

  return (
    <>
      <main className="relative h-screen w-screen bg-neutral-dark-blue flex justify-center items-center">
        <div className="mx-8 w-[640px] px-4 py-8 round-xl bg-neutral-dark-grayish-blue font-manrope rounded-xl  text-center">
          <h1 className="text-primary-green text-sm tracking-[0.3em] mb-6 uppercase">
            ADVICE #{advice && advice.id}
          </h1>
          {loading ? (
            <div className="flex justify-center pb-8">
              <div className="w-16 border-t-transparent h-16 border-4 border-primary-cyan border-solid rounded-full animate-spin"></div>
            </div>
          ) : (
            <p className="text-2xl text-primary-cyan mb-6">{`" ${
              advice && advice.advice
            } "`}</p>
          )}

          <div className="mb-8 flex justify-center">
            <DividerDesktopComponent />
          </div>
          <div
            onClick={handleClick}
            className="absolute bg-primary-green rounded-full w-16 h-16 m-auto flex justify-center items-center left-[50%] -translate-x-[50%] transition duration-100 hover:scale-110 hover:shadow-sm hover:shadow-primary-green cursor-pointer"
          >
            <IconDiceComponent />
          </div>
        </div>
        <div></div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://api.adviceslip.com/advice");
  const adviceLoad = await res.json();
  console.log(adviceLoad);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      adviceLoad
    }
  };
}
