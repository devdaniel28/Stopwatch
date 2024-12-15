# Stopwatch

Este projeto consiste em um **cronômetro simples** escrito em JavaScript. Ele exibe e atualiza o tempo em **horas, minutos e segundos** e oferece funcionalidades para iniciar e pausar a contagem.

## Funcionalidades

- **Iniciar o Cronômetro**: A função `reallyStart` dá início à contagem do tempo, atualizando automaticamente os valores de segundos, minutos e horas.
- **Pausar o Cronômetro**: A função `Pause` permite interromper a contagem sem perder o tempo já registrado.
- **Formatar Valores**: Exibe os valores de horas, minutos e segundos em um formato de dois dígitos (exemplo: 01, 09).

## Como Usar

Para usar o cronômetro, é necessário ter elementos HTML com IDs apropriados e botões para interagir com as funções.

### Estrutura HTML
```html
    <section id="stopwatch">
        <p id="hours">00</p>
            <p> : </p>
        <p id="minutes">00</p>
            <p> : </p>
        <p id="seconds">00</p>
    </section>
    <section id="config">
        <button id="pause" onclick="Pause()">Pausar </button>
        <button id="start" onclick="reallyStart()">Começar</button>
    </section>
```
### Funções JavaScript

1. **`formatTime(value)`**
   
   Esta função formata valores numéricos em strings de dois dígitos:
   ```javascript
   function formatTime(value) {
       return value.toString().padStart(2, '0');
   }
   ```

2. **`Start()`**
   
   A função `Start` é responsável por incrementar os segundos e atualizar minutos e horas quando necessário:
   ```javascript
   function Start() {
       numberforSeconds++;

       if (numberforSeconds == 60) {
           numberforSeconds = 0;
           numberforMinutes++;
       }
       if (numberforMinutes == 60) {
           numberforMinutes = 0;
           numberforHours++;
       }

       Seconds.textContent = formatTime(numberforSeconds);
       Minutes.textContent = formatTime(numberforMinutes);
       Hours.textContent = formatTime(numberforHours);
   }
   ```

3. **`reallyStart()`**

   A função `reallyStart` inicia o cronômetro apenas se ele não estiver já em execução:
   ```javascript
   function reallyStart() {
       if (!intervalId) {
           intervalId = setInterval(Start, 1000);
       }
   }
   ```

4. **`Pause()`**

   A função `Pause` interrompe a contagem do tempo:
   ```javascript
   function Pause() {
       if (intervalId) {
           clearInterval(intervalId);
           intervalId = null;
       }
   }
   ```

## Exemplo de Uso

Ao clicar no botão **Iniciar**, o cronômetro começa a contar:
```
00:00:01
00:00:02
...
00:01:00 (um minuto)
...
01:00:00 (uma hora)
```
Ao clicar em **Pausar**, a contagem é interrompida.

## Tecnologias Utilizadas
- **HTML**: Estrutura da página.
- **CSS**: Estilização dos elementos visuais.
- **JavaScript**: Lógica para controle do cronômetro.

## Melhorias Possíveis
- Adicionar um botão **Resetar** para reiniciar o cronômetro.
- Permitir que o cronômetro conte também para baixo (timer).
- Melhorar o design visual utilizando estilos CSS modernos.
- Adicionar modelos de contagem, como pomodoro

## Licença
Este projeto é licenciado sob a **Licença Pública Geral GNU (GNU GPL)**. Para mais informações, consulte o arquivo [LICENSE](LICENSE) ou acesse [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.html).

---


**Autor:** dvcDaniel(eu)
