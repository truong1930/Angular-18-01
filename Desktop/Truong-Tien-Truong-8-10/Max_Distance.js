/* Input : [3 5 4 2]

 Output : 2 for the pair (3, 4)

 1.Duyệt mảng
 2.So sánh các vị trí với phần tử cuỗi của mảng a[n] (a[i] < a[n])
 3.Đúng. Đưa ra khoảng cách lớn nhất. (n -i)
 4.Sai. So sánh các phần tử với phần tử có vị trí vị trí n-1.

-   Time Complexity : O(n^2)
-   Auxiliary maxSpace : O(n)
*/
var array = [3, 5, 4, 2];

function maximumSpace(array){
	var check = false;
	var point = array.length - 1;
	var maxSpace = 0;
	if(checkArraySort(array)){
		check = true;
		return -1;
	}
	while(!check){
		for (var i = 0; i < array.length; i++) {
			if(array[i] <= array[point] && i < point && (point - i) > maxSpace){
				check = true;
				maxSpace = point - i ;
				return console.log(maxSpace+" "+ "for the pair ("+array[i]+", "+array[point]+")");
			}
		}
		point = point -1;
	}
	
}
function checkArraySort(input){
	var dem = 0;
	for (var j = 0; j < input.length; j++) {
		if(array[j] > array[j+1] ){
			dem = dem + 1;
		}
	}
	if(dem == input.length -1){
		return true;
	}
	return false;
}

maximumSpace(array);