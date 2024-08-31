import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

//const db = new pg.Client({
  //user: "postgres",
  //host: "localhost",
  //database: "YourHR",
  //password: "",
  //port: 5432,
//});
//db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", async (req, res) => {
  const firstName = req.body.firstname;
  const middleName = req.body.middlename;
  const lastName = req.body.lastname;

  const course = req.body.course;
  const jobPreference = req.body.JobPreference;
  const gender = req.body.gender;

  const phone = req.body.phone;
  const address = req.body.address;
  const email = req.body.email;

  //try {
    //db.query(
      //"INSERT INTO yourhr (firstname, middlename, lastname, course, job_preference, gender, contact_number, current_address, email) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)",
      //[
        //firstName,
        //middleName,
        //lastName,
        //course,
        //jobPreference,
        //gender,
        //phone,
        //address,
       // email,
      //]
    //);
  //} catch (error) {
    //console.log(error);
  //}

  res.render("submit.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
