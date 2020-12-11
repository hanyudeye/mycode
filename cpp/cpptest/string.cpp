#include <iostream>
#include <string>
using namespace std;

int main(int argc, char const *argv[])
{
    string str1 = "hello ";
    string str2 = "world";
    string str3 = str1 + str2;

    cout << str3 << endl ;
    cout << "str3 的 长度是" << str3.length() <<endl;
    
    str3.append("cpp is goood");
    cout << "str3 append 后的长度是" << str3.length() <<endl;

    return 0;
}
