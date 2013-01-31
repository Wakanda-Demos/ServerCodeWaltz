/* my chicken scratch to build my initial data import files */

function createNameFilesFromCSV() {
    var file = File(getFolder().path + "importData/names.csv");
    var names = loadText(file);
    var lines = names.split("\n");

    var outFile = File(getFolder().path + "importData/henNames.text");
    if (!outFile.exists) {
        outFile.create();
    }
    var stream = TextStream(outFile, "write");
    var results = 0;
    var objRes = {};

    lines.forEach(function(item) {
        var arr = item.split(",");
        var gender = arr[3].replace(/^[\s\"]+|[\s\"]+$/g, '')
        var name = arr[1].replace(/^[\s\"]+|[\s\"]+$/g, '');

        if (gender === "girl" && !objRes.hasOwnProperty(name)) {
            objRes[name] = 1;
            stream.write(name + "\n");
            results++;
        }
    });
    stream.close();
    results; //just returns how many items are in the new file
}

