#include <stdio.h>
#include <string.h>

int main()
{
  
  int a=97;
  char *s="nihao你啊好哦";
  printf("%s\n",s);
  int i,N=5;
  for (i = 0; i < N; ++i) {
    printf("hello\n");
    if(i>2){
      printf("i 大于 2,i 是 %d\n",i);
    }
  }

  int yushu=N % 3;
  printf("余数 %d\n",yushu);


  char *msg="你好,世界";
  //msg 的长度
  unsigned long  msglen=strlen(msg);
  printf("字符串的长度是 %zu\n",msglen);

  char *msg1=msg;
  msg="放屁";
  printf("msg1是 %s\n",msg1);
  printf("msg 是 %s\n",msg);
  return 0;
}
