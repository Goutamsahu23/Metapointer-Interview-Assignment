# Metapointer-Interview-Assignment

test input:
            {
                "inputArray":["eat","ate","tea","bat","tab","pin"]
            }

test output:
            [
                [
                    "eat",
                    "ate",
                    "tea"
                ],
                [
                    "bat",
                    "tab"
                ],
                [
                    "pin"
                ]
            ]


mistake in the previous code :

function findAnagram(word, words) {
  const sortedWord = sortString(word);

  const resultArray = words.filter(myword => {
    const sortMyWord = sortString(myword);

    return sortedWord === sortMyWord && word.toLowerCase() !== myword.toLowerCase();
  });

  return resultArray;
}

in the previous logic i am not checking the word is the part of list or not and in the updated code i am checking for the word to preventing the duplicate anagrams.
(thats why i am getting the duplicate words in my previous output).


