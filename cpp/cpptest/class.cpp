#include <iostream>
using namespace std;

class student
{
private:
    /* data */
    string name;
    int age;
    string address;

public:
    student(string name, int age, string address);
    ~student();
    string getname();
};

student ::student(string name, int age, string address)
{
    this->name = name;
    this->age = age;
    this->address = address;
    cout << "对象 student 已经被创建" << endl;
}

student ::~student()
{
    cout << "对象 student 已经被销毁" << endl;
}

string student ::getname()
{
    return this->name;
}
int main(int argc, char const *argv[])
{
    student *s = new student("aming", 33, "江苏无锡");

    cout << "对象的名字是 " << s->getname() << endl;

    return 0;
}
