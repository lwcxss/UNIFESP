#include <stdio.h>

#define CHAVE_SIZE 3
#define TABLE_SIZE 26*26*26
#define u_int16 __uint16_t

u_int16 hash ( char c[] ) {
  const u_int16 c1 = (c[0]-65);
  const u_int16 c2 = (c[1]-65)*26;
  const u_int16 c3 = (c[2]-65)*26*26;
  return c1+c2+c3;
}

void init_tabela (char tabela[]) {
  for (int i = 0; i < TABLE_SIZE; i++)
    tabela[i] = '*';
}

void analizarRNA(char RNA[], char tabela[]) {
  int i = 0;
  while (RNA[i] != '\n') {
    u_int16 index = hash(&RNA[i]);
    printf("%i", tabela[index]);
    i += 3;
  } 
  printf("\n");
}

int main () {
  char tabelaHash[TABLE_SIZE];
  char RNA[10000];
  int N;
  int M;

  // DICIONARIO
  scanf("%d", &N);
  init_tabela(tabelaHash);

  for (int i = 0; i < N; i++) {
    char input[6];
    scanf("%s", input);
    
    char chave[3] = {input[0], input[1], input[2]};
    char val = input[4];

    tabelaHash[hash(chave)] = val;
  }

  // RNA
  scanf("%d", &M);
  for (int i = 0; i < M; i++) {
    scanf("%s", RNA);
    analizarRNA(RNA, tabelaHash);
  }
}