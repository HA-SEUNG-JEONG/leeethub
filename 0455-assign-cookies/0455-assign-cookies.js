/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren=(g, s)=>{
    // g - children
    // s - cookies
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let i=0;
    let j=0;
    let content = 0;
    while(i<g.length && j<s.length){
        if(s[j]>=g[i]){
            content++;
            i++
        }
        j++
    }
    return content;
};
