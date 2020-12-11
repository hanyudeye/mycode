#include <iostream>

using namespace std;

int sum(int x, int y)
{
    return x + y;
}

int main(int argc, char const *argv[])
{
    int a = 4, b = 5;
    int c = sum(a, b);
    cout << "函数 sum(4,5) 的返回值是 " << c << endl;

    return 0;
}
