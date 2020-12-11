#include <iostream>
using namespace std;

int main(int argc, char const *argv[])
{

    // 算术
    int a = 34, b = 53;

    int c = a + b;
    int d = a * b;
    double e = a / b;
    int f = a % b;
    int h = a++;
    int g = ++a;

    cout << "a+b= " << c << endl;
    cout << "a*b= " << d << endl;
    cout << "a/b= " << e << endl;
    cout << "a%b= " << f << endl;
    cout << "a++= " << h << endl;
    cout << "++a= " << g << endl;

    return 0;
}
