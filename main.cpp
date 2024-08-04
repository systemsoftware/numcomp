#include <string>
#include <iostream>

using namespace std;

int main(){

cout << "How many numbers do you want to enter? ";

int num;

cin >> num;

double largest = 0.0;
double smallest = 100000000000.0;
double sum = 0.0;
double avg = 0.0;

for(int i = 0; i < num; i++){
double n;
cout << "Enter #" << i+1 << ": ";
cin >> n;
if(n > largest) largest = n;
if(n < smallest) smallest = n;
sum += n;
}

avg = num == 0 ? 0 : sum / num;

cout << "The largest is " << largest << endl;
cout << "The smallest is " << smallest << endl;
cout << "The sum is " << sum << endl;
cout << "The average of is " << avg << endl;

return 0;
}
