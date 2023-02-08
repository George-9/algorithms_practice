/**
	generates balanced pair of brackets
*/
class Solution {
	generate_brackets(cont = [], str = "", open = 0, close = 0, len = 0) {
		if (str.length == (len * 2)) {
			cont.push(str);
			return;
		}
		if (open < len) this.generate_brackets(cont, str + "(", open + 1, close, len);
		if (close < open) this.generate_brackets(cont, str + ")", open, close + 1, len);
	}
}

let arr = [];
(new Solution()).generate_brackets(arr, "", 0, 0, 3);
console.log(arr);
