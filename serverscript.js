function createTable() {
    var result = {};

    var queryResult = db.Execute('SELECT TOP 1 * FROM sampleTable');
    var row = JSON.parse(queryResult);

    if (row.length > 0 && typeof row[0].Error != 'undefined') {
        db.Execute('CREATE TABLE sampleTable(itemId INTEGER PRIMARY KEY IDENTITY(1,1),  title nvarchar(200), description nvarchar(500), locations nvarchar(200), name nvarchar(100), email nvarchar(100), phone nvarchar(100),);');
        result = '{"status":"tableCreated"}';
    } else
        result = '{"status":"tableExist"}';

    return JSON.stringify(result);
}
function