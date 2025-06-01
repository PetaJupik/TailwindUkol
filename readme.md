# Start - Creative Agency Landing Page

Tento projekt je jednoduchá landing page pro fiktivní kreativní agenturu "Start". Projekt byl vytvořený v rámci školního předmětu Webové aplikace. Stránka je postavena pomocí HTML a stylována pomocí **Tailwind CSS**.

## Struktura projektu

- `src/index.html`: Hlavní HTML soubor s obsahem stránky.
- `src/input.css`: Vstupní soubor pro Tailwind CSS s vlastními styly a direktivami `@apply`.
- `src/output.css`: Vygenerovaný CSS soubor po kompilaci Tailwindu, který se načítá v `index.html`.
- `assets/`: Složka obsahující obrázky a loga použitá na stránce.

## Spuštění projektu

Abyste mohli projekt spustit a správně zobrazit styly, je nutné zkompilovat Tailwind CSS.

1.  **Ujistěte se, že máte nainstalovaný Node.js a npm (nebo yarn).**

2.  **Nainstalujte závislosti projektu.** V kořenovém adresáři projektu (kde se nachází `package.json`, pokud existuje, nebo tam, kde se nachází složka `src`) spusťte v terminálu:

    ```bash
    npm install
    # nebo
    yarn install
    ```

    *(Pokud nemáte `package.json`, možná budete muset nainstalovat Tailwind CSS globálně nebo lokálně pomocí `npx` bez `package.json`. Pro jednoduchost předpokládejme, že `npm install` funguje, nebo použijte následující příkaz pro kompilaci s `npx`.)*

3.  **Zkompilujte Tailwind CSS.** V terminálu, v kořenovém adresáři projektu, spusťte sledování změn a kompilaci:

    ```bash
    npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
    ```

    Tento příkaz spustí proces Tailwindu, který bude sledovat změny v `input.css` a souborech HTML a generovat aktuální `output.css`.

4.  **Otevřete soubor `index.html` v prohlížeči.** Stačí dvakrát kliknout na soubor `src/index.html` nebo jej otevřít přes menu prohlížeče (File > Open). Ujistěte se, že příkaz z kroku 3 stále běží.

## Důležité

- Příkaz pro kompilaci Tailwindu (`npx tailwindcss ... --watch`) musí běžet v terminálu po celou dobu, kdy pracujete na stylech a chcete vidět změny v prohlížeči.
- Pokud měníte HTML nebo přidáváte nové Tailwind utility třídy přímo v HTML, Tailwind v režimu `--watch` by měl tyto změny detekovat a znovu sestavit CSS.
