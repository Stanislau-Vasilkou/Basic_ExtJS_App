const fs = require('fs');
let users = JSON.parse(fs.readFileSync('./assets/users.json'), 'utf-8');

function setPagingUsers(page, start, limit) {
    start = +start ? start - 1 : +start;
    let end = start + +limit;
    let currentPage = users.slice(start, end);
    return {data: currentPage, totalCount: users.length};
}

exports.getUsers = (req, res) => {
    let page = setPagingUsers(req.query.page, req.query.start, req.query.limit);
    res.send(page);
}

exports.updateUsers = (req, res) => {
    if(req.body.Id) {
        let Id = req.body.Id;
        let index;
        let updates = users.find((el, ind) => {
            index = ind;
            return el.Id === Id;
        });
        for(let key in req.body) {
            if(updates.hasOwnProperty(key)) {
                updates[key] = req.body[key];
            }
        }
        console.log(updates);
        users[index] = updates;
        console.log(users[index]);
     } else {
        users = users.filter((item) => item.Id !== req.body.Id);
        res.sendStatus(200);
    }
}