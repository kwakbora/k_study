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
        let chk = 0;

        document.getElementById(_this.inputId).addEventListener('click',function(){
            if( chk === 0){
                _this.CalendarOpen();
                chk = 1;
            }
        });

        
    }
    create(nowDate){
        const _this = this;
        //_this.calendarId = 'calendar' + _this.inputId.slice(-1);

        _this.calendarId = document.getElementById('calendar1');
        
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
		_this.firstDateDay = _this.firstDate.getDay() - 1; //요일출력
		_this.lastDate = new Date(_this.year, _this.month + 1, 0);
		_this.lastDateD = _this.lastDate.getDate();
        _this.d = 1;

        _this.trlength = Math.ceil((_this.lastDateD + _this.firstDateDay) / 7);

        console.log(_this.lastDateD)

        const tbody = document.getElementById('CalendarBody');

        for(var i=0; i <_this.trlength; i++){
            const $tr = document.createElement('tr');
            tbody.appendChild($tr);

          for(var j = 0; j<7; j++){
                const $a  = document.createElement('a');
                $a.setAttribute('href','#none');

                const $td = document.createElement('td');
                const $cell = document.createTextNode(_this.d);

                $tr.appendChild($td);

                const dayDate = new Date(_this.year, _this.month, _this.d),
                      nowDay = dayDate.getDay();

                //주말 컬러체크
                const weekendName = fnWeekend(nowDay);
                $td.setAttribute("class",weekendName);

                
                if(i === 0){
                    if(j >= _this.firstDateDay){
                        $td.appendChild($a);
                        $a.appendChild($cell);
                        _this.d++;
                    }
                }else if(i === _this.trlength - 1){
                    if(_this.d <= _this.lastDateD){
                        $td.appendChild($a);
                        $a.appendChild($cell);
                        _this.d++;
                    }
                }else{
                    $td.appendChild($a);
                    $a.appendChild($cell);
                    _this.d++;
                }

            }
        }


    }//create

    //달력 열기
    CalendarOpen(){

        const _this = this;
        const inputVal = document.getElementById(_this.inputId).value;
        const calenderWrap = document.getElementById('calendar1');
        //const inputDate = inputVal.split("-");

        _this.create(_this.nowDate);


        calenderWrap.style.display = "block"
    
    }
}

function fnWeekend(weekend){
    let weekendName = '';
    if(weekend === 0){
        weekendName = 'sun';
    }
    if(weekend === 6){
        weekendName = 'sat';
    }
    return weekendName;
}



