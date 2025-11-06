export declare class Colors {
    static readonly RESET = "\u001B[0m";
    static readonly BRIGHT = "\u001B[1m";
    static readonly DIM = "\u001B[2m";
    static readonly UNDERSCORE = "\u001B[4m";
    static readonly BLINK = "\u001B[5m";
    static readonly REVERSE = "\u001B[7m";
    static readonly HIDDEN = "\u001B[8m";
    static readonly BLACK = "\u001B[30m";
    static readonly RED = "\u001B[31m";
    static readonly GREEN = "\u001B[32m";
    static readonly YELLOW = "\u001B[33m";
    static readonly BLUE = "\u001B[34m";
    static readonly MAGENTA = "\u001B[35m";
    static readonly CYAN = "\u001B[36m";
    static readonly WHITE = "\u001B[37m";
    static readonly BGBLACK = "\u001B[40m";
    static readonly BGRED = "\u001B[41m";
    static readonly BGGREEN = "\u001B[42m";
    static readonly BGYELLOW = "\u001B[43m";
    static readonly BGBLUE = "\u001B[44m";
    static readonly BGMAGENTA = "\u001B[45m";
    static readonly BGCYAN = "\u001B[46m";
    static readonly BGWHITE = "\u001B[47m";
    static colorize(text: string, color: string): string;
    static success(text: string): string;
    static error(text: string): string;
    static warning(text: string): string;
    static info(text: string): string;
    static title(text: string): string;
    static highlight(text: string): string;
}
//# sourceMappingURL=%20Colors.d.ts.map