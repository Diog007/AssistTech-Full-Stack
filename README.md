# Sobre o projeto 

# 🛠️ AssistTech


A AssistTech é uma API RESTful desenvolvida em Java, utilizando Spring Boot no backend e Angular 17 com standalone no frontend. Seu principal objetivo é permitir a criação de chamados de ordem de serviço, onde é possível selecionar o cliente solicitante, o técnico responsável pelo serviço e a prioridade. Além disso, a plataforma oferece funcionalidades completas de CRUD para o gerenciamento de técnicos e clientes.


##  Compilação
Para gerar os arquivos-fonte, siga o padrão de um projeto Maven: `mvn clean install`.

Aqui estão alguns links úteis para a aplicação local:
- Login: http://localhost:8080/auth/login/
- SignUp: http://localhost:8080/auth/login/register
- tecnicos: http://localhost:8080/tecnicos
- clientes: http://localhost:8080/clientes
---

## 🎯 Funcionalidades
O AssistTech oferece uma variedade de funcionalidades, incluindo:
- Gerenciamento completo de clientes (CRUD);
- Gerenciamento completo de tecnicos (CRUD);
- Gerenciamento completo de chamados (CRUD).


## 🧰 Tecnologias utilizadas
### Back-End
| Tecnologia | Versão |
| --- | --- |
| Java | 17 |
| Spring Boot | 3.0.8 |
| Spring Security | 3.1.0 |
| JPA | 3.1.0 |
| Maven | 3.9.6 |
| jwt | 4.4.0 |
| MySQL | 8.0.37 |


### Front-End
| Tecnologia | Versão |
| --- | --- |
| Angular | 17 |
| Angular Material | 17.3.9 |
| RxJS | 7.8.0 |
| Ngx-mask | 17.0.8 |
| Ngx-toastr | 18.0.0 |
| Auth0 Angular JWT | 5.2.0 |
| TSLib | 2.3.0 |
| Zone.js | 0.14.3 |

### Ferramentas de Desenvolvimento
| Tecnologia | Versão |
| --- | --- |
| TypeScript | 5.4.2 |
| Angular CLI | 17.3.7 |
| Angular Devkit Build Angular | 17.3.7 |


## 📚 Como rodar o Projeto
Existem duas maneiras principais de começar com o Image Lite api:
1. [Baixe o ZIP do projeto](https://github.com/Diog007/AssistTech-Full-Stack/archive/refs/heads/main.zip) e abra-o em uma IDE de sua escolha.
2. Clone o repositório usando o seguinte comando: `https://github.com/Diog007/AssistTech-Full-Stack.git`.
#### Back-End:
- Rodar mvn clean install para instalar as dependências do projeto.
- Rodar mvn spring-boot:run para subir a aplicação.
- A aplicação estará disponível na porta 8080.
#### Front-End:
- Comando no terminal 'npm install' + 'ng serve'.
- O frontend estará disponível no URL http://localhost:3000
---
