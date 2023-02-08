import java.util.ArrayList;
import java.util.List;

/**
	generates balanced pair of brackets
*/
/**
 * balanced_brackets
 */
public class Solution {

	public void generate_brackets(List<String> cont, String str, int open, int close, int len) {
		if (str.length() == (len * 2)) {
			cont.add(str);
			return;
		}
		if (open < close)
			generate_brackets(cont, str + "(", open + 1, close, len);
		if (close < open)
			generate_brackets(cont, str + ")", open, close + 1, len);
	}

	public List<String> gen_arr(int len) {
		List<String> arr = new ArrayList<>();
		generate_brackets(arr, "", 0, 0, len);
		return arr;
	}
}

class Main {

	public static void main(String[] args) {
		List<String> arr = (new Solution()).gen_arr(10);
		System.out.println(arr);
	}
}
