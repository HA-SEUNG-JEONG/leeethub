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
    
    // tList를 돌면서 sList와 비교
    // 
    for(let i=0;i<tList.length;i++){
        if(tList[i]!==sList[i]) return tList[i];
    }
};