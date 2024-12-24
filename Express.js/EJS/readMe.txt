Certainly! I'll reformat the entire page, including the new information you've added. Here's the updated and reformatted version:

**File: d:\Projects\BackendDomination\Express.js\EJS\readMe.txt**
```markdown
# Steps to Use EJS

## 1. Install EJS
Install the EJS package using npm:
```bash
npm i ejs
```

## 2. Set the View Engine
In your Express application, set EJS as the view engine:
```javascript
app.set('view engine', 'ejs');
```

## 3. Create a Views Folder
Create a directory named `views` in your project root.

## 4. Create a View
Create an EJS file in the views folder, for example:
```
views/index.ejs
```

## 5. Load HTML and Render the View
- Load the HTML content in the `index.ejs` file.
- Use `res.render()` instead of `res.send()` to render any page from the views folder.

Example:
```javascript
res.render('index');
```
```



How to handle forms in EJS
1.Whenever we submit a form first check does every field have their respective names 
2. Does the form have action in it.
3. Does the backend have its route.
4. Is the route type right or not.


lastly the data inside the form can only recieved in the following way

GET: req.query
POST : req.body.


