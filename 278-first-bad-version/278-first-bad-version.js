/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 0;
        let r = n
     
        while (l <= r){
            let mid = Math.floor((l+r)/2)
            let bad = isBadVersion(mid)
            if(bad) {
                if(!isBadVersion(mid-1)) {
                   return mid
                   } 
                  r = mid - 1;
            } else if (!bad) {
                l = mid +1
            }
        }
    }
};