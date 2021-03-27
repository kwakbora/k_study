const today = new Date();
const Nowmonth = today.getMonth() + 1;

const calendarBody = document.getElementById('calendarBody');

for(i = 0; i<6; i++){
    const $tr = document.createElement('tr');
    calendarBody.appendChild($tr);

    for(j = 0; j<7; j++){
        const $a  = document.createElement('a');
        $a.setAttribute('href','#none');

        const $td = document.createElement('td');
        $tr.appendChild($td);
        $td.appendChild($a);

    }
}

function bulidCalendar(){
    var doMonth = new Date(today.getFullYear(), today.getMonth(),1);

}


