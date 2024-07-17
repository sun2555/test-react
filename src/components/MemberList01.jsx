
import './MemberList.css';

import './MemberList.css';

export function MemberList(){
  return (


    const [name, setName] = useState('');
    const changeName = (e)=>{setName(e.target.value);}
    const [age, setAge] = useState('');
    const changeAge = (e)=>{setName(e.target.value);}
    const [job, setJob] = useState('');
    const changeJob = (e)=>{setName(e.target.value);}

  <>
  <div class="input-container">
    <form id="userForm" >
      <table >
        <tr>
          <td>이름</td>
          <td><input type="text" placeholder="이름" id="nameInput"></td>
          <td rowspan="3"><button id="addBtn">추가</button></td>
        </tr>
        <tr>
          <td>나이</td>
          <td><input type="text" placeholder="나이" id="ageInput"></td>
        </tr>
        <tr>
          <td>직업</td>
          <td><input  type="text" placeholder="직업" id="jobInput"></td>
        </tr>
      </table>
    </form>
  </div>
  <div class="list-container">
    <ul id="userList">
      <!-- <li>홍길동(34세) 무직 <button class="delBtn">삭제</button></li>
      <li>이순신(54세) 군인 <button class="delBtn">삭제</button></li> -->
    </ul>
  </div>
  </>
  );
}