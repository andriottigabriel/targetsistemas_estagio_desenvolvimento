#5) Escreva um programa que inverta os caracteres de um string.

#IMPORTANTE:
#a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

#b) Evite usar funções prontas, como, por exemplo, reverse; 

def inverter_string(string): 
    
    tamanho = len(string) #verifica tamanho da string com len
    
    string_invertida = '' # começa string vazia para armazenar a string invertida

    #loop for que itera de trás para frente pela string original 
    #começando do último caractere até o primeiro, decrementando de -1 em -1
    for i in range(tamanho - 1, -1, -1):
        
        string_invertida += string[i] # concatena cada caractere na posição i na string invertida
   
    return string_invertida  # retorna a string invertida



texto = input("Digite uma string para ser invertida: ") # pede ao usuário que digite uma string

texto_invertido = inverter_string(texto) # Chama a função inverter_string passando a string digitada como argumento

print("String invertida:", texto_invertido) # Imprime a string invertida
