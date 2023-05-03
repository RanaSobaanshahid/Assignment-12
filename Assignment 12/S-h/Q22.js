// 22. Write a js program to right rotate an array.

function rotate_elements_right(array)
{
    return [array[1], array[2], array[0]];
}
console.log(rotate_elements_right([3, 4, 5]));  
console.log(rotate_elements_right([0, -1, 2]));  
console.log(rotate_elements_right([7, 6, 5])); 
