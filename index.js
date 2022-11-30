/*You are going to write three static methods in the Formatter class.

1)Write a method static capitalize that takes in a string and capitalizes the first letter.
2)Write a method static sanitize that takes in a string and removes all non-alphanumeric characters except for dashes, single quotes and spaces.
3)Write a method static titleize that takes in a string and capitalizes all words in a sentence 
except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.
*/


class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]/g, "");
  }

  static titleize (sentence) {
    const keywords = new Set( ['the','a', 'an', 'but', 'of', 'and', 'for' , 'at' , 'by' , 'from']);
    let finalResult = [];
    sentence.split( " " ).map( (word,index) => {
       if ( index === 0 ) {
         finalResult.push( this.capitalize(word))
        }
       else if( keywords.has(word) ){
         finalResult.push(word)
        }
       else {
          finalResult.push(this.capitalize(word))
        }
    })
    return finalResult.join(" ")
  }
}


/* Another way for titleize (Doesn't always capitalize the first word)
  ✓ is a static method
  ✓ capitalizes all words in a sentence except 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', and 'from'
  X always capitalizes the first word 

  static titleize(sentence){
    return sentence.replace(/\S+/g, string => ({ the : 'the', a: 'a', an: 'an', but:'but', of:'of', and: 'and', for: 'for', at: 'at', by: 'by', from: 'from' }[string] || string[0].toUpperCase() + string.slice(1).toLowerCase()));
  }
*/
