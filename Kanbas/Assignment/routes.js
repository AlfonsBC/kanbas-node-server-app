import Database from "../Database/index.js";
export default function AssignmentRoutes(app){
    app.post("/api/courses/:cid/assignments", (req,res) => {
        const { cid } = req.params;
        const newAssignment = {
            ...req.body,
            course: cid,
        };
        Database.assignments.push(newAssignment);
        res.send(newAssignment);
    });
    app.get("/api/courses/:cid/assignments", (req,res) => {
        const {cid} =  req.params;
        const assignments = Database.assignments.filter((m) => m.course === cid);
        res.send(assignments);
    });
}