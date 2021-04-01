class Calendar{
    constructor(nowDate,inputId){

        this.inputId = inputId;
        this.nowDate = nowDate.split('-');
        this.nowDateY = this.nowDate[0];
        this.nowDateM = this.nowDate[1];
        this.nowDateD = this.nowDate[2];
        this.today = new Date(this.nowDateY,this.nowDateM,this.nowDateD);

        this.year = this.today.getFullYear();
		this.month = this.today.getMonth();
		this.nowMonth = this.today.getMonth() + 1;
		this.date = this.today.getDate();
		this.today = new Date(this.year, this.month, this.date);

        this.firstDate = new Date(this.year, this.month, 1);
		this.firstDateDay = this.firstDate.getDay();
		this.lastDate = new Date(this.year, this.month + 1, 0);
		this.lastDate = this.lastDate.getDate();

        const _this = this;
        document.getElementById(_this.inputId).addEventListener('click',function(){
            _this.CalendarOpen();
        });
        
    }
    create(nowDate){
        const _this = this;
        _this.calendarId = 'calendar' + _this.inputId.slice(-1);
        
        if(nowDate !== undefined){
			_this.nowDate = nowDate;
		}

        //달력 테이블 만들기
        //_this.nowDate = _this.nowDate.split('-');
        _this.nowDateY = _this.nowDate[0];
        _this.nowDateM = _this.nowDate[1];
        _this.nowDateD = _this.nowDate[2];
        _this.today = new Date(_this.nowDateY,_this.nowDateM,_this.nowDateD);

        _this.year = _this.today.getFullYear();
		_this.month = _this.today.getMonth();
		_this.nowMonth = _this.today.getMonth() + 1;
		_this.date = _this.today.getDate();
		_this.today = new Date(_this.year, _this.month, _this.date);

        _this.firstDate = new Date(_this.year, _this.month, 1);
		_this.firstDateDay = _this.firstDate.getDay();
		_this.lastDate = new Date(_this.year, _this.month + 1, 0);
		_this.lastDate = _this.lastDate.getDate();


        _this.trlength = Math.ceil((_this.lastDate + _this.firstDateDay) / 7);

        const div = document.createElement('div');
        div.setAttribute('class','chku_calendar');
        div.setAttribute('id',_this.calendarId);
        document.getElementById(_this.inputId).after(div);

        const caledarHeader = document.createElement('div');
        document.getElementById(_this.calendarId).appendChild(caledarHeader);
        caledarHeader.setAttribute('class','chku_mth');
        caledarHeader.innerHTML = '<a href="#" class="calendar-btn-prev-mon">이전</a>' +
        '2020년 12월' + '<a href="#" class="calendar-btn-next-mon">다음</a>';
        
        const table = document.createElement('table');
        document.getElementById(_this.calendarId).appendChild(table);
        table.setAttribute('class','calendar');

        const thead = document.createElement('thead');
        table.appendChild(thead);
        thead.innerHTML = '<tr><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th><th>일</th></tr>';

        const tbody = document.createElement('tbody');
        thead.after(tbody);

       for(i = 0; i <_this.trlength; i++){
            const $tr = document.createElement('tr');
            tbody.appendChild($tr);

           /* for(j = 0; j<7; j++){
                const $a  = document.createElement('a');
                $a.setAttribute('href','#none');

                const $td = document.createElement('td');
                $tr.appendChild($td);
                $td.appendChild($a);

            }*/
        }


    }//create

    //달력 열기
    CalendarOpen(){
        const _this = this;
        const inputVal = document.getElementById(_this.inputId).value;
        //const inputDate = inputVal.split("-");

        if(document.getElementById(_this.calendarId) === null){
            _this.create(inputVal);
        }

       document.getElementById(_this.calendarId).classList.toggle('active');
       
    
    }

}



