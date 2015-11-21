# download-csv

Download array data as csv file

# Usage 

```
    DownloadCsv(headers, content, fileName, charset);
```

# Example

html

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
	</head>
    <body>
        <div>
            <button onclick="download()">
                download csv
            </button>           
        </div>
    </body>
    <script src="../dist/download-csv.js"></script>
    <script src="./js/example.js"></script>
</html>
```

javascript

```
function download() {
    var headers = ["head-1", "head-2", "head-3"];
    var content = [
        [1, 2, 3],
        ["do", "u", "code"],
        ["csv,vsc", "u,code", "hello,world"],
        ["中文", "逗,号", "示例"]
    ];

    DownloadCsv(headers, content, "example.csv", "utf-8");
}
```

[Example](https://github.com/Dongss/download-csv/blob/master/examples/example.html)