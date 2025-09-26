# Skills Icons

Esta pasta é para armazenar os arquivos SVG das logos das habilidades/tecnologias.

## Como usar:

1. Adicione os arquivos SVG das logos aqui:
   - javascript.svg
   - react.svg
   - firebase.svg
   - python.svg
   - nodejs.svg
   - mongodb.svg

2. Importe no componente React:
   ```tsx
   import JavaScriptIcon from '../assets/icons/skills/javascript.svg'
   
   // Use como:
   <img src={JavaScriptIcon} alt="JavaScript" />
   ```

3. Ou use como componente React (se configurado):
   ```tsx
   import { ReactComponent as JavaScriptIcon } from '../assets/icons/skills/javascript.svg'
   
   // Use como:
   <JavaScriptIcon />
   ```

## Fontes recomendadas para logos SVG:
- https://devicons.github.io/devicon/
- https://simpleicons.org/
- https://iconify.design/
- Sites oficiais de cada tecnologia