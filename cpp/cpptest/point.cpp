#include <iostream>
using namespace std;
int main(int argc, char const *argv[])
{
    /* code */
    int i = 339;
    int *ip = &i;

    cout << "i 的 point 是 " << ip << endl;
    cout << "i 的 address 是 " << &i << endl;
    cout << "ip 的address 是 " << &ip << endl;
    cout << "=============" << endl;
    cout << "i 的值是 " << i << endl;
    cout << "ip 对应的值是 " << *ip << endl;
    return 0;
}
