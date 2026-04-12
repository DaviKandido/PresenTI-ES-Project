# 🧑‍🎓 PresenTI

## 📌 Sobre o Projeto

O **PresenTI** é uma solução tecnológica voltada para a automatização do processo de chamada em ambientes acadêmicos. Em turmas com grande número de alunos, a verificação manual de presença consome um tempo significativo da aula, reduzindo o tempo disponível para o conteúdo e tornando o processo repetitivo e ineficiente.

Para resolver esse problema, o projeto propõe o uso da tecnologia **Bluetooth Low Energy (BLE)** para registrar automaticamente a presença dos alunos por meio de seus smartphones. A solução utiliza comunicação sem conexão (advertisement), permitindo que dispositivos detectem a presença uns dos outros de forma rápida, eficiente e sem necessidade de infraestrutura adicional.

---

## 🎯 Público-Alvo

* Professores de instituições de ensino superior
* Alunos universitários
* Instituições acadêmicas que buscam modernizar seus processos
* Setores administrativos responsáveis pelo controle de frequência

---

## ⚡ Funcionalidades Principais

* 📡 Registro automático de presença via Bluetooth Low Energy (BLE)
* 📱 Integração entre dispositivos móveis de alunos e professor
* 🔐 Geração e validação de tokens de aula
* 📊 Armazenamento e gerenciamento de presenças no back-end
* 🔄 Comunicação em tempo real entre aplicação e servidor
* 📥 Retorno automático da lista de presença ao professor

---

## 🚀 Diferenciais do PresenTI

* ❌ Não requer hardware adicional (usa apenas smartphones)
* 💰 Baixo custo de implementação
* ⚡ Processo rápido e automatizado
* 🔄 Redução significativa do tempo de chamada
* 📡 Uso eficiente de tecnologia BLE (alta escalabilidade mesmo com muitos dispositivos)
* 🧠 Baseado em estudos científicos e validação experimental

---

## 🏗️ Arquitetura do Projeto

O sistema é baseado em uma arquitetura distribuída envolvendo:

### 📲 Dispositivo do Professor

* Solicita ao back-end a criação da aula
* Recebe um **token único da aula**
* Atua como **emissor (Beacon/Broadcaster)** via BLE

### 📱 Dispositivos dos Alunos

* Operam como **scanners (observers)**
* Capturam o token transmitido
* Enviam confirmação de presença ao back-end junto com seu identificador

### ☁️ Back-end

* Processa os tokens recebidos
* Valida a presença dos alunos
* Armazena os registros da aula
* Retorna a lista consolidada de presenças

### 🗄️ Banco de Dados

* Armazena informações de aulas e presenças
* Permite consultas e relatórios futuros

---

## 📖 Instruções de utilização

*(Será atualizado conforme o desenvolvimento do projeto)*

### Pré-requisitos:

* ambiente backend (a definir)
* Aplicativo mobile (Android/iOS)
* Bluetooth ativado nos dispositivos

### Execução:

1. Clonar o repositório
2. Instalar dependências
3. Executar o back-end
4. Executar o aplicativo mobile
5. Iniciar uma aula pelo app do professor
6. Alunos entram no alcance BLE para registrar presença automaticamente

---

## 📜 Licença

Copyright © 2026 PresenTI. Todos os direitos reservados.

Este projeto está licenciado sob a **Attribution 4.0 International License** — [ver arquivo `LICENSE`](./LICENSE).# PresenTI-ES-Project
# PresenTI-ES-Project
