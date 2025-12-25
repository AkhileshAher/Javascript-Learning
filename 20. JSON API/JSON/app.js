let jsonRes = '{"fact":"In Siam, the cat was so revered that one rode in a chariot at the head of a parade celebrating the new king.","length":108}';

console.log(jsonRes);

let validRes = JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);

let tostr =JSON.stringify(validRes);
console.log(tostr);