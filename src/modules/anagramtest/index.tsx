import React, { useState } from "react";

export const AnagramComponent = () => {
  const [firstStr, setFirstString] = useState<string>("");
  const [secondStr, setSecondString] = useState<string>("");
  const [anagramMessage, setAnagramMessage] = useState<string>("");
  const firstString = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFirstString(e.target.value);
  };
  const secondString = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSecondString(e.target.value);
  };

  const isAnagram = () => {
    if (firstStr.length !== secondStr.length) {
      setAnagramMessage("String is not Anagram");
    }
    let str1 = firstStr.split("").sort().join("");
    let str2 = secondStr.split("").sort().join("");
    if (str1 === str2) {
      setAnagramMessage("String is Anagram");
    } else {
      setAnagramMessage("String is not Anagram");
    }
  };
  return (
    <div>
      <div>
        <b>Anagram Tester</b>
        <div>
          <form>
            <div>
              <b>First String</b> :{" "}
              <input
                className="first"
                type="text"
                name="first"
                onChange={firstString}
              />
            </div>
            <div>
              <b>Second String</b> :{" "}
              <input type="text" name="second" onChange={secondString} />
            </div>
            <button type="button" onClick={isAnagram}>
              Check is Anaggram
            </button>

            {anagramMessage && anagramMessage}
          </form>
        </div>
      </div>
    </div>
  );
};
