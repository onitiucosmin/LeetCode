class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        std::map<int, int> map;
        for(auto i = 0; i < nums.size(); i++) {
            auto complement = target - nums[i];
            if(map.find(complement) != map.end()){
                return{map[complement],i}; 
            }
            map[nums[i]] = i;
        }
        
        return {0,0};
    }
};