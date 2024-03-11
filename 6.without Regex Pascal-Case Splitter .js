function pascalCaseSplitter (string){
    
    let newStr = '';

    for( i = 0; i < string.length ; i++ ) {
      let strOriginal = string[i];
      let strUpperCase = string[i].toUpperCase();

      if( strOriginal === strUpperCase) {
        newStr = newStr + ' ' + strOriginal;
      } else {
        newStr = newStr + strOriginal;
      }

    }

    console.log(result);
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');
