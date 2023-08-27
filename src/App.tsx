import { useState } from "react";
import bb from "./assets/bb.png";
import axios from "axios";

function App() {
  const initQuote = { quote: "I am Skyler White, Yo!", author: "Skyler White" };
  const [quote, setQuote] = useState(initQuote.quote);
  const [author, setAuthor] = useState(initQuote.author);
  const getQuote = () => {
    axios
      .get("https://api.breakingbadquotes.xyz/v1/quotes/")
      .then((res: any) => {
        setQuote(res.data[0].quote);
        setAuthor(res.data[0].author);
      });
  };
  return (
    <>
      <main className="h-screen font-mono border-yellow-600 bg-green-900 border-8 flex items-center justify-center flex-col">
        <img className="h-20" src={bb} alt="breaking bad" />
        <div className="m-5 text-center">
          <h1 className="text-white text-2xl m-5">{quote}</h1>
          <h1 className="text-black text-4xl">~{author}</h1>
        </div>
        <button
          className="rounded font-bold bg-yellow-600 p-2"
          onClick={getQuote}
        >
          Next Quote
        </button>
      </main>
    </>
  );
}

export default App;
