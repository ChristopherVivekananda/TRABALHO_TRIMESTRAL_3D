import random
import getpass

print("BEM-VINDO À NOSSA PLATAFORMA")
print("Você pode:")
print("1 - Logar\n2 - Acessar Painel de Usuário\n3 - Ver Simulados\n4 - Pesquisar")

acao = input("O que deseja fazer? (digite o número): ")

if acao == "1" or acao.lower() == "logar":
    print("\nCerto, vamos fazer o login!")
    acao2 = input("Você já tem cadastro? (sim/não): ").lower()
    
    if acao2 == "sim":
        print("\nLOGIN")
        
        while True:
            acao2_1 = input("Digite seu Email: ")
            if "@" in acao2_1 and "." in acao2_1:
                print("Email válido!")
                break
            else:
                print("Email inválido, tente novamente.")
               
        acao231 = getpass.getpass("Digite sua senha: ")
        
        lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        random.shuffle(lista)
        listalimite = lista[0:5]
        print("\nVERIFICAÇÃO DE SEGURANÇA")
        print("Digite os números a seguir, separados por espaço:")
        print(listalimite)
        
        try:
            acao221 = input("Digite os números acima: ")
            entrada = list(map(int, acao221.strip().split()))
            
            if entrada == listalimite:
                print("Login realizado com sucesso!")
                print("Você pode:")
                print("1 - Acessar Painel de Usuário\n2 - Ver Simulados\n3 - Pesquisar")
                
                acao34 = input("O que deseja fazer? (digite o número): ")
                
                if acao34 == "1" or acao34.lower() == "painel":
                    print("\nPAINEL DO USUÁRIO")
                    print("Bem-vindo ao seu Painel de usuário, Manuel!")
                    print("Você fez 7 simulados esse mês")
                    
                    des = input("\nDeseja ver o desempenho? (sim/não): ").lower()
                    if des == "sim":
                        print("\nSEU DESEMPENHO")
                        print("Simulado CNU 10 questões: 50%")
                        print("Simulado CNU 10 questões: 45%")
                        print("Simulado Banco do Brasil 50 questões: Incompleto")
                    
                    acao27838 = input("\nDeseja voltar ao menu? (sim/não): ").lower()
                    if acao27838 == "sim":
                        print("Voltando ao menu principal...")
                
                elif acao34 == "2" or acao34.lower() == "simulados":
                    print("\nSIMULADOS DISPONÍVEIS")
                    print("Simulados disponíveis:")
                    print("CNU - Concurso Nacional Unificado")
                    print("Banco do Brasil - Escriturário")
                    print("ENEM - Exame Nacional do Ensino Médio")
                    print("Concursos Públicos Gerais")
                
                elif acao34 == "3" or acao34.lower() == "pesquisar":
                    print("\nPESQUISA")
                    termo = input("Digite o termo que deseja pesquisar: ")
                    print(f"Buscando por: '{termo}'...")
                    print("Resultados encontrados:")
                    print("Simulado relacionado ao termo")
                    print("Material de estudo disponível")
                
                else:
                    print("Opção inválida!")
            else:
                print("Verificação falhou, tente novamente")
        except ValueError:
            print("Formato inválido! Digite apenas números separados por espaço.")
            
    elif acao2 == "não" or acao2 == "nao":
        print("\nCADASTRO")
        print("Vamos criar um cadastro!")
        
        acao24 = input("Digite seu Nome: ")
        
        while True:
            acao25 = input("Digite seu Email: ")
            if "@" in acao25 and "." in acao25:
                print("Email válido!")
                break
            else:
                print("Email inválido, tente novamente.")
               
        acao26 = input("Digite seu CPF: ")
        
        while True:
            acao261 = getpass.getpass("Digite sua senha: ")
            acao262 = getpass.getpass("Confirme sua senha: ")
            
            if acao261 == acao262:
                print("Senhas coincidem!")
                break
            else:
                print("Senhas não coincidem, tente novamente.")
        
        lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        random.shuffle(lista)
        listalimite = lista[0:5]
        print("\nVERIFICAÇÃO DE SEGURANÇA")
        print("Digite os números a seguir, separados por espaço:")
        print(listalimite)
        
        try:
            acao221 = input("Digite os números acima: ")
            entrada = list(map(int, acao221.strip().split()))
            
            if entrada == listalimite:
                print("Cadastro realizado com sucesso!")
                print("\n" + "="*40)
                print("       MENU PRINCIPAL") 
                print("Você pode:")
                print("1 - Acessar Painel de Usuário\n2 - Ver Simulados\n3 - Pesquisar")
                
                acao34 = input("O que deseja fazer? (digite o número): ")
                
                if acao34 == "1" or acao34.lower() == "painel":
                    print("\nPAINEL DO USUÁRIO")
                    print(f"Bem-vindo ao seu Painel de usuário!")
                    print("Este é seu primeiro acesso - comece fazendo um simulado!")
                
                elif acao34 == "2" or acao34.lower() == "simulados":
                    print("\nSIMULADOS DISPONÍVEIS")
                    print("CNU - Concurso Nacional Unificado")
                    print("Banco do Brasil - Escriturário") 
                    print("ENEM - Exame Nacional do Ensino Médio")
                    print("Concursos Públicos Gerais")
                
                elif acao34 == "3" or acao34.lower() == "pesquisar":
                    print("\nPESQUISA")
                    termo = input("Digite o termo que deseja pesquisar: ")
                    print(f"Buscando por: '{termo}'...")
                    print("Resultados encontrados:")
                    print("Simulado relacionado ao termo")
                    print("Material de estudo disponível")
            else:
                print("Verificação falhou, tente novamente")
        except ValueError:
            print("Formato inválido! Digite apenas números separados por espaço.")
    else:
        print("Resposta inválida! Digite 'sim' ou 'não'")
        
elif acao == "2" or acao.lower() == "painel":
    print("Você precisa fazer login primeiro para acessar o painel!")
    
elif acao == "3" or acao.lower() == "simulados":
    print("Você precisa fazer login primeiro para ver os simulados!")
    
elif acao == "4" or acao.lower() == "pesquisar":
    print("Você precisa fazer login primeiro para pesquisar!")
    
else:
    print("Opção inválida! Digite um número de 1 a 4 ou o nome da ação.")