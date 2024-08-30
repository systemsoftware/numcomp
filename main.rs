use std::io::stdin;

fn main() {

println!("How many numbers do you want to enter?");

let mut n: String = String::new();

stdin().read_line(&mut n).expect("error reading count");

let n: i32 = n.trim().parse().expect("invalid number");

let mut largest = 0;
let mut smallest:i32 = 100000000;
let mut sum = 0;
 
let mut i = 0;
loop {
let mut num = String::new();
if i >= n {
    break;
}

println!("Enter #{}", i+1);
stdin().read_line(&mut num).expect("error reading input");
let num: i32 = num.trim().parse().expect("invalid number");

if num > largest {
    largest = num;
}

if num < smallest {
    smallest = num;
}

sum += num;

i+=1;
}

let avg = sum / n;

println!("The largest is {}", largest);
println!("THe smallest is {}", smallest);
println!("The sum is {}", sum);
println!("The average is {}", avg);

}
