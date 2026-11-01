# AreaH — Ferracini

Landing page editorial sobre a história, o processo de fabricação e os estilos de sapatos masculinos.

## Tecnologias

- Next.js com App Router e React Server Components
- TypeScript e Tailwind CSS 4
- `next/image` para imagens responsivas e otimizadas
- Vercel Speed Insights para métricas reais de Web Vitals

O menu resgata a navegação que acompanha a rolagem da versão original, com rolagem suave e atalho para o topo. O vídeo de abertura é carregado após a imagem fallback, inicia sem áudio, oferece controle para pausar e respeita a preferência do sistema por movimento reduzido; se não carregar, a imagem continua visível. Os vídeos editoriais são carregados somente quando solicitados. Os infográficos podem ser arrastados ou percorridos por toque e teclado.

## Desenvolvimento

Requer Node.js 20.9 ou superior e pnpm.

```bash
pnpm install
pnpm dev
```

O site estará disponível em [http://localhost:3300](http://localhost:3300).

## Produção

```bash
pnpm build
pnpm start
```

No deploy, defina `NEXT_PUBLIC_SITE_URL` com a URL pública do projeto para habilitar URLs absolutas de compartilhamento social.

--  
## Especificações da refatoração  
Landing page criada em 2011 orginalmente com HTML 5 / CSS 3 / BootStrap / JQuery

**Stack**
- Next.js com App Router, React 19 e TypeScript.
- Tailwind CSS 4 para os estilos.
- `next/image` para dimensionamento e otimização das imagens.
- Vercel Speed Insights para coleta de métricas reais de Web Vitals após publicação.

**Estrutura e conteúdo**
- A página é pré-renderizada como conteúdo estático, preservando a experiência editorial original.
- Os assets históricos foram mantidos em `public/`; a estrutura antiga de HTML, Bootstrap, jQuery e scripts foi substituída pela implementação React.
- O layout recupera a identidade visual e as seções da página original.

**Interações e responsividade**
- Header fixo acima do conteúdo, menu móvel e navegação desktop exibida após o hero.
- Links de navegação com rolagem suave e easing, além de indicador da seção atual e atalho para o topo.
- Galerias com controles acessíveis e infográficos navegáveis por toque, arraste e teclado.

**Vídeo do hero**
- Usa o vídeo `AfiFxAI5sWs`, com imagem original como fallback, carregamento posterior, reprodução inline e loop.
- Há controles para iniciar e pausar; o vídeo respeita a preferência por movimento reduzido.
- Os vídeos editoriais usam carregamento sob demanda para evitar carregar iframes antes da interação.

**SEO, acessibilidade e operação**
- Metadados para título, descrição, Open Graph, Twitter Cards e robôs de busca; URLs absolutas de compartilhamento podem ser configuradas com `NEXT_PUBLIC_SITE_URL`.
- Estrutura semântica, link para pular ao conteúdo, navegação por teclado, estados acessíveis e alternativas textuais.
- `.gitignore` atualizado para artefatos do Next.js, builds e Vercel.

Essas mudanças seguem boas práticas de SEO, desempenho e acessibilidade, mas não garantem posições específicas no Google nem pontuação determinada no Lighthouse ou Speed Insights. As métricas reais dependem também da hospedagem, do dispositivo, da rede e do carregamento do YouTube.

## Impactos SEO & Performance  
Dados de análise coletados via **Google PageSpeed Insights**.

| Dispositivo | Antes | Depois |
| :--- | :--- | :--- |
| **Mobile** | ![Mobile Antes 1](https://res.cloudinary.com/rhvrqux3/image/upload/v1793496467/print_before_areahOtimization_mobile.jpg)<br><br>![Mobile Antes 2](https://res.cloudinary.com/rhvrqux3/image/upload/v1793496409/print_before_areahOtimization_mobile2.jpg) | ![Mobile Depois 1](https://res.cloudinary.com/rhvrqux3/image/upload/v1793501885/print_after_areahOtimization_mobile.jpg)<br><br>![Mobile Depois 2](https://res.cloudinary.com/rhvrqux3/image/upload/v1793501887/print_after_areahOtimization_mobile2.jpg) |
| **Desktop** | ![Desktop Antes 1](https://res.cloudinary.com/rhvrqux3/image/upload/v1793496409/print_before_areahOtimization_desktop.jpg)<br><br>![Desktop Antes 2](https://res.cloudinary.com/rhvrqux3/image/upload/v1793496409/print_before_areahOtimization_desktop2.jpg) | ![Desktop Depois 1](https://res.cloudinary.com/rhvrqux3/image/upload/v1793496409/print_before_areahOtimization_desktop.jpg)<br><br>![Desktop Depois 2](https://res.cloudinary.com/rhvrqux3/image/upload/v1793501884/print_after_areahOtimization_desktop2.jpg) |