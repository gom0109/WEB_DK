duplicate = false;
	
	function go_focus(input_id){
		if(input_id.defaultValue == input_id.value){
			input_id.value = "";
		}		
	}// go_focus
	
	function idCheck(){
		
		duplicate = true;
		if(document.myform.id.value == "abcd"){
			alert("중복되는 아이디입니다.");
			document.myform.id.value = "";
		}
		else{
			alert("사용 가능한 아이디입니다.");
		}
	}// idCheck()
	
	function check(){
		
		str = "선택한 항목은 \n";
		
		if(duplicate == false){
			alert("중복체크는 필수입니다.");
			return false;
		}
		
		
		//if(document.myform.id.value == ""){
		if(document.myform.id.value.length == 0){
			alert("아이디는 필수입니다.");
			return false;
		}
		
		if(document.myform.password.value==""){
			alert("비밀번호는 필수입니다.");
			document.myform.password.focus();
			return false;
		}
		
		if(document.myform.repassword.value==""){
			alert("비밀번호 재확인은 필수입니다.");
			document.myform.repassword.focus();
			return false;
		}
		
		if(document.myform.password.value != document.myform.repassword.value){
			alert("비밀번호가 일치해야 합니다.");
			document.myform.repassword.select();
			return false;
		}
		if(document.myform.name.value==""){
			alert("이름은 필수입니다.");
			document.myform.name.focus();
			return false;
		}
		// /^\d{3,4}$/
		if(isNaN(document.myform.phone1.value) || document.myform.phone1.value ==""){
			alert("전화번호1는 숫자형식으로 입력하세요.");
			document.myform.phone1.focus();
			return false;
		}
		
		// /^\d{4}$/
		if(isNaN(document.myform.phone2.value) || document.myform.phone2.value ==""){
			alert("전화번호2는 숫자형식으로 입력하세요.");
			document.myform.phone1.focus();
			return false;
		}
		
		// abcd1234q
		if(document.myform.email.value.indexOf('@') == -1){
			alert("email 형식이 아닙니다.");
			return false;
		}
		
		str += document.myform.id.value+"\n";
		str += document.myform.password.value+"\n";
		str += document.myform.areacode.value+"\n";
		str += document.myform.phone1.value+"\n";
		str += document.myform.phone2.value+"\n";
		str += document.myform.address1.value+"\n";
		str += document.myform.address2.value+"\n";
		str += document.myform.email.value+"\n";
		
		
		slen = document.myform.singer.length;
		flag = false;
		for(i=0;i<slen;i++){
			if(myform.singer[i].checked){
				str += myform.singer[i].value+" ";			
				flag = true;
			}
		}
		
		str += '\n';
		if(flag == false){
			alert("singer 최소 하나는 선택해야 합니다.");
			return false;
		}
		
		
		glen = document.myform.gender.length;
		flag = false;
		for(i=0;i<glen;i++){
			if(myform.gender[i].checked == true){
				flag = true;
				str += 	myform.gender[i].value +"\n";			
				break;
			}
		}
		
		if(flag == false){
			alert("gender는 꼭 선택해야 합니다.");
			return false;
		}
		
		str += document.myform.ta.value + "\n";
		
		alert(str);
		
	} // check