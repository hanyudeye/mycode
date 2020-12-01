#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <assert.h>

//打印数组
void printarr(int *arr, int n)
{
  int i;
  for (i = 0; i < n; i++)
  {
    printf("%d\n", arr[i]);
  }
}

//随机排列数组
void randarr(int *arr, int n)
{
  srand(time(NULL));
  int i;
  for (i = 0; i < n; i++)
  {
    //返回0-RAND_MAX 的随机数
    // arr[i] = rand();
    arr[i] = rand() % n;
  }
}

int main(int argc, char const *argv[])
{
  int name[] = {1, 3, 5, 7, 9};
  int arr[5];
  // randarr(arr, 5);
  // printarr(arr, 5);
  return 0;
}

// randarr(arr, n);
