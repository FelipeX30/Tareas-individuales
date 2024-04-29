function hacker(cadena) {
    const hackerLanguage = {'a': '4', 'e': '3', 'i': '1', 'o': '0', 's': '5' };
    cadena = cadena.toLowerCase();
    for (let char in hackerLanguage) {
      cadena = cadena.replace(new RegExp(char, 'g'), hackerLanguage[char]);
    }
    return cadena;
  }

  console.log(hacker('Javascript es divertido')); 
  