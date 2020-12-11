#include <iostream>
#include <fstream>

using namespace std;
int main(int argc, char const *argv[])
{

    // string wel;
    // cin >> wel;

    // // string 只能是连续的字符串，不能用空格隔开，会截断
    // cout << "接收到的数据是  " << wel << endl;


   char data[100];
 
   // 以写模式打开文件
   ofstream outfile;
   outfile.open("afile.dat");
 
   cout << "Writing to the file" << endl;
   cout << "Enter your name: "; 
   cin.getline(data, 100);
   // 向文件写入用户输入的数据
   outfile << data << endl;
 
   cout << "Enter your age: "; 
   cin >> data;
   cin.ignore();
   
   // 再次向文件写入用户输入的数据
   outfile << data << endl;
 
   // 关闭打开的文件
   outfile.close();
 

    return 0;
}
