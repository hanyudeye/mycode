#include <ctime>
#include <iostream>

using namespace std;

// time_t nowtime;
// nowtime = time(NULL); //获取日历时间
// //tm *gmtm = gmtime(&now);把 now 转换为 tm 结构
// //dt = asctime(gmtm);  获取utc时间
// char tmp[64];
// strftime(tmp,sizeof(tmp),"%Y-%m-%d %H:%M:%S",localtime(&nowtime));
// `

int main(int argc, char const *argv[])
{

    time_t now = time(NULL);
    tm *gmtm = gmtime(&now);

    //time_t 是时间戳结构 ,是 1970 年到现在的秒数
    cout << now << endl;

    //输出 utc(协调世界时) 时间 ,英国那边的时间
    cout << "utc(协调世界时)是 " << asctime(gmtm) << endl;

    char tmp[64];
    strftime(tmp, sizeof(tmp), "%Y-%m-%d %H:%M:%S", localtime(&now));
    //输出这里的时间
    cout << "这里的时间是 " << tmp << endl;

    return 0;
}
