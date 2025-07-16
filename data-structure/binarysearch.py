def binary_search(list, iten):
    left = 0
    right = len(list) - 1

    while left <= right: #enquanto a esquerda for menor ou igual a direita
        mid = (left + right) // 2 #o meio recebe a soma das pontas dividos por 2
        kick = list[mid] #o chute recebe o array do meio
        if kick == iten:
            return mid #se o chute for igual ao meio (ultimo elementro atribuido), retorna o meio
        elif kick < iten:
            left = mid + 1 #se o chute for menor que o item, a esquerda recebe o meio mais 1 casa
        else:
            right = mid - 1 #se não, a direita recebe o meio menos 1 casa
    return None #retorna vazio

my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

print(binary_search(my_list, 10)) #exemplo que retorna o valor
print(binary_search(my_list, 11)) #exemplo que retorna nulo