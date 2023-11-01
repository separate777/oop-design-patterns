
function update(logs: Array<string>) {
    document.getElementById("log").innerText = logs.join("\n");
}
export class Logger {
    private logs: Array<string> = [];
    private static instance: Logger = new Logger();
    public static log(text: string) {
        this.instance.logs.push(text);
        update(this.instance.logs);
    }

}
