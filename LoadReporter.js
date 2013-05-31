/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

(function(){
    if(!window.performance || !performance.timing) return;
    var timestamp, first, hstr, L,

    ptA= ['navigationStart', 'unloadEventStart', 'unloadEventEnd', 'redirectStart',
    'redirectEnd', 'fetchStart', 'domainLookupStart', 'domainLookupEnd', 'connectStart',
    'connectEnd', 'secureConnectionStart', 'requestStart', 'responseStart', 'responseEnd',
    'domLoading', 'domInteractive', 'domContentLoadedEventStart',
    'domContentLoadedEventEnd', 'domComplete', 'loadEventStart',
    'loadEventEnd'].map(function(itm){
        timestamp= performance.timing[itm];
        if(isFinite(timestamp) && timestamp!== 0){
            if(!first) first= timestamp;
            return [itm, timestamp, timestamp-first];
        }
        else return [1, NaN];
    }).filter(function(itm){
        return !isNaN(itm[1]);
    });
    ptA= ptA.sort(function(a, b){
        return a[1]-b[1];
    });
//    if(report=== 1) return ptA;
    L= ptA.length-1;
    ptA= ptA.map(function(itm, i){
        if(i> 0 && ptA[i-1][2]!== itm[2]) itm[0]= '//\n'+itm[0];
        if(i=== 0 || i=== L){
            itm[0]= '//\n(timestamp:'+itm[1]+ ')\n'+itm[0];
            itm[2]+= ' milliseconds elapsed \n';
        }
        return itm[0]+'= '+itm[2];
    });
    hstr= '\n'+location.href+'\n'+ new Date().toLocaleString()+'\n';
    return hstr+ptA.join('\n');
})()
/*
Exception: report is not defined
@Scratchpad/1:32
@Scratchpad/1:10
*/
/*
Exception: report is not defined
@Scratchpad/1:32
@Scratchpad/1:10
*/
/*
Exception: report is not defined
@Scratchpad/1:32
@Scratchpad/1:10
*/
/*
Exception: report is not defined
@Scratchpad/1:32
@Scratchpad/1:10
*/
/*

http://blog.mozilla.org/devtools/2011/08/15/introducing-scratchpad/
Friday, May 31, 2013 4:08:49 PM
//
(timestamp:1370030904024)
navigationStart= 0 milliseconds elapsed 

//
fetchStart= 0
domainLookupStart= 0
domainLookupEnd= 0
connectStart= 0
connectEnd= 0
//
requestStart= 9
//
unloadEventStart= 599
responseStart= 599
responseEnd= 599
domLoading= 599
//
unloadEventEnd= 600
//
domInteractive= 1264
//
domContentLoadedEventStart= 1267
//
domContentLoadedEventEnd= 1271
//
domComplete= 3461
loadEventStart= 3461
//
(timestamp:1370030907487)
//
loadEventEnd= 3463 milliseconds elapsed 

*/