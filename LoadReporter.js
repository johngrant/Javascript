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