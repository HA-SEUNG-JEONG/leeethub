/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const sList = s.split('');
    const tList = t.split('');
    console.log(sList,tList)
    
    sList.sort();
    tList.sort();
    
    for(let i=0;i<tList.length;i++){
        if(i===sList.length||tList[i]!==sList[i]) return tList[i];
    }
};