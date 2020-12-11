#include <iostream>
#include <unistd.h>
using namespace std;
int main(int argc, char const *argv[])
{
    /* code */

    int i = 0;
    while (i < 5)
    {
        sleep(2);
        cout << i << endl;
        i++;
    }

    return 0;
}
