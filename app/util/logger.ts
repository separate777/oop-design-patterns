function update(logs: Array<string>) {
    const log = document.getElementById("log")
        if (log) {log.innerText = logs.join("\n");}
}
export class Logger {
    private logs: Array<string> = [];
    private static instance: Logger = new Logger();
    public static log(text: string) {
        this.instance.logs.push(text);
        update(this.instance.logs);
    }

}
