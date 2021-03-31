class Calendar{
    constructor(nowDate,inputId){
        this.inputId = inputId;
        this.nowDate = nowDate.split('-');

        const _this = this;
        document.getElementById(_this.inputId).addEventListener('click',function(){
            _this.CalendarOpen();
        });
        
    }
    create(nowDate){
        const _this = this;

        //달력 테이블 만들기
       // _this.today = new Date();
        //_this.Nowmonth = today.getMonth() + 1;

        _this.calendarId = 'calendar' + _this.inputId.slice(-1);

        const div = document.createElement('div');
        div.setAttribute('class','chku_calendar');
        div.setAttribute('id',_this.calendarId);
        document.getElementById(_this.inputId).after(div);

        //const calendarBody = document.getElementById('CalendarBody');

        /*for(i = 0; i<6; i++){
            const $tr = document.createElement('tr');
            calendarBody.appendChild($tr);

            for(j = 0; j<7; j++){
                const $a  = document.createElement('a');
                $a.setAttribute('href','#none');

                const $td = document.createElement('td');
                $tr.appendChild($td);
                $td.appendChild($a);

            }
        }*/

    }//create

    //달력 열기
    CalendarOpen(){
        const _this = this;
        const inputVal = document.getElementById(_this.inputId).value;
        const inputDate = inputVal.split("-");

       //document.getElementById(_this.calendarId).classList.toggle('active');

       
       _this.create(inputVal);
    
    }

}



