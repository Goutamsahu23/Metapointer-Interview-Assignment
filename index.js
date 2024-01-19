const express=require('express');
const app=express();
const PORT=4000;


app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hello");
})

// app.post('/commonPrefix',(req,res)=>{
//     const { strings}=req.body;

//     if(!strings){
//         return res.status(400).json({
//             error:"invalid input"
//         });
//     }

//     const commonPrefix=findCommonPrifix(strings);

//     res.status(200).json({commonPrefix});
// });

// function findCommonPrifix(strings){
//     if(!strings || strings.length == 0){
//         return null;
//     }

//     const firstString=strings[0];

//     for(let i= 0; i< firstString.length;i++){
//         for(let j=1;j<strings.length;j++){
//             if(firstString[i] !== strings[j][i]){
//                 return firstString.slice(0,i);
//             }
//         }
//     }

//     return firstString;
// }

// app.get('/factrial/:num',(req,res)=>{
//     const {num}=req.params;

//     if(num < 0){
//         return res.status(400).json({
//             error:"invalid inp"
//         })
//     }

//     const fact=calculateFact(num);

//     res.status(200).json({
//         fact
//     });

// })

// function calculateFact(num){
//     if(num === 0 || num ===1){
//         return 1;
//     }

//     return num*calculateFact(num-1);
// }


app.post('/anagrams', (req, res) => {
    const { inputArray } = req.body;
  
    if (!inputArray || !Array.isArray(inputArray)) {
      return res.status(400).json({ error: 'Invalid input. Please provide an array of words.' });
    }
  
    const outputArray = findAnagrams(inputArray);
  
    res.json(outputArray);
  });
  

function findAnagrams(inputArray) {
    const resultArray = [];
  
    function sortString(str) {
      return str.split('').sort().join('');
    }
  
    const anagramMap = new Map();
  
    inputArray.forEach(word => {
      const sortedWord = sortString(word.toLowerCase());
  
      if (anagramMap.has(sortedWord)) {
        anagramMap.get(sortedWord).push(word);
      } else {
        anagramMap.set(sortedWord, [word]);
      }
    });
  
    anagramMap.forEach(anagrams => {
      resultArray.push(anagrams);
    });
  
    return resultArray;
  }
  
  

app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`);
})