function download() {
    var headers = ["head-1", "head-2", "head-3"];
    var content = [
        [1, 2, 3],
        ["do", "u", "code"],
        ["csv,vsc", "u,code", "hello,world"],
        ["中文", "逗,号", "示例"]
    ];

    DownloadCsv(headers, content, "example.csv");
}