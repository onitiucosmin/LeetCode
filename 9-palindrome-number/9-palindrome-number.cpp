class Solution {
public:
    bool isPalindrome(int x) {
        if(x < 0){
            return false;
        }
        else {
            unsigned int r = 0;
            int compare = x;
            while(x > 0){
                r = r*10 + x%10;
                x = x/10;
            }
            return r == compare;
        }
    }
};