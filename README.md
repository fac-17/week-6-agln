# Glash of the Glans

---

## Team

- Gigi (catMaster24) :cat: 
- Georgia (cruiseVoyager25) :ship: 
- Sarah (glansFromFrance) :fr:
- Gregor (beardedWizard) :sparkles: 

---

## User Journey

A brave warrior enters their name and some personality traits and is returned the name of the glan they belong to. Glans are calculated based upon personality and each has a unique character.

The user feels a sense of accomplishment being grouped with others into a glanourous glan! Hoorah!

---

## Things We Learnt

![](https://i.imgur.com/ptPwdaX.jpg =300x360)

---


- How to build an SQL DB


---


- How to create a new alias within an SQL query

```javascript
const getSum = cb => {
  databaseConnection.query(
    `SELECT glans.glan_name, total.warrior_name FROM glans INNER JOIN (SELECT warrior_name, (warrior_c1 + warrior_c2 + warrior_c3 + 1) AS warrior_total FROM warriors) AS total ON glans.glan_id = total.warrior_total;`
  ),
```

---


- How to return the results in a new table

![](https://i.imgur.com/knyZrIT.png)


---


- Testing the router

---


- How to join two tables based upon the sum
- (C1+C2+C3+1)

![](https://i.imgur.com/vct9VDR.jpg =600x400)



--- 



## Code Snippets



---



Splitter:

![](https://i.imgur.com/1uqQaL2.png)



---

### Handle database queries loop


#### public/fetch.js
```javascript
let getGlan = document.getElementById("getGlan");
getGlan.onclick = function() {
  domRequest("/getGlan");
};
```

#### src/router.js
```javascript
} else if(endpoint.startsWith("/getGlan")) {
    getGlan(req, res);
```

---

#### src/handler.js
```javascript
let getGlan = (req, res) => {
  getData.getSum((error, result) => {
    if (error) {
      console.log("500, Get data error", error);
      res.writeHead(500, "Content-Type:text/html");
      res.end("<h1>Sorry, there was a problem getting the users<h1>");
    } else {
      res.writeHead(200, { "Content-Type": "application:json" });
      res.end(JSON.stringify(result));
    }
  });
};
```

---

### queries/getData.js 
```javascript
const getSum = cb => {
  databaseConnection.query(`SELECT glans.glan_name, total.warrior_name 
FROM glans 
INNER JOIN (SELECT warrior_name, (warrior_c1 + warrior_c2 + warrior_c3 + 1) 
AS warrior_total FROM warriors) 
AS total ON glans.glan_id = total.warrior_total;`, (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};
```

---

![](https://i.imgur.com/HwLXT4B.png)

---

![](https://i.imgur.com/o4Fqxxv.png)

---

![](https://i.imgur.com/XLNPsS7.png)


---

## Problems We Had

---



### Communication

- Understanding what our goals were, what was involved in the project, agreeing on what the project should contain.



--- 



- Understanding Get/Post to the DB
- Did not prevent script injections but looked at FAC16's code and found you can use a $ so that you can use a variable name instead. It was very interesting to learn about.
- Testing the DB



---
