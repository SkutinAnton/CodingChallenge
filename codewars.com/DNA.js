/*
https://www.codewarrrs.com

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" 
for the development and functioning of living organisms.
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with 
one side of the DNA (string, except for Haskell); you need to get the other complementary side. 
DNA strand is never empty or there is no DNA at all (again, except for Haskell).


Examples:
DNAStrand ("ATTGC")  return "TAACG"

DNAStrand ("GTAT")   return "CATA"
*/

function DNAStrand(dna){
  let newStr = "";
  
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      newStr += "T";
    } else if (dna[i] === "T") {
      newStr += "A";
    } else if (dna[i] === "C") {
      newStr += "G";
    } else {
      newStr += "C";
    }
  }
  return newStr;
}