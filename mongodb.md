# MongoDB Commands
- `show dbs` - shows DBs on the server
- `use <db>` - switch into a DB
- `mongo <IP>` - Connect to the server on that IP
- `db.<Collection>.find.(<query_doc>)` - Find entries that match `query_doc`
  - `query_doc` is written as such:
```
{
      "query1":"value1",
      "query2":"value2",
}
```
  - `query_doc` can also be written like this:
```
{
      "address.zipcode" : "10282",
}
```
    - This can be used to access inner headers of data.
- comparison syntax:
  - < `$lt`
  - <= `$lte`
  - \> `$gt`
  - \>= `$gte`
  - != `$ne`
  - eg. `{"id": {$lt : 400}}`
- boolean ops:
```
{$or : [{"name": "bob"},
        {"id": {$lt:400}
        }]
}
```
- Installing MongoDB on DO:
  - `$ sudo apt update`
  - `$ sudo apt upgrade`
  - `$ sudo apt install mongodb`

- Run this first:
  ```
  $ mongod -v --bind_ip_all --noauth --dbpath <path/to/dir>
  ```
- Then this:
```
$ mongoimport --db <dbname> --collection <collection_nane>  --drop --file <path/to/JSON_import_file>
    -- drop [drop the current db]
```

- Using Mongo using Python:
```
$ pip install pymongo
```
``` python
import pymongo

SERVER_ADDR="149.89.150.100"
connection =pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants
```
