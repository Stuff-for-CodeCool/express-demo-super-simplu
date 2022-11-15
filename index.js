const express = require("express");
const bodyParser = require("body-parser");

//  mari modificari aici
//  facem treburi
//  mari modificari aici



//  Git workflow
//  git checkout -b new_branch
//  ...
//  git add .
//  git commit -m "what i've done"
//  git push origin new_branch
//      new branch published to remote
//  git checkout new_branch
//      downloads branch new_branch
//  git merge new_branch
//      merges new_branch into current branch


const port = 9001;
const app = express()
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .get("/", (request, response) => {
        response.send("merge");
    })
    .get("/api/nume", (req, res) => {
        res.send("il cheama gogu");
    })
    .get("/api/nume/:id", (req, res) => {
        //  citesc de pe server
        const raspuns = {
            mesaj: `il cheama ${req.params.id}`,
        };
        res.json(raspuns);
    })
    .post("/api/nou", (req, res) => {
        //  scriu o chestie noua pe server
        const raspuns = {
            mesaj: "am primit urmatorul 'name': " + req.body.name,
        };

        res.json(raspuns);
    })
    .put("/api/nou", (req, res) => {
        //  modific o chestie deja existenta pe server
        const raspuns = {
            mesaj: "modific urmatorul 'name': " + req.body.name,
        };

        res.json(raspuns);
    })
    .delete("/api/nou", (req, res) => {
        //  sterg o chestie deja existenta
    })
    .listen(port);
