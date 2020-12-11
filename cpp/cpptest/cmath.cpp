#include <iostream>
#include <cmath>
using namespace std;

#define PI 3.1415926
int main(int argc, char const *argv[])
{
    int m_abs = abs(-2);
    double m_sin = sin(30 * PI / 180.0f);

    cout << "abs(-2) is " << m_abs << endl;
    cout << "sin(30*PI/180) is " << m_sin << endl;
    return 0;
}
