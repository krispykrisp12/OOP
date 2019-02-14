// An array of objects
let students = [
  {
    id: 1,
    name: "erica",
    best_shot: "backhand",
    worst_shot: "backhand volley",
    need_work_on: "backhand volley",
    drill: "olympics"
  },
  {
    id: 2,
    name: "camilla",
    best_shot: "forehand approach",
    worst_shot: "serve",
    need_work_on: "overhead and serve",
    drill: "team singles"
  },
  {
    id: 3,
    name: "isabel",
    best_shot: "backhand",
    worst_shot: "serve and volleys",
    need_work_on: "serve and volley",
    drill: "ups and downs"
  },
  {
    id: 4,
    name: "alex m.",
    best_shot: "forehand",
    worst_shot: "backhand volley",
    need_work_on: "backhand volley",
    drill: "king of the court and olympics"
  },
  {
    id: 5,
    name: "alex s.",
    best_shot: "forehand volley",
    worst_shot: "overhead",
    need_work_on: "overhead",
    drill: "match play"
  },
  {
    id: 6,
    name: "zayna",
    best_shot: "backhand",
    worst_shot: "overhead",
    need_work_on: "forehand, overhead, volleys",
    drill: "-------"
  },
  {
    id: 7,
    name: "stone",
    best_shot: "cross court nautral shots",
    worst_shot: "volleys",
    need_work_on: "net game, approach shots, confidence",
    drill: "105"
  },
  {
    id: 8,
    name: "cailyn",
    best_shot: "backhand",
    worst_shot: "volleys",
    need_work_on: "serve and volleys",
    drill: "triples (trangle game)"
  },
  {
    id: 9,
    name: "sebastian",
    best_shot: "forehand",
    worst_shot: "serve",
    need_work_on: "serve",
    drill: "shark tank"
  },
  {
    id: 10,
    name: "jay",
    best_shot: "down the line forehand",
    worst_shot: "backhand",
    need_work_on: "backhand, kick serve",
    drill: "rat race"
  },
  {
    id: 11,
    name: "not found",
    best_shot: "volleys",
    worst_shot: "second serve",
    need_work_on: "second serve",
    drill: "olympics"
  },
  {
    id: 12,
    name: "not found",
    best_shot: "forehand appoach shot",
    worst_shot: "backhand volley",
    need_work_on: "backhand volleys",
    drill: "x drill"
  },
  {
    id: 13,
    name: "not found",
    best_shot: "forehand approach shot",
    worst_shot: "serve",
    need_work_on: "serve",
    drill: "--------"
  }
];
// ========================================

// let row = "<tr>";

for (let i = 0; i < students.length; i++) {
  $("tbody").append(
    `<tr>
    <td>${students[i].name.toUpperCase()}</td>
    <td>${students[i].best_shot.toUpperCase()}</td>
    <td>${students[i].worst_shot.toUpperCase()}</td>
    <td>${students[i].need_work_on.toUpperCase()}</td>
    <td>${students[i].drill.toUpperCase()}</td>
    </tr>`
  );
}
