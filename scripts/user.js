// Agents

const agentsDetails = [
    {
        _name: 'Sibongile',
        _surname: 'Rwayi',
        company: 'LC Properties',
        office: '011 055 8547',
        mobile: '085 678 8097',
        email: 'sibongile@lcproperties.com'
    },
    {
        _name: 'Philani',
        _surname: 'Mxathule',
        company: 'LC Properties',
        office: '021 053 8527',
        mobile: '071 678 3457',
        email: 'philani@lcproperties.com'
    },
    {
        _name: 'Silizwe',
        _surname: 'Pani',
        company: 'LC Properties',
        office: '031 964 2317',
        mobile: '071 250 1122',
        email: 'silizwe@lcproperties.com'
    }
];
const agentBox = document.getElementsByClassName("agent-box")[0];

agentsDetails.forEach((agent, index) => {
    let itemP = document.createElement('p');
    agent - agentBox.appendChild(itemP);
})