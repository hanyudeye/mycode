#include <iostream>
using namespace std;

enum yanse
{
    hongse = 1,
    lvse = 2,
    lanse = 3
} color;

int main(int argc, char const *argv[])
{
    color = lvse;

    int i = 3;
    switch (color)
    {
    case hongse:
        cout << "红色" << endl;
        break;
    case lvse:
        cout << "绿色" << endl;
        break;
    default:
        break;
    }

    return 0;
}
